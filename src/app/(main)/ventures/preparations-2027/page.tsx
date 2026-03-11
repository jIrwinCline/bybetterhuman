"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";
import GlassCard from "@/components/GlassCard";

const CHAPTERS = [
  {
    id: "01",
    title: "The Mosquito & The Sledgehammer",
    subtitle: "Introduction to Asymmetric Drone Warfare",
    accent: "#ffffff",
    label: "CHAPTER 01",
    description:
      "The most lethal threat isn't a million-dollar cruise missile — it's a $500 consumer drone. Platforms like the DJI Mavic function as a swarm of mosquitoes: individually fragile, collectively overwhelming. Even if ninety-eight are neutralized, the one or two carrying a grenade payload can be catastrophic. As legacy military-industrial hardware fails to scale, a hacker mindset emerges — valuing cost-effective, unconventional solutions over the sledgehammers of the defense industry.",
  },
  {
    id: "02",
    title: "The Renaissance of the 12-Gauge",
    subtitle: "Why Shotguns Are Beating Rifles",
    accent: "#d4d4d4",
    label: "CHAPTER 02",
    description:
      'A standard Kalashnikov is a poor tool for drone interdiction — hitting a 100mph target with a single 7.62mm round requires near-perfect precision under extreme stress. The 12-gauge shotgun creates a high-density kill zone that compensates for human error. The Remington 870, the Benelli Super Black Eagle "Goldie," and the 10-gauge Browning BPS are all proving effective. This return to shotgunnery echoes historical anti-aircraft fundamentals.',
  },
  {
    id: "03",
    title: "The DIY Microwave Cannon",
    subtitle: "Kitchen-Sink Electronic Warfare",
    accent: "#a3a3a3",
    label: "CHAPTER 03",
    description:
      "While professional EW nodes cost $10,000+, garage mechanics build effective interdictors for under $40. A cavity magnetron scavenged from a discarded microwave oven, paired with a horn antenna at a 15–18° half-angle, creates a potent directed-energy weapon. The pulses don't fry the drone — they induce massive voltage spikes through internal wiring, forcing microcontroller shutdown. A 2.5 GHz magnetron can drop a drone on 1.3 GHz because it bypasses signal jamming entirely.",
  },
  {
    id: "04",
    title: '"The Invisible" Soldier',
    subtitle: "Master Passive Countermeasures",
    accent: "#737373",
    label: "CHAPTER 04",
    description:
      'Active defense is a last resort. The primary imperative is to defeat the drone\'s sensors and disappear from the autonomous surveillance grid. Thermal discipline is paramount — UAVs can detect body heat, cigarette smoke, even urine. Water, rain, and dust naturally defeat LiDAR and optical sensors. Thermal blankets mask signatures from AI targeting. Trench systems with frequent sharp turns break line-of-sight against suicide drones requiring linear flight paths.',
  },
  {
    id: "05",
    title: "The 30km Fiber Optic Leash",
    subtitle: "The Unjammable Threat",
    accent: "#525252",
    label: "CHAPTER 05",
    description:
      "The most counter-intuitive pivot: returning to a physical connection. Fiber optic drones replace RF communication with a hair-thin cable spooling from a soda-can-sized cylinder, extending up to 30km. This link is completely immune to electromagnetic interference — making microwave cannons and jammers useless. Operators wrap circuitry in aluminum foil for additional EW shielding. At ~$1,000 per mission, it renders the entire electromagnetic spectrum irrelevant.",
  },
  {
    id: "06",
    title: "The Economics of Attrition",
    subtitle: "Why $1 Always Beats $1,000",
    accent: "#404040",
    label: "CHAPTER 06",
    description:
      "The ultimate strategic lesson: war is economic attrition. If a $1 weapon forces a $1,000 countermeasure, the defender is losing. The efficacy of $40 DIY microwave generators and surplus shotguns proves that simplicity and low cost are the only viable survival strategies against high-volume threats. Cost-effective scalability is not a budget constraint — it is a tactical imperative.",
  },
];

const SURVIVAL_STATS = [
  { value: "$500", label: "Cost of a lethal consumer drone" },
  { value: "$40", label: "DIY microwave cannon build cost" },
  { value: "30km", label: "Fiber optic drone tether range" },
  { value: "100mph", label: "Standard FPV attack speed" },
  { value: "36°", label: "Optimal horn antenna beam width" },
  { value: "2.5GHz", label: "Magnetron operating frequency" },
];

