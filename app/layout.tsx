import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BHPH Early Warning | Catch the Warning Signs Before They Become Charge-Offs",
  description: "AI-powered early warning system for Buy Here Pay Here dealers. Detect mechanical issues, job changes, and financial hardship before payments stop. Save accounts, preserve relationships, protect your portfolio.",
  keywords: ["BHPH", "Buy Here Pay Here", "auto dealer", "collections", "charge-off prevention", "AI", "early warning"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "BHPH Early Warning | White Hat Way",
    description: "Catch the warning signs before they become charge-offs. AI-powered early detection for BHPH dealers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
