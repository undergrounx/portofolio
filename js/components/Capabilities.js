import { portfolioData } from "../data.js";

export function renderCapabilitiesAndTools() {
  const getCapabilityIcon = (icon) => {
    switch (icon) {
      case "penTool":
        return `<svg class="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>`;
      case "monitor":
        return `<svg class="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`;
      case "cpu":
        return `<svg class="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`;
      case "sparkles":
        return `<svg class="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`;
      case "compass":
        return `<svg class="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="12 2 19 21 12 17 5 21 12 2"/></svg>`;
      case "layers":
        return `<svg class="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
      default:
        return `<span class="text-xs text-white">✦</span>`;
    }
  };

  return `
    <section id="capabilities" class="relative py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          <!-- LEFT COLUMN: CORE CAPABILITIES (Ref Match: 7 Cols) -->
          <div class="lg:col-span-7 space-y-8">
            <div>
              <div class="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-1">PRACTICE AREAS</div>
              <h2 class="text-xs lg:text-sm font-bold tracking-[0.2em] text-white uppercase">
                CORE CAPABILITIES
              </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              ${portfolioData.capabilities.map((cap) => `
                <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all hover:bg-white/[0.04] group">
                  <div class="flex items-center justify-between mb-4">
                    <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      ${getCapabilityIcon(cap.icon)}
                    </div>
                    <span class="text-xs font-mono font-bold text-slate-500">${cap.number}</span>
                  </div>
                  <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-2 group-hover:text-slate-200">
                    ${cap.title}
                  </h3>
                  <p class="text-xs text-slate-400 leading-relaxed font-normal">
                    ${cap.desc}
                  </p>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- RIGHT COLUMN: TOOLS & SPECIALIZATIONS (Ref Match: 5 Cols) -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- Box 1: Tools & Technologies -->
            <div class="card-panel p-6 lg:p-8">
              <div class="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-1">STACK &amp; RUNTIME</div>
              <h3 class="text-xs lg:text-sm font-bold tracking-[0.2em] text-white uppercase mb-6">
                TOOLS &amp; TECHNOLOGIES
              </h3>

              <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
                ${portfolioData.tools.map((tool) => `
                  <div class="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col items-center justify-center text-center gap-2 hover:border-white/25 hover:bg-white/[0.06] transition-all group">
                    <div class="w-7 h-7 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-300 font-mono group-hover:text-white">
                      ${tool.name.slice(0, 2).toUpperCase()}
                    </div>
                    <span class="text-[10px] font-semibold text-slate-300 leading-tight">
                      ${tool.name}
                    </span>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Box 2: Specializations & Architecture (Ref Match: Second Box) -->
            <div class="card-panel p-6 lg:p-8">
              <div class="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-1">DEEP EXPERTISE</div>
              <h3 class="text-xs lg:text-sm font-bold tracking-[0.2em] text-white uppercase mb-6">
                SYSTEMS ARCHITECTURE
              </h3>

              <div class="space-y-4">
                ${portfolioData.specializations.map((spec) => `
                  <div class="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-white uppercase tracking-wider">${spec.title}</span>
                      <span class="text-[9px] font-mono text-emerald-400 uppercase">${spec.year}</span>
                    </div>
                    <div class="text-[10px] font-mono text-slate-400">${spec.institution}</div>
                    <p class="text-[11px] text-slate-400 pt-1 leading-relaxed">${spec.desc}</p>
                  </div>
                `).join("")}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
