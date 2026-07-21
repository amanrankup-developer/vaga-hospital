// types/service.ts
export interface Service {
  title: string;
  description: string;
  icon: string;
  accent: string;
  features?: string[];
  iconBg?: string;
  iconColor?: string;
}