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
// CARDS_VISIBLE cards shown at once. Every STEP_INTERVAL ms the
// track steps left by exactly one card, then pauses. After the
// LAST of the 12 real cards has scrolled off (i.e. index reaches
// solutions.length === 12), it snaps back to index 0 with the
// transition disabled for one frame so the loop is invisible.
// This wrap point is dynamic — solutions.length — so it always
// matches however many items are in the `solutions` array above,
// not a fixed number.

const CARDS_VISIBLE = 2; // cards moving in the carousel (right side)
const CARD_WIDTH = 300;
const CARD_HEIGHT = 377;
const STATIC_WIDTH = 400;

const GAP_PX = 30;
const STEP_INTERVAL = 3000; // ms the row pauses between steps
const TRANSITION_MS = 1600; // ms the slide animation takes

export default function SolutionsCarousel() {
  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  // duplicate the first CARDS_VISIBLE cards at the end so there's
  // real content to slide into during the wrap-around step
  const extended = [...solutions, ...solutions.slice(0, CARDS_VISIBLE)];

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

  return (
    <section id="solutions" className="relative bg-(--color-bg) py-20">
      {/* Heading only up top, like "Related Reads" in the reference —
          the description now lives lower, next to the static image */}
      <div className="px-16 md:px-20">
        <span className="text-gold font-semibold text-[18px] tracking-wide uppercase">
          What We Offer
        </span>
        <h2 className="font-display font-normal text-3xl md:text-[56px] leading-tight text-(--color-heading-sub-1) mt-2">
          Security Solutions
        </h2>
      </div>

      <div
        className="flex flex-col md:flex-row mt-12 px-16 md:px-20"
        style={{ columnGap: `${GAP_PX}px`, rowGap: "40px" }}
      >
        {/* ── Left half (~50%): static image + description + button ── */}
        <div
          className="flex shrink-0 md:w-1/2"
          style={{ columnGap: `${GAP_PX}px` }}
        >
          <div
            className="shrink-0 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center"
            style={{ width: `${STATIC_WIDTH}px`, height: `${CARD_HEIGHT}px` }}
          >
            <img
              src={eliteImg}
              alt="Oculus International"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center" style={{ rowGap: "16px" }}>
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
            <a
              href="#elite-showcase"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-(--color-accent) w-fit transition-colors duration-200 hover:text-(--color-text-2)"
            >
              <span className="underline underline-offset-4">Discover More</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* ── Right half (~50%): carousel viewport — only this part scrolls ── */}
        <div className="flex-1 min-w-0 md:w-1/2 overflow-hidden">
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

                <div className="flex flex-col flex-1 p-5 min-h-0" style={{ rowGap: "12px" }}>
                  <p className="font-display text-lg leading-snug text-(--color-teal-dark) line-clamp-2">
                    {s.label}
                  </p>
                  <p className="text-sm text-olive flex-1 line-clamp-2">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--color-teal-dark) mt-auto transition-colors duration-200 group-hover:text-(--color-green-light)">
                    <span className="underline underline-offset-4 ">Discover More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}