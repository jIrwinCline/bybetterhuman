import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";

interface Lesson {
  title: string;
  description: string;
  image?: string;
  url: string;
  stage: string;
  internal?: boolean;
}

const LESSONS: Lesson[] = [
  {
    title: "Niche Discovery",
    description:
      "A guided brainstorming walkthrough to help you discover a niche that could use your expertise. Map your experience, skills, and solved problems against real market needs.",
    url: "/mentorship/lessons/niche-discovery",
    stage: "Active",
    internal: true,
  },
];

function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <a
      href={lesson.url}
      {...(lesson.internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className="group glass-card flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-bbh-white/30 hover:bg-white/[0.08]"
    >
      {/* Image or title block */}
      {lesson.image ? (
        <div className="aspect-[4/3] overflow-hidden bg-bbh-gray-800">
          <img
            src={lesson.image}
            alt={lesson.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] bg-bbh-gray-900 flex items-center justify-center px-6 border-b border-glass-border">
          <h3 className="text-display text-2xl md:text-3xl text-center group-hover:text-bbh-red transition-colors duration-300">
            {lesson.title}
          </h3>
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {lesson.image && (
          <h3 className="text-display text-lg mb-2 group-hover:text-bbh-red transition-colors duration-300">
            {lesson.title}
          </h3>
        )}
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-[0.55rem] uppercase tracking-widest px-2 py-0.5 ${
              lesson.stage === "Active"
                ? "bg-bbh-red/20 text-bbh-red border border-bbh-red/30"
                : lesson.stage === "Draft"
                  ? "bg-bbh-white/10 text-bbh-white border border-bbh-white/20"
                  : "bg-bbh-white/5 text-bbh-gray-400 border border-glass-border"
            }`}
          >
            {lesson.stage}
          </span>
        </div>
        <p className="text-xs text-bbh-gray-400 leading-relaxed font-mono line-clamp-3">
          {lesson.description}
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

export default function LessonsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-32 md:py-44 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <a
              href="/mentorship"
              className="text-label text-bbh-gray-400 hover:text-bbh-white transition-colors mb-4 inline-block tracking-[0.3em]"
            >
              &larr; Mentorship
            </a>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="text-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] mb-8">
              Better
              <br />
              <span className="text-editorial">Lessons</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-bbh-gray-300 max-w-2xl leading-relaxed font-mono">
              Step-by-step walkthroughs for building your brand, business, and
              digital presence. Practical lessons you can follow at your own pace.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LESSONS GRID ─── */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          {LESSONS.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {LESSONS.map((lesson, i) => (
                <AnimatedSection key={lesson.title} delay={i * 0.07}>
                  <LessonCard lesson={lesson} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div className="glass-card p-12 text-center">
                <p className="text-bbh-gray-400 font-mono">
                  Lessons coming soon. Check back shortly.
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee text="LESSONS" className="py-8" />
    </>
  );
}
