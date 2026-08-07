import { ArrowRight } from "lucide-react";
import residentialImg from "../assets/residential.jpg";
import governmentImg from "../assets/government.png";
import commercialImg from "../assets/commercial.jpg";
import educationImg from "../assets/education.jpg";

const industries = [
  {
    title: "Residential",
    image: residentialImg,
    desc: "Protect your home and loved ones with smart alarm systems, HD surveillance, and app-controlled access, monitored 24/7.",
    hoverBg: "hover:bg-teal-light",
  },
  {
    title: "Government",
    image: governmentImg,
    desc: "High-assurance security infrastructure for public institutions, including multi-layer access control and encrypted surveillance.",
    hoverBg: "hover:bg-gold",
  },
  {
    title: "Commercial",
    image: commercialImg,
    desc: "Safeguard your business with integrated CCTV, access-controlled entry, and real-time intrusion alerts.",
    hoverBg: "hover:bg-teal-light",
  },
  {
    title: "Education",
    image: educationImg,
    desc: "Create safe learning environments with campus-wide CCTV, controlled entry, and instant emergency alerts.",
    hoverBg: "hover:bg-gold",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-teal-deep">
      <div className="w-full px-16 md:px-20">
        <span className="text-gold font-semibold text-[18px] tracking-wide uppercase">Trusted Across Sectors</span>
        <h2 className="font-display font-normal text-3xl md:text-[56px] text-white mt-2">Industries We Serve</h2>

        <div
          className="grid md:grid-cols-4 mt-12"
          style={{ columnGap: "24px" }}
        >
          {industries.map((ind) => (
            <div
              key={ind.title}
              className={`group relative flex flex-col justify-between p-8 min-h-[420px] rounded-2xl bg-white/5 ${ind.hoverBg} transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10`}
            >
              <div>
                <h3 className="font-display font-bold text-2xl text-white">{ind.title}</h3>
                <p className="text-white/60 group-hover:text-white/85 text-sm mt-3 transition-colors duration-300">
                  {ind.desc}
                </p>
                <a href="#contact" className="inline-flex items-center gap-1 text-gold group-hover:text-white text-sm font-semibold mt-4 transition-colors duration-300">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative h-40 rounded-xl overflow-hidden opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <img src={ind.image} alt={ind.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}