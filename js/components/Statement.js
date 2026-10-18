import { portfolioData } from "../data.js";

export function renderStatement() {
  const s = portfolioData.statement;

  return `
    <!-- Section Ground: Voltage Violet #5c4ade Band -->
    <section id="creative-statement" class="relative py-20 bg-[#5c4ade] text-white border-b border-black">
      <div class="max-w-[1280px] mx-auto px-6 sm:px-12 text-center">
        
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-black border border-black text-xs font-bold uppercase mb-8">
          <span>${s.badge}</span>
        </div>
        
        <blockquote class="font-display-lateral text-3xl sm:text-5xl lg:text-6xl leading-[0.95] uppercase max-w-4xl mx-auto drop-shadow-sm">
          "${s.quote}"
        </blockquote>

        <div class="mt-8 text-xs font-bold tracking-widest uppercase text-white/80">
          MUADZ · VISUAL DESIGNER × AI CONTROLLER
        </div>

      </div>
    </section>
  `;
}
