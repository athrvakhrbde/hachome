import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Expect } from "@/components/Expect";
import { Included } from "@/components/Included";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoItsFor } from "@/components/WhoItsFor";
import { Programming } from "@/components/Programming";
import { FAQ } from "@/components/FAQ";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Expect />
      <Included />
      <HowItWorks />
      <WhoItsFor />
      <Programming />
      <FAQ />
      <CtaBand />
      <Footer />
    </main>
  );
}
