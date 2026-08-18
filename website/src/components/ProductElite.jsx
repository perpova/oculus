import { useState, useRef, useEffect, useCallback } from "react";
import { LayoutGrid, Cpu, Smartphone, Radar, Siren as SirenIcon } from "lucide-react";
import keypadImg from "../assets/elite_gemini_keypad.png";
import controlPanelImg from "../assets/elite_eci-removebg-preview.png";
import cloudAppImg from "../assets/elite_real_phone.png";
import pirSensorImg from "../assets/elite_ecpir.png";
import sirenImg from "../assets/elite_siren.png";

/**
 * ProductElite
 * ---------------------------------------------------------------
 * Flagship brand section for EliteControl (Arrowhead Alarm Products,
 * New Zealand) — Oculus International is the sole authorized
 * distributor for South Asia.
 *
 * This simulation is illustrative, not a literal recreation of a
 * real EC-i panel's firmware — but it mirrors real panel behavior
 * closely enough to give a visitor an accurate mental model:
 * - Real exit delay (5s countdown) before arming completes
 * - Zone-specific alarm reporting, not a blanket "everything alerts"
 * - Panel status LEDs that behave like real supervisory indicators
 * - Audible feedback (key beep, countdown tick, confirm tones, siren)
 * ---------------------------------------------------------------
 */

const EXIT_DELAY_SECONDS = 5;

const DEVICES = [
  {
    id: "keypad",
    name: "EliteControl Keypad",
    model: "EC-i Keypad",
    image: keypadImg,
    node: { top: "18%", left: "14%" },
    role: "Local control at the door",
    zone: "Zone 1 · Front Entry",
    specs: [
      { label: "Role", value: "User interface & local control" },
      { label: "Power", value: "12V DC via system bus" },
      { label: "Connectivity", value: "RS485 multi-drop data bus" },
    ],
    description:
      "A commercial-grade keypad with backlit tactile keys and partition status indicators. Residents or staff arm and disarm zones right at the door, without needing a phone in hand.",
    action: "arm",
    ctaLabel: "Simulate arming from keypad",
  },
  {
    id: "panel",
    name: "EC-i Control Panel",
    model: "EC-i Hybrid Panel",
    image: controlPanelImg,
    node: { top: "46%", left: "50%" },
    role: "The system's central brain",
    zone: "Control Panel",
    specs: [
      { label: "Role", value: "Central processing unit" },
      { label: "Capacity", value: "Up to 248 zones, 2,000 users" },
      { label: "Reporting", value: "Ethernet on-board, GSM optional" },
    ],
    description:
      "Every keypad, sensor and siren reports back to this single board. It supervises the full system, logs every event, and pushes updates to EliteCloud and the monitoring centre in real time.",
    action: "diagnostic",
    ctaLabel: "Run system diagnostic",
  },
  {
    id: "app",
    name: "EliteCloud App",
    model: "EliteCloud Mobile",
    image: cloudAppImg,
    node: { top: "16%", left: "86%" },
    role: "Control from anywhere",
    zone: "Remote Client",
    specs: [
      { label: "Role", value: "Remote monitoring & control" },
      { label: "Connectivity", value: "Encrypted HTTPS over 4G / Wi-Fi" },
      { label: "Platforms", value: "iOS & Android" },
    ],
    description:
      "Arm or disarm from anywhere, and get an instant push notification the moment a zone trips — with the same event history the on-site keypad shows.",
    action: "arm",
    ctaLabel: "Simulate remote arming",
  },
  {
    id: "pir",
    name: "PIR Motion Sensor",
    model: "EC-i PIR 360",
    image: pirSensorImg,
    node: { top: "80%", left: "16%" },
    role: "Detects genuine intrusion",
    zone: "Zone 4 · Hallway",
    specs: [
      { label: "Role", value: "Intrusion detection" },
      { label: "Coverage", value: "12m, pet-immune up to 25kg" },
      { label: "Connectivity", value: "RS485 bus or wireless variant" },
    ],
    description:
      "Pet-immune dual-element sensing with anti-masking, so it ignores pets and drafts but reports real movement the instant it happens.",
    action: "motion",
    ctaLabel: "Simulate motion event",
  },
  {
    id: "siren",
    name: "Outdoor Siren & Strobe",
    model: "EC-i Siren 120dB",
    image: sirenImg,
    node: { top: "80%", left: "84%" },
    role: "Audible & visual deterrent",
    zone: "Zone 7 · Perimeter",
    specs: [
      { label: "Role", value: "Audible & visual deterrent" },
      { label: "Output", value: "120dB siren + LED strobe" },
      { label: "Enclosure", value: "IP65 weatherproof, anti-tamper" },
    ],
    description:
      "A weatherproof external sounder with a tamper-protected backup battery, so it keeps deterring intruders even if mains power or the bus line is cut.",
    action: "siren",
    ctaLabel: "Test sounder & strobe",
  },
];

