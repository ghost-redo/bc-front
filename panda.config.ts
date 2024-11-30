import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  outdir: "styled-system",
  include: [
    "./src/component/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],
});
