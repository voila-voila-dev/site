// Every component of the kit, built on each push: a broken component breaks this build.
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import { codeTheme } from "@voila.dev/site/lib/code-theme";

export default defineConfig({
	site: "https://example.voila.dev",
	trailingSlash: "never",
	integrations: [mdx()],
	markdown: { shikiConfig: { theme: codeTheme } },
});
