"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function LatestInsights() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Latest Insights",
      insights: [
        {
          title: "The Future of AI in Business",
          excerpt: "Explore how artificial intelligence is reshaping industries and driving innovation.",
          link: "/blog/future-of-ai-in-business",
        },
        {
          title: "Cybersecurity in the Digital Age",
          excerpt: "Learn about the latest trends and best practices in cybersecurity for modern businesses.",
          link: "/blog/cybersecurity-in-digital-age",
        },
        {
          title: "Digital Transformation Success Stories",
          excerpt: "Discover how companies have successfully implemented digital transformation strategies.",
          link: "/blog/digital-transformation-success-stories",
        },
      ],
      cta: "Read More",
    },
    ar: {
      title: "أحدث الرؤى",
      insights: [
        {
          title: "مستقبل الذكاء الاصطناعي في الأعمال",
          excerpt: "استكشف كيف يعيد الذكاء الاصطناعي تشكيل الصناعات ويدفع الابتكار.",
          link: "/blog/future-of-ai-in-business",
        },
        {
          title: "الأمن السيبراني في العصر الرقمي",
          excerpt: "تعرف على أحدث الاتجاهات وأفضل الممارسات في الأمن السيبراني للشركات الحديثة.",
          link: "/blog/cybersecurity-in-digital-age",
        },
        {
          title: "قصص نجاح التحول الرقمي",
          excerpt: "اكتشف كيف نجحت الشركات في تنفيذ استراتيجيات التحول الرقمي.",
          link: "/blog/digital-transformation-success-stories",
        },
      ],
      cta: "اقرأ المزيد",
    },
  }

  const { title, insights, cta } = content[language]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{insight.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{insight.excerpt}</p>
                  <Button asChild variant="outline">
                    <Link href={insight.link}>{cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

