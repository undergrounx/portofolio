import { portfolioData } from "../data.js";

export function renderSnapshot() {
  const stickerColors = ["#ffffff", "#e9ccff", "#55db9c", "#ffd731"];

  return `
    <!-- Section Ground: Paper White #ffffff Band -->
    <section id="snapshot-section" class="relative z-20 py-16 bg-white border-t border-b border-black">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${portfolioData.snapshot.map((item, idx) => `
            <div class="slush-card p-6 flex flex-col justify-between" style="background-color: ${stickerColors[idx % stickerColors.length]};">
              
              <div>
                <!-- Top Badge & Step -->
                <div class="flex items-center justify-between mb-4">
                  <span class="w-8 h-8 rounded-full bg-white border border-black flex items-center justify-center font-bold text-xs">
                    0${idx + 1}
                  </span>
                  <span class="slush-sticker bg-white text-[10px]">VERIFIED</span>
                </div>

                <!-- Uppercase Lateral Heading -->
                <h3 class="font-display-lateral text-xl sm:text-2xl text-black leading-tight uppercase mb-2">
                  ${item.title}
                </h3>

                <!-- Subheading -->
                <div class="text-xs font-bold text-black/75 uppercase tracking-wide mb-3">
                  ${item.tagline}
                </div>

                <!-- Grounded Description -->
                <p class="text-xs text-black/90 font-medium leading-relaxed">
                  ${item.desc}
                </p>
              </div>

              <div class="mt-6 pt-3 border-t border-black/20 flex items-center justify-between text-[11px] font-bold">
                <span>PHASE READY</span>
                <span>✦</span>
              </div>

            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}
