// components/common/Accordion.tsx
"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/cn";

interface AccordionItem {
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className={cn(
              "group overflow-hidden rounded-2xl border bg-slate-50 transition-all duration-500",
              isOpen
                ? "border-sky-300 bg-white shadow-[0_25px_70px_-20px_rgba(14,165,233,0.25)]"
                : "border-slate-200 hover:border-sky-300 hover:bg-white hover:shadow-sm"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center gap-3 px-5 py-3.5 text-left"
            >
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-500",
                  isOpen
                    ? "scale-110 rotate-6 bg-sky-600 text-white"
                    : "bg-sky-100 text-sky-600 group-hover:scale-110 group-hover:rotate-6"
                )}
              >
                <HelpCircle size={15} />
              </span>

              <span className="flex-1 text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">
                {item.question}
              </span>

              <ChevronDown
                size={17}
                className={cn(
                  "shrink-0 text-slate-400 transition-transform duration-300",
                  isOpen && "rotate-180 text-sky-600"
                )}
              />
            </button>

            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="pl-15 pr-5 pb-3.5 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}