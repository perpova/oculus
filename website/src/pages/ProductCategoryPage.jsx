// src/pages/ProductCategoryPage.jsx
//
// Route: /products/:categorySlug
// One template reused by every category — the URL param decides which
// category's products to render. Wire it up in your router, e.g.:
//
//   <Route path="/products/:categorySlug" element={<ProductCategoryPage />} />
//
// (Keep EliteControl on its own dedicated route/page as planned — it isn't
// part of this data-driven list.)

import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getCategoryBySlug, getProductsByCategory } from "../data/products";
import ProductCard from "../components/products/ProductCard";
import ProductDetailModal from "../components/products/ProductDetailModal";

export default function ProductCategoryPage() {
  const { categorySlug } = useParams();
  const [activeProduct, setActiveProduct] = useState(null);

  const category = getCategoryBySlug(categorySlug);
  const items = getProductsByCategory(categorySlug);

  if (!category) {
    // Unknown slug — send back to the main products/homepage section.
    return <Navigate to="/" replace />;
  }

  const Icon = category.icon;

  return (
    <section className="min-h-screen bg-(--color-bg-primary) px-6 pt-32 pb-14 sm:px-10 sm:pt-32 sm:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-3 flex items-center gap-3">
          {Icon && (
            <span className="main-heading flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--color-accent-teal)/10 text-(--color-accent-teal)">
              <Icon className="h-10 w-10" />
            </span>
          )}
          <h1
            className="main-heading
                       bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
          >
            {category.label}
          </h1>
        </div>

        <p className="mb-12 max-w-xl text-(--color-text-secondary)">{category.desc}</p>

        {items.length === 0 ? (
          <p className="text-(--color-text-muted)">
            No products in this category yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} onSeeMore={setActiveProduct} />
            ))}
          </div>
        )}
      </div>

      <ProductDetailModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </section>
  );
}