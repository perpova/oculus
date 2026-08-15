import { useEffect, useRef, useState, useMemo } from "react";
import { Cctv, Siren, Fingerprint, Monitor, Cpu } from "lucide-react";

// ── Center point ──────────────────────────────────────────────────────────
// This MUST match the spot you marked on the image (the horn speaker).
// Everything else (icon ring, connecting lines, rotation pivot) is derived
// from this single point, so recalibrating is just editing these two numbers.
const hub = { x: 77, y: 49 };

// ── Ring size ────────────────────────────────────────────────────────────
// This is now a single PIXEL radius (not a % ellipse). Because the container
// isn't square, turning a pixel radius into a true visual circle requires
// knowing the container's actual pixel width/height — that's what the
// ResizeObserver below is for. Bump this number to grow/shrink the ring.
const RING_RADIUS_PX = 170;

// Purely decorative outer ring — bigger than the icon ring, doesn't connect
// to anything (no lines, no icons sit on it). Set to null to hide it.
const OUTER_RING_RADIUS_PX = 210;

// ── Icon layout ──────────────────────────────────────────────────────────
// Angles are now auto-generated (360° / count) so gaps are always equal,
// no matter how many hotspots you add or remove.
// START_ANGLE = where the FIRST icon in the array sits (90 = straight up,
// standard math convention: 0° = right, increasing counter-clockwise).
// ANGLE_STEP direction: negative = icons proceed clockwise from START_ANGLE.
const START_ANGLE = 90;

// Icons/labels matched to Perpova's actual ELV product categories.
// Reorder this array to change where each icon lands around the ring.
const hotspots = [
  { id: "cctv", label: "CCTV", icon: Cctv },
  { id: "alarm", label: "Alarm Systems", icon: Siren },
  { id: "access", label: "Access Control", icon: Fingerprint },
  { id: "attendance", label: "Attendance Systems", icon: Monitor },
  { id: "elitecontrol", label: "EliteControl (NZ)", icon: Cpu },
];

const ANGLE_STEP = 360 / hotspots.length;

// Converts angle+radius(px) around the hub into absolute % coordinates,
// given the container's current pixel width/height.
function polarToPercent(angleDeg, radiusPx, containerW, containerH) {
  const rad = (angleDeg * Math.PI) / 180;
  const rXPercent = containerW ? (radiusPx / containerW) * 100 : 0;
  const rYPercent = containerH ? (radiusPx / containerH) * 100 : 0;
  return {
    x: hub.x + Math.cos(rad) * rXPercent,
    y: hub.y - Math.sin(rad) * rYPercent, // minus: screen y grows downward
  };
}

// Converts a pixel radius into % rx/ry for the container's current size,
// so any ring (inner or outer) renders as a true circle.
function radiusToPercent(radiusPx, containerW, containerH) {
  return {
    x: containerW ? (radiusPx / containerW) * 100 : 0,
    y: containerH ? (radiusPx / containerH) * 100 : 0,
  };
}

