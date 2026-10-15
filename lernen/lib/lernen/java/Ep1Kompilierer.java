import com.sun.source.tree.*;
import com.sun.source.util.*;

import javax.lang.model.element.*;
import javax.lang.model.type.*;
import javax.tools.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.*;

/**
 * Kompiliert Quelltexte ueber die Compiler-API (javac --release 21) und prueft Regeln mit der
 * Compiler-Tree-API. Ein Aufruf verarbeitet beliebig viele Auftraege aus einer Steuerdatei, damit der
 * Validator nur eine JVM startet. Fuehrt keinen Code der Lernenden aus.
 *
 * Steuerdatei: Zeilen "schluessel=wert", Auftraege durch eine Zeile "---" getrennt.
 *   out=<Zielverzeichnis fuer .class>   cp=<Klassenpfad>   quelle=<Datei> (mehrfach)
 *   pruefe=<Datei der Lernenden>  vorlage=<Datei der Vorlage>  regel.<name>=<wert>
 *
 * Protokoll auf stdout (Tab-getrennt, Zeilenumbrueche in Meldungen als \n):
 *   J <nr> | D <datei> <zeile> <spalte> <meldung> | R <zeile> <regel> <meldung> | E ok|fehler
 */
public class Ep1Kompilierer {

  public static void main(String[] args) throws Exception {
    List<Map<String, List<String>>> auftraege = new ArrayList<>();
    Map<String, List<String>> akt = new LinkedHashMap<>();
    for (String z : Files.readAllLines(Path.of(args[0]), StandardCharsets.UTF_8)) {
      if (z.equals("---")) {
        auftraege.add(akt);
        akt = new LinkedHashMap<>();
        continue;
      }
      int i = z.indexOf('=');
      if (i <= 0) continue;
      akt.computeIfAbsent(z.substring(0, i), k -> new ArrayList<>()).add(z.substring(i + 1));
    }
    if (!akt.isEmpty()) auftraege.add(akt);
    JavaCompiler jc = ToolProvider.getSystemJavaCompiler();
    for (int n = 0; n < auftraege.size(); n++) {
      System.out.println("J\t" + n);
      try {
        bearbeite(jc, auftraege.get(n));
      } catch (Throwable t) {
        System.out.println("D\t-\t0\t0\t" + esc("Interner Fehler des Pruefers: " + t));
        System.out.println("E\tfehler");
      }
      System.out.flush();
    }
  }

  static String eins(Map<String, List<String>> a, String k) {
    List<String> l = a.get(k);
    return l == null || l.isEmpty() ? null : l.get(0);
  }

  static String esc(String s) {
    return s.replace("\\", "\\\\").replace("\t", " ").replace("\r", "").replace("\n", "\\n");
  }

  static void bearbeite(JavaCompiler jc, Map<String, List<String>> a) throws Exception {
    DiagnosticCollector<JavaFileObject> dc = new DiagnosticCollector<>();
    StandardJavaFileManager fm = jc.getStandardFileManager(dc, Locale.GERMAN, StandardCharsets.UTF_8);
    List<Path> quellen = new ArrayList<>();
    for (String q : a.getOrDefault("quelle", List.of())) quellen.add(Path.of(q));
    String out = eins(a, "out");
    List<String> opts = new ArrayList<>(List.of("--release", "21", "-encoding", "UTF-8", "-Xlint:none", "-proc:none", "-implicit:class"));
    if (out != null) opts.addAll(List.of("-d", out));
    String cp = eins(a, "cp");
    if (cp != null) opts.addAll(List.of("-cp", cp));
    JavacTask task = (JavacTask) jc.getTask(null, fm, dc, opts, null, fm.getJavaFileObjectsFromPaths(quellen));
    Iterable<? extends CompilationUnitTree> units = task.parse();
    task.analyze();
    boolean fehler = false;
    for (Diagnostic<? extends JavaFileObject> d : dc.getDiagnostics()) {
      if (d.getKind() != Diagnostic.Kind.ERROR) continue;
      fehler = true;
      String datei = d.getSource() == null ? "-" : Path.of(d.getSource().toUri()).getFileName().toString();
      System.out.println("D\t" + datei + "\t" + d.getLineNumber() + "\t" + d.getColumnNumber() + "\t" + esc(d.getMessage(Locale.GERMAN)));
    }
    String pruefe = eins(a, "pruefe");
    if (pruefe != null) {
      for (CompilationUnitTree cu : units) {
        if (Path.of(cu.getSourceFile().toUri()).getFileName().toString().equals(Path.of(pruefe).getFileName().toString())) {
          new Regeln(task, cu, a, !fehler, eins(a, "vorlage") == null ? null : Path.of(eins(a, "vorlage"))).pruefe();
        }
      }
    }
    if (!fehler && out != null) task.generate();
    fm.close();
    System.out.println("E\t" + (fehler ? "fehler" : "ok"));
  }

