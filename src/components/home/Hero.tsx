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
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 lg:pt-28 lg:pb-16 xl:pt-32 xl:pb-20">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl sm:h-96 sm:w-96" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          
          {/* LEFT CONTENT */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <FadeUp className="inline-block">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-sky-600 sm:text-xs md:text-sm">
                50+ Bedded Super Speciality Hospital in Lucknow
              </p>
            </FadeUp>

            <h1 className="font-extrabold tracking-tight text-slate-950 leading-[1.1] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[58px] 2xl:text-[64px]">
              {headingWords.map((word, index) => (
                <FadeUp
                  key={word}
                  delay={index * 100}
                  className="mr-2 inline-block"
                >
                  {word}
                </FadeUp>
              ))}
            </h1>

            <FadeUp delay={700}>
              <p className="mx-auto mt-5 max-w-xl text-[14px] leading-7 text-slate-600 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
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
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-4 sm:py-2 sm:text-sm"
                  >
                    <CheckCircle2 size={14} className="text-sky-600 sm:size-4" />
                    {badge}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={1000}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/appointment"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-xl"
                >
                  Book Appointment
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/doctors"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:text-sky-700 hover:shadow-md"
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
            <Floating speed="normal">
              <div className="group relative mx-auto w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square sm:aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-2xl sm:rounded-[1.75rem] lg:rounded-[2rem]">
                <Image
                  src="/images/vaga-hero.png"
                  alt="Vaga Hospital"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-contain transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </Floating>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}