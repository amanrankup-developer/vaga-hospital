// app/gallery/page.tsx
import { GalleryGrid } from "@/components/FacilitiesGrid";

export default function GalleryPage() {
  return (
    <main className="bg-[#F8FCFF] pt-20 md:pt-24">
      <section className="bg-gradient-to-b from-[#EAF6FD] to-white px-6 py-16 text-center lg:px-10">
        <p className="text-sm font-semibold text-[#1B6FA8]">Inside Vaga Hospital</p>
        <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold tracking-tight text-[#143A63] sm:text-5xl">
          A closer look at our facilities.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#4B5563]">
          From critical care to comfortable recovery — take a tour through
          our wards, equipment, and patient spaces.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-10">
        <GalleryGrid />
      </section>
    </main>
  );
}