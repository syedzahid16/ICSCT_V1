import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"


export default function OurVision() {
    const { language } = useLanguage()

    const content = {
        en: {
            vision: {
                title: "Our Vision",
                text: "To be a leading company in empowering digital transformation in the Kingdom of Saudi Arabia by offering innovative and sustainable technology solutions that fulfill the aspirations of Vision 2030. We strive to enhance the ability of government and private entities to develop their services and increase operational efficiency.",
            },
        },
        ar: {
            vision: {
                title: "رؤيتنا",
                text: "أن نكون شركة رائدة في تمكين التحول الرقمي في المملكة العربية السعودية من خلال تقديم حلول تكنولوجية مبتكرة ومستدامة تحقق تطلعات رؤية 2030. نسعى لتعزيز قدرة الجهات الحكومية والخاصة على تطوير خدماتها وزيادة الكفاءة التشغيلية.",
            },
        },
    }

    const { vision} = content[language]

    return (
          <div>
              <div className={`grid grid-cols-1 md:grid-cols-2 items-center ${language === "ar" ? "text-right" : ""}`}>
                <div className={ `justify-center ${language === "ar" ? "order-last" : ""}`}style={{ backgroundColor: '#12004c' }}>
                    <Image
                    src="/about-image.jpg"
                    alt="About ICSCT"
                    width={200}
                    height={150}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div>
                <div className={` flex flex-col px-20 py-20 justify-center ${language === "ar" ? "order-last" : ""}`}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=" text-7xl font-bold mb-4" style={{ background: 'linear-gradient(90deg, #c132da, #12004c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                {vision.title}
                    {vision.text}

            </motion.h1>
                </div>
              </div>
              </div>
          </div>
    )
}