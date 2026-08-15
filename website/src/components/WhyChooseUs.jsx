import { ShieldCheck, Zap, Headset, Settings2 } from "lucide-react";

const stats = [
  { id: "0001", value: "15+", label: "Years of Experience", size: "lg" },
  { id: "0002", value: "1,200+", label: "Sites Protected", size: "sm" },
  { id: "0003", value: "24/7", label: "Monitoring & Support", size: "sm" },
  { id: "0004", value: "98%", label: "Client Retention", size: "sm" },
];

const features = [
  {
    id: "0001",
    icon: Settings2,
    title: "Custom Adaptations",
    desc: "Installations tailored to each industry's unique demands and our clients' commercial goals.",
  },
  {
    id: "0002",
    icon: ShieldCheck,
    title: "Authorized Partnerships",
    desc: "Legally authorized to distribute, install, and maintain NESS, IDTECK, WEBGATE, and IMPEGVISION systems.",
  },
  {
    id: "0003",
    icon: Zap,
    title: "Punctuality & Speed",
    desc: "Reliable turnaround from initial consultation through to final installation.",
  },
  {
    id: "0004",
    icon: Headset,
    title: "Flexible, Friendly Engineering Team",
    desc: "An approachable team that adapts to your site's schedule and requirements.",
  },
];

export default function WhyOculus() {
  return (
    <section className="w-full bg-(--color-bg-nav) px-16 md:px-20 py-24">
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ columnGap: "64px", rowGap: "56px" }}
      >
        {/* Left column — copy + features */}
        <div className="flex flex-col" style={{ rowGap: "32px" }}>
          <div className="flex flex-col" style={{ rowGap: "16px" }}>
            <span className="font-body text-[18px] tracking-[0.2em] uppercase text-gold">
              Why Oculus International
            </span>
            <h2 className="font-display text-3xl md:text-[56px] text-offwhite leading-tight">
              Security you can measure,
              <br />
              trust you can rely on.
            </h2>
            <p className="font-body text-base text-olive-light max-w-[480px]">
              We are a specialist in system integration and low voltage
              technologies (ELV). Our expertise is centered on security
              surveillance, audio-visual environments, advanced fire safety,
              converged networking, and specialist building controls.
            </p>
          </div>

          {/* Feature list */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ columnGap: "24px", rowGap: "24px" }}
          >
            {features.map((f) => (
              <div key={f.id} className="flex items-start" style={{ columnGap: "14px" }}>
                <div className="shrink-0 w-11 h-11 rounded-full bg-(--color-bg-sub) flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-offwhite" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col" style={{ rowGap: "4px" }}>
                  <h3 className="font-body text-[15px] font-medium text-offwhite">
                    {f.title}
                  </h3>
                  <p className="font-body text-sm text-olive-light leading-snug">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — "By the numbers" stat panel */}
        <div className="flex flex-col">
          
          {/* Lead stat */}
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, var(--color-gold), var(--color-teal-light), var(--color-teal-dark))",
            }}
          />
          <div className="pt-6 pb-8">
            <span className="font-display text-8xl md:text-9xl text-offwhite leading-none">
              {stats[0].value}
            </span>
            <p className="font-body text-sm text-gold mt-2">{stats[0].label}</p>
          </div>

          {/* Remaining stats */}
          
          <div
            className="grid grid-cols-2"
            style={{ columnGap: "24px" }}
          >
            {stats.slice(1).map((s, i) => (
              <div key={s.id} className="relative py-6">
                <div
                  className="absolute top-0 left-0 h-px w-full"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-gold), var(--color-teal-light), var(--color-teal-dark))",
                  }}
                />
                <span className="font-display text-5xl md:text-6xl text-offwhite">
                  {s.value}
                </span>
                <p className="font-body text-xs text-gold mt-1 uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}