export default function HeroHotspots({ rotation = 0 }) {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Measure the container in real pixels so the ring can be a true circle
  // regardless of the container's aspect ratio, and stay correct on resize.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setSize({ width, height });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // % radii derived from the single px radius + measured container size.
  const ringRadiusPercent = useMemo(
    () => radiusToPercent(RING_RADIUS_PX, size.width, size.height),
    [size]
  );

  const outerRingRadiusPercent = useMemo(
    () =>
      OUTER_RING_RADIUS_PX != null
        ? radiusToPercent(OUTER_RING_RADIUS_PX, size.width, size.height)
        : null,
    [size]
  );

  const positionedHotspots = useMemo(
    () =>
      hotspots.map((h, i) => {
        const angle = START_ANGLE - i * ANGLE_STEP;
        return {
          ...h,
          angle,
          ...polarToPercent(angle, RING_RADIUS_PX, size.width, size.height),
        };
      }),
    [size]
  );

  // Track whether rotation is actively changing right now (i.e. mid-scroll)
  // so the glow only lights up during motion and fades once scrolling stops.
  const [isRotating, setIsRotating] = useState(false);
  const lastRotation = useRef(rotation);
  const idleTimeout = useRef(null);

  useEffect(() => {
    if (rotation !== lastRotation.current) {
      lastRotation.current = rotation;
      setIsRotating(true);

      clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => setIsRotating(false), 150);
    }
    return () => clearTimeout(idleTimeout.current);
  }, [rotation]);

  // Shared glow behavior for the two SVG rings. SVG shapes don't support
  // box-shadow, so drop-shadow(...) is the equivalent — it's swapped in only
  // while isRotating is true, alongside a brighter stroke/opacity.
  const ringGlowStyle = {
    filter: isRotating ? "drop-shadow(0 0 3px var(--color-accent))" : "none",
    transition: "opacity 0.3s ease, stroke-width 0.3s ease, filter 0.3s ease",
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 hidden md:block"
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: `${hub.x}% ${hub.y}%`,
        transition: "transform 0.05s linear",
      }}
    >
      {/* decorative ring + connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* outer ring — purely decorative, never touches icons or lines */}
       {/* {outerRingRadiusPercent && (
          <ellipse
            cx={hub.x}
            cy={hub.y}
            rx={outerRingRadiusPercent.x}
            ry={outerRingRadiusPercent.y}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={isRotating ? "0.12" : "0.06"}
            opacity={isRotating ? "0.5" : "0.15"}
            style={ringGlowStyle}
          />
        )} */}
        {/* inner ring — sits exactly where the icons are placed, now a true circle */}
        <ellipse
          cx={hub.x}
          cy={hub.y}
          rx={ringRadiusPercent.x}
          ry={ringRadiusPercent.y}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={isRotating ? "0.18" : "0.1"}
          opacity={isRotating ? "0.85" : "0.4"}
          style={ringGlowStyle}
        />
        {positionedHotspots.map((h) => (
          <line
            key={h.id}
            x1={hub.x}
            y1={hub.y}
            x2={h.x}
            y2={h.y}
            stroke="var(--color-accent)"
            strokeWidth="0.15"
            strokeDasharray="0.6 0.8"
            opacity="0.5"
          />
        ))}
      </svg>

      {/* hub dot — marks the exact point you flagged on the image */}
      <span
        className="absolute w-2.5 h-2.5 rounded-full bg-(--color-accent) shadow-[0_0_10px_var(--color-accent)]"
        style={{
          left: `${hub.x}%`,
          top: `${hub.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* icon hotspots, positioned on the ring */}
      {positionedHotspots.map((h) => (
        <div
          key={h.id}
          className="group/hotspot absolute pointer-events-auto"
          style={{
            left: `${h.x}%`,
            top: `${h.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* counter-rotate so icons stay upright while the group rotates */}
          <div style={{ transform: `rotate(${-rotation}deg)` }}>
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-full
                         bg-(--color-bg)/70 backdrop-blur-md border
                         text-(--color-accent) cursor-pointer
                         transition-all duration-300
                         group-hover/hotspot:scale-110 group-hover/hotspot:bg-(--color-accent)
                         group-hover/hotspot:text-(--color-bg)
                         ${
                           isRotating
                             ? "border-(--color-accent) shadow-[0_0_16px_2px_var(--color-accent)]"
                             : "border-(--color-accent)/50 shadow-lg"
                         }`}
            >
              <h.icon className="w-8 h-8" />
            </div>

            <span
              className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap
                         text-xs font-medium px-3 py-1.5 rounded-md
                         bg-(--color-surface) text-(--color-text) border border-(--color-border)/50
                         opacity-0 invisible translate-y-1
                         group-hover/hotspot:opacity-100 group-hover/hotspot:visible group-hover/hotspot:translate-y-0
                         transition-all duration-200 shadow-lg"
            >
              {h.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}