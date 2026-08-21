// src/components/IndustryTemplate.jsx
//
// Pure presentational template — takes an `industry` object as a prop and
// renders it. No routing/lookup logic in here, same split as
// SolutionTemplate.jsx. Flat in components/, matches your other components.
//
// Colors below map directly to your theme.css tokens, same set
// SolutionTemplate.jsx uses:
//  - --color-bg-sub      dark teal panel (Hero / Why This Sector)
//  - --color-white / --color-offwhite   text sitting on that dark panel
//  - --color-olive        feature/solution card fill
//  - --color-heading      section heading text
//  - --color-text-muted   secondary/description text
//  - --color-accent       CTA + "More" pill (via btn-accent)

import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

function SolutionCard({ icon: Icon, title, description, link }) {
  return (
    <div
      className="rounded-2xl p-8 flex flex-col items-center text-center gap-4"
      style={{ backgroundColor: "var(--color-olive)" }}
    >
      <span style={{ color: "var(--color-white)" }}>
        {Icon ? (
          <Icon className="w-8 h-8" strokeWidth={1.75} />
        ) : (
          <ShieldCheck className="w-8 h-8" strokeWidth={1.75} />
        )}
      </span>
      <h3
        className="text-lg font-semibold"
        style={{ color: "var(--color-white)", fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed opacity-90" style={{ color: "var(--color-white)" }}>
        {description}
      </p>
      {link && (
        <Link
          to={link}
          className="btn-accent inline-block rounded-lg px-5 py-2 text-xs font-medium mt-1"
        >
          More
        </Link>
      )}
    </div>
  );
}

export default function IndustryTemplate({ industry }) {
  if (!industry) return null;

  const {
    title,
    tagline,
    heroImage,
    overview,
    ctaLabel = "Get a Free Quote",
    ctaHref = "/contact",
    whyTitle,
    whyText,
    solutions = [],
  } = industry;

  return (
    <div
      className="pt-24"
      style={{ backgroundColor: "var(--color-bg)", fontFamily: "var(--font-body)" }}
    >
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
            {overview && (
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-white)" }}>
                {overview}
              </p>
            )}
            <Link to={ctaHref} className="btn-accent inline-block rounded-lg px-6 py-2.5 text-sm font-medium">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- WHY THIS SECTOR ---------- */}
      {whyText && (
        <section
          className="mx-6 md:mx-16 mt-10 p-6 md:p-10 rounded-3xl"
          style={{ backgroundColor: "var(--color-bg-sub)" }}
        >
          <h2
            className="text-lg font-semibold mb-6"
            style={{ color: "var(--color-offwhite)", fontFamily: "var(--font-display)" }}
          >
            {whyTitle || "Why This Sector Needs Specialized Security"}
          </h2>
          <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: "var(--color-olive)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-white)" }}>
              {whyText}
            </p>
          </div>
        </section>
      )}

      {/* ---------- RECOMMENDED SOLUTIONS ---------- */}
      {solutions.length > 0 && (
        <section className="mx-6 md:mx-16 mt-10 py-10">
          <h2
            className="text-xl font-semibold mb-6"
            style={{ color: "var(--color-heading)", fontFamily: "var(--font-display)" }}
          >
            Recommended Solutions For This Sector
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, i) => (
              <SolutionCard key={i} {...solution} />
            ))}
          </div>
        </section>
      )}
      {/* Footer is intentionally NOT here — it lives once in MainLayout,
          so it renders below every route automatically. */}
    </div>
  );
}