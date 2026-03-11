import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "By Better Human — Venture Studio",
  description:
    "Cultivating modern projects that create human purpose and business during and after an AI economy.",
  icons: {
    icon: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
