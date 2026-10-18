import { portfolioData } from "../data.js";

export function renderCapabilitiesAndTools() {
  const edu = portfolioData.about.education;

  return `
    <!-- Section Ground: Sky Wash #dceeff Band -->
    <section id="capabilities" class="relative py-20 bg-[#dceeff] border-b border-black">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <!-- LEFT: CORE CAPABILITIES -->
          <div class="lg:col-span-7 space-y-6">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black text-xs font-bold uppercase mb-3">
                <span>PRACTICE AREAS</span>
              </div>
              <h2 class="font-display-lateral text-3xl sm:text-5xl text-black leading-none uppercase">
                CORE CAPABILITIES
              </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              ${portfolioData.capabilities.map((cap, idx) => `
                <div class="slush-card p-6 bg-white hover:bg-[#e9ccff]/30 transition-colors">
                  <div class="flex items-center justify-between mb-3">
                    <span class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                      ${cap.number}
                    </span>
                    <span class="text-xs font-bold text-[#5c4ade]">✦</span>
                  </div>
                  <h3 class="font-display-lateral text-lg text-black leading-tight uppercase mb-2">
                    ${cap.title}
                  </h3>
                  <p class="text-xs text-black/80 font-medium leading-relaxed">
                    ${cap.desc}
                  </p>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- RIGHT: TOOLS & DKV FOUNDATION -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- Tools Box -->
            <div class="slush-card p-6 sm:p-8 bg-white">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-bold uppercase text-black">PRACTICAL TOOLING</span>
                <span class="slush-sticker bg-[#ffd731] text-[10px]">STACK</span>
              </div>
              
              <div class="grid grid-cols-3 gap-2.5">
                ${portfolioData.tools.map((tool) => `
                  <div class="p-3 rounded-2xl border border-black bg-[#f8f9fa] flex flex-col items-center justify-center text-center gap-1 hover:bg-[#4da2ff]/20 transition-colors">
                    <span class="text-xs font-bold text-black leading-tight">
                      ${tool.name}
                    </span>
                    <span class="text-[9px] font-bold text-black/60 uppercase">
                      ${tool.category}
                    </span>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- DKV Box -->
            <div class="slush-card p-6 sm:p-8 bg-[#55db9c]">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold uppercase text-black">FOUNDATION</span>
                <span class="slush-sticker bg-white text-[10px]">DKV</span>
              </div>
              <h3 class="font-display-lateral text-xl text-black leading-tight uppercase mb-1">
                ${edu.institution}
              </h3>
              <div class="text-xs font-bold text-black/80 uppercase mb-2">
                ${edu.major}
              </div>
              <p class="text-xs text-black/90 font-medium leading-relaxed">
                ${edu.focus}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
