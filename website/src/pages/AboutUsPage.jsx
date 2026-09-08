import { Camera, Volume2, Flame, Network, Building2, ShieldCheck, ArrowRight } from "lucide-react";

import company1 from "../assets/company-1.jpg";
import company2 from "../assets/company-2.jpg";
import company3 from "../assets/company-3.jpg";
import company4 from "../assets/company-4.jpg";

import TakeFirstStep from "../components/TakeFirstStep";
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
  { name: "WEBGATE", origin: "South Korea", code: "KR" },
  { name: "IMPEGVISION", origin: "South Korea", code: "KR" },
];

function Eyebrow({ children }) {
  return (
    <span
      className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70"
      style={{ color: "var(--color-eyebrow)" }}
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
      style={{ backgroundColor: "var(--color-bg-sub-4)" }}
    >
      <Icon className="w-8 h-8" style={{ color: "var(--color-gold)" }} strokeWidth={1.75} />
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
      className="relative rounded-2xl p-6 backdrop-blur-md transition-all duration-300 ease-out hover:scale-[1.06] hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
      style={{
        backgroundColor: "color-mix(in srgb, var(--color-bg-sub-5) 55%, transparent)",
        border: "1px solid color-mix(in srgb, var(--color-gold) 60%, transparent)",
      }}
    >
      <span className="absolute top-4 left-4 h-3 w-3 border-t-2 border-l-2" style={{ borderColor: "var(--color-gold)" }} />
      <span className="absolute top-4 right-4 h-3 w-3 border-t-2 border-r-2" style={{ borderColor: "var(--color-gold)" }} />
      <span className="absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2" style={{ borderColor: "var(--color-gold)" }} />
      <span className="absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2" style={{ borderColor: "var(--color-gold)" }} />

      <div className="flex items-center justify-between text-xs uppercase tracking-wide mb-8" style={{ color: "var(--color-white)" }}>
        <span className="opacity-70">{code}</span>
        <span className="flex items-center gap-1" style={{ color: "var(--color-gold)" }}>
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
        <section className="mx-6 md:mx-16 mt-8 p-6 md:p-10">
        <div className="flex flex-col items-center text-center">
          <Eyebrow >Who We Are</Eyebrow>
          <h1
            className="text-3xl md:text-6xl font-semibold mt-3 mb-4"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
          >
            Oculus International
          </h1>
          <p className="max-w-2xl mb-8 opacity-90 leading-relaxed" style={{ color: "var(--color-text)" }}>
            One of the leading ELV system providers in Sri Lanka, offering
            certified technical excellence and premium integrations.
          </p>
        </div>
        
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px] mb-8">
            <img
              src={company1}
              alt="Team member working with dog in office"
              className="col-span-1 row-span-2 w-full h-full object-cover rounded-2xl"
            />
            <img
              src={company2}
              alt="Team lunch"
              className="col-span-1 row-span-1 w-full h-full object-cover rounded-2xl"
            />
            <img
              src={company3}
              alt="Team members working at desks"
              className="col-span-1 row-span-1 w-full h-full object-cover rounded-2xl"
            />
            <img
              src={company4}
              alt="Full team group photo outdoors"
              className="col-span-2 row-span-1 w-full h-full object-cover object-top rounded-2xl"
            />
          </div>

        <div className="mt-20">
          <Eyebrow light>Global Standards</Eyebrow>
          <h2
            className="mt-4 font-display font-bold text-3xl md:text-[48px] text-(--color-heading-sub-1) leading-tight"
          >
            Integrator of South Korean &amp; Australian Quality
          </h2>

          <p className="text-base leading-relaxed mt-6 mb-10 " style={{ color: "var(--color-text)" }}>
            Oculus is a specialist in system integration and low voltage
            technologies (ELV). Our expertise is centered on security
            surveillance, audio-visual environments, advanced fire safety,
            converged networking, and specialist building controls. We are
            the{" "}
            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>authorized partner</span>{" "}
            for the premium Australian brand{" "}
            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>NESS</span>, as well
            as several world-class South Korean manufacturers renowned for
            their durability and technological precision.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {DOMAINS.map((d) => (
              <div key={d.title} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]">
                <DomainCard {...d} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ---------- AUTHORIZED PARTNERSHIPS ---------- */}
      <section
        className="mx-6 md:mx-26 mt-10 mb-16 p-6 md:p-10 rounded-3xl backdrop-blur-xl border"
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-bg-sub) 100%, transparent)",
          borderColor: "color-mix(in srgb, var(--color-border-2) 70%, transparent)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
        }}
      >
        
        <div>
          <h3 className="text-(--color-gold)">Approach</h3>
          <h2
            className="text-2xl md:text-3xl font-semibold mt-3 mb-4"
            style={{ color: "var(--color-white)", fontFamily: "var(--font-display)" }}
          >
            Custom Adaptations
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-white)" }}>
            We deal with diverse markets and multiple technologies. While
            the underlying structures are similar, each industry has its own
            particular demands. Oculus International understands these
            nuances, customizing installations based on our clients&rsquo;
            commercial goals.
          </p>
        </div>
        
        <div
          className="mt-16 h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-white) 20%, transparent), transparent)",
          }}
        />

        <div className="mt-15">
        <h3 className="text-(--color-gold)">Certified Distribution</h3>
        <h2
          className="text-2xl md:text-3xl font-semibold mt-3 mb-4"
          style={{ color: "var(--color-offwhite)", fontFamily: "var(--font-display)" }}
        >
          Authorized Partnerships
        </h2>
        <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-white)" }}>
          Oculus is legally authorized to distribute, install, and maintain
          reputed systems from South Korea and Australia, including{" "}
          <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>NESS</span>,{" "}
          
          <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>WEBGATE</span>,{" "}
          <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>IMPEGVISION</span>,
          and other trusted ELV manufacturers.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
            >
              <PartnerCard {...p} />
            </div>
          ))}
        </div>
        </div>
      </section>
      
      {/*-------------take the 1st step----------*/}
      <TakeFirstStep
        eyebrow="Work With Oculus"
        heading={
          <>
            Ready to secure
            <br />
            your project?
          </>
        }
        description="Get in touch with our team for a free consultation tailored to your property's needs — no obligation."
        phone="tel:+94112345678"
        bgColor="var(--color-bg-sub-3)"
      />
      
      
    </div>
  );
}