import { notFound } from "next/navigation";
import { ladeBereiche, ladeKurs, ladeUebersicht } from "@/lib/lernen/kurs";
import { KursNav } from "@/components/lernen/KursNav";
import { KursGliederung, type GliederungKapitel } from "@/components/lernen/KursGliederung";

export default async function FachLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ fach: string }>;
}) {
  const { fach } = await params;
  const kurs = ladeKurs(fach);
  if (!kurs) notFound();
  // Kurzform fuer Gliederung und Kapitelwechsel; ladeUebersicht kommt aus dem Cache
  const kapitel: GliederungKapitel[] = ladeUebersicht(fach).map((k) => ({
    slug: k.slug,
    nummer: k.meta.nummer,
    titel: k.meta.titel,
    abschnitte: k.abschnitte,
  }));
  return (
    <>
      <KursNav fach={fach} titel={kurs.titel} bereiche={ladeBereiche(fach)} kapitel={kapitel} />
      <KursGliederung fach={fach} kapitel={kapitel}>
        {children}
      </KursGliederung>
    </>
  );
}
