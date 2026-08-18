import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't reset scroll position on navigation by default —
 * client-side route changes just swap content in place, wherever the
 * page happened to be scrolled. This component watches the URL and
 * jumps back to the top every time it changes.
 *
 * Mounted once in App.jsx (the layout), so it covers every route
 * automatically — no need to add it per-page.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}