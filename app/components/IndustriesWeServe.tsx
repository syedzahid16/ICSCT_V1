"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { Card, CardHeader, CardTitle, CardDescription } from "../../components/ui/card"
import { motion } from "framer-motion"

export default function WhoWeServe() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Industries ",
      title1: "that",
      title2: "We ",
      title3: "Serve",
      description: "At ICSCT, we empower organizations across various industries with cutting-edge technology and digital solutions. Our tailored approach ensures that businesses, governments, and enterprises achieve operational excellence, security, and scalability.",
      services: [
        {
          title: "Government & Public Sector",
          description: "Secure IT Infrastructure and Digital Transformation",
        },
        {
          title: "Enterprises & Start-ups",
          description: "Scalable Technology Solutions for Growth",
        },
        {
          title: "Finance & Healthcare",
          description: "Advanced Security and Compliance Solutions",
        },
        {
          title: "Telecom & Cloud Providers",
          description: "Driving 5G IoT and Cloud Innovations",
        },
      ],
    },
    ar: {
      title: "الصناعات ",
      title1: "التي",
      title2: "نحن ",
      title3: "نخدمها",
      description: "في ICSCT، نمكّن المنظمات عبر مختلف الصناعات من خلال التكنولوجيا المتقدمة والحلول الرقمية. يضمن نهجنا المخصص تحقيق التميز التشغيلي والأمان وقابلية التوسع للشركات والحكومات والمؤسسات الكبرى.",
      services: [
        {
          title: "الحكومة والقطاع العام",
          description: "البنية التحتية الآمنة والتحول الرقمي",
        },
        {
          title: "الشركات والمؤسسات الناشئة",
          description: "حلول تكنولوجية قابلة للتوسع للنمو",
        },
        {
          title: "المالية والرعاية الصحية",
          description: "حلول متقدمة للأمان والامتثال",
        },
        {
          title: "الاتصالات ومزودو السحابة",
          description: "قيادة ابتكارات الجيل الخامس وإنترنت الأشياء والسحابة",
        },
      ],
    },
  }

  const { title, title1, title2, title3, description, services } = content[language]

  return (
    <section className="w-full px-4 py-10">
      <div className="container mx-auto pb-10">
        <div className={`flex flex-col justify-center ${language === 'ar' ? 'order-last' : ''}`}>
          <motion.h1
            className="text-4xl md:text-9xl font-thin text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "linear" }}
              style={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap", direction: language === 'ar' ? 'rtl' : 'ltr' }}
            >
              {title}
              <span className="text-[#3e46db]">{title1}</span>
                <div className="py-4">
                {title2}
                <span className="text-[#c132da]">{title3}</span>
                <img src="/box2.svg" alt="Serve Icon" className="inline-block w-24 h-30 md:w-64 md:h-30 ml-2 pb-4 md:pb-8" />
                </div>
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3 }}
            className="text-lg md:text-2xl mb-8 font-light"
          >
            {description}
          </motion.p>
        </div>
        <div>
          <div className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 ${language === 'ar' ? 'text-right' : ''}`}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <div>
                  <Card className={`rounded-none shadow-lg ${language === 'ar' ? 'h-96' : ''}`}>
                    <img src={`/${content.en.services[index].title.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}.jpeg`} alt={`${service.title} Icon`} className="w-full" />
                    <CardHeader>
                      <CardTitle className={`text-lg md:text-2xl w-44 font-bold text-[#12004c] ${language === 'ar' ? 'text-right pr-10 w-72' : ''}`}>{service.title}</CardTitle>
                      <div className={`w-3/4 h-2 mt-1 bg-gradient-to-r from-[#c132da] to-[#3e46db] ${language === 'ar' ? 'ml-auto' : ''}`}></div>
                      <CardDescription className={`text-sm md:text-md font-medium text-black ${language === 'ar' ? 'text-right' : ''}`}>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
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