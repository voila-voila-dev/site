// The shapes the components take: plain data, so a site keeps its copy in its own data files.
export type Link = { href: string; label: string };
export type Fact = { label: string; value: string; href?: string };
export type Status = { label: string; color: string };
export type NavGroup = { title: string; items: Link[] };
export type Heading = { depth: number; slug: string; text: string };
