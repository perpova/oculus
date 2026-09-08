import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, title, subtitle, children }) {
  // close on Escape, lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 py-10"
      onClick={onClose}
    >
      {/* blurred backdrop */}
      <div
        className="fixed inset-0 backdrop-blur-md"
        style={{ backgroundColor: "color-mix(in srgb, var(--color-bg) 70%, transparent)" }}
      />

      {/* glassy panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg sm:max-w-3xl rounded-3xl p-6 md:p-8 my-auto"
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-bg-sub-4) 55%, rgba(10, 22, 40, 0.65))",
          border: "1px solid color-mix(in srgb, var(--color-border-2) 60%, transparent)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.45)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{
            backgroundColor: "color-mix(in srgb, var(--color-white) 10%, transparent)",
            color: "var(--color-white)",
          }}
        >
          <X className="w-4 h-4" />
        </button>

        <h2
          className="text-2xl md:text-3xl font-semibold mb-2 pr-10"
          style={{ color: "var(--color-white)", fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm opacity-80 mb-6" style={{ color: "var(--color-white)" }}>
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </div>
  );
}