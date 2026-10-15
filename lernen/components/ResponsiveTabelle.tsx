import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

/** Tabellen-Wrapper: horizontal scrollbar statt gequetschter Spalten (siehe globals.css fuer table-layout:fixed). */
export function ResponsiveTabelle({ children }: Props): React.JSX.Element {
  return (
    <div className="my-4 overflow-x-auto rounded-lg border border-line">
      <table className="my-0">{children}</table>
    </div>
  );
}
