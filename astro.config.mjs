// @ts-check
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const astroPrerenderEntrypoint = fileURLToPath(import.meta.resolve("astro/entrypoints/prerender"));

export default defineConfig({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    resolve: {
      alias: {
        "astro/entrypoints/prerender": astroPrerenderEntrypoint,
      },
    },
    plugins: [tailwindcss()],
  },
});
