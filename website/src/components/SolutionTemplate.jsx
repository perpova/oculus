import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Fingerprint,
  Clock,
  ShieldCheck,
  Video,
  Radio,
  Flame,
  DoorClosed,
  Wifi,
  ChevronDown,
  ArrowRight,
  Phone,
  Cable,
  BellRing,
  Music,
  Footprints,
  Tv,
  Speaker,
  UtensilsCrossed,
  Home,
  Building,
} from "lucide-react";
import TakeFirstStep from "./TakeFirstStep";

/**
 * SolutionTemplate — pure presentational component. Does NOT fetch data,
 * does NOT know about routing beyond linking to other solutions.
 * pages/SolutionPage.jsx is what looks up the data and passes it in.
 *
 * Colors below map directly to your theme.css tokens:
 *  - --color-bg-sub      dark teal panel (Hero / Key Features / Brands)
 *                         resolves to teal-deep in light mode, teal-dark in dark mode
 *  - --color-white / --color-offwhite   text sitting on that dark panel
 *  - --color-olive        feature card fill (matches the tan/olive cards in the mock)
 *  - --color-teal         Product Brand pill fill
 *  - --color-heading      FAQ title + question text (teal-dark light / gold dark)
 *  - --color-text-muted   FAQ answer text
 *  - --color-accent / --color-accent-hover  Quick Links pill
 */

const ICON_MAP = {
  fingerprint: Fingerprint,
  clock: Clock,
  shield: ShieldCheck,
  camera: Video,
  radio: Radio,
  flame: Flame,
  door: DoorClosed,
  wifi: Wifi,
  phone: Phone,
  cable: Cable,
  bell: BellRing,
  music: Music,
  footprints: Footprints,
  tv: Tv,
  speaker: Speaker,
  utensils: UtensilsCrossed,
  home: Home,
  building: Building,
};

function FeatureCard({ icon, title, description }) {
  const Icon = ICON_MAP[icon] || ShieldCheck;
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

function FaqRow({ faq, isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="w-full text-left rounded-xl px-6 py-4 transition-colors duration-200"
      style={{
        backgroundColor: isOpen
          ? "color-mix(in srgb, var(--color-teal-light) 35%, var(--color-bg))"
          : "color-mix(in srgb, var(--color-teal-light) 18%, var(--color-bg))",
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium" style={{ color: "var(--color-heading)" }}>
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: "var(--color-heading)" }}
        />
      </div>
      {isOpen && faq.answer && (
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {faq.answer}
        </p>
      )}
    </button>
  );
}

export default function SolutionTemplate({ solution, otherSolutions = [] }) {
  const [openFaq, setOpenFaq] = useState(0);

  if (!solution) return null;

  const {
    title,
    tagline,
    heroImage,
    description,
    ctaLabel = "Get a Free Quote",
    ctaHref = "/contact",
    keyFeatures = [],
    brands = [],
    faqs = [],
    takeFirstStep = {}
  } = solution;

  return (
    <div 
      className="pt-24"  
      style={{ backgroundColor: "var(--color-bg)", fontFamily: "var(--font-body)" }}>
      {/* ---------- HERO / INTRO PANEL ---------- */}
      <section
        className="rounded-3xl mx-6 md:mx-16 mt-8 p-6 md:p-10"
        style={{ backgroundColor: "var(--color-bg-sub)" }}
      >
        <h1
          className="text-2xl md:text-3xl font-semibold mb-3"
          style={{ color: "var(--color-offwhite)", fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>
        {tagline && (
          <p className="max-w-2xl mb-8 opacity-90" style={{ color: "var(--color-white)" }}>
            {tagline}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {heroImage && (
            <img
              src={heroImage}
              alt={title}
              className="w-full h-56 md:h-64 object-cover rounded-xl"
            />
          )}
          <div>
            {description && (
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-white)" }}>
                {description}
              </p>
            )}
            <Link to={ctaHref} className="btn-accent inline-block rounded-lg px-6 py-2.5 text-sm font-medium">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- KEY FEATURES ---------- */}
      {keyFeatures.length > 0 && (
        <section
          className="mx-6 md:mx-16 mt-10 p-6 md:p-10 rounded-3xl"
          style={{ backgroundColor: "var(--color-bg-sub)" }}
        >
          <h2
            className="text-lg font-semibold mb-6"
            style={{ color: "var(--color-offwhite)", fontFamily: "var(--font-display)" }}
          >
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {keyFeatures.map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>
        </section>
      )}

      {/* ---------- PRODUCT BRANDS ---------- */}
      {brands.length > 0 && (
        <section
          className="mx-6 md:mx-16 mt-10 mb-2 p-6 md:p-10 rounded-3xl"
          style={{ backgroundColor: "var(--color-bg-sub)" }}
        >
          <h2
            className="text-lg font-semibold mb-6"
            style={{ color: "var(--color-offwhite)", fontFamily: "var(--font-display)" }}
          >
            Product Brands
          </h2>
          <div className="flex flex-wrap gap-4">
            {brands.map((brand, i) => (
              <span
                key={i}
                className="rounded-lg px-5 py-2 text-sm font-medium"
                style={{ backgroundColor: "var(--color-teal)", color: "var(--color-white)" }}
              >
                {brand}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ---------- FAQ ---------- */}
      {faqs.length > 0 && (
        <section className="mx-6 md:mx-16 mt-10 py-10">
          <h2
            className="text-xl font-semibold mb-6"
            style={{ color: "var(--color-heading)", fontFamily: "var(--font-display)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-3 ">
            {faqs.map((faq, i) => (
              <FaqRow
                key={i}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </section>
      )}

      {/* ---------- QUICK LINKS (jump to other solutions) ---------- */}
      {otherSolutions.length > 0 && (
        <section className="mx-6 md:mx-16 mt-4 mb-16 pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
          <h2
            className="text-sm font-semibold mb-4 uppercase tracking-wide"
            style={{ color: "var(--color-text-muted)" }}
          >
            Explore Other Solutions
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherSolutions.map((s) => (
              <Link
                key={s.slug}
                to={`/solutions/${s.slug}`}
                className="btn-secondary inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium"
              >
                {s.navLabel || s.title}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/*-------------take the 1st step----------*/}
      <TakeFirstStep {...takeFirstStep} />


      {/* Footer is intentionally NOT here — it lives once in MainLayout,
          so it renders below every route automatically. */}
    </div>
  );
}