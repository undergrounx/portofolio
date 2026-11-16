import { portfolioData } from "../data.js";

export function renderBrandsHandling() {
  const b = portfolioData.brandsImHandling;
  if (!b) return "";

  return `
    <section id="brands-handling" class="relative py-20 bg-[#f8fafc] border-b border-black/10">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-black/10 pb-6 gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono font-semibold uppercase mb-3 text-slate-700">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>${b.badge}</span>
            </div>
            <h2 class="font-display text-3xl sm:text-5xl text-[#0f172a] leading-none uppercase">
              ${b.title}
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            ${b.subtext}
          </p>
        </div>

        <!-- 2 Column Clean Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          ${b.brands.map((brand, idx) => `
            <div class="slush-card p-6 sm:p-8 flex flex-col justify-between bg-white border border-black/10">
              
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="slush-sticker bg-slate-100 text-slate-800 text-[10px]">
                    ${brand.status}
                  </span>
                  <span class="w-7 h-7 rounded-full bg-slate-100 text-slate-700 border border-black/10 flex items-center justify-center font-mono font-semibold text-xs">
                    0${idx + 1}
                  </span>
                </div>

                <!-- Product Visual Preview: Strict Master Photo rule adhered -->
                <div class="relative overflow-hidden rounded-[14px] border border-black/10 mb-6 aspect-[16/10] bg-slate-50 flex items-center justify-center">
                  <img 
                    src="${brand.image}" 
                    alt="${brand.name}" 
                    class="w-full h-full object-contain p-4 group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='./${brand.image}';"
                  />
                  <div class="absolute bottom-3 left-3">
                    <span class="slush-sticker bg-white/95 backdrop-blur-sm border border-black/10 text-[10px] text-slate-700">
                      ${brand.tag}
                    </span>
                  </div>
                </div>

                <!-- Brand Name & Role -->
                <div class="text-[11px] font-mono font-semibold text-[#145ebb] uppercase tracking-wider mb-1">
                  ${brand.category} · ${brand.role}
                </div>
                <h3 class="font-display text-2xl text-[#0f172a] leading-tight uppercase mb-3">
                  ${brand.name}
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-5">
                  ${brand.description}
                </p>

                <!-- Highlights -->
                <div class="space-y-2 mb-6">
                  ${(brand.highlights || []).map(h => `
                    <div class="flex items-center gap-2 text-xs font-mono text-slate-600">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#145ebb]"></span>
                      <span>${h}</span>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Tags & CTA -->
              <div class="pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
                <div class="flex flex-wrap gap-1.5">
                  ${(brand.tags || []).map(t => `
                    <span class="slush-sticker bg-slate-100 text-[10px] py-1 px-2.5 text-slate-700">
                      ${t}
                    </span>
                  `).join("")}
                </div>
                <a href="#contact" class="btn-slush-filled text-xs py-2 px-4">
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
