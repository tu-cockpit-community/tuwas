import { javaTokens } from "@/lib/lernen/javaHighlight";

/**
 * Hervorgehobener Java-Code (Server und Browser, kein "use client" noetig). `zeilenNummern` blendet eine
 * Nummernspalte ein, die Screenreader ueberspringen.
 */
export function JavaTokens({ code }: { code: string }) {
  return (
    <>
      {javaTokens(code).map((t, i) =>
        t.art ? (
          <span key={i} className={`jv-${t.art}`}>
            {t.text}
          </span>
        ) : (
          t.text
        ),
      )}
    </>
  );
}

export function JavaCode({ code, zeilenNummern = false, className = "" }: { code: string; zeilenNummern?: boolean; className?: string }) {
  const text = code.replace(/\n+$/, "");
  if (!zeilenNummern)
    return (
      <pre className={`code-block code-java ${className}`}>
        <code>
          <JavaTokens code={text} />
        </code>
      </pre>
    );
  return (
    <pre className={`code-block code-java code-mit-nummern ${className}`}>
      <code>
        {text.split("\n").map((z, i) => (
          <span key={i} className="code-zeile">
            <span className="code-nr" aria-hidden="true">
              {i + 1}
            </span>
            <JavaTokens code={z} />
            {"\n"}
          </span>
        ))}
      </code>
    </pre>
  );
}
