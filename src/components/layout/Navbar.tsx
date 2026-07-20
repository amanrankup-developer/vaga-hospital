"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Calendar, Users, Heart, Stethoscope } from "lucide-react";
import Logo from "./Logo";
import { NavDropdown } from "../NavDropdown";
import { MobileNav } from "../MobileNav";
import { SearchButton } from "../SearchButton";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const showNavbar = useScrollDirection();

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Bar */}
      <div className="border-b border-slate-100 bg-slate-50/80">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-[11px] text-slate-600 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="hidden sm:inline">📍</span> Lucknow, Uttar Pradesh
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="hidden sm:inline">🕒</span> Open 24 Hours
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-700 hidden xs:inline-block">
              Emergency: <span className="text-red-600">6391 000030, 31</span>
            </span>
            <Link
              href="/contact-us"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200/70 text-slate-600 transition-all hover:bg-sky-600 hover:text-white"
              aria-label="Contact Us"
            >
              <Phone size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-slate-100">
        <div className="mx-auto flex h-16 items-center gap-3 px-4 sm:px-6 lg:h-[72px] lg:gap-6 lg:px-8 xl:px-10">
          {/* Logo */}
          <div className="shrink-0 max-w-[130px] sm:max-w-[150px] lg:max-w-[180px]">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-1 whitespace-nowrap lg:flex xl:gap-2">
            <Link
              href="/about-us"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
            >
              About Us
            </Link>
            <NavDropdown label="Specialities" />
            <NavDropdown label="Doctors" />
            <NavDropdown label="Patient Care" />
            <Link
              href="/facilities"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
            >
              Facilities
            </Link>
            <NavDropdown label="Resources" />
            <Link
              href="/contact-us"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="ml-auto flex items-center gap-1 shrink-0 sm:gap-2">
            <SearchButton />

            <Link
              href="/appointment"
              className="hidden items-center gap-1.5 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 hover:shadow-xl lg:flex"
            >
              <Calendar size={15} />
              Book Now
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 transition hover:border-sky-400 hover:bg-sky-50 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </header>
  );
}