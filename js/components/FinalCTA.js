import { portfolioData } from "../data.js";
import { toast } from "./Toast.js";

export function renderFinalCTA() {
  const c = portfolioData.contact;

  return `
    <section id="contact" class="relative py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <!-- Large Rounded CTA Card (Ref Match) -->
        <div class="card-panel p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <!-- Left: Metallic Sheen Typography Block -->
            <div class="lg:col-span-6 metallic-sheen-surface p-8 lg:p-10 rounded-2xl flex flex-col justify-between min-h-[220px]">
              <div class="flex items-center justify-between">
                <span class="text-[9px] font-bold tracking-[0.2em] text-white/70 uppercase">START A CONVERSATION</span>
                <span class="text-white text-base">✦</span>
              </div>
              <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase leading-[0.9] mt-4">
                ${c.headline.replace(/\n/g, "<br />")}
              </h2>
            </div>

            <!-- Middle: Grounded Supporting Copy & Direct CTA -->
            <div class="lg:col-span-3 space-y-6">
              <p class="text-sm text-slate-300 font-normal leading-relaxed">
                ${c.subtext}
              </p>
              <div>
                <a href="${c.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill-primary text-xs">
                  LET'S TALK ↗
                </a>
              </div>
            </div>

            <!-- Right: Direct Verified Contact Coordinates -->
            <div class="lg:col-span-3 space-y-5 pt-4 lg:pt-0 lg:border-l border-white/10 lg:pl-8">
              
              <!-- WhatsApp -->
              <a href="${c.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="block cursor-pointer group no-underline">
                <div class="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">WHATSAPP</div>
                <div class="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span>${c.whatsapp}</span>
                  <span class="text-[10px] text-slate-500 group-hover:text-emerald-400 transition-colors">↗</span>
                </div>
              </a>

              <!-- Instagram -->
              <a href="${c.instagramUrl}" target="_blank" rel="noopener noreferrer" class="block cursor-pointer group no-underline">
                <div class="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">INSTAGRAM</div>
                <div class="text-xs font-semibold text-white group-hover:text-pink-400 transition-colors flex items-center gap-2">
                  <span>${c.instagram}</span>
                  <span class="text-[10px] text-slate-500 group-hover:text-pink-400 transition-colors">↗</span>
                </div>
              </a>

              <!-- Focus Notice -->
              <div class="pt-2">
                <div class="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">PRIMARY RESPONSE</div>
                <div class="text-xs font-normal text-slate-400">
                  Fastest replies via WhatsApp or Instagram DM
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function initContactEvents() {
  // Direct verified link handling
}
