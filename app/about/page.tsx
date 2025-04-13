"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"
import HeroAbout from "../components/HeroAbout"
import AboutMain from "../components/AboutMain"
import OurMission from "../components/OurMissionVision"
import OurVision from "../components/OurVision"
import OurValues from "../components/OurValues"
import OurMissionVision from "../components/OurMissionVision"

export default function About() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About ICSCT",
      description: "At ICSCT, we blend innovation, technology, and strategy to transform businesses for the digital future. From cybersecurity and cloud solutions to web, mobile, and IT consulting, we create scalable, secure, and intelligent solutions tailored to your needs. With a vision to drive progress and efficiency, we empower organizations to adapt, grow, and lead in an ever-evolving digital landscape.",
      mission: {
        title: "Our Mission",
        text: "To provide high-quality technology and telecommunications services aligned with the latest digital advancements, with a focus on innovation, sustainability, and cybersecurity. We aim to build integrated solutions that help our clients across various sectors achieve digital transformation efficiently and effectively.",
      },
      vision: {
        title: "Our Vision",
        text: "To be a leading company in empowering digital transformation in the Kingdom of Saudi Arabia by offering innovative and sustainable technology solutions that fulfill the aspirations of Vision 2030. We strive to enhance the ability of government and private entities to develop their services and increase operational efficiency.",
      },
      values: {
        title: "Our Values",
        list: [
          {
            title: "Professionalism",
            description: "Commitment to the highest standards of quality and accuracy in service delivery.",
          },
          {
            title: "Innovation",
            description:
              "Continuous pursuit of the latest technologies and the development of creative solutions that meet customers' expectations.",
          },
          {
            title: "Transparency",
            description: "Clarity in all dealings, with honesty and integrity in every aspect of our business.",
          },
          {
            title: "Customer-Centric",
            description: "Understanding clients' needs and providing solutions specifically tailored to them.",
          },
          {
            title: "Sustainability",
            description:
              "Considering future and environmental dimensions when adopting and delivering technological solutions.",
          },
        ],
      },
    },
    ar: {
      title: "عن ICSCT",
      description: "في إكسيت، نمزج بين الابتكار والتكنولوجيا والاستراتيجية لقيادة التحول الرقمي. نقدم حلولًا ذكية، آمنة، وقابلة للتوسع في مجالات الأمن السيبراني، الخدمات السحابية، تطوير الويب والتطبيقات، والاستشارات التقنية. برؤية تركز على التقدم والكفاءة، نمكّن المؤسسات من التكيف، النمو، والريادة في عالم رقمي متطور باستمرار.",      
      mission: {
        title: "مهمتنا",
        text: "تقديم خدمات تكنولوجيا واتصالات عالية الجودة تتماشى مع أحدث التطورات الرقمية، مع التركيز على الابتكار والاستدامة والأمن السيبراني. نهدف إلى بناء حلول متكاملة تساعد عملائنا في مختلف القطاعات على تحقيق التحول الرقمي بكفاءة وفعالية.",
      },
      vision: {
        title: "رؤيتنا",
        text: "أن نكون شركة رائدة في تمكين التحول الرقمي في المملكة العربية السعودية من خلال تقديم حلول تكنولوجية مبتكرة ومستدامة تحقق تطلعات رؤية 2030. نسعى لتعزيز قدرة الجهات الحكومية والخاصة على تطوير خدماتها وزيادة الكفاءة التشغيلية.",
      },
      values: {
        title: "قيمنا",
        list: [
          { title: "الاحترافية", description: "الالتزام بأعلى معايير الجودة والدقة في تقديم الخدمات." },
          {
            title: "الابتكار",
            description: "السعي المستمر وراء أحدث التقنيات وتطوير حلول إبداعية تلبي توقعات العملاء.",
          },
          {
            title: "الشفافية",
            description: "الوضوح في جميع التعاملات، مع الصدق والنزاهة في كل جانب من جوانب أعمالنا.",
          },
          { title: "التركيز على العميل", description: "فهم احتياجات العملاء وتقديم حلول مصممة خصيصًا لهم." },
          { title: "الاستدامة", description: "مراعاة الأبعاد المستقبلية والبيئية عند تبني وتقديم الحلول التكنولوجية." },
        ],
      },
    },
  }



  return (
    <div className={` ${language === "ar" ? "text-right" : ""}`} 
    style={{
      backgroundColor: "#F5F4F4",
      scrollBehavior: "smooth",
      overflowX: "hidden", // Prevent horizontal scrolling
    }}>
      <HeroAbout />
      <AboutMain />
      <OurMissionVision />
      <OurValues />
    </div>
  )
}
