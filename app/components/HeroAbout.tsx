import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"


export default function HeroAbout() {
    const { language } = useLanguage()

      const content = {
        en: {
          title: "Our Story",
          description: "ICSCT (إكسيت) is a technology powerhouse, delivering digital transformation, cybersecurity, software development, and IT consulting.",
          description2: "We help government entities, enterprises, and startups thrive in the fast-evolving digital landscape by offering secure, scalable, and future-ready solutions.",
          cta: "Explore Our Solutions",
        },
        ar: {
          title: "قصتنا",
          description: "ICSCT (إكسيت) هي قوة تكنولوجية تقدم التحول الرقمي، الأمن السيبراني، تطوير البرمجيات، واستشارات تكنولوجيا المعلومات.",
          description2: "نساعد الجهات الحكومية والشركات الناشئة على الازدهار في المشهد الرقمي المتطور من خلال تقديم حلول آمنة وقابلة للتطوير وجاهزة للمستقبل.",
          cta: "استكشف حلولنا",
        },
      }

      const { title, description, description2, cta } = content[language]
      
  return (
    <div id="hero-section" className={` ${language === "ar" ? "text-right" : ""}`} style={{ backgroundColor: '#12004c' }}>
      <section className="relative w-full h-screen">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Image
            src="/about-banner.jpg"
            alt="About ICSCT"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </motion.div>
      <div className={`pt-64 md:pt-64 w-full relative z-10 flex justify-${language === 'ar' ? 'w-full ml-auto' : ''} pr-0 md:w-3/5 md:pr-0`}>
        <div className={`pt-4 text-white ${language === 'ar' ? 'ml-auto' : 'mr-auto'}`}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-4"
          >
            <div className="items-center px-16">
              {title}
            </div>
          </motion.h1>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-3xl px-20 -mb-12"
            >
            {description}
            <div className="pt-3">{description2}</div>
            </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          </motion.div>
        </div>
      </div>
      </section>
    </div>
  )
  }