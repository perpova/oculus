import { ArrowRight } from "lucide-react";
import cctvImg from "../assets/SmartHomeSolutions.jpg";
import accessImg from "../assets/Office.jpeg";
import alarmImg from "../assets/IP-Analogue-telephony.png";
import fireImg from "../assets/wired-network.jpg";

const solutions = [
  {
    label: "CCTV Surveillance",
    image: cctvImg,
    desc: "High-performance HD and network camera systems for round-the-clock visibility.",
    href: "#",
  },
  {
    label: "Access Control",
    image: accessImg,
    desc: "Keypad, biometric, and app-controlled entry systems that manage who goes where.",
    href: "#",
  },
  {
    label: "Alarm Systems",
    image: alarmImg,
    desc: "Intelligent intrusion alarm systems with instant, real-time notifications.",
    href: "#",
  },
  {
    label: "Fire Detection",
    image: fireImg,
    desc: "Early-warning fire and smoke detection integrated with your security network.",
    href: "#",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-(--color-bg)">
      <div className="w-full px-16 md:px-20">
        <span className="main-heading font-semibold text-[18px] tracking-wide uppercase">What We Offer</span>
        <h2 className="font-display font-normal text-3xl md:text-[56px] main-heading mt-2">Security Solutions</h2>

        <div
          className="grid grid-cols-2 md:grid-cols-4 mt-12"
          style={{ columnGap: "24px", rowGap: "30px" }}
        >
          {solutions.map((s) => (
            
            <a  href={s.href}
              key={s.label}
              className="group flex flex-col relative cursor-pointer"
              style={{ rowGap: "24px" }}
            >
              {/* label + hover-only animated line */}
              <div className="relative pt-3">
                <span
                  className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-1000 ease-out pointer-events-none group-hover:scale-x-100"
                  style={{
                    background: "var(--color-gold)",
                    clipPath: "polygon(0% 20%, 100% 45%, 100% 55%, 0% 80%)",
                  }}
                />
                <p className="text-[18px] font-normal text-white">{s.label}</p>
              </div>

              {/* image card with arrow overlay */}
              <div
                className="relative rounded-2xl overflow-hidden w-full"
                style={{ aspectRatio: "280 / 350" }}
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

              {/* caption */}
              <p className="text-white/60 text-sm">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}