const DEVICE_ICONS = {
  keypad: LayoutGrid,
  panel: Cpu,
  app: Smartphone,
  pir: Radar,
  siren: SirenIcon,
};

function monogram(name) {
  return name
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function DeviceImage({ device, className }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={device.image}
        alt={device.name}
        className="h-full w-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "flex";
        }}
      />
      <span className="hidden h-full w-full items-center justify-center text-sm font-bold text-(--color-text)/40">
        {monogram(device.name)}
      </span>
    </div>
  );
}

function DeviceIcon({ device, className }) {
  const Icon = DEVICE_ICONS[device.id];
  if (!Icon) return null;
  return <Icon className={className} strokeWidth={2} />;
}

function StatusPill({ tone, children }) {
  const toneClasses =
    tone === "alert"
      ? "bg-(--color-accent)/20 text-(--color-accent)"
      : tone === "active"
      ? "bg-(--color-accent)/10 text-(--color-accent)"
      : "bg-(--color-text)/5 text-(--color-text)/50";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide ${toneClasses}`}>
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          tone === "alert"
            ? "animate-pulse bg-(--color-accent)"
            : tone === "active"
            ? "bg-(--color-accent)"
            : "bg-(--color-text)/30"
        }`}
      />
      {children}
    </span>
  );
}

// Two small status LEDs on the panel tile — steady alternating blink
// normally, fast flash during diagnostics/alarm, like a real panel's
// supervisory + comms LEDs.
function PanelLeds({ fast }) {
  return (
    <div className="absolute right-1.5 top-1.5 flex gap-1">
      <span
        className={`h-1.5 w-1.5 rounded-full bg-(--color-accent) ${
          fast ? "animate-[ledFast_0.15s_linear_infinite]" : "animate-[ledSlow_1.4s_ease-in-out_infinite]"
        }`}
      />
      <span
        className={`h-1.5 w-1.5 rounded-full bg-(--color-accent)/60 ${
          fast ? "animate-[ledFast_0.15s_linear_infinite_0.07s]" : "animate-[ledSlow_1.4s_ease-in-out_infinite_0.5s]"
        }`}
      />
      <style>{`
        @keyframes ledSlow { 0%,100% { opacity: .25 } 50% { opacity: 1 } }
        @keyframes ledFast { 0%,100% { opacity: .2 } 50% { opacity: 1 } }
      `}</style>
    </div>
  );
}

