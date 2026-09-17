import { portfolioData } from "../data.js";

export function renderStats() {
  const getIconSvg = (iconName) => {
    switch (iconName) {
      case "sparkle":
        return `<svg class="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg>`;
      case "box":
        return `<svg class="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;
      case "cpu":
        return `<svg class="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`;
      case "infinity":
        return `<svg class="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="12" r="4"/><circle cx="16" cy="12" r="4"/></svg>`;
      default:
        return `<span class="text-xs text-slate-400">✦</span>`;
    }
  };

  return `
    <section id="statistics-section" class="relative z-20 -mt-6 lg:-mt-10 mb-20 lg:mb-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <!-- Single Horizontal Panel (Ref Match) -->
        <div class="card-panel p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            
            ${portfolioData.stats.map((stat, idx) => `
              <div class="flex flex-col items-center text-center relative px-4 ${idx < 3 ? 'md:border-r border-white/10' : ''}">
                
                <!-- Icon -->
                <div class="mb-3 flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.04]">
                  ${getIconSvg(stat.icon)}
                </div>

                <!-- Number with counter trigger -->
                <div class="stat-number text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2" data-target="${stat.numericValue !== null ? stat.numericValue : ''}" data-suffix="${stat.suffix}">
                  ${stat.number}
                </div>

                <!-- Uppercase Label -->
                <div class="text-[11px] lg:text-xs font-bold tracking-widest text-slate-400 uppercase">
                  ${stat.label}
                </div>

                <!-- Micro Sublabel -->
                <div class="text-[9px] font-medium text-slate-500 uppercase tracking-wider mt-1">
                  ${stat.sublabel}
                </div>

              </div>
            `).join("")}

          </div>
        </div>

      </div>
    </section>
  `;
}

export function initStatsAnimation() {
  const statElements = document.querySelectorAll(".stat-number");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = el.getAttribute("data-target");
        const suffix = el.getAttribute("data-suffix") || "";

        if (targetVal) {
          const target = parseInt(targetVal, 10);
          let current = 0;
          const step = Math.max(1, Math.floor(target / 25));
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            const formatted = current < 10 ? `0${current}` : `${current}`;
            el.textContent = `${formatted}${suffix}`;
          }, 35);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statElements.forEach(el => observer.observe(el));
}
