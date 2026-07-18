// components/GalleryGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

const images = [
  { src: "/images/gallery/opd.webp", title: "OPD Area", tag: "Outpatient" },
  { src: "/images/gallery/icu.webp", title: "ICU", tag: "Critical Care" },
  { src: "/images/gallery/ward-1.webp", title: "General Ward", tag: "Recovery" },
  { src: "/images/gallery/ward-2.webp", title: "General Ward", tag: "Recovery" },
  { src: "/images/gallery/nicu-1.webp", title: "NICU", tag: "Neonatal" },
  { src: "/images/gallery/nicu-2.webp", title: "NICU", tag: "Neonatal" },
  { src: "/images/gallery/dialysis.webp", title: "Dialysis Machine", tag: "Equipment" },
  { src: "/images/gallery/emergency.webp", title: "Emergency Ward", tag: "Emergency" },
  { src: "/images/gallery/private-1.webp", title: "Private Ward", tag: "Recovery" },
  { src: "/images/gallery/private-2.webp", title: "Private Ward", tag: "Recovery" },
];

const filters = ["All", "Outpatient", "Critical Care", "Recovery", "Neonatal", "Equipment", "Emergency"];

export function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "All" ? images : images.filter((img) => img.tag === active);

  function openAt(src: string) {
    const idx = filtered.findIndex((img) => img.src === src);
    setLightboxIndex(idx);
  }

  function next() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }

  function prev() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }

  return (
    <div>
      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              active === f
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                : "border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry-ish grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((img, i) => (
          <button
            key={img.src}
            onClick={() => openAt(img.src)}
            className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl"
            style={{
              animation: `fadeInUp 0.5s ease-out ${i * 0.05}s both`,
            }}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/0 to-slate-950/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-semibold text-white">{img.title}</p>
              <p className="text-xs text-slate-300">{img.tag}</p>
            </div>

            <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Expand size={14} />
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
          style={{ animation: "fadeIn 0.2s ease-out" }}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className="relative aspect-4/5 w-full max-w-lg overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "scaleIn 0.25s ease-out" }}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/90 to-transparent p-6">
              <p className="text-base font-semibold text-white">
                {filtered[lightboxIndex].title}
              </p>
              <p className="text-sm text-slate-300">{filtered[lightboxIndex].tag}</p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </div>
  );
}