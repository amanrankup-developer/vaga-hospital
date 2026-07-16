import { NavItem } from "@/types/navigation";

export const navigation: NavItem[] = [
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/about/story" },
      { label: "Leadership", href: "/leadership" },
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Specialties",
    children: [
      { label: "Cardiology", href: "/departments/cardiology" },
      { label: "Neurology", href: "/departments/neurology" },
      { label: "Orthopaedics", href: "/departments/orthopaedics" },
      { label: "Gynecology", href: "/departments/gynecology" },
      { label: "Pediatrics", href: "/departments/pediatrics" },
      { label: "Dermatology", href: "/departments/dermatology" },
      { label: "View All", href: "/departments" },
    ],
  },
  {
    label: "Doctors",
    children: [
      { label: "Find a Doctor", href: "/doctors" },
      { label: "Our Specialists", href: "/doctors/specialists" },
      { label: "Book Consultation", href: "/appointment" },
    ],
  },
  {
    label: "Patient Care",
    children: [
      { label: "Book Appointment", href: "/appointment" },
      { label: "Health Packages", href: "/packages" },
      { label: "Insurance", href: "/insurance" },
      { label: "Emergency Care", href: "/emergency" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blogs", href: "/blogs" },
      { label: "Health Tips", href: "/health-tips" },
      { label: "Patient Stories", href: "/stories" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
