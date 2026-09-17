import { portfolioData } from "../data.js";

export function renderAbout() {
  const a = portfolioData.about;

  return `
    <section id="about" class="relative py-16 lg:py-24 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <!-- Left Column: Editorial Headline -->
          <div class="lg:col-span-5 space-y-4">
            <div class="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase">ETHOS &amp; IDENTITY</div>
            <h2 class="font-display text-5xl lg:text-7xl font-bold text-white tracking-tight uppercase leading-[0.9]">
              ${a.headline.replace(/\n/g, "<br />")}
            </h2>
            <div class="w-16 h-[1px] bg-slate-600 my-6"></div>
          </div>

          <!-- Right Column: Concise Narrative & Pillars -->
          <div class="lg:col-span-7 space-y-6">
            <p class="text-base lg:text-lg text-slate-200 font-normal leading-relaxed">
              ${a.paragraph1}
            </p>
            <p class="text-sm lg:text-base text-slate-400 font-normal leading-relaxed">
              ${a.paragraph2}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              ${a.pillars.map((pillar) => `
                <div class="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div class="text-xs font-bold text-white uppercase tracking-wider mb-1">${pillar.title}</div>
                  <p class="text-[11px] text-slate-400 leading-relaxed">${pillar.desc}</p>
                </div>
              `).join("")}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
