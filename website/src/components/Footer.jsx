import oculusLogo from "../assets/oculus-logo-2.png";

const socialIcons = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M6.94 5a2 2 0 11-4-.002 2 2 0 014 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.9 2H22l-7.2 8.2L23.3 22h-6.8l-5.3-6.9L4.9 22H1.8l7.7-8.8L1 2h7l4.8 6.3L18.9 2zm-1.2 18h1.9L7.4 4H5.4l12.3 16z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.76 4.9 4.9 0 01-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.76-1.15 4.9 4.9 0 01-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 015.44 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.36-1.02.67-.31.31-.5.6-.67 1.02-.12.31-.26.78-.3 1.65-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.87.18 1.34.3 1.65.16.42.36.71.67 1.02.31.31.6.5 1.02.67.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.36 1.02-.67.31-.31.5-.6.67-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 00-.67-1.02 2.7 2.7 0 00-1.02-.67c-.31-.12-.78-.26-1.65-.3-1.05-.05-1.37-.06-4.04-.06zm0 3.65a4.55 4.55 0 110 9.1 4.55 4.55 0 010-9.1zm0 1.8a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm4.73-2a1.06 1.06 0 110 2.12 1.06 1.06 0 010-2.12z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.5V8.5L15.8 12l-6.2 3.5z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.4 3 14.2 3c-2.5 0-4.3 1.6-4.3 4.4v2.3H7.2v3.2h2.7V21h3.6z" />
    </svg>
  ),
};

const socialLinks = [
  { icon: socialIcons.linkedin, href: "#" },
  { icon: socialIcons.twitter, href: "#" },
  { icon: socialIcons.instagram, href: "#" },
  { icon: socialIcons.youtube, href: "#" },
  { icon: socialIcons.facebook, href: "#" },
];

/*const noticeAtCollectionIcon = (
  <svg viewBox="0 0 300 150" className="w-8 h-4" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="pillClip">
        <rect x="10" y="10" width="280" height="130" rx="65" />
      </clipPath>
    </defs>
    <g clipPath="url(#pillClip)">
      <rect x="10" y="10" width="280" height="130" fill="#F7941D" />
      <polygon
        points="0,0 190,0 140,150 0,150"
        fill="#ffffff"
        stroke="#F7941D"
        strokeWidth="20"
      />
    </g>
    <path
      d="M55 78 L88 108 L150 45"
      stroke="#F7941D"
      strokeWidth="16"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M205 55 L255 105 M255 55 L205 105"
      stroke="#ffffff"
      strokeWidth="16"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);*/

const legalLinks = [
  "Privacy Policy",
  "Cookie Policy",
  "Terms and Conditions",
  "Service Agreement",
  "Licensing Disclosure",
];

export default function Footer() {
  return (
    <div className="w-full bg-(--color-bg-nav) px-16 md:px-20">
      {/* Follow us + disclaimer */}
      <div
        className="border-t border-white/30 py-10 flex flex-col lg:flex-row lg:items-start lg:justify-between"
        style={{ rowGap: "28px" }}
      >
        <div className="flex items-center" style={{ columnGap: "16px" }}>
          <span className="font-body font-semibold text-white text-base whitespace-nowrap">
            Follow us
          </span>
          <div className="flex items-center" style={{ columnGap: "10px" }}>
            {socialLinks.map(({ icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="q-link w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-white/35 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <p className="font-body text-xs text-white/70 leading-relaxed max-w-2xl">
          Oculus International is a licensed security services provider operating
          under applicable Sri Lankan security industry regulations. All CCTV,
          access control, and alarm monitoring services are delivered by trained
          and vetted personnel. Response times and service availability may vary
          by location. Please refer to your service agreement for full terms.
        </p>
      </div>

      {/* Legal links */}
      <div className="border-t border-white/30 py-6 flex flex-wrap items-center">
        {legalLinks.map((label, i) => (
            <div key={label} className="flex items-center">
            {i > 0 && <span className="h-4 w-px bg-white/30 mx-4" />}
            
            <a    href="#"
                className="q-link font-body text-xs text-white/60 hover:text-white transition-colors"
            >
                {label}
            </a>
            </div>
        ))}

         <span className="h-4 w-px bg-white/30 mx-4" />

  
          <a  href="#notice-at-collection"
            title="Notice at Collection"
            className="q-link flex items-center gap-1.5 font-body text-xs text-white/60 hover:text-white transition-colors"
          >
            Notice at Collection
            {/*{noticeAtCollectionIcon}*/}
          </a>
        </div>

      {/* Logo + copyright */}
      <div className="border-t border-white/30 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between" style={{ rowGap: "16px" }}>
        <img src={oculusLogo} alt="Oculus International" className="h-12 w-auto" />
        <p className="font-body text-xs text-white/70">
          © 2026 All rights reserved by Oculus International.
        </p>
      </div>
    </div>
  );
}