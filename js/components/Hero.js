import { portfolioData } from "../data.js";

export function renderHero() {
  const p = portfolioData.profile;
  const b = p.availabilityBadge;

  return `
    <section id="hero" class="relative min-h-[90vh] bg-[#dceeff] pt-12 pb-20 px-4 sm:px-8 overflow-hidden flex flex-col justify-center items-center text-center">
      
      <!-- 3D Ribbon Elements (Rendered SVG tubular forms in Electric Blue #4da2ff) -->
      <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <!-- Background Giant Inflatable 3D Ribbon Curve -->
        <svg class="w-[1200px] h-[600px] max-w-none opacity-90 transform -rotate-6 translate-y-8 select-none" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ribbonShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#72b6ff" />
              <stop offset="40%" stop-color="#4da2ff" />
              <stop offset="80%" stop-color="#2382f0" />
              <stop offset="100%" stop-color="#145ebb" />
            </linearGradient>
            <filter id="grainy" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.12 0" />
              <feComposite in2="SourceGraphic" in="gl" operator="in" />
            </filter>
          </defs>
          <!-- Chunky 3D tubular ribbon path -->
          <path d="M 50 350 C 250 100, 450 480, 700 200 C 850 40, 950 300, 980 220" 
                stroke="url(#ribbonShine)" 
                stroke-width="110" 
                stroke-linecap="round" 
                stroke-linejoin="round" />
          <path d="M 50 350 C 250 100, 450 480, 700 200 C 850 40, 950 300, 980 220" 
                stroke="#000000" 
                stroke-width="114" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="opacity-15 -translate-y-2 -translate-x-1" />
        </svg>
      </div>

      <!-- Floating Playful Stickers (Confetti Rainbow Palette) -->
      <!-- Sticker 1: Rocket in Ember #fb4903 -->
      <div class="absolute top-12 left-6 sm:left-16 z-20 transform -rotate-12 hover:rotate-0 transition-transform cursor-pointer">
        <div class="slush-sticker bg-[#fb4903] text-white shadow-none">
          <span class="text-base">🚀</span>
          <span>AI SYSTEMS</span>
        </div>
      </div>

      <!-- Sticker 2: Coin in Sunburst #ffd731 -->
      <div class="absolute top-20 right-6 sm:right-20 z-20 transform rotate-12 hover:rotate-0 transition-transform cursor-pointer">
        <div class="slush-sticker bg-[#ffd731] text-black">
          <span class="text-base">🪙</span>
          <span>HIGH VALUE</span>
        </div>
      </div>

      <!-- Sticker 3: Wallet in Voltage Violet #5c4ade -->
      <div class="absolute bottom-28 left-4 sm:left-24 z-20 transform rotate-6 hover:rotate-0 transition-transform cursor-pointer">
        <div class="slush-sticker bg-[#5c4ade] text-white">
          <span class="text-base">⚡</span>
          <span>PROMPT LAB</span>
        </div>
      </div>

      <!-- Sticker 4: Checkmark in Mint Pop #55db9c -->
      <div class="absolute bottom-24 right-4 sm:right-28 z-20 transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer">
        <div class="slush-sticker bg-[#55db9c] text-black">
          <span class="text-base">✅</span>
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

        <!-- Monumental Crushed Display Headline (Lateral 800 at 120-240px, line-height 0.78) -->
        <h1 class="font-display-lateral text-[72px] sm:text-[140px] md:text-[180px] lg:text-[220px] text-black leading-[0.78] tracking-tight uppercase select-none drop-shadow-sm">
          MUADZ
        </h1>

        <!-- Secondary crushed title block -->
        <div class="font-display-lateral text-[28px] sm:text-[46px] md:text-[60px] text-black leading-[0.85] tracking-tight uppercase mt-4">
          CRAFTING FORM · DIRECTING INTELLIGENCE
        </div>

        <!-- Tagline Subhead: Aeonik Pro 500 at 18-24px -->
        <p class="mt-6 text-base sm:text-xl text-black/85 max-w-2xl font-medium leading-snug">
          ${p.supportingLine}
        </p>

        <!-- Ghost Action Buttons -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#work" class="btn-slush-filled text-sm sm:text-base px-8 py-3.5">
            ${p.ctaPrimary} ↗
          </a>
          <a href="#contact" class="btn-slush-ghost text-sm sm:text-base px-8 py-3.5">
            ${p.ctaSecondary} ↗
          </a>
          <button id="open-workflow-btn" type="button" class="btn-slush-ghost bg-[#e9ccff] text-sm sm:text-base px-8 py-3.5 hover:bg-[#d8b4fe]">
            24H SCHEDULE ↗
          </button>
        </div>

      </div>

    </section>
  `;
}
