import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";

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
    "Bogdan Stanga, Software Engineering, Tech Leadership, AI, LLM, Google, Google Search,Engineering Management, CTO, Software Architecture, Team Building, Technical Strategy",
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
        url: "https://avatars.githubusercontent.com/u/3215078",
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
    images: ["https://avatars.githubusercontent.com/u/3215078"],
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
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let isDark = false;
                const darkModeStored = localStorage.getItem('darkMode');
                
                if (darkModeStored !== null) {
                  isDark = darkModeStored === 'true';
                } else {
                  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  localStorage.setItem('darkMode', String(isDark));
                }

                if (isDark) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                console.log('Dark mode initialization failed:', e);
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-white`}
      >
        <div className="grid grid-rows-[1fr_auto] items-start justify-items-center min-h-screen p-8 sm:p-12 font-[family-name:var(--font-geist-sans)] transition-colors duration-200 bg-white dark:bg-black">
          <ThemeToggle className="absolute md:fixed top-8 right-8" />
          {children}
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