export default function ProductElite() {
  const [activeId, setActiveId] = useState("panel");
  const [armed, setArmed] = useState(false);
  const [arming, setArming] = useState(false);
  const [exitCount, setExitCount] = useState(EXIT_DELAY_SECONDS);
  const [alarm, setAlarm] = useState(false);
  const [alarmZone, setAlarmZone] = useState(null);
  const [motionPulse, setMotionPulse] = useState(false);
  const [sirenTest, setSirenTest] = useState(false);
  const [diagnostic, setDiagnostic] = useState(false);

  const active = DEVICES.find((d) => d.id === activeId);
  const panel = DEVICES.find((d) => d.id === "panel");

  // --- Audio: Web Audio API, refs so context persists across renders ---
  const audioCtxRef = useRef(null);
  const sirenNodesRef = useRef(null);

  const getAudioCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      audioCtxRef.current = new AC();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const playBeep = useCallback(
    (freq = 1000, duration = 0.08, gain = 0.04) => {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.connect(g);
      g.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      g.gain.setValueAtTime(gain, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    },
    [getAudioCtx]
  );

  const startSiren = useCallback(() => {
    const ctx = getAudioCtx();
    if (!ctx || sirenNodesRef.current) return;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const g = ctx.createGain();
    osc1.type = "sawtooth";
    osc2.type = "triangle";
    osc1.connect(g);
    osc2.connect(g);
    g.connect(ctx.destination);
    g.gain.setValueAtTime(0.1, ctx.currentTime);
    osc1.frequency.setValueAtTime(600, ctx.currentTime);
    osc2.frequency.setValueAtTime(800, ctx.currentTime);
    osc1.start();
    osc2.start();
    let flip = false;
    const interval = setInterval(() => {
      if (!audioCtxRef.current) return;
      const t = audioCtxRef.current.currentTime;
      const base = flip ? 600 : 900;
      osc1.frequency.linearRampToValueAtTime(base, t + 0.15);
      osc2.frequency.linearRampToValueAtTime(base + 150, t + 0.15);
      flip = !flip;
    }, 150);
    sirenNodesRef.current = { osc1, osc2, gain: g, interval };
  }, [getAudioCtx]);

  const stopSiren = useCallback(() => {
    const nodes = sirenNodesRef.current;
    if (!nodes) return;
    clearInterval(nodes.interval);
    try {
      nodes.osc1.stop();
      nodes.osc2.stop();
    } catch {
      /* already stopped */
    }
    nodes.osc1.disconnect();
    nodes.osc2.disconnect();
    nodes.gain.disconnect();
    sirenNodesRef.current = null;
  }, []);

  // Stop siren + close audio context on unmount
  useEffect(() => {
    return () => {
      stopSiren();
      audioCtxRef.current?.close?.();
    };
  }, [stopSiren]);

  // --- Exit-delay countdown, runs via useEffect so it cleans up properly ---
  useEffect(() => {
    if (!arming) return;
    setExitCount(EXIT_DELAY_SECONDS);
    let count = EXIT_DELAY_SECONDS;
    const interval = setInterval(() => {
      count -= 1;
      if (count > 0) {
        setExitCount(count);
        playBeep(count <= 2 ? 1200 : 800, count <= 2 ? 0.05 : 0.08);
      } else {
        clearInterval(interval);
        setArming(false);
        setArmed(true);
        playBeep(1400, 0.06);
        setTimeout(() => playBeep(1400, 0.06), 120);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [arming, playBeep]);

  function toggleArm() {
    playBeep(1000, 0.06);
    if (alarm) {
      setAlarm(false);
      setAlarmZone(null);
      setArmed(false);
      setArming(false);
      stopSiren();
      playBeep(1200, 0.06);
      setTimeout(() => playBeep(1200, 0.06), 120);
      return;
    }
    if (armed) {
      setArmed(false);
      playBeep(1200, 0.06);
      setTimeout(() => playBeep(1200, 0.06), 120);
      return;
    }
    setArming(true);
  }

  function testMotion() {
    playBeep(1200, 0.05);
    const pir = DEVICES.find((d) => d.id === "pir");
    if (armed) {
      setAlarm(true);
      setAlarmZone(pir.zone);
      startSiren();
      setTimeout(() => {
        setAlarm(false);
        setAlarmZone(null);
        stopSiren();
      }, 4000);
    } else {
      setMotionPulse(true);
      setTimeout(() => setMotionPulse(false), 1600);
    }
  }

  function testSiren() {
    playBeep(900, 0.05);
    setSirenTest(true);
    startSiren();
    setTimeout(() => {
      setSirenTest(false);
      stopSiren();
    }, 2000);
  }

  function runDiagnostic() {
    playBeep(1100, 0.05);
    setDiagnostic(true);
    setTimeout(() => setDiagnostic(false), 1600);
  }

  function handleAction(device) {
    if (device.action === "arm") toggleArm();
    else if (device.action === "motion") testMotion();
    else if (device.action === "siren") testSiren();
    else if (device.action === "diagnostic") runDiagnostic();
  }

  function nodeStatus(id) {
    if (alarm) return "alert";
    if ((armed || arming) && (id === "keypad" || id === "panel" || id === "app")) return "active";
    if (id === "pir" && motionPulse) return "active";
    if (id === "siren" && sirenTest) return "active";
    if (id === "panel" && diagnostic) return "active";
    return "idle";
  }

  function deviceStatusLabel(device) {
    if (device.action === "arm") {
      if (alarm) return { text: `Alarm — ${alarmZone}`, tone: "alert" };
      if (arming) return { text: `Exit delay: 0${exitCount}s`, tone: "active" };
      if (armed) return { text: "Armed", tone: "active" };
      return { text: "Disarmed", tone: "idle" };
    }
    if (device.action === "diagnostic") {
      if (alarm) return { text: `Alarm — ${alarmZone}`, tone: "alert" };
      if (diagnostic) return { text: "Running diagnostic…", tone: "active" };
      return { text: armed ? "System armed" : "System ready", tone: armed ? "active" : "idle" };
    }
    if (device.action === "motion") {
      if (alarm) return { text: `${active.zone} tripped`, tone: "alert" };
      if (motionPulse) return { text: "Motion detected (test)", tone: "active" };
      return { text: "Zone clear", tone: "idle" };
    }
    if (device.action === "siren") {
      if (alarm) return { text: "Sounding", tone: "alert" };
      if (sirenTest) return { text: "Testing output", tone: "active" };
      return { text: "Standby", tone: "idle" };
    }
    return { text: "Idle", tone: "idle" };
  }

  function actionButtonLabel(device) {
    if (device.action === "arm") {
      if (alarm) return "Disarm system";
      if (arming) return `Arming… Exit 0${exitCount}s`;
      if (armed) return "Disarm (simulate)";
      return device.ctaLabel;
    }
    if (device.action === "diagnostic") return diagnostic ? "Running…" : device.ctaLabel;
    if (device.action === "motion") return motionPulse || alarm ? "Motion in progress…" : device.ctaLabel;
    if (device.action === "siren") return sirenTest ? "Testing…" : device.ctaLabel;
    return device.ctaLabel;
  }

  const activeStatus = deviceStatusLabel(active);
  const overallStatus = alarm
    ? { text: `Alarm — ${alarmZone}`, tone: "alert" }
    : armed || arming
    ? { text: arming ? `Arming… 0${exitCount}s` : "Armed", tone: "active" }
    : { text: "Disarmed", tone: "idle" };

  const panelLedsFast = diagnostic || alarm;

  return (
    <section className="relative bg-(--color-bg-sub-3) px-4 sm:px-8 lg:px-12 pt-16 pb-24 sm:pt-20 sm:pb-32">
      <div className="mx-auto max-w-[1350px]">
        <div>
          <span className="inline-flex items-center rounded-full border border-(--color-border)/60 bg-(--color-bg) px-4 py-1.5 font-mono text-xs tracking-wide text-(--color-accent)">
            Exclusive EliteControl Partner — South Asia
          </span>

          <h2 className="font-display font-normal text-3xl md:text-[54px] text-(--color-heading) mt-8">
            The EliteControl Ecosystem
          </h2>

          <p className="mt-6 w-full text-sm leading-relaxed text-(--color-text)/80 sm:text-base">
            Oculus International is the only authorized distributor of Arrowhead
            Alarm Products' EliteControl systems in South Asia. Explore how the
            keypad, panel, app and field devices work as one connected system —
            not a shelf of separate parts.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          {/* Left: hotspot diagram */}
          <div className="relative min-h-[420px] rounded-2xl border border-(--color-border)/60 bg-(--color-bg) lg:min-h-[560px]">
            <div className="flex items-center justify-between border-b border-(--color-border)/60 px-5 py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-(--color-text)/50">
                Live system status
              </span>
              <StatusPill tone={overallStatus.tone}>{overallStatus.text}</StatusPill>
            </div>

            <div className="relative h-[380px] w-full sm:h-[440px] lg:h-[500px]">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                {DEVICES.filter((d) => d.id !== "panel").map((d) => {
                  const isActive = nodeStatus(d.id) !== "idle" || nodeStatus("panel") !== "idle";
                  return (
                    <line
                      key={d.id}
                      x1={parseFloat(panel.node.left)}
                      y1={parseFloat(panel.node.top)}
                      x2={parseFloat(d.node.left)}
                      y2={parseFloat(d.node.top)}
                      stroke={isActive ? "var(--color-accent)" : "currentColor"}
                      className="text-(--color-text)/10 transition-colors duration-300"
                      strokeWidth="0.4"
                      strokeDasharray="2 2"
                      vectorEffect="non-scaling-stroke"
                    />
                  );
                })}
              </svg>

              {DEVICES.map((device) => {
                const status = nodeStatus(device.id);
                const isActiveTab = activeId === device.id;
                return (
                  <div
                    key={device.id}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                    style={{ top: device.node.top, left: device.node.left }}
                  >
                    <span
                      className={`rounded-md border px-2 py-0.5 font-mono text-[10px] tracking-wide ${
                        isActiveTab
                          ? "border-(--color-accent) text-(--color-accent)"
                          : "border-(--color-border)/60 text-(--color-text)/50"
                      }`}
                    >
                      {device.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveId(device.id)}
                      aria-label={`View ${device.name} details`}
                      className={`relative flex h-20 w-20 items-center justify-center rounded-xl border-2 bg-(--color-surface)/50 p-2 transition-colors duration-200 sm:h-24 sm:w-24 ${
                        status !== "idle" || isActiveTab
                          ? "border-(--color-accent)"
                          : "border-(--color-border)/60"
                      }`}
                    >
                      {device.id === "panel" && <PanelLeds fast={panelLedsFast} />}
                      <DeviceImage device={device} className="h-full w-full" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: tabs + detail panel */}
          <div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {DEVICES.map((d) => {
                const isActive = d.id === activeId;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setActiveId(d.id)}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "border-(--color-accent) bg-(--color-accent) text-(--color-text-nav)/80"
                        : "border-(--color-heading-main)/40 bg-(--color-heading-main)/10 text-(--color-text) hover:border-(--color-border)"
                    }`}
                  >
                    <DeviceIcon device={d} className="h-5 w-5 shrink-0" />
                    <span className="truncate">{d.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-(--color-border)/60 bg-(--color-bg) p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-(--color-accent)">{active.role}</p>
              <h3 className="mt-1 font-[Space_Grotesk] text-2xl font-bold text-(--color-text)">{active.name}</h3>
              <p className="mt-1 font-mono text-xs tracking-wide text-(--color-text)/40">
                {active.model} · {active.zone}
              </p>

              <div className="mt-5 divide-y divide-(--color-border)/60 border-y border-(--color-border)/60">
                {active.specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between gap-4 py-3">
                    <span className="text-sm text-(--color-text)/50">{spec.label}</span>
                    <span className="text-right text-sm font-semibold text-(--color-text)">{spec.value}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-(--color-text)/60">{active.description}</p>

              <div className="mt-5 flex items-center justify-between rounded-lg border border-(--color-border)/60 px-4 py-3">
                <span className="text-sm font-semibold text-(--color-text)">System status</span>
                <StatusPill tone={activeStatus.tone}>{activeStatus.text}</StatusPill>
              </div>

              <button
                type="button"
                onClick={() => handleAction(active)}
                disabled={arming && active.action !== "arm"}
                className="mt-3 flex w-full items-center justify-center rounded-lg border border-(--color-accent) px-4 py-2.5 text-sm font-semibold text-(--color-accent) transition-colors duration-200 hover:bg-(--color-accent)/10 disabled:opacity-50"
              >
                {actionButtonLabel(active)}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-(--color-border)/60 bg-(--color-bg) px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-bold text-(--color-text)">Ready to bring EliteControl to your property?</p>
            <p className="mt-1 text-sm text-(--color-text)/60">
              Talk to our team about a system sized for your home, office or site.
            </p>
          </div>
          
          <a  href="#contact"
            className="btn-accent inline-flex shrink-0 items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}