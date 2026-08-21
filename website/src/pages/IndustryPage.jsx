// src/pages/IndustryPage.jsx
//
// Thin page wrapper, same split as SolutionPage.jsx: handles the route
// param, looks up the matching record, and hands it to the template.
// All rendering lives in components/IndustryTemplate.jsx.

import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import industriesData from "../data/industriesData";
import IndustryTemplate from "../components/IndustryTemplate";

export default function IndustryPage() {
  const { slug } = useParams();
  const industry = industriesData.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return <IndustryTemplate industry={industry} />;
}