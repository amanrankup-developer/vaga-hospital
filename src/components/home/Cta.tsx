import Link from "next/link";

export function Cta() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-4xl bg-slate-950 px-8 py-16 text-center text-white shadow-[0_24px_70px_-24px_rgba(15,23,42,0.45)] lg:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
          Appointment
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Ready to experience healthcare that feels calm, modern, and personal?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          Connect with our care team and book a visit that fits your schedule.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/appointment"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Schedule Visit
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
