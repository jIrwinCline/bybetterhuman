import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Source_Sans_3,
  JetBrains_Mono,
  Playfair_Display,
} from "next/font/google";
import "./rezonance.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-source",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-jb",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-playfair-rez",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rezonance — When the Grid Goes Down",
  description:
    "180GB+ of offline knowledge on a rugged phone. Wikipedia, medical guides, survival manuals, maps, and 60,000+ books. No signal required.",
};

export default function RezonanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rezonance-site ${barlow.variable} ${sourceSans.variable} ${jetbrainsMono.variable} ${playfair.variable}`}
    >
      {children}
    </div>
  );
}
