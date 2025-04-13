"use client"

import { useLanguage } from "../../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"

export default function WebDevelopment() {
  const { language } = useLanguage()

  const content = {
    en: {
      toptitle: "Next-Gen",
      toptitle1: "Web Development",
      topdescription: "Transforming Ideas into Digital Excellence",
      title: "Web",
      title1: "Development",
      title2: "Services",
      description: "Empowering Businesses with High-Performance, Scalable, and Future-Ready Web Solutions. In today’s digital-first world, your website is more than just an online presence—it’s the heartbeat of your brand, the engine of your growth, and the first impression that defines customer engagement. At ICSCT, we don’t just build websites; we craft immersive digital experiences that captivate, convert, and create lasting impact.",
      description1: "With a blend of cutting-edge technologies, intuitive design, and strategic innovation, we ensure your business stays ahead in the competitive digital landscape. Whether you need a dynamic business website, an e-commerce powerhouse, or a high-performing web application, we bring expertise, creativity, and future-ready solutions to the table.",
      services: [
        {
          title: "Custom Web Development",
          description: "We create highly responsive, fast-loading, and SEO-optimized websites, ensuring your business stands out in search rankings and delivers seamless navigation across all devices.",
          tech: [
            {
              title: "Technologies Used",
              description: "HTML5, CSS3, JavaScript, React.js, Next.js, Vue.js, Angular",
            },
          ],
          tech1: [
            {
              title: "Frameworks & CMS",
              description: "WordPress, Drupal, Joomla, Custom CMS",
            },
          ],
          tech2: [
            {
              title: "Back-end Development",
              description: "Node.js, Python (Django/Flask), PHP (Laravel), Ruby on Rails",
            },
          ],
          suggest: "Best For: Business websites, corporate portals, personal blogs, and custom solutions.",
        },
        {
          title: "E-Commerce Development",
          description: "We build powerful online stores that drive sales, enhance customer experience, and ensure secure transactions.",
          tech: [
            {
              title: "E-commerce Platforms",
              description: "Shopify, WooCommerce, Magento, BigCommerce",
            },
          ],
          tech1: [
            {
              title: "Payment Gateway Integration",
              description: "Stripe, PayPal, Razorpay, Apple Pay",
            },
          ],
          tech2: [
            {
              title: "Inventory & Order Management",
              description: "Real-time tracking, AI-driven product recommendations, and automated order processing.",
            },
          ],
          suggest: "Best For: Online stores, marketplaces, and subscription-based platforms.",
        },
        {
          title: "Web Applications & Portals",
          description: "Whether it’s an enterprise-level SaaS platform, a customer portal, or a high-traffic marketplace, we build robust web applications with scalability and security at the core.",
          tech: [
            {
              title: "Tech Stack",
              description: "React.js, Vue.js, Angular, TypeScript, Node.js, Django, MongoDB",
            },
          ],
          tech1: [
            {
              title: "API Development & Integration",
              description: "RESTful APIs, GraphQL, Microservices",
            },
          ],
          tech2: [
            {
              title: "Cloud & DevOps",
              description: "AWS, Azure, Kubernetes, Docker, CI/CD Pipelines",
            },
          ],
          suggest: "Best For: SaaS platforms, enterprise portals, and high-traffic applications.",
        },
        {
          title: "Progressive Web Apps (PWA)",
          description: "PWAs combine the best of web and mobile apps, offering app-like experiences without downloads!",
          tech: [
            {
              title: "Fast & Reliable",
              description: "Loads instantly, even in poor network conditions",
            },
          ],
          tech1: [
            {
              title: "Offline Functionality",
              description: "Works even without an internet connection",
            },
          ],
          tech2: [
            {
              title: "SEO-Friendly & Discoverable",
              description: "Ranks higher in search results",
            },
          ],
          suggest: "Best For: Businesses looking for app-like experiences on the web.",
        },
      ],
    },
    ar: {
      toptitle: "الجيل القادم",
      toptitle1: "تطوير الويب",
      topdescription: "تحويل الأفكار إلى تميز رقمي",
      title: "تطوير",
      title1: "الويب",
      title2: "الخدمات",
      description: "تمكين الشركات بحلول ويب عالية الأداء وقابلة للتوسع وجاهزة للمستقبل. في عالم اليوم الرقمي، موقعك الإلكتروني ليس مجرد حضور على الإنترنت، بل هو نبض علامتك التجارية ومحرك نموك والانطباع الأول الذي يحدد تفاعل العملاء. في ICSCT، لا نبني مواقع فقط؛ بل نصنع تجارب رقمية غامرة تجذب وتحول وتترك تأثيرًا دائمًا.",
      description1: "من خلال مزيج من التقنيات المتقدمة والتصميم البديهي والابتكار الاستراتيجي، نضمن بقاء عملك في المقدمة في المشهد الرقمي التنافسي. سواء كنت بحاجة إلى موقع أعمال ديناميكي أو منصة تجارة إلكترونية قوية أو تطبيق ويب عالي الأداء، فإننا نقدم الخبرة والإبداع والحلول الجاهزة للمستقبل.",
      services: [
        {
          title: "تطوير الويب المخصص",
          description: "نقوم بإنشاء مواقع سريعة الاستجابة وسريعة التحميل ومحسنة لتحسين محركات البحث، مما يضمن تميز عملك في تصنيفات البحث وتقديم تنقل سلس عبر جميع الأجهزة.",
          tech: [
            {
              title: "التقنيات المستخدمة",
              description: "HTML5, CSS3, JavaScript, React.js, Next.js, Vue.js, Angular",
            },
          ],
          tech1: [
            {
              title: "الأطر ونظم إدارة المحتوى",
              description: "WordPress, Drupal, Joomla, Custom CMS",
            },
          ],
          tech2: [
            {
              title: "تطوير الخلفية",
              description: "Node.js, Python (Django/Flask), PHP (Laravel), Ruby on Rails",
            },
          ],
          suggest: "الأفضل لـ: مواقع الأعمال، البوابات المؤسسية، المدونات الشخصية، والحلول المخصصة.",
        },
        {
          title: "تطوير التجارة الإلكترونية",
          description: "نقوم ببناء متاجر إلكترونية قوية تزيد من المبيعات، وتعزز تجربة العملاء، وتضمن معاملات آمنة.",
          tech: [
            {
              title: "منصات التجارة الإلكترونية",
              description: "Shopify, WooCommerce, Magento, BigCommerce",
            },
          ],
          tech1: [
            {
              title: "تكامل بوابات الدفع",
              description: "Stripe, PayPal, Razorpay, Apple Pay",
            },
          ],
          tech2: [
            {
              title: "إدارة المخزون والطلبات",
              description: "تتبع في الوقت الفعلي، توصيات المنتجات المدعومة بالذكاء الاصطناعي، ومعالجة الطلبات الآلية.",
            },
          ],
          suggest: "الأفضل لـ: المتاجر الإلكترونية والأسواق ومنصات الاشتراك.",
        },
        {
          title: "تطبيقات الويب والبوابات",
          description: "سواء كان منصة SaaS على مستوى المؤسسة، أو بوابة العملاء، أو سوقًا عالي الحركة، نبني تطبيقات ويب قوية مع قابلية التوسع والأمان في جوهرها.",
          tech: [
            {
              title: "التقنيات المستخدمة",
              description: "React.js, Vue.js, Angular, TypeScript, Node.js, Django, MongoDB",
            },
          ],
          tech1: [
            {
              title: "تطوير وتكامل API",
              description: "RESTful APIs, GraphQL, Microservices",
            },
          ],
          tech2: [
            {
              title: "السحابة و DevOps",
              description: "AWS, Azure, Kubernetes, Docker, CI/CD Pipelines",
            },
          ],
          suggest: "الأفضل لـ: منصات SaaS، البوابات المؤسسية، والتطبيقات ذات الحركة العالية.",
        },
        {
          title: "تطبيقات الويب التقدمية (PWA)",
          description: "تجمع تطبيقات الويب التقدمية بين أفضل ميزات الويب وتطبيقات الجوال، مما يوفر تجارب شبيهة بالتطبيقات بدون تنزيلات!",
          tech: [
            {
              title: "سريعة وموثوقة",
              description: "تعمل فورًا، حتى في ظروف الشبكة الضعيفة",
            },
          ],
          tech1: [
            {
              title: "وظائف دون اتصال",
              description: "تعمل حتى بدون اتصال بالإنترنت",
            },
          ],
          tech2: [
            {
              title: "صديقة لتحسين محركات البحث وقابلة للاكتشاف",
              description: "تحتل مرتبة أعلى في نتائج البحث",
            },
          ],
          suggest: "الأفضل لـ: الشركات التي تبحث عن تجارب شبيهة بالتطبيقات على الويب.",
        },
      ],
    },
  }

  const { toptitle, toptitle1, topdescription, title, title1, title2, description, description1, services } = content[language]

  return (
    <section className="w-full items-center justify-center">
      <div id="hero-section" className="w-full h-[50vh] relative">
      <img 
        src="webdev.jpg" 
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
          className={"text-lg md:text-2xl mb-8"+ (language === 'ar' ? ' md: pr-16 text-right' : '')}
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
              <div className="w-full h-[0.5px] bg-black my-4"></div>
              {service.tech2?.map((tech2, tech2Index) => (
                <div key={tech2Index} className="text-sm md:text-lg text-gray-600">
                <strong className="text-2xl md:text-5xl font-light text-[#3ba2ff]">{tech2.title}:</strong>
                <div className="text-lg md:text-2xl font-thin text-black">{tech2.description}</div>
                </div>
              ))}
              <div className="text-lg md:text-2xl font-medium text-black pt-4">{service.suggest}</div>
              </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                <Image src={`/${content.en.services[index].title.toLowerCase().replace(/\s|[^a-z0-9]/g, '')}.jpg`} alt={service.title} width={550} height={400} className="pt-5" />
                </div>
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