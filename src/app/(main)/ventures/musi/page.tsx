import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";

export default function MusiProjectPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative py-32 md:py-44 px-6 md:px-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/images/muse-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-bbh-black via-bbh-black/80 to-bbh-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <a
              href="/ventures"
              className="text-label text-bbh-gray-400 hover:text-bbh-white transition-colors mb-4 inline-block tracking-[0.3em]"
            >
              &larr; Ventures
            </a>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="text-display text-[clamp(3rem,10vw,9rem)] leading-[0.85] mb-6">
              Musi
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-editorial text-xl md:text-2xl text-bbh-gray-100 max-w-xl mb-4">
              The muse platform
            </p>
            <p className="text-lg text-bbh-gray-300 max-w-2xl leading-relaxed font-mono">
              A platform designed to launch muse careers and service libraries.
              Empowering creative ambassadors with the tools to build, manage,
              and monetize their artistry in the age of AI.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PLACEHOLDER CONTENT ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="glass-strong p-10 md:p-16 glow-red text-center">
              <span className="text-label text-bbh-red mb-4 block">
                Deep Dive
              </span>
              <h2 className="text-display text-3xl md:text-5xl mb-6">
                Coming Soon
              </h2>
              <p className="text-lg text-bbh-gray-300 font-mono max-w-lg mx-auto">
                This project page is under construction. Full details, features,
                and launch timeline dropping soon.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Marquee text="MUSI" className="py-8" />
    </>
  );
}