const COUNTERMEASURE_MATRIX = [
  {
    threat: "RF-Controlled Swarm",
    counter: "DIY Microwave Cannon",
    cost: "$40",
    effectiveness: "HIGH",
  },
  {
    threat: "Single Recon Drone",
    counter: "12-Gauge Shotgun",
    cost: "$300",
    effectiveness: "HIGH",
  },
  {
    threat: "Thermal Surveillance",
    counter: "IR Blankets + Discipline",
    cost: "$20",
    effectiveness: "MEDIUM",
  },
  {
    threat: "Fiber Optic Drone",
    counter: "Shotgun / Laser Only",
    cost: "$300+",
    effectiveness: "LOW",
  },
  {
    threat: "AI Targeting Grid",
    counter: "Passive Invisibility",
    cost: "$0",
    effectiveness: "MEDIUM",
  },
  {
    threat: "Suicide Drone (Linear)",
    counter: "Sharp-Turn Trenches",
    cost: "$0",
    effectiveness: "HIGH",
  },
];

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.02] blur-[120px]" />

      <AnimatedSection delay={0} direction="up">
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-white/10 rounded-full text-xs tracking-[0.3em] uppercase text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Field Intelligence Briefing
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-9xl font-extralight tracking-tight text-white leading-[0.9] mb-6">
            Preparations
            <br />
            <span className="font-light text-neutral-400">2027</span>
            <span className="text-white font-normal">+</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed mt-8">
            The Low-Tech Shield: Surviving autonomous threats through
            unconventional countermeasures, economic attrition, and the art of
            disappearing.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#chapters"
              className="px-8 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors"
            >
              READ THE BRIEFING
            </a>
            <a
              href="#matrix"
              className="px-8 py-3 border border-white/20 text-white text-sm font-medium tracking-wide hover:border-white/40 transition-colors"
            >
              COUNTERMEASURE MATRIX
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

