import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vinu Holdings - Diversified Investment Company | Strategic Investments & Real Estate",
  description: "Vinu Holdings is a diversified investment company focused on public markets, private equity, and real estate opportunities. Building enduring value through strategic investments and innovation.",
  keywords: "Vinu Holdings, investment company, strategic investments, real estate development, portfolio management, private equity, public markets, diversified investments, investment opportunities, Vinu Holdings investment, Vinu Holdings real estate, Vinu Holdings strategic investments",
  authors: [{ name: "Vinu Holdings" }],
  creator: "Vinu Holdings",
  publisher: "Vinu Holdings",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Vinu Holdings - Diversified Investment Company",
    description: "Building enduring value through strategic investments, real estate development, and innovative ventures. Vinu Holdings offers diversified investment opportunities.",
    type: "website",
    locale: "en_US",
    siteName: "Vinu Holdings",
    url: "https://vinuholdings.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinu Holdings - Diversified Investment Company",
    description: "Building enduring value through strategic investments and real estate development.",
    creator: "@vinuholdings",
  },
  alternates: {
    canonical: "https://vinuholdings.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
