/**
 * remark-math erkennt einen abgesetzten Formelblock nur, wenn "$$" allein auf einer Zeile steht.
 * Autor:innen schreiben oft "$$\begin{aligned}" ... "\end{aligned}$$" -- das wuerde als Inline-Formel
 * gelesen und zerbricht. Diese Normalisierung stellt die Zaeune auf eigene Zeilen (Einrueckung bleibt,
 * Codebloecke bleiben unberuehrt). Einzeilige "$$x$$" mitten im Satz bleiben, wie sie sind.
 */
export function normalisiereMathe(md: string): string {
  const aus: string[] = [];
  let imCode: string | null = null;
  let offen = false;
  let einzug = "";
  for (const zeile of md.split("\n")) {
    const getrimmt = zeile.trim();
    if (!offen) {
      const zaun = /^(\s*)(`{3,}|~{3,})/.exec(zeile);
      if (imCode) {
        if (zaun && zaun[2].startsWith(imCode)) imCode = null;
        aus.push(zeile);
        continue;
      }
      if (zaun) {
        imCode = zaun[2];
        aus.push(zeile);
        continue;
      }
    }
    if (!offen && getrimmt.startsWith("$$")) {
      einzug = /^\s*/.exec(zeile)![0];
      const rest = getrimmt.slice(2);
      const ende = rest.indexOf("$$");
      if (ende >= 0) {
        // einzeilig: nur umbauen, wenn die Zeile ausschliesslich aus dem Formelblock besteht
        if (rest.slice(ende + 2).trim() === "" && rest.slice(0, ende).trim()) {
          aus.push(`${einzug}$$`, `${einzug}${rest.slice(0, ende).trim()}`, `${einzug}$$`);
        } else aus.push(zeile);
        continue;
      }
      offen = true;
      aus.push(`${einzug}$$`);
      if (rest.trim()) aus.push(`${einzug}${rest.trim()}`);
      continue;
    }
    if (offen) {
      if (getrimmt.endsWith("$$")) {
        const vor = getrimmt.slice(0, -2).trim();
        if (vor) aus.push(`${einzug}${vor}`);
        aus.push(`${einzug}$$`);
        offen = false;
      } else aus.push(zeile);
      continue;
    }
    aus.push(zeile);
  }
  return aus.join("\n");
}
