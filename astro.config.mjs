import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  output: "static",
  site: "https://fireisgood.github.io/",
  base: "/arkdex",
});
