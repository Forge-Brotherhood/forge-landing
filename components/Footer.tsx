"use client";

import React, { useEffect, useState } from "react";
import { Mail, FileText, Shield, Scale } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
    <footer className="relative z-10 bg-zinc-950/60 border-t border-zinc-900/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              {mounted ? (
                <Image 
                  src={logoSrc}
                  alt="Forge"
                  width={80}
                  height={32}
                  className="h-6 w-auto opacity-70"
                  priority
                />
              ) : (
                <div className="h-6 w-20 animate-pulse bg-zinc-800 rounded" />
              )}
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              A brotherhood engine that transforms isolation into belonging through the power of prayer.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-zinc-400 text-xs uppercase tracking-wide">
              Quick Links
            </h3>
            <div className="space-y-3">
              <Link 
                href="/manifesto"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm group"
              >
                <FileText className="h-3 w-3 opacity-60" />
                Our Manifesto
              </Link>
              <Link 
                href="/support"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm group"
              >
                <Mail className="h-3 w-3 opacity-60" />
                Support & FAQ
              </Link>
              <Link 
                href="/privacy"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm group"
              >
                <Shield className="h-3 w-3 opacity-60" />
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm group"
              >
                <Scale className="h-3 w-3 opacity-60" />
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-medium text-zinc-400 text-xs uppercase tracking-wide">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-zinc-500 text-xs mb-1">General Support</p>
                <a 
                  href="mailto:support@forge-app.io"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors text-xs"
                >
                  support@forge-app.io
                </a>
              </div>
              <div>
                <p className="text-zinc-500 text-xs mb-1">Partnerships</p>
                <a 
                  href="mailto:partners@forge-app.io"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors text-xs"
                >
                  partners@forge-app.io
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-900/30">
          <div className="text-center">
            <p className="text-zinc-600 text-xs">
              © {new Date().getFullYear()} Forge Brotherhood. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}