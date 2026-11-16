import { portfolioData } from "../data.js";

export function renderProcess() {
  return `
    <section id="process" class="relative py-20 bg-white border-b border-black/10">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <div class="mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-black/10 text-xs font-mono font-semibold uppercase mb-3 text-slate-700">
            <span>METHODOLOGY</span>
          </div>
          <h2 class="font-display text-3xl sm:text-5xl text-[#0f172a] leading-none uppercase">
            HOW I WORK
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${portfolioData.process.map((step, idx) => `
            <div class="slush-card p-6 flex flex-col justify-between bg-[#f8fafc] hover:bg-white border border-black/10 hover:border-black/30 transition-all">
              
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono font-semibold text-xs">
                    ${step.step}
                  </span>
                  <span class="text-xs font-mono text-slate-400">STAGE 0${idx + 1}</span>
                </div>
                <h3 class="font-display text-xl text-[#0f172a] leading-tight uppercase mb-2">
                  ${step.title}
                </h3>
                <p class="text-xs text-slate-600 font-normal leading-relaxed">
                  ${step.desc}
                </p>
              </div>

              <div class="mt-6 pt-3 border-t border-black/10 text-xs font-mono text-slate-500 uppercase flex items-center justify-between">
                <span>VERIFIED SPRINT</span>
                <span>→</span>
              </div>

            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}
