// components/home/Testimonials.tsx
"use client";

import { Quote, Star } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFF] px-6 py-20 lg:px-8">
      {/* Background Blur */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#1B6FA8]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#1FA8A5]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <FadeUp>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1B6FA8]">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#143A63] sm:text-4xl">
              Patients choose us for the experience, not just the treatment.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4B5563]">
              The trust of our patients is our greatest achievement. Here are
              some of the experiences shared by families who chose Vaga
              Hospital.
            </p>
          </div>
        </FadeUp>

        {/* Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeUp key={`${item.author}-${index}`} delay={index * 150}>
              <div className="group relative overflow-hidden rounded-3xl border border-[#D8EAF5] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#1B6FA8] hover:shadow-[0_25px_70px_-20px_rgba(27,111,168,0.25)]">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EAF6FD] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF6FD] text-[#1FA8A5] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Quote size={28} />
                  </div>

                  {/* Stars */}
                  <div className="mb-5 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        className="text-[#F28C28]"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="leading-8 italic text-[#4B5563]">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-[#D8EAF5]" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1B6FA8] to-[#1FA8A5] text-lg font-bold text-white shadow-md">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#143A63] transition-colors duration-300 group-hover:text-[#1B6FA8]">
                        {item.author}
                      </h4>
                      <p className="text-sm text-[#4B5563]">{item.role}</p>
                    </div>
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