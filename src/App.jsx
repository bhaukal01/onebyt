import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./pages/mgu/styles/index.css";
import "./pages/mgu/styles/ranks.css";
import "./pages/mgu/styles/crates.css";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingDelivery from "./pages/ShippingDelivery";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Plans from "./pages/Plans";
import WebServices from "./pages/WebServices";
import MinecraftServices from "./pages/MinecraftServices";
import RefundPolicy from "./pages/RefundPolicy";

import Index from "./pages/mgu/Index.jsx";
import Ranks from "./pages/mgu/Ranks.jsx";
import Crates from "./pages/mgu/Crates.jsx";
import RankUp from "./pages/mgu/RankUp.jsx";
import Buy from "./pages/mgu/Buy.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-delivery" element={<ShippingDelivery />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/web-services" element={<WebServices />} />
        <Route path="/minecraft-services" element={<MinecraftServices />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/mgu" element={<Index />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/crates" element={<Crates />} />
        <Route path="/rankup" element={<RankUp />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
