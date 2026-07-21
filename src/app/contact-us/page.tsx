// app/contact/page.tsx
import { ContactForm } from "../../components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";

export default function ContactPage() {
  return (
    <main className="bg-[#F8FCFF] pt-20 md:pt-24">
      {/* Header */}
      <FadeUp>
        <section className="bg-gradient-to-b from-[#EAF6FD] to-white px-6 py-16 text-center lg:px-10">
          <p className="text-sm font-semibold text-[#1B6FA8]">Get in Touch</p>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold tracking-tight text-[#143A63] sm:text-5xl">
            We&apos;re here to help, anytime you need us.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#4B5563]">
            Reach out for appointments, emergencies, or general queries — our
            team responds quickly and with care.
          </p>
        </section>
      </FadeUp>

      {/* Info cards */}
      <section className="mx-auto -mt-4 max-w-[1200px] px-6 pb-4 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-3">
          <FadeUp delay={0}>
            <div className="group rounded-2xl border border-[#D8EAF5] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#1B6FA8] hover:shadow-[0_25px_70px_-20px_rgba(27,111,168,0.25)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF6FD] text-[#1FA8A5] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Phone size={20} />
              </span>
              <p className="mt-4 text-sm font-semibold text-[#143A63]">
                Call Us
              </p>
              
              <a
                href="tel:+916391000030"
                className="mt-1 block text-sm text-[#4B5563] hover:text-[#1B6FA8]"
              >
                6391 000030
              </a>
              <a
                href="tel:+916391000031"
                className="block text-sm text-[#4B5563] hover:text-[#1B6FA8]"
              >
                6391 000031
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={120}>
            <div className="group rounded-2xl border border-[#D8EAF5] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#1B6FA8] hover:shadow-[0_25px_70px_-20px_rgba(27,111,168,0.25)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF6FD] text-[#1FA8A5] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Mail size={20} />
              </span>
              <p className="mt-4 text-sm font-semibold text-[#143A63]">
                Email Us
              </p>
              <a
                href="mailto:hr.vagahospital2019@gmail.com"
                className="mt-1 block break-all text-sm text-[#4B5563] hover:text-[#1B6FA8]"
              >
                hr.vagahospital2019@gmail.com
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={240}>
            <div className="group rounded-2xl border border-[#D8EAF5] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#1B6FA8] hover:shadow-[0_25px_70px_-20px_rgba(27,111,168,0.25)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF6FD] text-[#1FA8A5] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <MapPin size={20} />
              </span>
              <p className="mt-4 text-sm font-semibold text-[#143A63]">
                Visit Us
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">
                KS-14 Aliganj Housing Scheme, Sitapur Road, Lucknow – 226020
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Form + Map */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: form */}
          <FadeLeft>
            <div className="rounded-3xl border border-[#D8EAF5] bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-2xl font-bold text-[#143A63]">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-[#4B5563]">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </FadeLeft>

          {/* Right: map + hours */}
          <FadeRight>
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-3xl border border-[#D8EAF5] shadow-sm transition-shadow duration-500 hover:shadow-lg">
                <iframe
                  title="Vaga Hospital location"
                  src="https://www.google.com/maps?q=VAGA+Hospital+Multispeciality+Hospital+KS-14+Sitapur+Road+Aliganj+Lucknow&output=embed"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="group rounded-2xl border border-[#D8EAF5] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#1B6FA8] hover:shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF6FD] text-[#1FA8A5] transition-transform duration-300 group-hover:scale-110">
                    <Clock size={18} />
                  </span>
                  <p className="text-sm font-semibold text-[#143A63]">
                    Open 24 Hours — Emergency care always available
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=VAGA+Hospital+Multispeciality+Hospital+KS-14+Sitapur+Road+Aliganj+Lucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B6FA8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1B6FA8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155C8C] hover:shadow-xl hover:shadow-[#1B6FA8]/30"
              >
                Get Directions
              </a>
            </div>
          </FadeRight>
        </div>
      </section>
    </main>
  );
}