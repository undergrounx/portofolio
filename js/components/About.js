import { portfolioData } from "../data.js";

export function renderAbout() {
  const a = portfolioData.about;

  return `
    <section id="about" class="relative py-20 bg-[#f8fafc] border-b border-black/10">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <!-- Left: Portrait Photo as Physical Sticker Card -->
          <div class="lg:col-span-5 flex flex-col space-y-5">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono font-semibold uppercase self-start text-slate-700">
              <span>ETHOS &amp; IDENTITY</span>
            </div>

            <!-- Clean Portrait Frame -->
            <div class="relative w-full max-w-sm rounded-[18px] overflow-hidden border border-black/15 bg-white shadow-sm aspect-[4/5]">
              <img 
                src="assets/muadz-profile.jpg" 
                alt="Muadz" 
                class="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                onerror="this.onerror=null; this.src='./assets/muadz-profile.jpg';"
              />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-black/10 rounded-full px-4 py-2 flex items-center justify-between shadow-sm">
                <div>
                  <div class="text-xs font-display text-[#0f172a] uppercase">MUADZ</div>
                  <div class="text-[10px] font-mono text-[#145ebb]">DKV × AI CONTROLLER</div>
                </div>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>
            </div>

            <div>
              <h2 class="font-display text-3xl sm:text-4xl text-[#0f172a] leading-tight uppercase">
                ${a.headline.replace(/\n/g, "<br />")}
              </h2>
              <div class="mt-2 text-xs font-mono uppercase text-slate-500">
                ${a.education.institution} · ${a.education.major}
              </div>
            </div>
          </div>

          <!-- Right: Pillars in Clean Editorial Cards -->
          <div class="lg:col-span-7 space-y-6">
            <div class="slush-card p-6 sm:p-8 bg-white border border-black/10">
              <p class="text-base sm:text-lg text-[#0f172a] font-normal leading-relaxed mb-4">
                ${a.paragraph1}
              </p>
              <p class="text-sm text-slate-600 font-normal leading-relaxed">
                ${a.paragraph2}
              </p>
            </div>

            <!-- Pillars -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              ${a.pillars.map((pillar) => `
                <div class="slush-card p-5 bg-white border border-black/10 hover:border-black/30 transition-all">
                  <div class="text-[10px] font-mono font-semibold uppercase text-[#145ebb] mb-2 tracking-wider">
                    ${pillar.accent}
                  </div>
                  <h3 class="font-display text-base text-[#0f172a] uppercase leading-tight mb-2">
                    ${pillar.title}
                  </h3>
                  <p class="text-xs text-slate-600 font-normal leading-relaxed">
                    ${pillar.desc}
                  </p>
                </div>
              `).join("")}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
