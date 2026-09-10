import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import solution_1_Img from "../assets/solution-1.jpg";
import solution_2_Img from "../assets/solution-2.jpeg";
import solution_3_Img from "../assets/solution-3.jpg";
import solution_4_Img from "../assets/solution-4.jpg";
import solution_5_Img from "../assets/solution-5.png";
import solution_6_Img from "../assets/solution-6.2.jpeg";
import solution_7_Img from "../assets/solution-7.jpg";
import solution_8_Img from "../assets/solution-8.jpg";
import solution_9_Img from "../assets/solution-9.png";
import solution_10_Img from "../assets/solution-10.jpg";
import solution_11_Img from "../assets/solution-11.jpg";
import solution_12_Img from "../assets/solution-12.jpg";
import eliteImg from "../assets/elite.png";

// `slug` on each entry must match the `slug` field in data/solutions.js
// exactly — that's what the routed solution page looks up.
const solutions = [
  {
    label: "Smart Home Solutions",
    slug: "smart-home",
    image: solution_1_Img,
    desc: "Bring your home environment directly to your fingertips with advanced automation controls.",
  },
  {
    label: "Smart Office Solutions",
    slug: "smart-office",
    image: solution_2_Img,
    desc: "Control office workflows intelligently, optimize energy use, and create a connected work ecosystem.",
  },
  {
    label: "IP/Analogue Telephony",
    slug: "ip-telephony",
    image: solution_3_Img,
    desc: "Implement high-clarity internal communication systems to boost corporate productivity.",
  },
  {
    label: "Structured Cabling",
    slug: "structured-cabling",
    image: solution_4_Img,
    desc: "Organize data channels, optical fibers, and core networking lines to keep operations neat and clean.",
  },
  {
    label: "Nurse Calling Solutions",
    slug: "nurse-calling",
    image: solution_5_Img,
    desc: "Ensure instant patient-to-nurse signaling structures for critical care and clinical environments.",
  },
  {
    label: "Pipe Music Systems",
    slug: "pipe-music",
    image: solution_6_Img,
    desc: "Deliver premium background music setups to elevate ambient guest experiences in venues.",
  },
  {
    label: "Access Control & Attendance",
    slug: "access-control",
    image: solution_7_Img,
    desc: "Control physical entry gates, monitor valuable areas, and track employee logs automatically.",
  },
  {
    label: "Guard Tour Systems",
    slug: "guard-tour",
    image: solution_8_Img,
    desc: "Monitor security guard patrols, track checkpoints, and ensure absolute safety coverage.",
  },
  {
    label: "Wired & Wireless Networking",
    slug: "networking",
    image: solution_9_Img,
    desc: "Establish high-bandwidth routers, firewalls, and switches to connect your enterprise seamlessly.",
  },
  {
    label: "IP TV & MATV Solutions",
    slug: "ip-tv-matv",
    image: solution_10_Img,
    desc: "Broadcast high-definition television programs and channels across multi-room facilities.",
  },
  {
    label: "Public Address Systems",
    slug: "public-address",
    image: solution_11_Img,
    desc: "Broadcast clear announcements across large assemblies, stadiums, and building zones.",
  },
  {
    label: "Hotel & Restaurant Management",
    slug: "hotel-restaurant",
    image: solution_12_Img,
    desc: "Integrate hotel logic, booking systems, and point-of-sale terminals to streamline hospitality.",
  },
];

// ─── Autoplay stepped carousel ─────────────────────────────────
// The track steps left by exactly one card every STEP_INTERVAL ms,
// then pauses. After the LAST of the 12 real cards has scrolled off
// (i.e. index reaches solutions.length === 12), it snaps back to
// index 0 with the transition disabled for one frame so the loop is
// invisible. This wrap point is dynamic — solutions.length — so it
// always matches however many items are in the `solutions` array
// above, not a fixed number.
//
// CARDS_VISIBLE and CARD_WIDTH are now driven by the actual measured
// width of the carousel's column (see useContainerWidth below) rather
// than fixed pixel breakpoints. Fixed breakpoints kept failing one
// device at a time (iPad Air → Surface Pro 7 → Nest Hub Max → ...)
// because no single CARD_WIDTH fits both a 768px tablet column and a
// 1280px+ desktop column showing 2 cards. Measuring the real space and
// sizing cards to fit it (clamped between MIN/MAX so cards don't get
// too cramped or too huge) works for any width without per-device
// tuning. Phones still get a fixed, smaller card size — see isMobile.

const GAP_PX = 20;
const STEP_INTERVAL = 3000; // ms the row pauses between steps
const TRANSITION_MS = 1600; // ms the slide animation takes

