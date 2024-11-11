import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bogdan Stanga - Software Engineering, Leadership and LLMs",
  description:
    "Experienced tech lead sharing insights on software engineering, leadership, and LLMs. Expert in building and operating high-performing engineering teams.",
  keywords:
    "Bogdan Stanga, Software Engineering, Tech Leadership, AI, LLM, Engineering Management, CTO, Software Architecture, Team Building, Technical Strategy",
  authors: [{ name: "Bogdan Stanga" }],
  creator: "Bogdan Stanga",
  publisher: "Bogdan Stanga",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: "Bogdan Stanga - Software Engineering, Leadership and AI",
    description:
      "Experienced tech lead sharing insights on software engineering, leadership, and LLMs. Expert in building and operating high-performing engineering teams.",
    url: "https://bogdanstanga.com",
    siteName: "Bogdan Stanga",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create and add this image
        width: 1200,
        height: 630,
        alt: "Bogdan Stanga - Software Engineering, Leadership and AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bogdan Stanga - Software Engineering, Leadership and AI",
    description:
      "Experienced tech lead sharing insights on software engineering, leadership, and LLMs.",
    creator: "@bdstanga",
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
