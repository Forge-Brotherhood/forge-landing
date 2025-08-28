"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Check if user prefers light mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    setIsDark(!mediaQuery.matches);
    
    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => setIsDark(!e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const logoSrc = isDark ? "/forge-logo-dark.svg" : "/forge-logo-light.svg";

  return (
    <header className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6 md:py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {mounted ? (
            <Image 
              src={logoSrc}
              alt="Forge"
              width={80}
              height={32}
              className="h-6 sm:h-7 w-auto"
              priority
            />
          ) : (
            <div className="h-6 sm:h-7 w-20 animate-pulse bg-zinc-800 rounded" />
          )}
        </Link>
        <div className="bg-gradient-to-r from-amber-500/20 to-red-500/20 border border-amber-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm">
          <span className="text-amber-400 text-xs sm:text-sm font-semibold">BETA</span>
        </div>
      </div>
    </header>
  );
}