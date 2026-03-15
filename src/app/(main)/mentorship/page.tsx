"use client";

import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import Marquee from "@/components/Marquee";

export default function MentorshipPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }

    // Slow scroll to video section, then autoplay
    const timer = setTimeout(() => {
      videoSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      // Start playback after scroll finishes
      const playTimer = setTimeout(() => {
        videoRef.current?.play();
      }, 1200);
      return () => clearTimeout(playTimer);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-32 md:py-44 px-6 md:px-1 hero-bg">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-red mb-4 block tracking-[0.3em]">
              Mentorship Program
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="text-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] mb-8">
              Launch your
              <br />
              <span className="text-editorial">brand & business</span>
              <br />
              in <span className="text-bbh-red">4 months.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-bbh-gray-300 max-w-2xl leading-relaxed font-mono">
              A structured mentorship program that starts with discovering who you are
              and what you can do &mdash; then we build a personal brand and business
              plan around that. Purpose-built for the AI economy.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div ref={videoSectionRef} className="mt-12 max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-glass-border shadow-2xl shadow-black/20">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  preload="auto"
                  playsInline
                  muted
                >
                  <source src="/videos/VSL.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="border-y-2 border-bbh-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-gray-400 mb-4 block">The Process</span>
            <h2 className="text-display text-4xl md:text-6xl mb-16">
              How it <span className="text-editorial">works</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                month: "Month 1",
                title: "Discovery",
                desc: "Deep-dive discovery call. We uncover who you are, your skills, your passions, and the intersection where your unique offer lives.",
              },
              {
                month: "Month 2",
                title: "Blueprint",
                desc: "We architect your brand identity, define your offer stack, and build a comprehensive business plan tailored to your strengths.",
              },
              {
                month: "Month 3",
                title: "Build",
                desc: "Content strategy, digital presence, and launch assets. We construct the infrastructure your brand needs to go live with impact.",
              },
              {
                month: "Month 4",
                title: "Launch",
                desc: "Go to market. Active launch support, optimization, and the foundations for sustained growth beyond the program.",
              },
            ].map((phase, i) => (
              <AnimatedSection key={phase.month} delay={i * 0.1}>
                <div className="glass-card p-8 h-full">
                  <span className="text-label text-bbh-red mb-3 block">
                    {phase.month}
                  </span>
                  <h3 className="text-display text-2xl mb-3">{phase.title}</h3>
                  <p className="text-sm text-bbh-gray-300 leading-relaxed font-mono">
                    {phase.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee text="PREPARATION" className="py-8" />

      {/* ─── DISCOVERY CALL ─── */}
      <section id="apply" className="py-24 md:py-32 px-6 md:px-10 border-y-2 border-bbh-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-label text-bbh-red mb-4 block tracking-[0.3em]">
              Discovery Call
            </span>
            <h2 className="text-display text-4xl md:text-6xl mb-6">
              One call. <span className="text-editorial">Total clarity.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-bbh-gray-300 leading-relaxed font-mono mb-6">
              For <span className="text-bbh-white font-bold">$57</span>, you get a focused strategy session
              where we dig into who you are, what you&apos;re building, and where the real
              opportunity is. We&apos;ll map out exactly which business, brand, product &mdash;
              or all three &mdash; you should be building and how to monetize it.
            </p>
            <p className="text-lg md:text-xl text-bbh-gray-300 leading-relaxed font-mono mb-6">
              You walk away with a clear, actionable plan you can execute entirely on your own.
              No upsell traps. No bait-and-switch. This is your roadmap.
            </p>
            <p className="text-base text-bbh-gray-400 leading-relaxed font-mono mb-12">
              And if you decide you want help bringing it to life? Our team is ready to build it
              with you. But that&apos;s your call &mdash; this session is designed to give you
              everything you need to move forward with or without us.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/jacob-formacha/bybetterhuman-discovery"
              style={{ minWidth: 320, height: 700 }}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── RESOURCES ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-label text-bbh-gray-400 mb-4 block">
                &mdash; Resources &mdash;
              </span>
              <h2 className="text-display text-4xl md:text-6xl">
                Books & <span className="text-editorial">digital products</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AnimatedSection delay={0.1}>
              <div className="glass-card group p-8 text-center">
                <div className="w-full aspect-[3/4] bg-bbh-gray-800 mb-6 flex items-center justify-center border border-glass-border overflow-hidden">
                  <img
                    src="/images/stoic-buddhist-code-cover.png"
                    alt="The Stoic Buddhist Code"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-label text-bbh-gray-400 mb-2 block">Digital Book</span>
                <h3 className="text-display text-xl mb-2">The Stoic Buddhist Code</h3>
                <p className="text-sm text-bbh-gray-300 font-mono">
                  Master the intersection of ancient wisdom and modern purpose.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 text-center">
                <div className="w-full aspect-[3/4] bg-bbh-gray-800 mb-6 flex items-center justify-center border border-glass-border">
                  <span className="text-display text-4xl text-bbh-gray-700">02</span>
                </div>
                <span className="text-label text-bbh-gray-400 mb-2 block">Coming Soon</span>
                <h3 className="text-display text-xl mb-2">AI Economy Playbook</h3>
                <p className="text-sm text-bbh-gray-300 font-mono">
                  Your guide to building in the age of artificial intelligence.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="glass-card p-8 text-center">
                <div className="w-full aspect-[3/4] bg-bbh-gray-800 mb-6 flex items-center justify-center border border-glass-border">
                  <span className="text-display text-4xl text-bbh-gray-700">03</span>
                </div>
                <span className="text-label text-bbh-gray-400 mb-2 block">Coming Soon</span>
                <h3 className="text-display text-xl mb-2">Brand Launch Kit</h3>
                <p className="text-sm text-bbh-gray-300 font-mono">
                  Templates, frameworks, and tools to launch with clarity.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── CAREERS ─── */}
      <section className="border-t-2 border-bbh-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-gray-400 mb-4 block">
              Join the Team
            </span>
            <h2 className="text-display text-4xl md:text-6xl mb-6">
              We&apos;re <span className="text-bbh-red">hiring.</span>
            </h2>
            <p className="text-lg text-bbh-gray-300 max-w-2xl mb-12 font-mono">
              We&apos;re always accepting talented people who want to work at the
              intersection of human purpose and modern business.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                role: "Sales — Unique Offers",
                desc: "Sell purpose-driven products and services. You understand value and know how to communicate it authentically.",
              },
              {
                role: "Operations",
                desc: "Media buying, website creation, and operational excellence. Keep the machine running and the ventures shipping.",
              },
              {
                role: "Marketing",
                desc: "Creative marketers interested in promoting projects that matter. Content, campaigns, and community growth.",
              },
            ].map((job, i) => (
              <AnimatedSection key={job.role} delay={i * 0.1}>
                <GlassCard
                  title={job.role}
                  description={job.desc}
                  label="Open Role"
                >
                  <div className="mt-6">
                    <a
                      href="#apply"
                      className="text-label text-bbh-red hover:text-bbh-white transition-colors"
                    >
                      Apply Now &rarr;
                    </a>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
