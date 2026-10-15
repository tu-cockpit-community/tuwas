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

/** ```plot innerhalb von Markdown (z.B. in einem Loesungsschritt) wird zur Grafik, ```java wird hervorgehoben. */
function Pre(props: React.JSX.IntrinsicElements["pre"] & { node?: unknown }) {
  const { node: _n, children, ...rest } = props;
  void _n;
  const code = children as React.ReactElement<{ className?: string; children?: unknown }> | undefined;
  const klasse = code?.props?.className ?? "";
  if (klasse.includes("language-plot")) {
    const r = PlotSchema.safeParse(yamlParse(String(code?.props.children ?? "")));
    if (r.success) return <Plot spec={r.data} />;
  }
  if (/\blanguage-java\b/i.test(klasse)) return <JavaCode code={String(code?.props.children ?? "")} />;
  return (
    <pre {...rest} className={`code-block ${rest.className ?? ""}`}>
      {children}
    </pre>
  );
}

// "kasten" ist ein eigenes Element des Markdown-Dialekts und steht nicht in Components; ein Cast an dieser einen Stelle.
const components = { kasten: Kasten, table: Tabelle, pre: Pre } as unknown as Components;

const KATEX_OPTIONEN = { strict: false, throwOnError: false, macros: { "\\R": "\\mathbb{R}", "\\N": "\\mathbb{N}", "\\Z": "\\mathbb{Z}", "\\Q": "\\mathbb{Q}", "\\C": "\\mathbb{C}", "\\dd": "\\,\\mathrm{d}" } };

export function Md({ children, inline = false, className = "" }: { children: string; inline?: boolean; className?: string }) {
  const inhalt = (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath, remarkDirective, remarkKaesten]}
      rehypePlugins={[[rehypeKatex, KATEX_OPTIONEN]]}
      components={inline ? { ...components, p: ({ children: c }) => <>{c}</> } : components}
    >
      {normalisiereMathe(children)}
    </ReactMarkdown>
  );
  if (inline) return <span className={`lern-md lern-md-inline ${className}`}>{inhalt}</span>;
  return <div className={`lern-md ${className}`}>{inhalt}</div>;
}

/** Einzelne Formel ohne Markdown-Pipeline (fuer Eingabevorschau, Achsenbeschriftungen). */
export { default as katex } from "katex";
