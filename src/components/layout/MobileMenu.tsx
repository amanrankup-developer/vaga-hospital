"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation } from "@/constants/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-full z-40 border-t border-slate-200 bg-white/95 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3.5 first:mt-0"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block text-sm font-semibold text-slate-700"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <p className="text-sm font-semibold text-slate-700">
                    {item.label}
                  </p>
                )}

                {item.children?.length ? (
                  <div className="mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block text-sm text-slate-600 transition hover:text-sky-700"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
