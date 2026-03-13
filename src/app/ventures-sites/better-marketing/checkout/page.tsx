"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const included = [
  "14 complete playbooks + guide videos (70+ chapters)",
  "Done-for-you ad creative templates and swipe files",
  "Dedicated U.S.-based account manager",
  "Custom campaign strategy, ad copy, and creative assets",
  "Campaign build on Google, Meta, or TikTok",
  "Daily monitoring, optimization, and A/B testing",
  "Weekly performance reports with real numbers",
  "Monthly strategy calls",
];

const afterSignup = [
  {
    icon: "1",
    text: "You get instant access to all 14 playbooks, guide videos, and templates.",
  },
  {
    icon: "2",
    text: "Our team reviews your info and starts preparing your custom campaign strategy.",
  },
  {
    icon: "3",
    text: "Your dedicated account manager reaches out within 1 business day to schedule onboarding.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="text-bm-green mt-0.5 shrink-0"
    >
      <path
        d="M13.5 4.5L6 12L2.5 8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      businessName: (form.elements.namedItem("businessName") as HTMLInputElement)
        .value,
      industry: (form.elements.namedItem("industry") as HTMLSelectElement)
        .value,
      adBudget: (form.elements.namedItem("adBudget") as HTMLSelectElement)
        .value,
      platform: (form.elements.namedItem("platform") as HTMLSelectElement)
        .value,
      goals: (form.elements.namedItem("goals") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/better-marketing/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      if (json.url) {
        window.location.href = json.url;
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="noise">
      {/* Nav */}
      <nav className="bg-bm-blue-dark border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="block">
            <Image
              src="/images/better-marketing/LogoHeader.png"
              alt="Better Marketing Digital"
              width={160}
              height={42}
              className="h-8 w-auto"
              priority
            />
          </a>
          <a
            href="/"
            className="text-label text-bm-gray-400 hover:text-bm-cyan transition-colors text-xs"
          >
            &larr; Back to site
          </a>
        </div>
      </nav>

      <section className="hero-gradient py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-label text-bm-cyan tracking-[0.2em] block mb-4">
              Get Started
            </span>
            <h1 className="text-display text-white text-3xl sm:text-4xl lg:text-5xl mb-4 leading-[1.1]">
              Everything You Need.{" "}
              <span className="text-editorial text-bm-cyan">
                One Monthly Plan.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
              $600/month gets you 14 playbooks, done-for-you campaign
              management, a dedicated account manager, and weekly reporting.
              3-month commitment. Cancel anytime after.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left: What's included + what happens */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Price */}
              <div className="card-dark p-5 sm:p-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="stat-number text-4xl">$600</span>
                  <span className="text-white/50 text-lg">/month</span>
                </div>
                <p className="text-white/40 text-sm">
                  3-month commitment &middot; cancel anytime after
                </p>
                <div className="accent-line max-w-full my-4" />
                <p className="text-label text-white/80 mb-3 text-sm">
                  Everything included:
                </p>
                <ul className="space-y-2.5">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="text-white/60 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What happens after signup */}
              <div className="card-dark p-5 sm:p-6">
                <p className="text-label text-bm-cyan tracking-[0.15em] mb-4 text-sm">
                  After You Sign Up
                </p>
                <div className="space-y-4">
                  {afterSignup.map((step) => (
                    <div key={step.icon} className="flex gap-3">
                      <div className="step-dot text-xs shrink-0">
                        {step.icon}
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policy note */}
              <div className="border border-white/10 rounded-xl p-4 text-center">
                <p className="text-white/40 text-sm leading-relaxed">
                  Changed your mind? We&apos;ll cancel the subscription if you
                  don&apos;t want to move forward. You keep the digital product
                  suite either way.
                </p>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="card-dark p-1 sm:p-2 rounded-2xl overflow-hidden">
                <div className="bg-white rounded-xl p-6 sm:p-8">
                  <h2 className="text-display text-bm-gray-900 text-xl mb-1">
                    Tell Us About Your Business
                  </h2>
                  <p className="text-bm-gray-400 text-sm mb-6">
                    Fill this out so we can hit the ground running on your
                    campaigns.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-label text-bm-gray-900 block mb-2 text-sm">
                          Full Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          className="w-full border border-bm-gray-200 rounded-lg px-4 py-3 text-bm-gray-900 text-sm focus:outline-none focus:border-bm-cyan focus:ring-1 focus:ring-bm-cyan"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="text-label text-bm-gray-900 block mb-2 text-sm">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full border border-bm-gray-200 rounded-lg px-4 py-3 text-bm-gray-900 text-sm focus:outline-none focus:border-bm-cyan focus:ring-1 focus:ring-bm-cyan"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-label text-bm-gray-900 block mb-2 text-sm">
                        Business Name
                      </label>
                      <input
                        name="businessName"
                        type="text"
                        required
                        className="w-full border border-bm-gray-200 rounded-lg px-4 py-3 text-bm-gray-900 text-sm focus:outline-none focus:border-bm-cyan focus:ring-1 focus:ring-bm-cyan"
                        placeholder="Smith Dental"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-label text-bm-gray-900 block mb-2 text-sm">
                          Industry
                        </label>
                        <select
                          name="industry"
                          required
                          className="w-full border border-bm-gray-200 rounded-lg px-4 py-3 text-bm-gray-900 text-sm focus:outline-none focus:border-bm-cyan focus:ring-1 focus:ring-bm-cyan bg-white"
                        >
                          <option value="">Select your industry</option>
                          <option value="dental">Dental</option>
                          <option value="medical-aesthetics">
                            Medical Aesthetics / Med Spa
                          </option>
                          <option value="chiropractic">Chiropractic</option>
                          <option value="other-medical">
                            Other Medical Practice
                          </option>
                          <option value="roofing">Roofing</option>
                          <option value="solar">Solar</option>
                          <option value="hvac">HVAC</option>
                          <option value="plumbing">Plumbing</option>
                          <option value="remodeling">Remodeling</option>
                          <option value="other-home-services">
                            Other Home Services
                          </option>
                          <option value="b2b">B2B Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-label text-bm-gray-900 block mb-2 text-sm">
                          Monthly Ad Budget
                        </label>
                        <select
                          name="adBudget"
                          required
                          className="w-full border border-bm-gray-200 rounded-lg px-4 py-3 text-bm-gray-900 text-sm focus:outline-none focus:border-bm-cyan focus:ring-1 focus:ring-bm-cyan bg-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="1500-3000">$1,500 - $3,000</option>
                          <option value="3000-5000">$3,000 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="10000+">$10,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-label text-bm-gray-900 block mb-2 text-sm">
                        Advertising Platform
                      </label>
                      <select
                        name="platform"
                        required
                        className="w-full border border-bm-gray-200 rounded-lg px-4 py-3 text-bm-gray-900 text-sm focus:outline-none focus:border-bm-cyan focus:ring-1 focus:ring-bm-cyan bg-white"
                      >
                        <option value="">
                          Where do you want to advertise?
                        </option>
                        <option value="google">Google Ads</option>
                        <option value="meta">Meta (Facebook / Instagram)</option>
                        <option value="tiktok">TikTok</option>
                        <option value="multiple">Multiple Platforms</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-label text-bm-gray-900 block mb-2 text-sm">
                        What are your goals?
                      </label>
                      <textarea
                        name="goals"
                        rows={3}
                        className="w-full border border-bm-gray-200 rounded-lg px-4 py-3 text-bm-gray-900 text-sm focus:outline-none focus:border-bm-cyan focus:ring-1 focus:ring-bm-cyan resize-none"
                        placeholder="More leads, lower cost per lead, expand into new markets..."
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm text-center">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-cta w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading
                        ? "Redirecting to payment..."
                        : "Subscribe — $600/month"}
                    </button>

                    <p className="text-bm-gray-400 text-xs text-center leading-relaxed">
                      You&apos;ll be redirected to Stripe to complete payment.
                      Your subscription starts immediately. 3-month minimum, then
                      cancel anytime.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/30"
          >
            <span>Secure payment via Stripe</span>
            <span>&middot;</span>
            <span>3,000+ campaigns managed</span>
            <span>&middot;</span>
            <span>100% U.S.-based team</span>
          </motion.div>
        </div>
      </section>

      <div className="accent-line" />
    </main>
  );
}
