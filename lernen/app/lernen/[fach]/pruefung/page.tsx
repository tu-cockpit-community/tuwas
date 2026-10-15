import Link from "next/link";
import { ladeKurs, ladePruefungen } from "@/lib/lernen/kurs";
import { PruefungsVersuche } from "@/components/lernen/PruefungsVersuche";

type Props = { params: Promise<{ fach: string }> };

export async function generateMetadata({ params }: Props) {
  const { fach } = await params;
  return { title: `Prüfungen · ${ladeKurs(fach)?.titel ?? "Lernen"}` };
}

export default async function PruefungenSeite({ params }: Props) {
  const { fach } = await params;
  const kurs = ladeKurs(fach);
  const pruefungen = ladePruefungen(fach);
  const originale = pruefungen.filter((p) => p.art === "original");
  const simulationen = pruefungen.filter((p) => p.art === "simulation");
  const liste = (ps: typeof pruefungen) => (
    <ul className="pruefungs-liste">
      {ps.map((p) => (
        <li key={p.id}>
          <Link href={`/lernen/${fach}/pruefung/${p.id}`} className="pruefungs-karte">
            <span className="pruefungs-name">{p.titel}</span>
            <span className="pruefungs-meta">
              {p.aufgaben.length} Aufgaben · {p.aufgaben.reduce((s, a) => s + (a.punkte ?? 0), 0)} Punkte · {p.dauer_minuten} min
            </span>
            {p.quelle ? <span className="pruefungs-quelle">{p.quelle}</span> : null}
            <PruefungsVersuche kurs={fach} id={p.id} />
          </Link>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="lern-seite lern-seite-schmal">
      <header className="seiten-kopf">
        <h1>Prüfungssimulation</h1>
        <p>
          {kurs?.pruefung?.dauer_minuten ?? 120} Minuten, {kurs?.pruefung?.hilfsmittel ?? "Taschenrechner"}. Rechne auf Papier
          und trag am Ende nur die Ergebnisse ein.
        </p>
      </header>
      {pruefungen.length === 0 ? <p className="leer">Die Prüfungssimulationen werden gerade erstellt.</p> : null}
      {originale.length ? (
        <section className="pruefungs-gruppe">
          <h2>Echte Musterprüfungen, nachgebaut</h2>
          {liste(originale)}
        </section>
      ) : null}
      {simulationen.length ? (
        <section className="pruefungs-gruppe">
          <h2>Neue Simulationen im Stil der aktuellen Prüfung</h2>
          {liste(simulationen)}
        </section>
      ) : null}
    </div>
  );
}
