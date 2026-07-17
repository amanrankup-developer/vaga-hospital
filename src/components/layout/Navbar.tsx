// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Search, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NavDropdown } from "./NavDropdown";
import { MobileNav } from "./MobileNav";

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
            Emergency: 6391 000030, 31
          </span>
          <Link href="/contact-us" className="transition hover:text-sky-600">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-t border-slate-100">
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center gap-4 px-6 lg:px-10">
          {/* Logo */}
          <div className="shrink-0 [&_img]:h-10 [&_img]:w-auto">
            <Logo />
          </div>

          {/* Desktop nav */}
          <nav className="hidden flex-1 items-center justify-center gap-6 whitespace-nowrap xl:flex">
            <Link
              href="/about-us"
              className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
            >
              About Us
            </Link>

            <NavDropdown label="Specialities" />
            <NavDropdown label="Doctors" />
            <NavDropdown label="Patient Care" />

            <Link
              href="/facilities"
              className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
            >
              Facilities
            </Link>

            <NavDropdown label="Resources" />

            <Link
              href="/contact-us"
              className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right actions */}
          <div className="ml-auto flex shrink-0 items-center gap-3">
            <div className="hidden h-10 w-[150px] items-center rounded-full border border-slate-200 bg-slate-50 px-3.5 2xl:w-[200px] xl:flex">
              <Search size={16} className="shrink-0 text-slate-400" />
              <input
                placeholder="Search..."
                className="ml-2 w-full min-w-0 bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>

            <Link
              href="tel:+916391000030"
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

      {/* Mobile menu */}
      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </header>
  );
}