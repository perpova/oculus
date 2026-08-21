// src/data/industriesData.js
//
// Central data source for all "Industries" pages.
// Each entry drives one route: /industries/:slug
// Swap heroImage paths + copy for real content; icons are lucide-react components.

import {
  Fingerprint,
  Video,
  Bell,
  GraduationCap,
  Car,
  Building2,
  Home,
} from "lucide-react";

import residentialImg from "../assets/residential.jpg";
import governmentImg from "../assets/government.png";
import commercialImg from "../assets/commercial.jpg";
import educationImg from "../assets/education.jpg";

const industriesData = [
  {
    slug: "government-and-defence",
    navLabel: "Government & Defence",
    title: "Government And Defence",
    tagline:
      "Layered, high-assurance security for government buildings, defense sites, and public infrastructure that demand strict access control and continuous monitoring.",
    heroImage: governmentImg,
    overview:
      "Our access control and attendance systems combine biometric, card, and mobile-credential entry with real-time attendance logging. Suited for offices, factories, and residential complexes, the system integrates with payroll and HR software, gives administrators live entry logs, and lets you restrict zones by time, role, or department.",
    ctaLabel: "Get a Free Quote",
    whyTitle: "Why this sector needs specialized security",
    whyText:
      "Government and defense sites face higher stakes than most: classified areas, public safety obligations, and strict audit requirements. Systems here need tamper-proof access logs, redundant monitoring, and compliance-ready reporting that hold up to inspection, alongside technicians who can be vetted and cleared for sensitive locations.",
    solutions: [
      {
        icon: Fingerprint,
        title: "Access Control and Attendance",
        description: "Restrict classified zones by clearance level and time",
        link: "/solutions/access-control",
      },
      {
        icon: Video,
        title: "High-performance CCTV networks",
        description: "Wide-area, high-resolution surveillance with archiving",
        link: "/solutions/networking",
      },
      {
        icon: Bell,
        title: "Intelligent alarm systems",
        description: "Perimeter breach detection with instant alerting",
        link: "/solutions/smart-office",
      },
    ],
  },
  {
    slug: "corporate-and-commercial",
    navLabel: "Corporate & Commercial",
    title: "Corporate And Commercial",
    tagline:
      "Scalable security for offices, retail chains, and commercial complexes that need to protect people, assets, and daily operations without slowing them down.",
    heroImage: commercialImg,
    overview:
      "Card and biometric access control integrates with HR and payroll systems for accurate attendance, while networked CCTV and visitor management give facility managers a single view across multiple sites and floors.",
    ctaLabel: "Get a Free Quote",
    whyTitle: "Why this sector needs specialized security",
    whyText:
      "Commercial sites juggle high foot traffic, multiple tenants, and valuable equipment. Security needs to be unobtrusive for staff and visitors, yet detailed enough to trace incidents, manage shared spaces, and scale as the business grows across branches.",
    solutions: [
      {
        icon: Fingerprint,
        title: "Access Control and Attendance",
        description: "Manage staff, contractors, and visitor access centrally",
        link: "/solutions/access-control",
      },
      {
        icon: Building2,
        title: "Multi-site video management",
        description: "Monitor branches and floors from one dashboard",
        link: "/solutions/networking",
      },
      {
        icon: Bell,
        title: "Intelligent alarm systems",
        description: "After-hours intrusion detection with instant alerting",
        link: "/solutions/smart-office",
      },
    ],
  },
  {
    slug: "education",
    navLabel: "Education",
    title: "Education",
    tagline:
      "Campus-wide safety for schools, universities, and training institutes, built around student safety, staff accountability, and calm, controlled entry points.",
    heroImage: educationImg,
    overview:
      "Biometric and card-based attendance replaces manual registers for staff and students, while CCTV coverage across gates, corridors, and common areas gives administrators a clear, reviewable record of campus activity.",
    ctaLabel: "Get a Free Quote",
    whyTitle: "Why this sector needs specialized security",
    whyText:
      "Campuses combine large numbers of minors, open layouts, and multiple entry points. Systems need to control who enters school grounds, keep accurate attendance for compliance, and give staff a fast way to respond if something goes wrong.",
    solutions: [
      {
        icon: GraduationCap,
        title: "Student & Staff Attendance",
        description: "Biometric attendance synced with academic records",
        link: "/solutions/ip-telephony",
      },
      {
        icon: Video,
        title: "Campus-wide CCTV",
        description: "Coverage across gates, corridors, and common areas",
        link: "/solutions/structured-cabling",
      },
      {
        icon: Bell,
        title: "Emergency alert systems",
        description: "Instant lockdown and panic alerts campus-wide",
        link: "/solutions/pipe-music",
      },
    ],
  },
  {
    slug: "residential-and-apartments",
    navLabel: "Residential & Apartments",
    title: "Residential And Apartments",
    tagline:
      "Discreet, resident-friendly security for housing schemes and apartment complexes, balancing convenience for residents with tight control over who comes and goes.",
    heroImage: residentialImg,
    overview:
      "Mobile-credential and card access at gates and lobbies keeps entry smooth for residents, while visitor management, intercoms, and CCTV give property managers oversight without turning the building into a checkpoint.",
    ctaLabel: "Get a Free Quote",
    whyTitle: "Why this sector needs specialized security",
    whyText:
      "Residential communities need security that feels welcoming, not restrictive. Systems must handle constant visitor and delivery traffic, shared amenities, and multiple households, all while giving management a clear audit trail if an incident occurs.",
    solutions: [
      {
        icon: Home,
        title: "Gate & Lobby Access Control",
        description: "Card, PIN, and mobile-credential entry for residents",
        link: "/solutions/access-control",
      },
      {
        icon: Video,
        title: "Community CCTV networks",
        description: "Coverage for gates, parking, and common areas",
        link: "/solutions/smart-home",
      },
      {
        icon: Bell,
        title: "Intelligent alarm systems",
        description: "Perimeter and unit-level intrusion alerts",
        link: "/solutions/guard-tour",
      },
    ],
  },
  {
    slug: "retail-and-automotive",
    navLabel: "Retail & Automotive",
    title: "Retail And Automotive",
    tagline:
      "Loss-prevention-focused security for showrooms, dealerships, and retail outlets, protecting high-value stock and customer-facing spaces around the clock.",
    heroImage: "/images/industries/retail-automotive.jpg",
    overview:
      "High-resolution CCTV covers showroom floors, forecourts, and stockrooms, integrated with access control for staff-only areas and alarm systems tuned to after-hours activity around vehicles and inventory.",
    ctaLabel: "Get a Free Quote",
    whyTitle: "Why this sector needs specialized security",
    whyText:
      "Showrooms and retail floors hold high-value stock in open, customer-facing layouts. Security needs to deter theft and vandalism without making the space feel unwelcoming, and give owners fast, clear footage when a claim or dispute comes up.",
    solutions: [
      {
        icon: Car,
        title: "Forecourt & Showroom CCTV",
        description: "Wide-coverage surveillance for vehicles and stock",
        link: "/solutions/smart-office",
      },
      {
        icon: Fingerprint,
        title: "Staff Access Control",
        description: "Restrict stockrooms and back-of-house areas",
        link: "/solutions/access-control",
      },
      {
        icon: Bell,
        title: "Intelligent alarm systems",
        description: "After-hours intrusion and perimeter alerts",
        link: "/solutions/networking",
      },
    ],
  },
];

export default industriesData;