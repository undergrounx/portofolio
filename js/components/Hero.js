import { portfolioData } from "../data.js";

export function renderHero() {
  const p = portfolioData.profile;
  const b = p.availabilityBadge;

  return `
    <section id="hero" class="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-radial-hero">
      
      <!-- Background Ambient Glow & Lighting -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-800/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/3 right-1/4 w-80 h-80 bg-slate-700/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl w-full mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[75vh]">
          
          <!-- Left Column: Towering Editorial Typography -->
          <div class="lg:col-span-7 flex flex-col justify-center select-none pt-4">
            
            <!-- Eyebrow -->
            <div class="flex items-center gap-3 mb-4 lg:mb-6">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-slate-300 uppercase">
                ${p.eyebrow}
              </span>
            </div>

            <!-- Towering Headline -->
            <h1 class="hero-headline-title font-display text-[4.8rem] sm:text-[6.4rem] md:text-[7.8rem] lg:text-[8.8rem] font-bold text-white tracking-tight uppercase leading-[0.85] select-none">
              <span>${p.headlineLine1}</span><br />
              <span class="text-slate-200 font-editorial tracking-tight font-extrabold">${p.headlineLine2}</span>
            </h1>

            <!-- Supporting Paragraph -->
            <p class="mt-6 lg:mt-8 text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              ${p.supportingLine}
            </p>

            <!-- Positioning Subtext -->
            <div class="mt-3 text-xs lg:text-sm text-slate-400 font-mono">
              ${p.descriptor}
            </div>

            <!-- Hero Action Buttons -->
            <div class="mt-8 lg:mt-10 flex flex-wrap items-center gap-4">
              <a href="#work" class="btn-pill-primary">
                ${p.ctaPrimary} ↗
              </a>
              <a href="#contact" class="btn-pill-ghost">
                ${p.ctaSecondary} ↗
              </a>
            </div>

          </div>

          <!-- Right Column: Interactive 3D WebGL Centerpiece + Availability Badge -->
          <div class="lg:col-span-5 relative flex items-center justify-center min-h-[460px] lg:min-h-[640px]">
            
            <!-- WebGL Canvas Container -->
            <div id="hero-3d-container" class="w-full h-[460px] lg:h-[640px] relative flex items-center justify-center cursor-grab active:cursor-grabbing">
              <canvas id="hero-webgl-canvas" class="w-full h-full block"></canvas>
              
              <!-- Subtle 3D Hint Badge -->
              <div class="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[9px] font-mono text-slate-400 uppercase tracking-widest pointer-events-none">
                ✦ 3D SCULPTURE · DRAG TO ROTATE
              </div>
            </div>

            <!-- Editorial Availability Badge -->
            <div class="absolute right-2 bottom-6 lg:right-0 lg:bottom-12 z-20">
              <a href="${b.link}" class="hero-availability-badge block p-4 lg:p-5 text-right no-underline group">
                <div class="flex items-center justify-end gap-2 mb-1">
                  <span class="text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                    ${b.tag}
                  </span>
                  <span class="text-white text-xs group-hover:rotate-45 transition-transform">✦</span>
                </div>
                <div class="text-xs lg:text-sm font-bold text-white tracking-wider uppercase">
                  ${b.title}
                </div>
                <div class="text-[10px] font-semibold text-slate-300 tracking-wider uppercase group-hover:text-emerald-400 transition-colors">
                  ${b.sub}
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  `;
}
