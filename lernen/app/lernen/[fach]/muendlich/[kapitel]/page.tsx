import Link from "next/link";
import { notFound } from "next/navigation";
import { ladeKapitel, ladeKurs } from "@/lib/lernen/kurs";
import { Karten } from "@/components/lernen/Karten";
import { Md } from "@/components/lernen/Md";
import { karteId } from "@/lib/lernen/karteId";
import { kartenGruppen } from "@/lib/lernen/kartenGruppen";

type Props = { params: Promise<{ fach: string; kapitel: string }> };

export async function generateMetadata({ params }: Props) {
  const { fach, kapitel } = await params;
  const k = ladeKapitel(fach, kapitel);
  return { title: `${k ? `Kapitel ${k.meta.nummer}` : "Mündlich"} · ${ladeKurs(fach)?.titel ?? "Lernen"}` };
}

/** Die Karteikarten eines Kapitels. Ids passen zu denen im Kapitel. */
export default async function MuendlichKapitelSeite({ params }: Props) {
  const { fach, kapitel } = await params;
  const k = ladeKapitel(fach, kapitel);
  const gruppen = k ? kartenGruppen(k) : [];
  if (!k || gruppen.length === 0) notFound();
  return (
    <div className="lern-seite lern-seite-schmal">
      <header className="seiten-kopf">
        <p>
          <Link href={`/lernen/${fach}/muendlich`}>← Alle Kapitel</Link>
        </p>
        <h1>
          {k.meta.nummer} {k.meta.titel}
        </h1>
      </header>
      <section className="muendlich-kapitel">
        {gruppen.map(({ praefix, index, block }) => (
          <Karten
            key={`${praefix}-${index}`}
            kurs={fach}
            titel={`${block.karten.length} Fragen`}
            karten={block.karten.map((karte) => ({
              id: karteId(k.slug, karte),
              frage: <Md>{karte.frage}</Md>,
              antwort: <Md>{karte.antwort}</Md>,
              kernpunkte: karte.kernpunkte?.map((kp, x) => <Md key={x} inline>{kp}</Md>),
            }))}
          />
        ))}
      </section>
    </div>
  );
}
