"use client"

import { useLanguage } from "../../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"

export default function MobileDevelopment() {
  const { language } = useLanguage()

  const content = {
    en: {
      toptitle: "Smart Mobile",
      toptitle1: "App Development",
      topdescription: "Bridging Innovation & User Experience",
      title: "Mobile",
      title1: "App",
      title2: "Development",
      description: "In a mobile-driven world, your app is your brand's most powerful tool to engage users, build loyalty, and generate revenue. At ICSCT, we don’t just create apps—we craft intelligent mobile ecosystems that blend innovation, usability, and performance.",
      description1: "From intuitive user interfaces to AI-powered backend systems, we deliver mobile experiences that are as smart as they are stunning. Whether you're a startup launching your first app or an enterprise optimizing your digital ecosystem, our custom mobile app development services elevate your business into the palms of your customers.",
      services: [
        {
          title: "Native App Development",
          description: "High-performance apps built specifically for iOS and Android using platform-specific languages and tools.",
          tech: [
            {
              title: "Technologies Used",
              description: "Swift, Objective-C (iOS), Kotlin, Java (Android)",
            },
          ],
          tech1: [
            {
              title: "Tools",
              description: "Xcode, Android Studio, Firebase, ARKit",
            },
          ],
          tech2: [],
          suggest: "Best For: Banking, e-commerce, healthcare, and apps requiring deep platform integration",
        },
        {
          title: "Cross-Platform App Development",
          description: "Write once, run anywhere. We build cross-platform apps that maintain near-native performance.",
          tech: [
            {
              title: "Frameworks",
              description: "React Native, Flutter, Xamarin",
            },
          ],
          tech1: [
            {
              title: "Libraries & Tools",
              description: "Expo, Redux, Firebase, GraphQL",
            },
          ],
          tech2: [],
          suggest: "Best For: Startups, businesses with tight timelines or budgets, MVPs",
        },
        {
          title: "Progressive Web Apps (PWA)",
          description: "Fast, responsive, and installable from browsers—PWAs bridge the best of web and mobile.",
          tech: [
            {
              title: "Benefits",
              description: "Offline capabilities, push notifications, low bandwidth-friendly",
            },
          ],
          tech1: [
            {
              title: "Tech Stack",
              description: "HTML5, JavaScript, WebAssembly, Service Workers",
            },
          ],
          tech2: [],
          suggest: "Best For: News platforms, e-learning, e-commerce, and content-driven apps",
        },
        {
          title: "Enterprise & SaaS Mobile Applications",
          description: "Streamline operations and enhance mobility with apps tailored for your organization’s needs.",
          tech: [
            {
              title: "Capabilities",
              description: "Role-based access, real-time analytics, integrations with ERP/CRM",
            },
          ],
          tech1: [
            {
              title: "Tech Stack",
              description: "Angular, TypeScript, Spring Boot, React Native, MongoDB",
            },
          ],
          tech2: [],
          suggest: "Best For: Corporate productivity apps, dashboards, internal tools",
        },
        {
          title: "App Maintenance & Optimization",
          description: "Post-launch, we ensure your app stays updated, fast, secure, and competitive.",
          tech: [
            {
              title: "Services",
              description: "OS compatibility, UI refreshes, bug fixing, performance audits",
            },
          ],
          tech1: [
            {
              title: "Tools",
              description: "Google Play Console, App Store Connect, Crashlytics, AppDynamics",
            },
          ],
          tech2: [],
          suggest: "Best For: All existing mobile apps that need ongoing care",
        },
      ],
    },
    ar: {
      toptitle: "تطوير تطبيقات",
      toptitle1: "الجوال الذكية",
      topdescription: "جسر الابتكار وتجربة المستخدم",
      title: "تطوير",
      title1: "تطبيقات",
      title2: "الجوال",
      description: "في عالم يعتمد على الجوال، يعد تطبيقك أقوى أداة لعلامتك التجارية للتفاعل مع المستخدمين، وبناء الولاء، وتحقيق الإيرادات. في ICSCT، لا نقوم فقط بإنشاء التطبيقات - بل نصنع أنظمة بيئية ذكية للجوال تمزج بين الابتكار وسهولة الاستخدام والأداء.",
      description1: "من واجهات المستخدم البديهية إلى الأنظمة الخلفية المدعومة بالذكاء الاصطناعي، نقدم تجارب جوال ذكية ومذهلة. سواء كنت شركة ناشئة تطلق تطبيقك الأول أو مؤسسة تعمل على تحسين نظامك البيئي الرقمي، فإن خدمات تطوير تطبيقات الجوال المخصصة لدينا ترفع عملك إلى أيدي عملائك.",
      services: [
        {
          title: "تطوير التطبيقات الأصلية",
          description: "تطبيقات عالية الأداء مصممة خصيصًا لنظامي iOS و Android باستخدام لغات وأدوات مخصصة للمنصة.",
          tech: [
            {
              title: "التقنيات المستخدمة",
              description: "Swift, Objective-C (iOS), Kotlin, Java (Android)",
            },
          ],
          tech1: [
            {
              title: "الأدوات",
              description: "Xcode, Android Studio, Firebase, ARKit",
            },
          ],
          tech2: [],
          suggest: "الأفضل لـ: البنوك، التجارة الإلكترونية، الرعاية الصحية، والتطبيقات التي تتطلب تكاملًا عميقًا مع المنصة",
        },
        {
          title: "تطوير التطبيقات متعددة المنصات",
          description: "اكتب مرة واحدة، وشغل في أي مكان. نقوم ببناء تطبيقات متعددة المنصات تحافظ على أداء قريب من الأداء الأصلي.",
          tech: [
            {
              title: "الأطر",
              description: "React Native, Flutter, Xamarin",
            },
          ],
          tech1: [
            {
              title: "المكتبات والأدوات",
              description: "Expo, Redux, Firebase, GraphQL",
            },
          ],
          tech2: [],
          suggest: "الأفضل لـ: الشركات الناشئة، الشركات ذات الجداول الزمنية أو الميزانيات الضيقة، MVPs",
        },
        {
          title: "تطبيقات الويب التقدمية (PWA)",
          description: "سريعة، مستجيبة، وقابلة للتثبيت من المتصفحات - تجمع PWAs بين أفضل ميزات الويب والجوال.",
          tech: [
            {
              title: "الفوائد",
              description: "إمكانيات دون اتصال، إشعارات الدفع، صديقة للبيانات المنخفضة",
            },
          ],
          tech1: [
            {
              title: "التقنيات المستخدمة",
              description: "HTML5, JavaScript, WebAssembly, Service Workers",
            },
          ],
          tech2: [],
          suggest: "الأفضل لـ: منصات الأخبار، التعلم الإلكتروني، التجارة الإلكترونية، والتطبيقات القائمة على المحتوى",
        },
        {
          title: "تطبيقات الجوال للمؤسسات و SaaS",
          description: "تبسيط العمليات وتعزيز التنقل باستخدام التطبيقات المصممة خصيصًا لاحتياجات مؤسستك.",
          tech: [
            {
              title: "القدرات",
              description: "الوصول المستند إلى الأدوار، التحليلات في الوقت الفعلي، التكامل مع ERP/CRM",
            },
          ],
          tech1: [
            {
              title: "التقنيات المستخدمة",
              description: "Angular, TypeScript, Spring Boot, React Native, MongoDB",
            },
          ],
          tech2: [],
          suggest: "الأفضل لـ: تطبيقات الإنتاجية المؤسسية، لوحات المعلومات، الأدوات الداخلية",
        },
        {
          title: "صيانة التطبيقات وتحسينها",
          description: "بعد الإطلاق، نضمن بقاء تطبيقك محدثًا وسريعًا وآمنًا وقادرًا على المنافسة.",
          tech: [
            {
              title: "الخدمات",
              description: "التوافق مع أنظمة التشغيل، تحديث واجهات المستخدم، إصلاح الأخطاء، تدقيق الأداء",
            },
          ],
          tech1: [
            {
              title: "الأدوات",
              description: "Google Play Console, App Store Connect, Crashlytics, AppDynamics",
            },
          ],
          tech2: [],
          suggest: "الأفضل لـ: جميع تطبيقات الجوال الحالية التي تحتاج إلى رعاية مستمرة",
        },
      ],
    },
  }

  const { toptitle, toptitle1, topdescription, title, title1, title2, description, description1, services } = content[language]

  return (
    <section className="w-full items-center justify-center">
      <div id="hero-section" className="w-full h-[50vh] relative">
        <img 
          src="mobiletitle.jpg" 
          alt="Background" 
          className="w-full h-full object-cover shadow-lg" 
        />
        <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 rounded-lg">
          <div className={`px-6 md:pl-32 text-white ${language === 'ar' ? 'ml-auto md:pr-20' : ''}`}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold mb-4 pr-10"
            >
              {toptitle}
              <div className={`${language === 'ar' ? 'ml-auto md:pr-20 ' : ''}`}>{toptitle1}</div>
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
            <div className={`flex flex-col justify-center ${language === 'ar' ? 'order-last text-right' : ''}`}>
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
            <div className={`text-xl md:text-2xl mb-8 font-light ${language === 'ar' ? 'text-right' : ''}`}>
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
                        <div className="w-full h-[0.5px] bg-black my-4"></div>
                        {service.tech2?.map((tech2, tech2Index) => (
                          <div key={tech2Index} className="text-sm md:text-lg text-gray-600">
                            {/* <strong className="text-2xl md:text-5xl font-light text-[#3ba2ff]">{tech2.title}:</strong>
                            <div className="text-lg md:text-2xl font-thin text-black">{tech2.description}</div> */}
                          </div>
                        ))}
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
    </section>
  )
}
