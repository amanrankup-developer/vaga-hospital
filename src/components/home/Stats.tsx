"use client";

import CountUp from "react-countup";
import {
  Clock3,
  Users,
  Star,
  Building2,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

const stats = [
  {
    value: 24,
    suffix: "/7",
    label: "Emergency Response",
    icon: Clock3,
  },
  {
    value: 300,
    suffix: "+",
    label: "Medical Specialists",
    icon: Users,
  },
  {
    value: 4.9,
    suffix: "/5",
    decimals: 1,
    label: "Patient Rating",
    icon: Star,
  },
  {
    value: 15,
    suffix: "+",
    label: "Specialty Centers",
    icon: Building2,
  },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-20">
      {/* Background Blur */}
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left Content */}
          <FadeUp>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
                Hospital Stats
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                Advanced care delivered with calm precision.
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
                Every number reflects our commitment to excellence,
                compassionate care, and world-class healthcare services.
              </p>
            </div>
          </FadeUp>

          {/* Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <FadeUp key={stat.label} delay={index * 120}>
                  <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_25px_70px_-20px_rgba(14,165,233,0.25)]">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon size={28} />
                      </div>

                      {/* Animated Number */}
                      <h3 className="mt-6 text-4xl font-bold text-slate-950">
                        <CountUp
                          end={stat.value}
                          duration={2}
                          decimals={stat.decimals ?? 0}
                        />
                        {stat.suffix}
                      </h3>

                      {/* Label */}
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}