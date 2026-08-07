import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Cctv,
  ShieldAlert,
  KeyRound,
  Flame,
  Radar,
  Home,
  Landmark,
  Building2,
  GraduationCap,
  Newspaper,
  Rss,
  FileText,
  Award,
} from "lucide-react";
import logo from "../assets/oculus-logo-2.png";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Solutions",
    href: "#solutions",
    dropdown: [
      { label: "CCTV Surveillance", desc: "Round-the-clock visual monitoring", icon: Cctv },
      { label: "Intruder Alarm Systems", desc: "Detect and deter unauthorized entry", icon: ShieldAlert },
      { label: "Access Control Systems", desc: "Manage who enters, and when", icon: KeyRound },
      { label: "Fire Detection", desc: "Early warning for fire hazards", icon: Flame },
      { label: "Central Alarm Monitoring", desc: "24/7 monitored response", icon: Radar },
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
  { label: "Careers", href: "#careers" },
  { label: "About Us", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-(--color-bg)/50 backdrop-blur-xl shadow-lg border-b border-(--color-primary-hover)/30"
          : "bg-(--color-bg)/20 backdrop-blur-md border-b border-(--color-text)/10"
      }`}
    >
      <nav className="w-full h-24 flex items-center justify-between px-8 md:px-12">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Oculus International" className="h-22 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-base font-medium text-(--color-text)/90">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              <a href={link.href} className="flex items-center gap-1 py-2 hover:text-(--color-accent) transition-colors">
                {link.label}
                {link.dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </a>
              {link.dropdown && (
                <div className="absolute left-0 top-full mt-1 w-80 bg-(--color-surface) rounded-xl shadow-lg border border-(--color-border)/50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {link.dropdown.map((item) => (
                    
                    <a  key={item.label}
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
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          
          <a  href="#contact"
          className="btn-accent text-sm font-semibold px-5 py-2.5 rounded-lg"          >
            Contact Us
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
                    
                    <a  key={item.label}
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