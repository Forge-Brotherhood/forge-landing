"use client";

import React, { useEffect, useState } from "react";
import { Flame, ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ManifestoPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.getAttribute('data-section') || '');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "why-prayer", title: "Why Prayer?" },
    { id: "what-building", title: "What We're Building" },
    { id: "what-different", title: "What Makes This Different" },
    { id: "vision", title: "The Vision" }
  ];

  const handleSectionClick = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white relative overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zinc-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(12,12,14,1),rgba(5,5,6,1))]" />
        <div className="absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(251,191,36,0.15),rgba(249,115,22,0.15),rgba(220,38,38,0.1),transparent_75%)]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 backdrop-blur-md bg-[#0b0b0c]/80 border-b border-zinc-900 z-40">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5 text-zinc-400" />
            <div className="flex items-center gap-3">
              <Flame className="h-6 w-6 text-amber-400" />
              <span className="font-semibold tracking-tight">FORGE</span>
            </div>
          </Link>

          {/* Section Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section.id 
                    ? 'text-amber-400' 
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight animate-fade-in">
            What We&apos;re Building
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto animate-fade-in-delay">
            A brotherhood engine
          </p>
        </div>
        <ChevronDown className="h-6 w-6 mt-16 animate-bounce text-zinc-500" />
      </section>

      {/* Content */}
      <main className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 pb-20">
          <article className="max-w-none">
            <div className="space-y-32">
              {/* Introduction Section */}
              <section data-section="intro" className="scroll-mt-24">
                <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
                  <p>
                    We live in an age where men are surrounded by noise but starved for connection. We scroll endlessly, we consume content, we chase accomplishments — yet many of us carry a quiet ache: Who truly knows me? Who would stand with me when the weight gets heavy?
                  </p>
                  
                  <p>
                    Friendship once grew naturally in neighborhoods, workplaces, and churches. But today, the numbers tell the story — men have fewer close friends than ever before, and fewer spaces where vulnerability feels safe. Loneliness has been called an epidemic, and it&apos;s crushing not just our spirits, but our health and our futures.
                  </p>
                  
                  <p>
                    We believe the answer isn&apos;t another distraction, another shallow network, or another quick fix. The answer is brotherhood.
                  </p>
                  
                  {/* Callout */}
                  <div className="my-16 py-8 border-l-4 border-amber-400/50 pl-8">
                    <p className="text-xl font-medium">
                      And the forge for that brotherhood is
                      <span className="text-amber-400 block mt-1">prayer.</span>
                    </p>
                  </div>
                </div>
              </section>

              {/* Section Break */}
              <div className="flex items-center justify-center">
                <div className="w-24 h-px bg-zinc-700" />
                <Flame className="h-5 w-5 mx-4 text-amber-400/50" />
                <div className="w-24 h-px bg-zinc-700" />
              </div>

              {/* Why Prayer Section */}
              <section data-section="why-prayer" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-white mb-8">Why Prayer?</h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
                  <p>
                    Prayer is not just words we speak into the air. It&apos;s investment. When I pray for another man, I carry his burden with him. I step into his struggle, his hope, his longing for breakthrough. Over time, those shared prayers weave bonds of empathy and trust stronger than small talk or casual acquaintance ever could.
                  </p>
                  
                  <div className="my-16 py-8 border-l-4 border-amber-400/50 pl-8">
                    <p className="text-xl font-medium">
                      Prayer doesn&apos;t just connect us to God.
                      <span className="text-amber-400 block mt-1">It connects us to one another.</span>
                    </p>
                  </div>
                </div>
              </section>

              {/* Section Break */}
              <div className="flex items-center justify-center">
                <div className="w-24 h-px bg-zinc-700" />
                <Flame className="h-5 w-5 mx-4 text-amber-400/50" />
                <div className="w-24 h-px bg-zinc-700" />
              </div>

              {/* What We're Building Section */}
              <section data-section="what-building" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-white mb-8">What We&apos;re Building</h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
                  <p>
                    We are building a living network of men forged together through prayer. Not a list manager. Not a content feed. A brotherhood engine.
                  </p>
                  
                  <p>
                    It begins simply: a man shares a request. Another man prays. A thread is born. Over days and weeks, that thread grows — with encouragement, updates, answered prayers, and testimony. Each thread becomes a living story of faith and friendship.
                  </p>
                  
                  <p>
                    As men consistently engage, something deeper happens. Small circles form — intentional groups of four to six brothers. These aren&apos;t random chatrooms. They&apos;re private, covenant-level spaces where accountability, vulnerability, and discipleship come alive.
                  </p>
                  
                  <p>
                    This layered design means there&apos;s always a place to belong — the open community that&apos;s alive with prayer, and the deeper core groups where lives are changed.
                  </p>
                </div>
              </section>

              {/* Section Break */}
              <div className="flex items-center justify-center">
                <div className="w-24 h-px bg-zinc-700" />
                <Flame className="h-5 w-5 mx-4 text-amber-400/50" />
                <div className="w-24 h-px bg-zinc-700" />
              </div>

              {/* What Makes This Different Section */}
              <section data-section="what-different" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-white mb-8">What Makes This Different</h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
                  <p>We&apos;re not building a tool for tracking prayer lists.</p>
                  <p>We&apos;re not building a content platform for mass devotionals.</p>
                  
                  <div className="my-16 py-8 border-l-4 border-amber-400/50 pl-8">
                    <p className="text-xl font-medium">
                      We&apos;re building a
                      <span className="text-amber-400 block mt-1">forge.</span>
                    </p>
                  </div>
                  
                  <p>
                    A place where strangers become brothers. Where the discipline of prayer becomes the foundation of trust. Where the digital world doesn&apos;t isolate, but unites.
                  </p>
                  
                  <p>
                    This is the missing piece for our generation: a scalable way to turn isolation into intimacy, loneliness into belonging, and faith into brotherhood.
                  </p>
                </div>
              </section>

              {/* Section Break */}
              <div className="flex items-center justify-center">
                <div className="w-24 h-px bg-zinc-700" />
                <Flame className="h-5 w-5 mx-4 text-amber-400/50" />
                <div className="w-24 h-px bg-zinc-700" />
              </div>

              {/* The Vision Section */}
              <section data-section="vision" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-white mb-8">The Vision</h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
                  <p>
                    Our vision is not just to help men pray more. Our vision is to raise up circles of men bound together in strength, purpose, and faith — circles that ripple outward into families, churches, and communities.
                  </p>
                  
                  <p>
                    From the first prayer whispered for a stranger, to the moment a man knows he is no longer standing alone — everything we&apos;re building points toward that transformation.
                  </p>
                  
                  {/* Final Statement & CTA */}
                  <div className="mt-24 pt-20">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                      <div className="flex items-center justify-center mb-12">
                        <div className="w-16 h-px bg-zinc-700" />
                        <Flame className="h-6 w-6 mx-4 text-amber-400" />
                        <div className="w-16 h-px bg-zinc-700" />
                      </div>
                      
                      <p className="text-xl text-zinc-400">
                        Because what men need most is not another app.
                      </p>
                      
                      <p className="text-4xl font-bold">
                        What men need most is <span className="text-amber-400">each other.</span>
                      </p>
                      
                      <p className="text-2xl text-zinc-300 font-medium mt-12">
                        And that&apos;s what we&apos;re building.
                      </p>
                      
                      {/* Call to Action */}
                      <div className="mt-20 pt-12 border-t border-zinc-800">
                        <h3 className="text-2xl font-semibold mb-4">Join the Beta</h3>
                        <p className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto">
                          Be among the first to experience a new way of building brotherhood. 
                          Help us shape the future of men&apos;s community.
                        </p>
                        <Link href="/#waitlist">
                          <Button 
                            size="lg" 
                            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg"
                          >
                            Request Early Access
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}