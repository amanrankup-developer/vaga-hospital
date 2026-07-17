// app/contact/page.tsx
import { ContactForm } from "../../components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50 to-white px-6 py-16 text-center lg:px-10">
        <p className="text-sm font-semibold text-sky-600">Get in Touch</p>
        <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          We&apos;re here to help, anytime you need us.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
          Reach out for appointments, emergencies, or general queries — our team
          responds quickly and with care.
        </p>
      </section>

      {/* Info cards */}
      <section className="mx-auto -mt-4 max-w-[1200px] px-6 pb-4 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <Phone size={20} />
            </span>
            <p className="mt-4 text-sm font-semibold text-slate-900">Call Us</p>
            <a
              href="tel:+916391000030"
              className="mt-1 block text-sm text-slate-600 hover:text-sky-600"
            >
              6391 000030
            </a>
            <a
              href="tel:+916391000031"
              className="block text-sm text-slate-600 hover:text-sky-600"
            >
              6391 000031
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <Mail size={20} />
            </span>
            <p className="mt-4 text-sm font-semibold text-slate-900">
              Email Us
            </p>
            <a
              href="mailto:hr.vagahospital2019@gmail.com"
              className="mt-1 block break-all text-sm text-slate-600 hover:text-sky-600"
            >
              hr.vagahospital2019@gmail.com
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <MapPin size={20} />
            </span>
            <p className="mt-4 text-sm font-semibold text-slate-900">
              Visit Us
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              KS-14 Aliganj Housing Scheme, Sitapur Road, Lucknow – 226020
            </p>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: form */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-slate-950">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Right: map + hours */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
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

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <Clock size={18} />
                </span>
                <p className="text-sm font-semibold text-slate-900">
                  Open 24 Hours — Emergency care always available
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=VAGA+Hospital+Multispeciality+Hospital+KS-14+Sitapur+Road+Aliganj+Lucknow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
