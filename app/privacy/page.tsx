"use client";
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Header } from "@/components/Header";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(12,12,14,1),rgba(5,5,6,1))]" />
        <div className="absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(251,191,36,0.15),rgba(249,115,22,0.15),rgba(220,38,38,0.1),transparent_75%)]" />
      </div>

      <Header />

      <main className="relative z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="space-y-8 sm:space-y-12">
            {/* Hero */}
            <div className="text-center space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                Your privacy is sacred. Here's how we protect it.
              </p>
              <p className="text-sm text-zinc-400">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-zinc-200">
                
                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Commitment to Your Privacy</h2>
                  <p className="leading-relaxed mb-4">
                    At Forge, we believe that privacy is a fundamental right. Brotherhood requires trust, and trust requires transparency about how we handle your personal information. This policy explains our practices in clear, straightforward language.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-amber-400">We will never sell your data.</strong> Your prayer requests, personal struggles, and private conversations are sacred to us and will remain that way.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Information You Provide</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Account information (email, name, profile details)</li>
                    <li>Prayer requests and responses you share</li>
                    <li>Messages and interactions with other users</li>
                    <li>Support communications and feedback</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Information We Collect Automatically</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Device and browser information</li>
                    <li>Usage patterns and feature interactions</li>
                    <li>IP address and general location (city/state level only)</li>
                    <li>Technical information to improve app performance</li>
                  </ul>

                  <p className="leading-relaxed text-sm bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                    <strong>Note:</strong> We collect minimal data necessary to provide our service. We don't track you across other websites or build advertising profiles.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">How We Use Your Information</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>To provide our service:</strong> Enable prayer sharing, brotherhood connections, and community features</li>
                    <li><strong>To improve our platform:</strong> Understand how features are used to build better tools for connection</li>
                    <li><strong>To communicate with you:</strong> Send important updates, respond to support requests, and share relevant community information</li>
                    <li><strong>To ensure safety:</strong> Prevent abuse, spam, and maintain a healthy community environment</li>
                    <li><strong>To comply with legal obligations:</strong> Only when required by law or to protect our users</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">How We Share Your Information</h2>
                  <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 mb-6">
                    <p className="text-lg font-semibold text-amber-400 mb-3">
                      We don't sell, rent, or trade your personal information. Period.
                    </p>
                  </div>

                  <p className="leading-relaxed mb-4">We only share your information in these limited circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>With your consent:</strong> When you explicitly choose to share with other community members</li>
                    <li><strong>Service providers:</strong> Trusted partners who help us operate (hosting, analytics, support) under strict data protection agreements</li>
                    <li><strong>Legal requirements:</strong> When required by law or to protect user safety (we'll notify you unless prohibited)</li>
                    <li><strong>Business transfers:</strong> In the unlikely event of a merger or acquisition, with the same privacy commitments</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Your Privacy Rights</h2>
                  <p className="leading-relaxed mb-4">You have control over your information:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Access:</strong> Request a copy of all data we have about you</li>
                    <li><strong>Correction:</strong> Update or correct any inaccurate information</li>
                    <li><strong>Deletion:</strong> Delete your account and associated data</li>
                    <li><strong>Portability:</strong> Export your data in a readable format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from communications at any time</li>
                  </ul>
                  
                  <p className="leading-relaxed text-sm bg-amber-500/10 p-4 rounded-lg border border-amber-500/30">
                    <strong>Contact us at support@forge-app.io</strong> to exercise any of these rights. We'll respond within 30 days.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Data Security</h2>
                  <p className="leading-relaxed mb-4">
                    We protect your information using industry-standard security measures:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption in transit and at rest</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access on a need-to-know basis</li>
                    <li>Secure data centers with physical protections</li>
                    <li>Incident response procedures</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Children's Privacy</h2>
                  <p className="leading-relaxed">
                    Forge is not intended for users under 13 years of age. We don't knowingly collect information from children under 13. If you're a parent and believe we have information about your child, please contact us immediately at support@forge-app.io.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">International Users</h2>
                  <p className="leading-relaxed">
                    Forge operates primarily in the United States. If you're using our service from outside the US, your information may be transferred to and processed in the United States. We ensure appropriate safeguards are in place for international data transfers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Changes to This Policy</h2>
                  <p className="leading-relaxed mb-4">
                    We may update this privacy policy to reflect changes in our practices or legal requirements. When we make significant changes, we'll:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email registered users about important changes</li>
                    <li>Post a notice on our website</li>
                    <li>Update the "Last updated" date at the top of this policy</li>
                  </ul>
                </section>

                <section className="bg-zinc-900/30 p-6 rounded-lg border border-zinc-700">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="leading-relaxed mb-4">
                    Have questions about this privacy policy or how we handle your data? We're here to help.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> <a href="mailto:support@forge-app.io" className="text-amber-400 hover:text-amber-300 transition-colors">support@forge-app.io</a></p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}