// app/sitemap.ts
import type { MetadataRoute } from "next";
import { wakppopPath, wakppopPaths } from "@/lib/wakppop";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.letpang.com";

  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/games/hanja-explorer`,
      lastModified: new Date("2026-10-24T00:00:00+09:00"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/games/wakppop`,
      lastModified: new Date("2026-10-24T00:00:00+09:00"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/games/hanja-explorer/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
  return pages.flatMap(page => {
    const path = page.url.slice(baseUrl.length);
    if (path === wakppopPath) {
      const languages = Object.fromEntries(Object.entries(wakppopPaths).map(([language, route]) => [language, `${baseUrl}${route}`]));
      return Object.values(languages).map(url => ({ ...page, url, alternates: { languages } }));
    }
    const englishUrl = `${baseUrl}/en${path}`;
    if (["", "/about", "/support"].includes(path)) {
      const japaneseUrl = `${baseUrl}/ja${path}`;
      const alternates = { languages: { ko: page.url, en: englishUrl, ja: japaneseUrl } };
      return [page.url, englishUrl, japaneseUrl].map(url => ({ ...page, url, alternates }));
    }
    const alternates = { languages: { ko: page.url, en: englishUrl } };
    return [{ ...page, alternates }, { ...page, url: englishUrl, alternates }];
  });
}
