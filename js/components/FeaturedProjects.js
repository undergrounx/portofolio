import { portfolioData } from "../data.js";
import { projectModal } from "./ProjectModal.js";

export function renderFeaturedProjects() {
  const projects = portfolioData.featuredProjects;

  return `
    <section id="work" class="relative py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <!-- Header Row (Ref Match: Title Left, Link Right) -->
        <div class="flex items-center justify-between mb-10 lg:mb-14">
          <div>
            <div class="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-1">PROOF OF WORK &amp; CONCEPTS</div>
            <h2 class="text-xs lg:text-sm font-bold tracking-[0.2em] text-white uppercase">
              SELECTED WORK
            </h2>
          </div>
          
          <a href="#contact" class="text-[11px] lg:text-xs font-bold tracking-widest text-slate-400 hover:text-white uppercase flex items-center gap-2 group transition-colors">
            <span>START A CONVERSATION</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <!-- Curated 6-Project Grid (Ref Proportions) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          ${projects.map((project) => `
            <div class="card-panel p-5 lg:p-6 flex flex-col justify-between cursor-pointer group" data-project-id="${project.id}">
              
              <!-- Card Visual Container -->
              <div class="project-card-image-box mb-6">
                <img src="${project.image}" alt="${project.title}" loading="lazy" />
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-[9px] font-mono text-slate-300 uppercase tracking-wider backdrop-blur-md">
                  ${project.status}
                </div>
              </div>

              <!-- Card Content Details -->
              <div class="flex-1 flex flex-col justify-between">
                <div>
                  <div class="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">
                    ${project.category}
                  </div>
                  <h3 class="text-lg lg:text-xl font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                    ${project.title}
                  </h3>
                  <p class="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    ${project.shortDesc}
                  </p>
                </div>

                <!-- Bottom Row: Tags + Circular Arrow Button -->
                <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span class="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">INSPECT CONTEXT</span>
                  <div class="btn-circle-arrow">
                    ↗
                  </div>
                </div>
              </div>

            </div>
          `).join("")}

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
