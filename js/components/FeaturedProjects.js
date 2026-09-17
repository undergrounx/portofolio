import { portfolioData } from "../data.js";
import { soundManager } from "./Audio.js";
import { projectModal } from "./ProjectModal.js";

export function renderFeaturedProjects() {
  const [p1, p2, p3, p4] = portfolioData.featuredProjects;

  return `
    <section id="work" class="relative py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <!-- Header Row (Ref Match: Title Left, Link Right) -->
        <div class="flex items-center justify-between mb-10 lg:mb-14">
          <div>
            <div class="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-1">PORTFOLIO ARCHITECTURE</div>
            <h2 class="text-xs lg:text-sm font-bold tracking-[0.2em] text-white uppercase">
              FEATURED WORK
            </h2>
          </div>
          
          <a href="#contact" class="text-[11px] lg:text-xs font-bold tracking-widest text-slate-400 hover:text-white uppercase flex items-center gap-2 group transition-colors">
            <span>EXPLORE ALL PROJECTS</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <!-- 3 Primary Project Cards (Ref Match: 3 Column Grid) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          ${[p1, p2, p3].map((project) => `
            <div class="card-panel p-5 lg:p-6 flex flex-col justify-between cursor-pointer group" data-project-id="${project.id}">
              
              <!-- Card Visual Container -->
              <div class="project-card-image-box mb-6">
                <img src="${project.image}" alt="${project.title}" loading="lazy" />
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[9px] font-mono text-slate-300 uppercase tracking-wider backdrop-blur-md">
                  ${project.badge}
                </div>
              </div>

              <!-- Card Content Details -->
              <div>
                <div class="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">
                  ${project.category}
                </div>
                <h3 class="text-xl lg:text-2xl font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                  ${project.title}
                </h3>
                <p class="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  ${project.shortDesc}
                </p>
              </div>

              <!-- Bottom Row: Tags + Circular Arrow Button (Ref Match) -->
              <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span class="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">VIEW ARCHITECTURE</span>
                <div class="btn-circle-arrow">
                  ↗
                </div>
              </div>

            </div>
          `).join("")}

        </div>

        <!-- Dedicated Section 10 Highlight: AVENOR CHIA SEED PREMIUM (Design + Entrepreneurship) -->
        <div class="card-panel p-8 lg:p-12 relative overflow-hidden group cursor-pointer" data-project-id="${p4.id}">
          <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left Info -->
            <div class="lg:col-span-6 space-y-4">
              <div class="flex items-center gap-3">
                <span class="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold tracking-widest text-white uppercase">
                  ENTREPRENEURSHIP &amp; PHYSICAL VENTURE
                </span>
                <span class="text-xs text-emerald-400 font-mono font-bold">● IN PRODUCTION</span>
              </div>

              <h3 class="text-3xl lg:text-5xl font-extrabold text-white tracking-tight font-editorial uppercase">
                ${p4.title}
              </h3>

              <div class="text-xs font-bold tracking-widest text-slate-400 uppercase">
                ${p4.category}
              </div>

              <p class="text-sm lg:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                ${p4.shortDesc}
              </p>

              <div class="pt-4 flex flex-wrap items-center gap-4">
                <div class="btn-pill-primary text-xs">
                  INSPECT PRODUCT SYSTEM ↗
                </div>
                <span class="text-xs text-slate-500 font-mono">Formula · Packaging · DTC</span>
              </div>
            </div>

            <!-- Right Visual Mockup -->
            <div class="lg:col-span-6">
              <div class="rounded-2xl overflow-hidden border border-white/10 bg-black/50 aspect-video flex items-center justify-center p-2 relative">
                <img src="${p4.image}" alt="${p4.title}" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}

export function initProjectCards() {
  const cards = document.querySelectorAll("[data-project-id]");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-project-id");
      if (id) {
        projectModal.open(id);
      }
    });
  });
}
