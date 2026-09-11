import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
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
import logo from "../assets/oculus-logo-5.svg";
// TODO: replace with your actual compact/secondary logo asset path
import logoCompact from "../assets/company-logo-2.png";
import ThemeToggle from "./ThemeToggle";
import { useQuoteModal } from "../context/QuoteModalContext";



const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Solutions",
    href: "#solutions",
    activePrefix: "/solutions", // any /solutions/... route keeps this item highlighted
    basePath: "/solutions", // where DropdownItem routes each item.slug to
    dropdown: [
      { label: "Smart Home Solutions", desc: "Automation for modern living", icon: Home, slug: "smart-home" },
      { label: "Smart Office Solutions", desc: "Connected, efficient workspaces", icon: Building, slug: "smart-office" },
      { label: "IP/Analogue Telephony", desc: "Reliable voice communication systems", icon: Phone, slug: "ip-telephony" },
      { label: "Structured Cabling", desc: "The backbone of your network", icon: Cable, slug: "structured-cabling" },
      { label: "Nurse Calling Solutions", desc: "Fast, reliable patient assistance", icon: BellRing, slug: "nurse-calling" },
      { label: "Pipe Music Systems", desc: "Ambient audio for any space", icon: Music, slug: "pipe-music" },
      { label: "Access Control & Attendance", desc: "Manage entry and track attendance", icon: Fingerprint, slug: "access-control" },
      { label: "Guard Tour Systems", desc: "Verify and log patrol routes", icon: Footprints, slug: "guard-tour" },
      { label: "Wired & Wireless Networking", desc: "Robust connectivity infrastructure", icon: Wifi, slug: "networking" },
      { label: "IP TV & MATV Solutions", desc: "Centralized television distribution", icon: Tv, slug: "ip-tv-matv" },
      { label: "Public Address Systems", desc: "Clear announcements, building-wide", icon: Speaker, slug: "public-address" },
      { label: "Hotel & Restaurant Management", desc: "Integrated hospitality technology", icon: UtensilsCrossed, slug: "hotel-restaurant" },
    ],
  },

  {
    label: "Products",
    href: "#products",
    activePrefix: "/products", // any /products/... route keeps this item highlighted
    basePath: "/products", // where DropdownItem routes each item.slug to
    dropdown: [
      { label: "EliteControl (NZ)", desc: "Premium New Zealand-engineered security systems", icon: ShieldCheck, slug: "elitecontrol" },
      { label: "Alarm Systems", desc: "Intrusion detection and instant alerts", icon: Siren, slug: "alarm-systems" },
      { label: "CCTV", desc: "High-definition surveillance and monitoring", icon: Camera, slug: "cctv" },
      { label: "Access Control", desc: "Secure entry management for any facility", icon: KeyRound, slug: "access-control" },
      { label: "Attendance Systems", desc: "Accurate, automated staff time tracking", icon: UserCheck, slug: "attendance-systems" },
      { label: "Others", desc: "Explore our full range of ELV products", icon: MoreHorizontal, slug: "others" },
    ],
  },

    {
    label: "Industries",
    href: "#industries",
    activePrefix: "/industries",   // keeps "Industries" highlighted on any /industries/... page
    basePath: "/industries",       // DropdownItem routes each item to `${basePath}/${slug}`
    dropdown: [
      { label: "Residential", desc: "Protection for homes and estates", icon: Home, slug: "residential-and-apartments" },
      { label: "Government", desc: "Security for public institutions", icon: Landmark, slug: "government-and-defence" },
      { label: "Commercial", desc: "Safeguarding offices and retail", icon: Building2, slug: "corporate-and-commercial" },
      { label: "Education", desc: "Safety for schools and campuses", icon: GraduationCap, slug: "education" },
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
    { label: "About Us", desc: "Who we are and what drives us", icon: Info, to: "/about-us" },
    { label: "Careers", desc: "Join our team", icon: Briefcase },
    { label: "Contact Us", desc: "Get in touch with our team", icon: Mail, to: "/contact-us" },
    ],
  },
];

// Navbar height in px: full (hero) state vs shrunk (scrolled) state.
const NAV_HEIGHT_EXPANDED = 96; // h-24
const NAV_HEIGHT_COMPACT = 56;  // h-14
const LOGO_HEIGHT_EXPANDED = 88; // h-22
const LOGO_HEIGHT_COMPACT = 64;  // h-16
const SHRINK_DISTANCE = 150;     // px of scroll over which the shrink happens

