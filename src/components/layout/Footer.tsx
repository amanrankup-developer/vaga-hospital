// components/Footer.tsx
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Empanalments", href: "/empanalments" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Press Release", href: "/press" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

const specialities = [
  { label: "Cardiology", href: "/specialities/cardiology" },
  { label: "Neurology", href: "/specialities/neurology" },
  { label: "Orthopedics", href: "/specialities/orthopedics" },
  { label: "Oncology", href: "/specialities/oncology" },
  { label: "Pediatrics", href: "/specialities/pediatrics" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-375 px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                <span className="text-emerald-400">V</span>
                <span className="text-orange-400">H</span>
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                VAGA HOSPITAL
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              A 50+ bedded super speciality hospital in Lucknow, bringing
              compassionate care and advanced medicine together for every step
              of your treatment journey.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Mail, href: "#" },
                { icon: Phone, href: "#" },
                { icon: MapPin, href: "#" },
                { icon: ArrowUp, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-sky-500 hover:text-sky-400"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-sky-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Specialities
            </h3>
            <ul className="mt-5 space-y-3">
              {specialities.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-sky-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-sky-400" />
                <span className="text-sm leading-relaxed text-slate-400">
                  KS-14 Aliganj Housing Scheme, Sitapur Road, Lucknow – 226020
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-sky-400" />
                <Link
                  href="tel:+916391000030"
                  className="text-sm text-slate-400 transition hover:text-sky-400"
                >
                  6391 000030, 31
                </Link>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-sky-400" />
                <Link
                  href="mailto:vagahealthcare@gmail.com"
                  className="text-sm text-slate-400 transition hover:text-sky-400"
                >
                  vagahealthcare@gmail.com
                </Link>
              </li>
            </ul>

            <Link
              href="/appointment"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Vaga Hospital. All rights reserved.
          </p>
          <p>
            Website developed &amp; designed by{" "}
            <span className="text-slate-300">Your Agency Name</span>
          </p>
        </div>
      </div>

      {/* Back to top */}
      <Link
        href="#top"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white shadow-xl transition hover:bg-sky-700"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </Link>
    </footer>
  );
}
