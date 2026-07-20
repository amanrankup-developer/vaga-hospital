// components/NavDropdown.tsx
"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ChevronDown,
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Brain,
  Wind,
  Activity,
  Bone,
  Baby,
  Eye,
  ScanEye,
  Users,
  ShieldPlus,
  Sparkles,
  FileText,
  Newspaper,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import { specialities, doctors, patientCare, resources } from "@/data/navigation";

type DropdownKey = "Specialities" | "Doctors" | "Patient Care" | "Resources";

const specialityIcons: Record<string, { icon: LucideIcon; color: string }> = {
  "Cardiology": { icon: HeartPulse, color: "text-red-600 bg-red-50" },
  "Neuro Surgery": { icon: Brain, color: "text-purple-600 bg-purple-50" },
  "Pulmonary Medicine": { icon: Wind, color: "text-sky-600 bg-sky-50" },
  "Gastroenterology": { icon: Activity, color: "text-amber-600 bg-amber-50" },
  "Laparoscopic Surgery": { icon: ShieldPlus, color: "text-emerald-600 bg-emerald-50" },
  "Orthopedics": { icon: Bone, color: "text-orange-600 bg-orange-50" },
  "Pediatrics Surgery": { icon: Baby, color: "text-pink-600 bg-pink-50" },
  "Cataract": { icon: Eye, color: "text-indigo-600 bg-indigo-50" },
  "Refractive Surgery": { icon: ScanEye, color: "text-indigo-600 bg-indigo-50" },
  "Obstetrics & Gynecology": { icon: Users, color: "text-rose-600 bg-rose-50" },
  "Critical Care": { icon: Activity, color: "text-red-600 bg-red-50" },
  "Infertility Clinic": { icon: Sparkles, color: "text-violet-600 bg-violet-50" },
};

const patientCareIcons: Record<string, LucideIcon> = {
  "NICU & Critical Care": Baby,
  "Empanalments": ShieldPlus,
  "Physiotherapy": Activity,
};

const resourceIcons: Record<string, LucideIcon> = {
  "Blogs": FileText,
  "Press Release": Newspaper,
  "Career": Briefcase,
};

export function NavDropdown({ label }: { label: DropdownKey }) {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 py-2 text-sm font-medium text-slate-700 transition hover:text-sky-600">
        {label}
        <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
      </button>

      <div className="absolute left-1/2 top-full h-3 w-full -translate-x-1/2" />

      <div className="invisible absolute left-1/2 top-full z-[60] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {label === "Specialities" && <SpecialitiesPanel />}
        {label === "Doctors" && <DoctorsPanel />}
        {label === "Patient Care" && <PatientCarePanel />}
        {label === "Resources" && <ResourcesPanel />}
      </div>
    </div>
  );
}

function SpecialitiesPanel() {
  return (
    <div className="relative w-[1100px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_35px_80px_rgba(15,23,42,0.25)]">
      {/* Tint overlay — sits on top of solid white, doesn't affect opacity of base */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50 via-transparent to-transparent" />

      <div className="relative">
        {/* Main grid */}
        <div className="grid grid-cols-4 gap-10 p-8">
          {specialities.map((group) => (
            <div key={group.group} className="min-w-0">
              <p className="mb-4 whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-sky-600">
                {group.group}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const meta = specialityIcons[item.label] ?? { icon: Stethoscope, color: "text-slate-600 bg-slate-100" };
                  const Icon = meta.icon;
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group/item flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm text-slate-700 transition hover:bg-slate-100"
                      >
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 ${meta.color} transition-transform duration-200 group-hover/item:scale-110`}>
                          <Icon size={16} />
                        </span>
                        <span className="truncate font-medium group-hover/item:text-sky-600">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom action row */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-white px-8 py-5">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <ShieldCheck size={14} className="text-sky-600" />
              NABH Accredited
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <ShieldCheck size={14} className="text-sky-600" />
              Ayushman Bharat Empanelled
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/specialities"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600"
            >
              View All Specialities
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-700"
            >
              Book Appointment
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function DoctorsPanel() {
  return (
    <div className="relative w-105 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_35px_80px_rgba(15,23,42,0.25)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50 via-transparent to-transparent" />

      <div className="relative p-3">
        {doctors.map((doc) => (
          <Link
            key={doc.href}
            href={doc.href}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-slate-100"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-sky-50 text-sky-600">
              <Stethoscope size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">{doc.name}</p>
              <p className="text-xs text-slate-500">{doc.role}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="relative border-t border-slate-200 bg-white px-5 py-4">
        <Link
          href="/doctors"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:underline"
        >
          View All Doctors
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

function PatientCarePanel() {
  return (
    <div className="relative w-64 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_35px_80px_rgba(15,23,42,0.25)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50 via-transparent to-transparent" />

      <div className="relative p-3">
        {patientCare.map((item) => {
          const Icon = patientCareIcons[item.label] ?? HeartPulse;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 transition hover:bg-slate-100"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-sky-50 text-sky-600 transition-transform duration-200 group-hover/item:scale-110">
                <Icon size={16} />
              </span>
              <span className="font-medium group-hover/item:text-sky-600">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function ResourcesPanel() {
  return (
    <div className="relative w-56 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_35px_80px_rgba(15,23,42,0.25)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50 via-transparent to-transparent" />

      <div className="relative p-3">
        {resources.map((item) => {
          const Icon = resourceIcons[item.label] ?? FileText;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 transition hover:bg-slate-100"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-sky-50 text-sky-600 transition-transform duration-200 group-hover/item:scale-110">
                <Icon size={16} />
              </span>
              <span className="font-medium group-hover/item:text-sky-600">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}