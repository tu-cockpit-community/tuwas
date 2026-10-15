"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Eintrag {
  art: string;
  titel: string;
  ort: string;
  href: string;
  text: string;
}

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Volltextsuche im Browser: Titeltreffer zaehlen mehr als Treffer im Text. */
export function Suche({ eintraege }: { eintraege: Eintrag[] }) {
  const router = useRouter();
  const start = useSearchParams().get("q") ?? "";
  const [q, setQ] = useState(start);
  const treffer = useMemo(() => {
    const woerter = norm(q).split(/\s+/).filter((w) => w.length > 1);
    if (!woerter.length) return [];
    return eintraege
      .map((e) => {
        const t = norm(e.titel);
        const x = norm(e.text);
        let punkte = 0;
        for (const w of woerter) {
          if (t.includes(w)) punkte += e.art === "Definition" ? 12 : 8;
          else if (x.includes(w)) punkte += 1;
          else return null;
        }
        const pos = woerter.map((w) => x.indexOf(w)).find((p) => p >= 0) ?? -1;
        const ausschnitt = pos >= 0 ? `…${e.text.slice(Math.max(0, pos - 60), pos + 120)}…` : "";
        return { e, punkte, ausschnitt };
      })
      .filter((r): r is { e: Eintrag; punkte: number; ausschnitt: string } => r !== null)
      .sort((a, b) => b.punkte - a.punkte)
      .slice(0, 40);
  }, [q, eintraege]);

  return (
    <div>
      <label htmlFor="suche" className="sr-only">
        Suchbegriff
      </label>
      <input
        id="suche"
        className="feld suche-feld"
        type="search"
        autoFocus
        value={q}
        placeholder="z. B. Kettenregel, Binomialverteilung, Ohmsches Gesetz"
        onChange={(e) => {
          setQ(e.target.value);
          router.replace(e.target.value ? `?q=${encodeURIComponent(e.target.value)}` : "?", { scroll: false });
        }}
      />
      <p className="sitzung-ort" aria-live="polite">
        {q.trim().length > 1 ? `${treffer.length} Treffer` : "Mindestens zwei Buchstaben eingeben."}
      </p>
      <ul className="suche-treffer">
        {treffer.map(({ e, ausschnitt }) => (
          <li key={e.href + e.titel}>
            <Link href={e.href}>
              <strong>{e.titel}</strong>
              <span>
                {e.art} · {e.ort}
              </span>
              {ausschnitt ? <span>{ausschnitt}</span> : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
