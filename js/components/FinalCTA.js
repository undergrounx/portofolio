import { portfolioData } from "../data.js";

export function renderFinalCTA() {
  const c = portfolioData.contact;

  return `
    <!-- Section Ground: Sky Wash #dceeff Band -->
    <section id="contact" class="relative py-20 bg-[#dceeff] border-b border-black">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <div class="slush-card p-8 sm:p-14 bg-white border-2 border-black rounded-[40px] overflow-hidden">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <!-- Left: Crushed Sculptural CTA Title -->
            <div class="lg:col-span-6 bg-[#ffd731] border border-black p-8 sm:p-12 rounded-[28px] flex flex-col justify-between min-h-[260px]">
              <div class="flex items-center justify-between">
                <span class="slush-sticker bg-white text-xs">DIRECT INTAKE</span>
                <span class="text-xl">🚀</span>
              </div>
              <h2 class="font-display-lateral text-4xl sm:text-6xl text-black leading-[0.8] uppercase mt-6">
                ${c.headline.replace(/\n/g, "<br />")}
              </h2>
            </div>

            <!-- Middle: Supporting Copy & Primary Button -->
            <div class="lg:col-span-3 space-y-6">
              <p class="text-sm sm:text-base text-black/85 font-medium leading-relaxed">
                ${c.subtext}
              </p>
              <div>
                <a href="${c.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-slush-filled text-sm w-full sm:w-auto text-center justify-center">
                  CHAT DI WHATSAPP ↗
                </a>
              </div>
            </div>

            <!-- Right: QR Download Card Component (Style Ref match) -->
            <div class="lg:col-span-3 space-y-4">
              
              <!-- Ref Component: QR Download Card in Voltage Violet #5c4ade -->
              <a href="${c.whatsappUrl}" target="_blank" class="slush-qr-card no-underline hover:opacity-95 transition-opacity block cursor-pointer">
                <div class="slush-qr-box">
                  <!-- Clean QR Code Visual Vector -->
                  <svg class="w-16 h-16" viewBox="0 0 24 24" fill="black">
                    <path d="M2 2h8v8H2zM4 4v4h4V4zM14 2h8v8h-8zM16 4v4h4V4zM2 14h8v8H2zM4 16v4h4v-4zM14 14h3v3h-3zM18 14h4v3h-4zM14 18h3v4h-3zM18 19h4v3h-4z"/>
                  </svg>
                </div>
                <div class="p-4 flex flex-col justify-center">
                  <div class="text-[10px] font-bold text-white/80 uppercase tracking-widest">SCAN OR CLICK</div>
                  <div class="text-base font-bold text-white tracking-wider">WHATSAPP</div>
                  <div class="text-[10px] text-white/70 font-mono">${c.whatsapp}</div>
                </div>
              </a>

              <!-- Instagram Ghost Pill -->
              <a href="${c.instagramUrl}" target="_blank" rel="noopener noreferrer" class="slush-card p-4 bg-[#e9ccff] border border-black flex items-center justify-between no-underline group hover:bg-[#d8b4fe] transition-colors">
                <div>
                  <div class="text-[9px] font-bold uppercase tracking-wider text-black/60">INSTAGRAM</div>
                  <div class="text-sm font-bold text-black">${c.instagram}</div>
                </div>
                <span class="w-8 h-8 rounded-full bg-white border border-black flex items-center justify-center font-bold text-xs group-hover:rotate-45 transition-transform">
                  ↗
                </span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function initContactEvents() {
  // Contact events
}
