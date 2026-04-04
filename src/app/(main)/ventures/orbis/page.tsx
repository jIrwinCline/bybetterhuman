"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";

const CORE_FEATURES = [
  {
    icon: "\u25C9",
    title: "Living Orbs",
    detail:
      "Every idea, task, note, and thought becomes a holographic orb floating in your visual space. Each orb has unique stats, colors, and animations that reflect its priority, age, and type — turning abstract thinking into something tangible.",
  },
  {
    icon: "\u25CE",
    title: "Grab & Expand",
    detail:
      "Reach out and pinch an orb to expand it into a full editing canvas. Resize, rewrite, reorganize — all through natural hand gestures. Close it and it shrinks back into the constellation, updated and alive.",
  },
  {
    icon: "\u25D4",
    title: "Voice-First AI",
    detail:
      "When an orb is open, speak into it. Leave voice memos, dictate notes, or give the AI a command — 'summarize this project,' 'break this into subtasks,' 'connect this to my marketing plan.' The AI listens, acts, and updates the orb in real time.",
  },
  {
    icon: "\u25D5",
    title: "Spatial Organization",
    detail:
      "Drag orbs through 3D space to cluster related ideas, push distractions to the periphery, or arrange a visual roadmap. Your spatial memory becomes your filing system. The AI learns your layout preferences over time.",
  },
];

const ORB_TYPES = [
  {
    name: "Idea Orbs",
    color: "text-cyan-400",
    glow: "bg-cyan-400/10 border-cyan-400/20",
    description: "Raw concepts and sparks. Pulsing gently, waiting to be shaped.",
    stats: "Luminosity: High | Density: Low | Decay: Slow",
  },
  {
    name: "Task Orbs",
    color: "text-bbh-red",
    glow: "bg-bbh-red/10 border-bbh-red/20",
    description: "Actionable items with deadlines. Orbit faster as due dates approach.",
    stats: "Luminosity: Medium | Density: High | Decay: Fast",
  },
  {
    name: "Memory Orbs",
    color: "text-amber-400",
    glow: "bg-amber-400/10 border-amber-400/20",
    description: "Voice memos, journal entries, saved thoughts. Warm and persistent.",
    stats: "Luminosity: Warm | Density: Medium | Decay: None",
  },
  {
    name: "Map Orbs",
    color: "text-emerald-400",
    glow: "bg-emerald-400/10 border-emerald-400/20",
    description: "Connected webs of related orbs. Expand to reveal entire thought systems.",
    stats: "Luminosity: Variable | Density: High | Decay: Adaptive",
  },
  {
    name: "AI Orbs",
    color: "text-violet-400",
    glow: "bg-violet-400/10 border-violet-400/20",
    description: "AI-generated suggestions, summaries, and connections. Created autonomously.",
    stats: "Luminosity: Shifting | Density: Low | Decay: On Dismiss",
  },
];

const EVOLUTION_PHASES = [
  {
    phase: "01",
    title: "Camera Overlay",
    description:
      "AR orbs rendered over your real-world camera feed. Phone and tablet first. Touch to grab, pinch to expand, voice to command.",
    status: "FIRST BUILD",
  },
  {
    phase: "02",
    title: "Spatial Anchoring",
    description:
      "Orbs anchor to real-world positions using ARKit/ARCore. Walk around your workspace and your ideas stay where you left them.",
    status: "NEXT",
  },
  {
    phase: "03",
    title: "Holographic Projection",
    description:
      "True 3D holographic display. Orbs exist as light objects in physical space. No screen required. Full hand-tracking interaction.",
    status: "VISION",
  },
];

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-violet-500/[0.02] blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[200px] h-[200px] rounded-full bg-bbh-red/[0.02] blur-[80px]" />

      <AnimatedSection delay={0} direction="up">
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-white/10 rounded-full text-xs tracking-[0.3em] uppercase text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Concept Project
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-9xl font-extralight tracking-tight text-white leading-[0.9] mb-6">
            Orbis
          </h1>

          <p className="text-editorial text-xl sm:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mt-4 mb-2">
            Your thoughts, floating in space
          </p>

          <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed mt-4">
            A visual notes tracker where ideas, tasks, and thoughts exist as
            holographic orbs — AI-powered, voice-driven, and organized by
            spatial intuition. Grab an orb, expand it, speak into it,
            move it through your world.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#features"
              className="px-8 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors"
            >
              EXPLORE THE VISION
            </a>
            <a
              href="#evolution"
              className="px-8 py-3 border border-white/20 text-white text-sm font-medium tracking-wide hover:border-white/40 transition-colors"
            >
              BUILD ROADMAP
            </a>
          </div>
        </div>
      </AnimatedSection>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-600">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

