import { ArrowRight } from "lucide-react";
import residentialImg from "../assets/residential.jpg";
import governmentImg from "../assets/government.png";
import commercialImg from "../assets/commercial.jpg";
import educationImg from "../assets/education.jpg";

import { Link } from "react-router-dom";

const industries = [
  {
    title: "Residential",
    image: residentialImg,
    desc: "Protect your home and loved ones with smart alarm systems, HD surveillance, and app-controlled access, monitored 24/7.",
    slug: "residential-and-apartments",
  },
  {
    title: "Government",
    image: governmentImg,
    desc: "High-assurance security infrastructure for public institutions, including multi-layer access control and encrypted surveillance.",
    slug: "government-and-defence",
  },
  {
    title: "Commercial",
    image: commercialImg,
    desc: "Safeguard your business with integrated CCTV, access-controlled entry, and real-time intrusion alerts.",
    slug: "corporate-and-commercial",
  },
  {
    title: "Education",
    image: educationImg,
    desc: "Create safe learning environments with campus-wide CCTV, controlled entry, and instant emergency alerts.",
    slug: "education",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-(--color-bg-nav)">
      <div className="w-full px-16 md:px-20">
        <span className="text-gold font-semibold text-[18px] tracking-wide uppercase">Trusted Across Sectors</span>
        <h2 className="font-display font-normal text-3xl md:text-[56px] text-white mt-2">Industries We Serve</h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12"
          style={{ columnGap: "24px", rowGap: "24px" }}
        >
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group relative h-[420px] rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* full-bleed background image */}
              <img
                src={ind.image}
                alt={ind.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* base gradient — keeps the always-visible title readable
                  against the image without needing a solid panel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* always-visible title, bottom-left over the image.
                  Fades out on hover so it doesn't double up with the
                  title inside the reveal panel below. */}
              <h3 className="absolute bottom-6 left-6 z-10 font-display font-bold text-2xl text-white transition-opacity duration-200 group-hover:opacity-0">
                {ind.title}
              </h3>

              {/* hover panel — sits below the card's visible area
                  (translate-y-full) and slides up to cover the bottom
                  portion on hover. Height is driven by its own content
                  (title + desc + button), not a fixed value, so it
                  scales naturally per language/content length. */}
              <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full bg-teal-deep/65 backdrop-blur-sm px-6 pb-6 pt-8 transition-transform duration-300 ease-out group-hover:translate-y-0">
                <h3 className="font-display font-bold text-2xl text-white">{ind.title}</h3>
                <p className="mt-3 text-sm text-white/80">{ind.desc}</p>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-(--color-teal-deep) transition-colors duration-200 hover:bg-white/90"
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}