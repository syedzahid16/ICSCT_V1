"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About ",
      title1: "ICSCT",
      description: "At ICSCT, we blend innovation, technology, and strategy to transform businesses for the digital future. From cybersecurity and cloud solutions to web, mobile, and IT consulting, we create scalable, secure, and intelligent solutions tailored to your needs. With a vision to drive progress and efficiency, we empower organizations to adapt, grow, and lead in an ever-evolving digital landscape.",
    },
    ar: {
      title: "عن ICSCT",
      title1: "إكسيت",
      description: "في إكسيت، نمزج بين الابتكار والتكنولوجيا والاستراتيجية لقيادة التحول الرقمي. نقدم حلولًا ذكية، آمنة، وقابلة للتوسع في مجالات الأمن السيبراني، الخدمات السحابية، تطوير الويب والتطبيقات، والاستشارات التقنية. برؤية تركز على التقدم والكفاءة، نمكّن المؤسسات من التكيف، النمو، والريادة في عالم رقمي متطور باستمرار.",      
   },
  }
   const { title, title1, description } = content[language]

  return (
    <section className={`mx-auto px-4 ${language === "en" ? "sm:pl-28" : ""}`}>
      <div className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-[2fr_2fr] gap-6 sm:gap-1 items-center ${language === "ar" ? "text-right sm:pr-28 sm:gap-20" : ""}`}>
        <div className={`flex flex-col justify-center ${language === "ar" ? "sm:order-last" : ""} sm:col-span-1`}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl pt-10 sm:text-8xl mb-4 font-thin"
          >
            {title}
            <span className="text-[#c132da]">{title1}</span>
          </motion.h1>
          <div className="pt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              className="text-lg sm:text-2xl font-light mb-8"
            >
              {description}
              <div className="mt-6">
                {/* {description2} */}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end sm:col-span-1">
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
              className="h-auto object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
      <div
        className="w-full h-0.5 mt-6"
        style={{
          background: "linear-gradient(to right, #c132da, #3E46DB)",
        }}
      ></div>
    </section>
  );
}
