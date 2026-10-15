"use client";

import { useStand } from "@/lib/lernen/fortschritt";

/** "x von N gewusst" fuer eine Gruppe von Karteikarten. */
export function KartenStand({ kurs, ids }: { kurs: string; ids: string[] }) {
  const stand = useStand(kurs);
  const gewusst = ids.filter((id) => (stand.karten[id]?.stufe ?? 0) > 0).length;
  return (
    <>
      {gewusst} von {ids.length} gewusst
    </>
  );
}
