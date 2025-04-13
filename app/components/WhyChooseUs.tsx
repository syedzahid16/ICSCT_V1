"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Why Choose ICSCT?",
      reasons: [
        { text: "Innovation Driven Approach", icon: "/path/to/icon1.svg" },
        { text: "Expertise You Can Trust", icon: "/path/to/icon2.svg" },
        { text: "Customer Centric Focus", icon: "/path/to/icon3.svg" },
        { text: "Seamless Digital Transformation", icon: "/path/to/icon4.svg" },
        { text: "Aligned with Vision 2030", icon: "/path/to/icon5.svg" },
      ],
    },
    ar: {
      title: "لماذا تختار ICSCT?",
      reasons: [
        { text: "خبرة في التقنيات المتطورة", icon: "/path/to/icon1.svg" },
        { text: "حلول مخصصة لاحتياجاتك الفريدة", icon: "/path/to/icon2.svg" },
        { text: "التزام بالابتكار والاستدامة", icon: "/path/to/icon3.svg" },
        { text: "سجل حافل بالتحولات الرقمية الناجحة", icon: "/path/to/icon4.svg" },
        { text: "دعم على مدار الساعة وتحسين مستمر", icon: "/path/to/icon5.svg" },
      ],
    },
  }

  const { title, reasons } = content[language]

  return (
    <section className="py-28 px-16 relative" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-20">
      <div className={`flex flex-col justify-center lg:col-span-2 ${language === 'ar' ? 'text-right lg:order-last' : ''}`}>
        <motion.h1
        className="text-7xl font-bold mb-4 text-gradient"
        style={{ background: 'linear-gradient(90deg, #c132da, #12004c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        >
        {title.split('').map((char, index) => (
          <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.05, delay: index * 0.05 }}
          >
          {char}
          </motion.span>
        ))}
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:col-span-3">
        {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-4 flex-row-reverse' : 'space-x-4'}`}
        >
          <img src={reason.icon} alt={`Icon for ${reason.text}`} className="w-9 h-10 li:order-last" />
          <span className="text-[#12004c] text-xl font-normal">{reason.text}</span>
        </motion.div>
        ))}
      </div>
      </div>
    </section>
  )
}