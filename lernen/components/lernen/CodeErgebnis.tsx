import type { CodeErgebnis } from "@/lib/lernen/java/ergebnis";
import { CodeDrawVorschau } from "./CodeDrawVorschau";
import { Md } from "./Md";

/** Ergebnis des Java-Runners: Compilerfehler, Regelverstoesse, Testtabelle, Zeichnungen. */
export function CodeErgebnisAnsicht({ e }: { e: CodeErgebnis }) {
  if (e.status === "deaktiviert" || e.status === "fehler")
    return (
      <div className="code-ergebnis code-ergebnis-hinweis" role="status">
        <Md>{e.meldung ?? ""}</Md>
      </div>
    );
  const sek = (e.ms / 1000).toLocaleString("de-AT", { maximumFractionDigits: 1 });
  return (
    <div className="code-ergebnis">
      {e.compiler.length ? (
        <section aria-label="Compilerfehler">
          <p className="code-ergebnis-titel">Compilerfehler</p>
          <ul className="code-meldungen">
            {e.compiler.map((c, i) => (
              <li key={i}>
                {c.zeile > 0 ? <span className="code-meldung-ort">Zeile {c.zeile}</span> : null}
                <span className="code-meldung-text">{c.meldung}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {e.regeln.length ? (
        <section aria-label="Regelverstöße">
          <p className="code-ergebnis-titel">Regelverstöße</p>
          <ul className="code-meldungen">
            {e.regeln.map((r, i) => (
              <li key={i}>
                {r.zeile > 0 ? <span className="code-meldung-ort">Zeile {r.zeile}</span> : null}
                <span className="code-meldung-text">{r.meldung}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {e.tests.length ? (
        <section aria-label="Testergebnisse">
          <p className="code-ergebnis-titel">
            Tests: {e.tests.filter((t) => t.bestanden).length} von {e.tests.length} bestanden <span className="code-ergebnis-zeit">({sek} s)</span>
          </p>
          <ol className="code-tests">
            {e.tests.map((t) => (
              <li key={t.nr} className={`code-test ${t.bestanden ? "bestanden" : "gescheitert"}`}>
                <p className="code-test-kopf">
                  <span aria-hidden="true">{t.bestanden ? "✓" : "✗"}</span>
                  <span className="sr-only">{t.bestanden ? "bestanden" : "nicht bestanden"}:</span>{" "}
                  {t.versteckt ? `Verborgener Test ${t.nr + 1}` : (t.beschreibung ?? <code>{t.aufruf}</code>)}
                </p>
                {!t.versteckt && (t.erwartet !== undefined || t.erhalten !== undefined) && !t.bestanden ? (
                  <dl className="code-test-werte">
                    {t.erwartet !== undefined ? (
                      <div>
                        <dt>erwartet</dt>
                        <dd>
                          <code>{t.erwartet}</code>
                        </dd>
                      </div>
                    ) : null}
                    {t.erhalten !== undefined ? (
                      <div>
                        <dt>erhalten</dt>
                        <dd>
                          <code>{t.erhalten}</code>
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                ) : null}
                {t.meldung ? <p className="code-test-meldung">{t.meldung}</p> : null}
                {!t.versteckt && !t.bestanden && (t.ausgabeErwartet !== undefined || t.ausgabe) ? (
                  <div className="code-test-ausgaben">
                    {t.ausgabeErwartet !== undefined ? (
                      <div>
                        <p className="code-test-label">erwartete Ausgabe</p>
                        <pre className="code-block">{t.ausgabeErwartet}</pre>
                      </div>
                    ) : null}
                    <div>
                      <p className="code-test-label">deine Ausgabe</p>
                      <pre className="code-block">{t.ausgabe ?? ""}</pre>
                    </div>
                  </div>
                ) : null}
                {!t.versteckt && (t.formen?.length || t.formenSoll?.length) ? (
                  <div className="codedraw-paar">
                    {t.formenSoll ? <CodeDrawVorschau formen={t.formenSoll} titel="erwartet" /> : null}
                    <CodeDrawVorschau formen={t.formen ?? []} titel="deine Zeichnung" />
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </div>
  );
}
