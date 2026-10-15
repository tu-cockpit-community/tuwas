import { WIDGET_NAMEN } from "@/lib/lernen/typen";
import { PHYSIK_WIDGET_NAMEN } from "./physik/namen";

/** Alle gueltigen Widget-Namen (fuer den Validator; ohne React-Importe). */
export const ALLE_WIDGET_NAMEN: readonly string[] = [...WIDGET_NAMEN, ...PHYSIK_WIDGET_NAMEN];
