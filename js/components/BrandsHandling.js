import { portfolioData } from "../data.js";

export function renderBrandsHandling() {
  const b = portfolioData.brandsImHandling;
  if (!b) return "";

  return `
    <!-- Section Ground: Sky Wash #dceeff Band -->
    <section id="brands-handling" class="relative py-20 bg-[#dceeff] border-b border-black">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-black pb-6 gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black text-xs font-bold uppercase mb-3">
              <span class="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
              <span>${b.badge}</span>
            </div>
            <h2 class="font-display-lateral text-4xl sm:text-6xl text-black leading-none uppercase">
              ${b.title}
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-black/80 max-w-md font-medium leading-relaxed">
            ${b.subtext}
          </p>
        </div>

        <!-- 2 Column Slush Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          ${b.brands.map((brand, idx) => `
            <div class="slush-card p-6 sm:p-8 flex flex-col justify-between bg-white">
              
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="slush-sticker bg-[#55db9c] text-black">
                    ${brand.status}
                  </span>
                  <span class="w-8 h-8 rounded-full bg-[#ffd731] border border-black flex items-center justify-center font-bold text-xs">
                    0${idx + 1}
                  </span>
                </div>

                <!-- Product Visual Preview -->
                <div class="relative overflow-hidden rounded-[16px] border border-black mb-6 aspect-[16/11] bg-[#e9ccff]/30 flex items-center justify-center">
                  <img 
                    src="${brand.image}" 
                    alt="${brand.name}" 
                    class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='./${brand.image}';"
                  />
                  <div class="absolute bottom-3 left-3">
                    <span class="slush-sticker bg-white text-[10px]">
                      ${brand.tag}
                    </span>
                  </div>
                </div>

                <!-- Brand Name & Role -->
                <div class="text-xs font-bold text-black/60 uppercase tracking-wider mb-1">
                  ${brand.category} · ${brand.role}
                </div>
                <h3 class="font-display-lateral text-2xl sm:text-3xl text-black leading-tight uppercase mb-3">
                  ${brand.name}
                </h3>
                <p class="text-xs sm:text-sm text-black/85 font-medium leading-relaxed mb-5">
                  ${brand.description}
                </p>

                <!-- Highlights -->
                <div class="space-y-2 mb-6">
                  ${brand.highlights.map(h => `
                    <div class="flex items-center gap-2 text-xs font-medium text-black">
                      <span class="text-[#fb4903]">✦</span>
                      <span>${h}</span>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Tags -->
              <div class="pt-4 border-t border-black flex flex-wrap items-center justify-between gap-3">
                <div class="flex flex-wrap gap-1.5">
                  ${brand.tags.map(t => `
                    <span class="slush-sticker bg-[#e9e9e9] text-[9px] py-1 px-2.5">
                      ${t}
                    </span>
                  `).join("")}
                </div>
                <a href="#contact" class="btn-slush-filled text-[11px] py-2 px-4">
                  TALK PACKAGING ↗
                </a>
              </div>

            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}
