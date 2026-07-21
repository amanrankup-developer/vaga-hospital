// components/home/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import ScaleIn from "@/components/animations/ScaleIn";
import Floating from "@/components/animations/Floating";

const headingWords = [
  "Compassionate",
  "care,",
  "advanced",
  "medicine,",
  "and",
  "a",
  "calmer",
  "experience.",
];

const badges = [
  "NABH Standards",
  "24/7 Emergency Support",
  "Trusted by Families",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF6FD] via-white to-white pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 lg:pt-28 lg:pb-16 xl:pt-32 xl:pb-20">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#1B6FA8]/20 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#1FA8A5]/20 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* LEFT CONTENT */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <FadeUp className="inline-block">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1B6FA8] sm:text-xs md:text-sm">
                50+ Bedded Super Speciality Hospital in Lucknow
              </p>
            </FadeUp>

            <h1 className="font-extrabold tracking-tight text-[#143A63] leading-[1.1] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[58px] 2xl:text-[64px]">
              {headingWords.map((word, index) => {
                // Highlight "advanced" and "calmer" with secondary color
                const isHighlight = word === "advanced" || word === "calmer";
                return (
                  <FadeUp
                    key={word}
                    delay={index * 100}
                    className={`mr-2 inline-block ${isHighlight ? 'text-[#1FA8A5]' : 'text-[#143A63]'}`}
                  >
                    {word}
                  </FadeUp>
                );
              })}
            </h1>

            <FadeUp delay={700}>
              <p className="mx-auto mt-5 max-w-xl text-[14px] leading-7 text-[#4B5563] sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
                Welcome to Vaga Hospital, where experienced clinicians, advanced
                diagnostics, and compassionate care come together to provide
                exceptional healthcare for every patient.
              </p>
            </FadeUp>

            <FadeUp delay={850}>
              <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#D8EAF5] bg-white px-3 py-1.5 text-xs font-medium text-[#143A63] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-4 sm:py-2 sm:text-sm"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#1FA8A5] sm:size-4"
                    />
                    {badge}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={1000}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/appointment"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1B6FA8] w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1B6FA8]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#155C8C] hover:shadow-xl"
                >
                  Book Appointment
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/doctors"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#D8EAF5] bg-white w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-[#1B6FA8] transition-all duration-300 hover:-translate-y-1 hover:border-[#1B6FA8] hover:text-[#1B6FA8] hover:shadow-md"
                >
                  Meet Our Doctors
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT IMAGE */}
          <ScaleIn delay={300}>
            <Floating speed="slow">
              <div className="relative overflow-visible mx-auto w-full max-w-[900px] lg:max-w-none lg:w-[115%] xl:w-[120%]">
                <div className="relative aspect-[4/3] rounded-[36px] shadow-[0_35px_80px_rgba(20,58,99,0.18)]">
                  {/* Image Wrapper */}
                  <div className="relative h-full w-full overflow-hidden rounded-[36px]">
                    <Image
                      src="/images/vaga-hero.png"
                      alt="Vaga Hospital"
                      fill
                      priority
                      sizes="(max-width:768px)100vw,(max-width:1024px)70vw,55vw"
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Top Card */}
                  <div className="absolute -top-6 left-4 sm:-top-7 sm:left-5 md:-top-8 md:left-6 lg:-top-10 lg:left-7 z-30 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/30 px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 shadow-2xl animate-[float_4s_ease-in-out_infinite] max-w-[180px] sm:max-w-[200px] md:max-w-[220px]">
                    <h4 className="text-sm sm:text-base font-bold text-[#143A63]">
                      Same-day Appointments
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4B5563]">
                      Fast scheduling & expert care
                    </p>
                  </div>

                  {/* Bottom Card */}
                  <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 sm:translate-x-1/5 sm:translate-y-1/5 md:translate-x-[15%] md:translate-y-[15%] lg:translate-x-[10%] lg:translate-y-[10%] z-30 rounded-2xl bg-[#143A63]/90 backdrop-blur-xl border border-white/20 px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 shadow-[0_20px_40px_rgba(0,0,0,0.15)] animate-[float_5s_ease-in-out_infinite] min-w-[100px] sm:min-w-[120px] md:min-w-[140px]">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
                      98%
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-white/90 text-center">
                      Patient Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </Floating>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}