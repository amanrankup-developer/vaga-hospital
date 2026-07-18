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
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-16 lg:py-24">
      {/* Background Blur */}
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <FadeUp>
              <p className="mb-5 text-sm font-semibold tracking-wide text-sky-600 uppercase">
                50+ Bedded Super Speciality Hospital in Lucknow
              </p>
            </FadeUp>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
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
              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                Welcome to Vaga Hospital, where experienced clinicians,
                advanced diagnostics, and compassionate care come together to
                provide exceptional healthcare for every patient.
              </p>
            </FadeUp>

            <FadeUp delay={850}>
              <div className="mt-8 flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-sky-600"
                    />
                    {badge}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={1000}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/appointment"
                  className="group inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-xl"
                >
                  Book Appointment

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/doctors"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:text-sky-700 hover:shadow-md"
                >
                  Meet Our Doctors

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT IMAGE */}
          <ScaleIn delay={300}>
            <Floating speed="normal">
              <div className="group relative mx-auto aspect-[3/2] w-full max-w-[720px] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/vaga-hero.png"
                  alt="Vaga Hospital"
                  fill
                  priority
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Floating>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}