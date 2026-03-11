import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import Marquee from "@/components/Marquee";

export default function MusesPage() {
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
            <span className="text-label text-bbh-red mb-4 block tracking-[0.3em]">
              The Musi Project
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="text-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] mb-8">
              Become a
              <br />
              <span className="text-editorial">Muse.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-bbh-gray-300 max-w-2xl leading-relaxed font-mono">
              We&apos;re searching for muses to be ambassadors for the Musi platform.
              An application &amp; interview process that opens the door to a career-launching
              platform built for human artistry.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHAT IS MUSI ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="glass-strong p-10 md:p-16 glow-red">
              <span className="text-label text-bbh-red mb-6 block">The Platform</span>
              <h2 className="text-display text-3xl md:text-5xl mb-8 max-w-4xl">
                Musi is a platform that launches your{" "}
                <span className="text-bbh-red glow-red-text">muse career</span>{" "}
                and service library.
              </h2>
              <p className="text-lg text-bbh-gray-300 max-w-2xl leading-relaxed font-mono">
                Once accepted as a muse ambassador, you gain access to tools and
                infrastructure designed to help you build, manage, and monetize your
                creative services. More details coming soon.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee text="MUSES" className="py-8" />

      {/* ─── PROCESS ─── */}
      <section className="border-y-2 border-bbh-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-gray-400 mb-4 block">
              The Process
            </span>
            <h2 className="text-display text-4xl md:text-6xl mb-16">
              How to <span className="text-editorial">apply</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Submit your application below. Tell us who you are, what you create, and why you want to be a muse. Share your portfolio, social presence, and vision.",
              },
              {
                step: "02",
                title: "Interview",
                desc: "Selected applicants are invited for a conversation. We want to understand your creative process, your goals, and how we can support your journey.",
              },
              {
                step: "03",
                title: "Onboard",
                desc: "Accepted muses gain access to the Musi platform. Your career launch begins — profile setup, service library creation, and ambassador onboarding.",
              },
            ].map((phase, i) => (
              <AnimatedSection key={phase.step} delay={i * 0.1}>
                <div className="glass-card p-8 h-full">
                  <span className="text-display text-5xl text-bbh-white/10 mb-4 block">
                    {phase.step}
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

      {/* ─── WHAT YOU GET ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-gray-400 mb-4 block">
              Benefits
            </span>
            <h2 className="text-display text-4xl md:text-6xl mb-16">
              What <span className="text-editorial">muses</span> get
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Career Launch Tools",
                desc: "Everything you need to establish your muse career — from profile creation to client management.",
              },
              {
                title: "Service Library",
                desc: "Build and manage your creative service offerings. Set your rates, define your scope, grow your portfolio.",
              },
              {
                title: "Ambassador Status",
                desc: "Be one of the first muses on the platform. Shape the culture and direction of Musi from the ground up.",
              },
              {
                title: "Community & Support",
                desc: "Join a community of purpose-driven creatives. Collaboration, mentorship, and shared growth.",
              },
            ].map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <GlassCard
                  title={benefit.title}
                  description={benefit.desc}
                  accent={i === 2}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t-2 border-bbh-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-display text-4xl md:text-6xl mb-6">
              Ready to be a <span className="text-bbh-red glow-red-text">muse?</span>
            </h2>
            <p className="text-lg text-bbh-gray-300 max-w-xl mx-auto mb-10 font-mono">
              Applications are open. Submit yours below and we&apos;ll be in touch.
            </p>
            <a
              href="#apply"
              className="inline-block bg-bbh-red px-12 py-5 text-label text-bbh-white hover:bg-bbh-white hover:text-bbh-black transition-all duration-300 border-2 border-bbh-red hover:border-bbh-white"
            >
              Apply Now
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
