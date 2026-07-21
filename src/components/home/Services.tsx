// components/home/Services.tsx
"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import FadeUp from "@/components/animations/FadeUp";
import ScaleIn from "@/components/animations/ScaleIn";
import Floating from "@/components/animations/Floating";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#EAF6FD]/30 to-white px-6 py-20 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#1B6FA8]/10 blur-3xl animate-pulse" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#1FA8A5]/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#143A63]/5 blur-3xl animate-pulse delay-2000" />
        
        {/* Floating Dots Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-[#1B6FA8]" />
          <div className="absolute right-[15%] top-[30%] h-3 w-3 rounded-full bg-[#1FA8A5]" />
          <div className="absolute left-[20%] bottom-[25%] h-2 w-2 rounded-full bg-[#143A63]" />
          <div className="absolute right-[25%] bottom-[35%] h-3 w-3 rounded-full bg-[#1B6FA8]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center">
          <FadeUp>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-[#EAF6FD] px-4 py-1.5 backdrop-blur-sm mb-4"
            >
              <Sparkles size={14} className="text-[#1B6FA8]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1B6FA8]">
                Our Services
              </span>
            </motion.div>
          </FadeUp>

          <FadeUp delay={100}>
            <h2 className="text-3xl font-bold text-[#143A63] sm:text-4xl">
              Care That Feels 
              <span className="relative ml-2 inline-block text-[#1FA8A5]">
                EffortLess
              </span>
              <br />
              <span className="text-3xl font-bold text-[#143A63] sm:text-4xl">
                From The First Touchpoint.
              </span>
            </h2>
          </FadeUp>

          <FadeUp delay={200}>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#4B5563]">
              Our comprehensive healthcare services are designed to provide
              compassionate, timely, and expert medical care for every patient.
            </p>
          </FadeUp>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const gradients = [
              "from-[#1B6FA8] to-[#1FA8A5]",
              "from-[#143A63] to-[#1B6FA8]",
              "from-[#1FA8A5] to-[#1B6FA8]",
              "from-[#F28C28] to-[#1B6FA8]",
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <ScaleIn key={service.title} delay={index * 150}>
                <Floating speed="slow" amplitude={4}>
                  <motion.div
                    className="group relative h-full overflow-hidden rounded-3xl border border-[#D8EAF5] bg-white/80 p-7 shadow-lg backdrop-blur-sm transition-all duration-700 hover:-translate-y-4 hover:border-[#1B6FA8] hover:shadow-2xl hover:shadow-[#1B6FA8]/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Animated Gradient Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#EAF6FD]/50 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      initial={false}
                      animate={{ 
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    />

                    {/* Animated Border Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#1B6FA8]/0 via-[#1B6FA8]/0 to-[#1B6FA8]/0 p-[1px]"
                      whileHover={{
                        background: "linear-gradient(to right, #1B6FA8, #1FA8A5, #1B6FA8)",
                        backgroundSize: "200% 100%",
                      }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <div className="h-full w-full rounded-3xl bg-white/90" />
                    </motion.div>

                    {/* Service Number Badge */}
                    <div className={`absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r ${gradient} text-xs font-bold text-white shadow-lg`}>
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className={`inline-flex rounded-2xl bg-gradient-to-br ${gradient} p-4 text-4xl text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {service.icon}
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="mt-5 text-xl font-semibold text-[#143A63] transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#1B6FA8] group-hover:to-[#1FA8A5] group-hover:bg-clip-text"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        {service.title}
                      </motion.h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-7 text-[#4B5563]">
                        {service.description}
                      </p>

                      {/* Features */}
                      {service.features && (
                        <div className="mt-3 space-y-1.5">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-2 text-xs text-[#4B5563]"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Learn More */}
                      <motion.div
                        className="mt-5 flex items-center gap-2 font-medium text-[#1B6FA8] transition-all duration-500 group-hover:translate-x-2"
                        whileHover={{ gap: "0.75rem" }}
                      >
                        <span className="text-sm font-semibold">Learn More</span>
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </motion.div>
                    </div>

                    {/* Animated Corner Accent */}
                    <div className="absolute -bottom-2 -right-2 h-16 w-16 opacity-0 transition-all duration-700 group-hover:opacity-100">
                      <div className="absolute bottom-0 right-0 h-8 w-8 rounded-tl-3xl bg-gradient-to-tl from-[#1B6FA8]/20 to-transparent" />
                    </div>
                  </motion.div>
                </Floating>
              </ScaleIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}