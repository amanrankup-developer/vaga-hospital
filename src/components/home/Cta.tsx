// components/home/Cta.tsx
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

export function Cta() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-8">
      {/* Background Blur — matches Testimonials/Faq */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <FadeUp>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-slate-950 px-8 py-16 text-center text-white shadow-[0_24px_70px_-24px_rgba(15,23,42,0.45)] lg:px-16">
          {/* Inner decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative z-10">
            <FadeUp delay={0}>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
                Appointment
              </p>
            </FadeUp>

            <FadeUp delay={120}>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Ready to experience healthcare that feels calm, modern, and
                personal?
              </h2>
            </FadeUp>

            <FadeUp delay={240}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
                Connect with our care team and book a visit that fits your
                schedule.
              </p>
            </FadeUp>

            <FadeUp delay={360}>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/appointment"
                  className="group rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl hover:shadow-white/20"
                >
                  Schedule Visit
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-400/10 hover:text-sky-300"
                >
                  Contact Us
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}