  /** Statische Regeln wie im Programmiertest: Schleifenverbot, API-Allowlist, == auf Strings ... */
  static final class Regeln {
    final JavacTask task;
    final Trees trees;
    final CompilationUnitTree cu;
    final Map<String, List<String>> a;
    final boolean attribuiert;
    final Path vorlage;
    final Set<String> erlaubt;
    final Set<String> verboten;
    final Set<String> schleifenfrei;
    final boolean ueberallSchleifenfrei;

    Regeln(JavacTask task, CompilationUnitTree cu, Map<String, List<String>> a, boolean attribuiert, Path vorlage) {
      this.task = task;
      this.trees = Trees.instance(task);
      this.cu = cu;
      this.a = a;
      this.attribuiert = attribuiert;
      this.vorlage = vorlage;
      this.erlaubt = liste("regel.erlaubteApi");
      this.verboten = liste("regel.verboteneApi");
      this.schleifenfrei = liste("regel.keineSchleifenIn");
      this.ueberallSchleifenfrei = an("regel.keineSchleifen");
    }

    Set<String> liste(String k) {
      String w = eins(a, k);
      Set<String> s = new LinkedHashSet<>();
      if (w != null) for (String x : w.split(",")) if (!x.isBlank()) s.add(x.trim());
      return s;
    }

    boolean an(String k) {
      String w = eins(a, k);
      return w != null && (w.equals("1") || w.equals("true"));
    }

    void melde(Tree t, String regel, String meldung) {
      long z = t == null ? 0 : cu.getLineMap().getLineNumber(trees.getSourcePositions().getStartPosition(cu, t));
      System.out.println("R\t" + z + "\t" + regel + "\t" + esc(meldung));
    }

    static String signatur(MethodTree m) {
      StringBuilder sb = new StringBuilder();
      sb.append(m.getModifiers().getFlags().contains(Modifier.STATIC) ? "static " : "");
      sb.append(m.getReturnType() == null ? "" : m.getReturnType().toString()).append(' ').append(m.getName()).append('(');
      for (int i = 0; i < m.getParameters().size(); i++) {
        if (i > 0) sb.append(", ");
        sb.append(m.getParameters().get(i).getType().toString());
      }
      return sb.append(')').toString();
    }

