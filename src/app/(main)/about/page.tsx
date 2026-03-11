import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import Marquee from "@/components/Marquee";

const TEAM = [
  {
    name: "Jacob",
    role: "Founder & Creative Director",
    desc: "Builder, thinker, creator. Driving the mission of human purpose through ventures, content, and community.",
  },
];

const SOCIALS = [
  { platform: "YouTube", handle: "@JacobRising", url: "https://youtube.com/@JacobRising" },
  { platform: "Instagram", handle: "@jacobrising", url: "https://instagram.com/jacobrising" },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-32 md:py-44 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-red mb-4 block tracking-[0.3em]">
              About
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="text-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] mb-8">
              The studio
              <br />
              <span className="text-editorial">behind the mission.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-bbh-gray-300 max-w-2xl leading-relaxed font-mono">
              By Better Human is a venture studio cultivating modern projects that
              create human purpose and business during and after an AI economy.
              Everything we build starts with one question: does this make humans better?
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="border-y-2 border-bbh-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-label text-bbh-gray-400 mb-4 block">Philosophy</span>
              <h2 className="text-display text-4xl md:text-6xl mb-8">
                Preparation,
                <br />
                <span className="text-bbh-red">not panic.</span>
              </h2>
              <p className="text-lg text-bbh-gray-300 leading-relaxed font-mono mb-6">
                The AI economy isn&apos;t a threat &mdash; it&apos;s a filter. Those who know
                who they are, what they offer, and how to deliver it will thrive. Those
                who wait will be replaced.
              </p>
              <p className="text-lg text-bbh-gray-300 leading-relaxed font-mono">
                We don&apos;t sell fear. We build infrastructure. Every venture, every
                mentorship, every resource we create is designed to prepare humans for
                what&apos;s next &mdash; and to make that preparation feel like purpose.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-strong p-10 glow-red">
                <div className="space-y-6">
                  {[
                    { value: "Purpose", label: "Every venture starts with human purpose, not market opportunity." },
                    { value: "Preparation", label: "We build for what's coming, not what's comfortable." },
                    { value: "Practice", label: "We ship, test, learn, and iterate. Ideas are cheap — execution is everything." },
                  ].map((principle) => (
                    <div key={principle.value} className="border-b border-glass-border pb-6 last:border-0 last:pb-0">
                      <h3 className="text-display text-2xl text-bbh-red mb-2">
                        {principle.value}
                      </h3>
                      <p className="text-sm text-bbh-gray-300 font-mono">
                        {principle.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee text="BY BETTER HUMAN" className="py-8" />

      {/* ─── TEAM ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-gray-400 mb-4 block">The Team</span>
            <h2 className="text-display text-4xl md:text-6xl mb-16">
              People <span className="text-editorial">building this</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEAM.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <GlassCard
                  title={member.name}
                  subtitle={member.role}
                  description={member.desc}
                  accent
                />
              </AnimatedSection>
            ))}

            {/* Placeholder for muse ambassadors */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 h-full flex flex-col items-center justify-center text-center">
                <span className="text-display text-4xl text-bbh-white/10 mb-4">+</span>
                <h3 className="text-display text-xl mb-2">Muse Ambassadors</h3>
                <p className="text-sm text-bbh-gray-400 font-mono">
                  Coming soon. Our first class of muses will be featured here.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="glass-card p-8 h-full flex flex-col items-center justify-center text-center">
                <span className="text-display text-4xl text-bbh-white/10 mb-4">+</span>
                <h3 className="text-display text-xl mb-2">Join the Team</h3>
                <p className="text-sm text-bbh-gray-400 font-mono mb-4">
                  We&apos;re always looking for talented people.
                </p>
                <a
                  href="/mentorship#apply"
                  className="text-label text-bbh-red hover:text-bbh-white transition-colors"
                >
                  See Open Roles &rarr;
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── ACCOUNTS / CONNECT ─── */}
      <section className="border-t-2 border-bbh-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-gray-400 mb-4 block">Connect</span>
            <h2 className="text-display text-4xl md:text-6xl mb-16">
              Find us <span className="text-editorial">everywhere</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {SOCIALS.map((social, i) => (
              <AnimatedSection key={social.platform} delay={i * 0.1}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-8 block group"
                >
                  <span className="text-label text-bbh-gray-400 mb-2 block">
                    {social.platform}
                  </span>
                  <span className="text-display text-2xl group-hover:text-bbh-red transition-colors">
                    {social.handle}
                  </span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
