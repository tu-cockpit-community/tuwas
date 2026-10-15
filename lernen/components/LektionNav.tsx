"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { KursFortschritt, SkriptGliederung } from "@/lib/types";

interface Props {
  kursId: string;
  gliederung: SkriptGliederung;
  fortschritt: KursFortschritt;
}

export function LektionNav({ kursId, gliederung, fortschritt }: Props): React.JSX.Element {
  const pathname = usePathname();
  const basis = `/kurse/${kursId}/lernpfad`;
  const uebersichtAktiv = pathname === basis;
  const testAktiv = pathname.startsWith(`${basis}/test`);

  return (
    <nav className="md:sticky md:top-6 bg-surface-raised border border-line rounded-xl shadow-sm overflow-hidden max-h-[70vh] md:max-h-[calc(100vh-5rem)] overflow-y-auto">
      <Link
        href={basis}
        className={[
          "flex items-center gap-2 px-4 py-3 text-xs font-semibold border-b border-line transition-colors",
          uebersichtAktiv ? "bg-accent-soft text-accent" : "text-ink-muted hover:bg-surface-sunken",
        ].join(" ")}
      >
        {gliederung.titel}
      </Link>

      <div className="divide-y divide-line">
        {gliederung.lektionen.map((l) => {
          const href = `${basis}/lektion/${l.id}`;
          const aktiv = pathname === href;
          const abgeschlossen = fortschritt.lektionen[l.id]?.abgeschlossen ?? false;
          const quiz = fortschritt.quiz[l.id];
          return (
            <Link
              key={l.id}
              href={href}
              className={[
                "flex items-center gap-2.5 px-4 py-2.5 text-xs transition-colors",
                aktiv ? "bg-accent-soft text-accent" : "text-ink-muted hover:bg-surface-sunken hover:text-ink",
              ].join(" ")}
            >
              <span
                className={[
                  "w-1.5 h-1.5 rounded-full shrink-0",
                  abgeschlossen ? "bg-success" : "bg-line-strong",
                ].join(" ")}
              />
              <span className="font-mono text-ink-muted shrink-0 w-4 text-right">
                {l.nr !== null ? String(l.nr).padStart(2, "0") : "-"}
              </span>
              <span className="flex-1 min-w-0 truncate">{l.kurztitel}</span>
              {quiz && (
                <span className="font-mono text-[10px] text-ink-faint shrink-0">
                  {Math.round(quiz.beste_quote * 100)}%
                </span>
              )}
            </Link>
          );
        })}
      </div>

      <Link
        href={`${basis}/test`}
        className={[
          "flex items-center gap-2 px-4 py-3 text-xs font-semibold border-t border-line transition-colors",
          testAktiv ? "bg-accent-soft text-accent" : "text-ink-muted hover:bg-surface-sunken",
        ].join(" ")}
      >
        Programmiertests
      </Link>
    </nav>
  );
}
