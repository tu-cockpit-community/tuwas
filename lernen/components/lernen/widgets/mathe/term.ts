import type { MathNode } from "mathjs";
import { math, normalisiere } from "@/lib/lernen/rechnen";

/** Termhilfen fuer das Parameter-Widget: freie Parameter finden, Werte einsetzen, TeX verschoenern. */

const KEINE_PARAMETER = new Set(["x", "e", "E", "pi", "PI", "i", "Infinity", "NaN", "deg"]);

function istFunktionsname(path: string, parent: MathNode | null): boolean {
  return !!parent && (parent as { isFunctionNode?: boolean }).isFunctionNode === true && path === "fn";
}

/** Symbole eines Terms ausser x und Konstanten, in Reihenfolge des Auftretens */
export function parameterSymbole(f: string, variable = "x"): string[] {
  try {
    const knoten = math.parse(normalisiere(f));
    const namen: string[] = [];
    knoten.traverse((n: MathNode, path: string, parent: MathNode | null) => {
      const s = n as MathNode & { isSymbolNode?: boolean; name?: string };
      if (s.isSymbolNode && s.name && !istFunktionsname(path, parent) && s.name !== variable && !KEINE_PARAMETER.has(s.name) && !namen.includes(s.name)) namen.push(s.name);
    });
    return namen;
  } catch {
    return [];
  }
}

/**
 * Dezimalpunkt -> {,}; "2\cdot x" -> "2x" (Zahl vor Buchstabe/Funktion); "\mathrm{b}" -> "b";
 * "+-" -> "−" und "--" -> "+" (entstehen beim Einsetzen negativer Werte).
 */
export function schoenerTex(tex: string): string {
  return tex
    .replace(/\\mathrm\{([a-zA-Z])\}/g, "$1")
    .replace(/~/g, " ")
    .replace(/(\d)\.(\d)/g, "$1{,}$2")
    .replace(/([a-zA-Z0-9])\\cdot\s*(?=[a-zA-Z{]|\\(?:sin|cos|tan|ln|log|exp|sqrt|left|pi|frac))/g, "$1 ")
    // Koeffizient 1 weglassen: "2+1x" -> "2+x" (nicht bei "21x" oder "0{,}1x")
    .replace(/(^|[+\-=(\s])1\s*(?=[a-zA-Z]|\\(?:sin|cos|tan|ln|log|exp|sqrt|pi)\b)/g, "$1")
    .replace(/\+\s*-/g, "-")
    .replace(/-\s*-/g, "+");
}

const REGELN = [
  "n*1 -> n",
  "1*n -> n",
  "n+0 -> n",
  "0+n -> n",
  "n-0 -> n",
  "0-n -> -n",
  "0*n -> 0",
  "n*0 -> 0",
  "0/n -> 0",
  "n^1 -> n",
  "n/1 -> n",
  "n1+(-n2) -> n1-n2",
  "n1-(-n2) -> n1+n2",
];

/** Term als TeX; null bei Syntaxfehler */
export function termTex(f: string): string | null {
  try {
    return schoenerTex(math.parse(normalisiere(f)).toTex({ parenthesis: "auto", implicit: "hide" }));
  } catch {
    return null;
  }
}

/** Werte einsetzen und vereinfachen, z.B. a*sin(b*x+c)+d mit a=2,b=1,c=0,d=0 -> 2 sin(x) */
export function eingesetztTex(f: string, werte: Record<string, number>): string | null {
  try {
    const knoten = math.parse(normalisiere(f));
    const ersetzt = knoten.transform((n: MathNode, path: string, parent: MathNode | null) => {
      const s = n as MathNode & { isSymbolNode?: boolean; name?: string };
      if (s.isSymbolNode && s.name && werte[s.name] !== undefined && !istFunktionsname(path, parent)) {
        const v = Number(werte[s.name].toPrecision(6));
        const c = new math.ConstantNode(Math.abs(v));
        return v < 0 ? new math.OperatorNode("-", "unaryMinus", [c]) : c;
      }
      return n;
    });
    let ergebnis: MathNode = ersetzt;
    try {
      // nur "kosmetische" Regeln: Reihenfolge der Summanden bleibt wie im Term des Autors
      ergebnis = math.simplify(ersetzt, REGELN);
    } catch {
      /* unvereinfacht anzeigen */
    }
    return schoenerTex(ergebnis.toTex({ parenthesis: "auto", implicit: "hide" }));
  } catch {
    return null;
  }
}
