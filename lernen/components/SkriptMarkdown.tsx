import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import rehypeSlug from "rehype-slug";
import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import { remarkCallouts, remarkDirectivesEntschaerfen } from "@/lib/callouts";
import { ladeHighlighter } from "@/lib/highlighter";
import { Callout } from "./Callout";
import { ResponsiveTabelle } from "./ResponsiveTabelle";
import { CodeKopierenKnopf } from "./CodeKopierenKnopf";

type PreProps = React.JSX.IntrinsicElements["pre"] & { node?: unknown };

/** Codebloecke bleiben in beiden Themes dunkel (siehe globals.css), ein einzelnes dunkles Shiki-Theme
 * genuegt. `node` wird nicht destrukturiert und damit nicht an das DOM-<pre> durchgereicht. */
function CodePre({ className, children, style }: PreProps): React.JSX.Element {
  const istHervorgehoben = typeof className === "string" && className.includes("shiki");
  return (
    <div data-code-block className="my-4 rounded-lg overflow-hidden border border-code-line">
      {istHervorgehoben && (
        <div className="flex items-center justify-between bg-code-header-bg px-3 py-1 border-b border-code-line">
          <span className="text-[10px] font-mono uppercase tracking-wider text-ink-faint">Java</span>
          <CodeKopierenKnopf />
        </div>
      )}
      <pre
        style={style}
        className={`${className ?? ""} !bg-code-bg !m-0 p-4 text-xs overflow-x-auto leading-relaxed`}
      >
        {children}
      </pre>
    </div>
  );
}

// "callout" ist kein HTML-Element und steht nicht in Components; die Typen der Eintraege passen nicht zu den
// JSX-Intrinsics, daher ein Cast an dieser einen Stelle.
const components = { pre: CodePre, table: ResponsiveTabelle, callout: Callout } as unknown as Components;

/**
 * Rendert Markdown der Lektionen. rehypeSlug vergibt jeder Ueberschrift eine `id`. remarkDirective und
 * remarkCallouts machen aus :::merke ... ::: Bloecken ein <Callout>; @shikijs/rehype faerbt Java-Code
 * serverseitig ein (kein Client-JS).
 */
interface Props {
  children: string;
  /** Auslassen, wenn ein umgebendes Element (z.B. Aufklappbar) bereits Karten-Chrome liefert. */
  bloss?: boolean;
}

export async function SkriptMarkdown({ children, bloss = false }: Props): Promise<React.JSX.Element> {
  const highlighter = await ladeHighlighter();
  return (
    <article
      className={`${bloss ? "" : "bg-surface-raised border border-line rounded-xl shadow-sm px-8 py-8"} prose prose-slate prose-sm max-w-none
        prose-headings:scroll-mt-6
        prose-h1:text-xl prose-h1:font-bold prose-h1:text-ink prose-h1:border-b prose-h1:border-line prose-h1:pb-3 prose-h1:mb-6
        prose-h2:text-base prose-h2:font-semibold prose-h2:text-ink prose-h2:mt-8 prose-h2:mb-3
        prose-h3:text-sm prose-h3:font-semibold prose-h3:text-ink-soft prose-h3:mt-5 prose-h3:mb-2
        prose-p:text-ink-soft prose-p:leading-relaxed
        prose-code:bg-surface-sunken prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-ink prose-code:text-[0.8em] prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-transparent prose-pre:p-0 prose-pre:shadow-none
        prose-table:text-sm prose-th:bg-surface-sunken prose-th:font-semibold prose-th:text-ink-muted
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-li:text-ink-soft prose-li:leading-relaxed
        prose-strong:text-ink prose-strong:font-semibold
        prose-blockquote:border-accent-line prose-blockquote:bg-accent-soft prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:not-italic`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkDirective, remarkCallouts, remarkDirectivesEntschaerfen]}
        rehypePlugins={[rehypeSlug, [rehypeShikiFromHighlighter, highlighter, { theme: "github-dark" }]]}
        components={components}
      >
        {children}
      </ReactMarkdown>
    </article>
  );
}
