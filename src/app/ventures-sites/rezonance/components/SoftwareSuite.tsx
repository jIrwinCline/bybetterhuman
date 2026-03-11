import { fieldTools, knowledgeApps } from "../data/softwareApps";

function AppRow({ app }: { app: { name: string; description: string } }) {
  return (
    <div className="flex flex-col items-center text-center py-4 border-b border-border-card last:border-b-0">
      <div className="w-8 h-8 border border-border-card rounded flex items-center justify-center mb-3">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#8A8680" strokeWidth="1.5" strokeLinecap="round">
          <rect x="2" y="2" width="12" height="12" rx="2" />
        </svg>
      </div>
      <h4 className="font-barlow font-semibold text-sm tracking-[0.08em] text-text-primary uppercase mb-1">
        {app.name}
      </h4>
      <p className="font-source text-text-secondary text-sm leading-relaxed">
        {app.description}
      </p>
    </div>
  );
}

export default function SoftwareSuite() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28 px-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="font-barlow font-bold text-2xl md:text-4xl lg:text-[48px] tracking-[0.04em] text-text-primary uppercase text-center mb-16 reveal">
          EVERY APP. PRE-CONFIGURED. READY TO USE.
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 reveal">
          <div>
            <h3 className="font-barlow font-semibold text-sm tracking-[0.2em] text-accent-brass uppercase mb-6 text-center">
              FIELD TOOLS
            </h3>
            {fieldTools.map((app, i) => (
              <AppRow key={i} app={app} />
            ))}
          </div>

          <div>
            <h3 className="font-barlow font-semibold text-sm tracking-[0.2em] text-accent-brass uppercase mb-6 text-center">
              KNOWLEDGE APPS
            </h3>
            {knowledgeApps.map((app, i) => (
              <AppRow key={i} app={app} />
            ))}
          </div>
        </div>

        <p className="text-center font-source text-accent-brass text-base mt-12 reveal">
          Every app tested. Every setting optimized. Bloatware removed. Airplane mode by default. Power on and go.
        </p>
      </div>
    </section>
  );
}
