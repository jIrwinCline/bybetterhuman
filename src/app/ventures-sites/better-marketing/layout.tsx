import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Source_Sans_3,
  JetBrains_Mono,
  Playfair_Display,
} from "next/font/google";
import "./better-marketing.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Better Marketing Digital — Done-For-You Ad Campaigns That Actually Work",
  description:
    "We assign a dedicated U.S.-based team of media buyers, copywriters, and strategists to run your Meta and Google campaigns daily. 3,000+ campaigns. $20M+ managed. No sales calls.",
};

export default function BetterMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`better-marketing-site ${barlow.variable} ${sourceSans.variable} ${jetbrains.variable} ${playfair.variable}`}
    >
      {children}
    </div>
  );
}
