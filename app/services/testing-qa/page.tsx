"use client"

import { useLanguage } from "../../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"

export default function TestingQA() {
  const { language } = useLanguage()

  const content = {
    en: {
      toptitle: "Flawless by Design:",
      toptitle1: "Testing & Quality Assurance Services",
      topdescription: "Empowering Digital Excellence Through Rigorous Testing, Reliability, and End-User Confidence",
      title: "Testing & ",
      title1: "Quality ",
      title2: "Assurance Services",
      description: "At ICSCT, we believe that quality is not a phase—it’s a culture. In an era where performance, security, and user experience dictate brand success, our Testing & Quality Assurance (QA) services ensure that your applications are robust, secure, and release-ready from day one.",
      description1: "We go beyond bug fixing—our holistic QA strategy ensures that every piece of software is tested for speed, security, scalability, and user satisfaction. Whether you’re launching a SaaS product, mobile app, ERP, or web platform, we ensure your users experience nothing but excellence.",
      services: [
        {
          title: "Functional Testing",
          description: "Ensure your application works exactly as intended across all use cases.",
          tech: [
            {
              title: "Key Features",
              description: "Manual & Automated Test Case Execution, Business Logic Validation, UI Functionality Checks, Edge Case & Regression Testing",
            },
          ],
          tech1: [
            {
              title: "Tools",
              description: "Selenium, TestNG, Cypress, Playwright, Postman",
            },
          ],
        },
        {
          title: "Automation Testing",
          description: "Accelerate testing cycles and improve accuracy with scalable test automation.",
          tech: [
            {
              title: "Key Features",
              description: "UI, API & Integration Test Automation, CI/CD Pipeline Integration, Scriptless & Code-based Automation Frameworks, Cross-Platform & Device Automation",
            },
          ],
          tech1: [
            {
              title: "Tools",
              description: "Selenium, Playwright, Appium, Jenkins, TestProject, Katalon Studio",
            },
          ],
        },
        {
          title: "Performance & Load Testing",
          description: "Optimize speed, responsiveness, and stability under real-world usage.",
          tech: [
            {
              title: "Key Features",
              description: "Load, Stress & Volume Testing, Scalability Benchmarking, Bottleneck Analysis, Real-Time Monitoring & Tuning",
            },
          ],
          tech1: [
            {
              title: "Tools",
              description: "JMeter, Locust, BlazeMeter, Gatling",
            },
          ],
        },
        {
          title: "Security Testing",
          description: "Protect your users and data with comprehensive security and vulnerability testing.",
          tech: [
            {
              title: "Key Features",
              description: "Penetration Testing (OWASP Top 10), Static & Dynamic Code Analysis, Authentication & Session Management, Data Privacy & Encryption Validation",
            },
          ],
          tech1: [
            {
              title: "Tools",
              description: "OWASP ZAP, Burp Suite, SonarQube, Nessus",
            },
          ],
        },
        {
          title: "Compatibility & Cross-Browser Testing",
          description: "Deliver consistent experiences across devices, browsers, and OS versions.",
          tech: [
            {
              title: "Key Features",
              description: "Desktop, Tablet & Mobile Compatibility, Cross-Browser Testing (Chrome, Safari, Firefox, Edge), OS Testing: Windows, macOS, iOS, Android, Linux, Network Variability Testing",
            },
          ],
          tech1: [
            {
              title: "Tools",
              description: "BrowserStack, Sauce Labs, LambdaTest",
            },
          ],
        },
        {
          title: "Usability & Accessibility Testing",
          description: "Test how real users experience your product—because performance means nothing without satisfaction.",
          tech: [
            {
              title: "Key Features",
              description: "UI/UX Audit & Heatmap Analysis, A/B Testing & Real User Simulations, Accessibility Compliance (WCAG), Screen Reader & Keyboard Navigation Checks",
            },
          ],
          tech1: [
            {
              title: "Tools",
              description: "Axe, Wave, Google Lighthouse, Hotjar",
            },
          ],
        },
      ],
    },
    ar: {
      toptitle: ":مصمم بدقة",
      toptitle1: "خدمات اختبار وضمان الجودة",
      topdescription: "تمكين التميز الرقمي من خلال الاختبار الدقيق والموثوقية وثقة المستخدم النهائي",
      title: "اختبار و",
      title1: "ضمان الجودة",
      title2: "الخدمات",
      description: "في ICSCT، نؤمن بأن الجودة ليست مجرد مرحلة—إنها ثقافة. في عصر حيث الأداء والأمان وتجربة المستخدم تحدد نجاح العلامة التجارية، تضمن خدمات اختبار وضمان الجودة (QA) لدينا أن تكون تطبيقاتك قوية وآمنة وجاهزة للإطلاق منذ اليوم الأول.",
      description1: "نتجاوز إصلاح الأخطاء—استراتيجيتنا الشاملة لضمان الجودة تضمن اختبار كل جزء من البرمجيات من حيث السرعة والأمان وقابلية التوسع ورضا المستخدم. سواء كنت تطلق منتج SaaS أو تطبيقًا للجوال أو ERP أو منصة ويب، نضمن أن يختبر مستخدموك التميز فقط.",
      services: [
        {
          title: "اختبار الوظائف",
          description: "تأكد من أن تطبيقك يعمل تمامًا كما هو مقصود في جميع حالات الاستخدام.",
          tech: [
            {
              title: "الميزات الرئيسية",
              description: "تنفيذ يدوي وآلي لحالات الاختبار، التحقق من منطق الأعمال، فحص وظائف واجهة المستخدم، اختبار الحالات القصوى والتراجع",
            },
          ],
          tech1: [
            {
              title: "الأدوات",
              description: "Selenium, TestNG, Cypress, Playwright, Postman",
            },
          ],
        },
        {
          title: "اختبار الأتمتة",
          description: "سرّع دورات الاختبار وحسّن الدقة باستخدام أتمتة الاختبار القابلة للتوسع.",
          tech: [
            {
              title: "الميزات الرئيسية",
              description: "أتمتة اختبار واجهة المستخدم وAPI والتكامل، تكامل خط أنابيب CI/CD، أطر أتمتة بدون كود ومعتمدة على الكود، أتمتة عبر الأنظمة الأساسية والأجهزة",
            },
          ],
          tech1: [
            {
              title: "الأدوات",
              description: "Selenium, Playwright, Appium, Jenkins, TestProject, Katalon Studio",
            },
          ],
        },
        {
          title: "اختبار الأداء والحمل",
          description: "قم بتحسين السرعة والاستجابة والاستقرار تحت الاستخدام الواقعي.",
          tech: [
            {
              title: "الميزات الرئيسية",
              description: "اختبار الحمل والإجهاد والحجم، قياس قابلية التوسع، تحليل الاختناقات، المراقبة والضبط في الوقت الفعلي",
            },
          ],
          tech1: [
            {
              title: "الأدوات",
              description: "JMeter, Locust, BlazeMeter, Gatling",
            },
          ],
        },
        {
          title: "اختبار الأمان",
          description: "احمِ مستخدميك وبياناتك من خلال اختبار الأمان والثغرات الشامل.",
          tech: [
            {
              title: "الميزات الرئيسية",
              description: "اختبار الاختراق (OWASP Top 10)، تحليل الكود الثابت والديناميكي، إدارة المصادقة والجلسات، التحقق من خصوصية البيانات والتشفير",
            },
          ],
          tech1: [
            {
              title: "الأدوات",
              description: "OWASP ZAP, Burp Suite, SonarQube, Nessus",
            },
          ],
        },
        {
          title: "اختبار التوافق والمتصفح المتقاطع",
          description: "قدم تجارب متسقة عبر الأجهزة والمتصفحات وإصدارات أنظمة التشغيل.",
          tech: [
            {
              title: "الميزات الرئيسية",
              description: "التوافق مع أجهزة الكمبيوتر المكتبية والأجهزة اللوحية والجوال، اختبار المتصفح المتقاطع (Chrome, Safari, Firefox, Edge)، اختبار أنظمة التشغيل: Windows, macOS, iOS, Android, Linux، اختبار تباين الشبكة",
            },
          ],
          tech1: [
            {
              title: "الأدوات",
              description: "BrowserStack, Sauce Labs, LambdaTest",
            },
          ],
        },
        {
          title: "اختبار سهولة الاستخدام وإمكانية الوصول",
          description: "اختبر كيف يختبر المستخدمون الحقيقيون منتجك—لأن الأداء لا يعني شيئًا بدون الرضا.",
          tech: [
            {
              title: "الميزات الرئيسية",
              description: "تدقيق واجهة المستخدم/تجربة المستخدم وتحليل الخرائط الحرارية، اختبار A/B والمحاكاة الحقيقية للمستخدمين، الامتثال لإمكانية الوصول (WCAG)، فحص قارئ الشاشة والتنقل عبر لوحة المفاتيح",
            },
          ],
          tech1: [
            {
              title: "الأدوات",
              description: "Axe, Wave, Google Lighthouse, Hotjar",
            },
          ],
        },
      ],
    },
  }

  const { toptitle, toptitle1, topdescription, title, title1, title2, description, description1, services } = content[language]

  return (
    <div className="w-full items-center justify-center">
      <div id="hero-section" className="w-full h-[50vh] relative">
        <img 
          src="testtitle.jpg" 
          alt="Background" 
          className="w-full h-full object-cover shadow-lg" 
        />
                <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 rounded-lg">
                <div className={`px-6 md:pl-32 text-white ${language === 'ar' ? 'md:ml-auto text-right md:pr-20' : ''}`}>
                <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-7xl pl-20 font-bold mb-4"
                    >
                        {toptitle}
                        <div className={`${language === 'ar' ? 'ml-auto md:pr-20' : ''}`}>{toptitle1}</div>
                        </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={"text-lg md:text-2xl pl-20 mb-8"+ (language === 'ar' ? ' md: pr-16 text-right' : '')}
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
              {service.tech1?.map((tech1, tech1Index) => (
                <div key={tech1Index} className="text-sm md:text-lg text-gray-600 ">
                <strong className="text-2xl md:text-5xl font-light text-[#c132da]">{tech1.title}:</strong>
                <div className="text-lg md:text-2xl font-thin text-black">{tech1.description}</div>
                </div>
              ))}

                  {/* {service.tech2?.map((tech2, tech2Index) => (
                  <div key={tech2Index} className="text-lg text-gray-600">
                  <strong className="text-5xl font-light text-[#3ba2ff]">{tech2.title}:</strong>
                  <div className="text-2xl font-thin text-black">{tech2.description}</div>
                  </div>
                  ))} */}
                  {/* <div className="text-2xl font-medium text-black pt-4">{service.suggest}</div> */}
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