import { site } from "@/lib/site";
import { Section } from "./Section";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";
import { ButtonLink } from "./ButtonLink";

const stayOptions = [
  {
    label: "Private room",
    occupancy: "1 person",
    price: "35,000",
    unit: "per month",
  },
  {
    label: "2 sharing",
    occupancy: "2 people",
    price: "20,000",
    unit: "per person per month",
  },
  {
    label: "3 sharing",
    occupancy: "3 people",
    price: "17,000",
    unit: "per person per month",
  },
  {
    label: "4 sharing",
    occupancy: "4 people",
    price: "14,000",
    unit: "per person per month",
  },
] as const;

export function Stay() {
  return (
    <Section id="stay" className="section-pad section-alt border-b border-border">
      <PageContainer>
        <SectionHeader
          eyebrow="03. Stay"
          headline="Room options."
          subhead="Stay, laundry, and food included in every plan. Pick the setup that fits how you live and build."
        />

        <ul className="mt-16 grid gap-4 md:grid-cols-2 md:gap-5">
          {stayOptions.map((option) => (
            <li key={option.label} className="stay-card group">
              <div>
                <h3 className="font-tektur text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {option.label}
                </h3>
                <p className="font-clash mt-2 text-sm text-muted">{option.occupancy}</p>
              </div>

              <div className="stay-card-price mt-10 border-t border-border pt-8">
                <p className="font-tektur text-4xl font-bold leading-none tracking-tight text-accent md:text-5xl">
                  ₹{option.price}
                </p>
                <p className="font-clash mt-3 text-sm text-muted md:text-base">{option.unit}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="font-clash mt-12 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          Prices in INR. Month-to-month. Apply with your preferred room type in the form.
        </p>

        <div className="mt-8">
          <ButtonLink href={site.applyUrl}>Apply</ButtonLink>
        </div>
      </PageContainer>
    </Section>
  );
}
