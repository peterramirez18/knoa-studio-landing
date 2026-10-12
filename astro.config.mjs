// @ts-check
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const astroPrerenderEntrypoint = fileURLToPath(import.meta.resolve("astro/entrypoints/prerender"));

export default defineConfig({
  site: "https://knoastudio.com",
  integrations: [sitemap()],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    server: {
      hmr: {
        host: "localhost",
        clientPort: 4321,
      },
    },
    resolve: {
      alias: {
        "astro/entrypoints/prerender": astroPrerenderEntrypoint,
      },
    },
    plugins: [tailwindcss()],
  },
});
