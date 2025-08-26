import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Forge Brotherhood - Real Connection Through Prayer",
    template: "%s | Forge Brotherhood"
  },
  description: "Join a brotherhood forged through prayer. Transform isolation into belonging. Build deep, authentic friendships with men who will stand with you through life's battles.",
  keywords: [
    "men's community",
    "brotherhood",
    "prayer network",
    "male friendship",
    "men's mental health",
    "faith community",
    "accountability groups",
    "spiritual growth",
    "men's support groups"
  ],
  authors: [{ name: "Forge Brotherhood" }],
  creator: "Forge Brotherhood",
  publisher: "Forge Brotherhood",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forge-app.io",
    siteName: "Forge Brotherhood",
    title: "Forge Brotherhood - Real Connection Through Prayer",
    description: "Join a brotherhood forged through prayer. Transform isolation into belonging. Build deep, authentic friendships with men who will stand with you through life's battles.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Forge Brotherhood - Where men forge real connection through prayer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge Brotherhood - Real Connection Through Prayer",
    description: "Join a brotherhood forged through prayer. Transform isolation into belonging.",
    images: ["/og-image.png"],
    creator: "@forgebrotherhood"
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#f59e0b"
      }
    ]
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://forge-app.io"),
  alternates: {
    canonical: "/"
  },
  category: "community"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f59e0b" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Forge Brotherhood",
    description: "A brotherhood engine that transforms male loneliness into deep, authentic connection through the power of prayer.",
    url: "https://forge-app.io",
    logo: "https://forge-app.io/logo.png",
    sameAs: [
      "https://twitter.com/forgebrotherhood",
      "https://github.com/Forge-Brotherhood"
    ],
    foundingDate: "2024",
    slogan: "Real Connection Through Prayer"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
