# Sprachleitfaden: maximal verständlich

Verbindlich für alle Kursinhalte (Kapiteltext, Kästen, Aufgaben, Hinweise, Lösungswege, Karten).
Gilt zusätzlich zu [`AUTHORING.md`](./AUTHORING.md) (Format) und [`QUALITAET.md`](./QUALITAET.md) (Didaktik).

## Für wen wir schreiben

Für einen klugen, motivierten Erwachsenen, der **nichts mehr weiß**, alles verstehen will und
**allein** lernt: Niemand sitzt daneben, den man fragen kann. Jede Stelle, an der er stockt, ist
ein Fehler des Textes, nicht des Lesers.

**Der Maßstab:** Nach dem Lesen bleibt **keine einzige offene Frage** übrig. Wo ein Gedanke schwer
ist, wird er nicht kürzer, sondern **langsamer, kleiner und geduldiger** erklärt. Freundlich,
ermutigend und genau, aber nie herablassend und nie ungenau.

## Die Regeln

### 1. Jede Stelle ist für sich verständlich
- Kästen (Prüfungstipp, Achtung, Merke), Hinweise, Lösungsschritte und Karten werden oft **einzeln**
  gelesen. Sie dürfen nichts voraussetzen, was nur „irgendwo oben“ steht. Entweder kurz wiederholen
  oder mit Link verweisen **und** in einem Halbsatz sagen, worum es dort geht.
- Kein „wie oben“, „bekanntlich“, „offensichtlich“, „trivial“, „man sieht leicht“, „analog“.
- **Jede `##`-Überschrift ist eine eigene Lektionsseite.** Darum nie „oben“, „unten“, „weiter vorne“ oder
  „im Abschnitt X“ ohne Link. Immer verlinken: `[11.1 Was heißt sich nähern?](/lernen/mathe3/grenzwerte-folgen/was-heisst-sich-naehern)`.
  Die Lektions-id ist der Titel in Kleinbuchstaben, nur a–z, 0–9 und Bindestrich; Umlaute als ae/oe/ue/ss,
  griechische Buchstaben ausgeschrieben (ε → epsilon). Der Validator prüft jeden dieser Links.
- Ein Prüfungstipp sagt **was** man tun soll, **warum**, und **wie es konkret klingt**.

### 2. Jeder Fachbegriff wird erklärt, bevor er benutzt wird
- Beim ersten Auftreten im Kapitel: **fett**, dann in Alltagssprache, was er bedeutet, dann ein
  Beispiel. Erst danach die exakte Definition.
- Fremdwörter und lateinische Begriffe zusätzlich übersetzen („monoton wachsend, also: wird nie kleiner“).
- Begriffe aus früheren Kapiteln beim ersten Gebrauch im neuen Kapitel kurz in Klammern erinnern.

### 3. Jedes Symbol wird benannt
- Nach jeder Formel: „Dabei ist … die …, … die …“. Keine Variable bleibt unerklärt.
- Zeichen wie $\Rightarrow$, $\iff$, $\forall$, $\exists$, $\in$, $\subset$ werden beim ersten Auftreten in Worten
  vorgelesen („$\Rightarrow$ liest man ‚daraus folgt‘“).
- **Im Fließtext keine Formel-Kurzschrift als Satzteil.** Statt „$p^2$ gerade $\Rightarrow$ $p$ gerade“ schreibt man
  „Wenn $p^2$ gerade ist, dann ist auch $p$ gerade.“

### 4. Jeder Rechenschritt sagt, was passiert und warum
- „Wir multiplizieren beide Seiten mit $2$, damit der Bruch verschwindet.“ Nicht nur die nächste Zeile hinschreiben.
- Kein Schritt wird übersprungen, auch kein „leichter“. Lieber ein Schritt zu viel.
- Bei Umformungen den verwendeten Rechenschritt benennen (Ausmultiplizieren, Kürzen, Kettenregel …).

### 5. Erst konkret, dann allgemein
- Zahlenbeispiel → Muster erkennen → allgemeine Regel → noch ein Beispiel → Gegenbeispiel.
- Zu jeder Formel mindestens ein Beispiel mit echten Zahlen.
- Zu jeder Definition ein Beispiel **und** ein Nicht-Beispiel („Das hier ist **keine** …, weil …“).

