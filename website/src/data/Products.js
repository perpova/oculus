// src/data/products.js
//
// TEMPORARY placeholder data — same pattern as data/solutions.js.
// Swap this file for a database/API call later; every component below
// only depends on the shapes exported here, so nothing else has to change.
//
// NOTE: `icon` uses lucide-react components, matching the category tiles
// already used on the homepage (Siren, Camera, KeyRound, UserCheck, MoreHorizontal).

import { Siren, Camera, KeyRound, UserCheck, MoreHorizontal } from "lucide-react";

export const productCategories = [
  {
    slug: "alarm-systems",
    label: "Alarm Systems",
    desc: "Intrusion detection and instant alerts",
    icon: Siren,
  },
  {
    slug: "cctv",
    label: "CCTV",
    desc: "High-definition surveillance and monitoring",
    icon: Camera,
  },
  {
    slug: "access-control",
    label: "Access Control",
    desc: "Secure entry management for any facility",
    icon: KeyRound,
  },
  {
    slug: "attendance-systems",
    label: "Attendance Systems",
    desc: "Accurate, automated staff time tracking",
    icon: UserCheck,
  },
  {
    slug: "others",
    label: "Others",
    desc: "Explore our full range of ELV products",
    icon: MoreHorizontal,
  },
];

// products[categorySlug] = array of product objects
// image: served from /public/products/*.png — Vite serves the "public" folder
// at the site root, so "/products/Alarm-1.png" resolves to
// public/products/Alarm-1.png with no import needed.
export const products = {
  "alarm-systems": [
    {
      id: "ness-d8x-deluxe",
      name: "NESS Home & Office Security System",
      manufacturer: "NESS Corporation",
      country: "Australia",
      model: "D8X DELUXE",
      image: "/products/Alarm-1.png",
      specs: [
        "Up to 3 keypads can be connected to same system",
        "Up to 8 Hard Wired zones capacity",
        "Call & SMS Alerts automatically triggered",
        "Highly sensitive Motion Detection sensors",
        "Wireless Zones expansion optional",
      ],
    },
    {
      id: "elitealarms-ec-i",
      name: "EliteAlarms Smart Security System",
      manufacturer: "Arrowhead Alarm Products",
      country: "New Zealand",
      model: "EC-i",
      image: "/products/Alarm-2.png",
      specs: [
        "New Zealand designed modular intrusion & access control panel",
        "Multi-partition support with flexible zone configuration",
        "Smart home automation integration & professional monitoring",
        "Fully compatible with the EliteCloud app & dashboard",
        "Onboard Ethernet for seamless internet and mobile remote control",
      ],
    },
    {
      id: "karassn-ks-868g",
      name: "All in One Alarm Security System",
      manufacturer: "KARASSN",
      country: "China",
      model: "KS-868G",
      image: "/products/Alarm-3.png",
      specs: [
        "16 programmable zones (8 wired / 8 wireless)",
        "Flexible PSTN, GSM, or GPRS network links",
        "Auto Alert calls & SMS on security trigger",
        "Built-in GSM dialer keypad terminal",
        "Remote mobile configuration and arming support",
      ],
    },
    {
      id: "ness-106-305s",
      name: "NESS Wireless Security Solution",
      manufacturer: "NESS Corporation",
      country: "Australia",
      model: "106-305S",
      image: "/products/Alarm-4.png",
      specs: [
        "100% wireless layout (no cabling required)",
        "Integrated high-dB structural alarm siren",
        "Extremely long-lasting device battery life",
        "Integrated Solar Cell charging capabilities",
        "ARM/DISARM commands via remote SMS message",
      ],
    },
  ],

  cctv: [
    {
      id: "webgate-nk1080bl",
      name: "Day & Night IP Camera",
      manufacturer: "Webgate",
      country: "Korea",
      model: "NK1080BL-IR48-F3.6",
      image: "/products/CCTV-1.png",
      specs: [
        "2.1 Megapixel SONY STARVIS Image Sensor",
        "Connects up to 6 streams simultaneously",
        "Built-in Digital Image Stabilizer (DIS)",
        "IP66 Level Protection (Dust & Water resistant)",
        "Supports dual H.264 streams at 1080p 30fps",
      ],
    },
    {
      id: "milesight-ms-c2975",
      name: "Smart Weatherproof Camera",
      manufacturer: "Milesight",
      country: "Turkey",
      model: "MS-C2975-RPC",
      image: "/products/CCTV-2.png",
      specs: [
        "Artificial Intelligence (AI) Video Analytics",
        "Integrated People Counting algorithm",
        "High Frame Rate up to 60 frames per second",
        "IP67 and IK10 structural impact protection",
        "Advanced Smart IR II light projection tech",
      ],
    },
    {
      id: "hikvision-nk44w0h",
      name: "Wireless NVR Security Camera Kit",
      manufacturer: "Hikvision",
      country: "China",
      model: "NK44W0H(D)",
      image: "/products/CCTV-3.png",
      specs: [
        "Complete all-in-one surveillance package",
        "Auto Wi-Fi syncing for rapid installation",
        "Hik-Connect cloud link for mobile viewing",
        "Cables and brackets included in package",
        "Four 4 Megapixel Wi-Fi bullet cameras",
      ],
    },
  ],

  "access-control": [
    {
      id: "zkteco-sbtl8000",
      name: "Indoor Speed Gate",
      manufacturer: "Zkteco",
      country: "China",
      model: "SBTL8000",
      image: "/products/Access-1.png",
      specs: [
        "Premium SUS304 Stainless Steel Finishing",
        "Rapid opening speed: less than 1.2 seconds",
        "Built-In emergency mode for evacuation events",
        "10 pairs of advanced infrared sensors",
        "LED passage indicators for direction control",
      ],
    },
    {
      id: "idteck-imdc-rim",
      name: "32 Door Access Control Panel",
      manufacturer: "IDTECK",
      country: "Korea",
      model: "iMDC-RIM",
      image: "/products/Access-2.png",
      specs: [
        "Manage up to 32 doors on a unified database",
        "Reliable TCP/IP Ethernet communication",
        "Encrypted secure data transmission",
        "Up to 255 customizable Time Schedules",
        "Instant notification on forced door triggers",
      ],
    },
    {
      id: "hikvision-ds-k5032",
      name: "Pro Series Visitor Terminal",
      manufacturer: "Hikvision",
      country: "China",
      model: "DS-K5032-3XFD",
      image: "/products/Access-3.png",
      specs: [
        "Android operating system interface",
        "Facial detection range: 0.3m to 2.0m",
        "Integrated temperature screening scanner",
        "Paperless visitor booking and enrollment",
        "Large scale database: stores 150,000 records",
      ],
    },
  ],

  "attendance-systems": [
    {
      id: "idteck-xo1000",
      name: "Wifi + Time & Attendance Reader",
      manufacturer: "IDTECK",
      country: "Korea",
      model: "XO1000",
      image: "/products/Attendance-1.png",
      specs: [
        "Built-in high definition CMOS Color Camera",
        "5 Inch Full Color TFT User Interface Display",
        "Advanced Shift, Overtime & Breaktime Management",
        "Enrolls up to 5,000 Fingerprints",
        "Enrolls up to 100,000 ID RFID Cards",
      ],
    },
    {
      id: "virdi-ubio-x-iris",
      name: "Advanced Iris & Fingerprint Reader",
      manufacturer: "Virdi",
      country: "Korea",
      model: "UBio-X Iris",
      image: "/products/Attendance-2.png",
      specs: [
        "Contactless Iris Recognition up to 50cm range",
        "Auto-tilting high definition internal camera",
        "High speed biometric match comparison",
        "5 Inch Touch Screen interface menu",
        "Detects and rejects fake fingerprints",
      ],
    },
    {
      id: "zkteco-uface302",
      name: "Multi-Biometric Attendance System",
      manufacturer: "Zkteco",
      country: "China",
      model: "uFace302",
      image: "/products/Attendance-3.png",
      specs: [
        "Capacity: 3,000 Face, 3,000 Palm, 4,000 Fingerprints",
        "Verification: Face, Palm, Fingerprint, RFID Card, Password",
        "Sub-second matching verification speed",
        "Integrated internal battery backup unit",
        "Channels: TCP/IP, USB, WiFi, 3G mobile options",
      ],
    },
  ],

  others: [
    {
      id: "crow-sh-smk",
      name: "Advanced Smoke Detector",
      manufacturer: "Crow",
      country: "Israel",
      model: "SH-SMK",
      image: "/products/Others-1.png",
      specs: [
        "High precision Photoelectric Smoke Detection",
        "Bright alert LED indicator during alarms",
        "Wireless communication up to 500m open space",
        "Built-in 85 dB audible warning horn",
        "Long-term 10-year battery life span",
      ],
    },
    {
      id: "syscall-dt-5010",
      name: "Multi Transmitter & Server Pager",
      manufacturer: "Syscall",
      country: "France",
      model: "DT-5010",
      image: "/products/Others-2.png",
      specs: [
        "Wireless restaurant & server paging controller",
        "Call pagers using simple numeric commands",
        "Function mode accessible via dedicated FUN key",
        "PC interface support with bundled desktop app",
        "Plug-and-play installation structure",
      ],
    },
    {
      id: "ness-k-1002",
      name: 'M1 GOLD 14" Automation Kit',
      manufacturer: "NESS Corporation",
      country: "Australia",
      model: "K-1002",
      image: "/products/Others-3.png",
      specs: [
        "Massive zone limit: expandable to 208 zones",
        "HVAC automation: links with thermostat boards",
        "Home Theatre control (Crestron, AMX, Control 4)",
        "Lighting controls (2-way C-Bus, Dynalite, X10)",
        "Superb industrial security logic",
      ],
    },
  ],
};

export function getCategoryBySlug(slug) {
  return productCategories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug) {
  return products[slug] ?? [];
}