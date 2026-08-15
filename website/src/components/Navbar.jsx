import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Home,
  Building,
  Phone,
  Cable,
  BellRing,
  Music,
  Fingerprint,
  Footprints,
  Wifi,
  Tv,
  Speaker,
  UtensilsCrossed,
  Landmark,
  Building2,
  GraduationCap,
  Newspaper,
  Rss,
  FileText,
  Award,
  Info,
  Briefcase,
  Mail,
  ShieldCheck,
  Siren,
  Camera,
  KeyRound,
  UserCheck,
  MoreHorizontal,
} from "lucide-react";
import logo from "../assets/oculus-logo-2.png";
// TODO: replace with your actual compact/secondary logo asset path
import logoCompact from "../assets/company-logo-2.png";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Solutions",
    href: "#solutions",
    dropdown: [
      { label: "Smart Home Solutions", desc: "Automation for modern living", icon: Home },
      { label: "Smart Office Solutions", desc: "Connected, efficient workspaces", icon: Building },
      { label: "IP/Analogue Telephony", desc: "Reliable voice communication systems", icon: Phone },
      { label: "Structured Cabling", desc: "The backbone of your network", icon: Cable },
      { label: "Nurse Calling Solutions", desc: "Fast, reliable patient assistance", icon: BellRing },
      { label: "Pipe Music Systems", desc: "Ambient audio for any space", icon: Music },
      { label: "Access Control & Attendance", desc: "Manage entry and track attendance", icon: Fingerprint },
      { label: "Guard Tour Systems", desc: "Verify and log patrol routes", icon: Footprints },
      { label: "Wired & Wireless Networking", desc: "Robust connectivity infrastructure", icon: Wifi },
      { label: "IP TV & MATV Solutions", desc: "Centralized television distribution", icon: Tv },
      { label: "Public Address Systems", desc: "Clear announcements, building-wide", icon: Speaker },
      { label: "Hotel & Restaurant Management", desc: "Integrated hospitality technology", icon: UtensilsCrossed },
    ],
  },

  {
    label: "Products",
    href: "#products",
    dropdown: [
      { label: "EliteControl (NZ)", desc: "Premium New Zealand-engineered security systems", icon: ShieldCheck },
      { label: "Alarm Systems", desc: "Intrusion detection and instant alerts", icon: Siren },
      { label: "CCTV", desc: "High-definition surveillance and monitoring", icon: Camera },
      { label: "Access Control", desc: "Secure entry management for any facility", icon: KeyRound },
      { label: "Attendance Systems", desc: "Accurate, automated staff time tracking", icon: UserCheck },
      { label: "Others", desc: "Explore our full range of ELV products", icon: MoreHorizontal },
    ],
  },

  {
    label: "Industries",
    href: "#industries",
    dropdown: [
      { label: "Residential", desc: "Protection for homes and estates", icon: Home },
      { label: "Government", desc: "Security for public institutions", icon: Landmark },
      { label: "Commercial", desc: "Safeguarding offices and retail", icon: Building2 },
      { label: "Education", desc: "Safety for schools and campuses", icon: GraduationCap },
    ],
  },
  {
    label: "Resources",
    href: "#resources",
    dropdown: [
      { label: "Blogs", desc: "Insights and updates from our team", icon: Newspaper },
      { label: "News", desc: "Latest company announcements", icon: Rss },
      { label: "Articles", desc: "In-depth reads on security topics", icon: FileText },
      { label: "Success Stories", desc: "Real results from our clients", icon: Award },
    ],
  },

  {
    label: "Company",
    href: "#company",
    dropdown: [
      { label: "About Us", desc: "Who we are and what drives us", icon: Info },
      { label: "Careers", desc: "Join our team", icon: Briefcase },
      { label: "Contact Us", desc: "Get in touch with our team", icon: Mail },
    ],
  },
];

// Height of the navbar in its default (hero) state, in pixels. Keep in sync
// with the `h-24` class below (h-24 = 6rem = 96px).
const NAV_HEIGHT_DEFAULT = 96;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    // Cache the hero element once; if your hero section doesn't use id="home",
    // update this selector to match.
    const heroEl = document.getElementById("home");

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      // Stay full-height while any part of the hero is still under the navbar;
      // shrink once we've scrolled past it.
      setCompact(window.scrollY > heroHeight - NAV_HEIGHT_DEFAULT);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-(--color-bg)/60 backdrop-blur-xl shadow-lg border-b border-(--color-primary-hover)/30"
          : "bg-(--color-bg)/20 backdrop-blur-md border-b border-(--color-text)/10"
      }`}
    >
      <nav
        className={`w-full flex items-center justify-between px-8 md:px-12 transition-all duration-300 ease-in-out ${
          compact ? "h-14" : "h-24"
        }`}
      >
        <a href="#home" className="flex items-center gap-3">
          <img
            src={compact ? logoCompact : logo}
            alt="Oculus International"
            className={`w-auto transition-all duration-300 ease-in-out ${
              compact ? "h-16" : "h-22"
            }`}
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-base font-medium text-(--color-text)/90">
          {navLinks.map((link) => {
            const isWide = link.dropdown && link.dropdown.length > 6;
            return (
              <li key={link.label} className="relative group">
                <a href={link.href} className="flex items-center gap-1 py-2 hover:text-(--color-accent) transition-colors">
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-800 ease-out group-hover:-rotate-180" />}
                </a>
                {link.dropdown && (
                  <div
                    className={`absolute left-0 top-full mt-1 bg-(--color-surface) rounded-xl shadow-lg border border-(--color-border)/50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all ${
                      isWide ? "w-[640px] grid grid-cols-2 gap-x-1" : "w-80"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href="#solutions"
                        className="group/item flex items-center gap-3 px-4 py-2.5 text-sm text-(--color-text)/80"
                      >
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-(--color-bg) text-(--color-text)/70 transition-colors group-hover/item:bg-(--color-accent) group-hover/item:text-(--color-bg) shrink-0">
                          <item.icon className="w-4 h-4" />
                        </span>
                        <span className="flex flex-col px-2 py-1 rounded-md transition-colors group-hover/item:bg-(--color-accent)/15">
                          <span className="flex items-center gap-1 font-medium text-(--color-text-nav) group-hover/item:text-(--color-primary-disabled)">
                            {item.label}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                          </span>
                          <span className="text-xs text-(--color-text-nav)/50">{item.desc}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          <a href="#contact"
          className="btn-accent text-sm font-semibold px-5 py-2.5 rounded-lg"          >
            Request a Free Quote
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="text-(--color-text)" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-(--color-bg) border-t border-(--color-text)/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <div key={link.label}>
              <a href={link.href} className="block text-sm font-medium text-(--color-text)" onClick={() => setOpen(false)}>
                {link.label}
              </a>
              {link.dropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href="#solutions"
                      className="flex items-center gap-2 text-sm text-(--color-text)/70"
                      onClick={() => setOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#contact" className="btn-accent inline-block text-sm font-semibold px-5 py-2.5 rounded-lg">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}