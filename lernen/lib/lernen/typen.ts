import { z } from "zod";

/**
 * Datenmodell des Mathe-3-Kurses (SBP). Kapitel liegen als Markdown unter content/mathe3/kapitel,
 * Aufgaben/Plots/Widgets stecken dort als YAML in eingezaeunten Bloecken (```aufgabe, ```plot ...).
 * Diese Schemas sind der Vertrag zwischen Autor:innen, Validator und UI.
 */

/** Ein Antwortfeld einer Aufgabe. `loesung` ist bei zahl/komplex/vektor/menge ein mathjs-Ausdruck,
 * der zur Laufzeit ausgerechnet wird -- dadurch rechnet die Musterloesung sich selbst nach. */
/**
 * Fehlerbild: eine typische falsche Antwort mit gezielter Rueckmeldung (Fehlvorstellung benennen,
 * nicht die Loesung verraten). `wert` wird wie eine Nutzereingabe gegen die Eingabe verglichen;
 * bei `auswahl` ist es der Index der falschen Option.
 */
export const FehlerSchema = z.object({
  wert: z.union([z.string(), z.number(), z.array(z.union([z.string(), z.number()]))]),
  meldung: z.string(),
});
export type Fehlerbild = z.infer<typeof FehlerSchema>;
const fehler = z.array(FehlerSchema).optional();

/**
 * Testfall einer `code`-Aufgabe. Drei Formen (siehe AUTHORING.md):
 * - Wert:    `aufruf` (Java-Ausdruck) + `erwartet` (Java-Ausdruck), optional `vorher`/`ergebnis`
 * - Ausgabe: `aufruf` (Anweisung) + `stdout`, optional `stdin`
 * - main:    ohne `aufruf`: main() der Klasse mit `stdin`, verglichen wird `stdout`
 * `zeichnung: true` vergleicht die Fake-CodeDraw-Formen mit denen der Musterloesung.
 */
export const JavaTestSchema = z.object({
  beschreibung: z.string().optional(),
  /** Java-Anweisungen vor dem Aufruf, z. B. "int[] a = {3, 1, 2};" */
  vorher: z.string().optional(),
  aufruf: z.string().optional(),
  erwartet: z.string().optional(),
  /** statt des Rueckgabewerts diesen Ausdruck nach dem Aufruf vergleichen (z. B. "a" bei In-place-Methoden) */
  ergebnis: z.string().optional(),
  stdin: z.string().optional(),
  stdout: z.string().optional(),
  whitespace: z.enum(["exakt", "tolerant"]).optional(),
  zeichnung: z.boolean().optional(),
  /** bei zeichnung: auch die Zeichenreihenfolge muss stimmen ("Rot vor Blau") */
  reihenfolge: z.boolean().optional(),
  /** absolute Toleranz fuer double-Vergleiche (Standard 1e-9) */
  toleranz: z.number().nonnegative().optional(),
  /** verborgener Test: Lernende sehen nur bestanden/nicht bestanden */
  versteckt: z.boolean().optional(),
});
export type JavaTest = z.infer<typeof JavaTestSchema>;

/** Statische Regeln einer `code`-Aufgabe (geprueft mit der Compiler-Tree-API, Ep1Kompilierer.java). */
export const JavaRegelnSchema = z.object({
  keineSchleifen: z.boolean().optional(),
  keineSchleifenIn: z.array(z.string()).optional(),
  keineHilfsmethoden: z.boolean().optional(),
  keineFelder: z.boolean().optional(),
  /** Standard true: Methoden der Vorlage muessen mit gleicher Signatur erhalten bleiben */
  signaturBeibehalten: z.boolean().optional(),
  /** Allowlist fremder Methoden: "String.charAt", "Math.*", "StringBuilder" (ganze Klasse inkl. Konstruktor) */
  erlaubteApi: z.array(z.string()).optional(),
  verboteneApi: z.array(z.string()).optional(),
  keinStringGleichOperator: z.boolean().optional(),
  /** clone(), System.arraycopy, Arrays.copyOf(Range) verboten */
  keineArrayKopie: z.boolean().optional(),
  /** diese Methoden muessen sich selbst aufrufen */
  rekursiv: z.array(z.string()).optional(),
});
export type JavaRegeln = z.infer<typeof JavaRegelnSchema>;

