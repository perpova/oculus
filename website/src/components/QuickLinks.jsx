import chatgptLogo from "../assets/Openai.png";
import claudeLogo from "../assets/Claude.png";
import geminiLogo from "../assets/Gemini.png";

const PROMPT = "Tell me how Oculus International could benefit me and my business";
const encodedPrompt = encodeURIComponent(PROMPT);

const aiTools = [
  {
    name: "ChatGPT",
    logo: chatgptLogo,
    href: `https://chatgpt.com/?q=${encodedPrompt}`,
    colors: { backgroundColor: "rgba(199, 203, 106, 0.25)", border: "0.8px solid rgba(199, 203, 106, 0.85)" },
    hoverClass: "hover:!bg-[rgba(199,203,106,0.5)]",
  },
  {
    name: "Claude",
    logo: claudeLogo,
    href: `https://claude.ai/new?q=${encodedPrompt}`,
    colors: { backgroundColor: "rgba(130, 183, 115, 0.25)", border: "0.8px solid rgba(130, 183, 115, 0.85)" },
    hoverClass: "hover:!bg-[rgba(130,183,115,0.5)]",
  },
  {
    name: "Gemini",
    logo: geminiLogo,
    href: `https://gemini.google.com/app?q=${encodedPrompt}`,
    colors: { backgroundColor: "rgba(73, 158, 125, 0.25)", border: "0.8px solid rgba(73, 158, 125, 0.85)" },
    hoverClass: "hover:!bg-[rgba(73,158,125,0.5)]",
  },
];

const aiButtonBaseStyle = {
  display: "flex",
  alignItems: "center",
  columnGap: "10px",
  rowGap: "10px",
  height: "47.6px",
  padding: "13px 12px",
  borderRadius: "8px",
  color: "rgb(253, 253, 253)",
  fontFamily: "Urbanist",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "17.29px",
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.2s ease",
};

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Resources", href: "#resources" },
  { label: "Careers", href: "#careers", hiring: true },
];

const solutionsLinks = [
  { label: "CCTV Surveillance", href: "#solutions" },
  { label: "Intruder Alarm Systems", href: "#solutions" },
  { label: "Access Control Systems", href: "#solutions" },
  { label: "Fire Detection", href: "#solutions" },
  { label: "Central Alarm Monitoring", href: "#solutions" },
];

const industriesLinks = [
  { label: "Residential", href: "#industries" },
  { label: "Government", href: "#industries" },
  { label: "Industrial", href: "#industries" },
  { label: "Education", href: "#industries" },
];

const resourcesLinks = [
  { label: "Blogs", href: "#resources" },
  { label: "Articles", href: "#resources" },
  { label: "News", href: "#resources" },
  { label: "Success Stories", href: "#resources" },
];

const contactDetails = [
  { label: "572, Kandy Road, Peliyagoda, Sri Lanka", href: null },
  { label: "+94 112 697 397", href: "tel:+94112697397" },
  { label: "info@ioculus.lk", href: "mailto:info@ioculus.lk" },
];

export default function NewsletterSection() {
  return (
    <div className="w-full bg-(--color-bg-nav) px-16 md:px-20 py-16">
      {/* Top row — newsletter + AI overview */}
      <div
        className="flex flex-col lg:flex-row lg:items-start lg:justify-between"
        style={{ rowGap: "40px" }}
      >
        <div className="w-full lg:max-w-[420px]">
          <h3 className="font-body font-semibold text-white text-base" style={{ marginBottom: "16px" }}>
            Subscribe to our newsletter
          </h3>
          <form className="flex items-center rounded-lg bg-(--color-bg-sub) border border-white/10 max-w-[580px] p-1.5">
            <input
              type="email"
              required
              placeholder="Email*"
              className="flex-1 bg-transparent px-4 text-white placeholder:text-white/40 font-body text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-gold text-[#001529] font-normal text-base px-4 whitespace-nowrap hover:opacity-90 transition-opacity"
              style={{ borderRadius: "4px", height: "41.2px", minWidth: "104px" }}
            >
              Sign up
            </button>
          </form>
        </div>

        <div className="flex flex-col items-start" style={{ rowGap: "16px" }}>
          <h3 className="font-body font-semibold text-white text-base">
            Get an AI overview of Oculus International
          </h3>
          <div className="flex flex-wrap items-center" style={{ gap: "12px" }}>
            {aiTools.map((tool) => (
              
              <a  key={tool.name}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...aiButtonBaseStyle, ...tool.colors }}
                className={tool.hoverClass}
              >
                <img src={tool.logo} alt={tool.name} className="w-5 h-5 object-contain" />
                {tool.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/30 mt-12 mb-10" />

      {/* Quick Links + Solutions + Industries + Resources + Contact */}
      <div
        className="grid grid-cols-2 md:grid-cols-5"
        style={{ columnGap: "40px", rowGap: "32px" }}
      >
        <div className="flex flex-col" style={{ rowGap: "18px" }}>
          <h3 className="font-display font-bold text-xl text-gold">Quick Links</h3>
          <div className="flex flex-col" style={{ rowGap: "12px" }}>
            {quickLinks.map((link) => (
              <div key={link.label} className="flex items-center" style={{ gap: "8px" }}>
                
                <a  href={link.href}
                  className="q-link font-body text-sm text-white/85 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
                {link.hiring && (
                  <span
                    className="font-body text-white font-semibold whitespace-nowrap"
                    style={{
                      backgroundColor: "var(--color-bg-sub)",
                      fontSize: "11px",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      lineHeight: "1.4",
                    }}
                  >
                    We're hiring!
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col" style={{ rowGap: "18px" }}>
          <h3 className="font-display font-bold text-xl text-gold">Solutions</h3>
          <div className="flex flex-col" style={{ rowGap: "12px" }}>
            {solutionsLinks.map((link) => (
              
              <a  key={link.label}
                href={link.href}
                className="q-link font-body text-sm text-white/85 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col" style={{ rowGap: "18px" }}>
          <h3 className="font-display font-bold text-xl text-gold">Industries</h3>
          <div className="flex flex-col" style={{ rowGap: "12px" }}>
            {industriesLinks.map((link) => (
              
              <a  key={link.label}
                href={link.href}
                className="q-link font-body text-sm text-white/85 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col" style={{ rowGap: "18px" }}>
          <h3 className="font-display font-bold text-xl text-gold">Resources</h3>
          <div className="flex flex-col" style={{ rowGap: "12px" }}>
            {resourcesLinks.map((link) => (
              
              <a  key={link.label}
                href={link.href}
                className="q-link font-body text-sm text-white/85 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col" style={{ rowGap: "18px" }}>
          <h3 className="font-display font-bold text-xl text-gold">Contact</h3>
          <div className="flex flex-col" style={{ rowGap: "12px" }}>
            {contactDetails.map((item) =>
              item.href ? (
                
                <a  key={item.label}
                  href={item.href}
                  className="q-link font-body text-sm text-white/85 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span key={item.label} className="font-body text-sm text-white/85">
                  {item.label}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}