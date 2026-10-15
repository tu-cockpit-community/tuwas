import Link from "next/link";
import { ladeKurs } from "@/lib/lernen/kurs";
import { ladeGlossar } from "@/lib/lernen/glossar";
import { GlossarText } from "@/components/lernen/GlossarEintrag";

type Props = { params: Promise<{ fach: string }> };

export async function generateMetadata({ params }: Props) {
  const { fach } = await params;
  return { title: `Glossar · ${ladeKurs(fach)?.titel ?? "Lernen"}` };
}

export default async function GlossarSeite({ params }: Props) {
  const { fach } = await params;
  const eintraege = ladeGlossar(fach);
  const buchstabe = (s: string) => s.replace(/^[^A-Za-zÄÖÜäöü]+/, "").charAt(0).toUpperCase().replace("Ä", "A").replace("Ö", "O").replace("Ü", "U") || "#";
  const buchstaben = [...new Set(eintraege.map((e) => buchstabe(e.begriff)))];
  return (
    <div className="lern-seite lern-seite-schmal">
      <header className="seiten-kopf">
        <h1>Glossar</h1>
        <p>Alle Definitionen des Kurses von A bis Z, jeweils mit der Lektion, in der der Begriff erklärt wird.</p>
      </header>
      {eintraege.length === 0 ? <p className="leer">Noch keine Definitionen gefunden.</p> : null}
      <nav className="glossar-buchstaben" aria-label="Anfangsbuchstaben">
        {buchstaben.map((b) => (
          <a key={b} href={`#b-${b}`}>
            {b}
          </a>
        ))}
      </nav>
      <div className="glossar-liste">
        {eintraege.map((e, i) => {
          const b = buchstabe(e.begriff);
          const erster = i === 0 || buchstabe(eintraege[i - 1].begriff) !== b;
          return (
            <article key={`${e.kapitel}-${e.anker}-${i}`} id={erster ? `b-${b}` : undefined} className="glossar-eintrag">
              <h2 id={e.anker}>{e.begriff}</h2>
              <p className="glossar-ort">
                Kapitel {e.nummer}{" "}
                <Link href={e.lektion ? `/lernen/${fach}/${e.kapitel}/${e.lektion}` : `/lernen/${fach}/${e.kapitel}`}>
                  {e.kapitelTitel}: {e.lektionTitel}
                </Link>
              </p>
              <GlossarText text={e.text} />
            </article>
          );
        })}
      </div>
    </div>
  );
}
