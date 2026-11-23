# @voila.dev/site

The look of [voila.dev](https://voila.dev) and its project sites ([replay](https://replay.voila.dev), [freewheel](https://freewheel.voila.dev)), as Astro components. A giant wordmark, then the work as a catalogue: rows, columns, statuses. Light only, by choice.

```sh
bun add @voila.dev/site
```

```astro
---
import Base from "@voila.dev/site/components/Base.astro";
import Top from "@voila.dev/site/components/Top.astro";
import Section from "@voila.dev/site/components/Section.astro";
import CodeBlock from "@voila.dev/site/components/CodeBlock.astro";
import Footer from "@voila.dev/site/components/Footer.astro";
---

<Base title="replay" description="Session replay." siteName="replay">
	<div class="in"><Top name="replay" links={[{ href: "/docs", label: "Docs" }]} repo="https://github.com/voila-voila-dev/replay" /></div>
	<main class="in">
		<Section id="how" title="How" tag="Three calls">
			<CodeBlock code={`import { record } from "@voila.dev/replay/record";`} />
		</Section>
	</main>
	<div class="in"><Footer note="replay · MIT · by" by={{ href: "https://voila.dev", label: "VOILA DEVELOPMENT" }} /></div>
</Base>
```

## Components

| Component | What |
| --- | --- |
| `Base` | The page shell: meta, canonical, Open Graph, fonts, styles; `jsonLd`, a `head` slot |
| `Top` | The top bar: brand (`logo` slot), links, a GitHub star counter (`repo`) or a link (`end`) |
| `Footer` | Who made it, an email, links |
| `Section` | A huge title on a rule, a tag on the right |
| `PageHero` | The top of a sub page: title, lead, facts |
| `Marquee` | The volt band of words |
| `Fixes` | Pain crossed out, the fix, its status |
| `FeatureGrid` | Features four to a row, each with a link |
| `Steps` | Numbered steps, three or four to a row |
| `Figs` | Big figures on a rule |
| `Versus` | One meter per contender |
| `Bars` | A bar chart as a table |
| `Badges` | Pills with a dot |
| `CodeBlock` | Code highlighted at build time, in the site's colours |
| `Cta` | The ink block that ends a page |
| `Toc` | Numbered anchors of a long page |
| `DocsLayout` | Docs: navigation, article, "On this page", previous and next |

Everything else is plain CSS (`styles/site.css`, imported by `Base`): `.in`, `.row`, `.table`, `.btn`, `.claim`, `.what-grid`, `.note`. The code theme is `lib/code-theme.ts`; give it to MDX too:

```js
// astro.config.mjs
import { codeTheme } from "@voila.dev/site/lib/code-theme";
export default defineConfig({ integrations: [mdx()], markdown: { shikiConfig: { theme: codeTheme } } });
```

## Docs

`DocsLayout` takes the headings Astro renders and the navigation as data. `example/` has a docs collection wired end to end.

## Develop

```sh
bun install
bun run dev     # the example, every component on one page, and a docs page
bun run build   # what CI runs
```

A change: `bun run changeset`. Merging the version pull request publishes to npm.

## License

MIT
