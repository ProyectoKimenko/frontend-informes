import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const opensSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panel Kimenko",
  description: "Panel de documentos Kimenko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={opensSans.className}>{children}</body>
    </html>
  );
}
