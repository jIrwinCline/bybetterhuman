import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";

const VENTURES = [
  {
    id: "musi",
    name: "Musi",
    tagline: "The muse platform",
    description:
      "A platform designed to launch muse careers and service libraries. Empowering creative ambassadors with the tools to build, manage, and monetize their artistry in the age of AI.",
    status: "Active",
    image: "/images/muse-hero.jpg",
  },
  {
    id: "stoic-buddhist",
    name: "The Stoic Buddhist",
    tagline: "Ancient wisdom, modern purpose",
    description:
      "A content brand and digital product line at the intersection of Stoic philosophy and Buddhist practice. Books, courses, and community for those seeking clarity in chaos.",
    status: "Active",
    image: "/images/stoic-buddhist-code-cover.png",
  },
  {
    id: "jacob-rising",
    name: "Jacob Rising",
    tagline: "Personal brand & media",
    description:
      "The personal brand driving the studio. YouTube content, thought leadership, and community building around purpose-driven entrepreneurship in the AI economy.",
    status: "Active",
    image: "/images/youtube-feature.png",
  },
];

export default function VenturesPage() {
  return (
    <>
      {/* ─── BACKLOG BUTTON ─── */}
      <section className="pt-24 md:pt-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <a
              href="/ventures/concepts"
              className="group block w-full py-5 border border-glass-border-strong text-center transition-all duration-300 hover:bg-white/5 hover:border-bbh-white/30"
            >
              <span className="text-label text-bbh-gray-400 group-hover:text-bbh-white transition-colors tracking-[0.3em]">
                Backlog Projects &rarr;
              </span>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── HERO ─── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-red mb-4 block tracking-[0.3em]">
              Our Portfolio
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="text-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] mb-8">
              Ventures
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-bbh-gray-300 max-w-2xl leading-relaxed font-mono">
              Purpose-driven projects tackling real gaps in the human experience.
              Each venture is built to create lasting value &mdash; for people first,
              then for business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── VENTURES LIST ─── */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          {VENTURES.map((venture, i) => (
            <AnimatedSection key={venture.id} delay={i * 0.15}>
              <div
                className={`group border-t-2 border-bbh-white py-12 md:py-20 ${
                  i === VENTURES.length - 1 ? "border-b-2" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                  {/* Text */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-label text-bbh-gray-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-label text-bbh-red">{venture.status}</span>
                    </div>
                    <h2 className="text-display text-5xl md:text-7xl mb-3 group-hover:text-bbh-red transition-colors duration-500">
                      {venture.name}
                    </h2>
                    <p className="text-editorial text-xl md:text-2xl text-bbh-gray-300 mb-6">
                      {venture.tagline}
                    </p>
                    <p className="text-sm text-bbh-gray-400 leading-relaxed max-w-lg font-mono mb-8">
                      {venture.description}
                    </p>
                    <a
                      href={`/ventures/${venture.id}`}
                      className="inline-flex items-center gap-2 text-label text-bbh-white border-brutal px-6 py-3 hover:bg-bbh-white hover:text-bbh-black transition-all duration-300"
                    >
                      Deep Dive
                      <span className="group-hover:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </a>
                  </div>

                  {/* Image */}
                  <div
                    className={`${
                      i % 2 === 1 ? "lg:order-1" : ""
                    } overflow-hidden border border-glass-border`}
                  >
                    <div className="aspect-[4/3] bg-bbh-gray-800 overflow-hidden">
                      <img
                        src={venture.image}
                        alt={venture.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee text="VENTURES" className="py-8" />
    </>
  );
}
