import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vinu Holdings - Building Great Companies",
  description: "Vinu Holdings combines strategic investments, innovative ventures, and real estate development to create lasting value and growth opportunities.",
  keywords: "investment, real estate, café ventures, strategic investments, portfolio management",
  authors: [{ name: "Vinu Holdings" }],
  openGraph: {
    title: "Vinu Holdings - Building Great Companies",
    description: "Strategic investments, innovative ventures, and real estate development",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
