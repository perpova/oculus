import { Phone, FileText, ArrowRight } from "lucide-react";

export default function TakeFirstStep() {
  return (
    <section className="relative w-full overflow-hidden bg-teal-dark px-16 md:px-20 py-20">
      {/* Decorative background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <circle cx="950" cy="80" r="140" stroke="white" strokeWidth="1.5" />
        <circle cx="1080" cy="260" r="90" stroke="white" strokeWidth="1.5" />
        <circle cx="820" cy="340" r="60" stroke="white" strokeWidth="1.5" />
        <circle cx="1150" cy="420" r="180" stroke="white" strokeWidth="1.5" />
        <path
          d="M700 500 C 850 350, 900 250, 1050 300 S 1200 150, 1200 0"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative z-10 max-w-2xl">
        <span className="font-body text-[18px] tracking-[0.2em] uppercase text-gold">
          Take the First Step
        </span>

        <h2 className="font-display font-normal text-4xl md:text-[56px] text-white leading-tight mt-3">
          Your property deserves
          <br />
          better protection.
        </h2>

        <p className="font-body text-white/70 text-base mt-5 max-w-lg">
          Don't wait for an incident to take security seriously. Our team is
          ready to assess your premises and design a solution that fits your
          needs and budget — at no cost to you.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a
            href="tel:"
            className="inline-flex items-center gap-2 rounded-lg bg-gold text-[#001529] font-semibold text-sm px-6 py-3.5 transition-transform duration-200 hover:scale-[1.03]"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/40 text-white font-semibold text-sm px-6 py-3.5 transition-colors duration-200 hover:bg-white/10"
          >
            <FileText className="w-4 h-4" />
            Request a Free Quote
          </a>
        </div>

        <p className="font-body italic text-white/60 text-sm mt-6">
          Free consultation. No obligation. Island-wide service.
        </p>
      </div>
    </section>
  );
}