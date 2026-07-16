export interface Service {
  title: string;
  description: string;
  icon: string;
  accent: string;
}

export interface Department {
  title: string;
  description: string;
  icon: string;
  stats: string;
}

export interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  rating: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
