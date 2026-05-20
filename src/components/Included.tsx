"use client";

import { AnimatedSection } from "./AnimatedSection";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    title: "Live",
    items: [
      "Private room",
      "All meals",
      "Laundry",
      "Utilities",
    ],
  },
  {
    title: "Work",
    items: [
      "24/7 deep-focus workspace",
      "High-speed internet",
      "Quiet hours",
    ],
  },
  {
    title: "Grow",
    items: [
      "Weekly 1:1 mentorship",
      "Demo nights",
      "Investor dinners",
      "Founder walks",
      "Access to top founders and investors",
    ],
  },
];

export function Included() {
  return (
    <AnimatedSection
      id="included"
      className="border-b border-border py-28 md:py-40"
    >
      <PageContainer>
        <SectionHeader
          eyebrow="03. What's Included"
          headline="Everything handled. Nothing in your way."
          subhead="Live, work, and grow under one roof. No nickel-and-diming. No admin tax."
        />

        <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-8">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-tektur text-lg font-semibold uppercase tracking-wide text-accent">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="font-clash text-sm leading-snug text-foreground md:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageContainer>
    </AnimatedSection>
  );
}
