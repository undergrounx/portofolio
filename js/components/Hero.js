import { portfolioData } from "../data.js";

export function renderHero() {
  const p = portfolioData.profile;

  return `
    <section id="hero" class="relative min-h-[92vh] bg-[#dceeff] pt-12 pb-20 px-4 sm:px-8 overflow-hidden flex flex-col justify-center items-center text-center">
      
      <!-- Custom JPEG Background from Assets with Cover & Subtle Blending -->
      <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="assets/BACKGROUND.jpeg" 
          alt="Slush Universe Background" 
          class="w-full h-full object-cover object-center select-none"
          onerror="this.onerror=null; this.src='./assets/BACKGROUND.jpeg';"
        />
        <!-- Optional soft paper wash overlay to maintain contrast & crisp text -->
        <div class="absolute inset-0 bg-[#dceeff]/20 backdrop-blur-[0.5px]"></div>
      </div>

      <!-- Floating Playful Stickers with Smooth Levitation Animation -->
      <!-- Sticker 1: Rocket in Ember #fb4903 -->
      <div class="animate-sticker-1 absolute top-8 sm:top-12 left-3 sm:left-16 z-20 cursor-pointer">
        <div class="slush-sticker bg-[#fb4903] text-white">
          <span class="text-sm sm:text-base">🚀</span>
          <span>AI SYSTEMS</span>
        </div>
      </div>

      <!-- Sticker 2: Coin in Sunburst #ffd731 -->
      <div class="animate-sticker-2 absolute top-12 sm:top-20 right-3 sm:right-20 z-20 cursor-pointer">
        <div class="slush-sticker bg-[#ffd731] text-black">
          <span class="text-sm sm:text-base">🪙</span>
          <span>HIGH VALUE</span>
        </div>
      </div>

      <!-- Sticker 3: Wallet in Voltage Violet #5c4ade -->
      <div class="animate-sticker-3 absolute bottom-24 sm:bottom-28 left-2 sm:left-24 z-20 cursor-pointer">
        <div class="slush-sticker bg-[#5c4ade] text-white">
          <span class="text-sm sm:text-base">⚡</span>
          <span>PROMPT LAB</span>
        </div>
      </div>

      <!-- Sticker 4: Checkmark in Mint Pop #55db9c -->
      <div class="animate-sticker-4 absolute bottom-20 sm:bottom-24 right-2 sm:right-28 z-20 cursor-pointer">
        <div class="slush-sticker bg-[#55db9c] text-black">
          <span class="text-sm sm:text-base">✅</span>
          <span>DKV CERTIFIED</span>
        </div>
      </div>

      <!-- Main Headline Content: Sculptural Lateral Block -->
      <div class="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center">
        
        <!-- Live Tagline Subhead -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black mb-6">
          <span class="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black animate-pulse"></span>
          <span class="text-xs font-bold tracking-wider uppercase text-black">VISUAL DESIGNER × AI CONTROLLER</span>
        </div>

        <!-- Monumental Crushed Display Headline -->
        <h1 class="font-display-lateral text-[68px] sm:text-[130px] md:text-[170px] lg:text-[220px] text-black leading-[0.78] tracking-tight uppercase select-none">
          MUADZ
        </h1>

        <!-- Secondary crushed title block -->
        <div class="font-display-lateral text-[24px] sm:text-[42px] md:text-[54px] text-black leading-[0.85] tracking-tight uppercase mt-4">
          CRAFTING FORM · DIRECTING INTELLIGENCE
        </div>

        <!-- Tagline Subhead -->
        <p class="mt-6 text-sm sm:text-lg md:text-xl text-black/90 max-w-2xl font-medium leading-snug px-4">
          ${p.supportingLine}
        </p>

        <!-- Ghost Action Buttons -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a href="#work" class="btn-slush-filled text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 sm:py-3.5">
            ${p.ctaPrimary} ↗
          </a>
          <a href="#contact" class="btn-slush-ghost text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 sm:py-3.5">
            ${p.ctaSecondary} ↗
          </a>
          <button id="open-workflow-btn" type="button" class="btn-slush-ghost bg-[#e9ccff] text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 sm:py-3.5 hover:bg-[#d8b4fe]">
            24H SCHEDULE ↗
          </button>
        </div>

      </div>

    </section>
  `;
}
