
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { specialities, doctors, patientCare, resources } from "@/data/navigation";

export function MobileNav({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  function toggle(section: string) {
    setOpenSection(openSection === section ? null : section);
  }

  return (
    <div className="border-t border-slate-100 bg-white px-6 py-4 xl:hidden">
      <nav className="flex flex-col gap-1">
        <Link href="/about-us" onClick={onClose} className="py-2.5 text-sm font-medium text-slate-700">
          About Us
        </Link>

        {/* Specialities */}
        <button
          onClick={() => toggle("specialities")}
          className="flex items-center justify-between py-2.5 text-sm font-medium text-slate-700"
        >
          Specialities
          <ChevronDown
            size={16}
            className={`transition-transform ${openSection === "specialities" ? "rotate-180" : ""}`}
          />
        </button>
        {openSection === "specialities" && (
          <div className="ml-3 flex flex-col gap-1 border-l border-slate-100 pl-4 pb-2">
            {specialities.flatMap((g) => g.items).map((item) => (
              <Link key={item.href} href={item.href} onClick={onClose} className="py-1.5 text-sm text-slate-600">
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {/* Doctors */}
        <button
          onClick={() => toggle("doctors")}
          className="flex items-center justify-between py-2.5 text-sm font-medium text-slate-700"
        >
          Doctors
          <ChevronDown
            size={16}
            className={`transition-transform ${openSection === "doctors" ? "rotate-180" : ""}`}
          />
        </button>
        {openSection === "doctors" && (
          <div className="ml-3 flex flex-col gap-1 border-l border-slate-100 pl-4 pb-2">
            {doctors.map((doc) => (
              <Link key={doc.href} href={doc.href} onClick={onClose} className="py-1.5 text-sm text-slate-600">
                {doc.name}
              </Link>
            ))}
          </div>
        )}

        {/* Patient Care */}
        <button
          onClick={() => toggle("patientCare")}
          className="flex items-center justify-between py-2.5 text-sm font-medium text-slate-700"
        >
          Patient Care
          <ChevronDown
            size={16}
            className={`transition-transform ${openSection === "patientCare" ? "rotate-180" : ""}`}
          />
        </button>
        {openSection === "patientCare" && (
          <div className="ml-3 flex flex-col gap-1 border-l border-slate-100 pl-4 pb-2">
            {patientCare.map((item) => (
              <Link key={item.href} href={item.href} onClick={onClose} className="py-1.5 text-sm text-slate-600">
                {item.label}
              </Link>
            ))}
          </div>
        )}

        <Link href="/facilities" onClick={onClose} className="py-2.5 text-sm font-medium text-slate-700">
          Facilities
        </Link>

        {/* Resources */}
        <button
          onClick={() => toggle("resources")}
          className="flex items-center justify-between py-2.5 text-sm font-medium text-slate-700"
        >
          Resources
          <ChevronDown
            size={16}
            className={`transition-transform ${openSection === "resources" ? "rotate-180" : ""}`}
          />
        </button>
        {openSection === "resources" && (
          <div className="ml-3 flex flex-col gap-1 border-l border-slate-100 pl-4 pb-2">
            {resources.map((item) => (
              <Link key={item.href} href={item.href} onClick={onClose} className="py-1.5 text-sm text-slate-600">
                {item.label}
              </Link>
            ))}
          </div>
        )}

        <Link href="/contact-us" onClick={onClose} className="py-2.5 text-sm font-medium text-slate-700">
          Contact Us
        </Link>

        <Link
          href="/appointment"
          onClick={onClose}
          className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white"
        >
          Book Appointment
        </Link>
      </nav>
    </div>
  );
}