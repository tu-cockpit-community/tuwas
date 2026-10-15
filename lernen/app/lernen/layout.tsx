import "katex/dist/katex.min.css";
import "./lernen.css";

export default function LernenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lernen min-h-full">
      {children}
    </div>
  );
}
