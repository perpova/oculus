import { useEffect, useRef, useState } from "react";
import heroLight from "../assets/hero-light-2.png";
import heroDark from "../assets/hero-dark-4.png";
import { useTheme } from "../ThemeContext";
import HeroHotspots from "./HeroHotspots";

import { useQuoteModal } from "../context/QuoteModalContext";
import { Link } from "react-router-dom";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "365", label: "24/7 Monitoring" },
  { value: "15+", label: "Global Brands" },
];

function parseStat(value) {
  const match = value.match(/^(\d+)(.*)$/);
  return match
    ? { number: parseInt(match[1], 10), suffix: match[2] }
    : { number: 0, suffix: value };
}

const parsedStats = stats.map((s) => ({ ...s, ...parseStat(s.value) }));

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export default function Hero() {
  const { openQuoteModal } = useQuoteModal();
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  // Swap background image whenever theme changes
  useEffect(() => {
    const img = theme === "dark" ? heroDark : heroLight;
    document.documentElement.style.setProperty("--hero-bg-image", `url(${img})`);
  }, [theme]);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollableHeight = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.min(Math.max(scrolled / scrollableHeight, 0), 1);
      setProgress(p);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headingOpacity = Math.max(0, 1 - progress / 0.5);
  const headingShift = Math.min(progress / 0.5, 1) * -40;

  const statsProgress = Math.min(Math.max((progress - 0.5) / 0.5, 0), 1);
  const statsOpacity = statsProgress;
  const statsShift = (1 - statsProgress) * 40;

  const countProgress = easeOutCubic(Math.min(statsProgress / 0.7, 1));

  // Small rotation applied to the hotspot cluster as the user scrolls
  // through the pinned hero, settling before the next section takes over.
  const hotspotRotation = progress * 15; // degrees — tweak max value to taste

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative text-(--color-text)"
      style={{ height: "220vh" }}
    >
            <div
        className="sticky top-0 h-screen h-dvh overflow-hidden flex items-center"
        style={{ minHeight: "100svh" }}
      >
        {/* Background image — theme-aware via CSS variable set in useEffect above */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-500"
          style={{ backgroundImage: "var(--hero-bg-image)" }}
        />
        {/* Overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0, 0, 0, 0)" }}
        />

        {/* Icon hotspots + connecting lines, anchored to the horn-speaker in the image */}
        <HeroHotspots rotation={hotspotRotation} />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center w-full">
          <div className="relative min-h-[420px]">
            <div
              className="absolute inset-0"
              style={{
                opacity: headingOpacity,
                transform: `translateY(${headingShift}px)`,
                pointerEvents: headingOpacity > 0.05 ? "auto" : "none",
                transition: "opacity 0.05s linear",
              }}
            >
             <h1 className="main-heading font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.25] md:leading-[1.5] tracking-wide">
                Futuristic
                <br />
                <span className="text-4xl sm:text-5xl md:text-6xl">ELV Systems</span>
                <br />
                Engineered for Excellence
              </h1>

              <span className="inline-block mt-5 sm:mt-6 bg-(--color-text)/10 border border-(--color-text)/15 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-body tracking-[0.2em] sm:tracking-[0.3em]">
                Extra Low Voltage Integration
              </span>

              <p className="mt-6 text-(--color-text)/70 max-w-md font-body">
                From intelligent alarm systems to high-performance CCTV networks — Sri Lanka's trusted
                ELV & electronic security specialist, protecting homes, businesses, and institutions island-wide.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={openQuoteModal}
                  className="btn-accent font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base text-center"
                >
                  Request a Free Quote
                </button>

                <a href="#solutions"
                  className="border border-(--color-text)/30 text-(--color-text) font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-(--color-text)/10 transition-colors text-sm sm:text-base text-center"
                >
                  Explore Solutions
                </a>
              </div>
            </div>

            <div
              className="absolute inset-0 flex flex-col justify-center"
              style={{
                opacity: statsOpacity,
                transform: `translateY(${statsShift}px)`,
                pointerEvents: statsOpacity > 0.05 ? "auto" : "none",
                transition: "opacity 0.05s linear",
              }}
            >
              <div className="flex items-center gap-3 text-sm uppercase tracking-widest text-(--color-text) font-body mb-8">
                <span>Selected Proof</span>
                <span className="h-px flex-1 bg-(--color-text)/40" />
                <span>Production Scale</span>
              </div>

              <div className="flex flex-wrap gap-x-8 sm:gap-x-14 gap-y-6 sm:gap-y-8 border-t border-b border-(--color-text)/40 py-6 sm:py-10">
                {parsedStats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-(--color-text) tabular-nums">
                      {Math.round(s.number * countProgress)}
                      {s.suffix}
                    </div>
                    <div className="text-(--color-text)/80 text-sm uppercase tracking-wide mt-3 font-body">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact-us"
                className="btn-accent mt-8 sm:mt-10 inline-flex w-full sm:w-fit justify-center font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}