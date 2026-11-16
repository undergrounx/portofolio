import { portfolioData } from "../data.js";
import { projectModal } from "./ProjectModal.js";

export function renderFeaturedProjects() {
  const projects = portfolioData.featuredProjects;

  return `
    <section id="work" class="relative py-20 bg-white border-b border-black/10">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <!-- Header Row -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-black/10 pb-6 gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-black/10 text-xs font-mono font-semibold uppercase mb-3 text-slate-700">
              <span class="w-2 h-2 rounded-full bg-[#145ebb]"></span>
              <span>SELECTED CASE STUDIES</span>
            </div>
            <h2 class="font-display text-3xl sm:text-5xl text-[#0f172a] leading-none uppercase">
              FEATURED SYSTEMS
            </h2>
          </div>
          
          <a href="#contact" class="btn-slush-ghost text-xs self-start md:self-auto">
            START COLLABORATION ↗
          </a>
        </div>

        <!-- Project Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${projects.map((project, idx) => `
            <div class="slush-card p-6 flex flex-col justify-between cursor-pointer group bg-white border border-black/10 hover:border-black/30" data-project-id="${project.id}">
              
              <div>
                <!-- Image Container with hairline outline -->
                <div class="relative overflow-hidden rounded-[12px] border border-black/10 mb-5 aspect-[16/11] bg-slate-100 flex items-center justify-center">
                  <img 
                    src="${project.image}" 
                    alt="${project.title}" 
                    loading="lazy" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    onerror="this.onerror=null; this.src='./${project.image}';"
                  />

                  <!-- Floating Badge Tag -->
                  <div class="absolute top-3 left-3">
                    <span class="slush-sticker text-[10px] bg-white/95 backdrop-blur-sm border border-black/15 shadow-sm text-slate-800">
                      ${project.status}
                    </span>
                  </div>

                  <div class="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm border border-black/15 flex items-center justify-center font-mono text-[10px] font-semibold text-slate-700">
                    0${idx + 1}
                  </div>
                </div>

                <!-- Category & Title -->
                <div class="text-[11px] font-mono font-medium tracking-wider text-[#145ebb] uppercase mb-1">
                  ${project.category}
                </div>
                <h3 class="font-display text-xl text-[#0f172a] leading-snug uppercase group-hover:text-[#145ebb] transition-colors">
                  ${project.title}
                </h3>
                <p class="text-xs text-slate-600 mt-2 font-normal line-clamp-2 leading-relaxed">
                  ${project.shortDesc}
                </p>
              </div>

              <!-- Action Row -->
              <div class="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono">
                <span class="font-medium text-slate-600 group-hover:text-[#0f172a] transition-colors">INSPECT BRIEF</span>
                <span class="w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-[#145ebb] group-hover:text-white transition-colors">
                  ↗
                </span>
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
      projectModal.open(id);
    });
  });
}
