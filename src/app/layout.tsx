import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaga Hospital",
  description: "Modern Hospital Website",
   icons: {
    icon: "/icons/favicon.png",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}