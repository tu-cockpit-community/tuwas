import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Der Java-Runner (EP1) läuft nur mit `next dev -H 127.0.0.1`; ohne diesen Eintrag blockt Next den HMR-Socket
  // für diesen Origin und die Seiten hydrieren nicht.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
