import { portfolioData } from "../data.js";

export function renderCapabilitiesAndTools() {
  return `
    <section id="capabilities" class="relative py-20 bg-white border-b border-black/10">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <!-- LEFT: CORE CAPABILITIES -->
          <div class="lg:col-span-7 space-y-6">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-black/10 text-xs font-mono font-semibold uppercase mb-3 text-slate-700">
                <span>DISCIPLINE MATRIX</span>
              </div>
              <h2 class="font-display text-3xl sm:text-5xl text-[#0f172a] leading-none uppercase">
                CORE CAPABILITIES
              </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              ${portfolioData.capabilities.map((cap) => `
                <div class="slush-card p-6 bg-[#f8fafc] hover:bg-white transition-all border border-black/10">
                  <div class="flex items-center justify-between mb-3">
                    <span class="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono font-semibold text-xs">
                      ${cap.number}
                    </span>
                    <span class="text-xs font-mono text-[#145ebb]">ACTIVE</span>
                  </div>
                  <h3 class="font-display text-lg text-[#0f172a] leading-tight uppercase mb-2">
                    ${cap.title}
                  </h3>
                  <p class="text-xs text-slate-600 font-normal leading-relaxed">
                    ${cap.desc}
                  </p>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- RIGHT: TOOLS & DKV FOUNDATION -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- Tools Box -->
            <div class="slush-card p-6 sm:p-8 bg-[#f8fafc] border border-black/10">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-mono font-semibold uppercase text-slate-700">PRACTICAL TOOLING</span>
                <span class="slush-sticker bg-white text-[10px] text-slate-700">PRODUCTION</span>
              </div>
              
              <div class="grid grid-cols-3 gap-2.5">
                ${portfolioData.tools.map((tool) => `
                  <div class="p-3 rounded-xl border border-black/10 bg-white flex flex-col items-center justify-center text-center gap-1 hover:border-black/30 transition-colors">
                    <span class="text-xs font-semibold text-[#0f172a] leading-tight">
                      ${tool.name}
                    </span>
                    <span class="text-[9px] font-mono font-medium text-slate-500 uppercase">
                      ${tool.role}
                    </span>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- DKV Foundation Badge -->
            <div class="slush-card p-6 sm:p-8 bg-white border border-black/10">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-[#145ebb] text-white flex items-center justify-center font-mono text-xs font-semibold">
                  05
                </div>
                <div>
                  <h4 class="font-display text-base text-[#0f172a] uppercase leading-tight">
                    ${portfolioData.about.education.institution}
                  </h4>
                  <div class="text-[11px] font-mono text-[#145ebb] uppercase">
                    ${portfolioData.about.education.major}
                  </div>
                </div>
              </div>
              <p class="text-xs text-slate-600 font-normal leading-relaxed">
                ${portfolioData.about.education.summary}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
