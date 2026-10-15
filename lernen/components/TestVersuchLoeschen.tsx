"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { loescheTestVersuch } from "@/app/kurs-actions";

interface Props {
  kursId: string;
  index: number;
}

/** Loescht einen einzelnen Testversuch -- index ist die Position INNERHALB ALLER
 * Testversuche des Kurses (siehe loescheTestVersuch), nicht nur dieses einen Tests. */
export function TestVersuchLoeschen({ kursId, index }: Props): React.JSX.Element {
  const router = useRouter();
  const [pending, start] = useTransition();

  function loeschen(): void {
    if (!confirm("Diesen Testversuch endgültig löschen?")) return;
    start(async () => {
      await loescheTestVersuch(kursId, index);
      router.refresh();
    });
  }

  return (
    <button
      type="button"
      onClick={loeschen}
      disabled={pending}
      className="text-xs text-danger hover:underline disabled:opacity-50 shrink-0"
    >
      Löschen
    </button>
  );
}