    void pruefe() throws Exception {
      ClassTree klasse = null;
      for (Tree t : cu.getTypeDecls()) if (t instanceof ClassTree c) {
        if (klasse == null || c.getModifiers().getFlags().contains(Modifier.PUBLIC)) klasse = c;
      }
      if (klasse == null) return;
      List<MethodTree> methoden = new ArrayList<>();
      List<VariableTree> felder = new ArrayList<>();
      for (Tree m : klasse.getMembers()) {
        if (m instanceof MethodTree mt && !mt.getName().contentEquals("<init>")) methoden.add(mt);
        if (m instanceof VariableTree vt) felder.add(vt);
      }

      // Vorlage: Methoden und Felder, die es geben darf bzw. muss
      Map<String, MethodTree> vorlageMethoden = new LinkedHashMap<>();
      Set<String> vorlageFelder = new HashSet<>();
      if (vorlage != null) {
        JavaCompiler jc = ToolProvider.getSystemJavaCompiler();
        StandardJavaFileManager fm = jc.getStandardFileManager(null, Locale.GERMAN, StandardCharsets.UTF_8);
        JavacTask vt = (JavacTask) jc.getTask(null, fm, d -> {}, List.of("--release", "21", "-proc:none"), null, fm.getJavaFileObjectsFromPaths(List.of(vorlage)));
        for (CompilationUnitTree vcu : vt.parse())
          for (Tree t : vcu.getTypeDecls())
            if (t instanceof ClassTree c)
              for (Tree m : c.getMembers()) {
                if (m instanceof MethodTree mt && !mt.getName().contentEquals("<init>")) vorlageMethoden.put(signatur(mt), mt);
                if (m instanceof VariableTree v) vorlageFelder.add(v.getName().toString());
              }
        fm.close();
      }

      if (vorlage != null && !"0".equals(eins(a, "regel.signaturBeibehalten")) && !"false".equals(eins(a, "regel.signaturBeibehalten"))) {
        Set<String> eigene = new HashSet<>();
        for (MethodTree m : methoden) eigene.add(signatur(m));
        for (Map.Entry<String, MethodTree> e : vorlageMethoden.entrySet())
          if (!eigene.contains(e.getKey()))
            melde(null, "signaturBeibehalten", "Die Methode „" + e.getKey() + "“ aus der Angabe fehlt oder ihre Signatur wurde verändert. Name, Parameter und Rückgabetyp müssen gleich bleiben.");
      }
      if (vorlage != null && an("regel.keineHilfsmethoden")) {
        Set<String> namen = new HashSet<>();
        for (MethodTree m : vorlageMethoden.values()) namen.add(m.getName().toString());
        for (MethodTree m : methoden)
          if (!namen.contains(m.getName().toString()))
            melde(m, "keineHilfsmethoden", "Zusätzliche Methode „" + m.getName() + "“: Hilfsmethoden sind in dieser Aufgabe nicht erlaubt.");
      }
      if (an("regel.keineFelder"))
        for (VariableTree f : felder)
          if (!vorlageFelder.contains(f.getName().toString()))
            melde(f, "keineFelder", "Zusätzliches Feld „" + f.getName() + "“: Klassenvariablen sind nicht erlaubt, arbeite mit Parametern und lokalen Variablen.");

      Set<String> rekursiv = liste("regel.rekursiv");
      for (MethodTree m : methoden) {
        boolean ohneSchleife = ueberallSchleifenfrei || schleifenfrei.contains(m.getName().toString());
        if (ohneSchleife && m.getBody() != null) {
          new TreeScanner<Void, Void>() {
            void schleife(Tree t, String art) {
              melde(t, ueberallSchleifenfrei ? "keineSchleifen" : "keineSchleifenIn", art + "-Schleife in „" + m.getName() + "“: hier sind keine Schleifen erlaubt (die Aufgabe verlangt Rekursion).");
            }
            @Override public Void visitForLoop(ForLoopTree t, Void v) { schleife(t, "for"); return super.visitForLoop(t, v); }
            @Override public Void visitEnhancedForLoop(EnhancedForLoopTree t, Void v) { schleife(t, "for-each"); return super.visitEnhancedForLoop(t, v); }
            @Override public Void visitWhileLoop(WhileLoopTree t, Void v) { schleife(t, "while"); return super.visitWhileLoop(t, v); }
            @Override public Void visitDoWhileLoop(DoWhileLoopTree t, Void v) { schleife(t, "do-while"); return super.visitDoWhileLoop(t, v); }
          }.scan(m.getBody(), null);
        }
      }
      if (!attribuiert) {
        // Ohne fehlerfreie Uebersetzung sind Typen unbekannt; die semantischen Regeln entfallen dann.
        for (String r : rekursiv) if (methoden.stream().noneMatch(m -> m.getName().contentEquals(r))) melde(null, "rekursiv", "Methode „" + r + "“ fehlt.");
        return;
      }

      TypeElement eigeneKlasse = (TypeElement) trees.getElement(TreePath.getPath(cu, klasse));
      boolean apiPruefen = !erlaubt.isEmpty() || !verboten.isEmpty();
      boolean stringGleich = an("regel.keinStringGleichOperator");
      boolean arrayKopie = an("regel.keineArrayKopie");
      Map<String, Boolean> ruftSichAuf = new HashMap<>();
      for (String r : rekursiv) ruftSichAuf.put(r, false);

      new TreePathScanner<Void, MethodTree>() {
        @Override public Void visitMethod(MethodTree m, MethodTree aussen) {
          return super.visitMethod(m, m);
        }

        boolean eigen(Element owner) {
          for (Element e = owner; e != null; e = e.getEnclosingElement()) if (e.equals(eigeneKlasse)) return true;
          return false;
        }

        void api(Tree t, Element el, MethodTree in) {
          if (!(el instanceof ExecutableElement ex)) return;
          Element owner = ex.getEnclosingElement();
          if (!(owner instanceof TypeElement typ)) return;
          String name = ex.getKind() == ElementKind.CONSTRUCTOR ? "new" : ex.getSimpleName().toString();
          if (in != null && rekursiv.contains(in.getName().toString()) && eigen(owner) && name.equals(in.getName().toString())) ruftSichAuf.put(in.getName().toString(), true);
          if (arrayKopie) {
            String q = typ.getQualifiedName() + "." + name;
            if (q.equals("java.lang.System.arraycopy") || q.startsWith("java.util.Arrays.copyOf") || (name.equals("clone") && t instanceof MethodInvocationTree mi && mi.getMethodSelect() instanceof MemberSelectTree ms && trees.getTypeMirror(new TreePath(getCurrentPath(), ms.getExpression())) instanceof ArrayType))
              melde(t, "keineArrayKopie", "Array-Kopie mit „" + (name.equals("clone") ? "clone()" : typ.getSimpleName() + "." + name) + "“ ist nicht erlaubt; kopiere selbst mit einer Schleife.");
          }
          if (!apiPruefen || eigen(owner)) return;
          String einfach = typ.getSimpleName().toString();
          String voll = typ.getQualifiedName().toString();
          Set<String> schluessel = Set.of(einfach, voll, einfach + ".*", voll + ".*", einfach + "." + name, voll + "." + name);
          boolean ausgabe = voll.equals("java.io.PrintStream") && (name.equals("println") || name.equals("print") || name.equals("printf"));
          boolean treffer = schluessel.stream().anyMatch(erlaubt::contains);
          String anzeige = name.equals("new") ? "new " + einfach + "(…)" : einfach + "." + name + "(…)";
          if (!erlaubt.isEmpty() && !treffer && !ausgabe)
            melde(t, "erlaubteApi", "„" + anzeige + "“ ist hier nicht erlaubt. Erlaubt: " + String.join(", ", erlaubt) + ".");
          if (schluessel.stream().anyMatch(verboten::contains)) melde(t, "verboteneApi", "„" + anzeige + "“ darf in dieser Aufgabe nicht verwendet werden.");
        }

        @Override public Void visitMethodInvocation(MethodInvocationTree t, MethodTree in) {
          // super(...)/this(...) (auch der implizite Aufruf im Standardkonstruktor) ist keine API-Nutzung
          boolean konstruktorKette = t.getMethodSelect() instanceof IdentifierTree id && (id.getName().contentEquals("super") || id.getName().contentEquals("this"));
          if (!konstruktorKette) api(t, trees.getElement(getCurrentPath()), in);
          return super.visitMethodInvocation(t, in);
        }

        @Override public Void visitNewClass(NewClassTree t, MethodTree in) {
          api(t, trees.getElement(getCurrentPath()), in);
          return super.visitNewClass(t, in);
        }

        @Override public Void visitMemberReference(MemberReferenceTree t, MethodTree in) {
          api(t, trees.getElement(getCurrentPath()), in);
          return super.visitMemberReference(t, in);
        }

        boolean istString(ExpressionTree e) {
          TypeMirror tm = trees.getTypeMirror(new TreePath(getCurrentPath(), e));
          return tm != null && tm.getKind() == TypeKind.DECLARED && tm.toString().equals("java.lang.String");
        }

        @Override public Void visitBinary(BinaryTree t, MethodTree in) {
          if (stringGleich && (t.getKind() == Tree.Kind.EQUAL_TO || t.getKind() == Tree.Kind.NOT_EQUAL_TO)) {
            boolean nullVergleich = t.getLeftOperand().getKind() == Tree.Kind.NULL_LITERAL || t.getRightOperand().getKind() == Tree.Kind.NULL_LITERAL;
            if (!nullVergleich && (istString(t.getLeftOperand()) || istString(t.getRightOperand())))
              melde(t, "keinStringGleichOperator", "Strings mit „" + (t.getKind() == Tree.Kind.EQUAL_TO ? "==" : "!=") + "“ verglichen: das vergleicht Referenzen, nicht den Inhalt. Verwende equals.");
          }
          return super.visitBinary(t, in);
        }
      }.scan(TreePath.getPath(cu, klasse), null);

      for (Map.Entry<String, Boolean> e : ruftSichAuf.entrySet()) {
        MethodTree m = methoden.stream().filter(x -> x.getName().contentEquals(e.getKey())).findFirst().orElse(null);
        if (m == null) melde(null, "rekursiv", "Methode „" + e.getKey() + "“ fehlt.");
        else if (!e.getValue()) melde(m, "rekursiv", "„" + e.getKey() + "“ ruft sich nicht selbst auf, die Aufgabe verlangt eine rekursive Lösung.");
      }
    }
  }
}
