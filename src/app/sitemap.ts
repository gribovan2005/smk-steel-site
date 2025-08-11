import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://xn----8sb2agb3adi6g.xn--p1ai";
  const lastMod = new Date();
  return [
    { url: `${base}/`, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/orders`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
  ];
} 