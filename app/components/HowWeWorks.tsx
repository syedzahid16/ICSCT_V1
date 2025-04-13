"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Heading1 } from "lucide-react"

export default function HowWeWork() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "How We Work?",
      description: "We follow a structured, innovative, and agile methodology to ensure that our clients receive cutting-edge solutions that are not only scalable but also aligned with their business objectives. Here’s a deep dive into our 4-step approach to delivering excellence.",
      services: [
        {
          title: "Understanding Client Needs",
          description:
            "Before creating any solution, we deeply analyze our clients' business challenges, industry trends, and long-term goals. This stage is crucial for ensuring that the final product is customized, efficient, and future-proof.",
        },
        {
          title: "Designing Innovative, Scalable Solutions",
          description: "Once we gather all essential requirements, our team focuses on designing intelligent, flexible, and innovative solutions that align with business needs.",
        },
        {
          title: "Implementation with the Latest Tech",
          description: "With a robust design in place, we bring the solution to life using the latest advancements in AI, Cloud, Blockchain, and Automation.",
        },
      ],
    },
    ar: {
      title: "كيف نعمل؟",
      description:":نتبع منهجية منظمة ومبتكرة ومرنة لضمان حصول عملائنا على حلول متطورة ليست فقط قابلة للتوسيع ولكن أيضًا متماشية مع أهدافهم التجارية. إليك نظرة عميقة على نهجنا المكون من 4 خطوات لتقديم التميز.",
      services: [
        {
          title: "فهم احتياجات العميل",
          description: ".قبل إنشاء أي حل، نحلل بعمق تحديات أعمال عملائنا، واتجاهات الصناعة، والأهداف على المدى الطويل. تعتبر هذه المرحلة حاسمة لضمان أن يكون المنتج النهائي مخصصًا وفعالًا ومستقبليًا.",
        },
        {
          title: "تصميم حلول مبتكرة وقابلة للتوسع",
          description: ".بمجرد جمع المتطلبات الأساسية، يركز فريقنا على تصميم حلول ذكية ومرنة ومبتكرة تتماشى مع احتياجات الأعمال",
        },
        {
          title: "التنفيذ بأحدث التقنيات",
          description: ".من خلال تصميم قوي، نقوم بتحويل الحل إلى واقع باستخدام أحدث التقنيات مثل الذكاء الاصطناعي والسحابة والبلوك تشين والأتمتة",
        },
      ],
    },
  }

  const { title,description , services } = content[language]

  return (
    <section className="py-16 px-4 bg-[#12004c] text-white">
      <div className="container mx-auto">
      <h1 className="text-7xl font-bold mb-4 text-gradient" style={{ background: 'linear-gradient(90deg, #c132da, #3ba2ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {title}
          </h1>
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-l mb-8"
      >
        {description}
      </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 flex flex-col"
            >
            <Card className="h-full rounded-none border-2 flex-grow" style={{ background: 'linear-gradient(to top right,rgb(111, 10, 129) 1%,rgb(21, 4, 83) 15%)', borderImage: 'linear-gradient(to right, #12004c 50%, #c132da 1%) ', minHeight: '300px' }}>
                <CardHeader className="mb-4 text-center">
                <img src="/path/to/icon1.svg" alt="Icon" className="w-12 h-12 mx-auto" />
                <CardTitle className="text-white px-3 mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
                </CardHeader>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

