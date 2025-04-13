"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Values() {
  const { language } = useLanguage()
  
  const content = {
    en: {
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
      const {  values } = content[language]

      return (
      <div className={`mx-auto px-4 py-10 ${language === "ar" ? "text-right" : ""}`}>
        <section>
          <motion.div>
          <div className={`flex flex-col justify-center ${language === 'ar' ? 'order-last' : ''}`}>
      <motion.h1
        className="text-5xl md:text-9xl font-thin text-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, ease: "linear" }}
          style={{
        display: "inline-block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        direction: language === "ar" ? "rtl" : "ltr",
          }}
        >
          <div className="px-4 md:px-16 text-[#c132da]">
        {values.title}
        <img
          src="/box2.svg"
          alt="Serve Icon"
          className="inline-block w-24 h-30 md:w-64 md:h-30 ml-2 pb-4 md:pb-8"
        />
          </div>
        </motion.span>
      </motion.h1>
    </div>
            <div className={`flex flex-col px-4 md:px-20 pb-10 justify-center ${language === "ar" ? "order-last" : ""}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {values.list.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="p-4 md:p-6 pb-16 md:pb-32 shadow-lg rounded-3xl"
              style={{ backgroundColor: '#ffffff' }}
            >
              <img
              src={`/${content.en.values.list[index].title.toLowerCase()}.svg`}
              alt="Icons"
              className="mx-auto w-20 h-20 md:w-28 md:h-28"
              />
              <h3 style={{ background: '#12004c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="text-lg md:text-xl font-bold mb-2 text-center">{value.title}</h3>
              <p style={{ background: '#12004c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="text-center text-sm md:text-lg font-light">{value.description}</p>
            </motion.div>
            ))}
          </div>  
          </div>
          </motion.div>
          </section>
        </div>
        
          )
        }
