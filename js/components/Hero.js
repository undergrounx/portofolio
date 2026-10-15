import { portfolioData } from "../data.js";

export function renderHero() {
  const p = portfolioData.profile;
  const b = p.availabilityBadge;

  return `
    <section id="hero" class="relative min-h-[100dvh] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24 2xl:pt-44 2xl:pb-32 flex items-center justify-center overflow-hidden bg-radial-hero">
      
      <!-- Background Ambient Glow & Lighting -->
      <div class="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 2xl:w-[500px] 2xl:h-[500px] bg-slate-800/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/3 right-1/4 w-60 h-60 sm:w-80 sm:h-80 2xl:w-[450px] 2xl:h-[450px] bg-slate-700/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl 2xl:max-w-[1700px] w-full mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 2xl:gap-16 items-center min-h-[70vh] 2xl:min-h-[75vh]">
          
          <!-- Left Column: Towering Editorial Typography -->
          <div class="lg:col-span-7 2xl:col-span-7 flex flex-col justify-center select-none pt-2 sm:pt-4 lg:pr-6 2xl:pr-12 z-10">
            
            <!-- Eyebrow -->
            <div class="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-4 lg:mb-6">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-[10px] sm:text-[11px] lg:text-xs 2xl:text-sm font-bold tracking-[0.2em] text-slate-300 uppercase">
                ${p.eyebrow}
              </span>
            </div>

            <!-- Towering Headline -->
            <h1 class="hero-headline-title font-display font-bold text-white tracking-tight uppercase leading-[0.88] select-none break-words">
              <span>${p.headlineLine1}</span><br />
              <span class="text-slate-200 font-editorial tracking-tight font-extrabold">${p.headlineLine2}</span>
            </h1>

            <!-- Supporting Paragraph -->
            <p class="mt-5 sm:mt-6 lg:mt-8 2xl:mt-10 text-sm sm:text-base lg:text-lg 2xl:text-xl text-slate-300 max-w-xl 2xl:max-w-2xl font-normal leading-relaxed">
              ${p.supportingLine}
            </p>

            <!-- Positioning Subtext -->
            <div class="mt-2.5 sm:mt-3 2xl:mt-4 text-xs sm:text-sm 2xl:text-base text-slate-400 font-mono">
              ${p.descriptor}
            </div>

            <!-- Hero Action Buttons -->
            <div class="mt-7 sm:mt-8 lg:mt-10 2xl:mt-12 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a href="#work" class="btn-pill-primary 2xl:text-xs 2xl:py-3.5 2xl:px-8">
                ${p.ctaPrimary} ↗
              </a>
              <a href="#contact" class="btn-pill-ghost 2xl:text-xs 2xl:py-3.5 2xl:px-8">
                ${p.ctaSecondary} ↗
              </a>
            </div>

          </div>

          <!-- Right Column: Interactive 3D WebGL Centerpiece + Availability Badge -->
          <div class="lg:col-span-5 2xl:col-span-5 relative flex items-center justify-center min-h-[320px] sm:min-h-[400px] lg:min-h-[540px] 2xl:min-h-[680px]">
            
            <!-- WebGL Canvas Container -->
            <div id="hero-3d-container" class="w-full h-[320px] sm:h-[400px] lg:h-[540px] 2xl:h-[680px] relative flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none">
              <canvas id="hero-webgl-canvas" class="w-full h-full block"></canvas>
              
              <!-- Subtle 3D Hint Badge -->
              <div class="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 px-2.5 py-1 sm:px-3 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[8.5px] sm:text-[9px] 2xl:text-[10px] font-mono text-slate-300 uppercase tracking-widest pointer-events-none flex items-center gap-1.5 shadow-lg">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span>✦ 3D SCULPTURE · DRAG / TOUCH</span>
              </div>
            </div>

            <!-- Editorial Availability Badge -->
            <div class="hidden sm:block absolute right-0 -bottom-3 sm:-bottom-4 lg:right-0 lg:bottom-4 2xl:bottom-8 z-20 pointer-events-auto">
              <a href="${b.link}" class="hero-availability-badge block p-3.5 sm:p-4 lg:p-5 2xl:p-6 text-right no-underline group shadow-2xl">
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
