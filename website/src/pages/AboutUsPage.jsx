import { Camera, Volume2, Flame, Network, Building2, ShieldCheck, ArrowRight } from "lucide-react";

/**
 * AboutUsPage — follows the same theming pattern as SolutionTemplate.jsx:
 *  - --color-bg / --color-bg-sub    page background / dark panel
 *  - --color-white / --color-offwhite  text sitting on the dark panel
 *  - --color-olive                   feature card fill (Key Features style)
 *  - --color-teal / --color-teal-light  partner card fill / accents
 *  - --color-heading / --color-text-muted  section headings + body copy
 *  - --color-accent / --color-accent-hover  authorized badge + CTA
 *  - --color-border                  hairlines
 *  - --font-display / --font-body    same type pairing as the rest of the site
 */

const DOMAINS = [
  { icon: Camera, title: "Security Surveillance", description: "CCTV and monitoring systems built for continuous, reliable coverage." },
  { icon: Volume2, title: "Audio-Visual", description: "Integrated sound and display environments for commercial and hospitality spaces." },
  { icon: Flame, title: "Fire Safety", description: "Advanced detection and alert systems engineered to certified standards." },
  { icon: Network, title: "Converged Networking", description: "Structured, resilient network infrastructure as the backbone of every system." },
  { icon: Building2, title: "Building Controls", description: "Specialist automation for access, climate, and facility management." },
];

const PARTNERS = [
  { name: "NESS", origin: "Australia", code: "AU" },
  { name: "IDTECK", origin: "South Korea", code: "KR" },
  { name: "WEBGATE", origin: "South Korea", code: "KR" },
  { name: "IMPEGVISION", origin: "South Korea", code: "KR" },
];

function Eyebrow({ children, light }) {
  return (
    <span
      className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70"
      style={{ color: light ? "var(--color-white)" : "var(--color-text-muted)" }}
    >
      {children}
    </span>
  );
}

function ConvergenceBars({ compact = false }) {
  const heights = [64, 40, 84, 52, 28];
  return (
    <div className={`flex items-end gap-3 ${compact ? "h-14" : "h-24 md:h-32"}`} aria-hidden="true">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-2.5 md:w-3 rounded-sm"
          style={{
            height: `${h}%`,
            backgroundColor: i === 2 ? "var(--color-accent)" : "var(--color-teal-light)",
          }}
        />
      ))}
    </div>
  );
}

