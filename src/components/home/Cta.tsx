
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

export function Cta() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-8">
      {/* Background Blur — matches Testimonials/Faq */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#1B6FA8]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#1FA8A5]/10 blur-3xl" />

      <FadeUp>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-[#143A63] px-8 py-16 text-center text-white shadow-[0_24px_70px_-24px_rgba(20,58,99,0.45)] lg:px-16">
          {/* Inner decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1B6FA8]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#1FA8A5]/10 blur-3xl" />

          <div className="relative z-10">
            <FadeUp delay={0}>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1FA8A5]">
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
              <p className="mx-auto mt-5 max-w-2xl text-lg text-[#D7EAF5]">
                Connect with our care team and book a visit that fits your
                schedule.
              </p>
            </FadeUp>

            <FadeUp delay={360}>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/appointment"
                  className="group rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#143A63] shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAF6FD] hover:shadow-xl hover:shadow-white/20"
                >
                  Schedule Visit
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-full border border-[#D7EAF5]/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1FA8A5] hover:bg-[#1FA8A5]/10 hover:text-[#1FA8A5]"
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