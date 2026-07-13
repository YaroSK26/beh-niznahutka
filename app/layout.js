import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import LenisProvider from "@/components/lenisProvider";

const robotoFont = localFont({
  src: "./fonts/Roboto.ttf",
  variable: "--font-roboto",
  weight: "100 900",
});

const blackMangoFont = localFont({
  src: "./fonts/BlackMango.ttf",
  variable: "--font-black-mango",
  weight: "400",
});

const vinaSansFont = localFont({
  src: "./fonts/VinaSans.ttf",
  variable: "--font-vina-sans",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://www.niznahutkabeh.eu"),
  title: {
    default: "Beh Srdcom i telom | Nižná Hutka",
    template: "%s | Beh Srdcom i telom",
  },
  description:
    "Oficiálna stránka behu Srdcom i telom v Nižnej Hutke. 27. september 2026. 5 km hlavný beh a 500 m detský beh na Strelnici v Nižnej Hutke.",
  keywords: [
    "beh Nižná Hutka",
    "Beh Srdcom i telom",
    "hutčanská päťka",
    "5km beh",
    "bežecké podujatie",
    "beh Košice okolie",
    "pretekaj",
    "detský beh",
    "beh 2026",
  ],
  authors: [
    {
      name: "Jaroslav Barabáš",
      url: "https://www.jaroslav-portfolio.eu",
    },
  ],
  creator: "Jaroslav Barabáš",
  openGraph: {
    title: "Beh Srdcom i telom | Nižná Hutka",
    description:
      "Bežecké podujatie v Nižnej Hutke. 27. september 2026. Štartujte s nami na 5 km alebo 500 m detskej trase.",
    url: "https://www.niznahutkabeh.eu",
    siteName: "Beh Srdcom i telom",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/beh/1-min.jpg",
        width: 1200,
        height: 630,
        alt: "Beh Srdcom i telom v Nižnej Hutke",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beh Srdcom i telom | Nižná Hutka",
    description: "Bežecké podujatie v Nižnej Hutke. 27. september 2026.",
    images: ["/beh/1-min.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://www.niznahutkabeh.eu",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Beh Srdcom i telom 2026",
  startDate: "2026-09-27T14:00:00+02:00",
  endDate: "2026-09-27T17:00:00+02:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Strelnica Nižná Hutka",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strelnica",
      addressLocality: "Nižná Hutka",
      postalCode: "04018",
      addressCountry: "SK",
    },
  },
  description:
    "Bežecké podujatie Beh Srdcom i telom v Nižnej Hutke. 5 km hlavný beh a 500 m detský beh.",
  organizer: [
    {
      "@type": "Organization",
      name: "Srdcom i telom",
      url: "https://www.srdcomitelom.sk",
    },
    {
      "@type": "Organization",
      name: "Obec Nižná Hutka",
      url: "https://www.niznahutka.sk",
    },
  ],
  url: "https://www.niznahutkabeh.eu",
  image: "https://www.niznahutkabeh.eu/beh/1-min.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <LenisProvider>
        <body
          className={`${robotoFont.variable} ${vinaSansFont.variable} ${blackMangoFont.variable} font-sans antialiased`}
        >
          {children}
        </body>
        <Analytics />
      </LenisProvider>
    </html>
  );
}
