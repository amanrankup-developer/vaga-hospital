"use client";

import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import FadeUp from "@/components/animations/FadeUp";

export function Services() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <FadeUp>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
              Quick Services
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Care that feels effortless from the first touchpoint.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our comprehensive healthcare services are designed to provide
              compassionate, timely, and expert medical care for every patient.
            </p>
          </div>
        </FadeUp>

        {/* Services Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <FadeUp key={service.title} delay={index * 120}>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-sky-300 hover:shadow-[0_25px_70px_-20px_rgba(14,165,233,0.35)]">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex rounded-2xl bg-gradient-to-br ${service.accent} p-4 text-3xl text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div className="mt-6 flex items-center gap-2 font-medium text-sky-600 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                    <span className="text-sm">Learn More</span>

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