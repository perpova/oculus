import { ArrowRight, ShieldCheck, Cloud, Zap } from "lucide-react";
import { Link } from "react-router-dom";

// Swap for your real asset — same import convention as the rest
// of the site (../assets/*)
import elitePanelImg from "../assets/elite-panel-overview.webp";

// ─── Quick highlight points ────────────────────────────────────
// Short, icon-led — not full cards. Keep desc to one line.
const highlights = [
  {
    icon: ShieldCheck,
    title: "Genuine & Certified",
    desc: "Sourced directly from Elite, backed by full manufacturer warranty.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Platform",
    desc: "Remote arm, disarm, and monitoring built into every deployment.",
  },
  {
    icon: Zap,
    title: "Fast Local Support",
    desc: "Installation, servicing, and spares handled right here in Sri Lanka.",
  },
];

export default function EliteShowcase() {
  return (
    // Add id="product-elite" here instead if this section should be
    // the target SolutionsCarousel.jsx links to via href="#product-elite".
    <section id="elite-showcase" className="relative bg-(--color-bg-sub-3) py-20">
      <div className="px-16 md:px-20 flex flex-col md:flex-row items-center gap-14">
        {/* ── Left: panel image with authorized-partner badge ── */}
        <div className="relative w-full md:w-1/2 shrink-0">
          <div className="rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={elitePanelImg}
              alt="Elite Cloud System control panel"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-6 bg-(--color-accent) text-white rounded-xl px-5 py-3 shadow-lg">
            <p className="text-xs uppercase tracking-wide opacity-90">
              Authorized Partner
            </p>
            <p className="font-display text-lg leading-tight">
              South Asia
            </p>
          </div>
        </div>

        {/* ── Right: pitch + highlights + CTA ── */}
        <div className="w-full md:w-1/2">
          <span className="text-(--color-text-3) font-semibold text-[18px] tracking-wide uppercase">
            Our Featured Brand
          </span>
          <h2 className="font-display font-normal text-3xl md:text-[48px] leading-tight text-(--color-heading-sub-1) mt-2">
            Proud to be Elite's Authorized Partner in South Asia
          </h2>
          <p className="text-olive text-sm md:text-lg mt-4">
            Oculus International is the exclusive authorized distributor for
            the Elite security brand across South Asia — bringing globally
            trusted, cloud-connected security technology to homes and
            businesses across the region.
          </p>

          <div className="mt-8 flex flex-col" style={{ rowGap: "20px" }}>
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-(--color-accent)/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-(--color-accent)" />
                </div>
                <div>
                  <p className="font-display text-base text-(--color-teal-dark)">
                    {title}
                  </p>
                  <p className="text-sm text-olive">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/products/elitecontrol"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-(--color-accent) w-fit mt-10 transition-colors duration-200 hover:text-(--color-teal-dark)"
          >
            <span className="underline underline-offset-4">
              Explore Elite Products
            </span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}