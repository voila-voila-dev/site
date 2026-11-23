// Every component of the kit, built on each push: a broken component breaks this build.
import mdx from "@astrojs/mdx";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import { codeTheme } from "../src/lib/code-theme.ts";

// The example uses the kit from its sources, as a site would from the package.
const kit = fileURLToPath(new URL("../src", import.meta.url));

export default defineConfig({
	site: "https://example.voila.dev",
	trailingSlash: "never",
	integrations: [mdx()],
	markdown: { shikiConfig: { theme: codeTheme } },
	vite: {
		resolve: {
			alias: [
				{ find: /^@voila\.dev\/site\/lib\/(.+)$/, replacement: `${kit}/lib/$1.ts` },
				{ find: /^@voila\.dev\/site\/(components|styles)\/(.+)$/, replacement: `${kit}/$1/$2` },
			],
		},
	},
});
