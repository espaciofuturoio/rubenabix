import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "Ruben Abarca | Full Stack Engineer",
  description: "Passionate developer and engineer with nine years of experience in web and mobile applications, specializing in financial and Bitcoin technologies. Proficient in Agile Scrum and Kanban methodologies. Next.js, React, React Native, Skia, TypeScript, Node.js, Go, AWS, Google Cloud, Web3, Bitcoin, Ordinals, Nostr, BRC20, Bitcash Bank, RareMint, Keeper Solutions, Keeper Tokens, BitcashUSD, Bitcoin Inscriptions, Bitcoin Transactions, Bitcoin Tax, Bitcoin Marketplace, Bitcoin API, Bitcoin Blockchain, Bitcoin NFTs, Bitcoin Ordinals, Bitcoin Runes, Bitcoin BR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7DMK64M3WD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7DMK64M3WD');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider> */}
        {children}
      </body>
    </html>
  );
}
