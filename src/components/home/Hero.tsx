// components/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-16">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold text-sky-600">
              50+ Bedded Super Speciality Hospital in Lucknow
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Compassionate care, advanced medicine, and a calmer experience.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              Welcome to Vaga Hospital, where experienced clinicians, smart
              diagnostics, and patient-first care come together for every step
              of your treatment journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "NABH Standards",
                "24/7 Emergency Support",
                "Trusted by Families",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <CheckCircle2 size={16} className="text-sky-600" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-700"
              >
                Book Appointment
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-7 py-3.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
              >
                Meet Our Doctors
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[720px] lg:mr-0">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/vaga-hero.png"
                alt="Vaga Hospital doctors, diagnostics, and patient care collage"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}