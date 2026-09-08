//import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
//import Solutions from "../components/Solutions";
import SolutionsCarousel from "../components/SolutionsCarousel";
import Industries from "../components/Industries";
import Brands from "../components/Brands"
import WhyChooseUs from "../components/WhyChooseUs"
import TakeFirstStep from "../components/TakeFirstStep"
//import QuickLinks from "../components/QuickLinks"
//import Footer from "../components/Footer"
//import ProductElite from "../components/ProductElite"
//import ProductPromotion from "./components/ProductPromotion";
//import ChatWidget from "./components/ChatWidget";
import EliteShowcase from "../components/EliteShowCase";



export default function App() {
  return (
    <div className="font-body">
      {/*<Navbar />*/}
      <Hero />
      <TrustedBy />
      {/*<Solutions />*/}
      <SolutionsCarousel />
      {/*<ProductElite />*/}
      <EliteShowcase />
      <Industries />
      <Brands />
      {/*<ProductPromotion />*/}
      <WhyChooseUs />
      <TakeFirstStep />
      {/*<QuickLinks />*/}
      {/*<Footer />*/}
      
    </div>
  );
}