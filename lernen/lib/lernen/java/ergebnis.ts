import type { Form } from "./codedraw";

/** Antwort von POST /api/java/pruefen (und Rueckgabe von pruefeCode im Runner). Browser-tauglich. */

export const RUNNER_AKTIVIEREN =
  "Der Java-Runner ist ausgeschaltet. Zum Einschalten den Dev-Server so starten: `EP1_JAVA_RUNNER=1 npm run dev -- -H 127.0.0.1` (braucht JDK 21: `sudo apt install openjdk-21-jdk-headless`).";

export interface TestErgebnis {
  /** 0-basiert, gleiche Reihenfolge wie teil.tests */
  nr: number;
  beschreibung?: string;
  versteckt?: boolean;
  bestanden: boolean;
  /** ok | falsch | exception | stackoverflow | timeout | abbruch | fehler */
  status: string;
  aufruf?: string;
  erhalten?: string;
  erwartet?: string;
  /** Konsolenausgabe waehrend des Tests */
  ausgabe?: string;
  ausgabeErwartet?: string;
  meldung?: string;
  ms?: number;
  formen?: Form[];
  formenSoll?: Form[];
}

export interface Regelverstoss {
  zeile: number;
  regel: string;
  meldung: string;
}

export interface CompilerMeldung {
  zeile: number;
  spalte: number;
  meldung: string;
  /** eigen: im Code der Lernenden; tests: im generierten Pruefer (meist: Signatur passt nicht) */
  ort: "eigen" | "tests";
}

export interface CodeErgebnis {
  /** ok: alles bestanden | tests: Tests/Regeln verletzt | compilerfehler | fehler: Runner-Problem | deaktiviert */
  status: "ok" | "tests" | "compilerfehler" | "fehler" | "deaktiviert";
  meldung?: string;
  compiler: CompilerMeldung[];
  regeln: Regelverstoss[];
  tests: TestErgebnis[];
  /** Gesamtdauer der Pruefung auf dem Server */
  ms: number;
}

export function anteilBestanden(e: CodeErgebnis): number {
  if (e.status === "compilerfehler" || e.status === "fehler" || e.status === "deaktiviert" || e.tests.length === 0) return 0;
  // Programmiertest-Raster: ein Regelverstoss kostet die Punkte der Methode
  if (e.regeln.length) return 0;
  return e.tests.filter((t) => t.bestanden).length / e.tests.length;
}
