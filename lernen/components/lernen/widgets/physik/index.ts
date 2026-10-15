import type { WidgetKomponente } from "../vertrag";
import { Linse } from "./Linse";
import { PVDiagramm } from "./PVDiagramm";
import { Schwingung } from "./Schwingung";
import { Stromkreis } from "./Stromkreis";
import { Wellen } from "./Wellen";
import { Wurf } from "./Wurf";
import { Zerfall } from "./Zerfall";

/** Registry der Physik-Widgets: Name -> Komponente. Namen zusaetzlich in ./namen.ts eintragen. */
export const PHYSIK_WIDGETS: Record<string, WidgetKomponente> = {
  schwingung: Schwingung,
  wellen: Wellen,
  linse: Linse,
  "pv-diagramm": PVDiagramm,
  wurf: Wurf,
  stromkreis: Stromkreis,
  zerfall: Zerfall,
};
