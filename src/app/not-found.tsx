
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
    <main className="min-h-screen overflow-hidden bg-[#F8FCFF] pt-10">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#1B6FA8]/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-350 items-center px-6 py-16 lg:px-10">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            {/* Left side */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D8EAF5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#1B6FA8] shadow-sm">
                <AlertTriangle size={14} />
                Page Not Found
              </span>

              <h1 className="mt-4 text-6xl font-extrabold leading-none tracking-tight text-[#143A63] md:text-[80px]">
                404
              </h1>

              <h2 className="mt-3 text-2xl font-bold text-[#143A63] sm:text-3xl">
                We couldn&apos;t find the page you&apos;re{" "}
                <span className="text-[#1FA8A5]">looking for.</span>
              </h2>

              <p className="mt-4 leading-relaxed text-[#4B5563]">
                The page may have been moved, renamed, or is temporarily
                unavailable. Let&apos;s get you back on track — explore our
                care, doctors, and facilities below.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#1B6FA8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1B6FA8]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155C8C]"
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
                  className="inline-flex items-center gap-2 rounded-full border border-[#D8EAF5] bg-white px-6 py-3.5 text-sm font-semibold text-[#1B6FA8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAF6FD]"
                >
                  <Phone size={16} />
                  Contact Us
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F28C28]/10 text-[#F28C28]">
                  <HeartPulse size={18} />
                </span>
                <p className="text-sm text-[#4B5563]">
                  <span className="font-semibold text-[#143A63]">
                    Medical emergency?
                  </span>{" "}
                  Call{" "}
                  <a href="tel:+916391000030" className="font-semibold text-[#1B6FA8] hover:underline">
                    6391 000030
                  </a>{" "}
                  — we&apos;re open 24 hours.
                </p>
              </div>
            </div>

            {/* Right side — quick links card */}
            <div className="relative">
              <div className="rounded-3xl border border-[#D8EAF5] bg-white p-6 shadow-xl shadow-[#143A63]/5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#1B6FA8]">
                      Vaga Hospital
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-[#143A63]">
                      Continue Exploring
                    </h3>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF6FD] text-[#1FA8A5]">
                    <Stethoscope size={26} />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group block rounded-2xl border border-[#D8EAF5] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1B6FA8] hover:bg-[#EAF6FD]/50 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-[#143A63]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-[#4B5563]">
                            {item.description}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={18}
                          className="shrink-0 text-[#1B6FA8] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[#143A63] p-5 text-white">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#D7EAF5]">
                    Compassion • Care • Excellence
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#D7EAF5]">
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