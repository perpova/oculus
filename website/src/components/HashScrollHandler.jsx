import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to an element matching the URL's #hash, once the destination page
// has rendered. Needed because footer/nav links can point to a section on a
// different page (e.g. clicking "#solutions" while on /contact-us).
export default function HashScrollHandler() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");

    // small delay lets the destination page finish rendering first
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}