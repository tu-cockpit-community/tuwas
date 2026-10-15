import { visit } from "unist-util-visit";
import { toMarkdown } from "mdast-util-to-markdown";
import { directiveToMarkdown } from "mdast-util-directive";
import type { Root } from "mdast";
import type { ContainerDirective, Directives } from "mdast-util-directive";

/** Directive-Namen, die die Lektionstexte als :::name ... ::: benutzen. */
export const CALLOUT_TYPEN = ["merke", "achtung", "fehler", "tipp", "pruefung", "uebung", "check"] as const;
export type CalloutTyp = (typeof CALLOUT_TYPEN)[number];

const TYPEN_SET = new Set<string>(CALLOUT_TYPEN);

/**
 * remark-directive liefert nur die Syntax (containerDirective-Knoten); dieses Plugin markiert
 * bekannte Directive-Namen so, dass react-markdown sie ueber die `components`-Prop als eigene
 * <callout type="..."> Elemente rendert -- Standardmuster aus der remark-directive-Doku
 * (hName/hProperties), siehe z.B. chakra-ui/park-ui.
 */
export function remarkCallouts() {
  return (tree: Root): void => {
    visit(tree, "containerDirective", (node: ContainerDirective) => {
      if (!TYPEN_SET.has(node.name)) return;
      node.data ??= {};
      node.data.hName = "callout";
      node.data.hProperties = { type: node.name };
    });
  };
}

/** Serialisiert eine Directive zurueck in ihre urspruengliche Markdown-Syntax. */
function alsText(node: Directives): string {
  return toMarkdown({ type: "root", children: [node] }, { extensions: [directiveToMarkdown()] }).trim();
}

/**
 * remark-directive interpretiert JEDEN Doppelpunkt vor einem Wort als Text-Directive --
 * das deutsche Gender-Doppelpunkt-Schema in den Lektionstexten ("Studierende:r", "ein:e",
 * "Anfaenger:innen") wuerde sonst kaputtgeparst. Muss NACH remarkCallouts laufen: alles, was
 * keine bekannte Callout-Container-Directive ist (text-/leaf-Directives, unbekannte
 * Container-Namen), wird zurueck in reinen Text verwandelt.
 */
export function remarkDirectivesEntschaerfen() {
  return (tree: Root): void => {
    visit(tree, (node, index, parent) => {
      if (!parent || index === null || index === undefined) return;
      if (node.type !== "textDirective" && node.type !== "leafDirective" && node.type !== "containerDirective") {
        return;
      }
      const directive = node as Directives;
      if (directive.type === "containerDirective" && TYPEN_SET.has(directive.name)) return;
      parent.children[index] = { type: "text", value: alsText(directive) };
    });
  };
}
