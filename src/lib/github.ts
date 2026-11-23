// Stars are read from GitHub at build time; `fallback` is the value when the API is
// rate-limited or unreachable. Set GITHUB_TOKEN in CI to lift the rate limit.
export async function starsOf(repo: string, fallback = 0): Promise<number> {
	try {
		const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
		if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
		const response = await fetch(`https://api.github.com/repos/${repo}`, { headers });
		if (!response.ok) return fallback;
		const body = (await response.json()) as { stargazers_count?: number };
		return body.stargazers_count ?? fallback;
	} catch {
		return fallback;
	}
}

/** `owner/name` from a GitHub URL. */
export const slugOf = (url: string) => new URL(url).pathname.replace(/^\/|\/$/g, "");
