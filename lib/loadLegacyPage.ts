import fs from "node:fs";
import path from "node:path";

export type LegacyPage = {
  html: string;
  title: string;
  bodyClassName: string;
};

export function loadLegacyPage(slug: string): LegacyPage {
  const filePath = path.join(process.cwd(), "legacy", `${slug}.html`);
  const raw = fs.readFileSync(filePath, "utf-8");

  const title =
    raw.match(/<title>(?<title>.*?)<\/title>/i)?.groups?.title?.trim() ??
    "Capoeira Techniques";
  const bodyClassName =
    raw.match(/<body[^>]*class="(?<class>[^"]*)"/i)?.groups?.class?.trim() ??
    "";
  const bodyContent =
    raw.match(/<body[^>]*>(?<body>[\s\S]*?)<\/body>/i)?.groups?.body ?? raw;

  const html = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, "").trim();

  return {
    html,
    title,
    bodyClassName
  };
}
