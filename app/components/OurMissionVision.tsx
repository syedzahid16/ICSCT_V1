import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"


export default function OurMissionVision() {
  const { language } = useLanguage()

  const content = {
    en: {
    mission: {
      title: "Our ",
      title1: "Mission",
      text: "To provide high-quality technology and telecommunications services aligned with the latest digital advancements, with a focus on innovation, sustainability, and cybersecurity. We aim to build integrated solutions that help our clients across various sectors achieve digital transformation efficiently and effectively.",
    },
    vision: {
      title: "Our ",
      title1: "Vision",
      text: "To be a leading company in empowering digital transformation in the Kingdom of Saudi Arabia by offering innovative and sustainable technology solutions that fulfill the aspirations of Vision 2030. We strive to enhance the ability of government and private entities to develop their services and increase operational efficiency.",
    },
    },
    ar: {
    mission: {
      title:"",
      title1: "مهمتنا",
      text: "تقديم خدمات تكنولوجيا واتصالات عالية الجودة تتماشى مع أحدث التطورات الرقمية، مع التركيز على الابتكار والاستدامة والأمن السيبراني. نهدف إلى بناء حلول متكاملة تساعد عملائنا في مختلف القطاعات على تحقيق التحول الرقمي بكفاءة وفعالية.",
    },
    vision: {
      title: "",
      title1: "رؤيتنا",
      text: "أن نكون شركة رائدة في تمكين التحول الرقمي في المملكة العربية السعودية من خلال تقديم حلول تكنولوجية مبتكرة ومستدامة تحقق تطلعات رؤية 2030. نسعى لتعزيز قدرة الجهات الحكومية والخاصة على تطوير خدماتها وزيادة الكفاءة التشغيلية.",
    },
    },
  }

  const { mission , vision} = content[language]

  return (
    <section className="pt-14">
    <div className={`flex flex-col px-6 md:px-20 pb-10 justify-center ${language === "ar" ? "order-last" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 pb-16 md:pb-32 shadow-lg rounded-3xl"
        style={{ backgroundColor: '#ffffff' }}
         >
        <img
        src={`/mission.png`}
        alt="Icons"
        className="mx-auto w-20 h-20 md:w-28 md:h-28"
        />
        <div className="text-4xl md:text-7xl mb-2 font-thin text-center pt-5">{mission.title}<span className="text-[#c132da]">{mission.title1}</span></div> 
        
        <div  className="text-center text-lg md:text-2xl font-light pt-6 md:pt-10">{mission.text}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 pb-16 md:pb-32 shadow-lg rounded-3xl"
        style={{ backgroundColor: '#ffffff' }}
         >
        <img
        src={`/vision.png`}
        alt="Icons"
        className="mx-auto w-20 h-20 md:w-28 md:h-28"
        />
        <div className="text-4xl md:text-7xl mb-2 font-thin text-center pt-5">{vision.title}<span className="text-[#3e46db]">{vision.title1}</span></div>
        <div className="text-center text-lg md:text-2xl font-light pt-6 md:pt-10">{vision.text}</div>
      </motion.div>
      </div>
    </div>  
    </section>
  )
}