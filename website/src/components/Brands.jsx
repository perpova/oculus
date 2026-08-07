import { ArrowRight } from "lucide-react";
import brandLogo1 from "../assets/brand-01.png";
import brandLogo2 from "../assets/brand-02.png";
import brandLogo3 from "../assets/brand-03.png";
import brandLogo4 from "../assets/brand-04.png";
import brandLogo5 from "../assets/brand-05.png";


const brands = [
  { name: "Brand One", logo: brandLogo1 },
  { name: "Brand Two", logo: brandLogo2 },
  { name: "Brand Three", logo: brandLogo3 },
  { name: "Brand Four", logo: brandLogo4 },
  { name: "Brand Five", logo: brandLogo5 },
];

export default function Brands() {
  const duplicated = [...brands, ...brands];

  return (
    <section className="py-20 bg-teal-deep overflow-hidden">
      <div className="w-full px-16 md:px-20 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        {/* left text block */}
        <div className="flex-shrink-0 md:w-[320px] text-center md:text-left">
          <h2 className="font-display font-bold text-3xl md:text-[48px] text-white leading-tight">
            Powered by industry-leading brands
          </h2>
          
           <a href="#solutions"
            className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-4 hover:text-white transition-colors duration-200"
          >
            See our solutions <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* right side scrolling marquee */}
        <div
          className="flex-1 w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 85%, transparent 100%)",
          }}
        >
          <div
            className="flex"
            style={{
              columnGap: "30px",
              width: "max-content",
              animation: "brandsMarquee 40s linear infinite",
            }}
          >
            {duplicated.map((b, i) => (
              <div
                key={`${b.name}-${i}`}
                className="relative rounded-lg flex items-center justify-center shrink-0 border border-white/10 hover:border-white/30 hover:scale-110 hover:z-10 transition-all duration-300"
                style={{
                  width: "208px",
                  height: "120px",
                  background:
                    "radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0) 100%)",
                }}
              >
                <img
                  src={b.logo}
                  alt={b.name}
                  className="max-h-34 max-w-[90%] object-contain grayscale brightness-0 invert opacity-70 hover:opacity-100 hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes brandsMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}