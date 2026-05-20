export const site = {
  name: "hackhome",
  tagline: "build. live. ship.",
  heroSubhead: "At the epicenter of India's Silicon Valley.",
  location: "Koramangala, Bangalore",
  applyUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfz5s_2biXXOEodc0tRTLv5o0BGZrpGZV_7Y4P1BYo84uZFtQ/viewform?usp=send_form",
  twitter: "https://x.com/hackhomehq",
  twitterHandle: "@hackhomehq",
  logo: "/hackhome-logo.svg",
  ogImage: "/og-image.png",
} as const;

/** Set at build time for canonical URLs, sitemap, and Open Graph. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hackhome.in";

export const siteDescription = `Live-in hacker house for builders in ${site.location}. ${site.heroSubhead}`;

export const navLinks = [] as const;
