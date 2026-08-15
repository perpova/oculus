import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import solution_1_Img from "../assets/SmartHomeSolutions.jpg";
import solution_2_Img from "../assets/Office.jpeg";
import solution_3_Img from "../assets/solution-3.jpg";
import solution_4_Img from "../assets/wired-network.jpg";
import solution_5_Img from "../assets/solution-5.png";
import solution_6_Img from "../assets/solution-6.2.jpeg";
import solution_7_Img from "../assets/solution-7.jpg";
import solution_8_Img from "../assets/solution-8.jpg";
import solution_9_Img from "../assets/solution-9.png";
import solution_10_Img from "../assets/solution-10.jpg";
import solution_11_Img from "../assets/solution-11.jpg";
import solution_12_Img from "../assets/solution-12.jpg";

const solutions = [
  {
    label: "Smart Home Solutions",
    image: solution_1_Img,
    desc: "Bring your home environment directly to your fingertips with advanced automation controls.",
    href: "#",
  },
  {
    label: "Smart Office Solutions",
    image: solution_2_Img,
    desc: "Control office workflows intelligently, optimize energy use, and create a connected work ecosystem.",
    href: "#",
  },
  {
    label: "IP/Analogue Telephony",
    image: solution_3_Img,
    desc: "Implement high-clarity internal communication systems to boost corporate productivity.",
    href: "#",
  },
  {
    label: "Structured Cabling",
    image: solution_4_Img,
    desc: "Organize data channels, optical fibers, and core networking lines to keep operations neat and clean.",
    href: "#",
  },
  {
    label: "Nurse Calling Solutions",
    image: solution_5_Img,
    desc: "Ensure instant patient-to-nurse signaling structures for critical care and clinical environments.",
    href: "#",
  },
  {
    label: "Pipe Music Systems",
    image: solution_6_Img,
    desc: "Deliver premium background music setups to elevate ambient guest experiences in venues.",
    href: "#",
  },
  {
    label: "Access Control & Attendance",
    image: solution_7_Img,
    desc: "Control physical entry gates, monitor valuable areas, and track employee logs automatically.",
    href: "#",
  },
  {
    label: "Guard Tour Systems",
    image: solution_8_Img,
    desc: "Monitor security guard patrols, track checkpoints, and ensure absolute safety coverage.",
    href: "#",
  },
  {
    label: "Wired & Wireless Networking",
    image: solution_9_Img,
    desc: "Establish high-bandwidth routers, firewalls, and switches to connect your enterprise seamlessly.",
    href: "#",
  },
  {
    label: "IP TV & MATV Solutions",
    image: solution_10_Img,
    desc: "Broadcast high-definition television programs and channels across multi-room facilities.",
    href: "#",
  },
  {
    label: "Public Address Systems",
    image: solution_11_Img,
    desc: "Broadcast clear announcements across large assemblies, stadiums, and building zones.",
    href: "#",
  },
  {
    label: "Hotel & Restaurant Management",
    image: solution_12_Img,
    desc: "Integrate hotel logic, booking systems, and point-of-sale terminals to streamline hospitality.",
    href: "#",
  },
];

const CARDS_VISIBLE = 4;
const GAP_PX = 30;

export default function Solutions() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState("100vh");

  useEffect(() => {
    const computeHeight = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const horizontalDistance = Math.max(trackWidth - viewportWidth, 0);
      // total scrollable page-space this section should occupy:
      // one viewport height to "arrive", plus 1px of scroll for every 1px we need to translate
      setWrapperHeight(`${viewportHeight + horizontalDistance}px`);
    };

    // wait a tick so the %-based card widths have resolved before measuring
    const raf = requestAnimationFrame(computeHeight);
    window.addEventListener("resize", computeHeight);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", computeHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !trackRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = Math.max(trackWidth - viewportWidth, 0);
      const scrollableDistance = wrapperRef.current.offsetHeight - viewportHeight;

      if (scrollableDistance <= 0) return;

      // progress = 0 when wrapper top hits viewport top, 1 when fully scrolled through
      let progress = -rect.top / scrollableDistance;
      progress = Math.min(Math.max(progress, 0), 1);

      setTranslateX(-progress * maxTranslate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [wrapperHeight]);

  return (
    <section
      id="solutions"
      ref={wrapperRef}
      style={{ height: wrapperHeight }}
      className="relative bg-(--color-bg)"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center pt-12">
        <div className="px-16 md:px-20 shrink-0">
          <span className="text-gold font-semibold text-[18px] tracking-wide uppercase">
            What We Offer
          </span>
          <h2 className="font-display font-normal text-3xl md:text-[56px] text-(--color-heading-sub-1) mt-2">
            Security Solutions
          </h2>
        </div>

        <div
          ref={trackRef}
          className="flex mt-12 will-change-transform"
          style={{
            transform: `translateX(${translateX}px)`,
            columnGap: `${GAP_PX}px`,
            rowGap: "30px",
            paddingLeft: "64px",
            paddingRight: "64px",
          }}
        >
          {solutions.map((s) => (
            
            <a  href={s.href}
              key={s.label}
              className="group flex flex-col relative cursor-pointer shrink-0"
              style={{
                rowGap: "24px",
                width: `calc(${100 / CARDS_VISIBLE}% - ${
                  (GAP_PX * (CARDS_VISIBLE - 1)) / CARDS_VISIBLE
                }px)`,
              }}
            >
              <div className="relative pt-3">
                <span
                  className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-1000 ease-out pointer-events-none group-hover:scale-x-100"
                  style={{
                    background: "var(--color-accent)",
                    clipPath: "polygon(0% 20%, 100% 45%, 100% 55%, 0% 80%)",
                  }}
                />
                <p className="main-heading text-[18px] font-normal">{s.label}</p>
              </div>

              <div
                className="relative rounded-2xl overflow-hidden w-full"
                style={{ aspectRatio: "280 / 350",
                  maxHeight: "45vh",
                 }}
              >
                <img
                  src={s.image}
                  alt={s.label}
                  className="absolute inset-0 w-full h-full object-cover z-[1] group-hover:scale-105"
                  style={{ transition: "all 0.3s ease" }}
                />
                <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-black/60 hover:!bg-gold transition-colors duration-300 flex items-center justify-center z-[2]">
                  <ArrowRight className="w-4 h-4 text-white transition-transform duration-200" />
                </span>
              </div>

              <p className="text-olive text-sm">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}