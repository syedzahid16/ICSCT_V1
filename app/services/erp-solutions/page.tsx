"use client"

import { useLanguage } from "../../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ERPSolutions() {
  const { language } = useLanguage()

  const content = {
    en: {
      toptitle: "Intelligent ERP",
      toptitle1: "Solutions",
      topdescription: "Unifying Your Business Processes for Smarter, Scalable, and Seamless Operations",
      title: "ERP ",
      title1: "",
      title2: "Solutions",
      description: "In an increasingly digital and data-driven world, siloed systems and disconnected workflows are no longer an option. At ICSCT (إكسيت), we help you break the barriers with Enterprise Resource Planning (ERP) Solutions that unify operations, optimize resources, and drive intelligent decision-making across your business.",
      description1: "Whether you're a growing enterprise, a government organization, or a scaling startup, our ERP solutions are tailored to your unique workflows, industry demands, and digital maturity—helping you work smarter, respond faster, and scale confidently.",
      services: [
        {
          title: "End-to-End ERP Implementation",
          description: "From discovery to deployment, we deliver fully integrated ERP systems tailored to your industry.",
          tech: [
            {
              title: "Key Features",
              description: "Business Process Mapping, ERP Architecture Design, Data Migration & Legacy System Integration, Deployment, User Training & Support",
            },
          ],
          suggest: "Best For: Medium to large enterprises, manufacturing, government, and finance",
        },
        {
          title: "Custom ERP Development",
          description: "Not all organizations fit into off-the-shelf ERP solutions. We build fully customizable ERP platforms to meet your unique needs.",
          tech: [
            {
              title: "Key Features",
              description: "Tailored Modules (CRM, Finance, HR, Procurement, Inventory, Projects), Built-in Reporting & Analytics, Multi-language & Multi-currency Support, API Integration with Third-Party Tools",
            },
          ],
          suggest: "Best For: Specialized industries, SMEs with unique workflows",
        },
        {
          title: "ERP Modernization & Migration",
          description: "Outgrowing your legacy system? We help modernize or migrate you to more agile, cloud-based ERP platforms without disrupting operations.",
          tech: [
            {
              title: "Key Features",
              description: "Legacy System Audit, Data Cleansing & Migration Strategy, Cloud Readiness Assessment, Transition Support & Training",
            },
          ],
          suggest: "Best For: Organizations transitioning from on-premise systems to the cloud",
        },
        {
          title: "ERP Consulting & Strategy",
          description: "Need guidance? We help define your ERP vision, assess your readiness, and plan the most efficient roadmap to success.",
          tech: [
            {
              title: "Key Features",
              description: "Requirement Gathering & GAP Analysis, ERP Platform Selection (Oracle, SAP, Odoo, NetSuite, Dynamics), TCO Analysis & ROI Forecasting, Vendor Comparison & Risk Management",
            },
          ],
          suggest: "Best For: Companies planning digital transformation or first-time ERP adoption",
        },
      ],
    },
    ar: {
      toptitle: "تخطيط موارد",
      toptitle1: "المؤسسات",
      topdescription: "توحيد عمليات عملك لتحقيق عمليات أكثر ذكاءً وقابلية للتوسع وسلاسة",
      title: "حلول",
      title1: "تخطيط",
      title2: "الموارد",
      description: "في عالم رقمي يعتمد على البيانات بشكل متزايد، لم تعد الأنظمة المنعزلة وعمليات العمل المنفصلة خيارًا. في ICSCT (إكسيت)، نساعدك على كسر الحواجز باستخدام حلول تخطيط موارد المؤسسات (ERP) التي توحد العمليات، وتحسن الموارد، وتدفع اتخاذ القرارات الذكية عبر عملك.",
      description1: "سواء كنت مؤسسة متنامية، أو منظمة حكومية، أو شركة ناشئة تتوسع، فإن حلول ERP الخاصة بنا مصممة لتناسب عملياتك الفريدة، ومتطلبات صناعتك، ونضجك الرقمي—مما يساعدك على العمل بذكاء، والاستجابة بسرعة، والتوسع بثقة.",
      services: [
        {
          title: "تنفيذ ERP شامل",
          description: "من الاكتشاف إلى النشر، نقدم أنظمة ERP متكاملة بالكامل مصممة خصيصًا لصناعتك.",
          tech: [
            {
              title: "الميزات الرئيسية",
              description: "رسم خرائط العمليات التجارية، تصميم بنية ERP، ترحيل البيانات وتكامل الأنظمة القديمة، النشر، تدريب المستخدم والدعم",
            },
          ],
          suggest: "الأفضل لـ: المؤسسات المتوسطة إلى الكبيرة، التصنيع، الحكومة، والمالية",
        },
        {
          title: "تطوير ERP مخصص",
          description: "ليست كل المؤسسات تناسب حلول ERP الجاهزة. نقوم ببناء منصات ERP مخصصة بالكامل لتلبية احتياجاتك الفريدة.",
          tech: [
            {
              title: "الميزات الرئيسية",
              description: "الوحدات المخصصة (CRM، المالية، الموارد البشرية، المشتريات، المخزون، المشاريع)، التقارير والتحليلات المدمجة، دعم متعدد اللغات والعملات، تكامل API مع الأدوات الخارجية",
            },
          ],
          suggest: "الأفضل لـ: الصناعات المتخصصة، الشركات الصغيرة والمتوسطة ذات العمليات الفريدة",
        },
        {
          title: "تحديث وترحيل ERP",
          description: "هل تجاوزت نظامك القديم؟ نساعدك على التحديث أو الترحيل إلى منصات ERP أكثر مرونة قائمة على السحابة دون تعطيل العمليات.",
          tech: [
            {
              title: "الميزات الرئيسية",
              description: "تدقيق النظام القديم، استراتيجية تنظيف وترحيل البيانات، تقييم جاهزية السحابة، دعم الانتقال والتدريب",
            },
          ],
          suggest: "الأفضل لـ: المؤسسات التي تنتقل من الأنظمة المحلية إلى السحابة",
        },
        {
          title: "استشارات واستراتيجية ERP",
          description: "تحتاج إلى إرشادات؟ نساعد في تحديد رؤيتك لـ ERP، وتقييم جاهزيتك، ووضع أنجح خارطة طريق.",
          tech: [
            {
              title: "الميزات الرئيسية",
              description: "جمع المتطلبات وتحليل الفجوات، اختيار منصة ERP (Oracle، SAP، Odoo، NetSuite، Dynamics)، تحليل التكلفة الإجمالية للملكية وتوقع العائد على الاستثمار، مقارنة البائعين وإدارة المخاطر",
            },
          ],
          suggest: "الأفضل لـ: الشركات التي تخطط للتحول الرقمي أو اعتماد ERP لأول مرة",
        },
      ],
    },
  }

  const { toptitle, toptitle1, topdescription, title, title1, title2, description, description1, services } = content[language]

  return (
    <div  className="w-full items-center justify-center">
      <div id="hero-section" className="w-full h-[50vh] relative">
        <img 
          src="erptitle.jpg" 
          alt="Background" 
          className="w-full h-full object-cover shadow-lg" 
        />
                <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 rounded-lg">
                <div className={`px-6 md:pl-32 text-white ${language === 'ar' ? 'ml-auto pl-32 md:pr-20' : ''}`}>
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
                  <div className="w-full h-[1px] bg-black my-4"></div>
                  {/* {service.tech1?.map((tech1, tech1Index) => (
                  <div key={tech1Index} className="text-lg text-gray-600 ">
                  <strong className="text-5xl font-light text-[#c132da]">{tech1.title}:</strong>
                  <div className="text-2xl font-thin text-black">{tech1.description}</div>
                  </div>
                  ))}
                  <div className="w-full h-[0.5px] bg-black my-4"></div>
                  {service.tech2?.map((tech2, tech2Index) => (
                  <div key={tech2Index} className="text-lg text-gray-600">
                  <strong className="text-5xl font-light text-[#3ba2ff]">{tech2.title}:</strong>
                  <div className="text-2xl font-thin text-black">{tech2.description}</div>
                  </div>
                  ))} */}
              <div className="text-lg md:text-2xl font-medium text-black pt-4">{service.suggest}</div>
              </div>
                </div>
                <div className="flex justify-center items-center">
                <Image src={`/${content.en.services[index].title.toLowerCase().replace(/\s|[^a-z0-9]/g, '')}.jpg`} alt={service.title} width={550} height={400} className="pt-5" />
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
    </div>
  )
}