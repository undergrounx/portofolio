import { portfolioData } from "../data.js";

export function renderStatement() {
  const s = portfolioData.statement;

  return `
    <section id="creative-statement" class="relative py-24 bg-[#0f172a] text-white border-b border-black">
      <div class="max-w-[1240px] mx-auto px-6 sm:px-12 text-center">
        
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono font-semibold uppercase mb-8">
          <span class="w-2 h-2 rounded-full bg-[#145ebb]"></span>
          <span>${s.badge}</span>
        </div>
        
        <blockquote class="font-display text-2xl sm:text-4xl lg:text-5xl leading-tight uppercase max-w-4xl mx-auto text-slate-100">
          "${s.quote}"
        </blockquote>

        <div class="mt-8 text-xs font-mono tracking-widest uppercase text-slate-400">
          MUADZ · VISUAL DESIGNER (DKV) × AI CONTROLLER
        </div>

      </div>
    </section>
  `;
}
