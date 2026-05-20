import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Included } from "@/components/Included";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoItsFor } from "@/components/WhoItsFor";
import { Programming } from "@/components/Programming";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Included />
      <HowItWorks />
      <WhoItsFor />
      <Programming />
      <Footer />
    </main>
  );
}
