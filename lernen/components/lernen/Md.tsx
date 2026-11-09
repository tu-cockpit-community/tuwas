import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkDirective from "remark-directive";
import rehypeKatex from "rehype-katex";
import { parse as yamlParse } from "yaml";
import { remarkKaesten, KASTEN_TYPEN, type KastenTyp } from "@/lib/lernen/kaesten";
import { PlotSchema } from "@/lib/lernen/typen";
import { Plot } from "./Plot";
import { normalisiereMathe } from "@/lib/lernen/mathblock";
import { JavaCode } from "./JavaCode";
import { AblaufKnopf } from "./AblaufKnopf";
import { javaTokens } from "@/lib/lernen/javaHighlight";

/**
 * Markdown + KaTeX fuer Lerninhalte. Bewusst ohne "use client" und ohne async: dieselbe Komponente
 * rendert serverseitig (Kapiteltext) und clientseitig (zufallsgenerierte Trainingsaufgaben).
 */

function Kasten({ typ, titel, children }: { typ: KastenTyp; titel?: string; children?: React.ReactNode }) {
  const name = KASTEN_TYPEN[typ] ?? typ;
  // Beweise zugeklappt: erst selbst ueberlegen, dann nachlesen (und weniger Ablenkung beim ersten Lesen)
  if (typ === "beweis")
    return (
      <details className="kasten kasten-beweis">
        <summary>
          <span className="kasten-kopf">
            <span className="kasten-art">{name}</span>
            {titel ? <span className="kasten-titel">{titel}</span> : null}
            <span className="kasten-aufklapp kasten-aufklapp-zu">aufklappen</span>
            <span className="kasten-aufklapp kasten-aufklapp-auf">zuklappen</span>
          </span>
        </summary>
        <div className="kasten-inhalt">{children}</div>
      </details>
    );
  return (
    <aside className={`kasten kasten-${typ}`} aria-label={titel ? `${name}: ${titel}` : name}>
      <p className="kasten-kopf">
        <span className="kasten-art">{name}</span>
        {titel ? <span className="kasten-titel">{titel}</span> : null}
      </p>
      <div className="kasten-inhalt">{children}</div>
    </aside>
  );
}

function Tabelle(props: React.JSX.IntrinsicElements["table"] & { node?: unknown }) {
  const { node: _n, ...rest } = props;
  void _n;
  return (
    <div className="tabelle-huelle">
      <table {...rest} />
    </div>
  );
}

