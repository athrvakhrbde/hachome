import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { About } from "@/components/About";
import { Community } from "@/components/Community";
import { Stay } from "@/components/Stay";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Community />
      <Stay />
      <CtaBand />
      <Footer />
    </main>
  );
}
