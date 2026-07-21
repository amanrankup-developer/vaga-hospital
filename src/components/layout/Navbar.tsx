// components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
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
      {/* ========================= TOP BAR ========================= */}
      <div className="hidden lg:block border-b border-slate-100/60 bg-white">
        <div className="mx-auto flex h-12 max-w-screen-2xl items-center justify-between px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          {/* Left */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 whitespace-nowrap text-[15px] text-slate-600">
              <span className="text-base">📍</span>

              <span className="font-medium">Lucknow, Uttar Pradesh</span>
            </div>

            <div className="flex items-center gap-2 whitespace-nowrap text-[15px] text-slate-600">
              <span className="text-base">🕒</span>

              <span className="font-medium">Open 24 Hours</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <p className="whitespace-nowrap text-[15px] font-semibold text-slate-900">
              Emergency :<span className="ml-1 font-bold">6391 000030, 31</span>
            </p>

            <Link
              href="/contact-us"
              aria-label="Contact Us"
             className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-sky-500 hover:bg-sky-600 hover:text-white hover:shadow-lg hover:shadow-sky-600/25">
              <Phone size={18} />
            </Link>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="border-b border-slate-100">
       <div
  className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-3 px-3 sm:px-4 lg:h-18 lg:px-8 xl:px-10">
          {/* Logo */}
          <div className="min-w-0 flex-1">
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
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <SearchButton />

            <Link
              href="tel:+916391000030"
              className="hidden items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 lg:flex"
            >
              <Phone size={15} />
              Emergency
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