function OrbTypesSection() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection delay={0} direction="up">
          <div className="mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-600 block mb-4">
              Orb Taxonomy
            </span>
            <h2 className="text-4xl sm:text-5xl font-extralight text-white tracking-tight">
              Five Orb Classes
            </h2>
            <div className="w-16 h-px bg-white/20 mt-6" />
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {ORB_TYPES.map((orb, i) => (
            <AnimatedSection key={orb.name} delay={i * 0.1} direction="left">
              <div className={`flex flex-col sm:flex-row gap-6 p-6 sm:p-8 border ${orb.glow} hover:bg-white/[0.02] transition-colors group`}>
                <div className="shrink-0 flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full ${orb.color} mt-1.5 opacity-80`}
                    style={{ boxShadow: `0 0 12px currentColor` }} />
                  <div>
                    <h3 className={`text-lg font-light ${orb.color} mb-1`}>
                      {orb.name}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed font-light mb-2">
                      {orb.description}
                    </p>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-700 font-mono">
                      {orb.stats}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0} direction="up">
          <div className="mb-20">
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-600 block mb-4">
              Core Interactions
            </span>
            <h2 className="text-4xl sm:text-5xl font-extralight text-white tracking-tight">
              How It Works
            </h2>
            <div className="w-16 h-px bg-white/20 mt-6" />
          </div>
        </AnimatedSection>

        <div className="space-y-px">
          {CORE_FEATURES.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1} direction="left">
              <div className="flex gap-6 sm:gap-10 p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="text-3xl text-neutral-600 group-hover:text-cyan-400 transition-colors shrink-0 font-mono">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-light text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    {feature.detail}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function AISection() {
  const capabilities = [
    {
      command: '"Break this into subtasks"',
      result: "The orb splits into smaller orbs, each inheriting context and priority from the parent.",
    },
    {
      command: '"Summarize everything from this week"',
      result: "AI scans all orbs created in the last 7 days, generates a synthesis orb with key themes.",
    },
    {
      command: '"Connect this to my marketing plan"',
      result: "AI finds related orbs by semantic similarity and creates visible link threads between them.",
    },
    {
      command: '"What should I focus on right now?"',
      result: "AI evaluates deadlines, priority stats, and dependencies to surface the 3 most urgent orbs.",
    },
    {
      command: '"Turn this voice memo into action items"',
      result: "Transcribes audio, extracts actionable items, and spawns new task orbs automatically.",
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection delay={0} direction="up">
          <div className="mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-600 block mb-4">
              AI Engine
            </span>
            <h2 className="text-4xl sm:text-5xl font-extralight text-white tracking-tight">
              Speak. Command. Create.
            </h2>
            <div className="w-16 h-px bg-white/20 mt-6" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="up">
          <div className="border border-white/10 overflow-x-auto">
            <div className="min-w-[400px]">
              <div className="grid grid-cols-2 text-[10px] tracking-[0.2em] uppercase text-neutral-500 bg-white/[0.02] border-b border-white/10">
                <div className="px-5 py-4">Voice Command</div>
                <div className="px-5 py-4">AI Response</div>
              </div>

              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 text-sm border-b border-white/5 hover:bg-white/[0.02] transition-colors ${
                    i === capabilities.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <div className="px-5 py-4 text-cyan-400/80 font-light font-mono text-xs">
                    {cap.command}
                  </div>
                  <div className="px-5 py-4 text-neutral-400 font-light text-xs">
                    {cap.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function EvolutionSection() {
  return (
    <section id="evolution" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection delay={0} direction="up">
          <div className="mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-600 block mb-4">
              Build Trajectory
            </span>
            <h2 className="text-4xl sm:text-5xl font-extralight text-white tracking-tight">
              From Screen to Space
            </h2>
            <div className="w-16 h-px bg-white/20 mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
          {EVOLUTION_PHASES.map((phase, i) => (
            <AnimatedSection key={phase.phase} delay={i * 0.12} direction="up">
              <div className="bg-bbh-black p-8 sm:p-10 hover:bg-white/[0.01] transition-colors h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] tracking-[0.3em] text-neutral-600 font-mono">
                    PHASE {phase.phase}
                  </span>
                  <span
                    className={`text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 ${
                      phase.status === "FIRST BUILD"
                        ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                        : phase.status === "NEXT"
                          ? "bg-white/10 text-white border border-white/20"
                          : "bg-white/5 text-neutral-500 border border-white/10"
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <h3 className="text-xl font-light text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  {phase.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection delay={0} direction="up">
          <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-600 block mb-8">
            The End State
          </span>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extralight text-white leading-snug tracking-tight">
            &ldquo;What if your thoughts had weight, color, and presence —
            and you could reach out and hold them?&rdquo;
          </blockquote>
          <div className="w-12 h-px bg-white/20 mx-auto mt-10 mb-10" />
          <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-xl mx-auto">
            Orbis reimagines personal knowledge management as a spatial,
            physical experience. Not files in folders. Not lists in apps.
            Living objects in your world — each one a piece of your mind
            made visible, organized by intuition, and powered by AI that
            understands what you need before you ask.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function PageFooter() {
  return (
    <div className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-600">
          Orbis — Visual Notes Tracker
        </div>
        <div className="flex items-center gap-6 text-[11px] tracking-[0.15em] uppercase text-neutral-700">
          <a href="#features" className="hover:text-neutral-400 transition-colors">
            Features
          </a>
          <a href="#evolution" className="hover:text-neutral-400 transition-colors">
            Roadmap
          </a>
          <span className="text-neutral-800">&middot;</span>
          <span className="text-neutral-700">Concept Stage</span>
        </div>
      </div>
    </div>
  );
}

export default function OrbisPage() {
  return (
    <>
      {/* Back nav */}
      <div className="pt-8 px-6 md:px-10">
        <a
          href="/ventures/concepts"
          className="text-label text-bbh-gray-400 hover:text-bbh-white transition-colors tracking-[0.3em]"
        >
          &larr; Backlog
        </a>
      </div>

      <HeroSection />

      <Marquee
        text="VISUAL NOTES  ◆  HOLOGRAPHIC ORBS  ◆  AI-POWERED  ◆  VOICE-DRIVEN"
        className="py-4 border-b border-white/5"
      />

      <FeaturesSection />
      <OrbTypesSection />

      <Marquee
        text="GRAB  ◆  EXPAND  ◆  SPEAK  ◆  ORGANIZE  ◆  THINK IN SPACE"
        className="py-4 border-y border-white/5"
      />

      <AISection />
      <EvolutionSection />
      <VisionSection />
      <PageFooter />
    </>
  );
}
