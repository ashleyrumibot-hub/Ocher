import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ocher — AI Venture Studio",
  description:
    "Ocher is an AI venture studio and incubator building the future of intelligent systems. Founded by Boz Zou.",
  keywords: ["AI", "venture studio", "incubator", "artificial intelligence", "Boz Zou", "Ocher"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ocher — AI Venture Studio",
    description:
      "Building the future of intelligent systems. AI venture studio and incubator by Boz Zou.",
    url: "https://ocher.ai",
    siteName: "Ocher",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
