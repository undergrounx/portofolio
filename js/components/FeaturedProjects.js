import { portfolioData } from "../data.js";
import { projectModal } from "./ProjectModal.js";

export function renderFeaturedProjects() {
  const projects = portfolioData.featuredProjects;

  const getStatusBadge = (status) => {
    switch (status) {
      case "Active Project":
        return `
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-wider backdrop-blur-md">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            ${status}
          </span>
        `;
      case "Creative Direction":
        return `
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-[9px] font-mono font-bold text-purple-300 uppercase tracking-wider backdrop-blur-md">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            ${status}
          </span>
        `;
      case "Packaging Concept":
        return `
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[9px] font-mono font-bold text-amber-300 uppercase tracking-wider backdrop-blur-md">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            ${status}
          </span>
        `;
      default:
        return `
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-mono font-bold text-blue-300 uppercase tracking-wider backdrop-blur-md">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            ${status}
          </span>
        `;
    }
  };

  return `
    <section id="work" class="relative py-16 lg:py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <!-- Header Row (OpenDesign Editorial Hierarchy) -->
        <div class="flex items-end justify-between mb-12 lg:mb-16 border-b border-white/[0.06] pb-6">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>
              <span class="text-[10px] font-mono font-bold tracking-[0.25em] text-slate-400 uppercase">PROOF OF WORK &amp; CONCEPTS</span>
            </div>
            <h2 class="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
              SELECTED WORK
            </h2>
          </div>
          
          <a href="#contact" class="hidden sm:flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-400 hover:text-white uppercase transition-colors group">
            <span>START A CONVERSATION</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <!-- Curated Project Grid (Linear / Modern Minimal Grade) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          ${projects.map((project, idx) => `
            <div class="card-panel p-5 lg:p-6 flex flex-col justify-between cursor-pointer group hover:border-white/20 transition-all duration-300" data-project-id="${project.id}">
              
              <!-- Card Visual Container with Inner Frame -->
              <div class="project-card-image-box mb-6 relative overflow-hidden rounded-xl bg-[#090b0e] border border-white/[0.06] aspect-[16/11] flex items-center justify-center">
                
                <!-- Project Image with Fallback and Smooth Render -->
                <img 
                  src="${project.image}" 
                  alt="${project.title}" 
                  loading="lazy" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onerror="this.onerror=null; this.src='./${project.image}';"
                />

                <!-- Top Floating Status Badge -->
                <div class="absolute top-3 left-3 z-10">
                  ${getStatusBadge(project.status)}
                </div>

                <!-- Subtle Number Tag -->
                <div class="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[9px] font-mono font-bold text-slate-400 backdrop-blur-md">
                  0${idx + 1}
                </div>

              </div>

              <!-- Card Content Details -->
              <div class="flex-1 flex flex-col justify-between">
                <div>
                  <div class="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">
                    ${project.category}
                  </div>
                  <h3 class="text-xl font-bold text-white tracking-tight group-hover:text-slate-100 transition-colors">
                    ${project.title}
                  </h3>
                  <p class="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed font-normal">
                    ${project.shortDesc}
                  </p>
                </div>

                <!-- Bottom Action Row -->
                <div class="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span class="text-[10px] font-mono font-semibold text-slate-400 group-hover:text-white uppercase tracking-wider transition-colors flex items-center gap-1.5">
                    <span>INSPECT CONTEXT</span>
                  </span>
                  
                  <div class="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-white group-hover:text-black group-hover:rotate-45 group-hover:border-white transition-all duration-300 shadow-sm">
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
