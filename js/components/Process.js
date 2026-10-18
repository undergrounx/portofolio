import { portfolioData } from "../data.js";

export function renderProcess() {
  const stepColors = ["#ffd731", "#55db9c", "#4da2ff", "#e9ccff"];

  return `
    <!-- Section Ground: Paper White #ffffff Band -->
    <section id="process" class="relative py-20 bg-white border-b border-black">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <div class="mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black text-xs font-bold uppercase mb-3">
            <span>METHODOLOGY</span>
          </div>
          <h2 class="font-display-lateral text-4xl sm:text-6xl text-black leading-none uppercase">
            HOW I WORK
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${portfolioData.process.map((step, idx) => `
            <div class="slush-card p-6 flex flex-col justify-between" style="background-color: ${stepColors[idx % stepColors.length]};">
              
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="w-8 h-8 rounded-full bg-white border border-black flex items-center justify-center font-bold text-xs">
                    ${step.step}
                  </span>
                  <span class="text-xs font-bold text-black">✦</span>
                </div>
                <h3 class="font-display-lateral text-xl sm:text-2xl text-black leading-tight uppercase mb-2">
                  ${step.title}
                </h3>
                <p class="text-xs text-black/90 font-medium leading-relaxed">
                  ${step.desc}
                </p>
              </div>

              <div class="mt-6 pt-3 border-t border-black/20 text-xs font-bold uppercase flex items-center justify-between">
                <span>STAGE 0${idx + 1}</span>
                <span>→</span>
              </div>

            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}
