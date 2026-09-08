// src/pages/EliteControlPage.jsx
//
// Elite products catalogue page — Oculus International is the authorized
// South Asia partner for the Elite brand (Arrowhead Alarm Products, NZ).
//
// Layout:
// 1. Full-bleed hero — elite-panel-overview.jpg background, title + pitch,
//    down-arrow scrolls to the carousel section below
// 2. Circular product carousel — a sliding track that loops seamlessly in
//    both directions (clone-at-each-end technique, same idea as
//    SolutionsCarousel.jsx's infinite loop). The item centered in the
//    viewport is enlarged/glowing. Clicking any circle scrolls smoothly
//    to that product's detail section further down
// 3. Horizontal product detail cards — image left, content right, one per
//    product, each with a scroll-anchor id the carousel targets

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

// Hero background — swap for your real asset.
import heroImg from "../assets/elite-panel-overview.jpg";

// Product images — same ../assets/* convention used across the site.
import hardwareImg from "../assets/elite-hardware-1.png";
import appImg from "../assets/elite-app-1.png";
import dashboardImg from "../assets/elite-dashboard-1.png";
import accessControlImg from "../assets/elite-access-control-1.png";
import sirensImg from "../assets/elite_siren_new-1.png";
import keypadsImg from "../assets/elite_ectouch-1.png"; // actual keypad photo

import TakeFirstStep from "../components/TakeFirstStep";

// ─── Product categories ─────────────────────────────────────────
const productCategories = [
  {
    label: "Hardware",
    slug: "hardware",
    image: hardwareImg,
    desc: "Modular control panels built for scalable, future-proof security deployments.",
    details: [
      "Expandable zone architecture",
      "Wired & wireless device support",
      "Backup battery & tamper protection",
    ],
  },
  {
    label: "EliteCloud App",
    slug: "app",
    image: appImg,
    desc: "Arm, disarm, and monitor your premises remotely from any device, anywhere.",
    details: [
      "Real-time push notifications",
      "Multi-site control from one login",
      "iOS & Android support",
    ],
  },
  {
    label: "EliteCloud Dashboard",
    slug: "dashboard",
    image: dashboardImg,
    desc: "A real-time command center for multi-site monitoring and system health.",
    details: [
      "Live event & alarm history",
      "User & permission management",
      "System health at a glance",
    ],
  },
  {
    label: "Access Control",
    slug: "access-control",
    image: accessControlImg,
    desc: "Manage entry points, credentials, and access logs from a single interface.",
    details: [
      "Card, PIN & mobile credentials",
      "Door & gate scheduling",
      "Full access audit trail",
    ],
  },
  {
    label: "Sirens",
    slug: "sirens",
    image: sirensImg,
    desc: "High-output sirens engineered for reliable, weatherproof deterrence.",
    details: [
      "Indoor & outdoor rated options",
      "Tamper-resistant enclosure",
      "Strobe + audible alert modes",
    ],
  },
  {
    label: "Keypads",
    slug: "keypads",
    image: keypadsImg,
    desc: "Sleek, responsive keypads designed for everyday ease of use.",
    details: [
      "Backlit touch or button models",
      "PIN & proximity card entry",
      "Quick-arm shortcut keys",
    ],
  },
];

// ─── Carousel track geometry ────────────────────────────────────
// Fixed pixel sizing keeps the slide math simple and predictable.
// Bump these together if you want bigger/smaller circles.
const CIRCLE_SIZE = 240; // px diameter — bump this to resize the whole carousel
const CIRCLE_GAP = 40; // px between circles
const STEP_PX = CIRCLE_SIZE + CIRCLE_GAP;
const VIEWPORT_WIDTH = CIRCLE_SIZE * 3 + CIRCLE_GAP * 2; // shows ~3 circles
const ARROW_BUTTON_SIZE = 40; // px, matches h-10 w-10 on the arrow buttons
const ARROW_ROW_GAP = 40; // px, matches sm:gap-10 between viewport and arrows
// Total row width the carousel actually needs — derived from the above so
// it never gets smaller than the viewport plus its arrow buttons, no
// matter how big CIRCLE_SIZE gets. A fixed max-w-4xl was narrower than
// this at larger circle sizes, which is what clipped the 3rd circle.
const CAROUSEL_ROW_WIDTH =
  VIEWPORT_WIDTH + ARROW_BUTTON_SIZE * 2 + ARROW_ROW_GAP * 2;

