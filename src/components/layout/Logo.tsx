// components/layout/Logo.tsx
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0">
      <Image
        src="/images/vaga-logo.webp"
        alt="Vaga Hospital"
        width={230}
        height={70}
        priority
        className="h-12 w-auto"
      />

      <div className="hidden lg:block border-l border-slate-200 pl-3">
        <p className="text-sm font-semibold leading-none text-slate-800">
          Multi Speciality Hospital
        </p>
        <p className="mt-1 text-[11px] text-slate-500">
          Compassion • Care • Excellence
        </p>
      </div>
    </Link>
  );
}