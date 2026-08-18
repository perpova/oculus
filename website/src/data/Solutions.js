// src/data/solutions.js
//
// Stand-in for your database. Same shape you'll return from the API later —
// once that's ready, replace getSolutionBySlug()/getAllSolutions() with
// real fetch() calls and nothing in pages/SolutionPage.jsx has to change.
//
// slugs below match exactly the `slug` field on each item in the Solutions
// dropdown in components/Navbar.jsx — keep these in sync if you rename either.

import solution_1_Img from "../assets/solution-1.jpg";
import solution_2_Img from "../assets/solution-2.jpeg";
import solution_3_Img from "../assets/solution-3.jpg";
import solution_4_Img from "../assets/solution-4.jpg";
import solution_5_Img from "../assets/solution-5.png";
import solution_6_Img from "../assets/solution-6.2.jpeg";
import solution_7_Img from "../assets/solution-7.jpg";
import solution_8_Img from "../assets/solution-8.jpg";
import solution_9_Img from "../assets/solution-9.png";
import solution_10_Img from "../assets/solution-10.jpg";
import solution_11_Img from "../assets/solution-11.jpg";
import solution_12_Img from "../assets/solution-12.jpg";

export const solutions = [
  {
    slug: "smart-home",
    navLabel: "Smart Home Solutions",
    title: "Smart Home Solutions",
    tagline:
      "Automation for modern living — control lighting, climate, security, and entertainment from one connected system.",
    heroImage: solution_1_Img,
    description:
      "Our smart home solutions bring lighting, climate control, security, and entertainment together into a single connected platform. Homeowners get centralized control via app or voice, automated routines that adapt to daily habits, and remote access to monitor and manage the home from anywhere.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
    keyFeatures: [
      { icon: "wifi", title: "Centralized control", description: "Manage lighting, climate and entertainment from one app" },
      { icon: "shield", title: "Integrated security", description: "Cameras, alarms and access all in one ecosystem" },
      { icon: "clock", title: "Smart automation", description: "Routines and schedules that adapt to your lifestyle" },
    ],
    brands: ["KNX", "Control4", "Ajax", "Sonos"],
    faqs: [
      { question: "Can this be added to an existing home, or only new builds?", answer: "Both — we offer retrofit-friendly wireless options as well as fully wired installations for new construction." },
      { question: "Can I control everything from my phone?", answer: "Yes, a single app covers lighting, climate, security and entertainment, with remote access from anywhere." },
    ],
  },

  {
    slug: "smart-office",
    navLabel: "Smart Office Solutions",
    title: "Smart Office Solutions",
    tagline:
      "Connected, efficient workspaces — lighting, climate, meeting rooms and security working together.",
    heroImage: solution_2_Img,
    description:
      "Our smart office solutions unify lighting, HVAC, meeting room booking, and access into a single connected system that reduces energy waste and simplifies facility management, while giving IT and admin teams centralized visibility and control.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
    keyFeatures: [
      { icon: "building", title: "Unified facility control", description: "Lighting, HVAC and meeting rooms from one dashboard" },
      { icon: "clock", title: "Energy scheduling", description: "Automated shutdowns cut wasted energy after hours" },
      { icon: "fingerprint", title: "Secure workspace access", description: "Credential-based entry integrated with the same platform" },
    ],
    brands: ["KNX", "Crestron", "Johnson Controls"],
    faqs: [
      { question: "Does this integrate with our existing building management system?", answer: "Yes, we support integration via BACnet, Modbus and most common BMS protocols." },
      { question: "Can meeting rooms be booked directly from the system?", answer: "Yes, room booking panels sync with your calendar and show live availability." },
    ],
  },

  {
    slug: "ip-telephony",
    navLabel: "IP/Analogue Telephony",
    title: "IP/Analogue Telephony",
    tagline: "Reliable voice communication systems for businesses of any size.",
    heroImage: solution_3_Img,
    description:
      "We design and install both IP-based and traditional analogue telephony systems, giving organizations clear, dependable voice communication with features like call routing, voicemail-to-email, and multi-site extension dialing.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
    keyFeatures: [
      { icon: "phone", title: "IP & analogue support", description: "Flexible systems suited to your existing infrastructure" },
      { icon: "wifi", title: "Multi-site connectivity", description: "Extension dialing between branches over the network" },
      { icon: "clock", title: "Call management", description: "Routing, voicemail-to-email and call logging" },
    ],
    brands: ["Yeastar", "Grandstream", "Panasonic"],
    faqs: [
      { question: "Can we keep our existing phone numbers?", answer: "Yes, number porting is supported for both IP and analogue lines." },
      { question: "Do you support hybrid setups with both IP and analogue?", answer: "Yes, hybrid PBX systems let you run both simultaneously during a phased migration." },
    ],
  },

  {
    slug: "structured-cabling",
    navLabel: "Structured Cabling",
    title: "Structured Cabling",
    tagline: "The backbone of your network — reliable, organized, and built to scale.",
    heroImage: solution_4_Img,
    description:
      "Structured cabling is the physical foundation every connected system depends on. We design and install certified copper and fiber cabling infrastructure that's organized, labeled, and scalable — reducing downtime and making future upgrades straightforward.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
    keyFeatures: [
      { icon: "cable", title: "Copper & fiber cabling", description: "Certified infrastructure sized to your building" },
      { icon: "building", title: "Organized pathways", description: "Clean, labeled cable management for easy maintenance" },
      { icon: "shield", title: "Built to scale", description: "Infrastructure that supports future network growth" },
    ],
    brands: ["Panduit", "CommScope", "Legrand"],
    faqs: [
      { question: "Do you provide certification testing after installation?", answer: "Yes, every run is tested and certified to the relevant category standard, with reports provided." },
    ],
  },

  {
    slug: "nurse-calling",
    navLabel: "Nurse Calling Solutions",
    title: "Nurse Calling Solutions",
    tagline: "Fast, reliable patient assistance for hospitals, clinics and care homes.",
    heroImage: solution_5_Img,
    description:
      "Our nurse call systems let patients summon assistance instantly, with calls routed and logged to the nearest available staff. Designed for hospitals, clinics, and elderly care facilities, the system improves response times and gives administrators reporting on response performance.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
    keyFeatures: [
      { icon: "bell", title: "Instant call alerts", description: "Patients summon staff with a single button press" },
      { icon: "clock", title: "Response tracking", description: "Call and response times logged for reporting" },
      { icon: "wifi", title: "Wireless or wired", description: "Flexible installation suited to any facility layout" },
    ],
    brands: ["Ascom", "Static Systems", "Jeron"],
    faqs: [
      { question: "Can it integrate with our existing hospital paging system?", answer: "Yes, most nurse call systems can integrate with existing paging and PA infrastructure." },
    ],
  },

  {
    slug: "pipe-music",
    navLabel: "Pipe Music Systems",
    title: "Pipe Music Systems",
    tagline: "Ambient audio for any space — retail, hospitality, or corporate.",
    heroImage: solution_6_Img,
    description:
      "Our background music systems deliver zoned, ambient audio across retail floors, restaurants, hotels, and offices, with independent volume and playlist control per zone, and the ability to break in for announcements when needed.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
    keyFeatures: [
      { icon: "music", title: "Zoned audio control", description: "Independent volume and playlists per area" },
      { icon: "speaker", title: "Announcement break-in", description: "Switch to live announcements without stopping music" },
      { icon: "wifi", title: "Streaming integration", description: "Connects with popular streaming and licensing platforms" },
    ],
    brands: ["Bose Professional", "Bosch", "TOA"],
    faqs: [
      { question: "Can different rooms play different music at the same time?", answer: "Yes, each zone can run independent audio and volume levels simultaneously." },
    ],
  },

  {
    slug: "access-control",
    navLabel: "Access Control & Attendance",
    title: "Access Control And Attendance Systems",
    tagline:
      "Control who enters, when they enter, and automatically track staff attendance — all from one integrated platform.",
    heroImage: solution_7_Img,
    description:
      "Our access control and attendance systems combine biometric, card, and mobile-credential entry with real-time attendance logging. Suited for offices, factories, and residential complexes, the system integrates with payroll and HR software, gives administrators live entry logs, and lets you restrict zones by time, role, or department.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
    keyFeatures: [
      { icon: "fingerprint", title: "Biometric and card entry", description: "Fingerprint, face, RFID card or mobile credential" },
      { icon: "clock", title: "Automated attendance", description: "Clock-in and clock-out logs sync to payroll" },
      { icon: "door", title: "Zone-based restriction", description: "Set access by time, role or department" },
    ],
    brands: ["ZKTeco", "Hikvision", "Suprema", "HID Global", "Dahua"],
    faqs: [
      { question: "Can this integrate with our existing payroll software?", answer: "Yes — attendance logs sync via API or scheduled export to most common payroll and HR platforms." },
      { question: "What credential types are supported?", answer: "Fingerprint, facial recognition, RFID card, PIN code, and mobile app credentials, in any combination." },
      { question: "How long does installation take?", answer: "Most single-site installations are completed within 1–3 working days depending on door count." },
    ],
  },

  {
    slug: "guard-tour",
    navLabel: "Guard Tour Systems",
    title: "Guard Tour Systems",
    tagline: "Verify and log patrol routes — accountability for every checkpoint.",
    heroImage: solution_8_Img,
    description:
      "Guard tour systems confirm that security patrols actually reach every checkpoint, on schedule. Guards scan RFID or NFC checkpoints along their route, with timestamped logs available to management in real time — reducing missed patrols and improving accountability.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
    keyFeatures: [
      { icon: "footprints", title: "Checkpoint scanning", description: "RFID or NFC tags confirm each patrol stop" },
      { icon: "clock", title: "Real-time logging", description: "Timestamped patrol records visible to management" },
      { icon: "shield", title: "Missed-patrol alerts", description: "Instant notification if a checkpoint is skipped" },
    ],
    brands: ["GuardsPro", "Deggy", "TimeTec"],
    faqs: [
      { question: "Does this work without mobile network coverage?", answer: "Yes, handheld scanners store logs offline and sync once back in range." },
    ],
  },

  {
    slug: "networking",
    navLabel: "Wired & Wireless Networking",
    title: "Wired & Wireless Networking",
    tagline: "Robust connectivity infrastructure for every corner of your building.",
    heroImage: solution_9_Img,
    description:
      "We design and deploy enterprise-grade wired and wireless networks — from core switching to full-building Wi-Fi coverage — engineered for reliability, security, and room to grow as your organization's connectivity needs increase.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
    keyFeatures: [
      { icon: "wifi", title: "Full-building Wi-Fi", description: "Seamless wireless coverage with roaming support" },
      { icon: "cable", title: "Enterprise switching", description: "Managed core and edge switches sized to demand" },
      { icon: "shield", title: "Network segmentation", description: "VLANs and firewalls to isolate sensitive traffic" },
    ],
    brands: ["Cisco", "Ubiquiti", "Aruba"],
    faqs: [
      { question: "Can this support guest Wi-Fi separate from our internal network?", answer: "Yes, guest networks are segmented from internal traffic by default." },
    ],
  },

  {
    slug: "ip-tv-matv",
    navLabel: "IP TV & MATV Solutions",
    title: "IP TV & MATV Solutions",
    tagline: "Centralized television distribution across hotels, hospitals and offices.",
    heroImage: solution_10_Img,
    description:
      "Our IPTV and MATV solutions distribute live TV, satellite, and custom content channels across large buildings from a single headend, with support for hotel welcome screens, digital signage, and centralized channel management.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
    keyFeatures: [
      { icon: "tv", title: "Centralized headend", description: "One source distributing content building-wide" },
      { icon: "wifi", title: "IP-based delivery", description: "Content streamed over your existing network" },
      { icon: "building", title: "Custom channel branding", description: "Welcome screens and in-house channels for hotels" },
    ],
    brands: ["Triax", "SMATV", "Zinwell"],
    faqs: [
      { question: "Can we add our own branded welcome channel for guests?", answer: "Yes, custom welcome screens and in-house content channels can be configured per property." },
    ],
  },

  {
    slug: "public-address",
    navLabel: "Public Address Systems",
    title: "Public Address Systems",
    tagline: "Clear announcements, building-wide, when it matters most.",
    heroImage: solution_11_Img,
    description:
      "Our public address systems deliver clear, intelligible announcements across large facilities, with zoned paging, emergency broadcast override, and integration with fire alarm systems for life-safety compliance.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
    keyFeatures: [
      { icon: "speaker", title: "Zoned paging", description: "Announce to specific areas or the whole building" },
      { icon: "flame", title: "Fire alarm integration", description: "Automatic emergency broadcast override" },
      { icon: "wifi", title: "IP-based PA", description: "Networked speakers for large or multi-site facilities" },
    ],
    brands: ["Bosch", "TOA", "Honeywell"],
    faqs: [
      { question: "Is this compliant with fire and life-safety codes?", answer: "Yes, our PA systems can be integrated with fire alarm panels for compliant emergency broadcast." },
    ],
  },

  {
    slug: "hotel-restaurant",
    navLabel: "Hotel & Restaurant Management",
    title: "Hotel & Restaurant Management",
    tagline: "Integrated hospitality technology for guest experience and operations.",
    heroImage: solution_12_Img,
    description:
      "We bring together property management, guest room controls, POS, and back-of-house systems into an integrated hospitality technology stack — helping hotels and restaurants run smoother operations while improving the guest experience.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
    keyFeatures: [
      { icon: "building", title: "Property management integration", description: "Guest room controls linked to PMS" },
      { icon: "utensils", title: "POS integration", description: "Restaurant point-of-sale synced with back office" },
      { icon: "fingerprint", title: "Guest room access", description: "Card or mobile key entry for guest rooms" },
    ],
    brands: ["Oracle Opera", "Assa Abloy", "Onity"],
    faqs: [
      { question: "Can guest room controls be linked to our PMS check-in/check-out?", answer: "Yes, room access and controls activate automatically on check-in and deactivate on check-out." },
    ],
  },
];

export function getAllSolutions() {
  return solutions;
}

export function getSolutionBySlug(slug) {
  return solutions.find((s) => s.slug === slug) ?? null;
}