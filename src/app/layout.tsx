import type { Metadata, Viewport } from "next";
import { Inter, Amiri } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const SITE_URL = "https://imanlock.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ImanLock — Remember Allah Before You Unlock",
  description:
    "Block distracting apps and build stronger Islamic habits. Remember Allah before scrolling with ImanLock.",
  keywords: [
    "ImanLock",
    "Islamic app",
    "app blocker",
    "remember Allah",
    "Muslim focus app",
    "dhikr",
    "Quran reflection",
    "screen time",
    "digital wellbeing",
  ],
  authors: [{ name: "ImanLock" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "ImanLock",
    title: "ImanLock — Remember Allah Before You Unlock",
    description:
      "Block distracting apps and build stronger Islamic habits. Remember Allah before scrolling with ImanLock.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImanLock — Remember Allah Before You Unlock",
    description:
      "Block distracting apps and build stronger Islamic habits. Remember Allah before scrolling with ImanLock.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#075C22",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "ImanLock",
  description:
    "Block distracting apps and build stronger Islamic habits. Remember Allah before scrolling with ImanLock.",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Android",
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
