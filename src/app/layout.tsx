import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "СМК Сталь — металлоконструкции в Санкт-Петербурге",
  description:
    "Изготовление металлоконструкций в Санкт-Петербурге. Полный цикл производства. От 18000 руб/тн.",
  keywords: [
    "металлоконструкции",
    "изготовление металлоконструкций",
    "Санкт-Петербург",
    "СМК Сталь",
    "фермы",
    "балки",
    "двутавр",
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
    images: [
      "https://thb.tildacdn.com/tild3736-3037-4334-b863-353562353039/-/resize/504x/d946dbce69a24e0288d5.jpg",
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
      "https://thb.tildacdn.com/tild3736-3037-4334-b863-353562353039/-/resize/504x/d946dbce69a24e0288d5.jpg",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://xn----8sb2agb3adi6g.xn--p1ai"),
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
    logo: "https://static.tildacdn.com/tild6261-3530-4135-b865-373336663531/photo.png",
    email: "zakaz@smksteel-spb.ru",
    telephone: "+7 (921) 947-29-11",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Санкт-Петербург",
      streetAddress: "ул. Караваевская 57",
      addressCountry: "RU",
    },
  };

  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
