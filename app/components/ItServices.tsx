"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Services() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our Innovative",
      title1: "Services",
      description:
        "We offer a wide range of innovative technology solutions to help your business thrive in the digital age.",
      services: [
        {
          title: "Web Development & Maintenance",
          link: "/services/web-development",
          description: "Custom web development solutions delivering fast, secure, and scalable websites for business success online",
          details: ["Custom Website Design", "E-commerce Platforms", "Content Management Systems (CMS)"],
        },
        {
          title: "Mobile App Development",
          link: "/services/mobile-development",
          description: "Innovative mobile app development for seamless, secure, and high-performance user experiences",
          details: ["Native Application Development", "Cross-Platform Solutions", "Mobile Optimization"],
        },
        {
          title: "Cybersecurity Solutions",
          link: "/services/cybersecurity",
          description: "Protecting businesses from cybersecurity threats with advanced security solutions",
          details: ["Threat Assessment", "Penetration Testing", "Continuous Monitoring"],
        },
        {
          title: "Consulting & Digital Strategy",
          link: "/services/consulting-digital-strategy",
          description: "We provide expert IT consulting and strategic roadmaps to drive digital innovation",
          details: ["IT Strategy Development", "Digital Transformation Roadmaps", "Technology Assessment"],
        },
        {
          title: "IT Infrastructure & Cloud Services",
          link: "/services/it-infrastructure-cloud-services",
          description: "Optimizing business efficiency with scalable cloud solutions",
          details: ["Infrastructure Management", "Cloud Services", "24/7 Support"],
        },
        {
          title: "Enterprise Resource Planning Solutions (ERP)",
          link: "/services/erp-solutions",
          description: "Streamlining operations with custom ERP & CRM solutions.",
          details: ["ERP Implementation", "Custom ERP Modules", "ERP Training"],
        },
        {
          title: "Testing and Quality Assurance",
          link: "/services/testing-qa",
          description: "Ensuring flawless performance with rigorous testing and quality assurance for reliable digital solutions.",
          details: ["Automated Testing", "Manual Testing", "Performance Testing"],
        },
      ],
      cta: "Learn More",
    },
    ar: {
      title: "خدماتنا",
      title1: "المبتكرة",
      description: "نقدم مجموعة واسعة من حلول التكنولوجيا المبتكرة لمساعدة عملك على الازدهار في العصر الرقمي.",
      services: [
        {
          title: "تطوير وصيانة الويب",
          description: "حلول تطوير ويب مخصصة تقدم مواقع سريعة وآمنة وقابلة للتوسع لتحقيق النجاح عبر الإنترنت.",
          details: ["تصميم مواقع ويب مخصصة", "منصات التجارة الإلكترونية", "أنظمة إدارة المحتوى (CMS)"],
        },
        {
          title: "تطوير تطبيقات الجوال",
          description: "تطوير تطبيقات جوال مبتكرة لتجارب مستخدم سلسة وآمنة وعالية الأداء.",
          details: ["تطوير التطبيقات الأصلية", "حلول متعددة المنصات", "تحسين الأداء للجوال"],
        },
        {
          title: "حلول الأمن السيبراني",
          description: "حماية الأعمال من التهديدات السيبرانية باستخدام حلول أمان متقدمة.",
          details: ["تقييم التهديدات", "اختبار الاختراق", "المراقبة المستمرة"],
        },
        {
          title: "الاستشارات والاستراتيجية الرقمية",
          description: "نقدم استشارات تقنية المعلومات وخطط استراتيجية لدفع الابتكار الرقمي.",
          details: ["تطوير استراتيجية تقنية المعلومات", "خرائط طريق التحول الرقمي", "تقييم التكنولوجيا"],
        },
        {
          title: "البنية التحتية لتكنولوجيا المعلومات وخدمات السحابة",
          description: "تحسين كفاءة الأعمال باستخدام حلول سحابية قابلة للتوسع.",
          details: ["إدارة البنية التحتية", "الخدمات السحابية", "الدعم على مدار الساعة"],
        },
        {
          title: "حلول تخطيط موارد المؤسسات (ERP)",
          description: "تبسيط العمليات باستخدام حلول ERP وCRM مخصصة.",
          details: ["تنفيذ ERP", "وحدات ERP مخصصة", "التدريب على ERP"],
        },
        {
          title: "الاختبار وضمان الجودة",
          description: "ضمان الأداء المثالي من خلال اختبارات دقيقة وضمان الجودة للحلول الرقمية الموثوقة.",
          details: ["الاختبار الآلي", "الاختبار اليدوي", "اختبار الأداء"],
        },
      ],
      cta: "اعرف المزيد",
    },
  }

  const { title, title1, description, services, cta } = content[language]

  return (
    <div className={`${language === "ar" ? "text-right" : ""}`}>
      <section className="w-full md:w-10/12 mx-auto py-10">
        <div className="container mx-auto">
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
                <div className="text-[#c132da]">
                  {title1}
                  <img src="/box2.svg" alt="Serve Icon" className="inline-block w-24 h-30 md:w-64 md:h-30 ml-2 pb-4 md:pb-8" />
                </div>
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
              className="text-lg md:text-2xl font-light mb-4 md:mb-8"
            >
              {description}
            </motion.p>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pb-2">
              <div className="col-span-1">
                <a href={language === "en" && 'link' in services[0] ? services[0].link : "#"} className="block">
                  <Card className={`pt-40 md:pt-80 rounded-2xl`} style={{ backgroundImage: "url('/webdevelopmentmaintainence.jpeg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                    <CardHeader>
                      <CardTitle className={`text-lg md:text-2xl font-bold text-white w-full md:w-52 ${language === 'ar' ? 'pt-10 md:w-60 pt-20' : ''}`}>{services[0].title}</CardTitle>
                      <div className={`md:w-3/4 h-2 mt-1 bg-gradient-to-r from-[#c132da] to-[#3e46db] ${language === 'ar' ? 'w-full md:w-full' : ''}`}></div>
                      <CardDescription className={`text-sm md:text-lg font-normal text-white w-full md:w-52 ${language === 'ar' ? 'w-full md:w-full' : ''}`}>{services[0].description}</CardDescription>
                    </CardHeader>
                  </Card>
                </a>
              </div>
              <div className="col-span-3">
                <div>
                  <div className="pb-2">
                    <a href={language === "en" && 'link' in services[2] ? services[2].link : "#"} className="block">
                      <Card className="h-40 md:h-64 pt-4 rounded-2xl relative" style={{ backgroundImage: "url('/cybersecurity.jpeg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <div className="absolute top-0 right-0 h-full w-full bg-[#0d0026] rounded-2xl opacity-30 z-0"></div>
                        <CardHeader className="relative z-10">
                          <CardTitle className={`text-lg md:text-2xl font-bold text-white w-full md:w-52 ${language === 'ar' ? 'pt-12 md:w-full pt-1' : ''}`}>{services[2].title}</CardTitle>
                          <div className={`h-2 mt-1 bg-gradient-to-r from-[#c132da] to-[#3e46db] ${language === 'ar' ? 'w-1/3 ml-auto' : 'w-1/5'}`}></div>
                          <CardDescription className={`text-sm md:text-lg font-normal text-white w-full md:w-52 ${language === 'ar' ? 'w-1/2 ml-auto md:w-1/2' : ''}`}>{services[2].description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <a href={language === "en" && 'link' in services[4] ? services[4].link : "#"} className="block">
                      <Card className="pt-14 md:pt-28 rounded-2xl" style={{ backgroundImage: "url('/ItInfra.jpeg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <CardHeader>
                          <CardTitle className={`text-lg md:text-2xl font-bold text-white w-full md:w-52 ${language === 'ar' ? 'pt-5 md:w-full' : ''}`}>{services[4].title}</CardTitle>
                          <div className={`w-1/2 h-2 mt-1 bg-gradient-to-r from-[#c132da] to-[#3e46db] ${language === 'ar' ? 'ml-auto' : ''}`}></div>
                          <CardDescription className={`text-sm md:text-lg font-normal text-white w-full md:w-52 ${language === 'ar' ? 'ml-auto' : ''}`}>{services[4].description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </a>
                    <a href={language === "en" && 'link' in services[5] ? services[5].link : "#"} className="block">
                      <Card className="pt-14 md:pt-28 rounded-2xl" style={{ backgroundImage: "url('/ERP.jpeg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <CardHeader>
                          <CardTitle className={`text-lg md:text-2xl font-bold text-white w-full md:w-72 ${language === 'ar' ? 'pt-12 md:w-full' : ''}`}>{services[5].title}</CardTitle>
                          <div className={`w-1/2 h-2 mt-1 bg-gradient-to-r from-[#c132da] to-[#3e46db] ${language === 'ar' ? 'ml-auto' : ''}`}></div>
                          <CardDescription className={`text-sm md:text-lg font-normal text-white w-full md:w-52 ${language === 'ar' ? 'ml-auto' : ''}`}>{services[5].description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <a href={language === "en" && 'link' in services[1] ? services[1].link : "#"} className="block">
                <Card className="pt-4 md:pt-8 rounded-2xl" style={{ backgroundImage: "url('/MobileApp.jpeg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                  <CardHeader>
                    <CardTitle className={`text-lg md:text-2xl font-bold text-white w-full md:w-52 ${language === 'ar' ? 'ml-auto' : ''}`}>{services[1].title}</CardTitle>
                    <div className={`w-1/3 h-2 mt-1 bg-gradient-to-r from-[#c132da] to-[#3e46db] ${language === 'ar' ? 'ml-auto' : ''}`}></div>
                    <CardDescription className={`text-sm md:text-lg font-normal text-white w-full md:w-60 ${language === 'ar' ? 'ml-auto' : ''}`}>{services[1].description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
              <a href={language === "en" && 'link' in services[6] ? services[6].link : "#"} className="block">
                <Card className="pt-4 md:pt-8 rounded-2xl" style={{ backgroundImage: "url('/Quality.jpeg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                  <CardHeader>
                    <CardTitle className={`text-lg md:text-2xl font-bold text-white w-full md:w-52 ${language === 'ar' ? 'ml-auto' : ''}`}>{services[6].title}</CardTitle>
                    <div className={`w-1/3 h-2 mt-1 bg-gradient-to-r from-[#c132da] to-[#3e46db] ${language === 'ar' ? 'ml-auto' : ''}`}></div>
                    <CardDescription className={`text-sm md:text-lg font-normal text-white w-full md:w-60 ${language === 'ar' ? 'ml-auto' : ''}`}>{services[6].description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}
