import type { Metadata, Viewport } from "next";
import { Amiri, IBM_Plex_Sans_Arabic } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/components/language-provider";
import { content } from "@/lib/content";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const arabic = content.ar;

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const viewport: Viewport = {
  themeColor: "#fbf6ee",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: arabic.meta.title,
  description: arabic.meta.description,
  keywords: [
    "فَهْم",
    "FAHM",
    "تعلم تكيفي",
    "ذوي الإعاقة",
    "ذكاء اصطناعي",
    "تعليم شامل",
  ],
  openGraph: {
    title: arabic.meta.title,
    description: arabic.meta.description,
    locale: "ar_SA",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: arabic.meta.title,
    description: arabic.meta.description,
  },
};

const localeScript = `(function(){try{var l=localStorage.getItem('fahm-lang');if(l==='en'){document.documentElement.lang='en';document.documentElement.dir='ltr';}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlex.variable} ${amiri.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-sand font-sans text-ink">
        <Script id="fahm-locale" strategy="beforeInteractive">
          {localeScript}
        </Script>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
