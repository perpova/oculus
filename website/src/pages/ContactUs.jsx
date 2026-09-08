import { useState } from "react";
import { Headset, FileText, ArrowRight } from "lucide-react";
import TalkFormModal from "../components/ContactUs/TalkFormModal";
import QuoteFormModal from "../components/ContactUs/QuoteFormModal";
// add this import near the top with your other imports
import ContactDetails from "../components/ContactUs/ContactDetails";

const CONTACT_CARDS = [
  {
    id: "talk",
    title: "Contact us",
    description: "Talk to our team about your security or automation needs.",
    icon: Headset,
    buttonLabel: "Let's Talk",
  },
  {
    id: "quote",
    title: "Request a free quote",
    description: "Get a tailored quote for your project, fast.",
    icon: FileText,
    buttonLabel: "Request",
  },
];

function Eyebrow({ children }) {
  return (
    <span
      className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70"
      style={{ color: "var(--color-eyebrow)" }}
    >
      {children}
    </span>
  );
}

function ContactCard({ title, description, icon: Icon, buttonLabel, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="group relative rounded-2xl p-8 flex flex-col text-left w-full transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl"
      style={{
        backgroundColor: "var(--color-bg-sub)",
        border: "1px solid color-mix(in srgb, var(--color-border-2) 70%, transparent)",
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
        style={{ backgroundColor: "color-mix(in srgb, var(--color-gold) 18%, transparent)" }}
      >
        <Icon className="w-5 h-5" style={{ color: "var(--color-gold)" }} strokeWidth={1.75} />
      </div>

      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: "var(--color-white)", fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>

      <p className="text-sm leading-relaxed opacity-90 mb-6" style={{ color: "var(--color-white)" }}>
        {description}
      </p>

      <span
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full w-fit transition-all duration-300 group-hover:gap-3"
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-gold) 15%, transparent)",
          color: "var(--color-gold)",
          border: "1px solid color-mix(in srgb, var(--color-gold) 40%, transparent)",
        }}
      >
        {buttonLabel}
        <ArrowRight className="w-4 h-4 transition-transform" />
      </span>
    </button>
  );
}

export default function ContactUsPage() {
  const [openModal, setOpenModal] = useState(null); // "talk" | "quote" | null

  return (
    <div className="pt-20" style={{ backgroundColor: "var(--color-bg)", fontFamily: "var(--font-body)" }}>
      <section className="mx-6 md:mx-16 mt-8 p-6 md:p-10">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Contact Us</Eyebrow>
          <h1
            className="text-3xl md:text-6xl font-semibold mt-3 mb-4"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
          >
            We're{" "}
            <span className="italic" style={{ color: "var(--color-gold)" }}>
              always
            </span>
            <br />
            here for you
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-16 mt-16">
          {CONTACT_CARDS.map((card) => (
            <div key={card.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(40%-12px)]">
              <ContactCard {...card} onOpen={() => setOpenModal(card.id)} />
            </div>
          ))}
        </div>
      </section>
      
       <ContactDetails />
       
      <TalkFormModal isOpen={openModal === "talk"} onClose={() => setOpenModal(null)} />
      <QuoteFormModal isOpen={openModal === "quote"} onClose={() => setOpenModal(null)} />
    </div>
  );
}