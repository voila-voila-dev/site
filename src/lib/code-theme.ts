// The code blocks' colours, on the ink background of the site: volt for keywords, gold for
// strings, plain paper for names. A Shiki theme, given to Astro's <Code>.
import type { ThemeRegistration } from "shiki";

const ink = "#0c0c0e";
const paper = "#f6f6f3";
const mute = "#8a8a92";
const volt = "#8f97ff";
const voltSoft = "#c9cbff";
const gold = "#e9c46a";
const coral = "#ff9b85";

export const codeTheme: ThemeRegistration = {
	name: "voila",
	type: "dark",
	colors: { "editor.background": ink, "editor.foreground": paper },
	settings: [
		{ settings: { foreground: paper, background: ink } },
		{ scope: ["comment", "punctuation.definition.comment"], settings: { foreground: mute, fontStyle: "italic" } },
		{ scope: ["keyword", "storage", "storage.type", "storage.modifier", "keyword.control", "keyword.operator.new"], settings: { foreground: volt } },
		{ scope: ["string", "string.quoted", "string.template", "punctuation.definition.string"], settings: { foreground: gold } },
		{ scope: ["constant.numeric", "constant.language", "constant.language.boolean"], settings: { foreground: coral } },
		{ scope: ["entity.name.function", "support.function", "meta.function-call entity.name.function"], settings: { foreground: "#ffffff" } },
		{ scope: ["variable.other.property", "meta.object-literal.key", "support.type.property-name"], settings: { foreground: voltSoft } },
		{ scope: ["entity.name.type", "support.type", "entity.name.class"], settings: { foreground: voltSoft } },
		{ scope: ["punctuation", "meta.brace", "keyword.operator"], settings: { foreground: "#a3a3ab" } },
		{ scope: ["variable.parameter.function", "entity.name.function.shell", "support.function.builtin.shell"], settings: { foreground: "#ffffff" } },
	],
};
