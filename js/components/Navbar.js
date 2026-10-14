import { portfolioData } from "../data.js";

export function renderNavbar() {
  const p = portfolioData.profile;

  return `
    <header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        <!-- Left: Monogram Mark & Subtitle -->
        <a href="#hero" class="flex items-center gap-2 group text-decoration-none">
          <div class="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center transition-all group-hover:border-white/30 group-hover:bg-white/[0.08]">
            <span class="monogram-mark text-xl font-bold tracking-tighter">${p.monogram}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-xs font-bold tracking-widest text-white uppercase">${p.name}</span>
            <span class="text-[9px] font-medium tracking-wider text-slate-400 uppercase">${p.brandLabel}</span>
          </div>
        </a>

        <!-- Center: Nav Items (Desktop) -->
        <nav class="hidden md:flex items-center gap-8 lg:gap-10">
          <a href="#work" class="nav-link" data-section="work">WORK</a>
          <a href="#about" class="nav-link" data-section="about">ABOUT</a>
          <a href="#capabilities" class="nav-link" data-section="capabilities">CAPABILITIES</a>
          <a href="#process" class="nav-link" data-section="process">PROCESS</a>
          <a href="#contact" class="nav-link" data-section="contact">CONTACT</a>
        </nav>

        <!-- Right: CTA Button -->
        <div class="flex items-center gap-4">
          <a href="#contact" class="btn-pill-primary hidden sm:inline-flex">
            LET'S TALK ↗
          </a>

          <!-- Mobile Hamburger -->
          <button id="mobile-menu-btn" aria-label="Toggle Navigation Menu" class="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 text-white">
            <span class="w-5 h-[1.5px] bg-white transition-all"></span>
            <span class="w-5 h-[1.5px] bg-white transition-all"></span>
          </button>
        </div>

      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-drawer" class="hidden md:hidden fixed inset-0 top-20 bg-[#080808]/98 backdrop-blur-2xl border-t border-white/10 p-8 flex-col justify-between z-40">
        <div class="flex flex-col gap-6 pt-4">
          <a href="#work" class="mobile-nav-link text-2xl font-bold tracking-tight text-white hover:text-slate-400">WORK ↗</a>
          <a href="#about" class="mobile-nav-link text-2xl font-bold tracking-tight text-white hover:text-slate-400">ABOUT ↗</a>
          <a href="#capabilities" class="mobile-nav-link text-2xl font-bold tracking-tight text-white hover:text-slate-400">CAPABILITIES ↗</a>
          <a href="#process" class="mobile-nav-link text-2xl font-bold tracking-tight text-white hover:text-slate-400">PROCESS ↗</a>
          <a href="#contact" class="mobile-nav-link text-2xl font-bold tracking-tight text-white hover:text-slate-400">CONTACT ↗</a>
        </div>
        <div class="pt-8 border-t border-white/10 flex flex-col gap-4">
          <div class="text-xs text-slate-500 uppercase tracking-widest">Connect with Muadz</div>
          <div class="flex gap-6">
            <a href="${portfolioData.contact.whatsappUrl}" target="_blank" class="text-sm font-semibold text-emerald-400">WhatsApp ↗</a>
            <a href="${portfolioData.contact.instagramUrl}" target="_blank" class="text-sm font-semibold text-slate-300">Instagram ↗</a>
          </div>
        </div>
      </div>
    </header>
  `;
}

export function initNavbarEvents() {
  const header = document.getElementById("site-header");
  const menuBtn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("nav-glass");
    } else {
      header.classList.remove("nav-glass");
    }
  }, { passive: true });

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
