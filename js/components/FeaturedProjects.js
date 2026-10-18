import { portfolioData } from "../data.js";
import { projectModal } from "./ProjectModal.js";

export function renderFeaturedProjects() {
  const projects = portfolioData.featuredProjects;
  const stickerAccents = ["#ffd731", "#55db9c", "#e9ccff", "#4da2ff", "#fb4903", "#5c4ade"];

  return `
    <!-- Section Ground: Concrete Gray #cccccc Band -->
    <section id="work" class="relative py-20 bg-[#cccccc] border-b border-black">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <!-- Header Row -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-black pb-6 gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black text-xs font-bold uppercase mb-3">
              <span class="w-2 h-2 rounded-full bg-[#fb4903] border border-black"></span>
              <span>VERIFIED WORK</span>
            </div>
            <h2 class="font-display-lateral text-4xl sm:text-6xl text-black leading-none uppercase">
              SELECTED PROJECTS
            </h2>
          </div>
          
          <a href="#contact" class="btn-slush-ghost text-xs self-start md:self-auto">
            START COLLABORATION ↗
          </a>
        </div>

        <!-- Project Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${projects.map((project, idx) => `
            <div class="slush-card p-6 flex flex-col justify-between cursor-pointer group bg-white" data-project-id="${project.id}">
              
              <div>
                <!-- Image Container with 1px black outline -->
                <div class="relative overflow-hidden rounded-[16px] border border-black mb-5 aspect-[16/11] bg-[#e9e9e9] flex items-center justify-center">
                  <img 
                    src="${project.image}" 
                    alt="${project.title}" 
                    loading="lazy" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onerror="this.onerror=null; this.src='./${project.image}';"
                  />

                  <!-- Floating Sticker Tag -->
                  <div class="absolute top-3 left-3">
                    <span class="slush-sticker text-[10px]" style="background-color: ${stickerAccents[idx % stickerAccents.length]}; color: ${idx % stickerAccents.length === 5 ? '#ffffff' : '#000000'};">
                      ${project.status}
                    </span>
                  </div>

                  <div class="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white border border-black flex items-center justify-center font-bold text-xs">
                    0${idx + 1}
                  </div>
                </div>

                <!-- Category & Title -->
                <div class="text-[11px] font-bold tracking-wider text-black/60 uppercase mb-1">
                  ${project.category}
                </div>
                <h3 class="font-display-lateral text-xl sm:text-2xl text-black leading-tight uppercase group-hover:text-[#4da2ff] transition-colors">
                  ${project.title}
                </h3>
                <p class="text-xs text-black/80 mt-2 font-medium line-clamp-2 leading-relaxed">
                  ${project.shortDesc}
                </p>
              </div>

              <!-- Action Row -->
              <div class="mt-6 pt-4 border-t border-black flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider">INSPECT BRIEF</span>
                <span class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs group-hover:bg-[#4da2ff] group-hover:text-black transition-colors">
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
      if (id) {
        projectModal.open(id);
      }
    });
  });
}
