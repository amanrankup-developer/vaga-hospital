// components/NavDropdown.tsx
"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ChevronDown,
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
} from "lucide-react";
import { specialities, doctors, patientCare, resources } from "@/data/navigation";

type DropdownKey = "Specialities" | "Doctors" | "Patient Care" | "Resources";

const specialityIcons: Record<string, { icon: LucideIcon; color: string }> = {
  "Cardiology": { icon: HeartPulse, color: "bg-red-50 text-red-600" },
  "Neuro Surgery": { icon: Brain, color: "bg-purple-50 text-purple-600" },
  "Pulmonary Medicine": { icon: Wind, color: "bg-sky-50 text-sky-600" },
  "Gastroenterology": { icon: Activity, color: "bg-amber-50 text-amber-600" },
  "Laparoscopic Surgery": { icon: ShieldPlus, color: "bg-emerald-50 text-emerald-600" },
  "Orthopedics": { icon: Bone, color: "bg-orange-50 text-orange-600" },
  "Pediatrics Surgery": { icon: Baby, color: "bg-pink-50 text-pink-600" },
  "Cataract": { icon: Eye, color: "bg-indigo-50 text-indigo-600" },
  "Refractive Surgery": { icon: ScanEye, color: "bg-indigo-50 text-indigo-600" },
  "Obstetrics & Gynecology": { icon: Users, color: "bg-rose-50 text-rose-600" },
  "Critical Care": { icon: Activity, color: "bg-red-50 text-red-600" },
  "Infertility Clinic": { icon: Sparkles, color: "bg-violet-50 text-violet-600" },
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

      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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
    <div className="w-190 rounded-2xl border border-slate-200 bg-gradient-to-b from-sky-50/60 to-white p-6 shadow-2xl">
      <div className="grid grid-cols-4 gap-8">
        {specialities.map((group) => (
          <div key={group.group} className="min-w-0">
            <p className="mb-3 whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-sky-600">
              {group.group}
            </p>
            <ul className="space-y-1.5">
              {group.items.map((item) => {
                const meta = specialityIcons[item.label] ?? { icon: Stethoscope, color: "bg-slate-100 text-slate-600" };
                const Icon = meta.icon;
                return (
                  <li key={item.label}>
                    <Link href={item.href} className="group/item flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-slate-600 transition hover:bg-white hover:shadow-sm">
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${meta.color} transition-transform duration-200 group-hover/item:scale-110`}>
                        <Icon size={14} />
                      </span>
                      <span className="truncate group-hover/item:text-sky-600">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function DoctorsPanel() {
  return (
    <div className="w-105 rounded-2xl border border-slate-200 bg-gradient-to-b from-sky-50/60 to-white p-3 shadow-2xl">
      {doctors.map((doc) => (
        <Link key={doc.href} href={doc.href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-white hover:shadow-sm">
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

function PatientCarePanel() {
  return (
    <div className="w-64 rounded-2xl border border-slate-200 bg-gradient-to-b from-sky-50/60 to-white p-3 shadow-2xl">
      {patientCare.map((item) => {
        const Icon = patientCareIcons[item.label] ?? HeartPulse;
        return (
          <Link key={item.href} href={item.href} className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 transition hover:bg-white hover:shadow-sm">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 transition-transform duration-200 group-hover/item:scale-110">
              <Icon size={15} />
            </span>
            <span className="group-hover/item:text-sky-600">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

function ResourcesPanel() {
  return (
    <div className="w-56 rounded-2xl border border-slate-200 bg-gradient-to-b from-sky-50/60 to-white p-3 shadow-2xl">
      {resources.map((item) => {
        const Icon = resourceIcons[item.label] ?? FileText;
        return (
          <Link key={item.href} href={item.href} className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 transition hover:bg-white hover:shadow-sm">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 transition-transform duration-200 group-hover/item:scale-110">
              <Icon size={15} />
            </span>
            <span className="group-hover/item:text-sky-600">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}