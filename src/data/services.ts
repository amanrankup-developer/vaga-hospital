// data/services.ts
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    title: "24/7 Emergency Care",
    description:
      "Immediate medical support with rapid response, critical intervention, and compassionate bedside care.",
    icon: "🚑",
    accent: "from-cyan-500 to-sky-600",
    features: ["24/7 Availability", "Rapid Response", "Critical Care"],
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600"
  },
  {
    title: "Expert Consultations",
    description:
      "Meet specialist physicians across cardiology, ophthalmology, neurology, and more.",
    icon: "🩺",
    accent: "from-violet-500 to-fuchsia-600",
    features: ["Multiple Specialties", "Second Opinions", "Telemedicine"],
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600"
  },
  {
    title: "Advanced Diagnostics",
    description:
      "High-precision imaging and lab services designed for faster answers and better treatment plans.",
    icon: "🧪",
    accent: "from-emerald-500 to-teal-600",
    features: ["MRI & CT Scan", "Lab Tests", "Ultrasound"],
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    title: "Patient-Centered Recovery",
    description:
      "Recovery programs tailored to comfort, evidence-based care, and long-term wellbeing.",
    icon: "🌿",
    accent: "from-amber-500 to-orange-600",
    features: ["Physical Therapy", "Wellness Programs", "Ongoing Support"],
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600"
  },
];