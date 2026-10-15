import { drill, type Drill, type Rng } from "@/lib/lernen/training";

const K = "werkzeuge";

/** Woerter fuer Ausgaben: nur ASCII, damit die Konsolenausgabe auf jedem System gleich ist. */
const WOERTER = ["Ja", "Nein", "Hallo", "Welt", "Java", "EP1", "Code", "Tor", "Gut", "Los", "Stop", "Info", "Mo", "Di", "Mi"];
const KLASSEN = ["Wuerfel", "Rechner", "Ampel", "Uhr", "Kino", "Zug", "Lampe", "Konto", "Spiel", "Wetter", "Robot", "Garten"];

type Anweisung = { art: "print" | "println" | "leer"; text: string };

function javaZeile(a: Anweisung): string {
  if (a.art === "leer") return "System.out.println();";
  return `System.out.${a.art}("${a.text}");`;
}

/** Konsolenausgabe einer Folge von print/println/println() */
function ausgabeVon(folge: Anweisung[]): string {
  return folge.map((a) => (a.art === "print" ? a.text : a.art === "println" ? a.text + "\n" : "\n")).join("");
}

/** sichtbare Zeilen: Zeilenumbrueche plus eine offene letzte Zeile mit Text */
function sichtbareZeilen(out: string): number {
  const umbrueche = (out.match(/\n/g) ?? []).length;
  return umbrueche + (out.length > 0 && !out.endsWith("\n") ? 1 : 0);
}

function zufallsFolge(r: Rng, n: number, mitLeer: boolean): Anweisung[] {
  const folge: Anweisung[] = [];
  for (let i = 0; i < n; i++) {
    const x = r.int(0, mitLeer ? 4 : 3);
    if (x === 4 && i > 0) folge.push({ art: "leer", text: "" });
    else folge.push({ art: x <= 1 ? "print" : "println", text: r.wahl(WOERTER) });
  }
  return folge;
}

function cursorSchritte(folge: Anweisung[]): string {
  return folge
    .map((a, i) =>
      a.art === "print"
        ? `${i + 1}. \`print("${a.text}")\` schreibt \`${a.text}\`, der Cursor bleibt in der Zeile.`
        : a.art === "println"
          ? `${i + 1}. \`println("${a.text}")\` schreibt \`${a.text}\` und beendet die Zeile.`
          : `${i + 1}. \`println()\` schreibt nichts und beendet nur die Zeile.`,
    )
    .join("\n");
}

function notenZahl(p: number): number {
  return p >= 92 ? 1 : p >= 83 ? 2 : p >= 74 ? 3 : p >= 65 ? 4 : 5;
}
const NOTENNAME = ["", "Sehr gut", "Gut", "Befriedigend", "Genügend", "Nicht genügend"];

