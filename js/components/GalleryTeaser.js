/**
 * GALLERY TEASER BANNER (Web 1 -> Web 2)
 * Clean editorial portal to Cosmos Linen Wall Gallery
 */

export function renderGalleryTeaser() {
  return `
    <section id="gallery-portal" class="py-16 px-4 sm:px-8 bg-[#f8fafc] border-b border-black/10 text-[#0f172a] relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto">
        
        <div class="bg-white border border-black/15 rounded-[20px] p-8 sm:p-12 relative overflow-hidden shadow-sm">
          
          <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            
            <div class="max-w-2xl">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-black/10 text-xs font-mono font-semibold uppercase mb-4 text-slate-700">
                <span class="w-2 h-2 rounded-full bg-[#145ebb] animate-pulse"></span>
                <span>DEDICATED EXHIBITION SUB-PAGE</span>
              </div>
              <h2 class="text-2xl sm:text-4xl font-display font-bold tracking-tight text-[#0f172a] leading-tight uppercase mb-4">
                COSMOS GALLERY — PACKAGING &amp; VISUAL ARTIFACTS
              </h2>
              <p class="text-sm text-slate-600 leading-relaxed font-normal">
                Koleksi terpisah untuk display e-commerce (Lumaskin Acne &amp; Brightening Series), kemasan fisik tactile (Avenor Chia Seed &amp; Berka), serta video motion cut kinetik dengan format interaktif <strong>Cosmos Linen Wall</strong>.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <a href="./gallery/" class="btn-slush-filled w-full sm:w-auto text-center !px-7 !py-3.5 !text-xs flex items-center justify-center gap-2">
                <span>BUKA COSMOS GALLERY</span>
                <span>↗</span>
              </a>
              <a href="#work" class="btn-slush-ghost w-full sm:w-auto text-center !px-6 !py-3.5 !text-xs">
                <span>Lihat Project Systems</span>
              </a>
            </div>

          </div>

          <!-- Subtle Polaroid Preview in background -->
          <div class="mt-8 pt-8 border-t border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-95">
            <div class="rounded-xl overflow-hidden border border-black/10 aspect-[4/3] bg-slate-100">
              <img src="assets/lumaskinnn%20bright.png" alt="Lumaskin" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-xl overflow-hidden border border-black/10 aspect-[4/3] bg-slate-100">
              <img src="assets/avenor-chia-seed.jpg" alt="Avenor" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-xl overflow-hidden border border-black/10 aspect-[4/3] bg-slate-100 hidden sm:block">
              <img src="assets/lumaaskin%20acne.png" alt="Lumaskin Acne" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-xl overflow-hidden border border-black/10 aspect-[4/3] bg-slate-100 hidden sm:block">
              <img src="assets/berka-pouch.png" alt="Berka" class="w-full h-full object-cover" />
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
