import { Phone, FileText, ArrowRight } from "lucide-react";

export default function TakeFirstStep({
  eyebrow = "Take the First Step",
  heading = (
    <>
      Your property deserves
      <br />
      better protection.
    </>
  ),
  description = "Don't wait for an incident to take security seriously. Our team is ready to assess your premises and design a solution that fits your needs and budget — at no cost to you.",
  phone = "tel:",
  bgColor = "var(--color-bg-sub-2)",
}) {
  return (
    <section
      className="relative w-full overflow-hidden px-16 md:px-20 py-20"
      style={{ backgroundColor: bgColor }}
    >
      {/* Decorative background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.5] pointer-events-none"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <circle cx="950" cy="80" r="140" stroke="var(--color-decor-line)" strokeWidth="1.5" />
        <circle cx="1080" cy="260" r="90" stroke="var(--color-decor-line)" strokeWidth="1.5" />
        <circle cx="820" cy="340" r="60" stroke="var(--color-decor-line)" strokeWidth="1.5" />
        <circle cx="1150" cy="420" r="180" stroke="var(--color-decor-line)" strokeWidth="1.5" />
        <path
          d="M700 500 C 850 350, 900 250, 1050 300 S 1200 150, 1200 0"
          stroke="var(--color-decor-line)"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative z-10 max-w-2xl">
        <span className="text-gold font-semibold text-[18px] tracking-wide uppercase">
          {eyebrow}
        </span>

        <h2 className="font-display font-normal text-4xl md:text-[56px] text-(--color-heading-sub-1) leading-tight mt-3">
          {heading}
        </h2>

        <p className="font-body text-(--color-text-muted) text-base mt-5 max-w-lg">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          
          <a  href={phone}
            className="btn-accent inline-flex items-center gap-2 rounded-lg bg-gold text-[#001529] font-semibold text-sm px-6 py-3.5 transition-transform duration-200 hover:scale-[1.03]"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </a>

          
          <a  href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-(--color-border-strong) text-(--color-text) font-semibold text-sm px-6 py-3.5 transition-colors duration-200 hover:bg-(--color-accent-soft)"
          >
            <FileText className="w-4 h-4" />
            Request a Free Quote
          </a>
        </div>

        <p className="font-body italic text-(--color-text-muted) text-sm mt-6">
          Free consultation. No obligation. Island-wide service.
        </p>
      </div>
    </section>
  );
}