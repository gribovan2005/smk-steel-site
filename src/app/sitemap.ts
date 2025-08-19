import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://xn----8sb2agb3adi6g.xn--p1ai";
  const lastMod = new Date();
  
  return [
    // Главная страница
    { url: `${base}/`, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    
    // Основные страницы
    { url: `${base}/about`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/contacts`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/orders`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },
    
    // Страницы услуг
    { url: `${base}/services/plazmennaya-rezka`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/montazh`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/km-kmd`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/valtsovka-obechaek`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    
    // Страницы типовых конструкций
    { url: `${base}/constructions/fermy`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/balki-perekrytij`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
  ];
} 