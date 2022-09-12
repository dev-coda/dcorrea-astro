import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import image from "@astrojs/image";
import compress from "astro-compress";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://dcorrea.co",
  integrations: [mdx(), sitemap(), tailwind(), preact({
    compat: true
  }), image(), compress()],
  output: "static",
  root: "./",
  adapter: vercel()
});