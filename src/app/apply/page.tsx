import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ApplyForm } from "@/components/ApplyForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apply | HackHome",
  description: "Apply to live at HackHome. Rolling admissions for founders and hackers in Bangalore.",
};

export default function ApplyPage() {
  return (
    <main>
      <Nav />
      <div className="pt-24">
        <ApplyForm />
      </div>
      <Footer />
    </main>
  );
}
