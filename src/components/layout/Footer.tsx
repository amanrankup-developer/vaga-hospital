// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Heart,
  Shield,
  Award,
  MessageCircle,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Empanalments", href: "/empanalments" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Press Release", href: "/press" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Blogs", href: "/blogs" },
];

const specialities = [
  { label: "Cardiology", href: "/specialities/cardiology" },
  { label: "Neurology", href: "/specialities/neurology" },
  { label: "Orthopedics", href: "/specialities/orthopedics" },
  { label: "Oncology", href: "/specialities/oncology" },
  { label: "Pediatrics", href: "/specialities/pediatrics" },
];

const socialLinks = [
  {
    icon: MessageCircle,
    href: "https://wa.me/916391000030",
    label: "WhatsApp",
    color: "hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/VagaHospitals",
    label: "Facebook",
    color: "hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/vagahospitals",
    label: "Instagram",
    color: "hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-[#E4405F]/10",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@VagaHospitals",
    label: "YouTube",
    color: "hover:text-[#FF0000] hover:border-[#FF0000] hover:bg-[#FF0000]/10",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/vaga-hospitals",
    label: "LinkedIn",
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0F2B4A] via-[#143A63] to-[#1B4A7A] text-[#D7EAF5]">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 animate-pulse rounded-full bg-[#1FA8A5]/10 blur-3xl" />
      <div
        className="pointer-events-none absolute -bottom-40 -right-20 h-80 w-80 animate-pulse rounded-full bg-[#1B6FA8]/10 blur-3xl"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 h-64 w-64 animate-pulse rounded-full bg-[#F28C28]/5 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      {/* Decorative Top Border */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#1FA8A5] to-transparent opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/vaga-footer.png"
                alt="Vaga Hospital"
                width={340}
                height={90}
                priority
                className="h-auto w-55 object-contain brightness-110"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#D7EAF5]/80">
              A 50+ bedded super speciality hospital in Lucknow, bringing
              compassionate care and advanced medicine together for every step
              of your treatment journey.
            </p>

            {/* Social Media Links */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#D7EAF5]/50">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex h-10 w-10 items-center justify-center rounded-full border border-[#D7EAF5]/20 text-[#D7EAF5]/60 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon
                        size={16}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#D7EAF5]/70 backdrop-blur-sm">
                <Shield size={12} className="text-[#1FA8A5]" />
                NABH Accredited
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#D7EAF5]/70 backdrop-blur-sm">
                <Award size={12} className="text-[#F28C28]" />
                Excellence Award
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="relative inline-block text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 rounded-full bg-[#1FA8A5]" />
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-[#D7EAF5]/70 transition-all duration-300 hover:translate-x-1 hover:text-[#1FA8A5]"
                  >
                    <span className="h-px w-0 bg-[#1FA8A5] transition-all duration-300 group-hover:w-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h3 className="relative inline-block text-sm font-semibold uppercase tracking-wide text-white">
              Specialities
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 rounded-full bg-[#1FA8A5]" />
            </h3>
            <ul className="mt-5 space-y-3">
              {specialities.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-[#D7EAF5]/70 transition-all duration-300 hover:translate-x-1 hover:text-[#1FA8A5]"
                  >
                    <span className="h-px w-0 bg-[#1FA8A5] transition-all duration-300 group-hover:w-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="relative inline-block text-sm font-semibold uppercase tracking-wide text-white">
              Get in Touch
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 rounded-full bg-[#1FA8A5]" />
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="group flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#1FA8A5] transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm leading-relaxed text-[#D7EAF5]/70 transition-colors group-hover:text-[#D7EAF5]/90">
                  KS-14 Aliganj Housing Scheme, Sitapur Road, Lucknow – 226020
                </span>
              </li>
              <li className="group flex gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#1FA8A5] transition-transform duration-300 group-hover:scale-110"
                />
                <Link
                  href="tel:+916391000030"
                  className="text-sm text-[#D7EAF5]/70 transition-all duration-300 hover:translate-x-1 hover:text-[#1FA8A5]"
                >
                  6391 000030, 31
                </Link>
              </li>
              <li className="group flex gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#1FA8A5] transition-transform duration-300 group-hover:scale-110"
                />
                <Link
                  href="mailto:vagahealthcare@gmail.com"
                  className="text-sm text-[#D7EAF5]/70 transition-all duration-300 hover:translate-x-1 hover:text-[#1FA8A5]"
                >
                  vagahealthcare@gmail.com
                </Link>
              </li>
            </ul>

            <Link
              href="/appointment"
              className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1B6FA8] to-[#1FA8A5] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1B6FA8]/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#1FA8A5]/40"
            >
              <Heart
                size={16}
                className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              Book an Appointment
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#D7EAF5]/10 pt-6 text-sm text-[#D7EAF5]/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Vaga Hospital. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1">
            Website developed &amp; designed by{" "}
            <span className="text-[#D7EAF5]/60 transition-colors hover:text-[#1FA8A5]">
              RankUp Technologies
            </span>
          </p>
        </div>
      </div>

      {/* Back to top */}
      <Link
        href="#top"
        className="group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#1B6FA8] to-[#1FA8A5] text-white shadow-xl shadow-[#1B6FA8]/30 transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_40px_rgba(27,111,168,0.4)]"
        aria-label="Back to top"
      >
        <ArrowUp
          size={20}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
      </Link>
    </footer>
  );
}