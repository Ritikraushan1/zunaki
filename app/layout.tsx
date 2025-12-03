import type { Metadata } from "next";
import { Geist, Geist_Mono, Yeseva_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yesevaOne = Yeseva_One({
  weight: "400",
  variable: "--font-yeseva",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZP - Digital Marketing Made Simple",
  description: "Exceptional Growth Higher Sales And Boosted Profitability Through Paid In Advertising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${yesevaOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
