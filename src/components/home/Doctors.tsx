"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { doctors } from "@/data/doctors";
import FadeUp from "@/components/animations/FadeUp";

export function Doctors() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-20 lg:px-8">
      {/* Background Glow */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <FadeUp>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
              Doctors
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Meet clinicians who combine expertise with empathy.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our experienced specialists are committed to delivering
              compassionate, evidence-based healthcare with the latest medical
              technology.
            </p>
          </div>
        </FadeUp>

        {/* Doctor Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <FadeUp key={doctor.name} delay={index * 150}>
              <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-sky-300 hover:shadow-[0_25px_70px_-20px_rgba(14,165,233,0.25)]">
                {/* Image */}
                <div className="relative h-[420px] overflow-hidden rounded-t-3xl">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width:768px)100vw,33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Rating */}
                  <div className="absolute left-5 top-5 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-800 shadow">
                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {doctor.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">
                    {doctor.name}
                  </h3>

                  <p className="mt-2 text-sky-600 font-medium">
                    {doctor.specialty}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Dedicated to providing personalized treatment using advanced
                    medical technology and compassionate care.
                  </p>

                  {/* Experience Badge */}
                  <div className="mt-6 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                    {doctor.experience} Experience
                  </div>

                  {/* Button */}
                  <Link
                    href="/appointment"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-all duration-300 group-hover:translate-x-1"
                  >
                    Book Appointment
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
