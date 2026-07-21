"use client";

import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return showNavbar;
}