import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { navigation } from "@/constants/navigation";

export function NavMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-10 xl:gap-12">
      {navigation.map((item) => (
        <div
          key={item.label}
          className="group relative flex items-center"
        >
          {/* Menu Item */}
          {item.href ? (
            <Link
              href={item.href}
              className="relative flex items-center gap-1 py-8 text-[15px] font-semibold text-slate-700 transition-colors duration-300 hover:text-sky-600"
            >
              {item.label}

              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-sky-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ) : (
            <button
              type="button"
              className="relative flex items-center gap-1 py-8 text-[15px] font-semibold text-slate-700 transition-colors duration-300 hover:text-sky-600"
            >
              {item.label}

              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />

              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-sky-600 transition-all duration-300 group-hover:w-full" />
            </button>
          )}

          {/* Dropdown */}
          {item.children?.length ? (
            <div
              className="
                invisible
                absolute
                left-1/2
                top-full
                z-50
                w-72
                -translate-x-1/2
                pt-4
                opacity-0
                translate-y-2
                transition-all
                duration-300
                origin-top
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200/80
                  bg-white
                  p-3
                  shadow-[0_30px_60px_rgba(15,23,42,0.12)]
                  backdrop-blur-xl
                "
              >
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="
                      group/item
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-slate-600
                      transition-all
                      duration-300
                      hover:bg-sky-50
                      hover:text-sky-700
                    "
                  >
                    <span>{child.label}</span>

                    <span
                      className="
                        translate-x-0
                        opacity-0
                        transition-all
                        duration-300
                        group-hover/item:translate-x-1
                        group-hover/item:opacity-100
                      "
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </nav>
  );
}