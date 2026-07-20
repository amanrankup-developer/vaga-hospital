import { Cta } from "@/components/home/Cta";
import { Departments } from "@/components/home/Departments";
import { Doctors } from "@/components/home/Doctors";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";
import { Faq } from "@/components/home/Faq";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Services />
      <Stats />
      <Departments />
      <Doctors />
      <Testimonials />
      <Faq />
      <Cta />
    </main>
  );
}
