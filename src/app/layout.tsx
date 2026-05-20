import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";

const tektur = Tektur({
  subsets: ["latin"],
  variable: "--font-tektur",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hackhome.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HackHome | build. live. ship.",
    template: "%s | HackHome",
  },
  description:
    "HackHome is a live-in workspace for founders and hackers in Bangalore. Meals, mentorship, and momentum, bundled.",
  openGraph: {
    title: "HackHome | build. live. ship.",
    description:
      "A hacker house in Bangalore for serious builders. Live-in workspace, meals, mentorship, momentum.",
    url: siteUrl,
    siteName: "HackHome",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HackHome | build. live. ship.",
    description:
      "A hacker house in Bangalore for serious builders.",
  },
  icons: {
    icon: "/hackhome-logo.png",
    apple: "/hackhome-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${tektur.variable} font-clash bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
