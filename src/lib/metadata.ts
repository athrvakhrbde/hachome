import type { Metadata } from "next";
import { site, siteDescription, siteUrl } from "./site";

export function createPageMetadata({
  title,
  description = siteDescription,
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const url = `${siteUrl}${path}`;
  const pageTitle = title ?? `${site.name} | ${site.tagline}`;

  return {
    title: title ? `${title} | ${site.name}` : pageTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: site.ogImage,
          width: 899,
          height: 899,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [site.ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: siteDescription,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: siteDescription,
    url: siteUrl,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: site.ogImage,
        width: 899,
        height: 899,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: siteDescription,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};