function DomainCard({ icon: Icon, title, description }) {
  return (
    <div
      className="rounded-2xl p-8 flex flex-col items-center text-center gap-4"
      style={{ backgroundColor: "var(--color-olive)" }}
    >
      <Icon className="w-8 h-8" style={{ color: "var(--color-white)" }} strokeWidth={1.75} />
      <h3
        className="text-lg font-semibold"
        style={{ color: "var(--color-white)", fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed opacity-90" style={{ color: "var(--color-white)" }}>
        {description}
      </p>
    </div>
  );
}

function PartnerCard({ name, origin, code }) {
  return (
    <div
      className="relative rounded-2xl p-6"
      style={{ backgroundColor: "var(--color-teal)", border: "1px solid var(--color-accent)" }}
    >
      <span className="absolute top-4 left-4 h-3 w-3 border-t-2 border-l-2" style={{ borderColor: "var(--color-accent)" }} />
      <span className="absolute top-4 right-4 h-3 w-3 border-t-2 border-r-2" style={{ borderColor: "var(--color-accent)" }} />
      <span className="absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2" style={{ borderColor: "var(--color-accent)" }} />
      <span className="absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2" style={{ borderColor: "var(--color-accent)" }} />

      <div className="flex items-center justify-between text-xs uppercase tracking-wide mb-8" style={{ color: "var(--color-white)" }}>
        <span className="opacity-70">{code}</span>
        <span className="flex items-center gap-1" style={{ color: "var(--color-accent)" }}>
          <ShieldCheck className="h-3.5 w-3.5" />
          Authorized
        </span>
      </div>
      <p className="text-2xl font-semibold" style={{ color: "var(--color-white)", fontFamily: "var(--font-display)" }}>
        {name}
      </p>
      <p className="text-sm opacity-70 mt-1" style={{ color: "var(--color-white)" }}>{origin}</p>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <div className="pt-24" style={{ backgroundColor: "var(--color-bg)", fontFamily: "var(--font-body)" }}>
      {/* ---------- HERO ---------- */}
      <section
        className="rounded-3xl mx-6 md:mx-16 mt-8 p-6 md:p-10"
        style={{ backgroundColor: "var(--color-bg-sub)" }}
      >
        <Eyebrow light>Who We Are</Eyebrow>
        <h1
          className="text-3xl md:text-5xl font-semibold mt-3 mb-4"
          style={{ color: "var(--color-offwhite)", fontFamily: "var(--font-display)" }}
        >
          Oculus International
        </h1>
        <p className="max-w-2xl mb-8 opacity-90 leading-relaxed" style={{ color: "var(--color-white)" }}>
          One of the leading ELV system providers in Sri Lanka, offering
          certified technical excellence and premium integrations.
        </p>
        <ConvergenceBars />
      </section>

      {/* ---------- INTEGRATOR OF SOUTH KOREAN & AUSTRALIAN QUALITY ---------- */}
      <section
        className="mx-6 md:mx-16 mt-10 p-6 md:p-10 rounded-3xl"
        style={{ backgroundColor: "var(--color-bg-sub)" }}
      >
        <Eyebrow light>Global Standards</Eyebrow>
        <h2
          className="text-2xl md:text-3xl font-semibold mt-3 mb-6"
          style={{ color: "var(--color-offwhite)", fontFamily: "var(--font-display)" }}
        >
          Integrator of South Korean &amp; Australian Quality
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-white)" }}>
            Oculus is a specialist in system integration and low voltage
            technologies (ELV). Our expertise is centered on security
            surveillance, audio-visual environments, advanced fire safety,
            converged networking, and specialist building controls.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-white)" }}>
            We are the{" "}
            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>authorized partner</span>{" "}
            for the premium Australian brand{" "}
            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>NESS</span>, as well
            as several world-class South Korean manufacturers renowned for
            their durability and technological precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {DOMAINS.map((d) => (
            <DomainCard key={d.title} {...d} />
          ))}
        </div>
      </section>

      {/* ---------- CUSTOM ADAPTATIONS ---------- */}
      <section
        className="mx-6 md:mx-16 mt-10 p-6 md:p-10 rounded-3xl grid md:grid-cols-2 gap-10 items-center"
        style={{ backgroundColor: "var(--color-bg-sub)" }}
      >
        <div>
          <Eyebrow light>Approach</Eyebrow>
          <h2
            className="text-2xl md:text-3xl font-semibold mt-3 mb-4"
            style={{ color: "var(--color-offwhite)", fontFamily: "var(--font-display)" }}
          >
            Custom Adaptations
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-white)" }}>
            We deal with diverse markets and multiple technologies. While
            the underlying structures are similar, each industry has its own
            particular demands. Oculus International understands these
            nuances, customizing installations based on our clients&rsquo;
            commercial goals.
          </p>
        </div>
        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: "var(--color-teal)" }}
        >
          <ConvergenceBars compact />
          <p className="text-xs uppercase tracking-wide opacity-70 mt-6" style={{ color: "var(--color-white)" }}>
            Same foundation. Different demands.
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--color-white)" }}>
            One integration platform, tuned per site, per sector, per brief.
          </p>
        </div>
      </section>

      {/* ---------- AUTHORIZED PARTNERSHIPS ---------- */}
      <section
        className="mx-6 md:mx-16 mt-10 mb-2 p-6 md:p-10 rounded-3xl"
        style={{ backgroundColor: "var(--color-bg-sub)" }}
      >
        <Eyebrow light>Certified Distribution</Eyebrow>
        <h2
          className="text-2xl md:text-3xl font-semibold mt-3 mb-4"
          style={{ color: "var(--color-offwhite)", fontFamily: "var(--font-display)" }}
        >
          Authorized Partnerships
        </h2>
        <p className="text-sm leading-relaxed max-w-2xl mb-8" style={{ color: "var(--color-white)" }}>
          Oculus is legally authorized to distribute, install, and maintain
          reputed systems from South Korea and Australia, including{" "}
          <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>NESS</span>,{" "}
          <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>IDTECK</span>,{" "}
          <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>WEBGATE</span>,{" "}
          <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>IMPEGVISION</span>,
          and other trusted ELV manufacturers.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PARTNERS.map((p) => (
            <PartnerCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        className="mx-6 md:mx-16 mt-10 mb-16 pt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <div>
          <Eyebrow>Work With Oculus</Eyebrow>
          <h2
            className="text-2xl md:text-3xl font-semibold mt-3"
            style={{ color: "var(--color-heading)", fontFamily: "var(--font-display)" }}
          >
            Ready to secure your project?
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="btn-accent inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold">
            Request a Free Quote
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}