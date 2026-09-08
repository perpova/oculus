// src/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import QuickLinks from "./components/QuickLinks"
import Footer from "./components/Footer";
/*import ChatWidget from "./components/ChatWidget";*/
import ScrollToTop from "./components/ScrollToTop";
import HashScrollHandler from "./components/HashScrollHandler";
import { QuoteModalProvider } from "./context/QuoteModalContext";

export default function App() {
  return (
    
    <QuoteModalProvider>
      <ScrollToTop />
      <HashScrollHandler />
      <Navbar />
      <Outlet />
      <QuickLinks />
      <Footer />
      {/*<ChatWidget />*/}
    </QuoteModalProvider>
    
  );
}