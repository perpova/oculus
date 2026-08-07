import { Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-16 h-9 rounded-full flex items-center transition-colors duration-300"
      style={{
        background: isDark ? "rgba(0, 0, 0, 0.35)" : "rgba(37, 56, 69, 0.15)",
        border: isDark
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(37, 56, 69, 0.2)",
      }}
    >
      {/* Glow layer behind the thumb */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: isDark ? "0px" : "calc(100% - 36px)",
          background:
            "radial-gradient(circle, rgba(199,203,106,0.65) 0%, rgba(199,203,106,0) 70%)",
          filter: "blur(6px)",
        }}
      />

      {/* Sliding glass thumb */}
      <div
        className="absolute top-1 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ease-out"
        style={{
          left: isDark ? "4px" : "calc(100% - 32px)",
          background: isDark
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(255, 255, 255, 0.55)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: isDark
            ? "1px solid rgba(255, 255, 255, 0.3)"
            : "1px solid rgba(37, 56, 69, 0.25)",
          boxShadow:
            "0 0 12px 2px rgba(199,203,106,0.6), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.4)",
        }}
      >
        {isDark ? (
          <Moon size={14} color="#f7f6f2" />
        ) : (
          <Sun size={14} color="#253845" />
        )}
      </div>
    </button>
  );
}