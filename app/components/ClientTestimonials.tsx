"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { Card, CardContent } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { motion } from "framer-motion"

export default function ClientTestimonials() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "What Our Clients Say",
      testimonials: [
        {
          name: "Ahmed Al-Saud",
          company: "Tech Innovations Co.",
          testimonial:
            "ICSCT transformed our digital infrastructure, resulting in a 40% increase in operational efficiency.",
          avatar: "/avatars/ahmed.jpg",
        },
        {
          name: "Fatima Al-Rashid",
          company: "Future Systems Ltd.",
          testimonial: "The AI-powered solutions provided by ICSCT have revolutionized our decision-making process.",
          avatar: "/avatars/fatima.jpg",
        },
        {
          name: "Mohammed Al-Qahtani",
          company: "Smart City Developers",
          testimonial: "ICSCT's IoT ecosystem has been instrumental in our smart city project's success.",
          avatar: "/avatars/mohammed.jpg",
        },
      ],
    },
    ar: {
      title: "ماذا يقول عملاؤنا",
      testimonials: [
        {
          name: "أحمد آل سعود",
          company: "شركة ابتكارات التكنولوجيا",
          testimonial: "قامت ICSCT بتحويل بنيتنا التحتية الرقمية، مما أدى إلى زيادة بنسبة 40٪ في الكفاءة التشغيلية.",
          avatar: "/avatars/ahmed.jpg",
        },
        {
          name: "فاطمة الرشيد",
          company: "أنظمة المستقبل المحدودة",
          testimonial: "لقد أحدثت الحلول المدعومة بالذكاء الاصطناعي التي قدمتها ICSCT ثورة في عملية صنع القرار لدينا.",
          avatar: "/avatars/fatima.jpg",
        },
        {
          name: "محمد القحطاني",
          company: "مطورو المدن الذكية",
          testimonial: "كان نظام إنترنت الأشياء من ICSCT عاملاً أساسياً في نجاح مشروع مدينتنا الذكية.",
          avatar: "/avatars/mohammed.jpg",
        },
      ],
    },
  }

  const { title, testimonials } = content[language]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="italic">&quot;{testimonial.testimonial}&quot;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