// Renders the inner content of one dropdown row (icon + label + desc),
// shared between the <Link> and <a> variants below so markup stays in sync.
// isActive locks in the same visual treatment the hover state normally gives.
function DropdownItemContent({ item, isActive }) {
  return (
    <>
      <span
        className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors shrink-0 ${
          isActive
            ? "bg-(--color-accent) text-(--color-bg)"
            : "bg-(--color-bg) text-(--color-text)/70 group-hover/item:bg-(--color-accent) group-hover/item:text-(--color-bg)"
        }`}
      >
        <item.icon className="w-4 h-4" />
      </span>
      <span
        className={`flex flex-col px-2 py-1 rounded-md transition-colors ${
          isActive ? "bg-(--color-accent)/15" : "group-hover/item:bg-(--color-accent)/15"
        }`}
      >
        <span
          className={`flex items-center gap-1 font-medium ${
            isActive
              ? "text-(--color-primary-disabled)"
              : "text-(--color-text-nav) group-hover/item:text-(--color-primary-disabled)"
          }`}
        >
          {item.label}
          <ArrowRight
            className={`w-3.5 h-3.5 transition-all duration-200 ${
              isActive
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0"
            }`}
          />
        </span>
        <span className="text-xs text-(--color-text-nav)/50">{item.desc}</span>
      </span>
    </>
  );
}

// If the dropdown item has a `slug`, it routes via React Router to
// `${basePath}/${slug}` — e.g. Solutions items go to /solutions/nurse-calling,
// Products items go to /products/cctv. `basePath` comes from the parent
// nav link, so the same component serves every dropdown section.
// Items with no slug (Industries, Resources, Company — no routed pages yet)
// fall back to a plain anchor.
function DropdownItem({ item, parentHref, basePath, onClick, className, pathname }) {
  const to = item.to || (item.slug && basePath ? `${basePath}/${item.slug}` : null);
  const isActive = Boolean(to) && pathname === to;

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={className}>
        <DropdownItemContent item={item} isActive={isActive} />
      </Link>
    );
  }
  return (
    <a href={parentHref} onClick={onClick} className={className}>
      <DropdownItemContent item={item} isActive={false} />
    </a>
  );
}

// ── Mobile menu row (flat, Allied-Universal style) ─────────────────────────
// Plain label + trailing arrow if it drills into a submenu. No icon/desc —
// that richer treatment stays on desktop only.
function MobileRow({ children, onClick, to, href, hasArrow }) {
  const rowClass =
    "flex items-center justify-between w-full px-6 py-4 border-b border-(--color-border) " +
    "text-(--color-text) font-semibold text-sm uppercase tracking-wide text-left";

  const content = (
    <>
      {children}
      {hasArrow && <ArrowRight className="w-4 h-4 text-(--color-accent) shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={rowClass}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} className={rowClass}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={rowClass}>
      {content}
    </button>
  );
}

export default function Navbar() {
  const { openQuoteModal } = useQuoteModal();
  const { pathname } = useLocation(); // current URL path, e.g. "/solutions/nurse-calling"
  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // the navLinks entry currently drilled into, mobile only
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 = full height, 1 = shrunk

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setScrollProgress(Math.min(y / SHRINK_DISTANCE, 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset the drill-down state whenever the menu itself closes, so it
  // doesn't reopen showing a stale submenu next time.
  useEffect(() => {
    if (!open) setActiveSubmenu(null);
  }, [open]);

  // Interpolated values driving the smooth shrink
  const navHeight = NAV_HEIGHT_EXPANDED - (NAV_HEIGHT_EXPANDED - NAV_HEIGHT_COMPACT) * scrollProgress;
  const logoHeight = LOGO_HEIGHT_EXPANDED - (LOGO_HEIGHT_EXPANDED - LOGO_HEIGHT_COMPACT) * scrollProgress;

  const closeMenu = () => {
    setOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-(--color-bg)/60 backdrop-blur-xl shadow-lg border-b border-(--color-primary-hover)/30"
          : "bg-(--color-bg)/20 backdrop-blur-md border-b border-(--color-text)/10"
      }`}
    >
      <nav
        style={{ height: `${navHeight}px` }}
        className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-6 xl:px-12 transition-[height] duration-150 ease-out"
      >
        <Link to="/" className="flex items-center gap-3">
          <img
            src={scrollProgress > 0.5 ? logoCompact : logo}
            alt="Oculus International"
            style={{ height: `${logoHeight}px` }}
            className="w-auto max-h-9 sm:max-h-10 lg:max-h-none transition-[height] duration-150 ease-out"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 xl:gap-8 text-base font-medium text-(--color-text-nav)/90 shrink-0">
          {navLinks.map((link) => {
            const isWide = link.dropdown && link.dropdown.length > 6;

            // Active if this is the exact route ("to"), or if we're anywhere
            // under its section ("activePrefix", e.g. any /solutions/... or
            // /products/... page).
            const isTopActive = link.to
              ? pathname === link.to
              : link.activePrefix
              ? pathname.startsWith(link.activePrefix)
              : false;

            return (
              <li key={link.label} className="relative group">
                {link.to ? (
                  <Link
                    to={link.to}
                    className={`flex items-center gap-1 py-2 transition-colors ${
                      isTopActive ? "text-(--color-nav)" : "hover:text-(--color-nav)"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  
                  <a  href={link.href}
                    className={`flex items-center gap-1 py-2 transition-colors ${
                      isTopActive ? "text-(--color-nav)" : "hover:text-(--color-nav)"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-800 ease-out group-hover:-rotate-180" />
                    )}
                  </a>
                )}
                {link.dropdown && (
                  <div
                    className={`absolute left-0 top-full mt-1 bg-(--color-surface) rounded-xl shadow-lg border border-(--color-border)/50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all ${
                      isWide ? "w-[640px] grid grid-cols-2 gap-x-1" : "w-80"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <DropdownItem
                        key={item.label}
                        item={item}
                        parentHref={link.href}
                        basePath={link.basePath}
                        pathname={pathname}
                        className="group/item flex items-center gap-3 px-4 py-2.5 text-sm text-(--color-text)/80"
                      />
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <ThemeToggle />

          <button
            onClick={openQuoteModal}
            className="btn-accent text-sm font-semibold px-5 py-2.5 rounded-lg whitespace-nowrap"
          >
            Request a Free Quote
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <div className="scale-[0.7] origin-center -mx-1.5">
            <ThemeToggle />
          </div>
          <button className="text-(--color-text)" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ── MOBILE FULL-SCREEN MENU ──────────────────────────────────────
          Flat list, label + arrow, tap drills into that section's items.
          A pinned "Request a Free Quote" bar always sits at the bottom,
          independent of how long the list is. */}
            {/* ── MOBILE FULL-SCREEN MENU ── */}
      {open &&
        createPortal(
          <div
            className="lg:hidden fixed left-0 right-0 bottom-0 z-[60] bg-(--color-bg) flex flex-col"
            style={{ top: `${navHeight}px` }}
          >
            <div className="flex-1 min-h-0 overflow-y-auto">
              {activeSubmenu ? (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveSubmenu(null)}
                    className="flex items-center gap-2 w-full px-6 py-4 border-b border-(--color-border) text-(--color-text)/60 text-sm font-semibold uppercase tracking-wide"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>

                  {activeSubmenu.dropdown.map((item) => {
                    const to =
                      item.to ||
                      (item.slug && activeSubmenu.basePath
                        ? `${activeSubmenu.basePath}/${item.slug}`
                        : null);
                    return (
                      <MobileRow
                        key={item.label}
                        to={to}
                        href={!to ? activeSubmenu.href : undefined}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </MobileRow>
                    );
                  })}
                </>
              ) : (
                navLinks.map((link) => {
                  const hasDropdown = Boolean(link.dropdown);
                  if (!hasDropdown) {
                    return (
                      <MobileRow key={link.label} to={link.to} href={link.href} onClick={closeMenu}>
                        {link.label}
                      </MobileRow>
                    );
                  }
                  return (
                    <MobileRow key={link.label} hasArrow onClick={() => setActiveSubmenu(link)}>
                      {link.label}
                    </MobileRow>
                  );
                })
              )}
            </div>

            <div className="p-4 border-t border-(--color-border)">
              <button
                onClick={() => {
                  closeMenu();
                  openQuoteModal();
                }}
                className="btn-accent w-full py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wide"
              >
                Request a Free Quote
              </button>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}