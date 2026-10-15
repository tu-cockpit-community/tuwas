import { spawn, spawnSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import fsp from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import type { CodeTeil, JavaRegeln, JavaTest } from "../typen";
import { vergleicheAusgabe } from "../bewertung";
import { vergleicheFormen, type Form } from "./codedraw";
import type { CodeErgebnis, CompilerMeldung, Regelverstoss, TestErgebnis } from "./ergebnis";
import { erzeugePruefer, importe } from "./pruefer";
import { javaProgramm, klassenName } from "./quelle";

/**
 * Lokaler Java-Runner (Node). Genutzt von POST /api/java/pruefen, vom Validator und von den Tests.
 * Ablauf je Pruefung: Temp-Verzeichnis -> Ep1Kompilierer (javac --release 21 + Regelpruefung per
 * Compiler-Tree-API) -> Ep1Pruefer in einer eigenen JVM unter unshare/prlimit/timeout -> Ergebnis.
 *
 * SHORTCUT: Isolation nur per `unshare -rn` (kein Netz), `prlimit` (Speicher, Prozesse, Dateigroesse),
 * `timeout` und eigenem Temp-Verzeichnis; kein Dateisystem-Sandboxing. Der Code laeuft als der
 * angemeldete Nutzer und koennte dessen Dateien lesen/schreiben. Vertretbar, solange die Plattform nur
 * lokal fuer eine Person laeuft (Bedrohung ist eigener fehlerhafter Code, kein Angreifer).
 * Upgrade-Ausloeser: Betrieb fuer mehrere Personen oder
 * im Netz -> Mount-Namespace (`unshare -rm`, nur Temp-Verzeichnis + JDK sichtbar), bwrap oder Container.
 */

const QUELLEN = path.join(process.cwd(), "lib", "lernen", "java");
const HILFSDATEIEN = ["Ep1Kompilierer.java", "Ep1Lauf.java", "codedraw/CodeDraw.java", "codedraw/Palette.java"];

export const LAUF_JVM = [
  "java",
  "-Xmx128m",
  "-Xss8m",
  "-XX:+UseSerialGC",
  "-XX:TieredStopAtLevel=1",
  "-XX:ActiveProcessorCount=1",
  "-XX:ReservedCodeCacheSize=32m",
  "-XX:MaxMetaspaceSize=96m",
  "-XX:CompressedClassSpaceSize=32m",
  "-XX:-UsePerfData",
  "-Djava.awt.headless=true",
  "-Dfile.encoding=UTF-8",
  "-Dstdout.encoding=UTF-8",
  "-Dstderr.encoding=UTF-8",
];
const KOMPILIER_JVM = ["java", "-Xmx512m", "-XX:+UseSerialGC", "-XX:TieredStopAtLevel=1", "-XX:-UsePerfData", "-Duser.language=de", "-Duser.country=AT"];
/** Ausgabe-Obergrenze je Strom (stdout/stderr) */
const MAX_AUSGABE = 256 * 1024;
/**
 * Ep1Pruefer schreibt je Test eine JSON-Zeile mit Ausgabe (<= 16 KB, escaped bis ~6x) und bis zu 20000
 * CodeDraw-Formen (je ~100 Bytes); 256 KB wuerden die Ergebniszeilen abschneiden.
 */
const MAX_PRUEFER_AUSGABE = 32 * 1024 * 1024;

// ------------------------------------------------------------------ Umgebung

let jdkStatus: { ok: boolean; meldung?: string } | null = null;

/** Ist ein JDK (java + javac) im PATH? Ergebnis wird gecacht. */
export function jdkVerfuegbar(): { ok: boolean; meldung?: string } {
  if (jdkStatus) return jdkStatus;
  const javac = spawnSync("javac", ["-version"], { encoding: "utf8" });
  const java = spawnSync("java", ["-version"], { encoding: "utf8" });
  if (javac.error || javac.status !== 0 || java.error || java.status !== 0)
    jdkStatus = { ok: false, meldung: "Kein JDK gefunden (java/javac). Installieren: sudo apt install openjdk-21-jdk-headless" };
  else {
    const v = /version "?(\d+)/.exec(`${java.stderr}${java.stdout}`)?.[1];
    jdkStatus = v && Number(v) < 21 ? { ok: false, meldung: `JDK ${v} gefunden, gebraucht wird mindestens JDK 21.` } : { ok: true };
  }
  return jdkStatus;
}

let sandboxStatus: boolean | null = null;

/** Funktioniert `unshare -rn` (Benutzer- und Netz-Namespace ohne root)? */
export function sandboxVerfuegbar(): boolean {
  if (sandboxStatus === null) {
    const r = spawnSync("unshare", ["-rn", "prlimit", "--nproc=64", "true"], { encoding: "utf8" });
    sandboxStatus = !r.error && r.status === 0;
  }
  return sandboxStatus;
}

/** Befehl unter Netz-Namespace, Ressourcenlimits und Zeitlimit. */
export function sandbox(befehl: string[], sekunden: number, speicherMb = 1536): string[] {
  return [
    "unshare",
    "-rn",
    "prlimit",
    `--as=${speicherMb * 1024 * 1024}`,
    "--nproc=64",
    `--fsize=${16 * 1024 * 1024}`,
    "--core=0",
    "timeout",
    "-k",
    "1",
    `${sekunden}s`,
    ...befehl,
  ];
}

export interface Prozess {
  code: number | null;
  stdout: string;
  stderr: string;
  /** timeout(1) hat beendet (Exit 124/137) oder die Node-Notbremse hat gegriffen */
  zeitUeberschritten: boolean;
  /** stdout war laenger als erlaubt und wurde abgeschnitten */
  abgeschnitten: boolean;
  ms: number;
}

/**
 * Startet einen Prozess, begrenzt die Ausgabe (je Strom maxAusgabe Bytes) und beendet ihn notfalls selbst.
 * Der Prozess bekommt eine eigene Prozessgruppe; nach seinem Ende (oder bei der Notbremse) wird die ganze
 * Gruppe beendet, damit von ihm gestartete Kindprozesse weder weiterlaufen noch die Pipes offen halten.
 */
export function starte(befehl: string[], opt: { cwd?: string; stdin?: string; timeoutMs: number; maxAusgabe?: number }): Promise<Prozess> {
  return new Promise((resolve) => {
    const t0 = Date.now();
    const max = opt.maxAusgabe ?? MAX_AUSGABE;
    const env: NodeJS.ProcessEnv = { ...process.env, LANG: "C.UTF-8" };
    // fremde JVM-Optionen wuerden Limits aushebeln und "Picked up ..." auf stderr schreiben
    delete env.JAVA_TOOL_OPTIONS;
    delete env._JAVA_OPTIONS;
    delete env.JDK_JAVA_OPTIONS;
    const kind = spawn(befehl[0], befehl.slice(1), { cwd: opt.cwd, stdio: ["pipe", "pipe", "pipe"], env, detached: true });
    const out: Buffer[] = [];
    const err: Buffer[] = [];
    const groesse = { out: 0, err: 0 };
    let notbremse = false;
    const sammle = (ziel: Buffer[], k: "out" | "err") => (b: Buffer) => {
      if (groesse[k] < max) ziel.push(b.subarray(0, max - groesse[k]));
      groesse[k] += b.length;
    };
    kind.stdout.on("data", sammle(out, "out"));
    kind.stderr.on("data", sammle(err, "err"));
    const gruppeBeenden = () => {
      try {
        if (kind.pid) process.kill(-kind.pid, "SIGKILL");
      } catch {
        /* Gruppe schon leer */
      }
    };
    // haelt ein entkommener Prozess (eigene Sitzung) die Pipes trotzdem offen: nicht auf ihn warten
    let nachlauf: NodeJS.Timeout | undefined;
    const pipesSchliessen = () => {
      nachlauf ??= setTimeout(() => {
        kind.stdout.destroy();
        kind.stderr.destroy();
      }, 1000);
    };
    const timer = setTimeout(() => {
      notbremse = true;
      gruppeBeenden();
      pipesSchliessen();
    }, opt.timeoutMs + 3000);
    kind.on("exit", () => {
      gruppeBeenden();
      pipesSchliessen();
    });
    kind.on("error", (e) => {
      clearTimeout(timer);
      clearTimeout(nachlauf);
      resolve({ code: -1, stdout: "", stderr: String(e), zeitUeberschritten: false, abgeschnitten: false, ms: Date.now() - t0 });
    });
    kind.on("close", (code) => {
      clearTimeout(timer);
      clearTimeout(nachlauf);
      resolve({
        code,
        stdout: Buffer.concat(out).toString("utf8"),
        stderr: Buffer.concat(err).toString("utf8"),
        zeitUeberschritten: notbremse || code === 124 || code === 137,
        abgeschnitten: groesse.out > max,
        ms: Date.now() - t0,
      });
    });
    kind.stdin.on("error", () => {});
    kind.stdin.end(opt.stdin ?? "");
  });
}

// ------------------------------------------------------------------ Hilfsklassen (einmal kompiliert, gecacht)

let hilfsPromise: Promise<string> | null = null;

/**
 * ep1.jar mit Ep1Kompilierer, Ep1Lauf und Fake-CodeDraw; neu gebaut, wenn sich die Quellen aendern.
 * Daneben liegt ein AppCDS-Archiv (ep1.jsa), das den Start des Compilers etwa halbiert.
 */
export function hilfsklassen(): Promise<string> {
  hilfsPromise ??= baueHilfsklassen().catch((e) => {
    hilfsPromise = null;
    throw e;
  });
  return hilfsPromise;
}

async function baueHilfsklassen(): Promise<string> {
  // Versionskennung des Cache-Layouts: bei Aenderungen am Bauablauf erhoehen
  const h = crypto.createHash("sha1").update("layout-2");
  for (const f of HILFSDATEIEN) h.update(f).update(await fsp.readFile(path.join(QUELLEN, f)));
  // je Nutzer und nur fuer ihn beschreibbar: ein fremdes, untergeschobenes ep1.jar liefe sonst mit unseren Rechten
  const uid = process.getuid?.();
  const basis = path.join(os.tmpdir(), `ep1-runner-cache-${uid ?? "x"}`);
  await fsp.mkdir(basis, { recursive: true, mode: 0o700 });
  const st = await fsp.lstat(basis);
  if (!st.isDirectory() || (uid !== undefined && st.uid !== uid) || (st.mode & 0o022) !== 0)
    throw new Error(`Cache-Verzeichnis ${basis} gehört nicht diesem Nutzer oder ist für andere beschreibbar.`);
  const ziel = path.join(basis, h.digest("hex").slice(0, 16));
  const jar = path.join(ziel, "ep1.jar");
  if (!fs.existsSync(path.join(ziel, ".fertig"))) {
    const tmp = await fsp.mkdtemp(ziel + "-bau-");
    const klassen = path.join(tmp, "klassen");
    const p = await starte(["javac", "--release", "21", "-encoding", "UTF-8", "-Xlint:none", "-d", klassen, ...HILFSDATEIEN.map((f) => path.join(QUELLEN, f))], { timeoutMs: 60000 });
    const j = p.code === 0 ? await starte(["jar", "cf", path.join(tmp, "ep1.jar"), "-C", klassen, "."], { timeoutMs: 60000 }) : p;
    if (p.code !== 0 || j.code !== 0) {
      await fsp.rm(tmp, { recursive: true, force: true });
      throw new Error(`Hilfsklassen des Java-Runners lassen sich nicht bauen:\n${p.stderr || p.stdout}${j.stderr}`);
    }
    await fsp.rm(klassen, { recursive: true, force: true });
    await fsp.writeFile(path.join(tmp, ".fertig"), "");
    try {
      await fsp.rename(tmp, ziel);
    } catch {
      // ein paralleler Prozess war schneller
      await fsp.rm(tmp, { recursive: true, force: true });
    }
  }
  if (!fs.existsSync(path.join(ziel, "ep1.jsa"))) await erzeugeArchiv(ziel, jar);
  return jar;
}

/** Trainingslauf des Compilers mit -XX:ArchiveClassesAtExit (best effort, ohne Archiv geht es auch). */
async function erzeugeArchiv(ziel: string, jar: string) {
  const dir = await fsp.mkdtemp(path.join(os.tmpdir(), "ep1-cds-"));
  try {
    const quelle = path.join(dir, "T.java");
    await fsp.writeFile(quelle, 'public class T { static boolean f(String s) { for (int i = 0; i < 2; i++) {} return s == "a" || s.equals("b"); } }\n');
    await fsp.writeFile(path.join(dir, "a.txt"), `quelle=${quelle}\nout=${dir}\npruefe=${quelle}\nvorlage=${quelle}\nregel.keineSchleifenIn=f\nregel.erlaubteApi=String.length\nregel.keinStringGleichOperator=1\n`);
    const tmp = path.join(ziel, `ep1.jsa.${process.pid}`);
    await starte([...KOMPILIER_JVM, `-XX:ArchiveClassesAtExit=${tmp}`, "-cp", jar, "Ep1Kompilierer", path.join(dir, "a.txt")], { timeoutMs: 60000 });
    if (fs.existsSync(tmp)) await fsp.rename(tmp, path.join(ziel, "ep1.jsa"));
  } catch {
    /* ohne Archiv nur langsamer */
  } finally {
    await fsp.rm(dir, { recursive: true, force: true });
  }
}

// ------------------------------------------------------------------ Kompilieren + Regeln

export interface KompilierAuftrag {
  quellen: string[];
  out?: string;
  cp?: string;
  /** Datei der Lernenden, auf die die Regeln angewendet werden */
  pruefe?: string;
  vorlage?: string;
  regeln?: JavaRegeln;
}

export interface Diagnose {
  datei: string;
  zeile: number;
  spalte: number;
  meldung: string;
}

export interface KompilierErgebnis {
  ok: boolean;
  diagnosen: Diagnose[];
  regeln: Regelverstoss[];
}

function regelZeilen(r: JavaRegeln | undefined): string[] {
  if (!r) return [];
  return Object.entries(r).flatMap(([k, v]) => {
    if (v === undefined) return [];
    if (Array.isArray(v)) return [`regel.${k}=${v.join(",")}`];
    return [`regel.${k}=${v ? "1" : "0"}`];
  });
}

/** Umkehrung von Ep1Kompilierer.esc in einem Durchgang (sonst wird aus "\\" + "n" ein Zeilenumbruch). */
const zurueck = (s: string) => s.replace(/\\(n|\\)/g, (_, c: string) => (c === "n" ? "\n" : "\\"));

/** Uebersetzt beliebig viele Auftraege in einer JVM (javac --release 21) und prueft Regeln. */
export async function kompiliere(auftraege: KompilierAuftrag[], timeoutMs = 20000): Promise<KompilierErgebnis[]> {
  if (auftraege.length === 0) return [];
  const hilfe = await hilfsklassen();
  const dir = await fsp.mkdtemp(path.join(os.tmpdir(), "ep1-kompilieren-"));
  try {
    const steuer = path.join(dir, "auftraege.txt");
    const text = auftraege
      .map((a) =>
        [
          ...a.quellen.map((q) => `quelle=${q}`),
          a.out ? `out=${a.out}` : null,
          a.cp ? `cp=${a.cp}` : null,
          a.pruefe ? `pruefe=${a.pruefe}` : null,
          a.vorlage ? `vorlage=${a.vorlage}` : null,
          ...regelZeilen(a.regeln),
        ]
          .filter((z): z is string => z !== null)
          .join("\n"),
      )
      .join("\n---\n");
    await fsp.writeFile(steuer, text + "\n");
    const sek = Math.ceil(timeoutMs / 1000);
    const archiv = path.join(path.dirname(hilfe), "ep1.jsa");
    const jvm = [...KOMPILIER_JVM, ...(fs.existsSync(archiv) ? [`-XX:SharedArchiveFile=${archiv}`, "-Xshare:auto"] : []), "-cp", hilfe, "Ep1Kompilierer", steuer];
    const befehl = sandboxVerfuegbar() ? sandbox(jvm, sek, 3072) : ["timeout", "-k", "1", `${sek}s`, ...jvm];
    const p = await starte(befehl, { timeoutMs });
    const erg: KompilierErgebnis[] = auftraege.map(() => ({ ok: false, diagnosen: [], regeln: [] }));
    const fertig = new Set<number>();
    let akt = -1;
    for (const z of p.stdout.split("\n")) {
      const f = z.split("\t");
      if (f[0] === "J") akt = Number(f[1]);
      else if (akt < 0 || !erg[akt]) continue;
      else if (f[0] === "D") erg[akt].diagnosen.push({ datei: f[1], zeile: Number(f[2]), spalte: Number(f[3]), meldung: zurueck(f.slice(4).join("\t")) });
      else if (f[0] === "R") erg[akt].regeln.push({ zeile: Number(f[1]), regel: f[2], meldung: zurueck(f.slice(3).join("\t")) });
      else if (f[0] === "E") {
        erg[akt].ok = f[1] === "ok";
        fertig.add(akt);
      }
    }
    erg.forEach((e, i) => {
      if (!fertig.has(i)) {
        e.ok = false;
        e.diagnosen.push({
          datei: "-",
          zeile: 0,
          spalte: 0,
          meldung: p.zeitUeberschritten ? "Der Compiler hat das Zeitlimit überschritten." : `Der Compiler ist abgebrochen: ${(p.stderr || p.stdout).slice(0, 500)}`,
        });
      }
    });
    return erg;
  } finally {
    await fsp.rm(dir, { recursive: true, force: true });
  }
}

// ------------------------------------------------------------------ Programme ausfuehren (ausgabe/lueckentext im Validator)

export interface ProgrammErgebnis {
  status: "ok" | "compilerfehler" | "timeout" | "exception";
  ausgabe: string;
  fehlerausgabe: string;
  diagnosen: Diagnose[];
  /** Zeilenversatz, falls der Code in main() eingepackt wurde */
  versatz: number;
}

/** Mehrere Programme: ein Compiler-Lauf fuer alle, danach je Programm eine eigene JVM (parallel begrenzt). */
export async function fuehreProgrammeAus(
  programme: { code: string; stdin?: string; ausfuehren?: boolean }[],
  opt: { timeoutMs?: number; parallel?: number } = {},
): Promise<ProgrammErgebnis[]> {
  const hilfe = await hilfsklassen();
  const wurzel = await fsp.mkdtemp(path.join(os.tmpdir(), "ep1-programme-"));
  try {
    const vorbereitet = await Promise.all(
      programme.map(async (p, i) => {
        const prog = javaProgramm(p.code);
        const dir = path.join(wurzel, String(i));
        await fsp.mkdir(path.join(dir, "bin"), { recursive: true });
        const datei = path.join(dir, `${prog.klasse}.java`);
        await fsp.writeFile(datei, prog.quelle);
        return { ...prog, dir, datei };
      }),
    );
    const kompiliert = await kompiliere(
      vorbereitet.map((v) => ({ quellen: [v.datei], out: path.join(v.dir, "bin"), cp: hilfe })),
      Math.max(20000, programme.length * 2000),
    );
    const erg: ProgrammErgebnis[] = new Array(programme.length);
    let naechstes = 0;
    const arbeiter = async () => {
      while (naechstes < programme.length) {
        const i = naechstes++;
        const v = vorbereitet[i];
        const k = kompiliert[i];
        if (!k.ok) {
          erg[i] = { status: "compilerfehler", ausgabe: "", fehlerausgabe: "", diagnosen: k.diagnosen, versatz: v.versatz };
          continue;
        }
        if (programme[i].ausfuehren === false) {
          erg[i] = { status: "ok", ausgabe: "", fehlerausgabe: "", diagnosen: [], versatz: v.versatz };
          continue;
        }
        const ms = opt.timeoutMs ?? 5000;
        const cmd = [...LAUF_JVM, "-cp", `${path.join(v.dir, "bin")}${path.delimiter}${hilfe}`, v.klasse];
        const p = await starte(sandboxVerfuegbar() ? sandbox(cmd, Math.ceil(ms / 1000)) : ["timeout", "-k", "1", `${Math.ceil(ms / 1000)}s`, ...cmd], {
          cwd: v.dir,
          stdin: programme[i].stdin,
          timeoutMs: ms,
        });
        erg[i] = {
          status: p.zeitUeberschritten ? "timeout" : p.code === 0 ? "ok" : "exception",
          ausgabe: p.stdout,
          fehlerausgabe: p.stderr,
          diagnosen: [],
          versatz: v.versatz,
        };
      }
    };
    await Promise.all(Array.from({ length: Math.max(1, opt.parallel ?? 3) }, arbeiter));
    return erg;
  } finally {
    await fsp.rm(wurzel, { recursive: true, force: true });
  }
}

// ------------------------------------------------------------------ code-Aufgaben pruefen

interface Roh {
  nr: number;
  status: string;
  erhalten: string | null;
  erwartet: string | null;
  ausgabe: string | null;
  meldung: string | null;
  ms: number;
  formen: Form[] | null;
}

interface Lauf {
  compiler: CompilerMeldung[];
  regeln: Regelverstoss[];
  kompiliert: boolean;
  roh: (Roh | undefined)[];
  abbruch?: string;
}

const HINWEISE: [RegExp, string][] = [
  [/ArrayIndexOutOfBoundsException/, "Zugriff außerhalb des Arrays: gültig sind nur die Indizes 0 bis length − 1."],
  [/StringIndexOutOfBoundsException/, "Zugriff außerhalb des Strings: gültig sind nur die Indizes 0 bis length() − 1."],
  [/NullPointerException/, "Zugriff über null: eine Variable zeigt auf kein Objekt."],
  [/ArithmeticException: \/ by zero/, "Ganzzahl-Division durch 0."],
  [/OutOfMemoryError/, "Speicher voll: zu große Arrays oder ein endlos wachsender String?"],
  [/NegativeArraySizeException/, "Array mit negativer Länge angelegt."],
  [/NumberFormatException/, "Ein Text ließ sich nicht in eine Zahl umwandeln."],
  [/InputMismatchException/, "Scanner: Die Eingabe passt nicht zum gelesenen Typ (z. B. nextInt bei einem Wort). Vorher mit hasNextInt prüfen?"],
  [/NoSuchElementException/, "Scanner: Es ist keine weitere Eingabe vorhanden."],
  [/ClassCastException/, "Unzulässige Typumwandlung (Cast)."],
];

/** Deutsche, verstaendliche Meldung zu einer Exception aus Ep1Lauf. */
export function laufzeitMeldung(status: string, meldung: string | null): string {
  if (status === "stackoverflow")
    return "StackOverflowError: Die Rekursion hört nicht auf. Basisfall fehlt? Prüfe, ob es einen Fall ohne Selbstaufruf gibt und ob jeder Aufruf ihm näherkommt.";
  const m = meldung ?? "";
  if (status !== "exception") return m;
  const h = HINWEISE.find(([re]) => re.test(m))?.[1];
  return h ? `${h} (${m})` : `Exception: ${m}`;
}

async function laufeTests(teil: CodeTeil, quelltext: string, mitRegeln: boolean): Promise<Lauf> {
  const klasse = klassenName(teil.vorlage) ?? "Loesung";
  const hilfe = await hilfsklassen();
  const dir = await fsp.mkdtemp(path.join(os.tmpdir(), "ep1-runner-"));
  try {
    await fsp.mkdir(path.join(dir, "bin"));
    await fsp.mkdir(path.join(dir, "vorlage"));
    const eigen = path.join(dir, `${klasse}.java`);
    const pruefer = erzeugePruefer(klasse, teil.tests, teil.zeitlimit ?? 2000, importe(teil.vorlage));
    await fsp.writeFile(eigen, quelltext);
    await fsp.writeFile(path.join(dir, "Ep1Pruefer.java"), pruefer.quelle);
    await fsp.writeFile(path.join(dir, "vorlage", `${klasse}.java`), teil.vorlage);
    const [k] = await kompiliere(
      [
        {
          quellen: [eigen, path.join(dir, "Ep1Pruefer.java")],
          out: path.join(dir, "bin"),
          cp: hilfe,
          pruefe: mitRegeln ? eigen : undefined,
          vorlage: mitRegeln ? path.join(dir, "vorlage", `${klasse}.java`) : undefined,
          regeln: mitRegeln ? teil.regeln : undefined,
        },
      ],
      15000,
    );
    const eigeneFehler = k.diagnosen.filter((d) => d.datei === `${klasse}.java`);
    const compiler: CompilerMeldung[] = (eigeneFehler.length ? eigeneFehler : k.diagnosen).map((d) => {
      if (d.datei === "Ep1Pruefer.java") {
        const nr = pruefer.testZeile.get(d.zeile);
        const t = nr === undefined ? undefined : teil.tests[nr];
        const was = t ? `Test ${nr! + 1}${t.versteckt ? "" : ` (${t.aufruf ?? "main"})`}` : "Der Testrahmen";
        return {
          zeile: 0,
          spalte: 0,
          ort: "tests",
          meldung: `${was} lässt sich mit deinem Code nicht übersetzen. Hast du Name, Parameter oder Rückgabetyp einer Methode verändert? Compiler: ${d.meldung.split("\n")[0]}`,
        };
      }
      return { zeile: d.zeile, spalte: d.spalte, ort: "eigen", meldung: d.meldung };
    });
    if (!k.ok) return { compiler, regeln: k.regeln, kompiliert: false, roh: [] };

    const limit = teil.zeitlimit ?? 2000;
    const sek = Math.min(30, Math.ceil((teil.tests.length * limit) / 1000) + 3);
    const cmd = [...LAUF_JVM, "-cp", `${path.join(dir, "bin")}${path.delimiter}${hilfe}`, "Ep1Pruefer"];
    if (!sandboxVerfuegbar()) throw new Error("Sandbox nicht verfügbar: `unshare -rn` funktioniert auf diesem System nicht.");
    const p = await starte(sandbox(cmd, sek), { cwd: dir, timeoutMs: sek * 1000, maxAusgabe: MAX_PRUEFER_AUSGABE });
    const roh: (Roh | undefined)[] = teil.tests.map(() => undefined);
    for (const z of p.stdout.split("\n")) {
      // nicht nur am Zeilenanfang: ein Thread der Lernenden kann zwischen zwei Tests ohne Zeilenumbruch
      // auf den echten stdout geschrieben haben
      const k = z.indexOf("\u0001EP1 ");
      if (k < 0) continue;
      try {
        const r = JSON.parse(z.slice(k + 5)) as Roh;
        if (Number.isInteger(r.nr) && r.nr >= 0 && r.nr < roh.length) roh[r.nr] = r;
      } catch {
        /* abgeschnittene Zeile: Test gilt als nicht gelaufen */
      }
    }
    let abbruch: string | undefined;
    if (roh.some((r) => !r)) {
      if (p.zeitUeberschritten) abbruch = "Das Gesamtzeitlimit wurde überschritten.";
      else if (p.abgeschnitten) abbruch = "Die Ausgabe war zu groß (zu viele Formen oder Endlosausgabe?).";
      else if (/OutOfMemoryError|insufficient memory|Cannot allocate/i.test(p.stderr)) abbruch = "Der Speicher war voll (zu große Arrays?).";
      else if (p.code !== 0) abbruch = `Das Programm wurde vorzeitig beendet (Exit-Code ${p.code}). ${p.stderr.split("\n")[0] ?? ""}`.trim();
      else abbruch = "Das Programm hat sich vorzeitig beendet (System.exit aufgerufen?).";
    }
    return { compiler: [], regeln: k.regeln, kompiliert: true, roh, abbruch };
  } finally {
    await fsp.rm(dir, { recursive: true, force: true });
  }
}

const referenzCache = new Map<string, Promise<(Form[] | null)[]>>();

/** Formen der Musterloesung je Test (fuer zeichnung-Tests), gecacht je Musterloesung. */
function referenzFormen(teil: CodeTeil): Promise<(Form[] | null)[]> {
  const schluessel = crypto.createHash("sha1").update(teil.musterloesung).update(JSON.stringify(teil.tests)).digest("hex");
  let p = referenzCache.get(schluessel);
  if (!p) {
    p = laufeTests(teil, teil.musterloesung, false).then((l) => {
      if (!l.kompiliert) throw new Error("Musterlösung kompiliert nicht");
      return l.roh.map((r) => r?.formen ?? null);
    });
    p.catch(() => referenzCache.delete(schluessel));
    referenzCache.set(schluessel, p);
  }
  return p;
}

function bewerte(t: JavaTest, nr: number, r: Roh | undefined, soll: Form[] | null | undefined, abbruch?: string): TestErgebnis {
  const basis: TestErgebnis = { nr, beschreibung: t.beschreibung, versteckt: t.versteckt, bestanden: false, status: r?.status ?? "abbruch", aufruf: t.aufruf ?? (t.stdin !== undefined ? "main (mit Eingabe)" : "main") };
  if (!r) return { ...basis, meldung: abbruch ?? "Nicht ausgeführt." };
  const e: TestErgebnis = {
    ...basis,
    erhalten: r.erhalten ?? undefined,
    erwartet: r.erwartet ?? undefined,
    ausgabe: r.ausgabe || undefined,
    ausgabeErwartet: t.stdout,
    ms: r.ms,
    formen: r.formen ?? undefined,
    formenSoll: soll ?? undefined,
  };
  if (r.status !== "ok" && r.status !== "falsch") return { ...e, meldung: laufzeitMeldung(r.status, r.meldung) };
  const meldungen: string[] = [];
  let ok = r.status === "ok";
  if (r.status === "falsch") meldungen.push("Falscher Rückgabewert.");
  if (t.stdout !== undefined) {
    const v = vergleicheAusgabe(r.ausgabe ?? "", t.stdout, { whitespace: t.whitespace });
    if (!v.ok) {
      ok = false;
      meldungen.push(v.meldung ? `Ausgabe: ${v.meldung}` : "Die Ausgabe stimmt nicht.");
    }
  }
  if (t.zeichnung) {
    const v = vergleicheFormen(r.formen ?? [], soll ?? [], { reihenfolge: t.reihenfolge });
    if (!v.ok) {
      ok = false;
      const teile = [];
      if (v.fehlend.length) teile.push(`${v.fehlend.length} Form${v.fehlend.length === 1 ? "" : "en"} fehlen oder liegen anders`);
      if (v.zuViel.length) teile.push(`${v.zuViel.length} Form${v.zuViel.length === 1 ? "" : "en"} zu viel`);
      if (v.ersteAbweichung !== undefined) teile.push(`erste Abweichung bei Form ${v.ersteAbweichung + 1} (Reihenfolge zählt)`);
      meldungen.push(`Zeichnung: ${teile.join(", ")}.`);
    }
  }
  return { ...e, bestanden: ok, meldung: meldungen.join(" ") || undefined };
}

/**
 * Prueft Quelltext gegen eine code-Aufgabe: Kompilieren, Regeln, alle Tests, bei zeichnung-Tests Vergleich
 * mit den Formen der Musterloesung. Wirft nur bei Problemen des Runners selbst (JDK/Sandbox fehlen).
 */
export async function pruefeCode(teil: CodeTeil, quelltext: string): Promise<CodeErgebnis> {
  const t0 = Date.now();
  const jdk = jdkVerfuegbar();
  if (!jdk.ok) return { status: "fehler", meldung: jdk.meldung, compiler: [], regeln: [], tests: [], ms: 0 };
  const [lauf, soll] = await Promise.all([
    laufeTests(teil, quelltext, true),
    teil.tests.some((t) => t.zeichnung) ? referenzFormen(teil) : Promise.resolve(null),
  ]);
  if (!lauf.kompiliert) return { status: "compilerfehler", compiler: lauf.compiler, regeln: lauf.regeln, tests: [], ms: Date.now() - t0 };
  const tests = teil.tests.map((t, i) => bewerte(t, i, lauf.roh[i], soll?.[i], lauf.abbruch));
  const ok = tests.every((t) => t.bestanden) && lauf.regeln.length === 0;
  return { status: ok ? "ok" : "tests", compiler: [], regeln: lauf.regeln, tests, ms: Date.now() - t0 };
}

/** Was der Browser vom Ergebnis sehen darf: bei verborgenen Tests nur bestanden/nicht bestanden. */
export function ergebnisFuerClient(e: CodeErgebnis): CodeErgebnis {
  return {
    ...e,
    tests: e.tests.map((t) =>
      t.versteckt
        ? { nr: t.nr, beschreibung: t.beschreibung, versteckt: true, bestanden: t.bestanden, status: t.status, ms: t.ms, meldung: t.bestanden ? undefined : t.status === "falsch" || t.status === "ok" ? "Verborgener Test nicht bestanden." : t.meldung }
        : t,
    ),
  };
}
