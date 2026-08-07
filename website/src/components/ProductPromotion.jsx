import { useState } from "react";
import { Grid3x3, Cpu, Smartphone, Radar, Volume2, Radio } from "lucide-react";

// Assumption: swapping in Oculus's own device lineup in place of the reference
// screenshot's "EliteControl" branding — rename `devices` below once real
// product names/specs are confirmed.
const devices = [
  {
    id: "keypad",
    label: "Control Keypad",
    icon: Grid3x3,
    tagline: "Arm, disarm, and override from any entry point.",
    reading: "ARMED · ZONE 3",
  },
  {
    id: "panel",
    label: "OC-1 Control Panel",
    icon: Cpu,
    tagline: "The brain of the system — routes every signal on-site.",
    reading: "6 DEVICES ONLINE",
  },
  {
    id: "app",
    label: "Oculus Cloud App",
    icon: Smartphone,
    tagline: "Monitor and command the whole site from your phone.",
    reading: "LIVE SYNC",
  },
  {
    id: "sensor",
    label: "PIR Motion Sensor",
    icon: Radar,
    tagline: "Detects movement the instant it happens, indoors or out.",
    reading: "NO MOTION",
  },
  {
    id: "siren",
    label: "Outdoor Siren & Strobe",
    icon: Volume2,
    tagline: "Loud, visible deterrence the moment a zone is breached.",
    reading: "STANDBY",
  },
];

export default function ProductPromotion() {
  const [activeId, setActiveId] = useState(devices[0].id);
  const active = devices.find((d) => d.id === activeId);
  const ActiveIcon = active.icon;

  return (
    <section className="relative overflow-hidden bg-teal-deep px-6 py-24 font-urbanist text-offwhite md:px-12 lg:px-20">
      {/* ambient grid backdrop, kept quiet on purpose */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-teal-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-teal-light) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        {/* Left: copy + device selector */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-light/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-light">
            <Radio size={14} className="shrink-0" />
            Site Security Ecosystem
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Oculus <span className="text-gold">Smart Control</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-olive-light">
            Every device on an Oculus site talks to the same network. Select
            a piece of hardware to see the telemetry, commands, and alerts
            it sends in real time.
          </p>

          <ul className="mt-9 flex flex-col gap-2">
            {devices.map((device) => {
              const Icon = device.icon;
              const isActive = device.id === activeId;
              return (
                <li key={device.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(device.id)}
                    aria-pressed={isActive}
                    className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors duration-200 ${
                      isActive
                        ? "border-gold/60 bg-gold/10 text-gold"
                        : "border-white/10 text-offwhite/80 hover:border-teal-light/40 hover:text-offwhite"
                    }`}
                  >
                    <Icon size={18} className="shrink-0" />
                    <span className="font-medium">{device.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: live device panel */}
        <div className="relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-charcoal/60 p-10">
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-teal-light/30">
            <span className="absolute inset-0 animate-ping rounded-full border border-gold/30" />
            <span className="absolute inset-4 rounded-full border border-teal-light/20" />
            <ActiveIcon size={44} className="text-gold" />
          </div>

          <h3 className="mt-8 text-xl font-bold">{active.label}</h3>
          <p className="mt-2 max-w-xs text-center text-sm text-olive-light">
            {active.tagline}
          </p>

          <div className="mt-6 flex items-center gap-2 rounded-full bg-teal-deep px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-light">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-light" />
            {active.reading}
          </div>
        </div>
      </div>
    </section>
  );
}