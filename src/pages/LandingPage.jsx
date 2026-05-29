import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import ContactSection from "../components/landing/ContactSection";
import HeroSection from "../components/landing/HeroSection";
import PlansSection from "../components/landing/PlansSection";
import ProvidersSection from "../components/landing/ProvidersSection";
import ServicesSection from "../components/landing/ServicesSection";

function LandingPage() {
  const [activeTab, setActiveTab] = useState("deployment");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const isCoarsePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    const isSmallScreen =
      typeof window !== "undefined" && window.innerWidth < 768;

    if (isCoarsePointer || isSmallScreen) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.2,
    });

    let frameId = 0;

    const frame = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(frame);
    };

    frameId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [reduceMotion]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(
          "request submitted. our deployment team will contact you shortly.",
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("failed: " + (data.error || "unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("network error processing submission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="home" className="bg-black text-white">
      <HeroSection />
      <ServicesSection />
      <ProvidersSection />
      <PlansSection
        activeTab={activeTab}
        onTabChange={setActiveTab}
        reduceMotion={reduceMotion}
      />
      <ContactSection
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

export default LandingPage;
