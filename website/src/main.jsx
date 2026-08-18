import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import HomePage from "./pages/HomePage";
import SolutionPage from "./pages/SolutionPage";
import { ThemeProvider } from "./ThemeContext"; // keep your existing theme provider
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,               // Navbar + Footer + ChatWidget wrap everything
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/solutions/:slug", element: <SolutionPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);