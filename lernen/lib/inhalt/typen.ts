/** Stand der Inhalte, wie ihn die Oberflaeche anzeigt. Bewusst ohne Server-Importe, damit Client-Komponenten ihn nutzen koennen. */
export interface InhaltStatus {
  /** Ist eine Update-Quelle eingerichtet (Umgebungsvariable)? Sonst bleibt das Aktualisieren aus. */
  konfiguriert: boolean;
  installiert: { tag: string; veroeffentlichtAm: string; eingespieltAm: string } | null;
  /** Nur nach dem Pruefen gesetzt: neuer Stand (null = es gibt kein neueres Release). */
  verfuegbar?: { tag: string; veroeffentlichtAm: string; seite: string } | null;
  /** Erfolgsmeldung nach dem Einspielen. */
  meldung?: string;
  fehler?: string;
}