const Zelle = z.union([z.string(), z.number()]);

export const TeilSchema = z.discriminatedUnion("typ", [
  z.object({
    typ: z.literal("zahl"),
    label: z.string().optional(),
    fehler,
    loesung: z.union([z.string(), z.number()]),
    /** absolute Toleranz; Standard: 0.5 % relativ bzw. 1e-6 absolut nahe 0 */
    toleranz: z.number().positive().optional(),
    einheit: z.string().optional(),
    /** Anzeige der Musterloesung, z.B. "\\frac{\\ln 2}{0{,}055} \\approx 12{,}6" */
    anzeige: z.string().optional(),
  }),
  z.object({
    typ: z.literal("term"),
    label: z.string().optional(),
    fehler,
    loesung: z.string(),
    variable: z.string().optional(),
    /** Bereich fuer die Stichprobenpunkte des Vergleichs */
    bereich: z.tuple([z.number(), z.number()]).optional(),
    /** bei Stammfunktionen: Konstante +C erlauben */
    plusC: z.boolean().optional(),
    anzeige: z.string().optional(),
  }),
  z.object({
    typ: z.literal("komplex"),
    label: z.string().optional(),
    fehler,
    loesung: z.string(),
    toleranz: z.number().positive().optional(),
    anzeige: z.string().optional(),
  }),
  z.object({
    typ: z.literal("vektor"),
    label: z.string().optional(),
    fehler,
    /** Komponenten als mathjs-Ausdruecke */
    loesung: z.array(z.union([z.string(), z.number()])).min(1),
    namen: z.array(z.string()).optional(),
    toleranz: z.number().positive().optional(),
    /** true: Vielfache gelten auch (Richtungs-/Normalvektoren) */
    vielfaches: z.boolean().optional(),
    anzeige: z.string().optional(),
  }),
  z.object({
    typ: z.literal("menge"),
    label: z.string().optional(),
    fehler,
    /** Loesungsmenge als Liste von Ausdruecken; leere Liste = leere Menge */
    loesung: z.array(z.union([z.string(), z.number()])),
    toleranz: z.number().positive().optional(),
    anzeige: z.string().optional(),
  }),
  z.object({
    typ: z.literal("auswahl"),
    label: z.string().optional(),
    fehler,
    optionen: z.array(z.string()).min(2),
    /** Indizes (0-basiert) der richtigen Optionen; mehrere => Mehrfachauswahl */
    richtig: z.array(z.number().int().nonnegative()).min(1),
    mehrfach: z.boolean().optional(),
  }),
  z.object({
    typ: z.literal("text"),
    label: z.string().optional(),
    /** Musterantwort (Markdown). Bewertung erfolgt per Selbsteinschaetzung. */
    muster: z.string(),
  }),
  // ---------- Programmier-Typen (EP1) ----------
  z.object({
    typ: z.literal("ausgabe"),
    label: z.string().optional(),
    fehler,
    /** Java-Quelltext (ganze Klasse oder nur Anweisungen fuer main); der Validator fuehrt ihn aus */
    code: z.string(),
    /** erwartete Konsolenausgabe (muss exakt dem entsprechen, was `code` ausgibt) */
    loesung: z.string(),
    stdin: z.string().optional(),
    /** true: Leerzeichen am Zeilenende und Leerzeilen am Anfang/Ende egal */
    trim: z.boolean().optional(),
    /** tolerant: jede Folge von Leerraum (auch Zeilenumbrueche) zaehlt wie ein Leerzeichen */
    whitespace: z.enum(["exakt", "tolerant"]).optional(),
    /** false: Code nicht ueber dem Eingabefeld zeigen (steht dann z. B. schon in der Angabe) */
    codeAnzeigen: z.boolean().optional(),
  }),
  z.object({
    typ: z.literal("richtigfalsch"),
    label: z.string().optional(),
    fehler,
    aussagen: z
      .array(z.object({ text: z.string(), richtig: z.boolean(), erklaerung: z.string().optional() }))
      .min(1),
  }),
  z.object({
    typ: z.literal("lueckentext"),
    label: z.string().optional(),
    fehler,
    /** Java-Code mit Luecken "___" (wird mit der ersten Variante je Luecke kompiliert) ... */
    code: z.string().optional(),
    /** ... oder einfacher Text mit Luecken "___" (nicht kompiliert) */
    text: z.string().optional(),
    /** je Luecke die akzeptierten Varianten; die erste ist die Musterloesung */
    luecken: z.array(z.array(Zelle).min(1)).min(1),
    /** false: Code mit eingesetzter Loesung nicht kompilieren (Fragment) */
    kompilieren: z.boolean().optional(),
  }),
  z.object({
    typ: z.literal("zeilen"),
    label: z.string().optional(),
    fehler,
    code: z.string(),
    /** Zeilennummern (1-basiert), die markiert werden muessen */
    loesung: z.array(z.number().int().positive()).min(1),
  }),
  z.object({
    typ: z.literal("trace"),
    label: z.string().optional(),
    fehler,
    /** Spaltenkoepfe, meist Variablennamen */
    spalten: z.array(z.string()).min(1),
    /** erwartete Tabelle: eine Zeile je Schritt, eine Zelle je Spalte */
    loesung: z.array(z.array(Zelle).min(1)).min(1),
    /** optionale Beschriftung je Zeile (z. B. "vor der Schleife", "i = 1") */
    zeilen: z.array(z.string()).optional(),
    /** die ersten n Zeilen sind vorgegeben (z. B. der Startzustand) */
    vorgabe: z.number().int().nonnegative().optional(),
  }),
  z.object({
    typ: z.literal("reihenfolge"),
    label: z.string().optional(),
    fehler,
    /** Elemente in der richtigen Reihenfolge (Markdown) */
    elemente: z.array(z.string()).min(2),
    /** Startreihenfolge als Indizes; Standard: deterministisch gemischt */
    start: z.array(z.number().int().nonnegative()).optional(),
  }),
  z.object({
    typ: z.literal("code"),
    label: z.string().optional(),
    /** Fehlerbild: `wert` = Nummer eines Tests (1-basiert) oder Name einer Regel */
    fehler,
    /** Startcode mit der Klasse und den Methodensignaturen (muss kompilieren) */
    vorlage: z.string(),
    tests: z.array(JavaTestSchema).min(1),
    regeln: JavaRegelnSchema.optional(),
    /** Referenzloesung: bleibt auf dem Server, der Validator prueft sie gegen alle Tests und Regeln */
    musterloesung: z.string(),
    /** Zeitlimit je Test in ms (Standard 2000) */
    zeitlimit: z.number().int().positive().max(10000).optional(),
  }),
]);
export type Teil = z.infer<typeof TeilSchema>;
export type TeilVon<T extends Teil["typ"]> = Extract<Teil, { typ: T }>;
export type CodeTeil = TeilVon<"code">;

