import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const base = process.env.NEXT_PUBLIC_SITE_URL || "https://xn----8sb2agb3adi6g.xn--p1ai";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/admin/"],
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/api/", "/_next/", "/admin/"],
            },
            {
                userAgent: "Yandex",
                allow: "/",
                disallow: ["/api/", "/_next/", "/admin/"],
            },
        ],
        sitemap: `${base}/sitemap.xml`,
        host: base,
    };
}
