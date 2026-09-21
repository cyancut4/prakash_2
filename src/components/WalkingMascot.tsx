import { useEffect, useRef } from "react";

// Full clip duration (no black fade at either end — confirmed via ffmpeg
// blackdetect and frame extraction). We loop the whole thing natively via
// the `loop` attribute instead of manually seeking with currentTime, which
// caused a visible stall/replay look every cycle (seeking forces the browser
// to re-buffer before it can render the target frame).
const CLIP_DURATION = 2.7;

// The clip is pillarboxed with black bars that are NOT symmetric (the right
// bar is much wider than the left), so we crop the exact content rectangle
// out of the native 1920x1080 frame ourselves rather than relying on CSS
// object-fit/object-position, which can only crop symmetrically from center.
const SRC_X = 300;
const SRC_Y = 0;
const SRC_W = 1020;
const SRC_H = 1080;

// The clip's baked-in backdrop is a plain near-white. Pixels close to it are
// keyed to transparent so the mascot floats on the page instead of showing a
// box. Her palette (pale blue dress, grays, gold accents) sits well clear of
// white, so a tight threshold removes the backdrop without eating into her.
const KEY_COLOR: [number, number, number] = [255, 255, 255];
const THRESHOLD = 8;
const FEATHER = 18;

// Process at a small fixed resolution, matching the crop's aspect ratio —
// the mascot only ever renders a few dozen pixels tall in the header, and
// this keeps the per-frame pixel loop cheap.
const PROC_WIDTH = 240;
const PROC_HEIGHT = Math.round((PROC_WIDTH * SRC_H) / SRC_W);

function keyDistance(r: number, g: number, b: number) {
  const dr = r - KEY_COLOR[0];
  const dg = g - KEY_COLOR[1];
  const db = b - KEY_COLOR[2];
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

export function WalkingMascot({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    const canvas = canvasRef.current;
    if (!v || !canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    canvas.width = PROC_WIDTH;
    canvas.height = PROC_HEIGHT;

    v.play().catch(() => {});

    let raf = 0;
    const draw = () => {
      if (v.readyState >= 2) {
        ctx.drawImage(v, SRC_X, SRC_Y, SRC_W, SRC_H, 0, 0, PROC_WIDTH, PROC_HEIGHT);
        const frame = ctx.getImageData(0, 0, PROC_WIDTH, PROC_HEIGHT);
        const data = frame.data;
        for (let i = 0; i < data.length; i += 4) {
          const dist = keyDistance(data[i], data[i + 1], data[i + 2]);
          if (dist < THRESHOLD) {
            data[i + 3] = 0;
          } else if (dist < THRESHOLD + FEATHER) {
            data[i + 3] = Math.round((255 * (dist - THRESHOLD)) / FEATHER);
          }
        }
        ctx.putImageData(frame, 0, 0);
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={`aspect-square shrink-0 overflow-visible ${className}`}>
      <video
        ref={videoRef}
        src="/videos/lady-walking.mp4"
        muted
        loop
        playsInline
        autoPlay
        aria-hidden
        className="hidden"
      />
      <canvas
        ref={canvasRef}
        aria-hidden
        className="h-full w-full object-cover [animation:walk-across_var(--walk-duration)_linear_infinite]"
        style={{ "--walk-duration": `${CLIP_DURATION}s` } as React.CSSProperties}
      />
    </div>
  );
}
