import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";

export default function NicheDiscoveryPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-32 md:py-44 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <a
              href="/mentorship/lessons"
              className="text-label text-bbh-gray-400 hover:text-bbh-white transition-colors mb-4 inline-block tracking-[0.3em]"
            >
              &larr; Better Lessons
            </a>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="text-display text-[clamp(2.5rem,8vw,5rem)] leading-[0.85] mb-8">
              Niche
              <br />
              <span className="text-editorial">Discovery</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="glass-card p-6 md:p-8 max-w-3xl">
              <p className="text-lg md:text-xl text-bbh-gray-300 leading-relaxed font-mono">
                This is a brainstorming document that will help you discover a
                niche that could use your expertise. The goal isn&apos;t to pick
                the &ldquo;perfect&rdquo; idea &mdash; it&apos;s to think
                intentionally about who you are, what you&apos;ve done, and
                where opportunity actually lives.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHY NICHE DOWN ─── */}
      <section className="border-y-2 border-bbh-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-red mb-4 block tracking-[0.3em]">
              The Problem
            </span>
            <h2 className="text-display text-3xl md:text-5xl mb-8">
              Trying to serve everyone means you{" "}
              <span className="text-editorial">stand out to no one.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-base md:text-lg text-bbh-gray-300 leading-relaxed font-mono">
              <p>
                Most people start a business by thinking about what they
                want to sell. That&apos;s backwards. The businesses that win
                are the ones built around a specific group of people with a
                specific pain point &mdash; and someone who actually understands
                that pain because they&apos;ve lived near it.
              </p>
              <p>
                Niching down to specific industry pain points is how small
                operators beat bigger competitors. A generalist web designer
                competes with everyone. A web designer who only builds sites
                for plumbing companies? That person owns a market.
              </p>
              <p>
                This walkthrough is designed to help you find that intersection
                &mdash; where your experience, your skills, and a real market
                need all overlap. Let&apos;s think through it.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 1: YOUR HISTORY ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-red mb-4 block tracking-[0.3em]">
              Thought Bubble 1
            </span>
            <h2 className="text-display text-3xl md:text-5xl mb-8">
              What have you been paid to do{" "}
              <span className="text-editorial">in the past?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-base md:text-lg text-bbh-gray-300 leading-relaxed font-mono">
              <p>
                This is the big one. Not what you studied. Not what you
                &ldquo;want&rdquo; to do. What have people actually handed
                you money for? Every job, freelance gig, side hustle, or
                business you&apos;ve touched &mdash; that&apos;s data.
              </p>
              <p>
                Have you started other businesses before? What were those
                industries? What did you learn? Even if they failed &mdash;
                especially if they failed &mdash; there are insights buried
                in that experience. You learned what works, what
                doesn&apos;t, what you hated, and what came naturally.
              </p>
              <p>
                Think broadly. Managed a restaurant? You understand food
                service ops. Sold insurance? You know how to close.
                Worked construction? You know what contractors actually
                need versus what tech companies think they need.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="mt-10 glass-card p-6 md:p-8">
              <span className="text-label text-bbh-gray-400 mb-3 block">
                Brainstorm
              </span>
              <ul className="space-y-3 text-sm text-bbh-gray-400 font-mono">
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  List every job, gig, or business you&apos;ve been involved in.
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  What industries have you touched? Which ones did you actually understand?
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  What did your past businesses or roles teach you about how those industries work?
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  What problems did you see from the inside that outsiders wouldn&apos;t know about?
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 2: NATURAL GRAVITY ─── */}
      <section className="border-y-2 border-bbh-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-red mb-4 block tracking-[0.3em]">
              Thought Bubble 2
            </span>
            <h2 className="text-display text-3xl md:text-5xl mb-8">
              What do people{" "}
              <span className="text-editorial">come to you for?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-base md:text-lg text-bbh-gray-300 leading-relaxed font-mono">
              <p>
                Think about what friends, family, coworkers, or past clients
                ask you to help with &mdash; even when it&apos;s not your job.
                The things people naturally trust you to handle. This reveals
                invisible expertise you might be taking for granted.
              </p>
              <p>
                If three different people have asked you the same kind of
                question, that&apos;s not coincidence. That&apos;s signal.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="mt-10 glass-card p-6 md:p-8">
              <span className="text-label text-bbh-gray-400 mb-3 block">
                Brainstorm
              </span>
              <ul className="space-y-3 text-sm text-bbh-gray-400 font-mono">
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  What do people ask your opinion on?
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  What tasks do people hand off to you because they trust your judgment?
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  What&apos;s something you explain to others regularly that feels obvious to you?
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 3: UNFAIR ADVANTAGES ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-red mb-4 block tracking-[0.3em]">
              Thought Bubble 3
            </span>
            <h2 className="text-display text-3xl md:text-5xl mb-8">
              What can you do{" "}
              <span className="text-editorial">better than most?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-base md:text-lg text-bbh-gray-300 leading-relaxed font-mono">
              <p>
                Not world-class. Not top 1%. Just better than the people
                around you. Skills that feel easy to you but hard for
                others &mdash; those are your unfair advantages.
              </p>
              <p>
                This could be a hard skill like design or bookkeeping, or a
                soft skill like explaining complex things simply, staying
                calm under pressure, or seeing patterns other people miss.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="mt-10 glass-card p-6 md:p-8">
              <span className="text-label text-bbh-gray-400 mb-3 block">
                Brainstorm
              </span>
              <ul className="space-y-3 text-sm text-bbh-gray-400 font-mono">
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  What feels effortless to you that other people struggle with?
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  What compliments do you get that you tend to brush off?
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  If someone had 30 days to learn one of your skills, what would take them the longest?
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 4: INDUSTRY + INTEREST ─── */}
      <section className="border-y-2 border-bbh-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-red mb-4 block tracking-[0.3em]">
              Thought Bubble 4
            </span>
            <h2 className="text-display text-3xl md:text-5xl mb-8">
              What industries{" "}
              <span className="text-editorial">interest you?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-base md:text-lg text-bbh-gray-300 leading-relaxed font-mono">
              <p>
                Interest matters because you&apos;re going to spend a lot of
                time in this space. If the industry bores you, you won&apos;t
                last. But interest alone isn&apos;t enough &mdash; you also
                need to ask: what industries do you have real experience in?
              </p>
              <p>
                Experience gives you credibility and shortcuts. You already
                know the language, the frustrations, and the gaps. That&apos;s
                a massive head start over someone entering a space cold.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="mt-10 glass-card p-6 md:p-8">
              <span className="text-label text-bbh-gray-400 mb-3 block">
                Brainstorm
              </span>
              <ul className="space-y-3 text-sm text-bbh-gray-400 font-mono">
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  What industries have you worked in or around?
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  Which of those would you actually enjoy going deeper into?
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  What industries do you follow, read about, or have opinions on &mdash; even without being asked?
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  Is there something you love doing that could be the service itself?
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 5: WHO NEEDS THIS ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-red mb-4 block tracking-[0.3em]">
              Thought Bubble 5
            </span>
            <h2 className="text-display text-3xl md:text-5xl mb-8">
              Who actually{" "}
              <span className="text-editorial">needs your services?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-base md:text-lg text-bbh-gray-300 leading-relaxed font-mono">
              <p>
                Now take everything above and point it at a real market.
                Do the research. Open Google. Search your industry + your
                service and see what pops up.
              </p>
              <p>
                Are there competitors? Good &mdash; that means there&apos;s
                demand. Are the existing options generic, outdated, or
                clearly not built by someone who understands the space?
                Even better &mdash; that&apos;s your opening.
              </p>
              <p>
                The magic is in the combination. Not just &ldquo;social
                media marketing&rdquo; &mdash; but social media marketing
                for a specific type of business with specific problems.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="mt-10 glass-card p-6 md:p-8">
              <span className="text-label text-bbh-gray-400 mb-3 block">
                Brainstorm
              </span>
              <ul className="space-y-3 text-sm text-bbh-gray-400 font-mono">
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  Search &ldquo;[your service] for [your industry]&rdquo; on Google. What comes up?
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  Are businesses in that space actively paying for this kind of help?
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  What are they complaining about in forums, reviews, or social media?
                </li>
                <li className="flex gap-3">
                  <span className="text-bbh-red shrink-0">&rsaquo;</span>
                  Can you offer something meaningfully better because of your insider knowledge?
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 6: EXAMPLES ─── */}
      <section className="border-y-2 border-bbh-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-label text-bbh-red mb-4 block tracking-[0.3em]">
              Thought Bubble 6
            </span>
            <h2 className="text-display text-3xl md:text-5xl mb-8">
              What could this{" "}
              <span className="text-editorial">look like?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-base md:text-lg text-bbh-gray-300 leading-relaxed font-mono mb-10">
              Here are real examples of niched-down ideas. Notice how each
              one pairs a skill with a specific audience. That specificity
              is what makes them viable.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Social media for restaurants",
                desc: "You understand food culture, local marketing, and what makes people walk through a door. Most restaurant owners don't have time to post — let alone strategize.",
              },
              {
                title: "Websites for home service businesses",
                desc: "Plumbers, electricians, HVAC — they all need a site that generates calls. You know the industry, you build the sites. Simple, repeatable, profitable.",
              },
              {
                title: "AI automations for lawyers",
                desc: "Law firms drown in repetitive admin. If you understand AI tooling and legal workflows, you can save them dozens of hours a month.",
              },
              {
                title: "Office space cleaning or redecorating",
                desc: "A physical service with clear before-and-after value. Commercial spaces always need refreshing — and most cleaning companies are generic.",
              },
              {
                title: "Online yoga 1-on-1 sessions",
                desc: "You love yoga. You're good at teaching it. You don't need a studio — just a camera, a mat, and people who want personalized guidance.",
              },
              {
                title: "Travel planning as a service",
                desc: "If you're the person everyone asks to plan their trips, that's a business. Curated itineraries, booking management, local knowledge — packaged and sold.",
              },
            ].map((example, i) => (
              <AnimatedSection key={example.title} delay={i * 0.07}>
                <div className="glass-card p-6 h-full">
                  <h3 className="text-display text-lg mb-2">{example.title}</h3>
                  <p className="text-sm text-bbh-gray-400 leading-relaxed font-mono">
                    {example.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <div className="mt-10 text-base md:text-lg text-bbh-gray-300 leading-relaxed font-mono">
              <p>
                Your version of this might be completely different. The
                point isn&apos;t to copy an example &mdash; it&apos;s to
                see the pattern. <span className="text-bbh-white">Skill + specific audience + real
                pain point = niche.</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CLOSING ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-display text-3xl md:text-5xl mb-8">
              Now <span className="text-editorial">go think.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-base md:text-lg text-bbh-gray-300 leading-relaxed font-mono max-w-2xl mx-auto mb-10">
              Grab a notebook. Walk through each thought bubble. Write
              down whatever comes to mind &mdash; don&apos;t filter it.
              The niche reveals itself when you stop trying to be clever
              and start being honest about what you already know.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <a
              href="/mentorship#apply"
              className="inline-flex items-center gap-2 text-label text-bbh-white border-brutal px-6 py-3 hover:bg-bbh-white hover:text-bbh-black transition-all duration-300 tracking-[0.3em]"
            >
              Book a Discovery Call
              <span>&rarr;</span>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee text="DISCOVER" className="py-8" />
    </>
  );
}
