import { portfolioData } from "../data.js";

export function renderSnapshot() {
  const getIconSvg = (iconName) => {
    switch (iconName) {
      case "penTool":
        return `<svg class="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>`;
      case "sparkles":
        return `<svg class="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`;
      case "cpu":
        return `<svg class="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`;
      case "box":
        return `<svg class="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;
      default:
        return `<span class="text-xs text-slate-300">✦</span>`;
    }
  };

  return `
    <section id="snapshot-section" class="relative z-20 -mt-6 lg:-mt-10 mb-20 lg:mb-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <!-- Single Horizontal Snapshot Panel (Ref Match: 4 columns with dividers, zero fake metrics) -->
        <div class="card-panel p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            
            ${portfolioData.snapshot.map((item, idx) => `
              <div class="flex flex-col text-left lg:text-left relative px-2 lg:px-6 ${idx < 3 ? 'lg:border-r border-white/10' : ''}">
                
                <!-- Icon & Step Number -->
                <div class="flex items-center justify-between mb-3">
                  <div class="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    ${getIconSvg(item.icon)}
                  </div>
                  <span class="text-[10px] font-mono font-bold text-slate-500">0${idx + 1}</span>
                </div>

                <!-- Uppercase Title -->
                <div class="text-sm font-bold tracking-widest text-white uppercase mb-1">
                  ${item.title}
                </div>

                <!-- Tagline Subtitle -->
                <div class="text-[11px] font-semibold text-slate-300 tracking-wide mb-2">
                  ${item.tagline}
                </div>

                <!-- Short Grounded Description -->
                <p class="text-xs text-slate-400 leading-relaxed font-normal">
                  ${item.desc}
                </p>

              </div>
            `).join("")}

          </div>
        </div>

      </div>
    </section>
  `;
}
