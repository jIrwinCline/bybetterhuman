import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";

interface Concept {
  title: string;
  description: string;
  image?: string;
  url: string;
  stage: string;
  internal?: boolean;
}

const CONCEPTS: Concept[] = [
  {
    title: "Preparations 2027+",
    description:
      "The Low-Tech Shield: A field intelligence briefing on surviving autonomous threats through unconventional countermeasures, economic attrition, and the art of disappearing.",
    url: "/ventures/preparations-2027",
    stage: "Active",
    internal: true,
  },
];

function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <a
      href={concept.url}
      {...(concept.internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className="group glass-card flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-bbh-white/30 hover:bg-white/[0.08]"
    >
      {/* Image or title block */}
      {concept.image ? (
        <div className="aspect-[4/3] overflow-hidden bg-bbh-gray-800">
          <img
            src={concept.image}
            alt={concept.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] bg-bbh-gray-900 flex items-center justify-center px-6 border-b border-glass-border">
          <h3 className="text-display text-2xl md:text-3xl text-center group-hover:text-bbh-red transition-colors duration-300">
            {concept.title}
          </h3>
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {concept.image && (
          <h3 className="text-display text-lg mb-2 group-hover:text-bbh-red transition-colors duration-300">
            {concept.title}
          </h3>
        )}
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-[0.55rem] uppercase tracking-widest px-2 py-0.5 ${
              concept.stage === "Active"
                ? "bg-bbh-red/20 text-bbh-red border border-bbh-red/30"
                : concept.stage === "POC"
                  ? "bg-bbh-white/10 text-bbh-white border border-bbh-white/20"
                  : "bg-bbh-white/5 text-bbh-gray-400 border border-glass-border"
            }`}
          >
            {concept.stage}
          </span>
        </div>
        <p className="text-xs text-bbh-gray-400 leading-relaxed font-mono line-clamp-3">
          {concept.description}
        </p>
        <div className="mt-auto pt-4">
          <span className="text-[0.6rem] uppercase tracking-widest text-bbh-gray-400 group-hover:text-bbh-white transition-colors">
            View &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ConceptsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-32 md:py-44 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <a
              href="/ventures"
              className="text-label text-bbh-gray-400 hover:text-bbh-white transition-colors mb-4 inline-block tracking-[0.3em]"
            >
              &larr; Ventures
            </a>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="text-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] mb-8">
              Backlog
              <br />
              <span className="text-editorial">Projects</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-bbh-gray-300 max-w-2xl leading-relaxed font-mono">
              Early-stage ideas and proof-of-concept builds. Some will become
              ventures. Some will stay experiments. All push the boundaries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CONCEPTS GRID ─── */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {CONCEPTS.map((concept, i) => (
              <AnimatedSection key={concept.title} delay={i * 0.07}>
                <ConceptCard concept={concept} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee text="BACKLOG" className="py-8" />
    </>
  );
}
