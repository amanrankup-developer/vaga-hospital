// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NavDropdown } from "../NavDropdown";
import { MobileNav } from "../MobileNav";
import { SearchButton } from "../SearchButton";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-[0_14px_45px_-24px_rgba(15,23,42,0.22)] backdrop-blur-xl">
      {/* Top Bar */}
      <div className="mx-auto hidden h-11 max-w-375 items-center justify-between px-6 text-sm text-slate-600 lg:flex lg:px-10">
        <div className="flex items-center gap-5 whitespace-nowrap">
          <span className="inline-flex items-center gap-2">
            📍 Lucknow, Uttar Pradesh
          </span>
          <span className="inline-flex items-center gap-2">
            🕒 Open 24 Hours
          </span>
        </div>

        <div className="flex items-center gap-4 whitespace-nowrap">
          <span className="font-semibold text-slate-900">
            Emergency: 6391 000030, 31
          </span>

          <Link
            href="/contact-us"
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:scale-110 hover:border-sky-500 hover:bg-sky-600 hover:text-white hover:shadow-lg hover:shadow-sky-600/30"
            aria-label="Contact Us"
          >
            <Phone
              size={16}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-t border-slate-100">
        <div className="mx-auto flex h-19 max-w-375 items-center gap-4 px-6 lg:px-10">
          {/* Logo */}
          <div className="shrink-0 [&_img]:h-10 [&_img]:w-auto">
            <Logo />
          </div>

          {/* Desktop nav */}
          <nav className="hidden flex-1 items-center justify-center gap-4 whitespace-nowrap xl:flex">
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
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <SearchButton />

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