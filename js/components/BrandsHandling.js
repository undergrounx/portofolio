import { portfolioData } from "../data.js";

export function renderBrandsHandling() {
  const b = portfolioData.brandsImHandling;
  if (!b) return "";

  return `
    <section id="brands-handling" class="relative py-16 lg:py-28 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <!-- Header Row -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 border-b border-white/[0.06] pb-6 gap-4">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-[10px] font-mono font-bold tracking-[0.25em] text-slate-400 uppercase">
                ${b.badge}
              </span>
            </div>
            <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
              ${b.title}
            </h2>
          </div>
          
          <p class="text-xs sm:text-sm text-slate-400 max-w-md font-normal leading-relaxed">
            ${b.subtext}
          </p>
        </div>

        <!-- 2-Column Responsive Brands Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          ${b.brands.map((brand, idx) => `
            <div class="card-panel p-6 sm:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
              
              <div>
                <!-- Brand Top Meta -->
                <div class="flex items-center justify-between mb-5">
                  <div class="flex items-center gap-2.5">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-wider backdrop-blur-md">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      ${brand.status}
                    </span>
                  </div>
                  <span class="text-[10px] font-mono text-slate-500">0${idx + 1}</span>
                </div>

                <!-- Showcase Visual Container -->
                <div class="relative overflow-hidden rounded-xl bg-[#090b0e] border border-white/[0.08] mb-6 aspect-[16/11] flex items-center justify-center group-hover:border-white/25 transition-all">
                  <img 
                    src="${brand.image}" 
                    alt="${brand.name} Packaging & Brand Direction" 
                    class="w-full h-full object-contain p-3 filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='./${brand.image}';"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10 pointer-events-none">
                    <span class="px-2.5 py-1 rounded bg-black/75 border border-white/15 text-[9px] font-mono text-slate-200 uppercase tracking-widest backdrop-blur-md">
                      ${brand.tag}
                    </span>
                  </div>
                </div>

                <!-- Title & Role -->
                <div class="mb-3">
                  <div class="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-1">
                    ${brand.category} · ${brand.role}
                  </div>
                  <h3 class="text-2xl font-bold text-white tracking-tight group-hover:text-slate-100 transition-colors">
                    ${brand.name}
                  </h3>
                </div>

                <!-- Description -->
                <p class="text-sm text-slate-300 leading-relaxed font-normal mb-5">
                  ${brand.description}
                </p>

                <!-- Highlights -->
                <div class="space-y-2 mb-6">
                  ${brand.highlights.map(h => `
                    <div class="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <span class="text-emerald-400">✦</span>
                      <span>${h}</span>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Bottom Tags Row -->
              <div class="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div class="flex flex-wrap gap-2">
                  ${brand.tags.map(t => `
                    <span class="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-[9px] font-mono text-slate-400">
                      ${t}
                    </span>
                  `).join("")}
                </div>
                <a href="#contact" class="text-[10px] font-mono font-bold tracking-wider text-slate-400 hover:text-white uppercase transition-colors inline-flex items-center gap-1 group-hover:text-emerald-400">
                  <span>DISCUSS SIMILAR PROJECT</span>
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