### 6. Schwere Stellen bekommen Sonderbehandlung
Beweise, Quantoren ($\varepsilon$-$N$, $\varepsilon$-$\delta$), Grenzwerte, Wahrscheinlichkeitslogik, Vektorrechnung im
Raum, Physik-Modelle: hier jeweils
1. **Worum geht es in einem Satz?** (Ziel des Gedankens)
2. **Bild oder Alltagsvergleich** (z. B. ε-Schlauch als „Toleranzband“)
3. **In kleinen Schritten**, jeder Schritt mit Begründung
4. **In Worten zurückübersetzen:** „Was haben wir gerade gezeigt?“
5. **Typisches Missverständnis** benennen und auflösen

### 7. Kurze, klare Sätze
- Ein Gedanke pro Satz. Durchschnitt unter 18 Wörtern, nie über 30.
- Aktiv statt passiv („Wir setzen ein“ statt „Es wird eingesetzt“).
- Keine Abkürzungen: nicht „z. B.“ in Formeln, nicht „d. h.“, „bzw.“, „i. A.“, „o. B. d. A.“, „s. o.“ → ausschreiben.
  (Erlaubt: „z. B.“ im Fließtext, Einheiten, Kapitelnummern.)
- Absätze mit höchstens 4–5 Sätzen. Aufzählungen statt Satzschlangen.

### 8. Ton
- Du-Form, warm, sachlich. Ermutigen, wo es schwer wird („Diese Stelle ist für fast alle ungewohnt. Lies sie zweimal.“).
- Keine Umgangssprache, kein Sarkasmus, keine Insider-Witze, keine Übertreibungen.

## Beispiel: vorher und nachher

**Vorher (unverständlich ohne Kontext):**

> **Prüfungstipp:** Beim mündlichen Vortrag zählen drei Dinge: (1) Du sagst ausdrücklich, dass du das
> Gegenteil annimmst. (2) Du verlangst, dass der Bruch gekürzt ist, sonst gibt es keinen Widerspruch.
> (3) Du begründest „$p^2$ gerade $\Rightarrow$ $p$ gerade“ (über ungerade Quadrate). Wer nur „also ist $p$ gerade“
> sagt, wird nachgefragt.

Probleme: Welcher Beweis? Welches Gegenteil? Welcher Bruch, warum gekürzt? Was heißt „über ungerade
Quadrate“? Formel-Kurzschrift als Satzteil.

**Nachher:**

> **Prüfungstipp: So erklärst du den Beweis „$\sqrt 2$ ist keine Bruchzahl“ in der mündlichen Prüfung**
>
> Der Beweis ist ein **Widerspruchsbeweis**: Man nimmt das Gegenteil der Behauptung an und zeigt, dass
> daraus etwas Unmögliches folgt. Die Prüferin achtet auf drei Stellen.
>
> 1. **Sag laut, was du annimmst:** „Angenommen, $\sqrt 2$ wäre doch ein Bruch, also $\sqrt 2 = \frac pq$ mit
>    ganzen Zahlen $p$ und $q$.“
> 2. **Verlange, dass der Bruch vollständig gekürzt ist**, also dass $p$ und $q$ keinen gemeinsamen Teiler
>    außer $1$ haben. Warum? Am Ende zeigst du, dass $p$ und $q$ *beide* gerade sind, also den Teiler $2$
>    gemeinsam haben. Das ist nur deshalb ein Widerspruch, weil du vorher „vollständig gekürzt“ verlangt hast.
> 3. **Begründe, warum aus „$p^2$ ist gerade“ folgt „$p$ ist gerade“.** Diesen Schritt überspringen viele.
>    Die Begründung: Wäre $p$ ungerade, also $p = 2k + 1$ für eine ganze Zahl $k$, dann wäre
>    $p^2 = 4k^2 + 4k + 1 = 2\cdot(2k^2 + 2k) + 1$, also ebenfalls ungerade. Eine ungerade Zahl hat immer ein
>    ungerades Quadrat. Wenn $p^2$ gerade ist, kann $p$ also nicht ungerade sein. Somit ist $p$ gerade.
>
> Wer bei Punkt 3 nur „also ist $p$ gerade“ sagt, bekommt fast sicher die Nachfrage „Warum?“.

## Checkliste vor Abgabe (jede Stelle)

- [ ] Versteht jemand diese Stelle, der **nur diese Stelle** liest?
- [ ] Ist jeder Fachbegriff und jedes Symbol erklärt oder verlinkt?
- [ ] Hat jeder Rechenschritt ein „weil“?
- [ ] Gibt es zu jeder Formel ein Zahlenbeispiel?
- [ ] Sind schwere Stellen nach Regel 6 aufgebaut?
- [ ] Keine Formel-Kurzschrift im Satz, keine verbotenen Wörter („offensichtlich“, „trivial“, „analog“ …)?
- [ ] Sätze kurz, aktiv, freundlich?
