import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import HomePage from "./pages/HomePage";
import SolutionPage from "./pages/SolutionPage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import EliteControlPage from "./pages/EliteControlPage"; // TODO: create this file if it doesn't exist yet
import IndustryPage from "./pages/IndustryPage";

import { ThemeProvider } from "./ThemeContext"; // keep your existing theme provider
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,               // Navbar + Footer + ChatWidget wrap everything
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/solutions/:slug", element: <SolutionPage /> },
      { path: "/products/elitecontrol", element: <EliteControlPage /> },
      { path: "/products/:categorySlug", element: <ProductCategoryPage /> },
      { path: "/industries/:slug", element: <IndustryPage /> } 
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);