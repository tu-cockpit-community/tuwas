import { ladeKurs, ladeTextDatei } from "@/lib/lernen/kurs";
import { Md } from "@/components/lernen/Md";

type Props = { params: Promise<{ fach: string }> };

export async function generateMetadata({ params }: Props) {
  const { fach } = await params;
  return { title: `Formelsammlung · ${ladeKurs(fach)?.titel ?? "Lernen"}` };
}

export default async function FormelnSeite({ params }: Props) {
  const { fach } = await params;
  const text = ladeTextDatei(fach, "formelsammlung.md");
  return (
    <div className="lern-seite lern-seite-schmal formelsammlung">
      <header className="seiten-kopf">
        <h1>Formelsammlung</h1>
      </header>
      {text ? <Md>{text}</Md> : <p className="leer">Die Formelsammlung wird gerade erstellt.</p>}
    </div>
  );
}
