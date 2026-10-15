/** "185.A91" und "185A91" bezeichnen dieselbe LVA. */
export function lvaSchluessel(lva: string): string {
  return lva.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
}
