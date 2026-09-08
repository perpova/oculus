import { MapPin, Mail, Phone } from "lucide-react";

/**
 * ContactDetails — company info (left) + embedded Google Map (right)
 * Reuses the same icon-box + gold-accent language as ContactCard.
 */

const DETAILS = [
  {
    icon: MapPin,
    label: "Headquarters Address",
    lines: ["572, Pattiya Junction, Peliyagoda, Sri Lanka"],
  },
  {
    icon: Mail,
    label: "Corporate Email",
    lines: ["eye@ioculus.lk"],
    type: "email",
  },
  {
    icon: Phone,
    label: "Phone Lines",
    lines: ["+94 70 5 950 950", "+94 11 2 697 397"],
    type: "phone",
  },
];

function DetailRow({ icon: Icon, label, lines, type }) {
  return (
    <div className="flex items-start gap-5">
      <div
        className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: "var(--color-bg-sub-4)" }}
      >
        <Icon className="w-5 h-5" style={{ color: "var(--color-gold)" }} strokeWidth={1.75} />
      </div>
      <div>
        <h3
          className="text-2xl font-bold mb-1"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
        >
          {label}
        </h3>
        {lines.map((line) => {
          if (type === "email") {
            return (
              
              <a  key={line}
                href={`mailto:${line}`}
                className="block text-sm opacity-85 hover:opacity-100 hover:underline transition-opacity"
                style={{ color: "var(--color-text)" }}
              >
                {line}
              </a>
            );
          }
          if (type === "phone") {
            return (
              
            <a  key={line}
                href={`tel:${line.replace(/\s+/g, "")}`}
                className="block text-sm opacity-85 hover:opacity-100 hover:underline transition-opacity"
                style={{ color: "var(--color-text)" }}
              >
                {line}
              </a>
            );
          }
          return (
            <p key={line} className="text-sm opacity-85" style={{ color: "var(--color-text)" }}>
              {line}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default function ContactDetails() {
  return (
    <section
      className="mt-24 px-12 md:px-24 py-16 md:py-12"
      style={{ backgroundColor: "var(--color-bg-sub-3)" }}
    >
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start">
        {/* Left: contact details */}
        <div
          className="flex flex-col divide-y mt-10"
          style={{ borderColor: "color-mix(in srgb, var(--color-border-2) 60%, transparent)" }}
        >
          {DETAILS.map((item) => (
            <div key={item.label} className="py-6 first:pt-0 last:pb-0">
              <DetailRow {...item} />
            </div>
          ))}
        </div>

        {/* Right: embedded map */}
        <div
          className="w-full h-[420px] rounded-2xl overflow-hidden"
          style={{ border: "1px solid color-mix(in srgb, var(--color-border-2) 70%, transparent)" }}
        >
          <iframe
            title="Oculus International location"
            src="https://www.google.com/maps?q=Oculus+International+(Pvt)+Ltd,+572+Kandy+Rd,+Peliyagoda,+Sri+Lanka&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}