export const DRILLS: Drill[] = [
  drill({
    id: "wz-d-print-folge",
    kapitel: K,
    titel: "print und println verfolgen",
    niveau: 1,
    erzeuge: (r) => {
      let folge = zufallsFolge(r, r.int(3, 5), false);
      if (!folge.some((a) => a.art === "print")) folge = [{ art: "print", text: r.wahl(WOERTER) }, ...folge];
      const out = ausgabeVon(folge);
      const alleZeilen = folge.map((a) => a.text).join("\n");
      const code = folge.map(javaZeile).join("\n");
      return {
        angabe: "Was gibt der Ausschnitt aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: out,
            fehler: alleZeilen !== out.replace(/\n$/, "") ? [{ wert: alleZeilen, meldung: "`print` beendet die Zeile nicht. Nur `println` lässt den Cursor in die nächste Zeile springen." }] : undefined,
          },
        ],
        hinweis: "Verfolge den Cursor: Nach `print` bleibt er in der Zeile, nach `println` springt er in die nächste.",
        loesung: `**Ansatz:** Anweisung für Anweisung den Cursor verfolgen.\n---\n${cursorSchritte(folge)}\n---\nErgebnis:\n\n\`\`\`text\n${out.replace(/\n$/, "")}\n\`\`\``,
      };
    },
  }),

  drill({
    id: "wz-d-zahl-text",
    kapitel: K,
    titel: "Rechnen oder abschreiben?",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(2, 40);
      const b = r.int(1, a - 1);
      const op = r.wahl(["+", "-"] as const);
      const wert = op === "+" ? a + b : a - b;
      const textZuerst = r.int(0, 1) === 1;
      const zeileRechnung = `System.out.println(${a} ${op} ${b});`;
      const zeileText = `System.out.println("${a} ${op} ${b}");`;
      const code = textZuerst ? `${zeileText}\n${zeileRechnung}` : `${zeileRechnung}\n${zeileText}`;
      const loesung = textZuerst ? `${a} ${op} ${b}\n${wert}\n` : `${wert}\n${a} ${op} ${b}\n`;
      const beide = `${wert}\n${wert}`;
      return {
        angabe: "Was gibt der Ausschnitt aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: [{ wert: beide, meldung: "In Anführungszeichen wird nicht gerechnet. Der Text erscheint Zeichen für Zeichen." }],
          },
        ],
        hinweis: "Prüfe zuerst, ob Anführungszeichen dastehen.",
        loesung: `**Ansatz:** Ohne Anführungszeichen rechnet Java, mit Anführungszeichen schreibt es ab.\n---\n\`${a} ${op} ${b}\` ohne Anführungszeichen ergibt \`${wert}\`. \`"${a} ${op} ${b}"\` erscheint als Text.\n---\nDie Reihenfolge der Ausgabe folgt der Reihenfolge der Anweisungen.`,
      };
    },
  }),

  drill({
    id: "wz-d-zeilen-zaehlen",
    kapitel: K,
    titel: "Ausgabezeilen zählen",
    niveau: 2,
    erzeuge: (r) => {
      const folge = zufallsFolge(r, r.int(4, 7), true);
      const out = ausgabeVon(folge);
      const n = sichtbareZeilen(out);
      const code = folge.map(javaZeile).join("\n");
      const fehler = folge.length !== n ? [{ wert: String(folge.length), meldung: "Du hast Anweisungen gezählt. Mehrere `print` hintereinander landen in derselben Zeile." }] : undefined;
      return {
        angabe: `Wie viele Zeilen erscheinen auf der Konsole? Leere Zeilen zählen mit, eine offene letzte Zeile mit Text auch.\n\n\`\`\`java\n${code}\n\`\`\``,
        teile: [{ typ: "zahl", loesung: String(n), fehler }],
        hinweis: "Schreib die Ausgabe auf. Jedes `println` und jedes `println()` beendet eine Zeile.",
        loesung: `**Ansatz:** Ausgabe aufschreiben und Zeilenwechsel zählen.\n---\n${cursorSchritte(folge)}\n---\nDas ergibt ${n} Zeilen.`,
      };
    },
  }),

  drill({
    id: "wz-d-kommentare",
    kapitel: K,
    titel: "Kommentare streichen",
    niveau: 2,
    erzeuge: (r) => {
      const zeilen: string[] = [];
      const ausgegeben: string[] = [];
      const erklaerung: string[] = [];
      const anzahl = r.int(4, 5);
      const woerter = r.mische(WOERTER).slice(0, anzahl);
      woerter.forEach((w, i) => {
        const art = r.int(0, 4);
        const anw = `System.out.println("${w}");`;
        if (art === 0) {
          zeilen.push(`// ${anw}`);
          erklaerung.push(`Zeile ${i + 1} ist ein Zeilenkommentar, \`${w}\` erscheint nicht.`);
        } else if (art === 1) {
          zeilen.push(`/* ${anw} */`);
          erklaerung.push(`Zeile ${i + 1} steht in einem Blockkommentar, \`${w}\` erscheint nicht.`);
        } else if (art === 2) {
          zeilen.push(`${anw} // ${r.wahl(WOERTER)}`);
          ausgegeben.push(w);
          erklaerung.push(`Zeile ${i + 1} gibt \`${w}\` aus, der Kommentar dahinter zählt nicht.`);
        } else if (art === 3) {
          zeilen.push(`System.out.println("${w} // ${w}");`);
          ausgegeben.push(`${w} // ${w}`);
          erklaerung.push(`Zeile ${i + 1}: \`//\` steht in Anführungszeichen, also ist es Text. Ausgabe \`${w} // ${w}\`.`);
        } else {
          zeilen.push(anw);
          ausgegeben.push(w);
          erklaerung.push(`Zeile ${i + 1} gibt \`${w}\` aus.`);
        }
      });
      if (ausgegeben.length === 0) {
        zeilen.push(`System.out.println("Ende");`);
        ausgegeben.push("Ende");
        erklaerung.push(`Zeile ${zeilen.length} gibt \`Ende\` aus.`);
      }
      const alle = woerter.join("\n");
      const loesung = ausgegeben.join("\n") + "\n";
      return {
        angabe: "Was gibt der Ausschnitt aus?",
        teile: [
          {
            typ: "ausgabe",
            code: zeilen.join("\n"),
            loesung,
            fehler: alle !== loesung.replace(/\n$/, "") ? [{ wert: alle, meldung: "Auskommentierte Anweisungen werden nicht ausgeführt. Streiche zuerst alle Kommentare." }] : undefined,
          },
        ],
        hinweis: "Streiche alle Kommentare, aber nur außerhalb von Anführungszeichen.",
        loesung: `**Ansatz:** Kommentare streichen, dann die übrigen Anweisungen ausführen.\n---\n${erklaerung.join("\n")}\n---\nAusgabe:\n\n\`\`\`text\n${ausgegeben.join("\n")}\n\`\`\``,
      };
    },
  }),

  drill({
    id: "wz-d-meldung-zeile",
    kapitel: K,
    titel: "Fehlermeldung lesen",
    niveau: 1,
    erzeuge: (r) => {
      const klasse = r.wahl(KLASSEN);
      const zeile = r.int(3, 40);
      const fall = r.wahl([
        { meldung: "';' expected", ursache: "Am Ende der Anweisung fehlt ein Strichpunkt." },
        { meldung: "cannot find symbol", ursache: "Ein Name ist unbekannt, meist ein Tippfehler oder falsche Großschreibung." },
        { meldung: "unclosed string literal", ursache: "Ein Text hat kein schließendes Anführungszeichen." },
        { meldung: "package system does not exist", ursache: "`System` wurde kleingeschrieben." },
      ]);
      const anzahlFehler = r.int(1, 3);
      const gekuerzt = anzahlFehler > 1 ? "...\n" : "";
      return {
        angabe: `Der Compiler meldet${anzahlFehler > 1 ? " (gekürzt, `...` steht für die weiteren Meldungen)" : ""}:\n\n\`\`\`text\n${klasse}.java:${zeile}: error: ${fall.meldung}\n${gekuerzt}${anzahlFehler} error${anzahlFehler > 1 ? "s" : ""}\n\`\`\`\n\nIn welcher Zeile siehst du zuerst nach?`,
        teile: [
          {
            typ: "zahl",
            loesung: String(zeile),
            fehler: anzahlFehler !== zeile ? [{ wert: String(anzahlFehler), meldung: `Die Zahl in „${anzahlFehler} error${anzahlFehler > 1 ? "s" : ""}“ zählt die Fehler. Die Zeile steht hinter dem Dateinamen.` }] : undefined,
          },
        ],
        hinweis: "Die Form ist immer Datei, Doppelpunkt, Zeile, Doppelpunkt, Ursache.",
        loesung: `**Ansatz:** Die Meldung hat die Form \`Datei:Zeile: error: Ursache\`.\n---\nDatei \`${klasse}.java\`, Zeile ${zeile}. Ursache: ${fall.ursache}\n---\nAlso Zeile ${zeile} ansehen und, falls dort nichts auffällt, die Zeile davor.`,
      };
    },
  }),

  drill({
    id: "wz-d-dateiname",
    kapitel: K,
    titel: "Klassenname und Dateiname",
    niveau: 1,
    erzeuge: (r) => {
      const klasse = r.wahl(KLASSEN) + r.wahl(["", "2", "Test", "App"]);
      return {
        angabe: `In einer Datei steht \`public class ${klasse}\`. Wie muss die Datei heißen?`,
        teile: [
          {
            typ: "lueckentext",
            text: "Die Datei heißt ___",
            luecken: [[`${klasse}.java`]],
            fehler: [
              { wert: [`${klasse.toLowerCase()}.java`], meldung: "Groß- und Kleinschreibung müssen genau zum Klassennamen passen." },
              { wert: [`${klasse}.class`], meldung: "`.class` ist die Endung des Bytecodes. Quelltext endet auf `.java`." },
            ],
          },
        ],
        hinweis: "Dateiname = Klassenname + Endung für Quelltext.",
        loesung: `Regel: Steht \`public class ${klasse}\` in der Datei, heißt sie genau wie die Klasse.\n---\nDazu die Endung \`.java\`: \`${klasse}.java\`.`,
      };
    },
  }),

  drill({
    id: "wz-d-fehlerart",
    kapitel: K,
    titel: "Fehlerart bestimmen",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(2, 99);
      const w = r.wahl(WOERTER);
      const faelle = [
        { text: `\`System.out.println(${a} / 0);\``, art: 1, warum: `Die Rechnung ist formal gültig und wird übersetzt. Erst beim Ausrechnen von \`${a} / 0\` tritt eine \`ArithmeticException\` auf.` },
        { text: `\`System.out.println("${w}")\` ohne Strichpunkt`, art: 0, warum: "Der Strichpunkt ist eine Regel der Sprache. Der Compiler meldet `';' expected`." },
        { text: `\`system.out.println("${w}");\``, art: 0, warum: "`system` ist unbekannt. Der Compiler meldet `package system does not exist`." },
        { text: `\`System.out.println("${w}");\`, obwohl laut Angabe \`${w}!\` erscheinen soll`, art: 2, warum: "Das Programm ist korrekt gebaut und läuft, gibt aber den falschen Text aus. Das meldet niemand." },
        { text: `\`System.out.printn("${w}");\``, art: 0, warum: "`printn` gibt es nicht. Der Compiler meldet `cannot find symbol`." },
        { text: `\`System.out.println(${a} - ${a});\`, obwohl laut Angabe \`${2 * a}\` erscheinen soll`, art: 2, warum: `Das Programm rechnet korrekt \`${a} - ${a} = 0\`, aber das ist nicht das Gewünschte. Ein logischer Fehler.` },
      ];
      const f = r.wahl(faelle);
      const namen = ["Compilerfehler", "Laufzeitfehler", "Logischer Fehler"];
      return {
        angabe: `Welche Fehlerart liegt vor? ${f.text}`,
        teile: [
          {
            typ: "auswahl",
            optionen: namen,
            richtig: [f.art],
            fehler: namen
              .map((_, i) => i)
              .filter((i) => i !== f.art)
              .map((i) => ({
                wert: i,
                meldung:
                  i === 0
                    ? "Ein Compilerfehler verletzt eine Regel der Sprache, und das Programm startet gar nicht. Ist das hier so?"
                    : i === 1
                      ? "Ein Laufzeitfehler bricht ein laufendes Programm mit einer Exception ab. Passiert das hier?"
                      : "Ein logischer Fehler läuft ohne Meldung durch und tut nur das Falsche. Wird hier wirklich nichts gemeldet?",
              })),
          },
        ],
        hinweis: "Frage: Fällt der Fehler beim Übersetzen auf, beim Ausführen, oder gar nicht?",
        loesung: `**Ansatz:** Den Zeitpunkt bestimmen, zu dem der Fehler auffällt.\n---\n${f.warum}\n---\nAlso: ${namen[f.art]}.`,
      };
    },
  }),

  drill({
    id: "wz-d-strichpunkt",
    kapitel: K,
    titel: "Den fehlenden Strichpunkt finden",
    niveau: 2,
    erzeuge: (r) => {
      const klasse = r.wahl(KLASSEN);
      const n = r.int(3, 5);
      const woerter = r.mische(WOERTER).slice(0, n);
      const fehlt = r.int(0, n - 1);
      const zeilen = [
        `public class ${klasse} {`,
        "    public static void main(String[] args) {",
        ...woerter.map((w, i) => `        System.out.println("${w}")${i === fehlt ? "" : ";"}`),
        "    }",
        "}",
      ];
      const nr = 3 + fehlt;
      return {
        angabe: `Die Datei heißt \`${klasse}.java\`. In welcher Zeile fehlt ein Strichpunkt? Markiere sie.`,
        teile: [
          {
            typ: "zeilen",
            code: zeilen.join("\n"),
            loesung: [nr],
            fehler: [{ wert: [2], meldung: "Hinter dem Kopf von `main` folgt `{`. Dort steht nie ein Strichpunkt." }],
          },
        ],
        hinweis: "Jede Anweisung endet mit `;`. Klassen- und Methodenköpfe nicht.",
        loesung: `**Ansatz:** Jede Anweisung muss mit \`;\` enden.\n---\nIn Zeile ${nr} endet \`System.out.println("${woerter[fehlt]}")\` ohne Strichpunkt.\n---\nDer Compiler meldet dort \`${klasse}.java:${nr}: error: ';' expected\`.`,
      };
    },
  }),

  drill({
    id: "wz-d-punkte",
    kapitel: K,
    titel: "Gesamtpunkte mit Testhürde",
    niveau: 2,
    erzeuge: (r) => {
      const ue = r.int(3, 6), bl = r.int(10, 24), qz = r.int(18, 40), te = r.int(8, 30);
      const zaehlt = te >= 15;
      const summe = ue + bl + qz + (zaehlt ? te : 0);
      const falsch = ue + bl + qz + (zaehlt ? 0 : te);
      return {
        angabe: `Übungen ${ue}, Blätter ${bl}, Quiz ${qz}, Test ${te} Punkte. Wie viele Punkte zählen insgesamt (Kompetenzstufe K1, 2026W)?`,
        teile: [
          {
            typ: "zahl",
            loesung: zaehlt ? `${ue} + ${bl} + ${qz} + ${te}` : `${ue} + ${bl} + ${qz} + 0`,
            fehler: [{ wert: String(falsch), meldung: zaehlt ? "Der Test liegt über der Hürde von 15 Punkten. Er zählt." : "Der Test liegt unter 15 Punkten (50 Prozent). Dann werden die Testpunkte nicht angerechnet." }],
          },
        ],
        hinweis: "Prüfe zuerst, ob der Test mindestens 15 von 30 Punkten hat.",
        loesung: `**Ansatz:** Hürde prüfen, dann addieren.\n---\n${te} ist ${zaehlt ? "mindestens" : "weniger als"} 15. Der Test zählt ${zaehlt ? "voll" : "als 0"}.\n---\n${ue} + ${bl} + ${qz} + ${zaehlt ? te : 0} = ${summe} Punkte.`,
      };
    },
  }),

  drill({
    id: "wz-d-note",
    kapitel: K,
    titel: "Note aus Teilpunkten",
    niveau: 2,
    erzeuge: (r) => {
      const ue = r.int(4, 6), bl = r.int(12, 24), qz = r.int(22, 40), te = r.int(15, 30);
      const summe = ue + bl + qz + te;
      const note = notenZahl(summe);
      const nachbar = note === 1 ? 2 : note - 1;
      return {
        angabe: `Übungen ${ue}, Blätter ${bl}, Quiz ${qz}, Test ${te} Punkte. Welche Note ergibt das? Gib sie als Zahl ein (1 = Sehr gut, 5 = Nicht genügend).`,
        teile: [{ typ: "zahl", loesung: String(note), fehler: [{ wert: String(nachbar), meldung: "Vergleiche die Summe genau mit den Grenzen 92, 83, 74 und 65. Die Grenze selbst gehört zur besseren Note." }] }],
        hinweis: "Erst die Summe bilden, dann mit den Grenzen 92, 83, 74, 65 vergleichen.",
        loesung: `**Ansatz:** Hürde prüfen, Summe bilden, Grenze ablesen.\n---\nDer Test hat ${te} Punkte, also mindestens 15, und zählt. Summe: ${ue} + ${bl} + ${qz} + ${te} = ${summe}.\n---\n${summe} Punkte ergeben ${NOTENNAME[note]}, also Note ${note}.`,
      };
    },
  }),

  drill({
    id: "wz-d-testziel",
    kapitel: K,
    titel: "Wie viel brauche ich im Test?",
    niveau: 3,
    erzeuge: (r) => {
      const ziele = [
        { grenze: 92, name: "Sehr gut" },
        { grenze: 83, name: "Gut" },
        { grenze: 74, name: "Befriedigend" },
        { grenze: 65, name: "Genügend" },
      ];
      let ue = 0, bl = 0, qz = 0, ziel = ziele[0], noetig = 0;
      // so lange wuerfeln, bis das Ziel mit hoechstens 30 Testpunkten erreichbar ist
      for (let versuch = 0; versuch < 50; versuch++) {
        ue = r.int(3, 6); bl = r.int(10, 24); qz = r.int(20, 40); ziel = r.wahl(ziele);
        noetig = Math.max(15, ziel.grenze - (ue + bl + qz));
        // Ist die Grenze schon ohne Test erreicht, braucht man 0 Testpunkte: diesen Fall auslassen.
        if (ziel.grenze - (ue + bl + qz) >= 1 && noetig <= 30) break;
      }
      if (noetig > 30 || ziel.grenze - (ue + bl + qz) < 1) {
        ue = 6; bl = 20; qz = 30; ziel = ziele[3]; noetig = Math.max(15, 65 - 56);
      }
      const rest = ue + bl + qz;
      const roh = ziel.grenze - rest;
      const huerde = roh < 15;
      return {
        angabe: `Übungen ${ue}, Blätter ${bl}, Quiz ${qz} Punkte. Wie viele Testpunkte sind **mindestens** nötig für ein ${ziel.name}? (Ganze Punkte; beachte alle Regeln von K1 2026W.)`,
        teile: [
          {
            typ: "zahl",
            loesung: String(noetig),
            fehler: huerde ? [{ wert: String(Math.max(roh, 0)), meldung: "Rechnerisch reicht das zur Notengrenze, aber unter 15 Punkten zählt der Test gar nicht." }] : [{ wert: String(ziel.grenze), meldung: "Das ist die Notengrenze für die Gesamtpunkte. Gesucht sind nur die Punkte, die im Test noch fehlen." }],
          },
        ],
        hinweis: "Fehlende Punkte bis zur Notengrenze berechnen. Danach die 15-Punkte-Hürde prüfen.",
        loesung: `**Ansatz:** Abstand zur Notengrenze berechnen, dann die Testhürde berücksichtigen.\n---\nBisher ${ue} + ${bl} + ${qz} = ${rest} Punkte. ${ziel.name} beginnt bei ${ziel.grenze}. Es fehlen ${ziel.grenze} − ${rest} = ${roh} Punkte.\n---\n${huerde ? `${roh} liegt unter 15. Mit weniger als 15 Punkten zählt der Test aber nicht. Nötig sind also 15 Punkte.` : `${roh} ist mindestens 15, die Hürde ist damit erfüllt.`}\n---\nProbe: ${rest} + ${noetig} = ${rest + noetig} ≥ ${ziel.grenze}.`,
      };
    },
  }),

  drill({
    id: "wz-d-rechteck",
    kapitel: K,
    titel: "Ränder eines Rechtecks",
    niveau: 1,
    erzeuge: (r) => {
      const x = r.int(1, 30) * 5, y = r.int(1, 30) * 5, b = r.int(4, 40) * 5, h = r.int(4, 40) * 5;
      const fragUnten = r.int(0, 1) === 1;
      return {
        angabe: `\`cd.fillRectangle(${x}, ${y}, ${b}, ${h});\` Bei welchem ${fragUnten ? "y-Wert liegt die **Unterkante**" : "x-Wert liegt der **rechte Rand**"} des Rechtecks?`,
        teile: [
          {
            typ: "zahl",
            loesung: fragUnten ? `${y} + ${h}` : `${x} + ${b}`,
            fehler: fragUnten
              ? (y + b !== y + h ? [{ wert: String(y + b), meldung: "Du hast die Breite addiert. Für die Unterkante zählt die Höhe (vierter Wert)." }] : undefined)
              : (x + h !== x + b ? [{ wert: String(x + h), meldung: "Du hast die Höhe addiert. Für den rechten Rand zählt die Breite (dritter Wert)." }] : undefined),
          },
        ],
        hinweis: "Die Werte sind x, y, Breite, Höhe. (x, y) ist die linke obere Ecke, y wächst nach unten.",
        loesung: fragUnten
          ? `Die Oberkante liegt bei y = ${y}, die Höhe ist ${h}.\n---\nUnterkante: ${y} + ${h} = ${y + h}.`
          : `Der linke Rand liegt bei x = ${x}, die Breite ist ${b}.\n---\nRechter Rand: ${x} + ${b} = ${x + b}.`,
      };
    },
  }),

  drill({
    id: "wz-d-kreis",
    kapitel: K,
    titel: "Ränder eines Kreises",
    niveau: 1,
    erzeuge: (r) => {
      const rad = r.int(2, 12) * 5;
      const x = r.int(rad / 5 + 1, 70) * 5, y = r.int(rad / 5 + 1, 70) * 5;
      const seite = r.wahl(["links", "rechts", "oben", "unten"] as const);
      const wert = seite === "links" ? x - rad : seite === "rechts" ? x + rad : seite === "oben" ? y - rad : y + rad;
      const achse = seite === "links" || seite === "rechts" ? "x" : "y";
      const mitte = achse === "x" ? x : y;
      const rechnung = seite === "links" || seite === "oben" ? `${mitte} − ${rad}` : `${mitte} + ${rad}`;
      const falsch = seite === "links" || seite === "oben" ? mitte + rad : mitte - rad;
      return {
        angabe: `\`cd.drawCircle(${x}, ${y}, ${rad});\` Bei welchem ${achse}-Wert liegt der Punkt des Kreises, der am weitesten **${seite}** liegt?`,
        teile: [
          {
            typ: "zahl",
            loesung: String(wert),
            fehler: [
              { wert: String(mitte), meldung: "Das ist der Mittelpunkt. Der Kreis reicht um den Radius darüber hinaus." },
              { wert: String(falsch), meldung: seite === "oben" || seite === "unten" ? "In CodeDraw wächst y nach unten. Weiter oben heißt kleineres y." : "Nach links wird der Radius abgezogen, nach rechts addiert." },
            ],
          },
        ],
        hinweis: "Bei Kreisen ist (x, y) der Mittelpunkt. y wächst nach unten.",
        loesung: `Der Mittelpunkt hat ${achse} = ${mitte}, der Radius ist ${rad}.\n---\n${seite === "oben" ? "Oben heißt in CodeDraw kleineres y. " : seite === "unten" ? "Unten heißt in CodeDraw größeres y. " : ""}${rechnung} = ${wert}.`,
      };
    },
  }),

  drill({
    id: "wz-d-zentriert",
    kapitel: K,
    titel: "Ein Rechteck in die Mitte setzen",
    niveau: 2,
    erzeuge: (r) => {
      const W = r.wahl([300, 400, 500, 600]), H = r.wahl([300, 400, 500]);
      const b = r.int(2, W / 20 - 1) * 10, h = r.int(2, H / 20 - 1) * 10;
      const x = W / 2 - b / 2, y = H / 2 - h / 2;
      return {
        angabe: `Ein Fenster ist ${W} Pixel breit und ${H} Pixel hoch. Ein Rechteck mit Breite ${b} und Höhe ${h} soll genau in der Mitte liegen. Gib die linke obere Ecke für \`cd.fillRectangle(x, y, ${b}, ${h});\` an.`,
        teile: [
          { typ: "zahl", label: "x", loesung: `${W}/2 - ${b}/2`, fehler: [{ wert: String(W / 2), meldung: "Das ist die Mitte des Fensters. Gesucht ist die linke obere Ecke des Rechtecks." }] },
          { typ: "zahl", label: "y", loesung: `${H}/2 - ${h}/2`, fehler: H / 2 - h !== y ? [{ wert: String(H / 2 - h), meldung: "Von der Mitte zur Oberkante ist es nur die halbe Höhe." }] : undefined },
        ],
        hinweis: "Für x: Mitte der Fensterbreite minus halbe Breite. Für y: Mitte der Fensterhöhe minus halbe Höhe.",
        loesung: `**Ansatz:** Fenstermitte bestimmen, dann die halbe Größe des Rechtecks abziehen.\n---\nMitte: (${W / 2}, ${H / 2}). Halbe Breite ${b / 2}, halbe Höhe ${h / 2}.\n---\nx = ${W / 2} − ${b / 2} = ${x}, y = ${H / 2} − ${h / 2} = ${y}. Probe: rechts bleiben ${W} − ${x} − ${b} = ${W - x - b} Pixel frei, genauso viel wie links.`,
      };
    },
  }),
];
