import { drill, type Drill, type Rng } from "@/lib/lernen/training";

const K = "verzweigungen";

/** Codezeilen zu einem Java-Ausschnitt verbinden (landet beim Pruefen in main). */
const code = (...zeilen: string[]) => zeilen.join("\n");

/** Ausgabe-Zeilen wie println sie erzeugt (ohne abschliessenden Zeilenumbruch). */
const aus = (zeilen: (string | number | boolean)[]) => zeilen.map(String).join("\n");

/** Zeichen fuer Markdown-Inline-Code */
const ic = (s: string) => "`" + s + "`";

// ------------------------------------------------------------------ Startwert-Schablonen (Quiz 1, Frage 3)

interface Schablone {
  /** Java-Code ohne die Startwert-Zeile */
  code: string;
  /** Ausgabe in TS nachgerechnet (Java-Semantik: nur int-Vergleiche und Addition kleiner Zahlen) */
  lauf: (x: number, y: number, z: number) => string;
  /** Zusicherungen je Buchstabe, fuer den Loesungsweg */
  zusicherungen: Record<string, string>;
}

const SCHABLONEN: Schablone[] = [
  {
    code: code(
      'String s = "";',
      "if (x < y) {",
      "    if (x + y < z) {",
      '        s += "A";',
      "    } else {",
      '        s += "B";',
      "    }",
      "}",
      "if (z < 3 * y) {",
      '    s += "C";',
      "} else {",
      '    s += "D";',
      "}",
      "System.out.println(s);",
    ),
    lauf: (x, y, z) => {
      let s = "";
      if (x < y) s += x + y < z ? "A" : "B";
      s += z < 3 * y ? "C" : "D";
      return s;
    },
    zusicherungen: { A: "x < y && x + y < z", B: "x < y && x + y >= z", C: "z < 3 * y", D: "z >= 3 * y" },
  },
  {
    code: code(
      'String s = "";',
      "if (x < y) {",
      "    if (x + y < z) {",
      '        s += "A";',
      "    }",
      "} else {",
      '    s += "B";',
      "}",
      "if (z < 3 * y) {",
      '    s += "C";',
      "} else {",
      '    s += "D";',
      "}",
      "System.out.println(s);",
    ),
    lauf: (x, y, z) => {
      let s = "";
      if (x < y) {
        if (x + y < z) s += "A";
      } else s += "B";
      s += z < 3 * y ? "C" : "D";
      return s;
    },
    zusicherungen: { A: "x < y && x + y < z", B: "x >= y", C: "z < 3 * y", D: "z >= 3 * y" },
  },
  {
    code: code(
      'String s = "";',
      "if (x > y) {",
      "    if (x - y > z) {",
      '        s += "A";',
      "    } else {",
      '        s += "B";',
      "    }",
      "}",
      "if (z > 2 * x) {",
      '    s += "C";',
      "} else {",
      '    s += "D";',
      "}",
      "System.out.println(s);",
    ),
    lauf: (x, y, z) => {
      let s = "";
      if (x > y) s += x - y > z ? "A" : "B";
      s += z > 2 * x ? "C" : "D";
      return s;
    },
    zusicherungen: { A: "x > y && x - y > z", B: "x > y && x - y <= z", C: "z > 2 * x", D: "z <= 2 * x" },
  },
];

const tripel = (r: Rng): [number, number, number] => [r.int(-12, 15), r.int(-12, 15), r.int(-15, 30)];

function zusicherungsText(s: Schablone, ausgabe: string): string {
  return [...ausgabe].map((b) => `${ic(b)}: ${ic(s.zusicherungen[b])}`).join(", ");
}

// ------------------------------------------------------------------ switch-Hilfen

interface Fall {
  marke: string; // "case 2" oder "default"
  text: string;
  brk: boolean;
}

/** fuehrt einen klassischen switch mit Fallthrough aus; liefert die angehaengten Texte */
function switchLauf(faelle: Fall[], wert: number): string[] {
  let start = faelle.findIndex((f) => f.marke === `case ${wert}`);
  if (start < 0) start = faelle.findIndex((f) => f.marke === "default");
  const out: string[] = [];
  if (start < 0) return out;
  for (let i = start; i < faelle.length; i++) {
    out.push(faelle[i].text);
    if (faelle[i].brk) break;
  }
  return out;
}

