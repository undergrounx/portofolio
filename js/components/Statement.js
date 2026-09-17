import { portfolioData } from "../data.js";

export function renderStatement() {
  const s = portfolioData.statement;

  return `
    <section id="creative-statement" class="relative py-16 lg:py-24 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center select-none">
        
        <div class="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-4">PHILOSOPHY</div>
        
        <h2 class="font-display text-4xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight uppercase leading-[0.9] max-w-5xl mx-auto">
          ${s.headline.replace(/\n/g, "<br />")}
        </h2>

        <p class="mt-6 text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
          ${s.subtext}
        </p>

      </div>
    </section>
  `;
}