/**
 * Was der Browser von einem Teil sehen darf: bei `code` ohne Musterloesung und ohne die Daten
 * verborgener Tests (die Route /api/java/pruefen laedt die Aufgabe selbst vom Server).
 */
export function teilFuerClient(t: Teil): Teil {
  if (t.typ !== "code") return t;
  return {
    ...t,
    musterloesung: "",
    tests: t.tests.map((x) => (x.versteckt ? { versteckt: true, beschreibung: x.beschreibung } : x)),
  };
}

export function aufgabeFuerClient(a: Aufgabe): Aufgabe {
  if (!a.teile.some((t) => t.typ === "code") && !a.gefuehrt?.some((s) => s.teil?.typ === "code")) return a;
  return {
    ...a,
    teile: a.teile.map(teilFuerClient),
    gefuehrt: a.gefuehrt?.map((s) => (s.teil ? { ...s, teil: teilFuerClient(s.teil) } : s)),
  };
}

export const NIVEAUS = { 1: "Basis", 2: "Standard", 3: "Prüfungsniveau" } as const;

/** Ein Schritt im gefuehrten Loesen (ausgeblendetes Musterbeispiel): kurze Frage, optional ein
 * eigenes Antwortfeld, danach die Erklaerung, bevor der naechste Schritt kommt. */
export const SchrittSchema = z.object({
  text: z.string(),
  teil: z.lazy(() => TeilSchema).optional(),
  erklaerung: z.string(),
});