// ─── Seamless loop setup ────────────────────────────────────────
// The viewport always shows a 3-circle window (prev, active, next). That
// means at any moment we need a valid neighbor on BOTH sides of the
// active circle — including the instant the active circle itself is a
// clone during the wrap. A single clone at each end can't cover that:
// right as you cross into the clone, the window needs a *second* clone
// beyond it, which didn't exist, so the display had nothing to render
// there and effectively skipped/glitched. Cloning 2 items at each end
// (BUFFER) gives enough slack that a valid circle is always available,
// so the wrap glides exactly like every other step — no jump.
//
// trackIndex 0..BUFFER-1              → clones of the last BUFFER items
// trackIndex BUFFER..BUFFER+total-1   → real items 0..total-1
// trackIndex BUFFER+total..end        → clones of the first BUFFER items
//
// Sliding past either clone zone triggers a transitionless snap back to
// the equivalent real position, so the loop never visibly jumps across
// the whole strip — it always glides one step, same technique as
// SolutionsCarousel.jsx's infinite-scroll wrap.
const total = productCategories.length;
const BUFFER = 2; // window radius (1) + 1, so a neighbor is always available
const extendedCategories = [
  ...productCategories.slice(-BUFFER),
  ...productCategories,
  ...productCategories.slice(0, BUFFER),
];

