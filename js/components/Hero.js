import { portfolioData } from "../data.js";
import { renderCardGlobeWhite } from "./SparklesGlobe.js";

export function renderHero() {
  const p = portfolioData.profile;

  return `
    <section id="hero" class="relative min-h-[92vh] bg-[#f8fafc] pt-12 pb-20 px-4 sm:px-8 overflow-hidden flex flex-col justify-center items-center text-center border-b border-black/10">
      
      <!-- SCROLL-CRAFT PLANE 1: Atmospheric Background Grid & Subtle Radiance -->
      <div class="scroll-plane-bg absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-70">
        <div class="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]"></div>
      </div>

      <!-- Main Dimensional Content Container -->
      <div class="relative z-10 max-w-[1240px] mx-auto flex flex-col items-center w-full">
        
        <!-- Status Pill: Editorial Authority Badge (No emojis) -->
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-black/15 mb-6 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#145ebb] animate-pulse"></span>
          <span class="text-[11px] font-mono font-semibold tracking-wider uppercase text-black/80">
            VISUAL DESIGNER (DKV) · AI CONTROLLER
          </span>
        </div>

        <!-- SCROLL-CRAFT PLANE 2: Sculptural Typography Headline -->
        <div class="scroll-plane-mid flex flex-col items-center">
          <h1 class="font-display text-[54px] sm:text-[96px] md:text-[124px] lg:text-[148px] text-[#0f172a] leading-[0.88] tracking-tight uppercase select-none">
            MUADZ
          </h1>
          
          <div class="font-mono text-xs sm:text-sm md:text-base font-semibold tracking-widest text-[#145ebb] uppercase mt-4">
            CRAFTING VISUAL FORM · DIRECTING SYSTEMIC INTELLIGENCE
          </div>

          <p class="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed px-4">
            ${p.supportingLine}
          </p>
        </div>

        <!-- SCROLL-CRAFT PLANE 3: Centerpiece — CardGlobeWhite (Cobe Earth with radial grid & metallic gradient) -->
        <div class="w-full max-w-2xl mx-auto my-4">
          ${renderCardGlobeWhite()}
        </div>

        <!-- SCROLL-CRAFT PLANE 4: Foreground Interactive Actions & Live Capabilities -->
        <div class="scroll-plane-fg flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
          <a href="#work" class="btn-slush-filled text-xs sm:text-sm px-7 py-3">
            ${p.ctaPrimary} ↗
          </a>
          <a href="./gallery/" class="btn-slush-ghost text-xs sm:text-sm px-6 py-3 font-semibold text-[#0f172a]">
            COSMOS GALLERY ↗
          </a>
          <button id="open-workflow-btn" type="button" class="btn-slush-ghost text-xs sm:text-sm px-6 py-3">
            24H SCHEDULE ↗
          </button>
        </div>

      </div>

    </section>
  `;
}
