import { phoneSpecs, phoneNarrative } from "../data/phoneSpecs";

export default function WhyThisPhone() {
  return (
    <section className="bg-bg-primary py-20 md:py-28 px-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="font-barlow font-bold text-2xl md:text-4xl lg:text-[48px] tracking-[0.04em] text-text-primary uppercase text-center mb-16 reveal">
          WHY THE SAMSUNG GALAXY XCOVER6 PRO
        </h2>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 reveal">
          {/* Spec table */}
          <div className="bg-bg-card border border-border-card rounded p-6 md:p-8">
            <table className="w-full">
              <tbody>
                {phoneSpecs.map((spec, i) => (
                  <tr key={i} className="border-b border-border-card last:border-b-0">
                    <td className="font-rez-mono text-text-secondary text-xs uppercase tracking-wider py-3 pr-4 whitespace-nowrap align-top">
                      {spec.label}
                    </td>
                    <td className="font-rez-mono text-data-blue text-sm py-3 align-top">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Narrative */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <p className="font-source text-text-primary text-lg leading-relaxed mb-8">
              {phoneNarrative}
            </p>
            <div className="photo-placeholder w-full aspect-[4/3] rounded">
              [PRODUCT PHOTO — XCOVER6 PRO]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