function switchCode(sel: string, faelle: Fall[]): string[] {
  const z = [`switch (${sel}) {`];
  for (const f of faelle) {
    z.push(`    ${f.marke}:`);
    z.push(`        s += "${f.text}";`);
    if (f.brk) z.push("        break;");
  }
  z.push("}");
  return z;
}

// ------------------------------------------------------------------ Generatoren

export const DRILLS: Drill[] = [
  drill({
    id: "vz-d-if-else",
    kapitel: K,
    titel: "if mit else: Ausgabe herleiten",
    niveau: 1,
    erzeuge: (r) => {
      const t = r.int(-5, 35);
      const g = r.int(15, 25);
      const op = r.wahl([">=", ">"] as const);
      const wahr = op === ">=" ? t >= g : t > g;
      const zeilen = [wahr ? "warm" : "kalt", `Temperatur: ${t}`];
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code: code(
              `int t = ${t};`,
              `if (t ${op} ${g}) {`,
              '    System.out.println("warm");',
              "} else {",
              '    System.out.println("kalt");',
              "}",
              'System.out.println("Temperatur: " + t);',
            ),
            loesung: aus(zeilen),
            fehler: [{ wert: aus([wahr ? "kalt" : "warm", `Temperatur: ${t}`]), meldung: `Rechne die Bedingung ${ic(`${t} ${op} ${g}`)} noch einmal genau aus. Achte darauf, ob die Grenze eingeschlossen ist.` }],
          },
        ],
        hinweis: "Setze den Wert von t in die Bedingung ein. Bei true läuft der erste Block, sonst der else-Block. Die letzte Zeile läuft immer.",
        loesung: `**Ansatz:** Bedingung auswerten, genau einen Block ausführen, danach die letzte Zeile.\n---\n${ic(`${t} ${op} ${g}`)} ist ${ic(String(wahr))}, also erscheint ${ic(zeilen[0])}.\n---\nDie letzte Zeile steht nach der Verzweigung und gibt ${ic(zeilen[1])} aus.`,
      };
    },
  }),
  drill({
    id: "vz-d-kette",
    kapitel: K,
    titel: "else-if-Kette: Notenschlüssel",
    niveau: 1,
    erzeuge: (r) => {
      const p = r.int(40, 100);
      const note = p >= 92 ? "Sehr gut" : p >= 83 ? "Gut" : p >= 74 ? "Befriedigend" : p >= 65 ? "Genügend" : "Nicht genügend";
      return {
        angabe: `Was gibt das Programm für ${ic(`punkte = ${p}`)} aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: code(
              `int punkte = ${p};`,
              "if (punkte >= 92) {",
              '    System.out.println("Sehr gut");',
              "} else if (punkte >= 83) {",
              '    System.out.println("Gut");',
              "} else if (punkte >= 74) {",
              '    System.out.println("Befriedigend");',
              "} else if (punkte >= 65) {",
              '    System.out.println("Genügend");',
              "} else {",
              '    System.out.println("Nicht genügend");',
              "}",
            ),
            loesung: note,
          },
        ],
        hinweis: "Prüfe die Bedingungen von oben nach unten und hör beim ersten true auf.",
        loesung: `**Ansatz:** Von oben nach unten prüfen, beim ersten ${ic("true")} stoppen.\n---\nDie erste wahre Bedingung führt zu ${ic(note)}. Alle Bedingungen darunter prüft Java nicht mehr.`,
      };
    },
  }),
  drill({
    id: "vz-d-logik",
    kapitel: K,
    titel: "UND, ODER, NICHT auswerten",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(-5, 15);
      const b = r.int(-5, 15);
      const g = r.int(3, 12);
      const e1 = a < b && b < g;
      const e2 = a > g || b % 2 === 0;
      const e3 = !(a === b);
      const e4 = a >= 0 && a <= 10;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code: code(
              `int a = ${a};`,
              `int b = ${b};`,
              `System.out.println(a < b && b < ${g});`,
              `System.out.println(a > ${g} || b % 2 == 0);`,
              "System.out.println(!(a == b));",
              "System.out.println(a >= 0 && a <= 10);",
            ),
            loesung: aus([e1, e2, e3, e4]),
          },
        ],
        hinweis: "Werte jeden Vergleich einzeln aus. && ist nur wahr, wenn beide Seiten wahr sind, || schon bei einer wahren Seite.",
        loesung: `**Ansatz:** Jeden Vergleich auswerten, dann verknüpfen.\n---\nZeile 3: ${ic(String(a < b))} && ${ic(String(b < g))} ergibt ${ic(String(e1))}. Zeile 4: ${ic(String(a > g))} || ${ic(String(b % 2 === 0))} ergibt ${ic(String(e2))}.\n---\nZeile 5: ${ic(`a == b`)} ist ${ic(String(a === b))}, verneint ${ic(String(e3))}. Zeile 6 prüft den Bereich 0 bis 10: ${ic(String(e4))}.`,
      };
    },
  }),
  drill({
    id: "vz-d-vorrang",
    kapitel: K,
    titel: "Vorrang von && vor ||",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.zufall() < 0.5;
      const q = r.zufall() < 0.5;
      const w = r.zufall() < 0.5;
      const e1 = p || (q && w);
      const e2 = (p || q) && w;
      const e3 = (!p && q) || w;
      return {
        angabe: "Was gibt das Programm aus? Denke an den Vorrang der Operatoren.",
        teile: [
          {
            typ: "ausgabe",
            code: code(
              `boolean p = ${p};`,
              `boolean q = ${q};`,
              `boolean w = ${w};`,
              "System.out.println(p || q && w);",
              "System.out.println((p || q) && w);",
              "System.out.println(!p && q || w);",
            ),
            loesung: aus([e1, e2, e3]),
            fehler: e1 !== ((p || q) && w) ? [{ wert: aus([(p || q) && w, e2, e3]), meldung: "In Zeile 4 bindet && stärker als ||. Java rechnet p || (q && w)." }] : undefined,
          },
        ],
        hinweis: "Setze Klammern nach dem Vorrang: zuerst !, dann &&, dann ||.",
        loesung: `**Ansatz:** Klammern nach dem Vorrang setzen.\n---\nZeile 4: ${ic("p || (q && w)")} ergibt ${ic(String(e1))}. Zeile 5: ${ic("(p || q) && w")} ergibt ${ic(String(e2))}.\n---\nZeile 6: ${ic("((!p) && q) || w")} ergibt ${ic(String(e3))}.`,
      };
    },
  }),
  drill({
    id: "vz-d-kurzschluss",
    kapitel: K,
    titel: "Kurzschlussauswertung mit Zähler",
    niveau: 2,
    erzeuge: (r) => {
      const x = r.int(0, 10);
      const t1 = r.int(0, 10);
      const t2 = r.int(0, 10);
      const t3 = r.int(0, 10);
      let z = 0;
      const lauf: string[] = [];
      // Zeile 1: x > t1 && z++ >= 0
      let e1 = false;
      if (x > t1) {
        e1 = z >= 0;
        z++;
        lauf.push(`Zeile 3: ${ic(`${x} > ${t1}`)} ist wahr, die rechte Seite läuft, ${ic("z")} wird ${z}.`);
      } else lauf.push(`Zeile 3: ${ic(`${x} > ${t1}`)} ist falsch, die rechte Seite wird übersprungen.`);
      // Zeile 2: x < t2 || z++ > 0
      let e2 = true;
      if (x < t2) lauf.push(`Zeile 4: ${ic(`${x} < ${t2}`)} ist wahr, bei || wird die rechte Seite übersprungen.`);
      else {
        e2 = z > 0;
        z++;
        lauf.push(`Zeile 4: ${ic(`${x} < ${t2}`)} ist falsch, die rechte Seite läuft, ${ic("z")} wird ${z}.`);
      }
      // Zeile 3: x == t3 && z++ > 1
      let e3 = false;
      if (x === t3) {
        e3 = z > 1;
        z++;
        lauf.push(`Zeile 5: ${ic(`${x} == ${t3}`)} ist wahr, die rechte Seite läuft, ${ic("z")} wird ${z}.`);
      } else lauf.push(`Zeile 5: ${ic(`${x} == ${t3}`)} ist falsch, die rechte Seite wird übersprungen.`);
      return {
        angabe: `${ic("z++")} verwendet den alten Wert von ${ic("z")} und erhöht ihn danach um 1. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: code(
              `int x = ${x};`,
              "int z = 0;",
              `boolean e1 = x > ${t1} && z++ >= 0;`,
              `boolean e2 = x < ${t2} || z++ > 0;`,
              `boolean e3 = x == ${t3} && z++ > 1;`,
              "System.out.println(z);",
              'System.out.println(e1 + " " + e2 + " " + e3);',
            ),
            loesung: aus([z, `${e1} ${e2} ${e3}`]),
            fehler: z !== 3 ? [{ wert: aus([3, `${e1} ${e2} ${e3}`]), meldung: "Nicht jedes z++ wird ausgeführt. Bei && mit falscher linker Seite und bei || mit wahrer linker Seite fällt die rechte Seite weg." }] : undefined,
          },
        ],
        hinweis: "Prüfe für jede Zeile, ob das Ergebnis schon nach der linken Seite feststeht. Nur sonst läuft z++.",
        loesung: `**Ansatz:** Zeile für Zeile entscheiden, ob die rechte Seite ausgewertet wird.\n---\n${lauf.join(" ")}\n---\nAm Ende ist ${ic(`z = ${z}`)}, und die drei Werte sind ${ic(`${e1} ${e2} ${e3}`)}.`,
      };
    },
  }),
  drill({
    id: "vz-d-startwerte-vorwaerts",
    kapitel: K,
    titel: "Startwerte → Ausgabe (Quiz-Schablone)",
    niveau: 2,
    erzeuge: (r) => {
      const s = r.wahl(SCHABLONEN);
      const [x, y, z] = tripel(r);
      const out = s.lauf(x, y, z);
      return {
        angabe: `Was gibt das Programm mit den Startwerten ${ic(`int x = ${x}, y = ${y}, z = ${z};`)} aus?`,
        teile: [{ typ: "ausgabe", code: code(`int x = ${x}, y = ${y}, z = ${z};`, s.code), loesung: out }],
        hinweis: "Rechne vorwärts und notiere nach jeder if-Anweisung den Inhalt von s. Achte darauf, zu welchem if das else gehört.",
        loesung: `**Ansatz:** Vorwärts rechnen, nach jedem ${ic("if")} den Inhalt von ${ic("s")} notieren.\n---\nDie Ausgabe ist ${ic(out)}.\n---\nKontrolle über die Zusicherungen: ${zusicherungsText(s, out)} sind mit diesen Werten alle erfüllt.`,
      };
    },
  }),
  drill({
    id: "vz-d-startwerte-auswahl",
    kapitel: K,
    titel: "Ausgabe → passende Startwerte (Auswahl)",
    niveau: 3,
    erzeuge: (r) => {
      const s = r.wahl(SCHABLONEN);
      // drei Belegungen mit drei verschiedenen Ausgaben suchen (deterministisch ueber den Seed)
      const kandidaten: { t: [number, number, number]; out: string }[] = [];
      for (let versuch = 0; versuch < 500 && kandidaten.length < 3; versuch++) {
        const t = tripel(r);
        const out = s.lauf(...t);
        if (!kandidaten.some((k) => k.out === out)) kandidaten.push({ t, out });
      }
      const ziel = kandidaten[0];
      const reihenfolge = r.mische([0, 1, 2]);
      const optionen = reihenfolge.map((i) => ic(`int x = ${kandidaten[i].t[0]}, y = ${kandidaten[i].t[1]}, z = ${kandidaten[i].t[2]};`));
      const richtig = reihenfolge.indexOf(0);
      return {
        angabe: `Welche Startwerte erzeugen die Ausgabe ${ic(ziel.out)}?\n\n\`\`\`java\n${s.code}\n\`\`\``,
        teile: [
          {
            typ: "auswahl",
            optionen,
            richtig: [richtig],
            fehler: reihenfolge
              .map((k, i) => ({ k, i }))
              .filter(({ k }) => k !== 0)
              .map(({ k, i }) => ({ wert: i, meldung: `Diese Startwerte erzeugen ${ic(kandidaten[k].out)}. Prüfe die Zusicherungen für jeden Buchstaben.` })),
          },
        ],
        hinweis: `Zusicherungen: ${zusicherungsText(s, ziel.out)}. Streiche jeden Kandidaten beim ersten Widerspruch.`,
        loesung: `**Ansatz:** Die Ausgabe ${ic(ziel.out)} zerlegen und für jeden Buchstaben die Zusicherung aufschreiben: ${zusicherungsText(s, ziel.out)}.\n---\nDie anderen Belegungen liefern ${kandidaten
          .slice(1)
          .map((k) => ic(k.out))
          .join(" und ")}.\n---\nRichtig ist ${optionen[richtig]}. Probe vorwärts ergibt ${ic(ziel.out)}.`,
      };
    },
  }),
  drill({
    id: "vz-d-switch-break",
    kapitel: K,
    titel: "switch mit break",
    niveau: 1,
    erzeuge: (r) => {
      const tage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];
      const w = r.int(0, 7);
      const ergebnis = w >= 1 && w <= 5 ? tage[w - 1] : "Wochenende oder ungültig";
      const z = [`int tag = ${w};`, "switch (tag) {"];
      tage.forEach((t, i) => z.push(`    case ${i + 1}:`, `        System.out.println("${t}");`, "        break;"));
      z.push("    default:", '        System.out.println("Wochenende oder ungültig");', "}");
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code: code(...z), loesung: ergebnis }],
        hinweis: "Suche die passende case-Marke. Gibt es keine, springt Java zu default.",
        loesung: `**Ansatz:** Selektor ${ic(String(w))} auswerten und die passende Marke suchen.\n---\n${w >= 1 && w <= 5 ? `Java springt zu ${ic(`case ${w}:`)}, gibt ${ic(ergebnis)} aus, und ${ic("break")} beendet den switch.` : `Keine Marke passt, also läuft ${ic("default")}.`}`,
      };
    },
  }),
  drill({
    id: "vz-d-switch-fallthrough",
    kapitel: K,
    titel: "switch mit fehlenden break",
    niveau: 2,
    erzeuge: (r) => {
      const buchst = ["A", "B", "C", "D"];
      const faelle: Fall[] = buchst.map((b, i) => ({ marke: `case ${i + 1}`, text: b, brk: r.zufall() < 0.4 }));
      faelle.push({ marke: "default", text: "?", brk: false });
      const w = r.int(1, 5);
      const teile = switchLauf(faelle, w);
      const out = teile.join("") + "!";
      const ohneFall = (switchLauf(faelle, w)[0] ?? "") + "!";
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code: code(`int n = ${w};`, 'String s = "";', ...switchCode("n", faelle), 'System.out.println(s + "!");'),
            loesung: out,
            fehler: ohneFall !== out ? [{ wert: ohneFall, meldung: "Ohne break läuft Java in die nächsten Fälle weiter. Folge dem Code bis zum ersten break." }] : undefined,
          },
        ],
        hinweis: "Spring zur passenden Marke und lauf von dort nach unten, bis ein break kommt oder der switch endet.",
        loesung: `**Ansatz:** Einsprungpunkt suchen und bis zum ersten ${ic("break")} weiterlaufen.\n---\n${w <= 4 ? `Einsprung bei ${ic(`case ${w}:`)}.` : `Keine Marke passt, Einsprung bei ${ic("default")}.`} Angehängt werden ${teile.map(ic).join(", ")}.\n---\nAusgabe ${ic(out)}.`,
      };
    },
  }),
  drill({
    id: "vz-d-switch-default-mitte",
    kapitel: K,
    titel: "default in der Mitte",
    niveau: 3,
    erzeuge: (r) => {
      const werte = r.mische([1, 2, 3, 4]).slice(0, 3);
      const faelle: Fall[] = werte.map((v) => ({ marke: `case ${v}`, text: `w${v}`, brk: r.zufall() < 0.5 }));
      const pos = r.int(0, 2);
      faelle.splice(pos, 0, { marke: "default", text: "d", brk: false });
      faelle[faelle.length - 1].brk = r.zufall() < 0.5;
      const n = r.int(1, 12);
      const sel = n % 5;
      const teile = switchLauf(faelle, sel);
      const out = teile.join("-");
      return {
        angabe: `Was gibt das Programm für ${ic(`n = ${n}`)} aus? Der Selektor ist ${ic("n % 5")}.`,
        teile: [
          {
            typ: "ausgabe",
            code: code(`int n = ${n};`, 'String s = "";', ...switchCode("n % 5", faelle).map((z) => z.replace(/s \+= "(.*)";/, 's += "$1-";')), "System.out.println(s);"),
            loesung: teile.map((t) => t + "-").join(""),
          },
        ],
        hinweis: "Berechne zuerst n % 5. Passt keine Marke, beginnt Java bei default, egal wo es steht, und fällt ohne break weiter.",
        loesung: `**Ansatz:** Selektor ${ic(`${n} % 5 = ${sel}`)} bestimmen und den Einsprungpunkt suchen.\n---\n${faelle.some((f) => f.marke === `case ${sel}`) ? `Die Marke ${ic(`case ${sel}:`)} passt.` : `Keine Marke passt, also beginnt Java bei ${ic("default")}.`} Von dort laufen ${teile.map(ic).join(", ")}.\n---\nJeder Teil endet mit einem Bindestrich. Ausgabe ${ic(out + "-")}.`,
      };
    },
  }),
  drill({
    id: "vz-d-schaltjahr",
    kapitel: K,
    titel: "Tage im Februar",
    niveau: 1,
    erzeuge: (r) => {
      const j = r.wahl([1600, 1700, 1800, 1900, 2000, 2100, 2400]) + r.wahl([0, 0, 4, 8, 13, 22, 24, 1, 2]);
      const schalt = (j % 4 === 0 && j % 100 !== 0) || j % 400 === 0;
      const tage = schalt ? 29 : 28;
      return {
        angabe: `Was gibt das Programm für das Jahr ${j} aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: code(
              `int year = ${j};`,
              "int month = 2;",
              "switch (month) {",
              "    case 2:",
              "        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {",
              "            System.out.println(29);",
              "        } else {",
              "            System.out.println(28);",
              "        }",
              "        break;",
              "    default:",
              '        System.out.println("anderer Monat");',
              "}",
            ),
            loesung: String(tage),
            fehler: j % 100 === 0 ? [{ wert: String(57 - tage), meldung: "Bei Jahren, die durch 100 teilbar sind, entscheidet die Teilbarkeit durch 400." }] : undefined,
          },
        ],
        hinweis: "Berechne j % 4, j % 100 und j % 400 und setze sie in die Bedingung ein.",
        loesung: `**Ansatz:** Die drei Reste bestimmen und die Schaltjahrbedingung auswerten.\n---\nReste: ${j % 4}, ${j % 100}, ${j % 400}. Die Bedingung ist ${ic(String(schalt))}.\n---\nAusgabe ${tage}.`,
      };
    },
  }),
  drill({
    id: "vz-d-dangling",
    kapitel: K,
    titel: "Dangling else",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.int(-8, 20);
      const g = r.int(3, 12);
      let ausgabe = "";
      if (k > 0) ausgabe = k > g ? "groß" : "klein";
      const zeilen = ausgabe ? [ausgabe, "Ende"] : ["Ende"];
      return {
        angabe: "Was gibt das Programm aus? Die Einrückung ist absichtlich irreführend.",
        teile: [
          {
            typ: "ausgabe",
            code: code(`int k = ${k};`, "if (k > 0)", `    if (k > ${g})`, '        System.out.println("groß");', "else", '    System.out.println("klein");', 'System.out.println("Ende");'),
            loesung: aus(zeilen),
            fehler: k <= 0 ? [{ wert: aus(["klein", "Ende"]), meldung: "Das else gehört zum letzten freien if, also zum inneren. Ist k > 0 falsch, läuft keines von beiden." }] : undefined,
          },
        ],
        hinweis: "Ein else gehört immer zum letzten if davor, das noch kein else hat.",
        loesung: `**Ansatz:** Das ${ic("else")} gehört zu ${ic(`if (k > ${g})`)}.\n---\n${k > 0 ? `${ic(`${k} > 0`)} ist wahr. Innen ist ${ic(`${k} > ${g}`)} ${k > g ? "wahr" : "falsch"}, also ${ic(ausgabe)}.` : `${ic(`${k} > 0`)} ist falsch. Das ganze äußere if samt innerem if und else läuft nicht.`}\n---\nZum Schluss ${ic("Ende")}.`,
      };
    },
  }),
  drill({
    id: "vz-d-zeichen",
    kapitel: K,
    titel: "Wie oft kommt ein Zeichen vor?",
    niveau: 2,
    erzeuge: (r) => {
      const wort = r.wahl(["Zitronenkuchen", "Bananenbrot", "Haselnusskuchen", "Apfelstrudel", "Topfengolatsche", "Kaiserschmarrn"]);
      const c = r.wahl([...wort.toLowerCase(), "x", "q", "z"]);
      const erst = wort.indexOf(c);
      const letzt = wort.lastIndexOf(c);
      const out = erst === -1 ? "Kein Zeichen gefunden" : erst === letzt ? "Genau ein Zeichen gefunden" : "Zwei oder mehr Zeichen gefunden";
      return {
        angabe: `Was gibt das Programm aus? Achte auf Groß- und Kleinschreibung.`,
        teile: [
          {
            typ: "ausgabe",
            code: code(
              `String s = "${wort}";`,
              `char c = '${c}';`,
              "int erst = s.indexOf(c);",
              "int letzt = s.lastIndexOf(c);",
              "if (erst == -1) {",
              '    System.out.println("Kein Zeichen gefunden");',
              "} else if (erst == letzt) {",
              '    System.out.println("Genau ein Zeichen gefunden");',
              "} else {",
              '    System.out.println("Zwei oder mehr Zeichen gefunden");',
              "}",
            ),
            loesung: out,
          },
        ],
        hinweis: "Bestimme die erste und die letzte Position des Zeichens. Ein Großbuchstabe ist ein anderes Zeichen als der Kleinbuchstabe.",
        loesung: `**Ansatz:** Erste und letzte Position bestimmen, dann die Kette auswerten.\n---\n${ic(`indexOf('${c}')`)} ist ${erst}, ${ic(`lastIndexOf('${c}')`)} ist ${letzt}.\n---\nAusgabe ${ic(out)}.`,
      };
    },
  }),
  drill({
    id: "vz-d-ternaer",
    kapitel: K,
    titel: "Der Bedingungsoperator",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(-10, 20);
      const b = r.int(-10, 20);
      const max = a > b ? a : b;
      const abst = a - b >= 0 ? a - b : b - a;
      const par = a % 2 === 0 ? "gerade" : "ungerade";
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code: code(
              `int a = ${a};`,
              `int b = ${b};`,
              "int max = (a > b) ? a : b;",
              "int abstand = (a - b >= 0) ? a - b : b - a;",
              "System.out.println(max);",
              "System.out.println(abstand);",
              'System.out.println(a % 2 == 0 ? "gerade" : "ungerade");',
            ),
            loesung: aus([max, abst, par]),
          },
        ],
        hinweis: "Bei true gilt der Wert vor dem Doppelpunkt, bei false der Wert dahinter. Ein negativer Rest wie -1 ist nicht 0.",
        loesung: `**Ansatz:** Jede Bedingung auswerten und den passenden Wert nehmen.\n---\n${ic(`${a} > ${b}`)} ist ${ic(String(a > b))}, also ${ic(`max = ${max}`)}. Der Abstand ist ${abst}.\n---\n${ic(`${a} % 2`)} ist ${a % 2}, also ${ic(par)}.`,
      };
    },
  }),
];
