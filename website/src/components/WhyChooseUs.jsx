import { ShieldCheck, Zap, Headset, Camera } from "lucide-react";

const stats = [
  { id: "0001", value: "15+", label: "Years of Experience", size: "lg" },
  { id: "0002", value: "1,200+", label: "Sites Protected", size: "sm" },
  { id: "0003", value: "24/7", label: "Monitoring & Support", size: "sm" },
  { id: "0004", value: "98%", label: "Client Retention", size: "sm" },
];

const features = [
  {
    id: "0001",
    icon: ShieldCheck,
    title: "Certified Security Expertise",
    desc: "Licensed, trained, and continuously vetted personnel across every deployment.",
  },
  {
    id: "0002",
    icon: Zap,
    title: "Rapid Response",
    desc: "Dedicated monitoring teams and response units built for fast, reliable action.",
  },
  {
    id: "0003",
    icon: Headset,
    title: "Dedicated Account Teams",
    desc: "A single point of contact who understands your site and its risk profile.",
  },
  {
    id: "0004",
    icon: Camera,
    title: "Modern Surveillance Tech",
    desc: "CCTV, access control, and alarm systems integrated on one platform.",
  },
];

export default function WhyOculus() {
  return (
    <section className="w-full bg-teal-deep px-16 md:px-20 py-24">
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
              We combine trained personnel, modern surveillance technology, and
              round-the-clock monitoring to protect what matters most to you —
              backed by a team that treats every site like it's the only one.
            </p>
          </div>

          {/* Feature list */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ columnGap: "24px", rowGap: "24px" }}
          >
            {features.map((f) => (
              <div key={f.id} className="flex items-start" style={{ columnGap: "14px" }}>
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#2b5e66] flex items-center justify-center">
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
            <p className="font-body text-sm text-teal-light mt-2">{stats[0].label}</p>
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
                <p className="font-body text-xs text-teal-light mt-1 uppercase tracking-wide">
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