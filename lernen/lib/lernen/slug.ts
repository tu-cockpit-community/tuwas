/** URL-sichere Abschnitts-ids: Umlaute und griechische Buchstaben ausgeschrieben, nur a-z0-9-. */
const GRIECHISCH: Record<string, string> = {
  α: "alpha", β: "beta", γ: "gamma", δ: "delta", ε: "epsilon", ζ: "zeta", η: "eta", θ: "theta", λ: "lambda",
  μ: "mu", ν: "nu", π: "pi", ρ: "rho", σ: "sigma", τ: "tau", φ: "phi", χ: "chi", ψ: "psi", ω: "omega",
  Δ: "delta", Σ: "sigma", Ω: "omega", Φ: "phi",
};

export function asciiSlug(titel: string): string {
  return titel
    // zerlegt geschriebene Umlaute (a + U+0308) wie fertige behandeln, sonst wuerde "ä" zu "a" statt "ae"
    .normalize("NFC")
    .replace(/[αβγδεζηθλμνπρστφχψωΔΣΩΦ]/g, (c) => ` ${GRIECHISCH[c]} `)
    .replace(/ä/gi, "ae")
    .replace(/ö/gi, "oe")
    .replace(/ü/gi, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "abschnitt";
}
