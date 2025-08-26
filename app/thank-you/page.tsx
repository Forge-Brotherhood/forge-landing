"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Flame, ArrowRight, Users, Bell, Heart, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(12,12,14,1),rgba(5,5,6,1))]" />
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(251,191,36,0.25),transparent)]" />
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6 md:py-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            <Flame className="h-6 w-6 sm:h-7 sm:w-7 text-amber-400" />
            <span className="font-bold tracking-tight text-base sm:text-lg">FORGE</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-32">
          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 mb-6">
              <CheckCircle className="w-10 h-10 text-amber-400" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Welcome to the Brotherhood
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto">
              You&apos;re in. We&apos;re building something real here, and you&apos;re part of it from the ground up.
            </p>
          </motion.div>

          {/* What's Next Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 mb-12"
          >
            <Card className="bg-zinc-950/70 border-zinc-800/80 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-white">Here&apos;s What Happens Next:</h2>
                
                <div className="space-y-6">
                  <NextStep
                    icon={<Bell className="w-5 h-5" />}
                    title="Check Your Inbox"
                    description="We just sent you a welcome email. Make sure to whitelist us so you don&apos;t miss updates."
                  />
                  
                  <NextStep
                    icon={<Users className="w-5 h-5" />}
                    title="Early Access Launch"
                    description="You&apos;ll be among the first to know when we open the doors. We&apos;re launching with a small, committed group of founding members."
                  />
                  
                  <NextStep
                    icon={<Heart className="w-5 h-5" />}
                    title="Shape the Future"
                    description="As an early member, your feedback will directly influence how we build Forge. This is your brotherhood too."
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-zinc-400 mb-6">
              While you wait, dive deeper into what we&apos;re building:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/manifesto">
                <Button className="w-full sm:w-auto h-14 px-6 sm:px-8 font-semibold bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 active:from-amber-600 active:to-amber-500 shadow-lg transition-all duration-300 rounded-xl flex items-center justify-center gap-2 sm:gap-3 text-base">
                  Read Our Manifesto
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto h-14 px-6 sm:px-8 font-semibold border-2 border-zinc-700 hover:border-amber-500/70 bg-zinc-900/60 hover:bg-amber-500/10 text-zinc-300 hover:text-amber-400 transition-all duration-300 rounded-xl flex items-center justify-center gap-2 sm:gap-3 text-base backdrop-blur-sm group"
                >
                  <Home className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-zinc-800/60"
          >
            <blockquote className="text-center">
              <p className="text-lg text-zinc-400 italic">
                &ldquo;As iron sharpens iron, so one man sharpens another.&rdquo;
              </p>
              <cite className="text-sm text-zinc-500 mt-2 block">— Proverbs 27:17</cite>
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const NextStep = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-zinc-700/60 flex items-center justify-center">
          <div className="text-amber-400">{icon}</div>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
