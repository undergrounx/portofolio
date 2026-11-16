import { portfolioData } from "../data.js";

export function renderSnapshot() {
  return `
    <section id="snapshot-section" class="relative z-20 py-16 bg-white border-b border-black/10">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${portfolioData.snapshot.map((item, idx) => `
            <div class="slush-card p-6 flex flex-col justify-between bg-[#f8fafc] hover:bg-white transition-all">
              
              <div>
                <!-- Top Counter & Verified Badge -->
                <div class="flex items-center justify-between mb-4">
                  <span class="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono font-medium text-xs">
                    0${idx + 1}
                  </span>
                  <span class="slush-sticker text-[10px] bg-white border border-black/10 text-slate-700">
                    PHASE ${idx + 1}
                  </span>
                </div>

                <!-- Section Heading -->
                <h3 class="font-display text-xl text-[#0f172a] leading-tight uppercase mb-2">
                  ${item.title}
                </h3>

                <!-- Subheading -->
                <div class="text-[11px] font-mono font-semibold text-[#145ebb] uppercase tracking-wider mb-3">
                  ${item.tagline}
                </div>

                <!-- Grounded Description -->
                <p class="text-xs text-slate-600 font-normal leading-relaxed">
                  ${item.desc}
                </p>
              </div>

              <div class="mt-6 pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>SYSTEM READINESS</span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>

            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}
