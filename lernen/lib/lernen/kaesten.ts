import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import type { Root, Paragraph } from "mdast";
import type { ContainerDirective } from "mdast-util-directive";

/** Container-Directives im Lerntext: :::satz[Satz von Rolle] ... ::: */
export const KASTEN_TYPEN = {
  definition: "Definition",
  satz: "Satz",
  beweis: "Beweis",
  beispiel: "Beispiel",
  merke: "Merke",
  achtung: "Typischer Fehler",
  tipp: "Tipp",
  pruefung: "Prüfungstipp",
  intuition: "Intuition",
  formel: "Formel",
  zusammenfassung: "Auf einen Blick",
  vorwissen: "Das brauchst du",
  anwendung: "Wo man das braucht",
} as const;
export type KastenTyp = keyof typeof KASTEN_TYPEN;

export function remarkKaesten() {
  return (tree: Root): void => {
    visit(tree, (node, index, parent) => {
      if (!parent || index === undefined) return;
      if (node.type === "containerDirective") {
        const d = node as ContainerDirective;
        // eigene Schluessel, nicht "in": sonst waere z. B. :::constructor (Object.prototype) ein Kasten
        if (Object.prototype.hasOwnProperty.call(KASTEN_TYPEN, d.name)) {
          let titel = "";
          const erstes = d.children[0] as Paragraph | undefined;
          if (erstes?.type === "paragraph" && (erstes.data as { directiveLabel?: boolean } | undefined)?.directiveLabel) {
            titel = toString(erstes);
            d.children.shift();
          }
          d.data ??= {};
          d.data.hName = "kasten";
          d.data.hProperties = { typ: d.name, titel };
          return;
        }
      }
      // Alles andere, was remark-directive erkannt hat (z.B. "Prüfer:innen"), wird wieder Text.
      if (node.type === "textDirective" || node.type === "leafDirective" || node.type === "containerDirective") {
        const name = (node as { name: string }).name;
        const prefix = node.type === "textDirective" ? ":" : node.type === "leafDirective" ? "::" : ":::";
        parent.children[index] = { type: "text", value: prefix + name + toString(node) } as never;
      }
    });
  };
}
