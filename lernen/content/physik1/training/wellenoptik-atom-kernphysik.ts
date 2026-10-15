import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "wellenoptik-atom-kernphysik";
const H = 6.626e-34;
const C = 3.0e8;
const E = 1.602e-19;
const ME = 9.109e-31;
const KC = 8.99e9;

export const DRILLS: Drill[] = [
  drill({
    id: "p16-d-photon",
    kapitel: K,
    titel: "Photonenenergie aus der Wellenlänge",
    niveau: 1,
    erzeuge: (r) => {
      const l = r.int(20, 140) * 5;
      const ev = (H * C) / (l * 1e-9) / E;
      return {
        angabe: `Berechne die Energie eines Photons der Wellenlänge $${l}\\,\\text{nm}$ in eV ($h = 6{,}626\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$, $c = 3{,}00\\cdot 10^{8}\\,\\text{m/s}$).`,
        teile: [
          {
            typ: "zahl",
            loesung: `${H}*${C}/(${l}e-9)/${E}`,
            einheit: "eV",
            fehler: [{ wert: `${H}*${C}/(${l}e-9)`, meldung: "Das ist die Energie in **Joule**. Für Elektronvolt teilst du noch durch $1{,}602\\cdot 10^{-19}$." }],
          },
        ],
        hinweis: "E = hc/λ mit λ in Metern, dann durch 1,602·10⁻¹⁹ J/eV teilen.",
        loesung: `**Ansatz:** Photonenenergie $E = hc/\\lambda$, die Wellenlänge in Metern: $\\lambda = ${l}\\cdot 10^{-9}\\,\\text{m}$.\n---\n**Joule:** $E = \\dfrac{6{,}626\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}\\cdot 3{,}00\\cdot 10^{8}\\,\\text{m/s}}{${l}\\cdot 10^{-9}\\,\\text{m}} = ${tz((H * C) / (l * 1e-9) / 1e-19, 3)}\\cdot 10^{-19}\\,\\text{J}$.\n---\n**Elektronvolt:** $E = ${tz(ev, 3)}\\,\\text{eV}$. Kontrolle mit der Merkregel: $1240/${l} \\approx ${tz(1240 / l, 2)}$.`,
      };
    },
  }),
  drill({
    id: "p16-d-photoeffekt",
    kapitel: K,
    titel: "Photoeffekt: maximale Elektronenenergie",
    niveau: 2,
    erzeuge: (r) => {
      const [metall, w] = r.wahl([
        ["Cäsium", 1.94],
        ["Kalium", 2.25],
        ["Natrium", 2.28],
        ["Calcium", 2.87],
        ["Zink", 4.3],
      ] as const);
      const lg = ((H * C) / (w * E)) * 1e9;
      const l = Math.max(100, Math.floor((lg * r.int(40, 85)) / 100 / 5) * 5);
      const eph = (H * C) / (l * 1e-9) / E;
      return {
        angabe: `${metall} (Austrittsarbeit $${tz(w)}\\,\\text{eV}$) wird mit Licht der Wellenlänge $${l}\\,\\text{nm}$ bestrahlt. Berechne die maximale kinetische Energie der Photoelektronen in eV.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${H}*${C}/(${l}e-9)/${E} - ${w}`,
            einheit: "eV",
            fehler: [{ wert: `${H}*${C}/(${l}e-9)/${E}`, meldung: "Das ist die Energie des Photons. Die Austrittsarbeit wird beim Verlassen des Metalls verbraucht, ziehe sie ab." }],
          },
        ],
        hinweis: "Einstein: E_kin = hf − W_A. Die Photonenenergie zuerst in eV ausrechnen.",
        loesung: `**Ansatz:** Einsteinsche Gleichung $hf = W_A + E_{\\text{kin,max}}$.\n---\n**Photonenenergie:** $E_{\\text{Ph}} = \\dfrac{hc}{\\lambda} = ${tz(eph, 3)}\\,\\text{eV}$.\n---\n**Ergebnis:** $E_{\\text{kin,max}} = ${tz(eph, 3)}\\,\\text{eV} - ${tz(w)}\\,\\text{eV} = ${tz(eph - w, 3)}\\,\\text{eV}$. Die Grenzwellenlänge von ${metall} ist $${tz(lg, 0)}\\,\\text{nm}$, kürzere Wellen lösen also Elektronen aus.`,
      };
    },
  }),
  drill({
    id: "p16-d-doppelspalt",
    kapitel: K,
    titel: "Wellenlänge aus dem Doppelspalt",
    niveau: 2,
    erzeuge: (r) => {
      const l = r.int(40, 70) * 10; // nm
      const d = r.wahl([0.1, 0.2, 0.25, 0.3, 0.5] as const); // mm
      const a = r.wahl([1, 1.5, 2, 2.5, 3] as const); // m
      const dx = ((l * 1e-9 * a) / (d * 1e-3)) * 1000; // mm
      const dxs = tz(dx, 2).replace("{,}", ".");
      return {
        angabe: `Bei einem Doppelspalt mit $d = ${tz(d)}\\,\\text{mm}$ liegen die hellen Streifen auf einem $${tz(a)}\\,\\text{m}$ entfernten Schirm $${tz(dx, 2)}\\,\\text{mm}$ auseinander. Berechne die Wellenlänge in nm.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${dxs}e-3*${d}e-3/${a}*1e9`,
            einheit: "nm",
            fehler: [{ wert: `${dxs}e-3*${a}/(${d}e-3)*1e9`, meldung: "Beim Umstellen von $\\Delta x = \\lambda a/d$ wandert $d$ in den Zähler und $a$ in den Nenner: $\\lambda = \\Delta x\\,d/a$." }],
          },
        ],
        hinweis: "Δx = λa/d nach λ umstellen, alle Längen in Meter.",
        loesung: `**Ansatz:** Für kleine Winkel gilt $\\Delta x = \\lambda a/d$, also $\\lambda = \\Delta x\\, d/a$.\n---\n**Rechnung:** $\\lambda = \\dfrac{${tz(dx, 2)}\\cdot 10^{-3}\\,\\text{m}\\cdot ${tz(d)}\\cdot 10^{-3}\\,\\text{m}}{${tz(a)}\\,\\text{m}} \\approx ${l}\\cdot 10^{-9}\\,\\text{m} = ${l}\\,\\text{nm}$.\n---\n**Kontrolle:** Sichtbares Licht liegt zwischen $400$ und $750\\,\\text{nm}$, das Ergebnis passt.`,
      };
    },
  }),
  drill({
    id: "p16-d-gitter",
    kapitel: K,
    titel: "Winkel am optischen Gitter",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.wahl([100, 200, 300, 500, 600] as const);
      const l = r.int(40, 70) * 10;
      const g = 1e-3 / n;
      // Größte ganze Zahl k mit k·λ < g. Bei k·λ = g wäre α = 90°, das Licht liefe streifend am Gitter entlang.
      const kmax = Math.ceil(g / (l * 1e-9) - 1e-9) - 1;
      const k = r.int(1, Math.min(2, kmax));
      const a = (Math.asin((k * l * 1e-9) / g) * 180) / Math.PI;
      return {
        angabe: `Licht der Wellenlänge $${l}\\,\\text{nm}$ fällt senkrecht auf ein Gitter mit ${n} Strichen pro mm. Unter welchem Winkel (in Grad) erscheint das Maximum ${k}. Ordnung?`,
        teile: [
          {
            typ: "zahl",
            loesung: `inGrad(asin(${k}*${l}e-9/(1e-3/${n})))`,
            einheit: "°",
            fehler: [{ wert: `${k}*${l}e-9/(1e-3/${n})`, meldung: "Das ist $\\sin\\alpha$. Den Winkel liefert erst die Umkehrfunktion $\\sin^{-1}$." }],
          },
        ],
        hinweis: "g·sin α = kλ mit g = 1 mm/N.",
        loesung: `**Gitterkonstante:** $g = \\dfrac{1\\,\\text{mm}}{${n}} = ${tz(g * 1e6, 3)}\\,\\mu\\text{m}$.\n---\n**Sinus:** $\\sin\\alpha = \\dfrac{k\\lambda}{g} = \\dfrac{${k}\\cdot ${l}\\,\\text{nm}}{${tz(g * 1e9, 1)}\\,\\text{nm}} = ${tz((k * l * 1e-9) / g, 4)}$.\n---\n**Winkel:** $\\alpha = \\sin^{-1}(${tz((k * l * 1e-9) / g, 4)}) = ${tz(a, 2)}^\\circ$. Die höchste sichtbare Ordnung ist hier $${kmax}$.`,
      };
    },
  }),
  drill({
    id: "p16-d-wasserstoff",
    kapitel: K,
    titel: "Spektrallinie des Wasserstoffs",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(1, 3);
      const m = r.int(n + 1, 6);
      const de = 13.6 * (1 / (n * n) - 1 / (m * m));
      const l = ((H * C) / (de * E)) * 1e9;
      return {
        angabe: `Das Elektron eines Wasserstoffatoms springt von $n = ${m}$ nach $n = ${n}$. Berechne Photonenenergie (in eV) und Wellenlänge (in nm).`,
        teile: [
          {
            typ: "zahl",
            label: "Energie in eV",
            loesung: `13.6*(1/${n}^2-1/${m}^2)`,
            einheit: "eV",
            fehler: [{ wert: `13.6*(1/${n}-1/${m})`, meldung: "Die Niveaus hängen von $1/n^2$ ab, nicht von $1/n$." }],
          },
          { typ: "zahl", label: "Wellenlänge in nm", loesung: `${H}*${C}/(13.6*(1/${n}^2-1/${m}^2)*${E})*1e9`, einheit: "nm" },
        ],
        hinweis: "E_n = −13,6 eV/n², hf = E_m − E_n, dann λ = hc/ΔE mit ΔE in Joule.",
        loesung: `**Ansatz:** Bohrs zweites Postulat $hf = E_m - E_n$ mit $E_n = -13{,}6\\,\\text{eV}/n^2$.\n---\n**Energie:** $\\Delta E = 13{,}6\\left(\\dfrac{1}{${n * n}} - \\dfrac{1}{${m * m}}\\right)\\,\\text{eV} = ${tz(de, 3)}\\,\\text{eV}$.\n---\n**Wellenlänge:** $\\lambda = \\dfrac{hc}{\\Delta E} = ${tz(l, 1)}\\,\\text{nm}$${l > 400 && l < 750 ? ", sichtbar." : l <= 400 ? ", im Ultravioletten." : ", im Infraroten."}`,
      };
    },
  }),
  drill({
    id: "p16-d-halbwertszeit",
    kapitel: K,
    titel: "Restmenge nach Halbwertszeiten",
    niveau: 1,
    erzeuge: (r) => {
      const [stoff, T, einheit] = r.wahl([
        ["Jod-131", 8, "d"],
        ["Technetium-99m", 6, "h"],
        ["Cäsium-137", 30, "a"],
        ["Kohlenstoff-14", 5730, "a"],
        ["Radon-222", 3.8, "d"],
      ] as const);
      const t = T * r.wahl([0.5, 1, 1.5, 2, 2.5, 3, 4, 5] as const);
      return {
        angabe: `${stoff} hat die Halbwertszeit $${tz(T)}\\,\\text{${einheit}}$. Wie viel Prozent einer Probe sind nach $${tz(t)}\\,\\text{${einheit}}$ noch vorhanden?`,
        teile: [
          {
            typ: "zahl",
            loesung: `100*0.5^(${t}/${T})`,
            einheit: "%",
            // nach genau einer Halbwertszeit ist 0,5·t/T = 0,5^(t/T), dann kein Fehlerbild
            fehler: t === T ? undefined : [{ wert: `100*0.5*${t}/${T}`, meldung: "Die Zahl der Halbwertszeiten steht im **Exponenten**: $0{,}5^{t/T}$, nicht $0{,}5\\cdot t/T$." }],
          },
        ],
        hinweis: "N/N₀ = 0,5^(t/T½).",
        loesung: `**Halbwertszeiten zählen:** $t/T_{1/2} = ${tz(t)}/${tz(T)} = ${tz(t / T)}$.\n---\n**Zerfallsgesetz:** $N/N_0 = 0{,}5^{${tz(t / T)}} = ${tz(100 * 0.5 ** (t / T), 2)}\\,\\%$. Nach jeder Halbwertszeit halbiert sich der **Rest**.`,
      };
    },
  }),
  drill({
    id: "p16-d-zerfallsgleichung",
    kapitel: K,
    titel: "Zerfallsgleichung: Tochterkern bestimmen",
    niveau: 1,
    erzeuge: (r) => {
      const [name, Z, A, art] = r.wahl([
        ["Radium-226", 88, 226, "alpha"],
        ["Uran-238", 92, 238, "alpha"],
        ["Polonium-210", 84, 210, "alpha"],
        ["Americium-241", 95, 241, "alpha"],
        ["Kohlenstoff-14", 6, 14, "beta"],
        ["Cäsium-137", 55, 137, "beta"],
        ["Strontium-90", 38, 90, "beta"],
        ["Kobalt-60", 27, 60, "beta"],
      ] as const);
      const alpha = art === "alpha";
      const z2 = alpha ? Z - 2 : Z + 1;
      const a2 = alpha ? A - 4 : A;
      return {
        angabe: `${name} ($Z = ${Z}$) ist ein ${alpha ? "Alpha" : "Beta-minus"}-Strahler. Gib Ordnungszahl und Massenzahl des Tochterkerns an.`,
        teile: [
          {
            typ: "vektor",
            namen: ["Z", "A"],
            loesung: [String(z2), String(a2)],
            fehler: alpha
              ? [{ wert: [String(Z - 4), String(A - 2)], meldung: "Massen- und Ladungszahl sind vertauscht. Das Alphateilchen $^{4}_{2}\\text{He}$ nimmt vier Nukleonen, aber nur zwei Protonen mit." }]
              : [{ wert: [String(Z - 1), String(A)], meldung: "Beim Beta-minus-Zerfall wird ein Neutron zum Proton. Die Ordnungszahl **steigt**." }],
          },
        ],
        hinweis: alpha ? "Alphateilchen: ⁴₂He, also A − 4 und Z − 2." : "Beta-minus: Neutron wird Proton, A bleibt, Z + 1.",
        loesung: alpha
          ? `**Ansatz:** Beim Alphazerfall verlässt ein Kern $^{4}_{2}\\text{He}$ den Kern.\n---\n**Ergebnis:** $Z = ${Z} - 2 = ${z2}$, $A = ${A} - 4 = ${a2}$. Probe: $${a2} + 4 = ${A}$ und $${z2} + 2 = ${Z}$.`
          : `**Ansatz:** Beim Beta-minus-Zerfall wird ein Neutron zum Proton, ein Elektron wird ausgesandt.\n---\n**Ergebnis:** $Z = ${Z} + 1 = ${z2}$, $A = ${A}$ bleibt. Probe der Ladung: $${z2} + (-1) = ${Z}$.`,
      };
    },
  }),
  drill({
    id: "p16-d-debroglie",
    kapitel: K,
    titel: "De-Broglie-Wellenlänge eines Elektrons",
    niveau: 2,
    erzeuge: (r) => {
      const U = r.wahl([50, 100, 150, 200, 500, 1000, 5000, 10000] as const);
      const l = (H / Math.sqrt(2 * ME * E * U)) * 1e9;
      return {
        angabe: `Ein Elektron wird aus der Ruhe durch $${U}\\,\\text{V}$ beschleunigt. Berechne seine de-Broglie-Wellenlänge in nm ($m_e = 9{,}109\\cdot 10^{-31}\\,\\text{kg}$).`,
        teile: [
          {
            typ: "zahl",
            loesung: `${H}/sqrt(2*${ME}*${E}*${U})*1e9`,
            einheit: "nm",
            fehler: [{ wert: `${H}/(2*${ME}*${E}*${U})*1e9`, meldung: "Aus $eU = p^2/(2m)$ folgt $p = \\sqrt{2meU}$. Die Wurzel fehlt." }],
          },
        ],
        hinweis: "p = √(2meU), λ = h/p.",
        loesung: `**Ansatz:** Die Feldarbeit $eU$ wird zur Bewegungsenergie $p^2/(2m)$, also $p = \\sqrt{2meU}$, und $\\lambda = h/p$.\n---\n**Impuls:** $p = \\sqrt{2 m e U} = ${tz(Math.sqrt(2 * ME * E * U) * 1e24, 3)}\\cdot 10^{-24}\\,\\text{kg}\\,\\text{m/s}$.\n---\n**Wellenlänge:** $\\lambda = h/p = ${tz(l, 4)}\\,\\text{nm}$. Größenordnung der Atomabstände, deshalb beugen Kristalle Elektronen.`,
      };
    },
  }),
  drill({
    id: "p16-d-malus",
    kapitel: K,
    titel: "Unpolarisiertes Licht durch zwei Filter",
    niveau: 2,
    erzeuge: (r) => {
      const phi = r.wahl([15, 20, 25, 35, 40, 50, 55, 65, 70, 75] as const);
      const anteil = 50 * Math.cos((phi * Math.PI) / 180) ** 2;
      return {
        angabe: `Unpolarisiertes Licht durchläuft zwei Polarisationsfilter, deren Durchlassrichtungen den Winkel $${phi}^\\circ$ einschließen. Wie viel Prozent der ursprünglichen Intensität kommen durch?`,
        teile: [
          {
            typ: "zahl",
            loesung: `50*cos(inRad(${phi}))^2`,
            einheit: "%",
            fehler: [
              { wert: `100*cos(inRad(${phi}))^2`, meldung: "Der erste Filter halbiert unpolarisiertes Licht. Der Faktor $\\tfrac12$ fehlt." },
              { wert: `50*cos(inRad(${phi}))`, meldung: "Im Gesetz von Malus steht der Kosinus **im Quadrat**." },
            ],
          },
        ],
        hinweis: "Erster Filter: Hälfte. Zweiter Filter: I = I₁·cos²φ.",
        loesung: `**Ansatz:** Erster Filter halbiert, zweiter Filter nach Malus mit $\\cos^2\\varphi$.\n---\n**Rechnung:** $\\cos ${phi}^\\circ = ${tz(Math.cos((phi * Math.PI) / 180), 3)}$, $\\cos^2 ${phi}^\\circ = ${tz(Math.cos((phi * Math.PI) / 180) ** 2, 3)}$.\n---\n**Ergebnis:** $50\\,\\%\\cdot ${tz(Math.cos((phi * Math.PI) / 180) ** 2, 3)} = ${tz(anteil, 1)}\\,\\%$.`,
      };
    },
  }),
  drill({
    id: "p16-d-rutherford",
    kapitel: K,
    titel: "Kleinster Abstand eines Alphateilchens",
    niveau: 2,
    erzeuge: (r) => {
      const [kern, Z] = r.wahl([
        ["Gold", 79],
        ["Silber", 47],
        ["Kupfer", 29],
        ["Aluminium", 13],
        ["Blei", 82],
      ] as const);
      const mev = r.wahl([3, 4, 5, 6, 7, 8] as const);
      const rmin = (KC * 2 * Z * E * E) / (mev * 1e6 * E);
      return {
        angabe: `Ein Alphateilchen mit $${mev}\\,\\text{MeV}$ fliegt zentral auf einen ${kern}kern ($Z = ${Z}$) zu. Berechne den kleinsten Abstand in fm ($1\\,\\text{fm} = 10^{-15}\\,\\text{m}$, $k = 8{,}99\\cdot 10^{9}\\,\\text{N}\\,\\text{m}^2/\\text{C}^2$).`,
        teile: [
          {
            typ: "zahl",
            loesung: `8.99e9*2*${Z}*(1.602e-19)^2/(${mev}e6*1.602e-19)*1e15`,
            einheit: "fm",
            fehler: [{ wert: `8.99e9*${Z}*(1.602e-19)^2/(${mev}e6*1.602e-19)*1e15`, meldung: "Das Alphateilchen trägt **zwei** Elementarladungen. Im Zähler steht $2Z\\,e^2$." }],
          },
        ],
        hinweis: "Energiesatz am Umkehrpunkt: E_kin = k·(2e)(Ze)/r_min, Energie in Joule.",
        loesung: `**Ansatz:** Am Umkehrpunkt ist die Bewegungsenergie ganz in potentielle Energie umgewandelt: $r_{\\min} = k\\cdot 2Ze^2/E_{\\text{kin}}$.\n---\n**Energie:** $E_{\\text{kin}} = ${mev}\\cdot 10^{6}\\cdot 1{,}602\\cdot 10^{-19}\\,\\text{J} = ${tz(mev * 1e6 * E * 1e13, 3)}\\cdot 10^{-13}\\,\\text{J}$.\n---\n**Ergebnis:** $r_{\\min} = ${tz(rmin * 1e15, 1)}\\,\\text{fm}$. Der Kern ist kleiner als dieser Abstand.`,
      };
    },
  }),
  drill({
    id: "p16-d-c14-alter",
    kapitel: K,
    titel: "Alter aus dem C-14-Gehalt",
    niveau: 3,
    erzeuge: (r) => {
      const p = r.wahl([15, 20, 25, 30, 35, 45, 55, 60, 70, 80] as const);
      const t = (5730 * Math.log(100 / p)) / Math.LN2;
      return {
        angabe: `Ein Fundstück enthält nur noch $${p}\\,\\%$ des Kohlenstoff-14-Gehalts von lebendem Material ($T_{1/2} = 5730\\,\\text{a}$). Wie alt ist es (in Jahren)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `5730*ln(100/${p})/ln(2)`,
            einheit: "a",
            toleranz: 20,
            fehler: [{ wert: `5730*(100-${p})/50`, meldung: "Der Zerfall ist exponentiell, nicht linear. Setze $${tz(p / 100, 2)} = 0{,}5^{t/T}$ an und logarithmiere." }],
          },
        ],
        hinweis: "0,01·Anteil = 0,5^(t/T). Logarithmieren: t = T·ln(N₀/N)/ln 2.",
        loesung: `**Ansatz:** $\\dfrac{N}{N_0} = ${tz(p / 100, 2)} = 0{,}5^{t/T_{1/2}}$.\n---\n**Logarithmieren:** $\\dfrac{t}{T_{1/2}} = \\dfrac{\\ln(${tz(100 / p, 3)})}{\\ln 2} = ${tz(Math.log(100 / p) / Math.LN2, 3)}$.\n---\n**Ergebnis:** $t = ${tz(Math.log(100 / p) / Math.LN2, 3)}\\cdot 5730\\,\\text{a} = ${tz(t, 0)}\\,\\text{a}$.`,
      };
    },
  }),
  drill({
    id: "p16-d-dosis",
    kapitel: K,
    titel: "Äquivalentdosis bei gemischter Strahlung",
    niveau: 2,
    erzeuge: (r) => {
      const dg = r.int(2, 9) / 10; // mGy Gamma
      const da = r.int(1, 9) / 100; // mGy Alpha
      const h = dg + 20 * da;
      return {
        angabe: `Eine Person erhält eine Gamma-Energiedosis von $${tz(dg)}\\,\\text{mGy}$ und eine Alpha-Energiedosis von $${tz(da)}\\,\\text{mGy}$. Berechne die gesamte Äquivalentdosis in mSv ($w_R$: Gamma $1$, Alpha $20$).`,
        teile: [
          {
            typ: "zahl",
            loesung: `${dg}+20*${da}`,
            einheit: "mSv",
            fehler: [{ wert: `${dg}+${da}`, meldung: "Die Energiedosen wurden ungewichtet addiert. Alphastrahlung zählt zwanzigfach." }],
          },
        ],
        hinweis: "H = Σ w_R·D, jede Strahlungsart mit ihrem Faktor.",
        loesung: `**Ansatz:** $H = w_\\gamma D_\\gamma + w_\\alpha D_\\alpha$.\n---\n**Rechnung:** $H = 1\\cdot ${tz(dg)}\\,\\text{mSv} + 20\\cdot ${tz(da)}\\,\\text{mSv} = ${tz(dg)}\\,\\text{mSv} + ${tz(20 * da, 2)}\\,\\text{mSv} = ${tz(h, 2)}\\,\\text{mSv}$.`,
      };
    },
  }),
  drill({
    id: "p16-d-abstand",
    kapitel: K,
    titel: "Dosisleistung und Abstand",
    niveau: 1,
    erzeuge: (r) => {
      const d0 = r.wahl([20, 40, 60, 80, 120, 200] as const);
      const f = r.wahl([2, 3, 4, 5] as const);
      return {
        angabe: `In $1\\,\\text{m}$ Abstand von einer punktförmigen Gammaquelle beträgt die Dosisleistung $${d0}\\,\\mu\\text{Sv/h}$. Wie groß ist sie in $${f}\\,\\text{m}$ Abstand (in µSv/h)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${d0}/${f}^2`,
            einheit: "µSv/h",
            fehler: [{ wert: `${d0}/${f}`, meldung: "Die Dosisleistung fällt mit $1/r^2$, nicht mit $1/r$." }],
          },
        ],
        hinweis: "Abstandsgesetz: Dosisleistung ∼ 1/r².",
        loesung: `**Ansatz:** Die Strahlung verteilt sich auf eine Kugelfläche $4\\pi r^2$, also Dosisleistung $\\sim 1/r^2$.\n---\n**Rechnung:** $${d0}\\,\\mu\\text{Sv/h}/${f}^2 = ${tz(d0 / (f * f), 2)}\\,\\mu\\text{Sv/h}$.`,
      };
    },
  }),
];
