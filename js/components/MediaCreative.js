import { portfolioData } from "../data.js";

export function renderMediaCreative() {
  const m = portfolioData.mediaCreative;
  if (!m) return "";

  return `
    <section id="media-creative" class="relative py-16 lg:py-28 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <!-- Section Header Row -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 border-b border-white/[0.06] pb-6 gap-4">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span class="text-[10px] font-mono font-bold tracking-[0.25em] text-slate-400 uppercase">
                ${m.badge}
              </span>
            </div>
            <h2 class="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
              ${m.title}
            </h2>
          </div>
          
          <p class="text-xs sm:text-sm text-slate-400 max-w-md font-normal leading-relaxed">
            ${m.subtext}
          </p>
        </div>

        <!-- 2-Column Responsive Channels Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          ${m.channels.map((channel, idx) => `
            <div class="card-panel p-6 sm:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
              
              <div>
                <!-- Channel Top Tag & Meta -->
                <div class="flex items-center justify-between mb-5">
                  <div class="flex items-center gap-2.5">
                    <span class="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                      ${channel.platform}
                    </span>
                    <span class="text-xs font-mono text-emerald-400 font-semibold">
                      ${channel.handle}
                    </span>
                  </div>
                  <span class="text-[10px] font-mono text-slate-500">0${idx + 1}</span>
                </div>

                <!-- Showcase Image Container with Sleek Glow -->
                <div class="relative overflow-hidden rounded-xl bg-[#090b0e] border border-white/[0.08] mb-6 aspect-[16/10] flex items-center justify-center group-hover:border-white/25 transition-all">
                  <img 
                    src="${channel.image}" 
                    alt="${channel.platform} Creative Showcase" 
                    class="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='./${channel.image}';"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10 pointer-events-none">
                    <span class="px-2 py-0.5 rounded bg-black/70 border border-white/15 text-[9px] font-mono text-slate-300 uppercase tracking-widest backdrop-blur-md">
                      ${channel.tag}
                    </span>
                  </div>
                </div>

                <!-- Details & Features -->
                <p class="text-sm text-slate-300 leading-relaxed font-normal mb-5">
                  ${channel.description}
                </p>

                <div class="space-y-2 mb-6">
                  ${channel.features.map(f => `
                    <div class="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <span class="text-cyan-400">✦</span>
                      <span>${f}</span>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Action Link -->
              <div class="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                <span class="text-[10px] font-mono text-slate-400">
                  ${channel.metrics}
                </span>
                <a href="${channel.url}" target="_blank" rel="noopener noreferrer" class="btn-pill-ghost text-[10px] py-2 px-4 inline-flex items-center gap-1.5 hover:text-white">
                  <span>BUKA ${channel.platform}</span>
                  <span>↗</span>
                </a>
              </div>

            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}
