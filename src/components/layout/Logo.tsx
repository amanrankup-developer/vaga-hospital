// components/layout/Logo.tsx
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
      {/* Logo */}
      <Image
        src="/images/vaga-logo.webp"
        alt="Vaga Hospital"
        width={230}
        height={70}
        priority
        className="h-9 w-auto shrink-0 sm:h-10 md:h-11 lg:h-12"
        style={{ width: 'auto', height: 'auto' }}
      />

      {/* Hospital Name */}
      <div className="hidden border-l border-slate-200 pl-3 lg:block">
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