export const AufgabeSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, "id nur a-z, 0-9, -"),
  titel: z.string(),
  niveau: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  /** uebung (Standard) | check: kurze Verstaendnisfrage direkt im Text, kompakt dargestellt */
  art: z.enum(["uebung", "check"]).default("uebung"),
  /** Index (0-basiert) des Lernziels aus dem Kapitel-Frontmatter, das die Aufgabe trainiert */
  lernziel: z.number().int().nonnegative().optional(),
  /** Kompetenz, die die Aufgabe trainiert (fuer Statistik und gemischtes Ueben) */
  kompetenz: z.enum(["rechnen", "verstehen", "anwenden", "begruenden", "modellieren"]).optional(),
  quelle: z.string().optional(),
  punkte: z.number().optional(),
  angabe: z.string(),
  plot: z.lazy(() => PlotSchema).optional(),
  teile: z.array(TeilSchema).default([]),
  hinweise: z.array(z.string()).default([]),
  /** Loesungsweg in Markdown; Schritte durch eine Zeile "---" getrennt */
  loesung: z.string(),
  /** optional: dieselbe Aufgabe in kleinen Schritten mit eigenen Eingaben (Scaffolding) */
  gefuehrt: z.array(SchrittSchema).optional(),
});
export type Aufgabe = z.infer<typeof AufgabeSchema>;

const Zahl = z.union([z.number(), z.string()]);

export const PlotSchema = z.object({
  x: z.tuple([Zahl, Zahl]).default([-5, 5]),
  y: z.tuple([Zahl, Zahl]).default([-5, 5]),
  hoehe: z.number().optional(),
  gleich: z.boolean().optional(),
  achsen: z.object({ x: z.string().optional(), y: z.string().optional() }).optional(),
  graphen: z
    .array(
      z.object({
        f: z.string(),
        label: z.string().optional(),
        farbe: z.number().int().min(0).max(4).optional(),
        von: Zahl.optional(),
        bis: Zahl.optional(),
        gestrichelt: z.boolean().optional(),
      }),
    )
    .default([]),
  kurven: z
    .array(
      z.object({
        x: z.string(),
        y: z.string(),
        t: z.tuple([Zahl, Zahl]),
        label: z.string().optional(),
        farbe: z.number().int().min(0).max(4).optional(),
        gestrichelt: z.boolean().optional(),
      }),
    )
    .default([]),
  flaechen: z
    .array(
      z.object({
        f: z.string(),
        g: z.string().default("0"),
        von: Zahl,
        bis: Zahl,
        farbe: z.number().int().min(0).max(4).optional(),
      }),
    )
    .default([]),
  punkte: z
    .array(
      z.object({
        x: Zahl,
        y: Zahl,
        label: z.string().optional(),
        farbe: z.number().int().min(0).max(4).optional(),
        offen: z.boolean().optional(),
      }),
    )
    .default([]),
  vektoren: z
    .array(
      z.object({
        von: z.tuple([Zahl, Zahl]).default([0, 0]),
        nach: z.tuple([Zahl, Zahl]),
        label: z.string().optional(),
        farbe: z.number().int().min(0).max(4).optional(),
      }),
    )
    .default([]),
  strecken: z
    .array(
      z.object({
        von: z.tuple([Zahl, Zahl]),
        nach: z.tuple([Zahl, Zahl]),
        gestrichelt: z.boolean().optional(),
        farbe: z.number().int().min(0).max(4).optional(),
      }),
    )
    .default([]),
  balken: z
    .array(z.object({ x: Zahl, y: Zahl, farbe: z.number().int().min(0).max(4).optional() }))
    .default([]),
  beschriftung: z.string().optional(),
});
export type PlotSpec = z.infer<typeof PlotSchema>;

export const WIDGET_NAMEN = [
  "parameter",
  "tangente",
  "riemann",
  "folge",
  "einheitskreis",
  "komplex",
  "binomial",
  "normal",
  "vektoren",
  "gauss",
  "statistik",
  "stetigkeit",
] as const;

