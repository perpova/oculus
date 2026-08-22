import { useParams, Navigate } from "react-router-dom";
import SolutionTemplate from "../components/SolutionTemplate";
import { getSolutionBySlug, getAllSolutions } from "../data/Solutions";

export default function SolutionPage() {
  const { slug } = useParams();
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return <Navigate to="/" replace />;
  }

  const otherSolutions = getAllSolutions().filter((s) => s.slug !== slug);

  return <SolutionTemplate solution={solution} otherSolutions={otherSolutions} />;
}