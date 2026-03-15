import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-20">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/©mariaknoll2018-9569-2_Crop-Web.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-bbh-black via-bbh-black/70 to-bbh-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <AnimatedSection delay={0.2}>
            <span className="text-label text-bbh-gray-300 mb-4 block tracking-[0.3em]">
              Venture Studio
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h1 className="text-display text-[clamp(3rem,12vw,10rem)] leading-[0.85] mb-6">
              By Better
              <br />
              <span className="text-stroke">Human</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <p className="text-editorial text-xl md:text-2xl text-bbh-gray-100 max-w-xl">
              Cultivating modern projects that create human purpose
              and business during and after an AI economy.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/ventures"
                className="border-brutal px-8 py-3 text-label hover:bg-bbh-white hover:text-bbh-black transition-all duration-300"
              >
                Our Ventures
              </a>
              <a
                href="/mentorship"
                className="border-brutal-red px-8 py-3 text-label text-bbh-red hover:bg-bbh-red hover:text-bbh-white transition-all duration-300"
              >
                Mentorship
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <AnimatedSection delay={1.2} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-float">
            <span className="text-label text-bbh-gray-400 text-[0.6rem]">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-bbh-white/40 to-transparent" />
          </div>
        </AnimatedSection>
      </section>

      {/* ─── MISSION STATEMENT ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="glass-main p-10 md:p-16 glow-red rounded-sm">
              <span className="text-label text-bbh-red mb-6 block">The Mission</span>
              <h2 className="text-display text-3xl md:text-5xl lg:text-6xl mb-8 max-w-4xl">
                We call this{" "}
                <span className="text-bbh-red glow-red-text">Preparation.</span>
              </h2>
              <p className="text-lg md:text-xl text-bbh-gray-300 max-w-2xl leading-relaxed font-mono">
                The AI economy is reshaping what it means to work, create, and thrive.
                We build ventures that ensure humans don&apos;t just survive the transition
                &mdash; they lead it. Purpose-first. Always.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee text="PREPARATION" className="py-8" />

      {/* ─── SECTIONS OVERVIEW ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-gray-400 mb-4 block">What We Do</span>
            <h2 className="text-display text-4xl md:text-6xl mb-16">
              Four <span className="text-editorial">pillars</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedSection delay={0.1}>
              <GlassCard
                label="01"
                title="Mentorship"
                subtitle="Launch in 4 months"
                description="A structured 4-month program to discover who you are, define your offer, and launch a personal brand and business built for the AI economy. Plus resources, books, and digital products."
                href="/mentorship"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <GlassCard
                label="02"
                title="Ventures"
                subtitle="Active projects"
                description="Our portfolio of purpose-driven ventures. Each project tackles a real gap in the human experience — from creator tools to community platforms. Deep dives into every active build."
                href="/ventures"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <GlassCard
                label="03"
                title="Muses"
                subtitle="Be an ambassador"
                description="The Musi app is searching for muses — creative ambassadors who want to launch their career on a platform designed to elevate human artistry in the age of AI."
                href="/muses"
                accent
              />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <GlassCard
                label="04"
                title="About"
                subtitle="The studio"
                description="The brand, the team, the vision. A deep dive on who we are, where we're going, and the people making it happen. Including our muse ambassadors and key collaborators."
                href="/about"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="border-y-2 border-bbh-white py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <AnimatedSection direction="left">
            <h2 className="text-display text-3xl md:text-5xl">
              Ready to <span className="text-bbh-red">build?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <a
              href="/mentorship"
              className="bg-bbh-red px-10 py-4 text-label text-bbh-white hover:bg-bbh-white hover:text-bbh-black transition-all duration-300 border-2 border-bbh-red hover:border-bbh-white"
            >
              Start Your Journey
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── MARQUEE BOTTOM ─── */}
      <Marquee text="BY BETTER HUMAN" className="py-12" />
    </>
  );
}
