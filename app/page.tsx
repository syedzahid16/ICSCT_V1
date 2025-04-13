"use client"

import { useLanguage } from "./contexts/LanguageContext"
import HeroSection from "./components/HeroSection"
import CTASection from "./components/CTASection"
import WhoisICSCT from "./components/WhoWeAre"
import WhoWeServe1 from "./components/IndustriesWeServe"
import ItServices from "./components/ItServices"
import DesignServices from "./components/DesignServices"

export default function Home() {
  const { language } = useLanguage()

  return (
    <div
      className={`${language === "ar" ? "text-right" : ""}`}
      style={{
        backgroundColor: "#F5F4F4",
        scrollBehavior: "smooth",
        overflowX: "hidden", // Prevent horizontal scrolling
      }}
    >
      <HeroSection />
      <WhoisICSCT />
      <WhoWeServe1 />
      <ItServices />
      <DesignServices />
      <CTASection />
    </div>
  )
}
