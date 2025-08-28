"use client";
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Header } from "@/components/Header";

export default function TermsPage() {
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
                Terms of Service
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                Building brotherhood requires mutual respect and clear expectations.
              </p>
              <p className="text-sm text-zinc-400">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-zinc-200">
                
                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Welcome to Forge</h2>
                  <p className="leading-relaxed mb-4">
                    These Terms of Service ("Terms") govern your use of Forge, a brotherhood platform built on prayer and authentic connection. By using our service, you agree to these terms.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-amber-400">Our mission is simple:</strong> to transform isolation into belonging through the power of prayer and brotherhood. These terms exist to protect that mission and ensure everyone can participate safely.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Acceptance of Terms</h2>
                  <p className="leading-relaxed mb-4">
                    By accessing or using Forge, you agree to be bound by these Terms and our Privacy Policy. If you don't agree with any part of these terms, you may not use our service.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You must be at least 13 years old to use Forge</li>
                    <li>You must provide accurate information when creating your account</li>
                    <li>You are responsible for maintaining the confidentiality of your account</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Community Guidelines</h2>
                  <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 mb-6">
                    <p className="text-lg font-semibold text-amber-400 mb-3">
                      Forge is built on respect, authenticity, and brotherhood.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-amber-400 mb-3">What We Encourage</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Authentic sharing:</strong> Be vulnerable, honest, and real about your struggles and victories</li>
                    <li><strong>Supportive prayer:</strong> Lift each other up through genuine prayer and encouragement</li>
                    <li><strong>Respectful dialogue:</strong> Engage with others as brothers, even when you disagree</li>
                    <li><strong>Confidentiality:</strong> Keep private conversations and prayer requests within the community</li>
                    <li><strong>Growth mindset:</strong> Be open to learning, changing, and growing together</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-red-400 mb-3">What We Don't Allow</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Harassment or abuse:</strong> Any form of bullying, harassment, or abusive behavior</li>
                    <li><strong>Hate speech:</strong> Discrimination based on race, religion, gender, sexuality, or other characteristics</li>
                    <li><strong>Spam or self-promotion:</strong> Excessive promotional content or irrelevant messages</li>
                    <li><strong>False information:</strong> Deliberately spreading misinformation or creating fake accounts</li>
                    <li><strong>Inappropriate content:</strong> Sexually explicit, violent, or otherwise inappropriate material</li>
                    <li><strong>Privacy violations:</strong> Sharing others' personal information without consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Your Content and Privacy</h2>
                  
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Content You Share</h3>
                  <p className="leading-relaxed mb-4">
                    When you share prayer requests, messages, or other content on Forge:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>You retain ownership of your content</li>
                    <li>You grant us permission to display and distribute your content within the platform</li>
                    <li>You're responsible for ensuring your content doesn't violate these terms or others' rights</li>
                    <li>You can delete your content at any time</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Privacy and Confidentiality</h3>
                  <p className="leading-relaxed mb-4">
                    Brotherhood requires trust. By using Forge, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respect the privacy of prayer requests and personal shares</li>
                    <li>Not screenshot or share private conversations outside the platform</li>
                    <li>Keep sensitive information shared in confidence within the community</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Service Availability</h2>
                  <p className="leading-relaxed mb-4">
                    While we strive to provide reliable service:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Forge is provided "as is" without warranties of any kind</li>
                    <li>We may temporarily suspend service for maintenance or updates</li>
                    <li>We reserve the right to modify or discontinue features with reasonable notice</li>
                    <li>We're not liable for any interruptions to service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Account Responsibilities</h2>
                  <p className="leading-relaxed mb-4">You are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Maintaining the security of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                    <li>Providing accurate and up-to-date account information</li>
                  </ul>
                  
                  <p className="leading-relaxed text-sm bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                    <strong>Note:</strong> We reserve the right to suspend or terminate accounts that violate these terms or engage in harmful behavior.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Intellectual Property</h2>
                  <p className="leading-relaxed mb-4">
                    Forge respects intellectual property rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The Forge platform, logo, and original content are our property</li>
                    <li>You retain rights to content you create and share</li>
                    <li>Don't use our platform to infringe on others' intellectual property</li>
                    <li>Report any copyright violations to support@forge-app.io</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Limitation of Liability</h2>
                  <p className="leading-relaxed mb-4">
                    To the fullest extent permitted by law:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Forge is not liable for indirect, incidental, or consequential damages</li>
                    <li>Our total liability to you is limited to the amount you've paid us (if any)</li>
                    <li>We're not responsible for content shared by other users</li>
                    <li>We strongly recommend professional help for serious mental health concerns</li>
                  </ul>

                  <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500/30">
                    <p className="text-sm leading-relaxed">
                      <strong>Important:</strong> While Forge provides a supportive community, it's not a substitute for professional mental health care, medical treatment, or emergency services. If you're in crisis, please contact emergency services or a crisis hotline immediately.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Termination</h2>
                  <p className="leading-relaxed mb-4">
                    Either party may terminate this agreement:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>You may:</strong> Delete your account at any time from your settings</li>
                    <li><strong>We may:</strong> Suspend or terminate accounts that violate these terms</li>
                    <li><strong>Effect:</strong> Terminated accounts lose access to the service</li>
                    <li><strong>Data:</strong> We'll handle your data according to our Privacy Policy</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Dispute Resolution</h2>
                  <p className="leading-relaxed mb-4">
                    We prefer to resolve disputes amicably:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>First, contact us at support@forge-app.io to discuss any issues</li>
                    <li>We'll work in good faith to resolve problems quickly</li>
                    <li>These terms are governed by the laws of the State of California, USA</li>
                    <li>Any legal disputes will be resolved in California state or federal courts</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Changes to These Terms</h2>
                  <p className="leading-relaxed mb-4">
                    We may update these terms to reflect changes in our service or legal requirements. When we make significant changes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We'll email registered users about important changes</li>
                    <li>We'll post a notice on our website</li>
                    <li>Continued use of Forge after changes means you accept the new terms</li>
                    <li>If you don't agree with changes, you may terminate your account</li>
                  </ul>
                </section>

                <section className="bg-zinc-900/30 p-6 rounded-lg border border-zinc-700">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="leading-relaxed mb-4">
                    Questions about these terms or our service? We're here to help build a better brotherhood together.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Support:</strong> <a href="mailto:support@forge-app.io" className="text-amber-400 hover:text-amber-300 transition-colors">support@forge-app.io</a></p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-zinc-700">
                    <p className="text-xs text-zinc-500">
                      By using Forge, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                    </p>
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