// components/NavDropdown.tsx
"use client";

import Link from "next/link";
import { ChevronDown, Stethoscope } from "lucide-react";
import { specialities, doctors, patientCare, resources } from "@/data/navigation";

type DropdownKey = "Specialities" | "Doctors" | "Patient Care" | "Resources";

export function NavDropdown({ label }: { label: DropdownKey }) {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 py-2 text-sm font-medium text-slate-700 transition hover:text-sky-600">
        {label}
        <ChevronDown
          size={14}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>

      {/* Invisible bridge so hover doesn't drop between button and panel */}
      <div className="absolute left-1/2 top-full h-3 w-full -translate-x-1/2" />

      <div
        className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-2 opacity-0
          transition-all duration-200 ease-out
          group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
      >
        {label === "Specialities" && <SpecialitiesPanel />}
        {label === "Doctors" && <DoctorsPanel />}
        {label === "Patient Care" && <SimplePanel items={patientCare} />}
        {label === "Resources" && <SimplePanel items={resources} />}
      </div>
    </div>
  );
}

function SpecialitiesPanel() {
  return (
    <div className="grid w-[640px] grid-cols-4 gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
      {specialities.map((group) => (
        <div key={group.group}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-sky-600">
            {group.group}
          </p>
          <ul className="space-y-2.5">
            {group.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-600 transition hover:text-sky-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function DoctorsPanel() {
  return (
    <div className="grid w-[420px] grid-cols-1 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
      {doctors.map((doc) => (
        <Link
          key={doc.href}
          href={doc.href}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-sky-50"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <Stethoscope size={18} />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">{doc.name}</p>
            <p className="text-xs text-slate-500">{doc.role}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function SimplePanel({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block rounded-xl px-3 py-2.5 text-sm text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}