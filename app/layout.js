import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import LenisProvider from "@/components/lenisProvider";

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
  title: "Beh Srdcom i telom",
  description:
    "Oficiálna stránka behu Srdcom i telom v Nižnej hutke. Pridajte sa k nám na každoročnom bežeckom podujatí a zažite nezabudnuteľnú atmosféru, súťaživosť a komunitu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <LenisProvider>

      <body
        className={`${robotoFont.variable} ${vinaSansFont.variable} font-sans antialiased`}
        >
        {children}
      </body>
      <Analytics />
        </LenisProvider>
    </html>
  );
}
