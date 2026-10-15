import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TUWAS Lernen",
    short_name: "TUWAS",
    description: "Tu was. Für dein Studium an der TU.",
    lang: "de",
    start_url: "/lernen",
    display: "standalone",
    background_color: "#e9e7e2",
    theme_color: "#006699",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/brand/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
