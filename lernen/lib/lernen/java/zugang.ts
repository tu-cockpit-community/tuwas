/**
 * Zugangspruefung fuer POST /api/java/pruefen: nur Anfragen von diesem Rechner.
 *
 * Next setzt x-forwarded-for aus der Socket-Adresse, wenn der Client den Header nicht selbst schickt.
 * Ein Rechner im LAN koennte ihn faelschen; deshalb zusaetzlich Host und Origin pruefen (schuetzt auch
 * gegen DNS-Rebinding und Cross-Site-Anfragen aus dem Browser) und den Dev-Server mit -H 127.0.0.1
 * starten, damit er im LAN gar nicht erreichbar ist.
 */

export function istLoopback(adresse: string): boolean {
  const a = adresse.trim().toLowerCase().replace(/^\[|\]$/g, "");
  return a === "::1" || a === "localhost" || /^127\.\d+\.\d+\.\d+$/.test(a) || /^::ffff:127\.\d+\.\d+\.\d+$/.test(a);
}

function hostOhnePort(host: string): string {
  const h = host.trim();
  if (h.startsWith("[")) return h.slice(0, h.indexOf("]") + 1);
  return h.replace(/:\d+$/, "");
}

export function istLokaleAnfrage(headers: Headers): boolean {
  const xff = headers.get("x-forwarded-for");
  if (xff && !xff.split(",").every(istLoopback)) return false;
  if (!istLoopback(hostOhnePort(headers.get("host") ?? ""))) return false;
  const origin = headers.get("origin");
  if (origin) {
    try {
      if (!istLoopback(new URL(origin).hostname)) return false;
    } catch {
      return false;
    }
  }
  return true;
}
