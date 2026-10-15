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
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[75vh]">
          
          <!-- Left Column: Towering Editorial Typography -->
          <div class="lg:col-span-7 xl:col-span-7 flex flex-col justify-center select-none pt-4 lg:pr-6 z-10">
            
            <!-- Eyebrow -->
            <div class="flex items-center gap-3 mb-4 lg:mb-6">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-slate-300 uppercase">
                ${p.eyebrow}
              </span>
            </div>

            <!-- Towering Headline -->
            <h1 class="hero-headline-title font-display font-bold text-white tracking-tight uppercase leading-[0.85] select-none break-words">
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
          <div class="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[420px] lg:min-h-[580px]">
            
            <!-- WebGL Canvas Container -->
            <div id="hero-3d-container" class="w-full h-[360px] sm:h-[420px] lg:h-[580px] relative flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none">
              <canvas id="hero-webgl-canvas" class="w-full h-full block"></canvas>
              
              <!-- Subtle 3D Hint Badge -->
              <div class="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[9px] font-mono text-slate-300 uppercase tracking-widest pointer-events-none flex items-center gap-1.5 shadow-lg">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span>✦ 3D SCULPTURE · DRAG / TOUCH</span>
              </div>
            </div>

            <!-- Editorial Availability Badge -->
            <div class="absolute right-0 -bottom-4 lg:right-0 lg:bottom-4 z-20 pointer-events-auto">
              <a href="${b.link}" class="hero-availability-badge block p-3.5 sm:p-4 lg:p-5 text-right no-underline group shadow-2xl">
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
