"use client"

import { useLanguage } from "../../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ConsultingDigitalStrategy() {
  const { language } = useLanguage()

  const content = {
    en: {
      toptitle: "Digital Strategy &",
      toptitle1: "Consulting Services",
      topdescription: "Navigating the Future with Insight, Innovation, and Intelligent Transformation",
      description: "At ICSCT (إكسيت), we don’t just offer technology—we guide organizations through meaningful transformation. In a world where change is constant and digital is the default, having the right strategy is the key to sustainable success.",
      title: "Consulting",
      title1: "& Digital",
      title2: "Strategy",
      description1: "Our Consulting & Digital Strategy Services are built to help businesses—from startups to government agencies—make smart technology decisions, implement agile processes, and unlock new digital opportunities. Backed by deep industry knowledge, tech expertise, and a Vision 2030 mindset, we partner with you to modernize, scale, and lead.",
      services: [
        {
          title: "Digital Transformation Strategy",
          description: "We help you reimagine business models, customer journeys, and operations—through digital innovation and disruptive thinking.",
          tech: [
            { title: "Vision 2030 Alignment", description: "" },
            { title: "Business Process Digitization", description: "" },
            { title: "Digital Culture & Change Enablement", description: "" },
            { title: "Technology & Innovation Roadmaps", description: "" },
          ],
          suggest: "Best For: Enterprises, government sectors, traditional industries undergoing modernization",
        },
        {
          title: "IT & Technology Consulting",
          description: "Gain clarity on the best tools, infrastructure, and digital platforms that will empower your organization now and into the future.",
          tech: [
            { title: "Technology Architecture & Evaluation", description: "" },
            { title: "IT Modernization Planning", description: "" },
            { title: "Platform Selection (CRM, ERP, CMS, etc.)", description: "" },
            { title: "Security & Compliance Frameworks", description: "" },
          ],
          suggest: "Best For: Organizations navigating tech upgrades, scaling, or ERP integration",
        },
        {
          title: "Business Process Consulting",
          description: "Streamline workflows and eliminate inefficiencies. We analyze, optimize, and automate key business processes to boost performance and cut costs.",
          tech: [
            { title: "Current-State Assessment (As-Is Analysis)", description: "" },
            { title: "Target Operating Models (To-Be Design)", description: "" },
            { title: "Process Automation & RPA Strategy", description: "" },
            { title: "Performance KPI Design & Reporting", description: "" },
          ],
          suggest: "Best For: Supply chains, HR, finance, logistics, and administrative ops",
        },
        {
          title: "Digital Experience & Innovation Consulting",
          description: "Design customer-centric strategies that improve experience, boost engagement, and create digital-first brand loyalty.",
          tech: [
            { title: "CX & UX Strategy", description: "" },
            { title: "Omnichannel Experience Planning", description: "" },
            { title: "Innovation Workshops & MVP Planning", description: "" },
            { title: "AI, Chatbot & IoT Strategy Advisory", description: "" },
          ],
          suggest: "Best For: Retail, e-commerce, startups, and customer-facing organizations",
        },
        {
          title: "Cloud & Infrastructure Strategy",
          description: "Strategize how to shift from legacy systems to agile cloud ecosystems that drive flexibility, scalability, and security.",
          tech: [
            { title: "Cloud Readiness Assessment", description: "" },
            { title: "Hybrid Cloud & Multi-Cloud Planning", description: "" },
            { title: "DevOps Strategy", description: "" },
            { title: "Cloud Cost Optimization", description: "" },
          ],
          suggest: "Best For: Enterprises modernizing IT or launching scalable products",
        },
        {
          title: "Data & Analytics Strategy",
          description: "Harness the power of your data. We build modern data strategies for insight-driven growth.",
          tech: [
            { title: "Data Governance & Quality Frameworks", description: "" },
            { title: "BI & Dashboard Planning", description: "" },
            { title: "Predictive Analytics & Machine Learning Integration", description: "" },
            { title: "Compliance & Privacy Regulations", description: "" },
          ],
          suggest: "Best For: Financial firms, healthcare, logistics, and SaaS companies",
        },
      ],
    },
    ar: {
      toptitle: "الاستراتيجية الرقمية و",
      toptitle1: "خدمات الاستشارات",
      topdescription: "نحو المستقبل برؤية، ابتكار، وتحول ذكي",
      description: "في ICSCT (إكسيت)، لا نقدم التكنولوجيا فقط—بل نوجه المؤسسات نحو تحول هادف. في عالم يتسم بالتغيير المستمر والرقمنة كخيار افتراضي، فإن امتلاك الاستراتيجية الصحيحة هو المفتاح للنجاح المستدام.",
      title: "الاستشارات",
      title1: "والاستراتيجية",
      title2: "الرقمية",
      description1: "تم تصميم خدمات الاستشارات والاستراتيجية الرقمية لدينا لمساعدة الشركات—من الشركات الناشئة إلى الوكالات الحكومية—على اتخاذ قرارات تقنية ذكية، وتنفيذ عمليات مرنة، وفتح فرص رقمية جديدة. بدعم من معرفة عميقة بالصناعة وخبرة تقنية وعقلية رؤية 2030، نتعاون معك للتحديث والتوسع والقيادة.",
      services: [
        {
          title: "استراتيجية التحول الرقمي",
          description: "نساعدك على إعادة تصور نماذج الأعمال ورحلات العملاء والعمليات—من خلال الابتكار الرقمي والتفكير المبتكر.",
          tech: [
            { title: "مواءمة رؤية 2030", description: "" },
            { title: "رقمنة العمليات التجارية", description: "" },
            { title: "تمكين الثقافة الرقمية والتغيير", description: "" },
            { title: "خرائط طريق التكنولوجيا والابتكار", description: "" },
          ],
          suggest: "الأفضل لـ: المؤسسات، القطاعات الحكومية، الصناعات التقليدية التي تمر بعملية تحديث",
        },
        {
          title: "استشارات تكنولوجيا المعلومات والتقنية",
          description: "احصل على وضوح حول أفضل الأدوات والبنية التحتية والمنصات الرقمية التي ستمكن مؤسستك الآن وفي المستقبل.",
          tech: [
            { title: "تقييم وهندسة التكنولوجيا", description: "" },
            { title: "تخطيط تحديث تكنولوجيا المعلومات", description: "" },
            { title: "اختيار المنصات (CRM، ERP، CMS، إلخ)", description: "" },
            { title: "أطر الأمان والامتثال", description: "" },
          ],
          suggest: "الأفضل لـ: المؤسسات التي تتنقل بين ترقيات التكنولوجيا أو التوسع أو تكامل ERP",
        },
        {
          title: "استشارات العمليات التجارية",
          description: "تبسيط سير العمل والقضاء على أوجه القصور. نقوم بتحليل العمليات التجارية الرئيسية وتحسينها وأتمتتها لتعزيز الأداء وخفض التكاليف.",
          tech: [
            { title: "تقييم الحالة الحالية (تحليل As-Is)", description: "" },
            { title: "تصميم نماذج التشغيل المستهدفة (To-Be)", description: "" },
            { title: "استراتيجية أتمتة العمليات وRPA", description: "" },
            { title: "تصميم مؤشرات الأداء الرئيسية وإعداد التقارير", description: "" },
          ],
          suggest: "الأفضل لـ: سلاسل التوريد، الموارد البشرية، المالية، اللوجستيات، والعمليات الإدارية",
        },
        {
          title: "استشارات تجربة وابتكار الرقمية",
          description: "تصميم استراتيجيات تركز على العملاء لتحسين التجربة، وتعزيز التفاعل، وخلق ولاء للعلامة التجارية الرقمية.",
          tech: [
            { title: "استراتيجية CX وUX", description: "" },
            { title: "تخطيط تجربة القنوات المتعددة", description: "" },
            { title: "ورش عمل الابتكار وتخطيط MVP", description: "" },
            { title: "استشارات استراتيجية AI، Chatbot وIoT", description: "" },
          ],
          suggest: "الأفضل لـ: التجزئة، التجارة الإلكترونية، الشركات الناشئة، والمنظمات التي تواجه العملاء",
        },
        {
          title: "استراتيجية السحابة والبنية التحتية",
          description: "استراتيجية التحول من الأنظمة القديمة إلى أنظمة السحابة المرنة التي تدفع المرونة والقابلية للتوسع والأمان.",
          tech: [
            { title: "تقييم جاهزية السحابة", description: "" },
            { title: "تخطيط السحابة الهجينة ومتعددة السحابة", description: "" },
            { title: "استراتيجية DevOps", description: "" },
            { title: "تحسين تكاليف السحابة", description: "" },
          ],
          suggest: "الأفضل لـ: المؤسسات التي تقوم بتحديث تكنولوجيا المعلومات أو إطلاق منتجات قابلة للتوسع",
        },
        {
          title: "استراتيجية البيانات والتحليلات",
          description: "استفد من قوة بياناتك. نبني استراتيجيات بيانات حديثة للنمو القائم على الرؤى.",
          tech: [
            { title: "أطر حوكمة وجودة البيانات", description: "" },
            { title: "تخطيط BI ولوحات المعلومات", description: "" },
            { title: "تكامل التحليلات التنبؤية والتعلم الآلي", description: "" },
            { title: "الامتثال للوائح الخصوصية", description: "" },
          ],
          suggest: "الأفضل لـ: الشركات المالية، الرعاية الصحية، اللوجستيات، وشركات SaaS",
        },
      ],
    },
  }
  
    const { toptitle, toptitle1, topdescription, title, title1, title2, description, description1, services } = content[language]
  
    return (
      <section className="w-full items-center justify-center">
      <div id="hero-section" className="w-full h-[50vh] relative">
        <img 
          src="cdstitle.jpg" 
          alt="Background" 
          className="w-full h-full object-cover shadow-lg" 
        />
                <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 rounded-lg">
                <div className={`px-6 md:pl-32 text-white ${language === 'ar' ? 'ml-auto md:pr-20' : ''}`}>
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold mb-4"
            >
            {toptitle}
            <div className={`${language === 'ar' ? 'ml-auto md:pr-20' : ''}`}>{toptitle1}</div>
            </motion.h1>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={"text-lg md:text-2xl mb-8"+ (language === 'ar' ? ' md: pr-20 text-right' : '')}
            >
            {topdescription}
            </motion.p>
            </div>
            </div>
        </div>
        <div className="md:w-11/12 mx-auto px-4 py-10"> 
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
                  
                  <span className="text-[#3e46db]">{title}</span>
                  <span>{title1}</span>
                  <div className="py-4 text-[#c132da]">{title2}
                  <img src="/box2.svg" alt="Serve Icon" className="inline-block w-24 h-30 md:w-64 md:h-30 ml-2 pb-4 md:pb-8" />
                  </div>
                </motion.span>
              </motion.h1>
              <div className={`text-lg md:text-2xl mb-8 font-light ${language === 'ar' ? 'text-right' : ''}`}>
              {description}
                <div className="pt-7">{description1}</div>
                </div>
          </div>
          <div>
          <div className={`${language === 'ar' ? 'text-right' : ''}`}>
              {services.map((service, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                >
            <div>
            <div className={`text-2xl md:text-5xl pb-3 font-bold text-[#12004c] ${language === 'ar' ? 'text-right' : ''}`}>{service.title}</div>
            <div className={`text-lg md:text-2xl font-medium text-black ${language === 'ar' ? 'text-right' : ''}`}>{service.description}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-16">
                  <div className={`${language === 'ar' ? 'text-right' : ''}`}>
                  <div className="pt-5">
                    {service.tech?.map((tech, techIndex) => (
                <div key={techIndex} className="text-sm md:text-lg text-gray-600">
                <strong className="text-2xl md:text-5xl font-light text-[#3e46db]">{tech.title}:</strong> 
                <div className="text-lg md:text-2xl font-thin text-black">{tech.description}</div>
                </div>
                    ))}
                    {/* {service.tech1?.map((tech1, tech1Index) => (
                    <div key={tech1Index} className="text-lg text-gray-600 ">
                    <div className="w-full h-[1px] bg-black my-4"></div>
                    <strong className="text-5xl font-light text-[#c132da]">{tech1.title}:</strong>
                    <div className="text-2xl font-thin text-black">{tech1.description}</div>
  
                    </div>
                    ))} */}
                    {/* {service.tech2?.map((tech2, tech2Index) => (
                    <div key={tech2Index} className="text-lg text-gray-600">
                    <div className="w-full h-[0.5px] bg-black my-4"></div>
                    <strong className="text-5xl font-light text-[#3ba2ff]">{tech2.title}:</strong>
                    <div className="text-2xl font-thin text-black">{tech2.description}</div>
                    </div>
                    ))} */}
              <div className="text-lg md:text-2xl font-medium text-black pt-4">{service.suggest}</div>
              </div>
                  </div>
                    <div className="flex justify-center items-center">
                    <Image src={`/${content.en.services[index].title.replace(/\s|\d/g, '')}.jpg`} alt={service.title} width={550} height={400} className="pt-5" />
                    </div>
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
      </div>
      </section>
    )
  }