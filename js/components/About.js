import { portfolioData } from "../data.js";

export function renderAbout() {
  const a = portfolioData.about;

  return `
    <!-- Section Ground: Concrete Gray #cccccc Band -->
    <section id="about" class="relative py-20 bg-[#cccccc] border-b border-black">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <!-- Left: Portrait Photo as Physical Sticker Card -->
          <div class="lg:col-span-5 flex flex-col space-y-5">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black text-xs font-bold uppercase self-start">
              <span>ETHOS &amp; IDENTITY</span>
            </div>

            <!-- Hand-cut Photo Card with Black Border -->
            <div class="relative w-full max-w-sm rounded-[24px] overflow-hidden border-2 border-black bg-white shadow-none aspect-[4/5] transform -rotate-1 hover:rotate-0 transition-transform">
              <img 
                src="assets/muadz-profile.jpg" 
                alt="Muadz" 
                class="w-full h-full object-cover object-top filter contrast-105"
                onerror="this.onerror=null; this.src='./assets/muadz-profile.jpg';"
              />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 border border-black rounded-full px-4 py-2 flex items-center justify-between">
                <div>
                  <div class="text-xs font-bold text-black uppercase">MUADZ</div>
                  <div class="text-[10px] font-bold text-[#5c4ade]">DKV × AI CONTROLLER</div>
                </div>
                <span class="w-3 h-3 rounded-full bg-[#55db9c] border border-black"></span>
              </div>
            </div>

            <div>
              <h2 class="font-display-lateral text-3xl sm:text-5xl text-black leading-none uppercase">
                ${a.headline.replace(/\n/g, "<br />")}
              </h2>
              <div class="mt-3 text-xs font-bold uppercase text-black/75">
                ${a.education.institution} · ${a.education.major}
              </div>
            </div>
          </div>

          <!-- Right: Pillars in Rainbow Sticker Cards -->
          <div class="lg:col-span-7 space-y-6">
            <div class="slush-card p-6 bg-white">
              <p class="text-base sm:text-lg text-black font-medium leading-relaxed mb-4">
                ${a.paragraph1}
              </p>
              <p class="text-sm text-black/80 font-medium leading-relaxed">
                ${a.paragraph2}
              </p>
            </div>

            <!-- Pillars -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              ${a.pillars.map((pillar, idx) => {
                const bgColors = ["#ffd731", "#e9ccff", "#55db9c"];
                return `
                  <div class="slush-card p-5" style="background-color: ${bgColors[idx % bgColors.length]};">
                    <div class="text-xs font-bold text-black uppercase mb-2">
                      ${pillar.title}
                    </div>
                    <p class="text-xs text-black/85 font-medium leading-relaxed">
                      ${pillar.desc}
                    </p>
                  </div>
                `;
              }).join("")}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
