// components/home/Faq.tsx
import Accordion from "@/components/common/Accordion";
import FadeUp from "@/components/animations/FadeUp";

const faqs = [
  {
    question: "Is Vaga Hospital open 24 hours?",
    answer: "Yes, we provide 24/7 emergency care and are always open for critical cases.",
  },
  {
    question: "Do you accept Ayushman Bharat / CGHS?",
    answer: "Yes, cataract and several other treatments are covered cashless under Ayushman Bharat (PM-JAY) and CGHS schemes.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can call us at 6391 000030, use the Book Appointment button on our website, or visit us directly at our Sitapur Road location.",
  },
  {
    question: "What specialities does Vaga Hospital offer?",
    answer: "We offer Cardiology, Neuro Surgery, Ophthalmology, Orthopedics, Gastroenterology, Pediatrics, and more — see our full Specialities menu.",
  },
];

export function Faq() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-10 xl:px-12">
      {/* Background Blur — matches Testimonials */}
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1480px]">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
              Got Questions?
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A few quick answers before you visit — call us anytime if
              something isn&apos;t covered here.
            </p>
          </div>
        </FadeUp>

        <div className="relative z-10 mx-auto mt-12 max-w-7xl space-y-3">
          {faqs.map((faq, index) => (
            <FadeUp key={faq.question} delay={index * 100}>
              <Accordion items={[faq]} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}