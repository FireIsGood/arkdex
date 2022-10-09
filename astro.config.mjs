import { defineConfig } from "astro/config";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  output: "static",
  site: "https://fireisgood.github.io/",
  base: "/arkdex",
  trailingSlash: "ignore",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