/** Methodenkopf `Typ name(...) {`, aber nicht `if (...) {`, `for (...) {` usw. */
const METHODENKOPF = /\b(?!(?:if|for|while|switch|catch|return|new|else|do)\b)[A-Za-z_][\w<>[\],.]*\s+(?!(?:if|for|while|switch|catch)\b)[A-Za-z_]\w*\s*\([^()]*\)\s*\{/;

/**
 * Sieht ein Java-Block lauffaehig aus? Dann bekommt er "Ablauf ansehen". Lauffaehig sind Klassen mit `main` und
 * Anweisungen mit Ausgabe (`System.out`) oder mit einem eigenen Zeichenfenster (`new CodeDraw(`). Nicht:
 *  - Klassen oder Methoden ohne `main` (ohne Aufruf laeuft nichts),
 *  - Eingabe ueber `System.in` (in Lektionen gibt es keine Tastatureingabe),
 *  - Bloecke, die `CodeDraw` oder `Palette` nennen, aber kein Fenster anlegen (nur `import codedraw.*;` oder `cd.fillCircle(...)`
 *    ohne `new CodeDraw(`: dort fehlt das Fenster, oder das Programm hat nichts zu zeichnen),
 *  - Zeichen-Anweisungen mit `import`-Zeile ohne Klasse (sie sind meist ein Dateiausschnitt, dem Deklarationen fehlen),
 *  - Platzhalter wie ein alleinstehendes `...` (nicht in Kommentaren oder Strings, nicht als Varargs).
 * Das ist nur die Vorauswahl: `npm run lernen:lektion-ablauf` prueft jeden so ausgewaehlten Block in Java und in der
 * Engine; ein Block, der nicht laeuft, muss vervollstaendigt oder als `text` gesetzt werden.
 */
export function siehtAusfuehrbarAus(code: string): boolean {
  const ohneText = javaTokens(code)
    .map((t) => (t.art === "kom" ? "" : t.art === "str" ? '""' : t.text))
    .join("");
  if (/…|(^|[\s{}();,=])\.\.\.(?=[\s;,)}]|$)/.test(ohneText)) return false;
  if (/\bSystem\.in\b/.test(ohneText)) return false;
  const zeichnet = /\bnew\s+CodeDraw\s*\(/.test(ohneText);
  if (/\b(?:CodeDraw|Palette)\b/.test(ohneText) && !zeichnet) return false;
  if (/\bstatic\s+void\s+main\s*\(/.test(ohneText)) return true;
  if (/\bclass\s+\w/.test(ohneText) || METHODENKOPF.test(ohneText)) return false;
  if (zeichnet && /^\s*import\b/m.test(ohneText)) return false;
  return zeichnet || /\bSystem\.out\b/.test(ohneText);
}

/** ```plot innerhalb von Markdown (z.B. in einem Loesungsschritt) wird zur Grafik, ```java wird hervorgehoben. */
function Pre(props: React.JSX.IntrinsicElements["pre"] & { node?: unknown; ablauf?: boolean }) {
  const { node: _n, ablauf = false, children, ...rest } = props;
  void _n;
  const code = children as React.ReactElement<{ className?: string; children?: unknown }> | undefined;
  const klasse = code?.props?.className ?? "";
  if (klasse.includes("language-plot")) {
    const r = PlotSchema.safeParse(yamlParse(String(code?.props.children ?? "")));
    if (r.success) return <Plot spec={r.data} />;
  }
  if (/\blanguage-java\b/i.test(klasse)) {
    const java = String(code?.props.children ?? "");
    if (!ablauf || !siehtAusfuehrbarAus(java)) return <JavaCode code={java} />;
    return (
      <div className="ablauf-block">
        <JavaCode code={java} />
        <AblaufKnopf quelle={java.replace(/\n+$/, "\n")} />
      </div>
    );
  }
  return (
    <pre {...rest} className={`code-block ${rest.className ?? ""}`}>
      {children}
    </pre>
  );
}

function PreMitAblauf(props: React.JSX.IntrinsicElements["pre"] & { node?: unknown }) {
  return <Pre {...props} ablauf />;
}

// "kasten" ist ein eigenes Element des Markdown-Dialekts und steht nicht in Components; ein Cast an dieser einen Stelle.
const components = { kasten: Kasten, table: Tabelle, pre: Pre } as unknown as Components;
const componentsMitAblauf = { ...components, pre: PreMitAblauf } as unknown as Components;

const KATEX_OPTIONEN = { strict: false, throwOnError: false, macros: { "\\R": "\\mathbb{R}", "\\N": "\\mathbb{N}", "\\Z": "\\mathbb{Z}", "\\Q": "\\mathbb{Q}", "\\C": "\\mathbb{C}", "\\dd": "\\,\\mathrm{d}" } };

/**
 * `ablauf`: lauffaehige Java-Bloecke bekommen den Knopf "Ablauf ansehen". Nur fuer Lektionstext und Loesungswege
 * einschalten, nie fuer Angaben, Hinweise oder Kartenfragen: der Ablauf zeigt die Ausgabe und verraet so die Antwort.
 */
export function Md({ children, inline = false, className = "", ablauf = false }: { children: string; inline?: boolean; className?: string; ablauf?: boolean }) {
  const basis = ablauf ? componentsMitAblauf : components;
  const inhalt = (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath, remarkDirective, remarkKaesten]}
      rehypePlugins={[[rehypeKatex, KATEX_OPTIONEN]]}
      components={inline ? { ...basis, p: ({ children: c }) => <>{c}</> } : basis}
    >
      {normalisiereMathe(children)}
    </ReactMarkdown>
  );
  if (inline) return <span className={`lern-md lern-md-inline ${className}`}>{inhalt}</span>;
  return <div className={`lern-md ${className}`}>{inhalt}</div>;
}

/** Einzelne Formel ohne Markdown-Pipeline (fuer Eingabevorschau, Achsenbeschriftungen). */
export { default as katex } from "katex";
