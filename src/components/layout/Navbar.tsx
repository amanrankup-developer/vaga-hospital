// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Search, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Specialities", href: "/specialities", dropdown: true },
  { label: "Doctors", href: "/doctors", dropdown: true },
  { label: "Patient Care", href: "/patient-care", dropdown: true },
  { label: "Resources", href: "/resources", dropdown: true },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-[0_14px_45px_-24px_rgba(15,23,42,0.22)] backdrop-blur-xl">
      {/* Top Bar */}
      <div className="mx-auto hidden h-10 max-w-[1500px] items-center justify-between px-6 text-xs text-slate-600 lg:flex lg:px-10">
        <div className="flex items-center gap-6 whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5">
            📍 Lucknow, Uttar Pradesh
          </span>
          <span className="inline-flex items-center gap-1.5">
            🕒 Open 24 Hours
          </span>
        </div>
        <div className="flex items-center gap-6 whitespace-nowrap">
          <span className="font-semibold text-slate-900">
            Emergency: 6391000030,31
          </span>
          <Link href="/contact" className="transition hover:text-sky-600">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-t border-slate-100">
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center gap-4 px-6 lg:px-10">
          {/* Logo (your component, sized down to fit this row) */}
          <div className="shrink-0 [&_img]:h-10 [&_img]:w-auto">
            <Logo />
          </div>

          {/* Nav links */}
          <nav className="hidden flex-1 items-center justify-center gap-5 whitespace-nowrap xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-sky-600"
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="ml-auto flex shrink-0 items-center gap-3">
            <div className="hidden h-10 w-[200px] items-center rounded-full border border-slate-200 bg-slate-50 px-3.5 2xl:w-[260px] xl:flex">
              <Search size={16} className="shrink-0 text-slate-400" />
              <input
                placeholder="Search doctors, departments..."
                className="ml-2 w-full min-w-0 bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>

            <Link
              href="tel:+919999999999"
              className="hidden items-center gap-1.5 whitespace-nowrap rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 xl:flex"
            >
              <Phone size={15} />
              Emergency
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 xl:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 xl:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-2 text-sm font-medium text-slate-700"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/appointment"
              className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}