export const WidgetSchema = z.object({
  /** Name aus WIDGET_NAMEN oder einer Fach-Registry (z.B. components/lernen/widgets/physik) */
  name: z.string().regex(/^[a-z0-9-]+$/),
  titel: z.string().optional(),
  /** widget-spezifische Einstellungen, siehe AUTHORING.md */
  props: z.record(z.string(), z.unknown()).default({}),
});
export type WidgetSpec = z.infer<typeof WidgetSchema>;

/** Denkanstoss zur Selbsterklaerung: erst selbst ueberlegen, dann aufdecken. */
export const ReflexionSchema = z.object({
  frage: z.string(),
  antwort: z.string(),
});
export type Reflexion = z.infer<typeof ReflexionSchema>;

export const KarteSchema = z.object({
  /** stabile id (a-z0-9-), damit der Wiederholungsstand beim Umsortieren erhalten bleibt */
  id: z.string().regex(/^[a-z0-9-]+$/).optional(),
  frage: z.string(),
  antwort: z.string(),
  /** 2-4 Kernpunkte, die eine gute muendliche Antwort enthalten muss (Selbstabgleich) */
  kernpunkte: z.array(z.string()).optional(),
});
export type Karte = z.infer<typeof KarteSchema>;

export const KapitelMetaSchema = z.object({
  nummer: z.number().int(),
  titel: z.string(),
  kurz: z.string(),
  /** Schluessel aus `teile` in kurs.yaml */
  teil: z.string(),
  lernziele: z.array(z.string()).default([]),
  /** geschaetzte Lernzeit in Stunden */
  stunden: z.number().optional(),
  /** Gewicht in der schriftlichen Pruefung 0..3 (aus den Musterpruefungen abgeleitet) */
  pruefungsgewicht: z.number().int().min(0).max(3).default(1),
  /** Slugs der Kapitel, deren Stoff vorausgesetzt wird (Vorwissen-Check, Lernpfad) */
  voraussetzungen: z.array(z.string()).default([]),
});
export type KapitelMeta = z.infer<typeof KapitelMetaSchema>;

/** Ergebnis des Parsers: ein Kapitel als Folge typisierter Bloecke. */
export type Block =
  | { art: "md"; md: string }
  | { art: "aufgabe"; aufgabe: Aufgabe }
  | { art: "plot"; plot: PlotSpec }
  | { art: "widget"; widget: WidgetSpec }
  | { art: "karten"; karten: Karte[] }
  | { art: "reflexion"; reflexion: Reflexion };

export interface Abschnitt {
  id: string;
  titel: string;
  bloecke: Block[];
}

export interface Kapitel {
  slug: string;
  meta: KapitelMeta;
  einleitung: Block[];
  abschnitte: Abschnitt[];
}

export const KursSchema = z.object({
  id: z.string(),
  titel: z.string(),
  untertitel: z.string().optional(),
  /** LVA-Nummer, wenn der Kurs zu einer Lehrveranstaltung des Studiums gehoert (z. B. "185.A91"); ohne sie ist er ein reiner Zusatzkurs. */
  lva: z.string().optional(),
  /** Id der Pruefung der Studienberechtigungspruefung (sbp_pruefungen.id), die der Kurs vorbereitet. */
  sbp: z.string().optional(),
  /** Markdown: was die Pruefung verlangt, Format, Hilfsmittel */
  beschreibung: z.string().optional(),
  teile: z.record(z.string(), z.string()),
  pruefung: z
    .object({
      dauer_minuten: z.number().optional(),
      hilfsmittel: z.string().optional(),
      form: z.string().optional(),
      pruefer: z.string().optional(),
      /** naechster Pruefungstermin (ISO, JJJJ-MM-TT) (wird in der Oberflaeche nicht angezeigt) */
      datum: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    })
    .optional(),
});
export type Kurs = z.infer<typeof KursSchema>;

export const PruefungSchema = z.object({
  id: z.string(),
  titel: z.string(),
  quelle: z.string().optional(),
  /** "original" = Nachbau einer echten Musterpruefung, "simulation" = selbst erstellt */
  art: z.enum(["original", "simulation"]).default("simulation"),
  dauer_minuten: z.number().default(120),
  hinweis: z.string().optional(),
  aufgaben: z.array(AufgabeSchema).min(1),
});
export type Pruefung = z.infer<typeof PruefungSchema>;
