
"use client";

import { ArrowRight } from "lucide-react";
import { departments } from "@/data/departments";
import FadeUp from "@/components/animations/FadeUp";

export function Departments() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFF] px-6 py-20 lg:px-8">
      {/* Background Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#1B6FA8]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#1FA8A5]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <FadeUp>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1B6FA8]">
              Departments
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#143A63] sm:text-4xl">
              Specialized care for every stage of life.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4B5563]">
              Our multidisciplinary departments provide advanced diagnosis,
              treatment, and compassionate care with experienced specialists.
            </p>
          </div>
        </FadeUp>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {departments.map((department, index) => (
            <FadeUp key={department.title} delay={index * 120}>
              <div className="group relative overflow-hidden rounded-3xl border border-[#D8EAF5] bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#1B6FA8] hover:shadow-[0_25px_70px_-20px_rgba(27,111,168,0.30)]">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EAF6FD] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex rounded-2xl bg-[#EAF6FD] p-4 text-4xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {department.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold text-[#143A63] transition-colors duration-300 group-hover:text-[#1B6FA8]">
                    {department.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-[#4B5563]">
                    {department.description}
                  </p>

                  {/* Stats */}
                  <div className="mt-6 inline-flex rounded-full bg-[#EAF6FD] px-4 py-2 text-sm font-semibold text-[#1B6FA8]">
                    {department.stats}
                  </div>

                  {/* Learn More */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#1B6FA8] opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}