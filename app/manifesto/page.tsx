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
    { id: "what-building", title: "Introduction" },
    { id: "why-prayer", title: "Why Prayer?" },
    { id: "what-building-2", title: "What We're Building" },
    { id: "what-different", title: "What Makes Us Different" },
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-400" />
            <div className="flex items-center gap-2 sm:gap-3">
              <Flame className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
              <span className="font-semibold tracking-tight text-sm sm:text-base">FORGE</span>
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
      <section className="relative z-10 min-h-[50vh] sm:min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight animate-fade-in">
            What We&apos;re Building
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto animate-fade-in-delay">
            A brotherhood engine
          </p>
        </div>
        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 mt-12 sm:mt-16 animate-bounce text-zinc-500" />
      </section>

      {/* Content */}
      <main className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 pb-20 sm:pb-32">
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-24 sm:space-y-32">
              {/* What We're Building Introduction Section */}
              <section data-section="what-building" className="scroll-mt-28">
                <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl leading-relaxed text-zinc-200">
                  <p className="leading-loose">
                    We live in an age where men are surrounded by noise but starved for connection. We scroll endlessly, chase accomplishments, and consume content — yet beneath the surface many of us carry a quiet ache: the loneliness of being surrounded by people, yet still unseen.
                  </p>
                  
                  <p className="leading-loose">
                    Once, friendship grew naturally in neighborhoods, workplaces, and churches. Today, those spaces are fading. The numbers tell the story: only <span className="text-amber-400 font-bold">27%</span> of men report having at least six close friends, down from <span className="text-amber-400 font-bold">55%</span> in <span className="text-amber-400 font-bold">1995</span>. Just <span className="text-amber-400 font-bold">30%</span> of men say they had an emotionally vulnerable conversation in the last week. Loneliness has become a pandemic, and the U.S. Surgeon General warns its impact on health is equivalent to smoking <span className="text-amber-400 font-bold">15 cigarettes a day</span>. It leaves men isolated, anxious, and adrift — crushing not only spirits, but also bodies, futures, and families.
                  </p>
                  
                  <p className="leading-loose">
                    The world offers endless distractions and shallow networks, but they cannot heal this wound. What men need is not another feed to scroll or another mask to wear, but a brotherhood rooted in Christ — where strength is found through vulnerability, where burdens are carried together, and where lives are anchored in something eternal.
                  </p>
                </div>
              </section>

              {/* Section Break */}
              <div className="flex items-center justify-center my-16 sm:my-20">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
                <Flame className="h-6 w-6 mx-6 text-amber-400/60 animate-pulse" />
                <div className="w-32 h-px bg-gradient-to-l from-transparent via-zinc-700 to-transparent" />
              </div>

              {/* Why Prayer Section */}
              <section data-section="why-prayer" className="scroll-mt-28">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">Why Prayer?</h2>
                
                <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl leading-relaxed text-zinc-200">
                  <p className="leading-loose">
                    Prayer is not just words we speak into the air. It is a spiritual investment with eternal weight. When I pray for another man, I am not standing at a distance — I am stepping into his story, taking up his fight as my own. I carry his burden with him before the throne of God. I enter into his struggle, his fears, his hopes, and his longing for breakthrough.
                  </p>
                  
                  <p className="leading-loose">
                    In that sacred act, I choose to see the world through his eyes and to plead with God on his behalf, as brothers-in-arms lifting shields together in battle. To pray for another is to say, "Your battle is mine. I will stand on the frontlines with you. I will bring your need before the One who can change everything." Over time, those prayers become battle-tested bonds, cords of empathy and trust stronger than small talk or shared interests could ever create.
                  </p>
                  
                  <p className="leading-loose">
                    This is why we begin with prayer. Because true brotherhood cannot be built on hobbies, opinions, or convenience — it must be forged in something eternal. When men bring one another before Christ, they meet not only at the surface of friendship but at the deepest place of the soul. Prayer is the foundation, because it unites us first to God, and then to one another, in a bond that cannot be broken.
                  </p>
                </div>
              </section>

              {/* Section Break */}
              <div className="flex items-center justify-center my-16 sm:my-20">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
                <Flame className="h-6 w-6 mx-6 text-amber-400/60 animate-pulse" />
                <div className="w-32 h-px bg-gradient-to-l from-transparent via-zinc-700 to-transparent" />
              </div>

              {/* What We're Building Section */}
              <section data-section="what-building-2" className="scroll-mt-28">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">What We&apos;re Building</h2>
                
                <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl leading-relaxed text-zinc-200">
                  <p className="leading-loose">
                    We are building a living network of men, forged together through prayer and rooted in Christ. <strong className="text-amber-400">Not a list manager. Not a content feed. A brotherhood engine.</strong>
                  </p>
                  
                  <p className="leading-loose">
                    It begins simply: a man shares a request. Another man prays. A thread is born. Over days and weeks, that thread grows — with encouragement, updates, answered prayers, and testimony. Each thread becomes a living story of faith, friendship, and Jesus&apos;s hand at work.
                  </p>
                  
                  <p className="leading-loose">  
                    As men lean in with consistency, something deeper happens. Small circles form — intentional groups of four to six brothers in Christ. These are not random groups, but covenant spaces where accountability, vulnerability, and discipleship come alive. This layered design ensures there is always a place to belong — the open community, vibrant with prayer, and the deeper core groups, where lives are transformed.
                  </p>
                </div>
              </section>

              {/* Section Break */}
              <div className="flex items-center justify-center my-16 sm:my-20">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
                <Flame className="h-6 w-6 mx-6 text-amber-400/60 animate-pulse" />
                <div className="w-32 h-px bg-gradient-to-l from-transparent via-zinc-700 to-transparent" />
              </div>

              {/* What Makes This Different Section */}
              <section data-section="what-different" className="scroll-mt-28">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">What Makes Us Different</h2>
                
                <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl leading-relaxed text-zinc-200">
                  <p className="leading-loose">
                    We&apos;re not building a tool for tracking prayer lists. We&apos;re not building a content platform for mass devotionals. <strong className="text-amber-400">We&apos;re building a forge</strong> — a place where strangers become brothers, their lives grounded in Christ.
                  </p>
                  
                  <p className="leading-loose">
                    In an age where loneliness has been declared an epidemic, prayer is not a small remedy but a radical one. It cuts through isolation and builds trust where none existed. In prayer, men carry one another&apos;s burdens, discover they are not alone, and find strength in Christ together.
                  </p>
                  
                  <p className="leading-loose">
                    The digital world, so often a driver of disconnection, here becomes a channel of unity — a scalable way to turn isolation into intimacy, loneliness into belonging, and faith into brotherhood. This is not just an app; it is a Christ-centered answer to the ache of a generation starved for real connection.
                  </p>
                </div>
              </section>

              {/* Section Break */}
              <div className="flex items-center justify-center my-16 sm:my-20">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
                <Flame className="h-6 w-6 mx-6 text-amber-400/60 animate-pulse" />
                <div className="w-32 h-px bg-gradient-to-l from-transparent via-zinc-700 to-transparent" />
              </div>

              {/* The Vision Section */}
              <section data-section="vision" className="scroll-mt-28">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">The Vision</h2>
                
                <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl leading-relaxed text-zinc-200">
                  <p className="leading-loose">
                    Our vision is not just to help men pray more. Our vision is to raise up circles of men bound together in strength, purpose, and faith — circles that ripple outward into families, churches, and communities.
                  </p>
                  
                  <p className="leading-loose">
                    From the first prayer whispered for a stranger, to the moment a man knows he is no longer standing alone — everything we&apos;re building points toward that transformation.
                  </p>
                  
                  <p className="leading-loose">
                    And that transformation doesn&apos;t stop with the individual. Each circle becomes a catalyst for renewal, equipping men to lead their homes with love, to strengthen their local churches with service, and to impact their workplaces and neighborhoods with the gospel.
                  </p>
                  
                  {/* Final Statement & CTA */}
                  <div className="mt-32 pt-24">
                    <div className="max-w-3xl mx-auto text-center space-y-12">
                      <div className="flex items-center justify-center mb-16">
                        <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                        <Flame className="h-8 w-8 mx-6 text-amber-400 animate-pulse" />
                        <div className="w-20 h-px bg-gradient-to-l from-transparent via-amber-400/30 to-transparent" />
                      </div>
                      
                      <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        A brotherhood engine,<br/>
                        <span className="text-amber-400">rooted in Christ.</span>
                      </p>
                      
                      {/* Call to Action */}
                      <div className="mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-zinc-800/50">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Join the Beta</h3>
                        <p className="text-lg sm:text-xl text-zinc-300 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
                          Be among the first to experience a new way of building brotherhood. 
                          Help us shape the future of men&apos;s community.
                        </p>
                        <Link href="/#waitlist">
                          <Button 
                            size="lg" 
                            className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-10 py-7 text-lg rounded-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
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