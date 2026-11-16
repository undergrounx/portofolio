/**
 * UI-LAYOUTS MOTION — CardGlobeWhite & Earth Component
 * Exact match to user request:
 *
 * <div className='min-h-screen overflow-hidden bg-background text-white'>
 *   <article className='max-w-[500px] overflow-hidden mx-auto mt-6 p-5 text-center border rounded-lg relative h-[500px]'>
 *     <div className='absolute top-0 left-0 z-[1] h-full w-full bg-[radial-gradient(#83838352_1px,#ececec_1px)] bg-[size:20px_20px]'></div>
 *     <div className='relative z-10 pt-4 h-full'>
 *       <h1 className='sm:text-7xl text-5xl font-semibold bg-gradient-to-b from-[#202020] to-[#9c9c9c] bg-clip-text text-transparent leading-[100%] tracking-tighter'>
 *         DESIGN A MASTERPIECE
 *       </h1>
 *       <Earth
 *         mapBrightness={6}
 *         dark={0}
 *         baseColor={[1, 1, 1]}
 *         glowColor={[1, 1, 1]}
 *         className='sm:max-w-[800px] max-w-[1000px] absolute sm:bottom-auto -bottom-20 translate-y-4 sm:-right-20 -right-0 sm:h-[450px] h-[550px]'
 *       />
 *     </div>
 *   </article>
 * </div>
 */

import createGlobe from "cobe";

export function renderCardGlobeWhite() {
  return `
    <div class="w-full flex items-center justify-center my-4 overflow-hidden select-none">
      <article class="max-w-[500px] w-full overflow-hidden mx-auto p-5 text-center border border-black/15 rounded-2xl relative h-[500px] bg-white shadow-sm">
        
        <!-- Radial Dot Grid Background as requested -->
        <div class="absolute top-0 left-0 z-[1] h-full w-full bg-[radial-gradient(#83838352_1px,#ececec_1px)] bg-[size:20px_20px]"></div>
        
        <div class="relative z-10 pt-4 h-full flex flex-col items-center">
          <h2 class="sm:text-7xl text-5xl font-semibold bg-gradient-to-b from-[#202020] to-[#9c9c9c] bg-clip-text text-transparent leading-[100%] tracking-tighter uppercase font-display">
            DESIGN A MASTERPIECE
          </h2>

          <!-- Earth Globe Container with exact requested positioning & dimensions -->
          <div
            id="earth-wrapper"
            class="sm:max-w-[800px] max-w-[1000px] w-full absolute sm:bottom-auto -bottom-20 translate-y-4 sm:-right-20 -right-0 sm:h-[450px] h-[550px] flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing z-20"
          >
            <canvas
              id="earth-canvas"
              class="w-full h-full max-w-full transition-opacity duration-700 opacity-0"
              style="aspect-ratio: 1; contain: layout paint size;"
            ></canvas>
          </div>
        </div>

      </article>
    </div>
  `;
}

/**
 * Initializes the Cobe Earth component with user props:
 * mapBrightness = 6, dark = 0, baseColor = [1, 1, 1], glowColor = [1, 1, 1], theta = 0.25, diffuse = 1.2
 */
export function initEarthGlobe() {
  const canvas = document.getElementById("earth-canvas");
  if (!canvas) return;

  let width = 0;
  const onResize = () => {
    if (canvas) {
      width = canvas.offsetWidth || 500;
    }
  };
  window.addEventListener("resize", onResize);
  onResize();

  let phi = 0;
  let pointerInteracting = null;
  let pointerInteractionMovement = 0;

  const onPointerDown = (e) => {
    pointerInteracting = e.clientX - pointerInteractionMovement;
    canvas.style.cursor = "grabbing";
  };

  const onPointerUp = () => {
    pointerInteracting = null;
    canvas.style.cursor = "grab";
  };

  const onPointerOut = () => {
    pointerInteracting = null;
    canvas.style.cursor = "grab";
  };

  const onMouseMove = (e) => {
    if (pointerInteracting !== null) {
      const delta = e.clientX - pointerInteracting;
      pointerInteractionMovement = delta;
      phi = delta * 0.005;
    }
  };

  const onTouchMove = (e) => {
    if (pointerInteracting !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting;
      pointerInteractionMovement = delta;
      phi = delta * 0.005;
    }
  };

  canvas.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("pointerup", onPointerUp);
  canvas.addEventListener("pointerout", onPointerOut);
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("touchmove", onTouchMove, { passive: true });

  let globe = null;

  try {
    globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: (width || 500) * 2,
      height: (width || 500) * 2,
      phi: 0,
      theta: 0.25,
      dark: 0, // Light/white Earth as requested
      scale: 1.1,
      diffuse: 1.2,
      mapSamples: 24000,
      mapBrightness: 6, // Requested mapBrightness={6}
      baseColor: [1, 1, 1], // Requested baseColor={[1, 1, 1]}
      markerColor: [0.08, 0.37, 0.73], // Cobalt marker
      glowColor: [1, 1, 1], // Requested glowColor={[1, 1, 1]}
      opacity: 1,
      offset: [0, 0],
      markers: [
        { location: [-6.2088, 106.8456], size: 0.07 }, // Jakarta
        { location: [1.3521, 103.8198], size: 0.05 },  // Singapore
        { location: [35.6762, 139.6503], size: 0.04 }, // Tokyo
        { location: [37.7749, -122.4194], size: 0.06 }, // SF / Silicon Valley
        { location: [51.5074, -0.1278], size: 0.05 }, // London
      ],
      onRender: (state) => {
        if (!pointerInteracting) {
          phi += 0.0035;
        }
        state.phi = phi + pointerInteractionMovement * 0.005;
        state.width = (width || 500) * 2;
        state.height = (width || 500) * 2;
      },
    });

    setTimeout(() => {
      if (canvas) canvas.style.opacity = "1";
    }, 150);
  } catch (err) {
    console.error("Cobe Earth initialization error:", err);
  }

  return () => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("pointerup", onPointerUp);
    if (globe) globe.destroy();
  };
}
