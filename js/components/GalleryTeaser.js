/**
 * GALLERY TEASER BANNER (Web 1)
 * Mengajak pengunjung membuka Web 2: Cosmos Gallery Dedicated Wall
 */

export function renderGalleryTeaser() {
  return `
    <section id="gallery-portal" class="py-16 px-4 sm:px-8 bg-[#f7f5f3] border-b-2 border-black text-[#0d0d0d] relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto">
        
        <div class="bg-white border-2 border-black rounded-[24px] p-8 sm:p-12 relative overflow-hidden shadow-[8px_8px_0px_#000000]">
          
          <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            
            <div class="max-w-2xl">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f5f3] border border-black/15 text-xs font-bold tracking-wider uppercase mb-4">
                <span class="w-2 h-2 rounded-full bg-[#0d0d0d] animate-pulse"></span>
                <span>DEDICATED EXHIBITION SUB-PAGE</span>
              </div>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight uppercase mb-4">
                COSMOS GALLERY — HASIL KARYA &amp; PACKAGING
              </h2>
              <p class="text-base text-black/70 leading-relaxed font-medium">
                Seluruh katalog desain marketplace e-commerce (Lumaskin Acne & Brightening Series), kemasan fisik tactile (Avenor & Berka), serta video motion cut kinetik kini telah dipindahkan ke galeri mandiri bergaya <strong>Cosmos Linen Wall</strong>.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a href="./gallery/" class="btn-slush-filled w-full sm:w-auto text-center !bg-[#0d0d0d] !text-white hover:!bg-[#222222] !px-8 !py-4 !text-sm flex items-center justify-center gap-2 group">
                <span>BUKA COSMOS GALLERY</span>
                <span class="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
              <a href="#work" class="btn-slush-outlined w-full sm:w-auto text-center !px-6 !py-4 !text-sm">
                <span>Lihat Project System</span>
              </a>
            </div>

          </div>

          <!-- Subtle Polaroid Preview in background -->
          <div class="mt-8 pt-8 border-t border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-90">
            <div class="rounded-xl overflow-hidden border border-black/15 aspect-[4/3] bg-zinc-100">
              <img src="assets/lumaskinnn%20bright.png" alt="Lumaskin" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-xl overflow-hidden border border-black/15 aspect-[4/3] bg-zinc-100">
              <img src="assets/avenor-chia-seed.jpg" alt="Avenor" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-xl overflow-hidden border border-black/15 aspect-[4/3] bg-zinc-100 hidden sm:block">
              <img src="assets/lumaaskin%20acne.png" alt="Lumaskin Acne" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-xl overflow-hidden border border-black/15 aspect-[4/3] bg-zinc-100 hidden sm:block">
              <img src="assets/berka-pouch.png" alt="Berka" class="w-full h-full object-cover" />
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
