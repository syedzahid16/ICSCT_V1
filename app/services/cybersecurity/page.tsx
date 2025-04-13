"use client"

import { useLanguage } from "../../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Cybersecurity() {
  const { language } = useLanguage()

  const content = {
      en: {
        toptitle: "Cybersecurity",
        toptitle1: "Intelligence",
        topdescription: "Safeguarding Your Digital Future",
        title: "Cyber",
        title1: "Security",
        title2: "Solutions",
        description: "Protecting Businesses with Smart, Scalable & Strategic Cybersecurity Solutions",
        description1: "In today’s hyper-connected world, cybersecurity is no longer a luxury—it’s a necessity. As digital ecosystems expand, so do the risks. From ransomware attacks to insider threats, businesses face constant challenges that demand proactive, intelligent, and adaptive security solutions. At ICSCT, we don't just respond to threats—we anticipate and prevent them. With a deep understanding of emerging threats and a commitment to innovation, we deliver robust cybersecurity strategies tailored to your industry, infrastructure, and compliance needs. Whether you’re a startup, enterprise, or government agency, our security frameworks ensure your digital assets are fortified, resilient, and always protected.",
        services: [
          {
            title: "Managed Security Services (MSS)",
            description: "End-to-end threat monitoring, detection, and incident response to secure your IT environment—24/7/365.",
            tech: [
              {
                title: "Capabilities",
                description: "SOC-as-a-Service, Threat Hunting, SIEM, Incident Response",
              },
            ],
            tech1: [
              {
                title: "Tools",
                description: "Splunk, IBM QRadar, AlienVault, Elastic Security",
              },
            ],
            suggest: "Best For: Enterprises, banks, public sector, and SaaS providers needing continuous oversight",
          },
          {
            title: "Network & Endpoint Security",
            description: "Secure your organization from internal and external threats across all devices and networks.",
            tech: [
              {
                title: "Solutions",
                description: "Firewalls, IDS/IPS, Endpoint Detection & Response (EDR)",
              },
            ],
            tech1: [
              {
                title: "Partners/Tools",
                description: "Fortinet, Cisco, CrowdStrike, SentinelOne",
              },
            ],
            suggest: "Best For: Hybrid work environments, distributed teams, IoT/OT integrations",
          },
          {
            title: "Cloud Security & DevSecOps",
            description: "Ensure your cloud infrastructure is secure, scalable, and fully integrated with your DevOps pipeline.",
            tech: [
              {
                title: "Services",
                description: "Cloud posture management, IAM, Container Security, CI/CD pipeline protection",
              },
            ],
            tech1: [
              {
                title: "Platforms",
                description: "AWS, Azure, Google Cloud, Kubernetes, Docker",
              },
            ],
            suggest: "Best For: Businesses deploying cloud-native applications, SaaS platforms",
          },
          {
            title: "Application Security & Secure SDLC",
            description: "We embed security into every stage of your software development life cycle.",
            tech: [
              {
                title: "Practices",
                description: "Code review, vulnerability assessment, penetration testing (VAPT)",
              },
            ],
            tech1: [
              {
                title: "Tools",
                description: "OWASP ZAP, Burp Suite, Veracode, Snyk",
              },
            ],
            suggest: "Best For: Product companies, developers, fintech, healthcare apps",
          },
          {
            title: "Governance, Risk & Compliance (GRC)",
            description: "Establish a cybersecurity culture with structured governance and clear risk control mechanisms.",
            tech: [
              {
                title: "Services",
                description: "Security Audits, Policy Development, Data Protection Impact Assessments",
              },
            ],
            tech1: [
              {
                title: "Compliance Support",
                description: "NCA ECC, ISO 27001, NIST, GDPR, PCI-DSS",
              },
            ],
            suggest: "Best For: Government clients, financial institutions, regulated industries",
          },
          {
            title: "Cyber Awareness & Training",
            description: "Your employees are your first line of defense. Empower them with the knowledge to identify and avoid threats.",
            tech: [
              {
                title: "Programs",
                description: "Phishing Simulation, Cyber Hygiene Training, Policy Education",
              },
            ],
            tech1: [
              {
                title: "Delivery",
                description: "Online modules, workshops, role-based training",
              },
            ],
            suggest: "Best For: All organizations looking to reduce human error vulnerabilities",
          },
        ],
      },
      ar: {
        toptitle: "الأمن السيبراني",
        toptitle1: "الذكاء",
        topdescription: "حماية مستقبلك الرقمي",
        title: "الأمن",
        title1: "السيبراني",
        title2: "الحلول",
        description: "حماية الأعمال بحلول أمنية سيبرانية ذكية وقابلة للتطوير واستراتيجية",
        description1: "في عالم اليوم المتصل بشكل مفرط، لم يعد الأمن السيبراني رفاهية—بل أصبح ضرورة. مع توسع الأنظمة الرقمية، تزداد المخاطر. من هجمات الفدية إلى التهديدات الداخلية، تواجه الشركات تحديات مستمرة تتطلب حلول أمان استباقية وذكية وقابلة للتكيف. في ICSCT، لا نستجيب للتهديدات فقط—بل نتوقعها ونمنعها. مع فهم عميق للتهديدات الناشئة والتزام بالابتكار، نقدم استراتيجيات أمنية سيبرانية قوية مصممة خصيصًا لصناعتك وبنيتك التحتية واحتياجات الامتثال. سواء كنت شركة ناشئة أو مؤسسة أو وكالة حكومية، فإن أطر الأمان لدينا تضمن حماية أصولك الرقمية وجعلها مرنة وآمنة دائمًا.",
        services: [
          {
            title: "خدمات الأمن المُدارة (MSS)",
            description: "مراقبة التهديدات واكتشافها والاستجابة للحوادث لتأمين بيئة تكنولوجيا المعلومات الخاصة بك على مدار الساعة.",
            tech: [
              {
                title: "القدرات",
                description: "SOC-as-a-Service, Threat Hunting, SIEM, Incident Response",
              },
            ],
            tech1: [
              {
                title: "الأدوات",
                description: "Splunk, IBM QRadar, AlienVault, Elastic Security",
              },
            ],
            suggest: "الأفضل لـ: المؤسسات، البنوك، القطاع العام، ومقدمي خدمات SaaS الذين يحتاجون إلى إشراف مستمر",
          },
          {
            title: "أمن الشبكات والأجهزة الطرفية",
            description: "تأمين مؤسستك من التهديدات الداخلية والخارجية عبر جميع الأجهزة والشبكات.",
            tech: [
              {
                title: "الحلول",
                description: "Firewalls, IDS/IPS, Endpoint Detection & Response (EDR)",
              },
            ],
            tech1: [
              {
                title: "الشركاء/الأدوات",
                description: "Fortinet, Cisco, CrowdStrike, SentinelOne",
              },
            ],
            suggest: "الأفضل لـ: بيئات العمل الهجينة، الفرق الموزعة، تكاملات IoT/OT",
          },
          {
            title: "أمن السحابة و DevSecOps",
            description: "ضمان أن تكون بنيتك التحتية السحابية آمنة وقابلة للتطوير ومتكاملة بالكامل مع خط أنابيب DevOps الخاص بك.",
            tech: [
              {
                title: "الخدمات",
                description: "Cloud posture management, IAM, Container Security, CI/CD pipeline protection",
              },
            ],
            tech1: [
              {
                title: "المنصات",
                description: "AWS, Azure, Google Cloud, Kubernetes, Docker",
              },
            ],
            suggest: "الأفضل لـ: الشركات التي تنشر تطبيقات سحابية الأصل، منصات SaaS",
          },
          {
            title: "أمن التطبيقات ودورة حياة تطوير البرمجيات الآمنة (SDLC)",
            description: "نقوم بدمج الأمان في كل مرحلة من مراحل دورة حياة تطوير البرمجيات الخاصة بك.",
            tech: [
              {
                title: "الممارسات",
                description: "Code review, vulnerability assessment, penetration testing (VAPT)",
              },
            ],
            tech1: [
              {
                title: "الأدوات",
                description: "OWASP ZAP, Burp Suite, Veracode, Snyk",
              },
            ],
            suggest: "الأفضل لـ: شركات المنتجات، المطورين، التكنولوجيا المالية، تطبيقات الرعاية الصحية",
          },
          {
            title: "الحوكمة والمخاطر والامتثال (GRC)",
            description: "إنشاء ثقافة الأمن السيبراني مع حوكمة منظمة وآليات واضحة للتحكم في المخاطر.",
            tech: [
              {
                title: "الخدمات",
                description: "Security Audits, Policy Development, Data Protection Impact Assessments",
              },
            ],
            tech1: [
              {
                title: "دعم الامتثال",
                description: "NCA ECC, ISO 27001, NIST, GDPR, PCI-DSS",
              },
            ],
            suggest: "الأفضل لـ: العملاء الحكوميين، المؤسسات المالية، الصناعات المنظمة",
          },
          {
            title: "التوعية والتدريب السيبراني",
            description: "موظفوك هم خط الدفاع الأول. قم بتمكينهم بالمعرفة لتحديد التهديدات وتجنبها.",
            tech: [
              {
                title: "البرامج",
                description: "Phishing Simulation, Cyber Hygiene Training, Policy Education",
              },
            ],
            tech1: [
              {
                title: "التسليم",
                description: "الوحدات عبر الإنترنت، ورش العمل، التدريب القائم على الأدوار",
              },
            ],
            suggest: "الأفضل لـ: جميع المؤسسات التي تتطلع إلى تقليل نقاط الضعف الناتجة عن الأخطاء البشرية",
          },
        ],
      },
    }
  
    const { toptitle, toptitle1, topdescription, title, title1, title2, description, description1, services } = content[language]
  
    return (
      <div  className="w-full items-center justify-center">
      <div id="hero-section" className="w-full h-[50vh] relative">
        <img 
          src="cybertitle.jpg" 
          alt="Background" 
          className="w-full h-full object-cover shadow-lg" 
        />
                <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 rounded-lg ">
                <div className={`px-6 md:pl-32 text-white ${language === 'ar' ? 'ml-auto md:pr-20' : ''}`}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-7xl font-bold mb-4"
                        >
                        {toptitle}
                        <div className={`pt-2 ${language === 'ar' ? 'text-right ml-auto' : ''}`}>{toptitle1}</div>
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
                    {service.tech1?.map((tech1, tech1Index) => (
                <div key={tech1Index} className="text-sm md:text-lg text-gray-600 ">
                <strong className="text-2xl md:text-5xl font-light text-[#c132da]">{tech1.title}:</strong>
                <div className="text-lg md:text-2xl font-thin text-black">{tech1.description}</div>
                </div>
                    ))}
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
      </div>
    )
  }