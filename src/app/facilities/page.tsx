// app/gallery/page.tsx
import { GalleryGrid } from "@/components/FacilitiesGrid";

export default function GalleryPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-sky-50 to-white px-6 py-16 text-center lg:px-10">
        <p className="text-sm font-semibold text-sky-600">Inside Vaga Hospital</p>
        <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          A closer look at our facilities.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
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