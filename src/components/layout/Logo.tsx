// components/Logo.tsx
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3">
      <Image
        src="/images/vaga-logo.webp"
        alt="Vaga Hospital"
        width={230}
        height={70}
        priority
        className="h-10 w-auto"
      />

      <div className="hidden border-l border-slate-200 pl-3 xl:block">
        <p className="text-sm font-semibold text-slate-800">
          Multi Speciality Hospital
        </p>
        <p className="text-xs text-slate-500">
          Compassion • Care • Excellence
        </p>
      </div>
    </Link>
  );
}