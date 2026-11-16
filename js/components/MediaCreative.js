import { portfolioData } from "../data.js";

export function renderMediaCreative() {
  const m = portfolioData.mediaCreative;
  if (!m) return "";

  return `
    <section id="media-creative" class="relative py-20 bg-white border-b border-black/10">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-black/10 pb-6 gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-black/10 text-xs font-mono font-semibold uppercase mb-3 text-slate-700">
              <span class="w-2 h-2 rounded-full bg-[#145ebb]"></span>
              <span>${m.badge}</span>
            </div>
            <h2 class="font-display text-3xl sm:text-5xl text-[#0f172a] leading-none uppercase">
              ${m.title}
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            ${m.subtext}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          ${m.channels.map((channel) => `
            <div class="slush-card p-6 sm:p-8 flex flex-col justify-between bg-[#f8fafc] border border-black/10 hover:border-black/30 transition-all">
              
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="slush-sticker bg-white border border-black/10 text-slate-800 text-[10px]">
                    ${channel.platform}
                  </span>
                  <span class="text-xs font-mono font-medium text-slate-500">
                    ${channel.handle}
                  </span>
                </div>

                <div class="relative overflow-hidden rounded-[14px] border border-black/10 mb-6 aspect-[16/10] bg-slate-900 flex items-center justify-center">
                  <img 
                    src="${channel.image}" 
                    alt="${channel.platform}" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='./${channel.image}';"
                  />
                  <div class="absolute bottom-3 left-3">
                    <span class="slush-sticker bg-white/95 backdrop-blur-sm border border-black/10 text-[10px] text-slate-800">
                      ${channel.tag}
                    </span>
                  </div>
                </div>

                <p class="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">
                  ${channel.description}
                </p>

                <div class="space-y-1.5 mb-6">
                  ${(channel.features || []).map(f => `
                    <div class="flex items-center gap-2 text-xs font-mono text-slate-600">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#145ebb]"></span>
                      <span>${f}</span>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Action Row -->
              <div class="pt-4 border-t border-black/10 flex items-center justify-between">
                <span class="text-xs font-mono font-medium text-slate-500">
                  ${channel.metrics}
                </span>
                <a href="${channel.url}" target="_blank" rel="noopener noreferrer" class="btn-slush-ghost text-xs py-2 px-4">
                  OPEN CHANNEL ↗
                </a>
              </div>

            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}
