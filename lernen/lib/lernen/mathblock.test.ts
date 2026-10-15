import { test } from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { normalisiereMathe } from "./mathblock";
import { Md } from "../../components/lernen/Md";

const html = (md: string) => renderToStaticMarkup(createElement(Md, null, md));

test("mehrzeiliger aligned-Block mit $$ am Zeilenanfang/-ende rendert ohne Fehler", () => {
  const md = "Text davor:\n$$\\begin{aligned}\nx + y &= 30\\\\\nx - y &= 10\n\\end{aligned}$$\nText danach.";
  const h = html(md);
  assert.ok(!h.includes("katex-error"), "kein KaTeX-Fehler");
  assert.ok(h.includes("katex-display"), "als abgesetzte Formel gerendert");
  assert.ok(!h.replace(/<annotation[\s\S]*?<\/annotation>/g, "").includes("$$"));
});

test("einzeilige Formeln und Codebloecke bleiben unveraendert", () => {
  assert.equal(normalisiereMathe("Es gilt $$a=b$$ im Satz."), "Es gilt $$a=b$$ im Satz.");
  const code = "```\n$$\\begin{x}\n```";
  assert.equal(normalisiereMathe(code), code);
  assert.equal(normalisiereMathe("  $$x^2$$"), "  $$\n  x^2\n  $$");
});
