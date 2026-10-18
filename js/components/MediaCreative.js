import { portfolioData } from "../data.js";

export function renderMediaCreative() {
  const m = portfolioData.mediaCreative;
  if (!m) return "";

  return `
    <!-- Section Ground: Paper White #ffffff Band -->
    <section id="media-creative" class="relative py-20 bg-white border-b border-black">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-black pb-6 gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e9ccff] border border-black text-xs font-bold uppercase mb-3">
              <span class="w-2 h-2 rounded-full bg-[#5c4ade] border border-black"></span>
              <span>${m.badge}</span>
            </div>
            <h2 class="font-display-lateral text-4xl sm:text-6xl text-black leading-none uppercase">
              ${m.title}
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-black/80 max-w-md font-medium leading-relaxed">
            ${m.subtext}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          ${m.channels.map((channel, idx) => `
            <div class="slush-card p-6 sm:p-8 flex flex-col justify-between bg-[#f8faff]">
              
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="slush-sticker bg-[#4da2ff] text-white">
                    ${channel.platform}
                  </span>
                  <span class="text-xs font-mono font-bold text-black">
                    ${channel.handle}
                  </span>
                </div>

                <div class="relative overflow-hidden rounded-[16px] border border-black mb-6 aspect-[16/10] bg-black flex items-center justify-center">
                  <img 
                    src="${channel.image}" 
                    alt="${channel.platform}" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='./${channel.image}';"
                  />
                  <div class="absolute bottom-3 left-3">
                    <span class="slush-sticker bg-white text-[10px]">
                      ${channel.tag}
                    </span>
                  </div>
                </div>

                <p class="text-xs sm:text-sm text-black/85 font-medium leading-relaxed mb-4">
                  ${channel.description}
                </p>

                <div class="space-y-2 mb-6">
                  ${channel.features.map(f => `
                    <div class="flex items-center gap-2 text-xs font-medium text-black">
                      <span class="text-[#4da2ff]">✦</span>
                      <span>${f}</span>
                    </div>
                  `).join("")}
                </div>
              </div>

              <div class="pt-4 border-t border-black flex items-center justify-between">
                <span class="text-xs font-bold text-black/70">
                  ${channel.metrics}
                </span>
                <a href="${channel.url}" target="_blank" rel="noopener noreferrer" class="btn-slush-ghost text-xs">
                  BUKA ${channel.platform} ↗
                </a>
              </div>

            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}
