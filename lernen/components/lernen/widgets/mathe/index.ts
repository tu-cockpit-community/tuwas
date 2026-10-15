import type { WidgetKomponente } from "../vertrag";
import { Parameter } from "./Parameter";
import { Tangente } from "./Tangente";
import { Riemann } from "./Riemann";
import { Folge } from "./Folge";
import { Einheitskreis } from "./Einheitskreis";
import { Komplex } from "./Komplex";
import { Binomial } from "./Binomial";
import { Normal } from "./Normal";
import { Vektoren } from "./Vektoren";
import { Gauss } from "./Gauss";
import { Statistik } from "./Statistik";
import { Stetigkeit } from "./Stetigkeit";
import "./widgets.css";

/** Registry der Mathe-Widgets: Name (siehe WIDGET_NAMEN in lib/lernen/typen.ts) -> Komponente. */
export const MATHE_WIDGETS: Record<string, WidgetKomponente> = {
  parameter: Parameter,
  tangente: Tangente,
  riemann: Riemann,
  folge: Folge,
  einheitskreis: Einheitskreis,
  komplex: Komplex,
  binomial: Binomial,
  normal: Normal,
  vektoren: Vektoren,
  gauss: Gauss,
  statistik: Statistik,
  stetigkeit: Stetigkeit,
};