export default function EliteControlPage() {
  // trackIndex starts at BUFFER — the first real item, right after the
  // leading clones.
  const [trackIndex, setTrackIndex] = useState(BUFFER);
  const [withTransition, setWithTransition] = useState(true);
  // Guards against rapid clicking. CSS transitions don't queue — a
  // second click before the first slide finishes just retargets it
  // mid-flight, so trackIndex can advance further than the snap logic
  // has verified is safe, running past the array bounds and rendering
  // a broken/undefined circle right at the loop boundary. Locking the
  // arrows until the current slide settles keeps trackIndex moving one
  // verified step at a time.
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRefs = useRef({});
  const carouselRef = useRef(null);

  // The real product index this trackIndex corresponds to — used for
  // label/glow highlighting and for scrolling to the right section.
  const activeIndex = ((trackIndex - BUFFER) % total + total) % total;

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTrackIndex((i) => i - 1);
  };
  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTrackIndex((i) => i + 1);
  };

  const scrollToCarousel = () => {
    carouselRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const focusProduct = (slug) => {
    if (isAnimating) return;
    const idx = productCategories.findIndex((p) => p.slug === slug);
    if (idx !== -1) {
      const target = idx + BUFFER;
      // Only lock/animate if this actually moves the track. If the
      // clicked circle is already the active one, trackIndex wouldn't
      // change, so React skips the re-render, the track's transition
      // never starts, onTransitionEnd never fires, and the arrows would
      // stay locked forever.
      if (target !== trackIndex) {
        setIsAnimating(true);
        setTrackIndex(target);
      }
    }
    sectionRefs.current[slug]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // After the slide animation finishes, if we've landed on a clone,
  // snap instantly (no transition) to the matching real position.
  // Either way, the slide is done — unlock the arrows.
  const handleTransitionEnd = () => {
    if (trackIndex < BUFFER) {
      setWithTransition(false);
      setTrackIndex(trackIndex + total);
    } else if (trackIndex > BUFFER + total - 1) {
      setWithTransition(false);
      setTrackIndex(trackIndex - total);
    }
    setIsAnimating(false);
  };

  // Safety net: if onTransitionEnd somehow never fires (tab backgrounded,
  // an unrelated state change bailed out of the transition, etc.), don't
  // let the arrows stay locked forever — release after the transition's
  // max duration plus a small buffer.
  useEffect(() => {
    if (!isAnimating) return;
    const timeout = setTimeout(() => setIsAnimating(false), 700);
    return () => clearTimeout(timeout);
  }, [isAnimating, trackIndex]);

  // Re-enable the transition on the next paint after a transitionless
  // snap, so the following click animates normally again.
  useEffect(() => {
    if (!withTransition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setWithTransition(true));
      });
    }
  }, [withTransition]);

  // Slide the whole track so the active circle's center lands in the
  // middle of the viewport — this is what makes it glide instead of
  // swapping instantly.
  const trackOffset =
    VIEWPORT_WIDTH / 2 - CIRCLE_SIZE / 2 - trackIndex * STEP_PX;

  return (
    <div className="bg-(--color-bg-primary)">
      {/* ── Hero ── */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col items-center px-6">
          <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm">
            <ShieldCheck className="h-8 w-8" />
          </span>
          <h1 className="text-4xl font-bold text-white sm:text-6xl">
            Elite Cloud System
          </h1>
          <p className="mt-5 max-w-xl text-white/80 sm:text-lg">
            One modular platform covering intrusion detection, access
            control, monitoring, and automation — Oculus International is
            the authorized Elite partner across South Asia.
          </p>
        </div>

        <button
          onClick={scrollToCarousel}
          aria-label="Scroll to products"
          className="absolute bottom-8 z-10 flex h-6 w-6 items-center justify-center text-white/70 transition-colors hover:text-white"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </section>

      {/* ── Circular product carousel ── */}
      <section
        ref={carouselRef}
        className="relative scroll-mt-0 bg-(--color-bg-primary) pt-24 pb-32"
      >
        <div
          className="mx-auto flex items-center justify-center gap-4 px-4 sm:gap-10"
          style={{ maxWidth: `${CAROUSEL_ROW_WIDTH}px` }}
        >
          <button
            onClick={goPrev}
            disabled={isAnimating}
            aria-label="Previous product"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--color-border) text-(--color-text-secondary) transition-colors hover:border-(--color-accent-teal) hover:text-(--color-accent-teal) disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* viewport — clips the track, fixed width matching ~3 circles.
              Extra height on top of CIRCLE_SIZE gives room for the active
              circle's scale(1.08) so it doesn't get clipped, plus the
              label row above each circle. */}
          <div
            className="shrink-0 overflow-hidden"
            style={{
              width: `${VIEWPORT_WIDTH}px`,
              height: `${CIRCLE_SIZE * 1.15 + 40}px`,
            }}
          >
            {/* track — slides via transform, extended array (with clones)
                is always fully rendered */}
            <div
              onTransitionEnd={handleTransitionEnd}
              className="flex items-start"
              style={{
                gap: `${CIRCLE_GAP}px`,
                transform: `translateX(${trackOffset}px)`,
                transition: withTransition
                  ? "transform 600ms ease-in-out"
                  : "none",
              }}
            >
              {extendedCategories.map((p, idx) => {
                const isActive = idx === trackIndex;
                return (
                  <button
                    key={`${p.slug}-${idx}`}
                    onClick={() => focusProduct(p.slug)}
                    className="flex shrink-0 flex-col items-center gap-4"
                    style={{ width: `${CIRCLE_SIZE}px` }}
                  >
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest ${
                        isActive
                          ? "text-(--color-accent-teal)"
                          : "text-(--color-text-secondary)"
                      }`}
                      style={{
                        display: "inline-block",
                        transform: isActive ? "scale(1.25)" : "scale(1)",
                        transition: withTransition
                          ? "color 300ms ease, transform 300ms ease"
                          : "none",
                      }}
                    >
                      {p.label}
                    </span>
                    <span
                      className="relative flex items-center justify-center overflow-hidden rounded-full border-2"
                      style={{
                        width: `${CIRCLE_SIZE}px`,
                        height: `${CIRCLE_SIZE}px`,
                        backgroundColor: "var(--color-olive)",
                        borderColor: isActive
                          ? "var(--color-accent-teal)"
                          : "var(--color-border)",
                        boxShadow: isActive
                          ? "0 0 40px var(--color-accent-teal)"
                          : "none",
                        opacity: isActive ? 1 : 0.5,
                        transform: isActive ? "scale(1.08)" : "scale(0.9)",
                        // Tied to the same withTransition flag as the
                        // track's slide. A normal step lets this animate
                        // (300ms) so the circle grows into its active
                        // look WHILE sliding — one smooth motion. During
                        // the wrap snap the track jumps with no
                        // transition, so this must jump too, or the
                        // circle pops/glows in place after already
                        // landing at center — the glitch you saw at the
                        // 1st/6th circle.
                        transition: withTransition
                          ? "transform 300ms ease, opacity 300ms ease, box-shadow 300ms ease, border-color 300ms ease"
                          : "none",
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.label}
                        className="h-[65%] w-[65%] object-contain"
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={goNext}
            disabled={isAnimating}
            aria-label="Next product"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--color-border) text-(--color-text-secondary) transition-colors hover:border-(--color-accent-teal) hover:text-(--color-accent-teal) disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* ── Product detail sections ── */}
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <div className="flex flex-col gap-10">
          {productCategories.map(({ label, slug, image, desc, details }) => (
            <div
              key={slug}
              id={`product-${slug}`}
              ref={(el) => (sectionRefs.current[slug] = el)}
              className="scroll-mt-28 flex h-80 flex-col overflow-hidden rounded-2xl border border-(--color-teal-dark) bg-white/5 backdrop-blur-md shadow-xl shadow-black/10 sm:flex-row"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
              }}
            >
              {/* image — left side, big enough to read clearly */}
              <div
                className="relative flex h-64 w-full shrink-0 items-center justify-center sm:h-auto sm:w-1/3"
                style={{ backgroundColor: "var(--color-bg-sub-6)" }}
              >
                <img
                  src={image}
                  alt={label}
                  className="h-[70%] w-[70%] object-contain"
                />
              </div>

              {/* content — right side */}
              <div className="flex flex-1 flex-col justify-center p-8 sm:p-10">
                <h3 className="mb-2 text-2xl font-semibold text-(--color-text-secondary)">
                  {label}
                </h3>
                <p className="mb-5 text-(--color-text-secondary)">{desc}</p>

                <ul className="mb-6 flex flex-col gap-2">
                  {details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-(--color-text-secondary)"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-(--color-accent-teal)" />
                      {d}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/products/elitecontrol/${slug}`}
                  className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-(--color-accent-teal)"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
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
              eyebrowColor="var(--color-text-3)"
            />
    </div>
  );
}