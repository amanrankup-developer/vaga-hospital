import { Cta } from "@/components/home/Cta";
import { Departments } from "@/components/home/Departments";
import { Doctors } from "@/components/home/Doctors";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Departments />
      <Doctors />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  );
}
