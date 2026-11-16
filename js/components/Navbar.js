import { portfolioData } from "../data.js";

export function renderNavbar() {
  const p = portfolioData.profile;

  return `
    <!-- Top Announcement Marquee Strip -->
    <div class="slush-marquee-track">
      <div class="slush-marquee-content">
        <span>MUADZ — VISUAL DESIGNER (DKV) · AI CONTROLLER</span>
        <span>•</span>
        <span>CRAFTING FORM · DIRECTING INTELLIGENCE</span>
        <span>•</span>
        <span>AUTONOMOUS WORKFLOWS &amp; PRODUCTION DESIGN PIPELINES</span>
        <span>•</span>
        <span>OPEN FOR HIGH-IMPACT COMMISSIONS</span>
      </div>
      <div class="slush-marquee-content" aria-hidden="true">
        <span>MUADZ — VISUAL DESIGNER (DKV) · AI CONTROLLER</span>
        <span>•</span>
        <span>CRAFTING FORM · DIRECTING INTELLIGENCE</span>
        <span>•</span>
        <span>AUTONOMOUS WORKFLOWS &amp; PRODUCTION DESIGN PIPELINES</span>
        <span>•</span>
        <span>OPEN FOR HIGH-IMPACT COMMISSIONS</span>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header id="site-header" class="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-md py-3 px-4 sm:px-8 border-b border-black/10">
      <div class="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        
        <!-- Logo Mark: Subtle Monogram -->
        <a href="#hero" class="flex items-center gap-2.5 no-underline group">
          <div class="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-display font-bold text-sm group-hover:bg-[#145ebb] transition-colors">
            M
          </div>
          <div class="hidden sm:flex flex-col">
            <span class="text-xs font-semibold tracking-wider text-slate-900 uppercase">${p.name}</span>
            <span class="text-[10px] font-mono text-slate-500">DKV × AI CONTROLLER</span>
          </div>
        </a>

        <!-- Pill Nav: Center Links -->
        <nav class="hidden md:flex items-center gap-1 bg-white p-1 rounded-full border border-black/10 shadow-sm">
          <a href="./gallery/" class="nav-link font-semibold text-[#145ebb] bg-blue-50/50" target="_self">COSMOS GALLERY ↗</a>
          <a href="#work" class="nav-link" data-section="work">WORK</a>
          <a href="#brands-handling" class="nav-link" data-section="brands-handling">BRANDS</a>
          <a href="#media-creative" class="nav-link" data-section="media-creative">MEDIA</a>
          <a href="#about" class="nav-link" data-section="about">ABOUT</a>
          <a href="#capabilities" class="nav-link" data-section="capabilities">CAPABILITIES</a>
          <a href="#contact" class="nav-link" data-section="contact">CONTACT</a>
        </nav>

        <!-- Right Side: Status + Primary Action -->
        <div class="flex items-center gap-2.5">
          <button id="nav-workflow-trigger" type="button" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs font-mono font-medium hover:border-black/30 transition-colors cursor-pointer text-slate-700">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>24H PIPELINE</span>
          </button>

          <!-- Filled CTA Button: Primary Action -->
          <a href="#contact" class="btn-slush-filled text-xs">
            INITIATE BRIEF ↗
          </a>
        </div>

      </div>
    </header>
  `;
}

export function initNavbarEvents() {
  // Mobile nav toggles or micro interactions if needed
}
