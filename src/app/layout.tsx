import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { BouquetProvider } from "@/context/BouquetContext";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "digibouquet | Beautiful flowers delivered digitally",
  description: "Create and share a digital flower bouquet with meaningful blooms",
  openGraph: {
    title: "digibouquet",
    description: "Create and share a digital flower bouquet",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} antialiased`}>
        <BouquetProvider>
          {children}
        </BouquetProvider>
      </body>
    </html>
  );
}
