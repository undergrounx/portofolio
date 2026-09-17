import { portfolioData } from "../data.js";
import { soundManager } from "./Audio.js";
import { toast } from "./Toast.js";

export function renderFinalCTA() {
  const c = portfolioData.contact;

  return `
    <section id="contact" class="relative py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <!-- Large Rounded CTA Card (Ref Match) -->
        <div class="card-panel p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <!-- Left: Metallic Sheen Typography Block (Ref Match) -->
            <div class="lg:col-span-5 metallic-sheen-surface p-8 lg:p-10 rounded-2xl flex flex-col justify-between min-h-[220px]">
              <div class="flex items-center justify-between">
                <span class="text-[9px] font-bold tracking-[0.2em] text-white/70 uppercase">PROJECT COLLABORATION</span>
                <span class="text-white text-base">✦</span>
              </div>
              <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase leading-[0.88] mt-4">
                ${c.ctaHeadline.replace(/\n/g, "<br />")}
              </h2>
            </div>

            <!-- Middle: Bio & Action Pill Button -->
            <div class="lg:col-span-4 space-y-6">
              <p class="text-sm lg:text-base text-slate-300 font-normal leading-relaxed">
                ${c.availability}
              </p>
              <div>
                <a href="${c.whatsappUrl}" target="_blank" class="btn-pill-primary text-xs">
                  LET'S WORK TOGETHER ↗
                </a>
              </div>
            </div>

            <!-- Right: Direct Contact Coordinates (Ref Match) -->
            <div class="lg:col-span-3 space-y-4 pt-4 lg:pt-0 lg:border-l border-white/10 lg:pl-8">
              
              <!-- WhatsApp -->
              <div class="cursor-pointer group" id="copy-whatsapp-btn">
                <div class="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">WHATSAPP</div>
                <div class="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span>${c.whatsapp}</span>
                  <span class="text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">📋</span>
                </div>
              </div>

              <!-- Instagram -->
              <div class="cursor-pointer group" id="copy-instagram-btn">
                <div class="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">INSTAGRAM</div>
                <div class="text-xs font-semibold text-white group-hover:text-pink-400 transition-colors flex items-center gap-2">
                  <span>${c.instagram}</span>
                  <span class="text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </div>
              </div>

              <!-- Email -->
              <div class="cursor-pointer group" id="copy-email-btn">
                <div class="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">EMAIL</div>
                <div class="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span>${c.email}</span>
                  <span class="text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">📋</span>
                </div>
              </div>

              <!-- Location -->
              <div>
                <div class="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">LOCATION</div>
                <div class="text-xs font-semibold text-slate-300">
                  ${c.location}
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
  const c = portfolioData.contact;

  const waBtn = document.getElementById("copy-whatsapp-btn");
  if (waBtn) {
    waBtn.addEventListener("click", () => {
      soundManager.playClick();
      navigator.clipboard.writeText(c.whatsapp);
      toast.show(`WhatsApp number copied: ${c.whatsapp}`, "📱");
    });
  }

  const igBtn = document.getElementById("copy-instagram-btn");
  if (igBtn) {
    igBtn.addEventListener("click", () => {
      soundManager.playClick();
      window.open(c.instagramUrl, "_blank");
    });
  }

  const mailBtn = document.getElementById("copy-email-btn");
  if (mailBtn) {
    mailBtn.addEventListener("click", () => {
      soundManager.playClick();
      navigator.clipboard.writeText(c.email);
      toast.show(`Email copied to clipboard: ${c.email}`, "✉");
    });
  }
}
