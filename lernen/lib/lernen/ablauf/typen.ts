/**
 * Vertrag zwischen der Ablauf-Engine (lib/lernen/ablauf/, fuehrt Java-Code Schritt fuer Schritt im Browser aus)
 * und der Ansicht (components/lernen/Ablauf*.tsx, zeigt die Schritte an). Reine Typen (nur der Typ der Zeichenformen kommt aus ../java/codedraw).
 *
 * Grundidee: Die Engine fuehrt den Code einmal komplett aus und zeichnet dabei eine Liste von Schritten auf. Die
 * Ansicht blaettert nur in dieser Liste (vor, zurueck, Autoplay). Jeder Schritt ist ein vollstaendiger Schnappschuss
 * (Zeile im Code, Variablen, Aufrufstapel, Konsole), damit "zurueck" ohne Neuberechnung geht.
 */

import type { Form } from "../java/codedraw";

/** Ein Java-Wert, so wie er in der Ansicht erscheint. */
export type Wert =
  | { art: "int" | "long" | "double" | "char" | "boolean"; text: string }
  /** `text` ist der Inhalt OHNE Anfuehrungszeichen (die Ansicht setzt sie) */
  | { art: "String"; text: string }
  | { art: "null" }
  /** Array; bei mehrdimensionalen Arrays sind `elemente` selbst Arrays. `id` ist je Ablauf eindeutig (Referenzen). */
  | { art: "array"; id: number; elementTyp: string; elemente: Wert[] }
  /**
   * StringBuilder u. a. Objekte: Anzeigetext genuegt. `farbe` (`#rrggbb`) nur bei Farben und Zeichenfenstern
   * (CodeDraw): die Ansicht zeigt daneben ein Farbfeld.
   */
  | { art: "objekt"; typ: string; text: string; farbe?: string };

export interface Variable {
  name: string;
  /** Deklarierter Typ wie im Quelltext (`int`, `double[]`, `String`, ...) */
  typ: string;
  wert: Wert;
  /** In genau diesem Schritt neu angelegt */
  neu?: boolean;
  /** In genau diesem Schritt veraendert (Wert oder Array-Inhalt) */
  geaendert?: boolean;
  /** Nur bei Array-Variablen: Indizes der in diesem Schritt geaenderten Elemente, bei 2D als "z,s" */
  geaenderteElemente?: string[];
}

/**
 * Stand der Zeichenflaeche (CodeDraw) in einem Schritt. Die Formen selbst stehen einmal in `Ablauf.formen` (Protokoll
 * in Zeichenreihenfolge, wie das Fake-CodeDraw der Plattform sie meldet); ein Schritt kennt nur zwei Zahlen. Sichtbar
 * sind die Formen `formen[ab .. anzahl)` ohne die Fenster-Eintraege (`art: "fenster"`); Hilfen: ./zeichnung.ts.
 */
export interface ZeichnungsStand {
  /** Laenge des Protokolls bis einschliesslich dieses Schritts */
  anzahl: number;
  /** Index der ersten noch sichtbaren Form: nach `clear()` der Hintergrund, sonst 0 */
  ab: number;
  /** Laenge des Protokolls beim letzten `show()` (0: noch nie angezeigt); Formen danach erscheinen im echten Fenster erst mit `show()` */
  gezeigt: number;
}

export interface Frame {
  /** Anzeigename, z. B. `main`, `quersumme(int n)` */
  methode: string;
  /** Aktuelle Zeile (1-basiert) in der Quelle, die die Ansicht zeigt */
  zeile: number;
  /** Nur die Variablen, die in diesem Frame gerade sichtbar (im Gueltigkeitsbereich) sind, in Deklarationsreihenfolge */
  variablen: Variable[];
}

export type SchrittArt =
  | "anweisung" // eine Anweisung wurde ausgefuehrt (Zuweisung, Deklaration, Ausgabe, ...)
  | "bedingung" // if/while/for-Bedingung ausgewertet; `bedingung` im Schritt gesetzt
  | "schleife" // Schleifenkopf: naechster Durchlauf beginnt / Schleife endet
  | "aufruf" // Methode wird betreten
  | "rueckkehr" // Methode wird verlassen (Rueckgabewert in `rueckgabe`)
  | "ausdruck" // Teilausdruck ausgewertet (nur fein)
  | "ende"; // Programm zu Ende

