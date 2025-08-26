"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Users, Heart, Target } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white relative overflow-hidden">
      {/* Forge-inspired background with particle embers */}
      <BackgroundForge />

      {/* Nav */}
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6 md:py-8 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Flame className="h-6 w-6 sm:h-7 sm:w-7 text-amber-400" />
            <span className="font-bold tracking-tight text-base sm:text-lg">FORGE</span>
          </div>
          <div className="bg-gradient-to-r from-amber-500/20 to-red-500/20 border border-amber-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm">
            <span className="text-amber-400 text-xs sm:text-sm font-semibold">BETA</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-28 md:pb-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Forge Brotherhood
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 sm:mt-8 text-zinc-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Enough with performative connection. Forge invites you into something deeper — showing up for one another, shoulder to shoulder, with prayer at the center.
          </motion.p>

          {/* Email capture */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 sm:mt-10 md:mt-12 max-w-2xl mx-auto px-4 sm:px-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-red-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-30"></div>
              <Card className="relative bg-zinc-950/90 border border-zinc-800/60 backdrop-blur-xl shadow-2xl shadow-amber-500/10 rounded-3xl overflow-hidden">
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <form
                    className="flex flex-col sm:flex-row gap-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const data = new FormData(e.currentTarget as HTMLFormElement);
                      const email = data.get("email");
                      alert(`Thanks! We'll be in touch at ${email}.`);
                    }}
                  >
                    <div className="flex-1 relative">
                      <Input
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email address"
                        className="h-12 sm:h-14 bg-zinc-900/60 border-zinc-700/60 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all duration-300 text-sm sm:text-base px-4 sm:px-5 rounded-xl backdrop-blur-sm"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="h-12 sm:h-14 px-6 sm:px-8 font-semibold bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/40 transition-all duration-300 rounded-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base whitespace-nowrap"
                    >
                      Join
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </form>
                  <p className="mt-6 text-sm text-zinc-400 text-center font-medium">
                    No spam, no BS. Only an invite when we launch. 
                    <span className="text-amber-400/80 block mt-1">Be part of something real.</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="relative z-10 border-t border-zinc-900/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              The Epidemic No One Talks About
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              <span className="text-amber-400 font-semibold">7 out of 10 men have no close friends.</span> We&apos;ve mastered the art of saying &quot;I&apos;m fine&quot; while dying inside. 
              Male loneliness is now a <span className="text-amber-400 font-semibold">public health crisis</span>—literally as deadly as smoking a pack a day. The solution isn&apos;t another shallow network or quick fix. It&apos;s brotherhood. Real brotherhood. <Link href="/manifesto" className="text-amber-400 hover:text-amber-300 underline font-semibold transition-colors underline-offset-4 decoration-2">
                Read our full manifesto on what we&apos;re building.
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Blocks */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Credo
            icon={<Heart className="h-5 w-5" />}
            title="Your Struggles Become Our Battles"
            copy="Post your job rejection, your relationship mess, your spiritual crisis. Watch men you&apos;ve never met carry your burden in prayer until breakthrough comes."
          />
          <Credo
            icon={<Users className="h-5 w-5" />}
            title="From Prayer Requests to Brothers for Life"
            copy="Start anonymous. Build trust through prayer. Graduate to your core circle of 4-6 men who know everything and still show up."
          />
          <Credo
            icon={<Target className="h-5 w-5" />}
            title="Built Different Than Social Media"
            copy="No algorithms. No likes. No performance anxiety. Just prayer threads that turn strangers into brothers and isolation into belonging."
          />
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <blockquote className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 sm:p-8 md:p-10 text-zinc-200 text-center shadow-2xl shadow-amber-500/5 backdrop-blur-sm">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
&quot;I was drowning in work stress and marriage issues, putting on a brave face for everyone. These brothers prayed me through my darkest season and celebrated when I got promoted. I&apos;m not the same man.&quot;
            </p>
            <div className="mt-6 text-sm text-zinc-400 font-medium">— Michael, married father of 2</div>
          </blockquote>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="relative z-10 border-t border-zinc-900/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">Ready to step in?</h3>
            <p className="text-zinc-400 mt-2 text-base sm:text-lg">Be among the first to join the brotherhood.</p>
          </div>
          <div className="w-full md:w-auto md:min-w-[400px]">
            <form
              className="flex flex-col sm:flex-row gap-3 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/60 backdrop-blur-sm shadow-xl"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget as HTMLFormElement);
                const email = data.get("email-footer");
                alert(`Thanks! We'll be in touch at ${email}.`);
              }}
            >
              <div className="flex-1">
                <Input
                  name="email-footer"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="h-12 bg-zinc-900/60 border-zinc-700/60 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all duration-300 rounded-xl px-4"
                />
              </div>
              <Button className="h-12 px-6 font-semibold bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 transition-all duration-300 rounded-xl whitespace-nowrap">
                Get Early Access
              </Button>
            </form>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-8 sm:pb-10 text-xs text-zinc-500 text-center">
          © {new Date().getFullYear()} Forge. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function BackgroundForge() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* Deep charcoal base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(12,12,14,1),rgba(5,5,6,1))]" />

      {/* Molten glow swirls */}
      <div className="absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-50 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(251,191,36,0.25),rgba(249,115,22,0.25),rgba(220,38,38,0.2),transparent_75%)]" />
      <div className="absolute top-1/3 -right-20 h-[600px] w-[600px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(239,68,68,0.2),transparent)]" />
      <div className="absolute bottom-0 -left-20 h-[520px] w-[520px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(245,158,11,0.25),transparent)]" />

      {/* Subtle ember grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
    </div>
  );
}

function Credo({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-5 sm:p-6 md:p-8 hover:bg-zinc-950/90 transition-all duration-300 hover:border-zinc-700/80 shadow-lg hover:shadow-xl">
      <div className="mb-4 sm:mb-6">
        <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-red-600/20 border border-zinc-700/60 shadow-lg mb-3 sm:mb-4 group-hover:shadow-amber-500/10 transition-shadow">
          <div className="text-amber-400">
            {icon}
          </div>
        </div>
        <h3 className="font-semibold text-sm sm:text-base md:text-lg text-zinc-200">{title}</h3>
      </div>
      <p className="text-sm md:text-base text-zinc-400 leading-relaxed">{copy}</p>
    </div>
  );
}