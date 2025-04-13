"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Who We ",
      title1: "Are?",
      description: "We are Innovative & Creative Solutions for Communications and Technology (ICSCT)—a forward-thinking IT and telecom company shaping the digital future of Saudi Arabia. With a passion for innovation, cybersecurity, and sustainability, we empower businesses and government entities to streamline operations, enhance security, and scale efficiently.",
      description2: "Aligned with Vision 2030, we deliver cutting-edge web & mobile solutions, IT consulting, ERP systems, branding, and cloud services—all tailored for a smarter, connected world. At ICSCT, we don’t just build technology—we craft solutions that drive growth, efficiency, and success in the ever-evolving digital landscape.",
    },
    ar: {
      title: "من ",
      title1: "نحن؟",
      description: "نحن حلول مبتكرة وإبداعية للاتصالات والتكنولوجيا (ICSCT)—شركة تقنية واتصالات متقدمة تشكل المستقبل الرقمي للمملكة العربية السعودية. بشغف نحو الابتكار، الأمن السيبراني، والاستدامة، نمكّن الشركات والجهات الحكومية من تحسين العمليات، وتعزيز الأمان، والتوسع بكفاءة.",
      description2: "تماشياً مع رؤية 2030، نقدم حلولاً متطورة للويب والتطبيقات، استشارات تقنية، أنظمة تخطيط موارد المؤسسات، العلامات التجارية، والخدمات السحابية—كلها مصممة لعالم أكثر ذكاءً وترابطاً. في ICSCT، نحن لا نبني التكنولوجيا فقط—بل نصنع حلولاً تدفع النمو، الكفاءة، والنجاح في المشهد الرقمي المتطور باستمرار.",
    },
  }
  const { title, title1, description, description2 } = content[language]

  return (
    <section className={`mx-auto px-4 ${language === "en" ? "md:pl-28" : ""}`}>
      <div
        className={`grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-6 items-center ${
          language === "ar" ? "text-right md:pr-28 md:gap-20" : ""
        }`}
      >
        <div
          className={`flex flex-col justify-center ${
            language === "ar" ? "md:order-last" : ""
          } md:col-span-1`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl pt-10 md:text-8xl mb-4 font-thin"
          >
            {title}
            <span className="text-[#c132da]">{title1}</span>
          </motion.h1>
          <div className="pt-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              className="text-lg md:text-xl font-light mb-8"
            >
              {description}
              <div className="mt-6">{description2}</div>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end md:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/Arab-man.svg"
              alt="About ICSCT"
              width={550}
              height={400}
              className="object-contain rounded-lg"
            />
          </motion.div>
        </div>
      </div>
      <div
        className="w-full h-0.5"
        style={{
          background: "linear-gradient(to right, #c132da, #3E46DB)",
        }}
      ></div>
    </section>
  )
}