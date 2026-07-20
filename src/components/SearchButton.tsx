
"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { Search, X, Stethoscope, UserRound, FileText, HeartPulse } from "lucide-react";
import { specialities, doctors, patientCare, resources } from "@/data/navigation";

type Result = {
  label: string;
  href: string;
  category: "Speciality" | "Doctor" | "Patient Care" | "Resource";
  sub?: string;
};

// Flatten all searchable data into one list, once
const allResults: Result[] = [
  ...specialities.flatMap((group) =>
    group.items.map((item) => ({
      label: item.label,
      href: item.href,
      category: "Speciality" as const,
      sub: group.group,
    }))
  ),
  ...doctors.map((doc) => ({
    label: doc.name,
    href: doc.href,
    category: "Doctor" as const,
    sub: doc.role,
  })),
  ...patientCare.map((item) => ({
    label: item.label,
    href: item.href,
    category: "Patient Care" as const,
  })),
  ...resources.map((item) => ({
    label: item.label,
    href: item.href,
    category: "Resource" as const,
  })),
];

const categoryIcon = {
  Speciality: Stethoscope,
  Doctor: UserRound,
  "Patient Care": HeartPulse,
  Resource: FileText,
};

export function SearchButton() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  function closeAndReset() {
    setOpen(false);
    setQuery("");
  }

  const results = useMemo(() => {
    if (query.trim().length === 0) return [];
    const q = query.toLowerCase();
    return allResults
      .filter(
        (r) =>
          r.label.toLowerCase().includes(q) ||
          r.sub?.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open search"
        className="group flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-all duration-300 hover:bg-sky-50 hover:text-sky-600"
      >
        <Search
          size={19}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-100 flex items-start justify-center bg-slate-950/40 pt-28 backdrop-blur-sm"
          style={{ animation: "fadeIn 0.2s ease-out" }}
          onClick={closeAndReset}
        >
          <div
            className="w-full max-w-xl px-4"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "slideDown 0.25s ease-out" }}
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
                <Search size={20} className="shrink-0 text-slate-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search doctors, departments, services..."
                  className="w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-400"
                />
                <button
                  onClick={closeAndReset}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Live results */}
              {query.trim().length > 0 && (
                <div className="max-h-80 overflow-y-auto p-2">
                  {results.length > 0 ? (
                    results.map((r) => {
                      const Icon = categoryIcon[r.category];
                      return (
                        <Link
                          key={r.href}
                          href={r.href}
                          onClick={closeAndReset}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-sky-50"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <Icon size={16} />
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-slate-900">
                              {r.label}
                            </p>
                            <p className="text-xs text-slate-500">
                              {r.category}
                              {r.sub ? ` · ${r.sub}` : ""}
                            </p>
                          </div>
                        </Link>
                      );
                    })
                  ) : (
                    <p className="px-3 py-6 text-center text-sm text-slate-400">
                      No results for &ldquo;{query}&rdquo;
                    </p>
                  )}
                </div>
              )}
            </div>

            <p className="mt-3 text-center text-xs text-slate-400">
              Press{" "}
              <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono">
                Esc
              </kbd>{" "}
              to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}