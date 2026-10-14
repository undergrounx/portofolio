import { portfolioData } from "../data.js";

export function renderStatement() {
  const s = portfolioData.statement;

  return `
    <section id="creative-statement" class="relative py-16 lg:py-24 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center select-none">
        
        <div class="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-6">${s.badge}</div>
        
        <blockquote class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight uppercase leading-[1.05] max-w-4xl mx-auto">
          "${s.quote}"
        </blockquote>

        <div class="mt-8 text-xs font-mono text-slate-400 uppercase tracking-widest">
          MUADZ · DESIGN × AI × SYSTEMS
        </div>

      </div>
    </section>
  `;
}
