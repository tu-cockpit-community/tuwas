import "katex/dist/katex.min.css";
import "./lernen.css";
import { FokusRahmen } from "@/components/lernen/FokusKnopf";

export default function LernenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lernen min-h-full">
      <FokusRahmen />
      {children}
    </div>
  );
}
