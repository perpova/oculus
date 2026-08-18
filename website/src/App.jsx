// src/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import QuickLinks from "./components/QuickLinks"
import Footer from "./components/Footer";
/*import ChatWidget from "./components/ChatWidget";*/
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <QuickLinks />
      <Footer />
      {/*<ChatWidget />*/}
    </>
  );
}