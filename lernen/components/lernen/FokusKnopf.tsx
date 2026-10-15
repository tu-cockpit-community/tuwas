"use client";

import { useEffect, useSyncExternalStore } from "react";

/**
 * Fokusmodus: blendet die App-Navigation aus, damit die Lektion die volle Breite und Ruhe bekommt.
 * Zustand liegt als data-fokus auf <html> und in localStorage (Nutzerpraeferenz, nicht Lernstand).
 */
const SCHLUESSEL = "lernen-fokus";

function lies(): boolean {
  return typeof document !== "undefined" && document.documentElement.dataset.fokus === "an";
}
function abonniere(h: () => void) {
  const mo = new MutationObserver(h);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-fokus"] });
  return () => mo.disconnect();
}
export function setzeFokus(an: boolean) {
  if (an) document.documentElement.dataset.fokus = "an";
  else delete document.documentElement.dataset.fokus;
  try {
    localStorage.setItem(SCHLUESSEL, an ? "an" : "aus");
  } catch {
    /* ohne Speicher gilt der Modus nur fuer diese Seite */
  }
}

/** Im Lernbereich: gespeicherte Praeferenz anwenden; beim Verlassen Navigation immer wieder zeigen. */
export function FokusRahmen() {
  useEffect(() => {
    try {
      if (localStorage.getItem(SCHLUESSEL) === "an") document.documentElement.dataset.fokus = "an";
    } catch {
      /* kein Speicher: Standard ohne Fokus */
    }
    return () => {
      delete document.documentElement.dataset.fokus;
    };
  }, []);
  return null;
}

export function FokusKnopf() {
  const an = useSyncExternalStore(abonniere, lies, () => false);
  return (
    <button
      type="button"
      className="fokus-knopf"
      aria-pressed={an}
      onClick={() => setzeFokus(!an)}
      title={an ? "Navigation wieder einblenden" : "Navigation ausblenden und nur lernen"}
    >
      {an ? "Navigation zeigen" : "Fokusmodus"}
    </button>
  );
}
