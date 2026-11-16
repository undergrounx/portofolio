/**
 * UI-LAYOUTS GLOBE COMPONENT (Earth)
 * Direct adaptation of `npx uilayouts@latest add globe` (./components/ui/globe.tsx)
 * Renders ONLY the 3D rotating Globe without any extra card/box wrapper.
 */

import createGlobe from "cobe";

export function renderGlobe(className = "") {
  return `
    <div class="flex items-center justify-center z-10 w-full max-w-[360px] sm:max-w-[420px] mx-auto ${className}">
      <canvas
        id="cobe-earth-canvas"
        class="w-full h-full max-w-full cursor-grab active:cursor-grabbing transition-opacity duration-700 opacity-0"
        style="aspect-ratio: 1; contain: layout paint size;"
      ></canvas>
    </div>
  `;
}

/**
 * Initializes Cobe Globe according to ui-layouts globe specifications:
 * theta = 0.25, dark = 0, scale = 1.1, diffuse = 1.2, mapSamples = 40000, mapBrightness = 6
 */
export function initGlobe() {
  const canvas = document.getElementById("cobe-earth-canvas");
  if (!canvas) return;

  let width = 0;
  const onResize = () => {
    if (canvas) {
      width = canvas.offsetWidth || 360;
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
      width: (width || 360) * 2,
      height: (width || 360) * 2,
      phi: 0,
      theta: 0.25,
      dark: 0, // Light white mode
      scale: 1.1,
      diffuse: 1.2,
      mapSamples: 32000,
      mapBrightness: 6,
      baseColor: [1, 1, 1], // Pure clean white as in CardGlobeWhite
      markerColor: [0.08, 0.37, 0.73], // Cobalt blue marker
      glowColor: [0.9, 0.95, 1],
      opacity: 1,
      offset: [0, 0],
      markers: [
        { location: [-6.2088, 106.8456], size: 0.07 }, // Jakarta
        { location: [1.3521, 103.8198], size: 0.05 },  // Singapore
        { location: [35.6762, 139.6503], size: 0.04 }, // Tokyo
        { location: [37.7749, -122.4194], size: 0.06 }, // SF
        { location: [51.5074, -0.1278], size: 0.05 }, // London
      ],
      onRender: (state) => {
        if (!pointerInteracting) {
          phi += 0.003;
        }
        state.phi = phi + pointerInteractionMovement * 0.005;
        state.width = (width || 360) * 2;
        state.height = (width || 360) * 2;
      },
    });

    setTimeout(() => {
      if (canvas) canvas.style.opacity = "1";
    }, 150);
  } catch (err) {
    console.error("Globe init error:", err);
  }

  return () => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("pointerup", onPointerUp);
    if (globe) globe.destroy();
  };
}
