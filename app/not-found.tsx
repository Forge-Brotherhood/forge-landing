"use client";

import { Flame, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white flex flex-col">
      {/* Header */}
      <header className="px-4 py-6 flex items-center justify-between max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-3">
          <Flame className="h-7 w-7 text-amber-400" />
          <span className="font-bold text-lg">FORGE</span>
        </Link>
      </header>

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-transparent bg-gradient-to-b from-amber-400 to-red-600 bg-clip-text mb-8">
            404
          </h1>
          
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          
          <p className="text-zinc-300 text-lg mb-8 max-w-md mx-auto">
            This page doesn&apos;t exist.
          </p>

          <Button 
            asChild
            className="h-14 px-8 font-semibold bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/40 transition-all duration-300 rounded-xl"
          >
            <Link href="/">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}