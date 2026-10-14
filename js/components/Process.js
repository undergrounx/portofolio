import { portfolioData } from "../data.js";

export function renderProcess() {
  const getProcessIcon = (icon) => {
    switch (icon) {
      case "search":
        return `<svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
      case "pen":
        return `<svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`;
      case "code":
        return `<svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
      case "rocket":
        return `<svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>`;
      default:
        return `<span class="text-xs text-white">✦</span>`;
    }
  };

  return `
    <section id="process" class="relative py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div class="mb-8 lg:mb-12">
          <div class="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-1">METHODOLOGY</div>
          <h2 class="text-xs lg:text-sm font-bold tracking-[0.2em] text-white uppercase">
            MY DESIGN PROCESS
          </h2>
        </div>

        <!-- Horizontal Process Panel (4-Step Flow) -->
        <div class="card-panel p-6 sm:p-8 lg:p-10">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 relative">
            
            ${portfolioData.process.map((step, idx) => `
              <div class="flex flex-col justify-between relative space-y-4 ${idx < 3 ? 'md:pr-4' : ''}">
                
                <div>
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-[11px] font-mono font-bold text-slate-500">${step.step}</span>
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider">${step.title}</h3>
                  </div>
                  <p class="text-xs text-slate-400 leading-relaxed font-normal">
                    ${step.desc}
                  </p>
                </div>

                <div class="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div class="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    ${getProcessIcon(step.icon)}
                  </div>
                  ${idx < 3 ? `<span class="hidden md:inline text-slate-600 text-xs font-mono font-bold">→</span>` : ''}
                </div>

              </div>
            `).join("")}

          </div>
        </div>

      </div>
    </section>
  `;
}