function StatsBar() {
  return (
    <section className="border-b border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {SURVIVAL_STATS.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.08} direction="up">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extralight text-white tracking-tight font-mono">
                {stat.value}
              </div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-neutral-600 mt-2 leading-tight">
                {stat.label}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function ChaptersSection() {
  return (
    <section id="chapters" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0} direction="up">
          <div className="mb-20">
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-600 block mb-4">
              Intelligence Chapters
            </span>
            <h2 className="text-4xl sm:text-5xl font-extralight text-white tracking-tight">
              The Field Manual
            </h2>
            <div className="w-16 h-px bg-white/20 mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHAPTERS.map((chapter, i) => (
            <AnimatedSection
              key={chapter.id}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <GlassCard
                title={chapter.title}
                subtitle={chapter.subtitle}
                description={chapter.description}
                label={chapter.label}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountermeasureMatrix() {
  return (
    <section id="matrix" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection delay={0} direction="up">
          <div className="mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-600 block mb-4">
              Tactical Reference
            </span>
            <h2 className="text-4xl sm:text-5xl font-extralight text-white tracking-tight">
              Countermeasure Matrix
            </h2>
            <div className="w-16 h-px bg-white/20 mt-6" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="up">
          <div className="border border-white/10 overflow-x-auto">
            <div className="min-w-[500px]">
              <div className="grid grid-cols-4 text-[10px] tracking-[0.2em] uppercase text-neutral-500 bg-white/[0.02] border-b border-white/10">
                <div className="px-5 py-4">Threat Vector</div>
                <div className="px-5 py-4">Countermeasure</div>
                <div className="px-5 py-4">Unit Cost</div>
                <div className="px-5 py-4">Rating</div>
              </div>

              {COUNTERMEASURE_MATRIX.map((row, i) => (
                <div
                  key={row.threat}
                  className={`grid grid-cols-4 text-sm border-b border-white/5 hover:bg-white/[0.02] transition-colors ${
                    i === COUNTERMEASURE_MATRIX.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <div className="px-5 py-4 text-neutral-300 font-light">
                    {row.threat}
                  </div>
                  <div className="px-5 py-4 text-neutral-400 font-light font-mono text-xs">
                    {row.counter}
                  </div>
                  <div className="px-5 py-4 text-white font-mono text-xs">
                    {row.cost}
                  </div>
                  <div className="px-5 py-4">
                    <span
                      className={`inline-flex px-2 py-0.5 text-[10px] tracking-[0.15em] uppercase font-medium ${
                        row.effectiveness === "HIGH"
                          ? "bg-white/10 text-white"
                          : row.effectiveness === "MEDIUM"
                            ? "bg-white/5 text-neutral-400"
                            : "bg-white/[0.02] text-neutral-600"
                      }`}
                    >
                      {row.effectiveness}
                    </span>
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

function KeyPrinciples() {
  const principles = [
    {
      num: "I",
      title: "Cost Asymmetry",
      text: "If your defense costs more than the attack, you are losing. Match $1 threats with $1 counters.",
    },
    {
      num: "II",
      title: "Passive First",
      text: "The best defense is never being seen. Defeat sensors before engaging weapons.",
    },
    {
      num: "III",
      title: "Frequency Agnostic",
      text: "Attack hardware, not signals. Voltage spikes bypass all encryption and frequency hopping.",
    },
    {
      num: "IV",
      title: "Physical Supremacy",
      text: "When the electromagnetic spectrum fails, only kinetic and physical barriers remain.",
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection delay={0} direction="up">
          <div className="mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-600 block mb-4">
              Foundational Doctrine
            </span>
            <h2 className="text-4xl sm:text-5xl font-extralight text-white tracking-tight">
              Core Principles
            </h2>
            <div className="w-16 h-px bg-white/20 mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
          {principles.map((p, i) => (
            <AnimatedSection key={p.num} delay={i * 0.12} direction="up">
              <div className="bg-bbh-black p-8 sm:p-10 hover:bg-white/[0.01] transition-colors h-full">
                <span className="text-[11px] tracking-[0.3em] text-neutral-600 font-mono">
                  {p.num}
                </span>
                <h3 className="text-xl font-light text-white mt-3 mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  {p.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function PassiveDefenseGuide() {
  const tactics = [
    {
      icon: "\u25D0",
      title: "Thermal Discipline",
      detail:
        "Eliminate all heat signatures. No cigarettes, no open flames. Use terrain masking. UAV thermal cameras detect body heat, smoke, and even urine from altitude.",
    },
    {
      icon: "\u25D1",
      title: "Environmental Exploitation",
      detail:
        "Rain, dust storms, fog, and water naturally defeat LiDAR, optical, and IR sensors. Operate during adverse weather windows — bad weather is strategic advantage.",
    },
    {
      icon: "\u25D2",
      title: "Material Shielding",
      detail:
        "Thermal blankets and IR-dampening materials mask human signatures from AI-driven targeting algorithms. Aluminum foil wrapping shields electronics from EW pulses.",
    },
    {
      icon: "\u25D3",
      title: "Infrastructure Design",
      detail:
        "Trench systems with frequent sharp turns break line-of-sight. Suicide drones require linear flight paths to detonate — angular geometry is your architecture of survival.",
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection delay={0} direction="up">
          <div className="mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-600 block mb-4">
              Survival Protocol
            </span>
            <h2 className="text-4xl sm:text-5xl font-extralight text-white tracking-tight">
              How to Disappear
            </h2>
            <div className="w-16 h-px bg-white/20 mt-6" />
          </div>
        </AnimatedSection>

        <div className="space-y-px">
          {tactics.map((t, i) => (
            <AnimatedSection key={t.title} delay={i * 0.1} direction="left">
              <div className="flex gap-6 sm:gap-10 p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="text-3xl text-neutral-600 group-hover:text-white transition-colors shrink-0 font-mono">
                  {t.icon}
                </div>
                <div>
                  <h3 className="text-lg font-light text-white mb-2">
                    {t.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    {t.detail}
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

function ConclusionSection() {
  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection delay={0} direction="up">
          <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-600 block mb-8">
            Beyond the Radio Wave
          </span>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extralight text-white leading-snug tracking-tight">
            &ldquo;In a world where the sky is constantly watching and the
            electromagnetic spectrum is a cluttered battlefield, is the only true
            defense learning how to disappear entirely?&rdquo;
          </blockquote>
          <div className="w-12 h-px bg-white/20 mx-auto mt-10 mb-10" />
          <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-xl mx-auto">
            We are witnessing a rapid evolution from high-tech military-industrial
            hardware back toward adaptive, last-resort solutions. When
            sophisticated electronics are jammed or bypassed by fiber optics, the
            12-gauge shotgun and repurposed microwave components become the primary
            line of defense. The technical requirements for survival change daily.
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
          Preparations 2027+ — Field Intelligence Archive
        </div>
        <div className="flex items-center gap-6 text-[11px] tracking-[0.15em] uppercase text-neutral-700">
          <a href="#chapters" className="hover:text-neutral-400 transition-colors">
            Chapters
          </a>
          <a href="#matrix" className="hover:text-neutral-400 transition-colors">
            Matrix
          </a>
          <span className="text-neutral-800">&middot;</span>
          <span className="text-neutral-700">Informational Use Only</span>
        </div>
      </div>
    </div>
  );
}

export default function PreparationsPage() {
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

      <Marquee text="FIELD INTELLIGENCE  ◆  ASYMMETRIC COUNTERMEASURES  ◆  LOW-TECH SHIELD" className="py-4 border-b border-white/5" />

      <StatsBar />
      <ChaptersSection />

      <Marquee text="$1 ALWAYS BEATS $1,000  ◆  DISAPPEAR FROM THE GRID  ◆  FREQUENCY AGNOSTIC" className="py-4 border-y border-white/5" />

      <CountermeasureMatrix />
      <KeyPrinciples />
      <PassiveDefenseGuide />
      <ConclusionSection />
      <PageFooter />
    </>
  );
}
