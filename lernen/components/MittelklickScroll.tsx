"use client";

import { useEffect } from "react";

/** Bereich um den Startpunkt, in dem nichts scrollt (px). */
const TOTZONE = 14;
/** Elemente, auf denen der Mittelklick seine eigene Bedeutung behaelt (Link in neuem Fenster, Einfuegen). */
const EIGENER_KLICK = "a[href], input, textarea, select, [contenteditable=''], [contenteditable='true'], .cm-editor";

function scrollbar(el: Element): boolean {
  const s = getComputedStyle(el);
  return /(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight + 1;
}

/** Naechster vertikal scrollbare Vorfahre, sonst der Seitencontainer <main>. */
function scrollZiel(start: Element): Element | null {
  for (let el: Element | null = start; el && el !== document.body; el = el.parentElement) {
    if (scrollbar(el)) return el;
  }
  return document.querySelector("main") ?? document.scrollingElement;
}

/** Geschwindigkeit in px pro Frame: waechst mit dem Abstand zum Startpunkt, ausserhalb der Totzone. */
function tempo(abstand: number): number {
  const rest = Math.abs(abstand) - TOTZONE;
  if (rest <= 0) return 0;
  return Math.sign(abstand) * Math.min(80, (rest / 10) ** 1.3);
}

/**
 * Scrollen mit der mittleren Maustaste, wie unter Windows und in Firefox: Klick setzt einen Ankerpunkt, die
 * Entfernung des Zeigers davon bestimmt Richtung und Tempo; der naechste Klick oder Escape beendet es. Gedrueckt
 * halten und ziehen geht auch, dann endet es beim Loslassen. Chromium bietet das unter Linux nicht an (dort fuegt
 * der Mittelklick ein), deshalb hier selbst gebaut.
 */
export function MittelklickScroll() {
  useEffect(() => {
    let ziel: Element | null = null;
    let start = { x: 0, y: 0 };
    let zeiger = { x: 0, y: 0 };
    let bewegt = false;
    let frame = 0;
    let anzeige: HTMLDivElement | null = null;

    const schritt = () => {
      if (!ziel) return;
      ziel.scrollBy(0, tempo(zeiger.y - start.y));
      frame = requestAnimationFrame(schritt);
    };

    const beende = () => {
      if (!ziel) return;
      ziel = null;
      cancelAnimationFrame(frame);
      anzeige?.remove();
      anzeige = null;
      document.documentElement.classList.remove("mittelklick-scroll");
    };

    const beginne = (e: MouseEvent, el: Element) => {
      ziel = el;
      start = { x: e.clientX, y: e.clientY };
      zeiger = start;
      bewegt = false;
      anzeige = document.createElement("div");
      anzeige.className = "mittelklick-anker";
      anzeige.setAttribute("aria-hidden", "true");
      anzeige.style.left = `${e.clientX}px`;
      anzeige.style.top = `${e.clientY}px`;
      document.body.append(anzeige);
      document.documentElement.classList.add("mittelklick-scroll");
      frame = requestAnimationFrame(schritt);
    };

    const runter = (e: MouseEvent) => {
      if (ziel) {
        // Jeder Klick waehrend des Scrollens beendet es und tut sonst nichts
        e.preventDefault();
        e.stopPropagation();
        beende();
        return;
      }
      if (e.button !== 1 || !(e.target instanceof Element) || e.target.closest(EIGENER_KLICK)) return;
      const el = scrollZiel(e.target);
      if (!el) return;
      e.preventDefault();
      beginne(e, el);
    };

    const hoch = (e: MouseEvent) => {
      // Gedrueckt gehalten und gezogen: Loslassen beendet
      if (ziel && e.button === 1 && bewegt) beende();
    };

    const bewegung = (e: MouseEvent) => {
      if (!ziel) return;
      zeiger = { x: e.clientX, y: e.clientY };
      if (Math.abs(zeiger.y - start.y) > TOTZONE) bewegt = true;
    };

    const taste = (e: KeyboardEvent) => {
      if (ziel && e.key === "Escape") {
        e.preventDefault();
        beende();
      }
    };

    // Ohne das oeffnet ein Mittelklick ausserhalb von Links unter Linux nichts, aber er wuerde einfuegen
    const zusatzklick = (e: MouseEvent) => {
      if (e.button === 1 && e.target instanceof Element && !e.target.closest(EIGENER_KLICK)) e.preventDefault();
    };

    window.addEventListener("mousedown", runter, true);
    window.addEventListener("mouseup", hoch, true);
    window.addEventListener("mousemove", bewegung, true);
    window.addEventListener("keydown", taste, true);
    window.addEventListener("auxclick", zusatzklick, true);
    window.addEventListener("wheel", beende, { passive: true });
    window.addEventListener("blur", beende);
    return () => {
      beende();
      window.removeEventListener("mousedown", runter, true);
      window.removeEventListener("mouseup", hoch, true);
      window.removeEventListener("mousemove", bewegung, true);
      window.removeEventListener("keydown", taste, true);
      window.removeEventListener("auxclick", zusatzklick, true);
      window.removeEventListener("wheel", beende);
      window.removeEventListener("blur", beende);
    };
  }, []);
  return null;
}
