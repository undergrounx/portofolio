import { portfolioData } from "../data.js";

export function renderNavbar() {
  const p = portfolioData.profile;

  return `
    <!-- Top Announcement Marquee Strip -->
    <div class="slush-marquee-track">
      <div class="slush-marquee-content">
        <span>✦ MUADZ — VISUAL DESIGNER × AI CONTROLLER</span>
        <span>✦ INFLATABLE STICKER UNIVERSE</span>
        <span>✦ CRAFTING FORM · DIRECTING INTELLIGENCE</span>
        <span>✦ 24-HOUR AUTONOMOUS &amp; DESIGN PIPELINES</span>
        <span>✦ OPEN FOR HIGH-IMPACT COLLABORATIONS</span>
      </div>
      <div class="slush-marquee-content" aria-hidden="true">
        <span>✦ MUADZ — VISUAL DESIGNER × AI CONTROLLER</span>
        <span>✦ INFLATABLE STICKER UNIVERSE</span>
        <span>✦ CRAFTING FORM · DIRECTING INTELLIGENCE</span>
        <span>✦ 24-HOUR AUTONOMOUS &amp; DESIGN PIPELINES</span>
        <span>✦ OPEN FOR HIGH-IMPACT COLLABORATIONS</span>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header id="site-header" class="sticky top-0 z-50 bg-[#dceeff]/90 backdrop-blur-md py-3 px-4 sm:px-8 border-b border-black">
      <div class="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        
        <!-- Logo Mark: Circular black-outlined 'M' badge -->
        <a href="#hero" class="flex items-center gap-2.5 no-underline group">
          <div class="w-11 h-11 rounded-full bg-white border border-black flex items-center justify-center font-bold text-lg text-black group-hover:scale-105 transition-transform">
            M
          </div>
          <div class="hidden sm:flex flex-col">
            <span class="text-xs font-bold tracking-wider text-black uppercase">${p.name}</span>
            <span class="text-[10px] font-medium tracking-tight text-black/70">DESIGN × AI</span>
          </div>
        </a>

        <!-- Pill Nav: Center Links -->
        <nav class="hidden md:flex items-center gap-1.5 bg-white/50 p-1.5 rounded-full border border-black">
          <a href="./gallery/" class="nav-link font-bold text-[#0d0d0d] bg-white px-3 py-1 rounded-full border border-black/20" target="_self">GALLERY ↗</a>
          <a href="#work" class="nav-link" data-section="work">WORK</a>
          <a href="#brands-handling" class="nav-link" data-section="brands-handling">BRANDS</a>
          <a href="#media-creative" class="nav-link" data-section="media-creative">MEDIA</a>
          <a href="#about" class="nav-link" data-section="about">ABOUT</a>
          <a href="#capabilities" class="nav-link" data-section="capabilities">CAPABILITIES</a>
          <a href="#contact" class="nav-link" data-section="contact">CONTACT</a>
        </nav>

        <!-- Right Side: 24H Live Status + Primary Action -->
        <div class="flex items-center gap-2.5">
          <button id="nav-workflow-trigger" type="button" class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-black text-xs font-bold tracking-wide hover:bg-[#e9ccff] transition-colors cursor-pointer">
            <span class="w-2 h-2 rounded-full bg-[#55db9c] border border-black animate-pulse"></span>
            <span>24H STATUS</span>
          </button>

          <!-- Filled CTA Button: Primary Action -->
          <a href="#contact" class="btn-slush-filled text-xs">
            LET'S TALK ↗
          </a>

          <!-- Mobile Hamburger -->
          <button id="mobile-menu-btn" aria-label="Toggle Navigation Menu" class="md:hidden w-10 h-10 rounded-full bg-white border border-black flex flex-col items-center justify-center gap-1">
            <span class="w-4 h-[2px] bg-black"></span>
            <span class="w-4 h-[2px] bg-black"></span>
          </button>
        </div>

      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-drawer" class="hidden md:hidden fixed inset-x-0 top-[90px] bg-white border-b-2 border-black p-6 flex-col gap-4 shadow-xl z-40">
        <a href="./gallery/" class="mobile-nav-link text-lg font-bold tracking-tight text-black hover:text-[#4da2ff]">COSMOS GALLERY (KARYA) ↗</a>
        <a href="#work" class="mobile-nav-link text-lg font-bold tracking-tight text-black hover:text-[#4da2ff]">SELECTED WORK ↗</a>
        <a href="#brands-handling" class="mobile-nav-link text-lg font-bold tracking-tight text-black hover:text-[#4da2ff]">BRANDS ↗</a>
        <a href="#media-creative" class="mobile-nav-link text-lg font-bold tracking-tight text-black hover:text-[#4da2ff]">MEDIA CREATIVE ↗</a>
        <a href="#about" class="mobile-nav-link text-lg font-bold tracking-tight text-black hover:text-[#4da2ff]">ABOUT MUADZ ↗</a>
        <a href="#capabilities" class="mobile-nav-link text-lg font-bold tracking-tight text-black hover:text-[#4da2ff]">CAPABILITIES ↗</a>
        <a href="#contact" class="mobile-nav-link text-lg font-bold tracking-tight text-black hover:text-[#4da2ff]">CONTACT ↗</a>
      </div>
    </header>
  `;
}

export function initNavbarEvents() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  if (menuBtn && drawer) {
    menuBtn.addEventListener("click", () => {
      drawer.classList.toggle("hidden");
      drawer.classList.toggle("flex");
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (drawer) {
        drawer.classList.add("hidden");
        drawer.classList.remove("flex");
      }
    });
  });
}
