// src/pages/EliteControlPage.jsx
//
// PLACEHOLDER — replace with the real EliteControl (Arrowhead Alarm Products,
// NZ) page. Kept minimal on purpose so /products/elitecontrol resolves
// and the app doesn't 404 or fail to build while that page is in progress.

import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function EliteControlPage() {
  return (
    <section className="min-h-screen bg-(--color-bg-primary) px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border
                     border-(--color-border) px-4 py-2 text-sm text-(--color-text-secondary)
                     transition-colors hover:border-(--color-accent-teal) hover:text-(--color-accent-teal)"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back home
        </Link>

        <div className="mb-2 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--color-accent-teal)/10 text-(--color-accent-teal)">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-(--color-accent-teal)">
            Coming soon
          </span>
        </div>

        <h1
          className="mb-3 bg-gradient-to-r from-white via-(--color-accent-teal) to-(--color-accent-lime)
                     bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
        >
          EliteControl (NZ)
        </h1>
        <p className="max-w-xl text-(--color-text-secondary)">
          The dedicated EliteControl page is under construction. This will feature
          the interactive Arrowhead Alarm Products ecosystem explorer.
        </p>
      </div>
    </section>
  );
}