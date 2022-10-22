import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import svelte from "@astrojs/svelte";
import compress from "astro-compress";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  output: "static",
  site: "https://fireisgood.github.io/",
  base: "/arkdex",
  trailingSlash: "ignore",
  integrations: [image({
    serviceEntryPoint: "@astrojs/image/sharp",
    cacheDir: "./.cache/image",
  }), svelte(), compress(), partytown()]
});