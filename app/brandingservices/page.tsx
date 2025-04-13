"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Branding Services",
      description:
        "We offer a wide range of innovative technology solutions to help your business thrive in the digital age.",
      services: [
        {
          title: "Web Development",
          description: "Custom website design, e-commerce platforms, and content management systems.",
          details: ["Custom Website Design", "E-commerce Platforms", "Content Management Systems (CMS)"],
        },
        {
          title: "Mobile Development",
          description: "Native and cross-platform mobile app development for iOS and Android.",
          details: ["Native Application Development", "Cross-Platform Solutions", "Mobile Optimization"],
        },
        {
          title: "Consultation",
          description: "IT strategy development, digital transformation roadmaps, and technology assessment.",
          details: ["IT Strategy Development", "Digital Transformation Roadmaps", "Technology Assessment"],
        },
        {
          title: "Cybersecurity",
          description: "Threat assessment, penetration testing, and continuous monitoring services.",
          details: ["Threat Assessment", "Penetration Testing", "Continuous Monitoring"],
        },
        {
          title: "Testing and Quality Assurance",
          description: "Automated testing, manual testing, and performance testing services.",
          details: ["Automated Testing", "Manual Testing", "Performance Testing"],
        },
        {
          title: "Managing Client IT Services",
          description: "Infrastructure management, cloud services, and 24/7 IT support.",
          details: ["Infrastructure Management", "Cloud Services", "24/7 Support"],
        },
        {
          title: "Enterprise Resource Planning (ERP)",
          description: "ERP implementation, custom modules development, and training services.",
          details: ["ERP Implementation", "Custom ERP Modules", "ERP Training"],
        },
        {
          title: "Design and Branding Services",
          description: "UI/UX design, branding strategies, and marketing collateral creation.",
          details: ["UI/UX Design", "Branding Strategies", "Marketing Collateral"],
        },
      ],
      cta: "Learn More",
    },
    ar: {
      title: "خدماتنا",
      description: "نقدم مجموعة واسعة من حلول التكنولوجيا المبتكرة لمساعدة عملك على الازدهار في العصر الرقمي.",
      services: [
        {
          title: "تطوير الويب",
          description: "تصميم مواقع الويب المخصصة، منصات التجارة الإلكترونية، وأنظمة إدارة المحتوى.",
          details: ["تصميم مواقع الويب المخصصة", "منصات التجارة الإلكترونية", "أنظمة إدارة المحتوى (CMS)"],
        },
        {
          title: "تطوير تطبيقات الجوال",
          description: "تطوير تطبيقات الجوال الأصلية ومتعددة المنصات لـ iOS و Android.",
          details: ["تطوير التطبيقات الأصلية", "حلول متعددة المنصات", "تحسين الأداء للجوال"],
        },
        {
          title: "الاستشارات",
          description: "تطوير استراتيجية تكنولوجيا المعلومات، خرائط طريق التحول الرقمي، وتقييم التكنولوجيا.",
          details: ["تطوير استراتيجية تكنولوجيا المعلومات", "خرائط طريق التحول الرقمي", "تقييم التكنولوجيا"],
        },
        {
          title: "الأمن السيبراني",
          description: "تقييم التهديدات، اختبار الاختراق، وخدمات المراقبة المستمرة.",
          details: ["تقييم التهديدات", "اختبار الاختراق", "المراقبة المستمرة"],
        },
        {
          title: "الاختبار وضمان الجودة",
          description: "خدمات الاختبار الآلي، الاختبار اليدوي، واختبار الأداء.",
          details: ["الاختبار الآلي", "الاختبار اليدوي", "اختبار الأداء"],
        },
        {
          title: "إدارة خدمات تكنولوجيا المعلومات للعملاء",
          description: "إدارة البنية التحتية، خدمات السحابة، ودعم تكنولوجيا المعلومات على مدار الساعة.",
          details: ["إدارة البنية التحتية", "الخدمات السحابية", "الدعم على مدار الساعة"],
        },
        {
          title: "تخطيط موارد المؤسسات (ERP)",
          description: "تنفيذ ERP، تطوير الوحدات المخصصة، وخدمات التدريب.",
          details: ["تنفيذ ERP", "وحدات ERP المخصصة", "التدريب على ERP"],
        },
        {
          title: "خدمات التصميم والعلامات التجارية",
          description: "تصميم واجهة المستخدم وتجربة المستخدم، استراتيجيات العلامات التجارية، وإنشاء المواد التسويقية.",
          details: ["تصميم واجهة المستخدم وتجربة المستخدم", "استراتيجيات العلامات التجارية", "المواد التسويقية"],
        },
      ],
      cta: "اعرف المزيد",
    },
  }

  const { title, description, services, cta } = content[language]

  return (
    <div className={`container mx-auto px-4 py-16 ${language === "ar" ? "text-right" : ""}`}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Image
          src="/itservices-banner.jpg"
          alt="Our Services"
          width={1200}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl font-bold mb-4"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl mb-12"
      >
        {description}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
              <CardContent className="pt-4">
                <Button asChild variant="outline">
                  <Link href={`/itservices/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    {cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

