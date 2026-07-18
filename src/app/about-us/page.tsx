// app/about/page.tsx
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";
import ScaleUp from "@/components/animations/ScaleUp";
import {
  Award,
  Users,
  Building2,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

const memberships = [
  "Life membership in All India Ophthalmology Society",
  "Life membership in Delhi Ophthalmology Society",
  "Life membership in UP Ophthalmology Society",
  "Board member of SR Charitable Trust",
  "Awarded for doing maximum Cataract Surgery 2018–2019 by Honorable U.P Governor Shrimati Anandibai Patel",
];

const stats = [
  { icon: Building2, value: "50+", label: "Bedded Facility" },
  { icon: Stethoscope, value: "12+", label: "Years of Expertise" },
  { icon: Users, value: "10,000+", label: "Patients Treated" },
  { icon: Award, value: "5+", label: "Awards & Recognitions" },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <FadeUp>
        <section className="bg-linear-to-b from-sky-50 to-white px-6 py-16 text-center lg:px-10">
          <p className="text-sm font-semibold text-sky-600">About Vaga Hospital</p>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Leadership rooted in expertise. Care rooted in compassion.
          </h1>
        </section>
      </FadeUp>

      {/* Director Profile */}
      <section className="mx-auto max-w-300 px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Photo */}
          <FadeLeft>
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-4/5 overflow-hidden rounded-4xl shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
                <Image
                  src="/images/pallavi.jpg"
                  alt="Dr. Pallavi Singh, Director"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 flex w-[calc(100%-2.5rem)] -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white">
                  <Stethoscope size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    12+ Years Experience
                  </p>
                  <p className="text-xs text-slate-500">
                    Ophthalmology &amp; Phaco Surgery
                  </p>
                </div>
              </div>
            </div>
          </FadeLeft>

          {/* Info */}
          <FadeRight>
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                About Director
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
                Dr. Pallavi Singh
              </h2>
              <p className="mt-2 text-sm font-medium text-slate-500">
                MBBS, MS, FRCS (UK), IGEHRC (Lko)
              </p>

              <p className="mt-6 leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-900">Experience — </span>
                12 years of experience in the ophthalmology department, with
                specialized expertise in Phaco (cataract) surgery using the
                latest technology.
              </p>

              {/* Memberships & Awards */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-slate-950">
                  Memberships &amp; Awards
                </h3>
                <ul className="mt-5 space-y-3">
                  {memberships.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl p-3 transition-all duration-300 hover:translate-x-2 hover:bg-sky-50"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-sky-600"
                      />
                      <span className="text-sm leading-relaxed text-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeRight>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-slate-950 py-12">
        <div className="mx-auto grid max-w-300 grid-cols-2 gap-8 px-6 sm:grid-cols-4 lg:px-10">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <ScaleUp key={label} delay={index * 0.15}>
              <div className="text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-sky-600/10 text-sky-400 transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <Icon size={20} />
                </span>
                <p className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{label}</p>
              </div>
            </ScaleUp>
          ))}
        </div>
      </section>

      {/* About Us */}
      <FadeUp>
        <section className="mx-auto max-w-300 px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                About Us
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
                Quality healthcare, built on trust and expertise.
              </h2>

              <p className="mt-6 leading-relaxed text-slate-600">
                VAGA Superspeciality Hospital has extensive experience in the
                healthcare sector and is known for providing quality
                healthcare and valuable experience to our patients. Our
                healthcare offerings are supported by a team of compassionate
                and dedicated medical professionals with rich knowledge and
                experience across their domains.
              </p>

              <p className="mt-4 leading-relaxed text-slate-600">
                We provide quality and affordable healthcare to everyone,
                encompassing the entire healthcare ecosystem — hospitals,
                pharmacies, and primary care &amp; diagnostic clinics. The
                cornerstones of Vaga&apos;s legacy are its unstinting focus on
                clinical excellence, affordable costs, technology, and
                forward-looking research &amp; academics.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Clinical Excellence",
                  "Affordable Care",
                  "Advanced Technology",
                  "Research-Driven",
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
            </div>

            {/* Hospital image */}
            <div className="relative aspect-3/4 overflow-hidden rounded-4xl shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
              <Image
                src="/images/hospital.png"
                alt="Vaga Superspeciality Hospital building"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </section>
      </FadeUp>
    </main>
  );
}