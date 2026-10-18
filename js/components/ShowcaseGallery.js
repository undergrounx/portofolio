import { portfolioData } from "../data.js";

export function renderShowcaseGallery() {
  const mediaItems = [
    {
      type: "video",
      title: "AI Kinetic Video & Motion Cut",
      category: "CREATIVE MOTION",
      src: "assets/editing-with-ai.mp4",
      desc: "Short-form kinetic video cutting dengan sinkronisasi tempo dinamis, transisi tajam, dan sintesis visual generative.",
      tag: "VIDEO EDITING",
      span: "lg:col-span-8",
      aspect: "aspect-[16/10]"
    },
    {
      type: "image",
      title: "Avenor Chia Seed",
      category: "PACKAGING SYSTEM",
      src: "assets/avenor-chia-seed.jpg",
      desc: "Tactile matte pouch dielines dan minimal botanical typography untuk produk superfood.",
      tag: "PHYSICAL DIELINE",
      span: "lg:col-span-4",
      aspect: "aspect-[4/5]"
    },
    {
      type: "image",
      title: "Lumaskin Acne Series — Marketplace Feed",
      category: "MARKETPLACE DESIGN",
      src: "assets/lumaaskin acne.png",
      desc: "Desain visual listing & feed marketplace Shopee/Tokopedia untuk varian Acne Series, dioptimalkan untuk click-through rate (CTR) dan konversi penjualan produk skincare.",
      tag: "E-COMMERCE LISTING",
      span: "lg:col-span-4",
      aspect: "aspect-[4/5]"
    },
    {
      type: "image",
      title: "Lumaskin Brightening Series — Marketplace Hero",
      category: "MARKETPLACE DESIGN",
      src: "assets/lumaskinnn bright.png",
      desc: "Desain banner hero dan katalog marketplace beresolusi tinggi dengan penekanan benefit produk, formula klinis, dan estetika visual premium.",
      tag: "SHOPEE / TOKOPEDIA",
      span: "lg:col-span-4",
      aspect: "aspect-[4/5]"
    },
    {
      type: "image",
      title: "Loka Cibiru — Brand & Promotional Visual",
      category: "MARKETPLACE & PROMO DESIGN",
      src: "assets/lokacibiru.png",
      desc: "Materi visual promosi dan display marketplace komprehensif yang memadukan tipografi bold, penawaran menarik, dan komposisi produk yang stand out.",
      tag: "PROMO BANNER",
      span: "lg:col-span-4",
      aspect: "aspect-[4/5]"
    },
    {
      type: "image",
      title: "AI File Organizer System",
      category: "PRODUCT & UI DESIGN",
      src: "assets/ai-file-organizer.png",
      desc: "Arsitektur antarmuka sistem otomatisasi file media berbasis AI.",
      tag: "INTERFACE DESIGN",
      span: "lg:col-span-8",
      aspect: "aspect-[16/9]"
    },
    {
      type: "image",
      title: "Berka Pouch Packaging Architecture",
      category: "RETAIL PACKAGING",
      src: "assets/berka-pouch.png",
      desc: "Struktur layout kemasan retail pouch siap produksi massal.",
      tag: "RETAIL DIELINE",
      span: "lg:col-span-6",
      aspect: "aspect-[16/11]"
    },
    {
      type: "image",
      title: "Social Editorial Grid & Creative Distribution",
      category: "CONTENT ECOSYSTEM",
      src: "assets/media-instagram.jpg",
      desc: "Sistem visual konten editorial untuk distribusi multi-platform Instagram & TikTok.",
      tag: "CONTENT LAB",
      span: "lg:col-span-6",
      aspect: "aspect-[16/11]"
    }
  ];

  return `
    <!-- Studio.Design Exhibition Surface: Studio Canvas #eeeeee -->
    <section id="gallery" class="relative py-24 bg-[#eeeeee] border-b border-[#222222]/15 text-[#222222]">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <!-- Header: Inter 48px/700 with -1.92px tight tracking -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#222222]/20 pb-8 gap-6">
          <div class="max-w-3xl">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-2 h-2 rounded-[2px] bg-[#222222]"></span>
              <span class="text-xs font-semibold tracking-[-0.2px] text-[#555555] uppercase font-sans">
                GALLERY WALL · SELECTED EXHIBITS
              </span>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-2px] text-[#222222] leading-[1.05] uppercase">
              SHOWCASE HASIL KARYA
            </h2>
          </div>
          
          <div class="flex flex-col items-start md:items-end gap-3">
            <p class="text-sm font-normal text-[#555555] max-w-sm leading-relaxed md:text-right">
              Gallery wall in motion. Karya video edit, desain marketplace e-commerce, kemasan fisik, dan sistem digital yang dikurasi langsung.
            </p>
            <span class="text-[11px] font-mono uppercase tracking-tight text-[#555555]">
              [ 08 EXHIBITION TILES ]
            </span>
          </div>
        </div>

        <!-- Asymmetric Portfolio Mosaic Layout (Studio.Design Art-Board Collage) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          ${mediaItems.map((item, idx) => `
            <div class="${item.span} group flex flex-col justify-between">
              
              <!-- Mosaic Tile Surface (0px inner padding, 4px/8px corners, no box shadow) -->
              <div class="relative overflow-hidden rounded-[8px] bg-[#222222] border border-[#222222]/20 ${item.aspect} flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.01]">
                
                ${item.type === "video" ? `
                  <video 
                    src="${item.src}" 
                    controls 
                    playsinline 
                    preload="metadata"
                    class="w-full h-full object-cover bg-black"
                  ></video>
                ` : `
                  <img 
                    src="${item.src}" 
                    alt="${item.title}" 
                    loading="lazy" 
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onerror="this.onerror=null; this.src='./${item.src}';"
                  />
                `}

                <!-- Top Edge Metadata Badge (Minimal Charcoal Ink #222222 Pill/Badge) -->
                <div class="absolute top-4 left-4 z-10 pointer-events-none">
                  <span class="px-3 py-1 rounded-[4px] bg-[#222222]/90 backdrop-blur-md text-[10px] font-semibold tracking-[-0.2px] text-white uppercase">
                    ${item.tag}
                  </span>
                </div>

                <div class="absolute top-4 right-4 z-10 pointer-events-none">
                  <span class="px-2 py-0.5 rounded-[4px] bg-white/90 text-[10px] font-mono font-bold text-[#222222]">
                    0${idx + 1}
                  </span>
                </div>

              </div>

              <!-- Editorial Typography Caption (Charcoal Ink #222222, Inter tightly tracked) -->
              <div class="mt-4 flex flex-col justify-between">
                <div class="flex items-center justify-between border-b border-[#222222]/15 pb-2.5">
                  <span class="text-[11px] font-semibold tracking-[-0.2px] text-[#555555] uppercase">
                    ${item.category}
                  </span>
                  <span class="text-[11px] font-mono text-[#555555]">
                    ${item.type === "video" ? "MOTION REEL" : "MARKETPLACE / DESIGN"}
                  </span>
                </div>

                <div class="mt-2.5 flex items-start justify-between gap-4">
                  <div>
                    <h3 class="text-xl sm:text-2xl font-bold tracking-[-0.8px] text-[#222222] leading-tight group-hover:text-black transition-colors">
                      ${item.title}
                    </h3>
                    <p class="text-xs text-[#555555] font-normal leading-relaxed mt-1.5 max-w-xl">
                      ${item.desc}
                    </p>
                  </div>

                  <!-- Compact Dark Arrow Control (Studio.Design 4px/8px button) -->
                  <a href="#contact" class="flex-shrink-0 mt-1 w-9 h-9 rounded-[4px] bg-[#222222] hover:bg-black text-white flex items-center justify-center text-xs transition-colors" title="Discuss Project">
                    ↗
                  </a>
                </div>
              </div>

            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}