// ─── Responsive sizing ─────────────────────────────────────────
const MOBILE_CARD_WIDTH = 240;
const MOBILE_CARD_HEIGHT = 320;
const MOBILE_STATIC_WIDTH = 260;

// Desktop/tablet cards keep the original card's proportions
// (377/300 and 400/300) but scale with the measured column width.
const ASPECT_RATIO = 377 / 300;
const STATIC_ASPECT_RATIO = 400 / 300;

// Below this width, 2 cards would feel cramped — drop to 1 full-size
// card instead of squeezing two in. Above this, cap card size so very
// wide screens don't stretch cards larger than the original design.
const MIN_DESKTOP_CARD_WIDTH = 220;
const MAX_DESKTOP_CARD_WIDTH = 300;

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

// Measures the actual rendered width of a ref'd element via
// ResizeObserver, so card sizing reacts to real available space
// (flex-basis, padding, container queries, etc.) instead of guessing
// from window width alone.
function useContainerWidth(ref) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref]);

  return width;
}

export default function SolutionsCarousel() {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const containerWidth = useContainerWidth(containerRef);

  // How wide 2 cards + the gap between them would be if we used all
  // the measured space. Falls back to the original 300px desktop size
  // before the first ResizeObserver measurement lands.
  const twoCardWidth =
    containerWidth > 0 ? (containerWidth - GAP_PX) / 2 : MAX_DESKTOP_CARD_WIDTH;

  // Only show 2 cards if each would be comfortably above the minimum;
  // otherwise fall back to 1 full-size card that fits the column.
  const CARDS_VISIBLE = isMobile ? 1 : twoCardWidth >= MIN_DESKTOP_CARD_WIDTH ? 2 : 1;

  const desktopTwoCardWidth = Math.min(
    MAX_DESKTOP_CARD_WIDTH,
    Math.max(MIN_DESKTOP_CARD_WIDTH, twoCardWidth)
  );
  const desktopSingleCardWidth = Math.min(
    MAX_DESKTOP_CARD_WIDTH,
    containerWidth || MAX_DESKTOP_CARD_WIDTH
  );

  const CARD_WIDTH = isMobile
    ? MOBILE_CARD_WIDTH
    : CARDS_VISIBLE === 2
    ? desktopTwoCardWidth
    : desktopSingleCardWidth;

  const CARD_HEIGHT = isMobile ? MOBILE_CARD_HEIGHT : Math.round(CARD_WIDTH * ASPECT_RATIO);
  const STATIC_WIDTH = isMobile
    ? MOBILE_STATIC_WIDTH
    : Math.round(CARD_WIDTH * STATIC_ASPECT_RATIO);

  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  // duplicate the first 2 cards at the end so there's real content to
  // slide into during the wrap-around step, regardless of whether
  // CARDS_VISIBLE is currently 1 or 2.
  const extended = [...solutions, ...solutions.slice(0, 2)];

  // ── Autoplay + resilience against bfcache restores / hidden tabs ──
  // Bug this fixes: navigating away and back via browser back/forward
  // restores the page from bfcache instead of a fresh mount. While the
  // page was frozen, JS was paused mid-transition, so `transitionend`
  // never fired to snap `index` back to 0. The old setInterval kept
  // ticking `index` upward unbounded once the tab resumed, pushing the
  // track past the duplicated cards at the end of `extended` — nothing
  // to render there, so the carousel appeared blank until a hard refresh
  // forced a real remount.
  useEffect(() => {
    const startInterval = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        // clamp so a missed transitionend can never overshoot past
        // the duplicated cards at the end of `extended`
        setIndex((prev) => (prev >= solutions.length ? prev : prev + 1));
      }, STEP_INTERVAL);
    };

    const stopInterval = () => clearInterval(intervalRef.current);

    const resetCarousel = () => {
      // hard reset for when the page is restored from bfcache — index
      // and transform can be stale from before the page was frozen
      stopInterval();
      setWithTransition(false);
      setIndex(0);
      startInterval();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) stopInterval();
      else startInterval();
    };

    const handlePageShow = (e) => {
      if (e.persisted) resetCarousel();
    };

    startInterval();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      stopInterval();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  const handleTransitionEnd = () => {
    if (index === solutions.length) {
      // slid onto the duplicated cards — snap back to real index 0
      // with no transition, then re-enable it on the next paint
      setWithTransition(false);
      setIndex(0);
    }
  };

  useEffect(() => {
    if (!withTransition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setWithTransition(true));
      });
    }
  }, [withTransition]);

  // fixed step: card width + gap, in real pixels — no drift, no measuring
  const stepPx = CARD_WIDTH + GAP_PX;

  // exact pixel width of the viewport so exactly CARDS_VISIBLE cards
  // (plus the gaps between them) show — no partial card can peek in
  const viewportWidth = CARDS_VISIBLE * CARD_WIDTH + (CARDS_VISIBLE - 1) * GAP_PX;

  return (
    <section id="solutions" className="relative bg-(--color-bg) py-14 md:py-20 overflow-x-hidden">
      {/* Heading only up top, like "Related Reads" in the reference —
          the description now lives lower, next to the static image */}
      <div className="px-5 sm:px-10 md:px-16 lg:px-20">
        <span className="text-gold font-semibold text-sm md:text-[18px] tracking-wide uppercase">
          What We Offer
        </span>
        <h2 className="font-display font-normal text-2xl sm:text-3xl md:text-[56px] leading-tight text-(--color-heading-sub-1) mt-2">
          Security Solutions
        </h2>
      </div>

      <div
        className="flex flex-col md:flex-row mt-8 md:mt-12 px-5 sm:px-10 md:px-16 lg:px-20"
        style={{ columnGap: `${GAP_PX}px`, rowGap: "32px" }}
      >
        {/* ── Left half (~50%): static image + description + button ──
            Stacks vertically on phones (flex-col), sits side-by-side
            from the sm breakpoint up (sm:flex-row), and shares the row
            with the carousel from md up. */}
        <div
          className="flex flex-col sm:flex-row md:w-1/2 min-w-0"
          style={{ columnGap: `${GAP_PX}px`, rowGap: "16px" }}
        >
          <div
            className="w-full sm:w-2/5 sm:shrink-0 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center mx-auto"
            style={{
              maxWidth: `${STATIC_WIDTH}px`,
              height: isMobile ? "220px" : `${CARD_HEIGHT}px`,
            }}
          >
            <img
              src={eliteImg}
              alt="Oculus International"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center min-w-0" style={{ rowGap: "16px" }}>
            <p className="text-olive text-sm md:text-lg">
              <span className="text-(--color-accent) text-lg md:text-2xl font-semibold">
                Elite Cloud System
              </span>{" "}
              — Manage and monitor your entire security network remotely, from any device, in real time.
            </p>
            {/*
              Points at the ProductElite section further down this same
              homepage. This assumes ProductElite.jsx's root element has
              id="product-elite" — add that id there if it isn't set yet.
              Swap the href for a react-router <Link to="/..."> instead if
              ProductElite actually lives on its own route.
            */}
            
            <a  href="#elite-showcase"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-(--color-accent) w-fit transition-colors duration-200 hover:text-(--color-text-2)"
            >
              <span className="underline underline-offset-4">Discover More</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* ── Right half: measured column ──
            containerRef measures this outer div's actual width (set by
            md:w-1/2, independent of its children), which CARD_WIDTH
            above is derived from. The clipping/maxWidth logic lives on
            the INNER div instead, so constraining the inner element's
            width never feeds back into the measurement itself. */}
        <div ref={containerRef} className="min-w-0 md:w-1/2">
          <div
            className="overflow-hidden mx-auto md:mx-0"
            style={{ maxWidth: `${viewportWidth}px` }}
          >
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className="flex"
              style={{
                transform: `translateX(-${index * stepPx}px)`,
                transition: withTransition
                  ? `transform ${TRANSITION_MS}ms ease-in-out`
                  : "none",
                columnGap: `${GAP_PX}px`,
              }}
            >
              {extended.map((s, i) => (
                <Link
                  to={`/solutions/${s.slug}`}
                  key={`${s.slug}-${i}`}
                  className="group flex flex-col shrink-0 rounded-2xl bg-grey overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }}
                >
                  {/* image is half the card height — not the whole card */}
                  <div
                    className="relative overflow-hidden shrink-0"
                    style={{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT / 2}px` }}
                  >
                    <img
                      src={s.image}
                      alt={s.label}
                      className="absolute inset-0 w-full h-full object-cover "
                      style={{ transition: "all 0.3s ease" }}
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-4 md:p-5 min-h-0" style={{ rowGap: "10px" }}>
                    <p className="font-display text-base md:text-lg leading-snug text-(--color-teal-dark) line-clamp-2">
                      {s.label}
                    </p>
                    <p className="text-xs md:text-sm text-olive flex-1 line-clamp-2">{s.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-(--color-teal-dark) mt-auto transition-colors duration-200 group-hover:text-(--color-green-light)">
                      <span className="underline underline-offset-4 ">Discover More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}