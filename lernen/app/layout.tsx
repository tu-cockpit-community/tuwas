import type { Metadata, Viewport } from "next";
import "./fonts.css";
import "./globals.css";
import { Logo } from "@/components/Logo";
import { ThemeUmschalter } from "@/components/ThemeUmschalter";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Lernen · TUWAS", template: "%s · TUWAS" },
  description: "Tu was. Für dein Studium an der TU: Fächer, Lernpfade und Training.",
};

// Der Stand der Inhalte und die Seiten selbst kommen aus der Datenbank und aendern sich beim Aktualisieren.
export const dynamic = "force-dynamic";

export const viewport: Viewport = {
  themeColor: "#006699",
};

// Setzt data-theme auf <html> VOR dem ersten Paint, damit beim Laden kein helles Theme
// aufblitzt, bevor React hydriert. Laeuft synchron im <head>, greift also nie auf React/State zu.
// Eingebettet in eine andere App (?embed=1, gemerkt fuer diesen Rahmen) gibt die Hostapp Logo und
// Hell/Dunkel vor: kein eigenes Logo, und das Theme folgt dem System statt dem gespeicherten Wert.
const ANTI_FLACKER_SKRIPT = `
(function () {
  try {
    if (new URLSearchParams(location.search).get("embed") === "1") sessionStorage.setItem("embed", "1");
    var eingebettet = sessionStorage.getItem("embed") === "1";
    if (eingebettet) document.documentElement.dataset.embed = "1";
    var gespeichert = eingebettet ? null : localStorage.getItem("lernen-theme");
    var theme = gespeichert === "dark" || gespeichert === "light"
      ? gespeichert
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: ANTI_FLACKER_SKRIPT }} />
      </head>
      <body className="flex h-screen flex-col overflow-hidden bg-surface text-ink antialiased">
        {/* In sout eingebettet (?embed=1) steht die Marke in der Hostapp und die Kopfleiste entfaellt. */}
        <header className="marke-kopf flex shrink-0 items-center justify-between gap-3 border-b border-line bg-surface-raised px-5 py-3">
          <div className="flex items-center gap-3">
            <Logo hoehe={26} />
            <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-ink-faint">Lernen</span>
          </div>
          <ThemeUmschalter />
        </header>
        <main className="min-h-0 min-w-0 flex-1 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
