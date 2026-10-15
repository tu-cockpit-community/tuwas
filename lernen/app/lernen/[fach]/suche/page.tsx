import { Suspense } from "react";
import { ladeKurs } from "@/lib/lernen/kurs";
import { kursIndex } from "@/lib/lernen/kursindex";
import { ladeGlossar } from "@/lib/lernen/glossar";
import { Suche } from "@/components/lernen/Suche";

type Props = { params: Promise<{ fach: string }> };

export async function generateMetadata({ params }: Props) {
  const { fach } = await params;
  return { title: `Suche · ${ladeKurs(fach)?.titel ?? "Lernen"}` };
}

export default async function SucheSeite({ params }: Props) {
  const { fach } = await params;
  const index = kursIndex(fach);
  const eintraege = [
    ...ladeGlossar(fach).map((g) => ({
      art: "Definition",
      titel: g.begriff,
      ort: `Kapitel ${g.nummer}: ${g.lektionTitel}`,
      href: `/lernen/${fach}/glossar#${g.anker}`,
      text: g.text.replace(/\$[^$]*\$/g, " ").slice(0, 400),
    })),
    ...index.kapitel.flatMap((k) =>
      k.abschnitte.flatMap((a) => [
        { art: "Lektion", titel: `${a.nummer} ${a.titel}`, ort: `Kapitel ${k.nummer}: ${k.titel}`, href: `/lernen/${fach}/${k.slug}/${a.id}`, text: a.text },
        ...a.aufgaben.map((x) => ({
          art: x.art === "check" ? "Kurzcheck" : "Aufgabe",
          titel: x.titel,
          ort: `${a.nummer} ${a.titel}`,
          href: `/lernen/${fach}/${k.slug}/${a.id}#${x.id}`,
          text: "",
        })),
      ]),
    ),
  ];
  return (
    <div className="lern-seite lern-seite-schmal">
      <header className="seiten-kopf">
        <h1>Suche</h1>
        <p>Durchsucht Lektionen, Definitionen und Aufgabentitel.</p>
      </header>
      <Suspense fallback={null}>
        <Suche eintraege={eintraege} />
      </Suspense>
    </div>
  );
}
