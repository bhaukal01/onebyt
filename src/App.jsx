import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
import OurTeam from "./pages/OurTeam";

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
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
