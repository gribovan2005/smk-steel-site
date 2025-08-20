import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import YandexMetrica from "@/components/YandexMetrica";
import YandexDirect from "@/components/YandexDirect";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b0f17" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
  ],
};

export const metadata: Metadata = {
  title: "СМК Сталь — металлоконструкции в Санкт-Петербурге | Изготовление, монтаж, проектирование",
  description:
    "Изготовление металлоконструкций в Санкт-Петербурге ⚡ Полный цикл производства ⚡ Проектирование КМ/КМД ⚡ Монтаж ⚡ От 18000 руб/тн ⚡ Опыт с 2013 года ⚡ Допуски СРО",
  keywords: [
    "металлоконструкции",
    "изготовление металлоконструкций",
    "Санкт-Петербург",
    "СМК Сталь",
    "фермы",
    "балки",
    "двутавр",
    "колонны",
    "монтаж металлоконструкций",
    "проектирование КМ КМД",
    "плазменная резка",
    "вальцовка",
    "СРО",
    "производство металлоконструкций СПб",
    "металлообработка",
    "сварочные работы",
  ],
  alternates: {
    canonical: "https://xn----8sb2agb3adi6g.xn--p1ai",
  },
  verification: {
    yandex: "5f0089436862c96b",
  },
  openGraph: {
    type: "website",
    title: "СМК Сталь — производство металлоконструкций",
    description:
      "Изготовление металлоконструкций в Санкт-Петербурге от 18000 руб./ тн",
    siteName: "СМК Сталь",
    images: [
      { url: "/welding_3.jpg", width: 1200, height: 630, alt: "СМК Сталь — металлоконструкции" },
    ],
    url: "https://xn----8sb2agb3adi6g.xn--p1ai",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "СМК Сталь — металлоконструкции в Санкт-Петербурге",
    description:
      "Изготовление металлоконструкций в Санкт-Петербурге. Полный цикл производства. От 18000 руб/тн.",
    images: [
      { url: "/welding_3.jpg", width: 1200, height: 630, alt: "СМК Сталь — металлоконструкции" },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://xn----8sb2agb3adi6g.xn--p1ai"),
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "СМК Сталь",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "msapplication-TileColor": "#0b0f17",
    "msapplication-config": "none",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "СМК Сталь",
    url: "https://xn----8sb2agb3adi6g.xn--p1ai",
    logo: "https://xn----8sb2agb3adi6g.xn--p1ai/logo.png",
    email: "zakaz@smksteel-spb.ru",
    telephone: "+7 (921) 947-29-11",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Санкт-Петербург",
      streetAddress: "ул. Мурзинская, д. 11, литера А, офис 701",
      addressCountry: "RU",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+7-921-947-29-11",
        contactType: "sales",
        areaServed: "RU",
        availableLanguage: ["ru"],
      },
    ],
  };

  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <YandexMetrica counterId={process.env.NEXT_PUBLIC_YANDEX_METRICA_ID || "XXXXXXXX"} />
        <YandexDirect targetId={process.env.NEXT_PUBLIC_YANDEX_DIRECT_ID} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
