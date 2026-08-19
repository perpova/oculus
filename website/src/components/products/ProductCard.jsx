// src/components/products/ProductCard.jsx
//
// Vertical product card: image on top, details below.
// Adjust the `bg-(--color-*)` / `text-(--color-*)` variable names below
// to match whatever tokens already live in your theme.css — these are
// placeholders following the same v4 CSS-variable pattern used elsewhere
// (e.g. Brands.jsx, ProductElite.jsx).

import { ArrowRight, ImageOff } from "lucide-react";

export default function ProductCard({ product, onSeeMore }) {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-2xl border
                 border-(--color-border) bg-(--color-bg-sub)
                 transition-all duration-300 hover:border-(--color-border-strong)
                 hover:-translate-y-0.5"
    >
      {/* Image */}
      <div
        className="relative w-full h-48 shrink-0 flex items-center justify-center
                   overflow-hidden bg-(--color-bg-secondary) border-b border-(--color-white)/50"
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain p-6"
            loading="lazy"
          />
        ) : (
          <ImageOff className="h-8 w-8 text-(--color-text-muted)" />
        )}

        <span
          className="absolute bottom-3 right-3 rounded-full border border-(--color-border)
                     bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-wider
                     text-(--color-text-muted)"
        >
          {product.country}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          {/*<span className="text-[11px] font-semibold uppercase tracking-wider text-(--color-accent-amber)">
            {product.model}
          </span>*/}
          <h3 className="mt-1 text-base font-semibold leading-snug text-(--color-gold)">
            {product.name}
          </h3>
        </div>

        <div className="flex flex-col gap-2">
          <Meta label="Manufacturer" value={product.manufacturer} />
          <Meta label="Country" value={product.country} />
          <Meta label="Model No." value={product.model} />
        </div>

        <div className="mt-auto flex justify-end pt-2">
          <button
            type="button"
            onClick={() => onSeeMore(product)}
            className="inline-flex items-center gap-2 rounded-full border
                       border-(--color-border-strong) px-4 py-2 text-sm font-semibold
                       text-(--color-offwhite)/60 transition-colors duration-200
                       hover:bg-(--color-accent-lime)/10 hover:border-(--color-accent-lime)"
          >
            See more
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[10px] font-medium uppercase tracking-wider text-(--color-text-muted)">
        {label}
      </span>
      <span className="text-sm font-medium text-(--color-white)/80">{value}</span>
    </div>
  );
}