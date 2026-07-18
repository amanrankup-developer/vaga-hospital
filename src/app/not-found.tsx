// app/not-found.tsx
import Link from "next/link";
import {
  ArrowUpRight,
  AlertTriangle,
  Home,
  Phone,
  Stethoscope,
  HeartPulse,
} from "lucide-react";

const quickLinks = [
  {
    title: "About Us",
    description: "Learn about Vaga Superspeciality Hospital",
    href: "/about-us",
  },
  {
    title: "Specialities",
    description: "Explore our medical & surgical departments",
    href: "/specialities",
  },
  {
    title: "Doctors",
    description: "Meet our team of expert consultants",
    href: "/doctors",
  },
  {
    title: "Facilities",
    description: "Take a tour through our wards & equipment",
    href: "/facilities",
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen overflow-hidden bg-linear-to-b from-sky-50 to-white pt-10">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-sky-600/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-350 items-center px-6 py-16 lg:px-10">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            {/* Left side */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sky-600 shadow-sm">
                <AlertTriangle size={14} />
                Page Not Found
              </span>

              <h1 className="mt-4 text-6xl font-extrabold leading-none tracking-tight text-slate-950 md:text-[80px]">
                404
              </h1>

              <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                We couldn&apos;t find the page you&apos;re{" "}
                <span className="text-sky-600">looking for.</span>
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                The page may have been moved, renamed, or is temporarily
                unavailable. Let&apos;s get you back on track — explore our
                care, doctors, and facilities below.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700"
                >
                  <Home size={16} />
                  Return Home
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-6 py-3.5 text-sm font-semibold text-sky-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50"
                >
                  <Phone size={16} />
                  Contact Us
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <HeartPulse size={18} />
                </span>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">
                    Medical emergency?
                  </span>{" "}
                  Call{" "}
                  <a href="tel:+916391000030" className="font-semibold text-sky-600 hover:underline">
                    6391 000030
                  </a>{" "}
                  — we&apos;re open 24 hours.
                </p>
              </div>
            </div>

            {/* Right side — quick links card */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                      Vaga Hospital
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-slate-950">
                      Continue Exploring
                    </h3>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                    <Stethoscope size={26} />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group block rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/50 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {item.description}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={18}
                          className="shrink-0 text-sky-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                    Compassion • Care • Excellence
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    A 50+ bedded super speciality hospital in Lucknow,
                    trusted for compassionate care and advanced medicine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}