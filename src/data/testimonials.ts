// data/testimonials.ts
export interface Testimonial {
  author: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    author: "Nina Patel",
    role: "Post-surgery patient",
    quote:
      "From the moment I walked in, the staff was genuinely compassionate. My surgery went smoothly and the follow-up care has been excellent.",
  },
  {
    author: "Marcus Lee",
    role: "Emergency care patient",
    quote:
      "The emergency team responded quickly and kept my family informed every step of the way. The whole experience felt seamless and reassuring.",
  },
  {
    author: "Sofia Alvarez",
    role: "Wellness patient",
    quote:
      "Clean facilities, attentive doctors, and a genuinely warm environment. Every visit here feels calm, premium, and modern.",
  },
];