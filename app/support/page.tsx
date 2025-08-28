"use client";
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import { Mail, MessageCircle, Shield, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";

export default function SupportPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Forge?",
      answer: "Forge is a brotherhood engine built on prayer. We're creating a digital space where Christian men can connect authentically, pray for one another, and build lasting friendships rooted in Christ."
    },
    {
      question: "When will Forge launch?",
      answer: "We're currently in development. Early access members will be the first to gain access to the app."
    },
    {
      question: "How much will Forge cost?",
      answer: "We're still finalizing our pricing model, but our goal is to make Forge accessible to all men who want to grow in faith and brotherhood. Beta members may receive special pricing."
    },
    {
      question: "Is Forge only for Christians?",
      answer: "Forge is built on a foundation of Christian faith and prayer. While we welcome all men who are seeking connection and purpose, our community is centered around following Jesus Christ."
    },
    {
      question: "How are prayer groups formed?",
      answer: "Groups form organically as men engage with prayer requests and build connections. We'll also provide tools to help match men into small circles of 4-6 brothers for deeper accountability and growth."
    },
    {
      question: "Is my data and prayer information private?",
      answer: "Absolutely. We take privacy seriously. Your prayer requests and personal information are protected. You control what you share and with whom. We'll never sell your data."
    },
    {
      question: "Can I use Forge with my existing men's group?",
      answer: "Yes! Forge is designed to strengthen existing relationships as well as build new ones. You can invite your current group to join and use our tools to deepen your brotherhood."
    },
    {
      question: "What makes Forge different from other Christian apps?",
      answer: "Forge isn't another content platform or prayer list manager. We're building a brotherhood engine—focused on real relationships, not passive consumption. Every feature is designed to forge genuine connections between men."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(12,12,14,1),rgba(5,5,6,1))]" />
        <div className="absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(251,191,36,0.15),rgba(249,115,22,0.15),rgba(220,38,38,0.1),transparent_75%)]" />
      </div>

      {/* Nav */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            How Can We Help?
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto">
            Get answers to your questions and connect with our team
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 pb-20 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Contact Options */}
          <section className="mb-16 sm:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-zinc-700/60 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white">Email Us</h3>
                  <p className="text-zinc-300 text-sm mb-4">
                    For general inquiries and support
                  </p>
                  <a 
                    href="mailto:support@forge-app.io" 
                    className="text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors"
                  >
                    support@forge-app.io
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-zinc-700/60 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white">Join the Conversation</h3>
                  <p className="text-zinc-300 text-sm mb-4">
                    Connect with other early members
                  </p>
                  <span className="text-zinc-500 text-sm">
                    Coming Soon
                  </span>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-zinc-700/60 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white">Partnership</h3>
                  <p className="text-zinc-300 text-sm mb-4">
                    For churches and organizations
                  </p>
                  <a 
                    href="mailto:partners@forge-app.io" 
                    className="text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors"
                  >
                    partners@forge-app.io
                  </a>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card 
                  key={index}
                  className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm overflow-hidden cursor-pointer hover:border-amber-500/50 transition-all duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-base sm:text-lg pr-4 text-white">
                        {faq.question}
                      </h3>
                      <ChevronRight 
                        className={`h-5 w-5 text-zinc-400 transition-transform flex-shrink-0 ${
                          expandedFaq === index ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                    {expandedFaq === index && (
                      <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Response Time Notice */}
          <section className="mb-16 sm:mb-20">
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-zinc-700/60 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-amber-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Response Times</h3>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      We're a small team building something big. We read every message and typically respond within 24-48 hours. 
                      Your patience means everything as we work to serve this growing brotherhood.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Still Have Questions?
            </h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              We're here to help. Reach out anytime and we'll get back to you as soon as we can.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@forge-app.io">
                <Button 
                  size="lg" 
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-6 text-base rounded-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Contact Support
                </Button>
              </a>
              <Link href="/manifesto">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-2 border-zinc-700 hover:border-amber-500/70 bg-zinc-900/60 hover:bg-amber-500/10 text-zinc-300 hover:text-amber-400 font-bold px-8 py-6 text-base rounded-lg transition-all"
                >
                  Read Our Manifesto
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}