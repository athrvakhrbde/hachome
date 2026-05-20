import type { Viewport } from "next";
import { Tektur } from "next/font/google";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const tektur = Tektur({
  subsets: ["latin"],
  variable: "--font-tektur",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = rootMetadata;

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={`${tektur.variable} font-clash bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
