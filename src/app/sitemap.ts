import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://xn----8sb2agb3adi6g.xn--p1ai";
  const lastMod = new Date();
  
  return [
    // Главная страница
    { url: `${base}/`, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    
    // Основные страницы
    { url: `${base}/about`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/about-us`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/prices`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contacts`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/orders`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },
    
    // Новые страницы "О нас"
    { url: `${base}/equipment`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },

    { url: `${base}/clients`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },
    
    // Страницы услуг
    { url: `${base}/services/plazmennaya-rezka`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/montazh`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/km-kmd`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/valtsovka-obechaek`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/gibka-lista`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/valtsovka-profilya`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    
    // Страницы типовых конструкций
    { url: `${base}/constructions/fermy`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/progony-balki-pokrytiya`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/elektrosvarnoj-dvutavr`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/kolonny`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/svyazi-fahverk-rasporki`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/balki-perekrytij`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/lestnitsy-ograzhdeniya-ploshhadki`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/zakladnye-izdeliya`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/stvornye-znaki`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/dymovye-truby`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/podkranovye-balki`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/privarka-statichnykh-boltov`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/prostranstvennye-konstruktsii`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/opory-lep`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/emkosti-rezervuary`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/constructions/nestandartnye-izdeliya`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
  ];
} 