export interface Schritt {
  /** 1-basierte Zeile in der angezeigten Quelle */
  zeile: number;
  /** Zeichenbereich [von, bis) in der angezeigten Quelle, der in diesem Schritt hervorgehoben wird (Anweisung oder Teilausdruck) */
  von: number;
  bis: number;
  art: SchrittArt;
  /**
   * true: Unterschritt innerhalb einer Anweisung (Teilausdruck, Bedingungsteil). Die Ansicht blendet solche Schritte im
   * Modus "Zeile fuer Zeile" aus und zeigt sie im Modus "Ausdruck fuer Ausdruck". Jede Anweisung endet immer mit einem
   * Schritt mit fein = false (er enthaelt das Ergebnis der Anweisung).
   */
  fein: boolean;
  /** Deutscher Erklaersatz in einfacher Sprache, Code in Backticks, z. B. "`i < 3` mit i = 2: wahr, der Rumpf läuft." */
  erklaerung: string;
  /**
   * Umformungskette eines Ausdrucks in Java-Schreibweise, jeweils ein Zwischenzustand, z. B.
   * ["a / 3", "10 / 3", "3"] oder ["s + c", "\"bc\" + 'a'", "\"bca\""]. Nur wenn sie hilft (nicht bei Literalen).
   */
  auswertung?: string[];
  /** Ergebnis einer Bedingung (art "bedingung") */
  bedingung?: boolean;
  /** Rueckgabewert (art "rueckkehr") als Anzeigetext */
  rueckgabe?: string;
  /** Aufrufstapel, unterster Frame zuerst (main), oberster = aktuell aktiv */
  frames: Frame[];
  /**
   * Optional (Engine-Erweiterung): statische Felder (Klassenvariablen) mit ihrem aktuellen Wert, gleiche Markierungen
   * wie bei Variablen. Fehlt, wenn das Programm keine statischen Felder hat. Name bei fremden Klassen `Klasse.name`.
   */
  felder?: Variable[];
  /**
   * Optional (Engine-Erweiterung): Zeichenflaeche, sobald das Programm ein `CodeDraw`-Fenster angelegt hat. Fehlt in
   * Schritten davor und in Programmen ohne CodeDraw.
   */
  zeichnung?: ZeichnungsStand;
  /** Gesamte Konsolenausgabe bis einschliesslich dieses Schritts */
  ausgabe: string;
  /** Was dieser Schritt an die Konsole angehaengt hat (leer, wenn nichts) */
  neueAusgabe: string;
}

export interface Ablauf {
  /** Quelltext, auf den sich `zeile`, `von` und `bis` beziehen (bei Ausschnitten: der Ausschnitt selbst, ohne ergaenzte Huelle) */
  quelle: string;
  schritte: Schritt[];
  /** Abbruchgrund, falls nicht bis zum Ende gelaufen: Schrittgrenze, Zeitgrenze, zu viel Ausgabe, Stapel zu tief */
  abgeschnitten?: "schritte" | "zeit" | "ausgabe" | "stapel";
  /** Laufzeitfehler des Programms (z. B. ArrayIndexOutOfBoundsException): letzter Schritt zeigt die Stelle */
  fehler?: { name: string; meldung: string; zeile: number };
  /** Der ausgefuehrte `aufruf` (und `vorher`), falls angegeben; die Ansicht zeigt ihn als Kopfzeile */
  aufruf?: string;
  vorher?: string;
  /**
   * Optional (Engine-Erweiterung): Protokoll aller Zeichenformen des Programms in Zeichenreihenfolge (Fenster,
   * Hintergrund, Formen; gleiche Daten wie das Fake-CodeDraw der Plattform). Nur bei Programmen mit CodeDraw.
   */
  formen?: Form[];
  /** Endergebnis der Konsole */
  ausgabe: string;
  /** Rueckgabewert des `aufruf` (nur wenn ein Ausdruck mit Wert aufgerufen wurde), als Anzeigetext */
  ergebnis?: string;
}

export interface AblaufOptionen {
  /**
   * Nur bei Quellen mit Klasse: ein Java-Ausdruck oder eine Anweisung, die statt `main` ausgefuehrt wird, z. B.
   * `quersumme(123)` oder `zeichneDreieck(3)`. Fehlt er, laeuft `main`. Der Aufruf steht NICHT in der Quelle und
   * wird auch nicht in sie eingefuegt: `Ablauf.quelle` bleibt der unveraenderte Quelltext, `Ablauf.aufruf` gibt den Aufruf
   * zurueck (die Ansicht zeigt ihn ueber dem Code), und der erste Schritt (art "aufruf") erklaert ihn und zeigt auf den
   * Methodenkopf in der Quelle.
   */
  aufruf?: string;
  /** Anweisungen, die vor dem Aufruf laufen (wie `vorher` bei Java-Tests), z. B. `int[] a = {3, 1, 2};` */
  vorher?: string;
  /** Tastatureingabe fuer Scanner(System.in) */
  stdin?: string;
  /** Standard 3000 */
  maxSchritte?: number;
  /** Standard 20000 Zeichen */
  maxAusgabe?: number;
  /** Standard 1500 ms Rechenzeit */
  maxMs?: number;
}

export type AblaufErgebnis =
  | { ok: true; ablauf: Ablauf }
  /** Nicht ausfuehrbar: `nichtUnterstuetzt` = gueltiges Java, aber ausserhalb der Teilmenge (Klassen mit Objekten, Generics, ...) */
  | { ok: false; grund: "nichtUnterstuetzt" | "syntax"; meldung: string; zeile?: number };

/** Einstieg der Engine (lib/lernen/ablauf/index.ts): reine Funktion, laeuft im Browser und in Node. */
export type ErzeugeAblauf = (quelle: string, optionen?: AblaufOptionen) => AblaufErgebnis;
