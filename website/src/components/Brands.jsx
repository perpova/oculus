import { ArrowRight } from "lucide-react";
import brandLogo1 from "../assets/brand-1.png";
import brandLogo2 from "../assets/brand-2.png";
import brandLogo3 from "../assets/brand-3.png";
import brandLogo4 from "../assets/brand-4.png";
import brandLogo5 from "../assets/brand-5.png";
import brandLogo6 from "../assets/brand-6.png";
import brandLogo8 from "../assets/brand-8.png";
import brandLogo9 from "../assets/brand-9.png";


const brands = [
  { name: "Brand One", logo: brandLogo1 },
  { name: "Brand Two", logo: brandLogo2 },
  { name: "Brand Three", logo: brandLogo3 },
  { name: "Brand Four", logo: brandLogo4 },
  { name: "Brand Five", logo: brandLogo5 },
  { name: "Brand Six", logo: brandLogo6 },
  { name: "Brand Seven", logo: brandLogo8 },
  { name: "Brand Eight", logo: brandLogo9 },
  
];

export default function Brands() {
  const duplicated = [...brands, ...brands];

  return (
    <section className="py-20 bg-(--color-bg) overflow-hidden">
      <div className="w-full px-16 md:px-20 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        {/* left text block */}
        <div className="flex-shrink-0 md:w-[320px] text-center md:text-left">
          <h2 className="font-display font-bold text-3xl md:text-[48px] text-(--color-heading-sub-1) leading-tight">
            Powered by industry-leading brands
          </h2>
          
           <a href="#solutions"
            className="link-sub inline-flex items-center gap-1 text-sm font-semibold mt-4 transition-colors duration-200"
          >
            See Our Solutions <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* right side scrolling marquee */}
        <div
          className="flex-1 w-full overflow-x-hidden overflow-y-visible"
          style={{
            maskImage: "linear-gradient(to right, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 85%, transparent 100%)",
          }}
        >
          <div
            className="flex py-4"
            style={{
              columnGap: "30px",
              width: "max-content",
              animation: "brandsMarquee 40s linear infinite",
            }}
          >
            {duplicated.map((b, i) => (
              <div
                key={`${b.name}-${i}`}
                className="brand-logo-card relative rounded-lg flex items-center justify-center shrink-0 hover:scale-110 hover:z-10 transition-all duration-300"
                style={{ width: "208px", height: "120px" }}
              >
                <img
                  src={b.logo}
                  alt={b.name}
                  className="brand-logo-img max-h-16 max-w-[60%] object-contain opacity-70 hover:opacity-100"
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