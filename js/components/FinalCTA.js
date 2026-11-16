import { portfolioData } from "../data.js";

export function renderFinalCTA() {
  const c = portfolioData.contact;

  return `
    <section id="contact" class="relative py-20 bg-[#f8fafc] border-b border-black/10">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        <div class="slush-card p-8 sm:p-12 bg-white border border-black/15 rounded-[24px] overflow-hidden">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <!-- Left: Minimalist Intake Heading -->
            <div class="lg:col-span-6 bg-slate-900 border border-slate-800 p-8 sm:p-10 rounded-[18px] text-white flex flex-col justify-between min-h-[240px]">
              <div class="flex items-center justify-between">
                <span class="slush-sticker bg-slate-800 text-slate-200 border border-slate-700 text-xs">DIRECT INTAKE</span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              <h2 class="font-display text-3xl sm:text-5xl text-white leading-tight uppercase mt-6">
                ${c.headline.replace(/\n/g, "<br />")}
              </h2>
            </div>

            <!-- Middle: Supporting Copy & Primary Button -->
            <div class="lg:col-span-3 space-y-6">
              <p class="text-sm text-slate-600 font-normal leading-relaxed">
                ${c.subtext}
              </p>
              <div>
                <a href="${c.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-slush-filled text-sm w-full sm:w-auto text-center justify-center">
                  CHAT DI WHATSAPP ↗
                </a>
              </div>
            </div>

            <!-- Right: Direct Channels -->
            <div class="lg:col-span-3 space-y-3">
              
              <!-- Ref Component: WhatsApp Intake Card -->
              <a href="${c.whatsappUrl}" target="_blank" class="slush-qr-card no-underline hover:opacity-95 transition-opacity block cursor-pointer">
                <div class="slush-qr-box">
                  <svg class="w-12 h-12 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 2h8v8H2zM4 4v4h4V4zM14 2h8v8h-8zM16 4v4h4V4zM2 14h8v8H2zM4 16v4h4v-4zM14 14h3v3h-3zM18 14h4v3h-4zM14 18h3v4h-3zM18 19h4v3h-4z"/>
                  </svg>
                </div>
                <div class="p-3.5 flex flex-col justify-center">
                  <div class="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-widest">DIRECT COMM</div>
                  <div class="text-sm font-semibold text-white">WHATSAPP</div>
                  <div class="text-[10px] text-slate-400 font-mono">${c.whatsapp}</div>
                </div>
              </a>

              <!-- Instagram Pill -->
              <a href="${c.instagramUrl}" target="_blank" rel="noopener noreferrer" class="slush-card p-3.5 bg-slate-50 border border-black/10 flex items-center justify-between no-underline group hover:border-black/30 transition-colors">
                <div>
                  <div class="text-[9px] font-mono uppercase tracking-wider text-slate-500">INSTAGRAM</div>
                  <div class="text-xs font-semibold text-slate-900">${c.instagram}</div>
                </div>
                <span class="text-slate-400 group-hover:text-slate-900 transition-colors">↗</span>
              </a>

              <!-- Email Pill -->
              <a href="mailto:${c.email}" class="slush-card p-3.5 bg-slate-50 border border-black/10 flex items-center justify-between no-underline group hover:border-black/30 transition-colors">
                <div>
                  <div class="text-[9px] font-mono uppercase tracking-wider text-slate-500">EMAIL</div>
                  <div class="text-xs font-semibold text-slate-900">${c.email}</div>
                </div>
                <span class="text-slate-400 group-hover:text-slate-900 transition-colors">↗</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function initContactEvents() {
  // Any special tracking or event dispatchers can reside here
}
