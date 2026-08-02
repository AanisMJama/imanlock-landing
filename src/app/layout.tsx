import type { Metadata, Viewport } from "next";
import { Inter, Amiri } from "next/font/google";
import { GoogleAnalytics } from "@/components/site/GoogleAnalytics";
import { MicrosoftClarity } from "@/components/site/MicrosoftClarity";
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

const SITE_URL = "https://imanfocus.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ImanFocus — Pause. Remember Allah. Return with Intention.",
  description:
    "While scrolling social media, remember Allah. Mindful sessions, Quran, dhikr, reflection, streaks, and hasanat — with ImanFocus.",
  keywords: [
    "ImanFocus",
    "Islamic app",
    "remember Allah",
    "Muslim focus app",
    "dhikr",
    "Quran",
    "hasanat",
    "mindful session",
    "digital wellbeing",
  ],
  authors: [{ name: "ImanFocus" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "ImanFocus",
    title: "ImanFocus — Pause. Remember Allah. Return with Intention.",
    description:
      "While scrolling social media, remember Allah. Mindful sessions, Quran, dhikr, reflection, streaks, and hasanat — with ImanFocus.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImanFocus — Pause. Remember Allah. Return with Intention.",
    description:
      "While scrolling social media, remember Allah. Mindful sessions, Quran, dhikr, reflection, streaks, and hasanat — with ImanFocus.",
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
  name: "ImanFocus",
  description:
    "While scrolling social media, remember Allah. Mindful sessions, Quran, dhikr, reflection, streaks, and hasanat — with ImanFocus.",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS",
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
        <GoogleAnalytics />
        <MicrosoftClarity />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
