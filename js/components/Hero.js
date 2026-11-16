import { portfolioData } from "../data.js";

export function renderHero() {
  const p = portfolioData.profile;

  return `
    <section id="hero" class="relative min-h-[82vh] bg-[#f8fafc] pt-20 pb-20 px-6 sm:px-12 flex flex-col justify-center items-center text-center border-b border-black/10">
      
      <!-- Quiet Technical Dot Grid Background (hairline opacity) -->
      <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-60">
        <div class="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035]"></div>
      </div>

      <!-- Main Editorial Content Container -->
      <div class="relative z-10 max-w-[1080px] mx-auto flex flex-col items-center w-full">
        
        <!-- Identity Pill: Quiet Status Tag -->
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-black/10 mb-8 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#145ebb]"></span>
          <span class="text-[11px] font-mono font-medium tracking-wider text-slate-700 uppercase">
            Visual Designer (DKV) · AI Controller
          </span>
        </div>

        <!-- Headline: Clean Space Grotesk Architecture -->
        <h1 class="font-display text-[56px] sm:text-[88px] md:text-[112px] lg:text-[128px] text-[#0f172a] leading-[0.92] tracking-tight uppercase select-none">
          MUADZ
        </h1>
        
        <p class="font-mono text-xs sm:text-sm md:text-base font-medium tracking-wide text-[#145ebb] mt-5">
          Form visual DKV · Alur kerja sistemik AI
        </p>

        <!-- Specific, Grounded Subhead -->
        <p class="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed px-4">
          ${p.supportingLine}
        </p>

        <!-- Editorial Snapshot Card: Lightweight Visual Anchor -->
        <div class="w-full max-w-2xl mx-auto my-10 p-5 rounded-2xl bg-white border border-black/10 shadow-sm text-left">
          <div class="flex items-center justify-between pb-3.5 border-b border-black/10 text-xs font-mono">
            <div class="flex items-center gap-2 text-slate-600">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>SISTEM AKTIF</span>
            </div>
            <span class="text-slate-500">SMK BinaKarya Mandiri (DKV)</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-mono">
            <div>
              <div class="text-[10px] text-slate-500 uppercase">Fokus Desain</div>
              <div class="text-slate-900 font-semibold mt-0.5">Identitas &amp; Kemasan</div>
            </div>
            <div>
              <div class="text-[10px] text-slate-500 uppercase">Fokus AI</div>
              <div class="text-slate-900 font-semibold mt-0.5">Automation Pipeline</div>
            </div>
            <div>
              <div class="text-[10px] text-slate-500 uppercase">Ketersediaan</div>
              <div class="text-[#145ebb] font-semibold mt-0.5">Open for Collaboration</div>
            </div>
          </div>
        </div>

        <!-- Clean Action Buttons: One Primary, One Secondary, One Meta Trigger -->
        <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a href="#work" class="btn-slush-filled text-xs sm:text-sm px-6 py-3">
            ${p.ctaPrimary} ↗
          </a>
          <a href="./gallery/" class="btn-slush-ghost text-xs sm:text-sm px-6 py-3 font-semibold text-[#0f172a]">
            Buka Cosmos Gallery ↗
          </a>
          <button id="open-workflow-btn" type="button" class="btn-slush-ghost text-xs sm:text-sm px-6 py-3 text-slate-700">
            24h Jadwal Alur Kerja ↗
          </button>
        </div>

      </div>

    </section>
  `;
}
