"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  // Update the HTML lang attribute and apply font classes when language changes
  useEffect(() => {
    const htmlElement = document.documentElement

    // Set the lang attribute for accessibility and proper font selection
    htmlElement.setAttribute("lang", language)

    // Apply language-specific classes
    if (language === "en") {
      document.body.classList.add("font-english")
      document.body.classList.remove("font-arabic")
    } else {
      document.body.classList.add("font-arabic")
      document.body.classList.remove("font-english")
    }
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
