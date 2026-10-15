"use client";
import { useRouter } from "next/navigation";

interface Props {
  href: string;
}

/** Builds the ?start= timestamp at click time (not during any render) and navigates. */
export function TestStartKnopf({ href }: Props): React.JSX.Element {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push(`${href}?start=${Date.now()}`)}
      className="inline-flex items-center px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors"
    >
      Test starten
    </button>
  );
}
