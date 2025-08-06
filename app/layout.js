import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// Define local fonts
const robotoFont = localFont({
  src: "./fonts/Roboto.ttf",
  variable: "--font-roboto", 
  weight: "100 900",
});

const vinaSansFont = localFont({
  src: "./fonts/VinaSans.ttf",
  variable: "--font-vina-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Hutčanská 5 s vierou",
  description:
    "Oficiálna stránka kresťanského behu Hutčanská 5 s vierou - beh srdcom i telom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body
        className={`${robotoFont.variable} ${vinaSansFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}
