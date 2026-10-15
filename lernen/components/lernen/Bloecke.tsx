import { teilFuerClient, type Aufgabe as AufgabeDaten, type Block, type Teil } from "@/lib/lernen/typen";
import { musterAlsBlock, musterMd, optionenTexte, schritteAus } from "./aufgabeText";
import { Md } from "./Md";
import { Plot } from "./Plot";
import { Aufgabe, type TeilRender } from "./Aufgabe";
import { WidgetHost } from "./widgets/WidgetHost";
import { Karten } from "./Karten";
import { Reflexion } from "./Reflexion";
import { karteId } from "@/lib/lernen/karteId";

export function teilRender(teil: Teil): TeilRender {
  return {
    label: teil.label ? <Md inline>{teil.label}</Md> : undefined,
    optionen: optionenTexte(teil)?.map((o, i) => <Md key={i} inline>{o}</Md>),
    muster: musterMd(teil),
    musterBlock: musterAlsBlock(teil),
    fehler: teil.typ !== "text" ? teil.fehler?.map((f) => f.meldung) : undefined,
  };
}

export function AufgabeBlock({ kurs, aufgabe, nummer }: { kurs: string; aufgabe: AufgabeDaten; nummer?: string }) {
  return (
    <Aufgabe
      kurs={kurs}
      id={aufgabe.id}
      nummer={nummer}
      titel={aufgabe.titel}
      niveau={aufgabe.niveau}
      quelle={aufgabe.quelle}
      punkte={aufgabe.punkte}
      angabe={<Md>{aufgabe.angabe}</Md>}
      plot={aufgabe.plot ? <Plot spec={aufgabe.plot} /> : undefined}
      teile={aufgabe.teile.map(teilFuerClient)}
      teilRender={aufgabe.teile.map(teilRender)}
      hinweise={aufgabe.hinweise}
      schritte={schritteAus(aufgabe.loesung)}
      art={aufgabe.art}
      gefuehrt={aufgabe.gefuehrt?.map((g) => ({
        text: <Md>{g.text}</Md>,
        teil: g.teil ? teilFuerClient(g.teil) : undefined,
        teilRender: g.teil ? teilRender(g.teil) : undefined,
        erklaerung: g.erklaerung,
      }))}
    />
  );
}

export function Bloecke({ kurs, bloecke, praefix, kapitel }: { kurs: string; bloecke: Block[]; praefix: string; kapitel: string }) {
  let n = 0;
  return (
    <>
      {bloecke.map((b, i) => {
        switch (b.art) {
          case "md":
            return <Md key={i}>{b.md}</Md>;
          case "plot":
            return <Plot key={i} spec={b.plot} />;
          case "widget":
            return <WidgetHost key={i} name={b.widget.name} titel={b.widget.titel} props={b.widget.props} />;
          case "reflexion":
            return <Reflexion key={i} frage={<Md>{b.reflexion.frage}</Md>} antwort={<Md>{b.reflexion.antwort}</Md>} />;
          case "karten":
            return (
              <Karten
                key={i}
                kurs={kurs}
                karten={b.karten.map((k) => ({
                  id: karteId(kapitel, k),
                  frage: <Md>{k.frage}</Md>,
                  antwort: <Md>{k.antwort}</Md>,
                  kernpunkte: k.kernpunkte?.map((kp, j) => <Md key={j} inline>{kp}</Md>),
                }))}
              />
            );
          case "aufgabe":
            n++;
            return <AufgabeBlock key={b.aufgabe.id} kurs={kurs} aufgabe={b.aufgabe} nummer={`${praefix}.${n}`} />;
        }
      })}
    </>
  );
}
