"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Innovating the Future of Digital Transformation",
      description: "Empowering businesses with cutting-edge technology solutions to thrive in the digital age.",
      cta: "Explore Our Solutions",
    },
    ar: {
      title: "ابتكار مستقبل التحول الرقمي",
      description: "تمكين الشركات بحلول تكنولوجية متطورة للازدهار في العصر الرقمي.",
      cta: "استكشف حلولنا",
    },
  }

  const { title, description, cta } = content[language]

  return (
    <section id="hero-section" className={`relative h-screen flex items-center overflow-hidden bg-gradient-primary ${language === 'ar' ? 'text-right' : 'text-left'}`}>
      <Image
        src="/riyadh-city.jpg"
        alt="Riyadh City"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className={`container mx-auto px-6 relative z-10 flex justify-${language === 'ar' ? 'end' : 'start'} ${language === 'ar' ? 'sm:px-6' : 'sm:px-6'} px-0`}>
        <div className={`max-w-2xl text-white ${language === 'ar' ? 'ml-auto' : 'mr-auto'}`}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-white text-primary hover:bg-primary hover:text-white">
              <Link href="/services">{cta}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
