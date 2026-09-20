import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MARCA Creatives | Content · Film · Brand Identity Studio",
  description: "A production studio for founders and brands who want their story told properly — short form, films, identity and the strategy that holds it together.",
  keywords: "content production, brand film, short form video, brand identity, Vadodara, Gujarat, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700;800&family=Archivo+Black&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
