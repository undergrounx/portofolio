import { portfolioData } from "../data.js";

export function renderAbout() {
  const a = portfolioData.about;

  return `
    <section id="about" class="relative py-16 lg:py-24 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column: Portrait & Ethos -->
          <div class="lg:col-span-5 flex flex-col space-y-6">
            <div class="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase">ETHOS &amp; IDENTITY</div>
            
            <!-- Real Profile Portrait Photo -->
            <div class="relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl aspect-[4/5] group">
              <img 
                src="assets/muadz-profile.jpg" 
                alt="Muadz - Visual Designer & AI Controller" 
                class="w-full h-full object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                onerror="this.onerror=null; this.src='./assets/muadz-profile.jpg';"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                <div>
                  <div class="text-xs font-bold uppercase tracking-wider">MUADZ</div>
                  <div class="text-[9px] font-mono text-emerald-400">DESIGNER &amp; AI CONTROLLER</div>
                </div>
                <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              </div>
            </div>

            <div>
              <h2 class="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase leading-[0.95]">
                ${a.headline.replace(/\n/g, "<br />")}
              </h2>
              <div class="w-12 h-[1px] bg-slate-600 my-4"></div>
              <p class="text-xs text-slate-400 font-mono">
                ${a.education.institution} · ${a.education.major}
              </p>
            </div>
          </div>

          <!-- Right Column: Concise Narrative & Pillars -->
          <div class="lg:col-span-7 space-y-6">
            <p class="text-base lg:text-lg text-slate-200 font-normal leading-relaxed">
              ${a.paragraph1}
            </p>
            <p class="text-sm lg:text-base text-slate-400 font-normal leading-relaxed">
              ${a.paragraph2}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              ${a.pillars.map((pillar) => `
                <div class="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div class="text-xs font-bold text-white uppercase tracking-wider mb-1.5">${pillar.title}</div>
                  <p class="text-[11px] text-slate-400 leading-relaxed font-normal">${pillar.desc}</p>
                </div>
              `).join("")}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
