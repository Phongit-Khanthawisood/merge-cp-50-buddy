import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merge CP50 Buddy",
  description: "Merge CP50 Buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/comp.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
