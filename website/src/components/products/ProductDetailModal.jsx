// src/components/products/ProductDetailModal.jsx
//
// Full-detail popup. Renders nothing when `product` is null.
// Closes on backdrop click, Escape key, or the close button.
// Backdrop uses backdrop-blur to blur whatever is behind it.

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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6
                 bg-black/60 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="w-full max-w-xl max-h-[86vh] overflow-y-auto rounded-2xl border
                   border-(--color-border-strong) bg-(--color-bg-secondary)
                   shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Image header */}
        <div className="relative flex h-56 items-center justify-center border-b border-(--color-border) bg-(--color-bg-sub)">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain p-8"
            />
          ) : (
            <ImageOff className="h-12 w-12 text-(--color-text-muted)" />
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center
                       rounded-full border border-(--color-border) bg-black/40
                       text-(--color-text-primary) transition-colors hover:bg-black/60"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-7 sm:p-8">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-(--color-offwhite)">
            {product.model}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-(--color-gold)">
            {product.name}
          </h2>

          <div className="mt-5 mb-6 flex gap-8 border-b border-(--color-border) pb-5">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-(--color-text-muted)">
                Manufacturer
              </p>
              <p className="mt-0.5 text-sm font-medium text-(--color-offwhite)">
                {product.manufacturer}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-(--color-text-muted)">
                Country
              </p>
              <p className="mt-0.5 text-sm font-medium text-(--color-offwhite)">
                {product.country}
              </p>
            </div>
          </div>

          <h4 className="mb-3.5 text-xs font-semibold uppercase tracking-wider text-(--color-text-muted)">
            Key specifications
          </h4>
          <ul className="flex flex-col gap-3">
            {product.specs.map((spec, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed">
                <span className="mt-0.5 font-bold text-(--color-accent-amber)">→</span>
                <span className="text-(--color-offwhite)">{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}