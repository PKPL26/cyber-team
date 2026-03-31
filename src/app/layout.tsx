import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { prisma } from "@/src/lib/auth";
import "./globals.css";
import Navbar from "../components/elements/Navbar";
import Background from "../components/elements/Background/index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cyber-team",
  description: "Cyber Team",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalConfig = await prisma.siteConfig.findUnique({
    where: { id: "global" }
  });
  const bgType = globalConfig?.background || "grid";
  const bgColor = globalConfig?.backgroundColor || "#000000";

  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${geistSans.variable} ${geistMono.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Background type={bgType} color={bgColor} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
