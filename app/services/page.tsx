"use client"

import { useLanguage } from "../contexts/LanguageContext"
import HeroITServices from "../components/HeroItServices"
import ItServices from "../components/ItServices"
import DesignServices from "../components/DesignServices"

export default function Services() {
  const { language } = useLanguage()
  return (
    <div className={`${language === "ar" ? "text-right" : ""}`}>
      <HeroITServices />
      <ItServices/>
      <DesignServices />
    </div>
  )
}

