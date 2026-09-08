// src/components/products/ProductDetailModal.jsx
//
// Full-detail popup. Renders nothing when `product` is null.
// Closes on backdrop click, Escape key, or the close button.
// Horizontal layout: solid-color image panel on the left, content on the
// right — sized to fit its content, no internal scrolling.

import { useEffect } from "react";
import { X, ImageOff } from "lucide-react";

export default function ProductDetailModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl
                   border border-(--color-border) bg-(--color-bg-secondary)
                   shadow-2xl sm:flex-row"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center
                     rounded-full border border-(--color-olive-light)
                     text-(--color-bg-sub) transition-colors
                     hover:border-(--color-bg-sub) "
        >
          <X className="h-4 w-4" />
        </button>

        {/* Image panel — left side, solid background */}
        <div
          className="relative flex h-56 w-full shrink-0 items-center justify-center sm:h-auto sm:w-1/3"
          style={{ backgroundColor: "var(--color-bg-sub)" }}
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-[70%] w-[70%] object-contain"
            />
          ) : (
            <ImageOff className="h-12 w-12 text-white/60" />
          )}
        </div>

        {/* Content — right side */}
        <div className="flex flex-1 flex-col justify-center p-7 sm:p-10"
             style={{ backgroundColor: "var(--color-white)" }}>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-(--color-olive)">
            {product.model}
          </span>
          <h2 className="mt-1 text-2xl font-bold text-(--color-teal-dark)">
            {product.name}
          </h2>

          <div className="mt-4 mb-5 flex gap-8 border-b border-(--color-border) pb-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-(--color-olive)">
                Manufacturer
              </p>
              <p className="mt-0.5 text-sm font-medium text-(--color-teal-dark)">
                {product.manufacturer}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-(--color-olive)">
                Country
              </p>
              <p className="mt-0.5 text-sm font-medium text-(--color-real-dark)">
                {product.country}
              </p>
            </div>
          </div>

          <ul className="flex flex-col gap-2.5">
            {product.specs.map((spec, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-(--color-accent-teal)" />
                <span className="text-(--color-teal-dark)">{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}