export const site = {
  name: "hackhome",
  displayName: "Hack Home",
  tagline: "build. live. ship.",
  heroEyebrow: "Hack Home",
  heroSubhead:
    "Live together for 3 to 6 months, or shorter. At the epicenter of India's Silicon Valley.",
  location: "Koramangala, Bangalore",
  applyUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfz5s_2biXXOEodc0tRTLv5o0BGZrpGZV_7Y4P1BYo84uZFtQ/viewform?usp=send_form",
  twitter: "https://x.com/hackhomehq",
  twitterHandle: "@hackhomehq",
  logo: "/hackhome-logo.png",
  ogImage: "/og-image.png",
} as const;

export const copy = {
  aboutHeadline: "Live together. Build full-time.",
  aboutLead:
    "Hack Home removes all friction from daily life so residents can focus 100% on building. Meals, laundry, AI credits, and mentorship are bundled in.",
  residentPerks:
    "Residents get weekly 1:1 sessions, a 24/7 deep-focus workspace, and access to top founders, investors, and operators.",
  communityIntro:
    "An ongoing co-living community with no fixed cohort end date.",
  communityStay: "Residents stay month-to-month or longer.",
  communityFluid:
    "Residents come and go more fluidly than a fellowship model.",
} as const;

export const bundled = ["Meals", "Laundry", "AI Credits", "Mentorship"] as const;

export const communityPillars = [
  {
    title: "Month-to-month",
    description: "No fixed cohort end date. Stay while you are building.",
  },
  {
    title: "Always on",
    description: "Weekly 1:1s and a 24/7 deep-focus workspace.",
  },
  {
    title: "Network access",
    description: "Founders, investors, and operators through the house.",
  },
] as const;

export const programming = [
  {
    name: "Demo nights",
    description: "Residents share what they ship with the house.",
  },
  {
    name: "Investor dinners",
    description: "Operators and capital in the room, not cold outreach.",
  },
  {
    name: "Founder walks",
    description: "Informal time with people who have actually built.",
  },
] as const;

/** Set at build time for canonical URLs, sitemap, and Open Graph. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hackhome.in";

export const siteDescription = `${site.displayName}: live together for 3 to 6 months in ${site.location}. Co-living for builders with meals, laundry, AI credits, and mentorship bundled in.`;

export const navLinks = [] as const;
