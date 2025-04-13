"use client"

import { useLanguage } from "../../contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ITInfraCloud() {
  const { language } = useLanguage();

  const content = {
    en: {
      toptitle: "Smart Infrastructure &",
      toptitle1: "Cloud Solutions",
      topdescription: "Empowering Your Digital Backbone Modernizing Businesses with Agile, Scalable & Secure IT Infrastructure and Cloud Ecosystems",
      title: "IT Infrastructure",
      title1: "& Cloud ",
      title2: "Services",
      description: "In today’s hyper-digital world, IT infrastructure is the foundation of operational excellence. Whether you're scaling a startup, running critical enterprise workloads, or transforming government operations, your infrastructure must be robust, adaptive, and ready for the future.",
      description1: "At ICSCT (إكسيت), we engineer next-gen infrastructure and cloud solutions that enable agility, efficiency, and security. We help businesses migrate, manage, and modernize their technology backbone—leveraging the power of cloud, automation, and intelligent infrastructure to support continuous innovation.",
      services: [
        {
          title: "IT Infrastructure Consulting & Design",
          description: "We evaluate your current systems and architect future-ready, performance-optimized infrastructure—whether physical, virtual, or cloud-native.",
          tech: [
            {
              title: "Capabilities",
              description: "Infrastructure Audit & Gap Analysis, Architecture Design (Network, Server, Storage), Vendor & Platform Evaluation",
            },
          ],
          tech1: [],
          tech2: [],
          suggest: "Best For: Enterprises, government clients, and businesses scaling digital operations",
        },
        {
          title: "Cloud Migration & Modernization",
          description: "Seamlessly move to the cloud—without disruptions. We help you migrate legacy systems, refactor applications, and modernize your stack for speed, agility, and cost-efficiency.",
          tech: [
            {
              title: "Services",
              description: "Lift-and-Shift, Refactor, Replatform, Hybrid Cloud & Multi-Cloud Strategy, Cost Optimization & Resource Scaling",
            },
          ],
          tech1: [
            {
              title: "Cloud Providers",
              description: "AWS, Microsoft Azure, Google Cloud Platform, Oracle Cloud",
            },
          ],
          tech2: [],
          suggest: "Best For: Businesses modernizing outdated systems or launching scalable cloud apps",
        },
        {
          title: "Managed IT Services & Support",
          description: "Keep your infrastructure running at peak performance with 24/7 monitoring, maintenance, and end-user support.",
          tech: [
            {
              title: "Solutions",
              description: "Infrastructure Monitoring & Incident Response, Patch Management, Backup & Disaster Recovery, Remote IT Support & Helpdesk Services",
            },
          ],
          tech1: [],
          tech2: [],
          suggest: "Best For: Organizations without internal IT teams or needing full infrastructure management",
        },
        {
          title: "Cloud-Native Application Hosting",
          description: "Host modern apps with high availability, auto-scaling, and built-in resilience on cloud platforms designed for speed and scale.",
          tech: [
            {
              title: "Technologies",
              description: "Serverless Deployments, Container Orchestration (Docker & Kubernetes), API Gateways & Edge Deployments",
            },
          ],
          tech1: [],
          tech2: [],
          suggest: "Best For: SaaS companies, high-traffic applications, developers, and startups",
        },
        {
          title: "Data Storage, Backup & Disaster Recovery",
          description: "Protect critical data with secure backup strategies and rapid recovery systems to ensure business continuity.",
          tech: [
            {
              title: "Capabilities",
              description: "Offsite/Cloud Backups, Snapshots, Real-Time Replication, Disaster Recovery Planning (RTO & RPO Compliance), High Availability Systems",
            },
          ],
          tech1: [],
          tech2: [],
          suggest: "Best For: Healthcare, finance, public services, and regulated industries",
        },
        {
          title: "Network Security & Access Control",
          description: "Design secure internal and external networks with firewall systems, VPNs, and encrypted access for distributed teams.",
          tech: [
            {
              title: "Solutions",
              description: "Network Segmentation & Zoning, VPN, SD-WAN, Zero Trust Network Access (ZTNA), Firewalls, NAC & Endpoint Control",
            },
          ],
          tech1: [],
          tech2: [],
          suggest: "Best For: Hybrid workplaces, government agencies, and large enterprises",
        },
      ],
    },
    ar: {
      toptitle: "البنية التحتية الذكية و",
      toptitle1: "حلول السحابة",
      topdescription: "تمكين العمود الفقري الرقمي الخاص بك تحديث الأعمال باستخدام بنية تحتية لتكنولوجيا المعلومات ونظم سحابية مرنة وقابلة للتطوير وآمنة",
      title: "البنية التحتية",
      title1: "وخدمات",
      title2: "السحابة",
      description: "في عالم اليوم الرقمي المتسارع، تعد البنية التحتية لتكنولوجيا المعلومات أساس التميز التشغيلي. سواء كنت توسع شركة ناشئة، أو تدير أحمال عمل مؤسسية حرجة، أو تحول العمليات الحكومية، يجب أن تكون بنيتك التحتية قوية وقابلة للتكيف وجاهزة للمستقبل.",
      description1: "في ICSCT (إكسيت)، نقوم بتصميم حلول البنية التحتية السحابية من الجيل التالي التي تمكن من المرونة والكفاءة والأمان. نحن نساعد الشركات على ترحيل وإدارة وتحديث العمود الفقري التكنولوجي الخاص بها—مع الاستفادة من قوة السحابة والأتمتة والبنية التحتية الذكية لدعم الابتكار المستمر.",
      services: [
        {
          title: "استشارات وتصميم البنية التحتية لتكنولوجيا المعلومات",
          description: "نقوم بتقييم الأنظمة الحالية وتصميم بنية تحتية جاهزة للمستقبل ومحسنة للأداء—سواء كانت مادية أو افتراضية أو سحابية الأصل.",
          tech: [
            {
              title: "القدرات",
              description: "تدقيق البنية التحتية وتحليل الفجوات، تصميم البنية (الشبكة، الخادم، التخزين)، تقييم البائعين والمنصات",
            },
          ],
          tech1: [],
          tech2: [],
          suggest: "الأفضل لـ: المؤسسات، العملاء الحكوميين، والشركات التي توسع العمليات الرقمية",
        },
        {
          title: "ترحيل وتحديث السحابة",
          description: "الانتقال إلى السحابة بسلاسة—دون انقطاعات. نحن نساعدك على ترحيل الأنظمة القديمة، وإعادة هيكلة التطبيقات، وتحديث البنية لتحقيق السرعة والمرونة وكفاءة التكلفة.",
          tech: [
            {
              title: "الخدمات",
              description: "الرفع والتحويل، إعادة الهيكلة، إعادة المنصة، استراتيجية السحابة الهجينة والمتعددة، تحسين التكلفة وتوسيع الموارد",
            },
          ],
          tech1: [
            {
              title: "مزودو السحابة",
              description: "AWS، Microsoft Azure، Google Cloud Platform، Oracle Cloud",
            },
          ],
          tech2: [],
          suggest: "الأفضل لـ: الشركات التي تقوم بتحديث الأنظمة القديمة أو إطلاق تطبيقات سحابية قابلة للتوسع",
        },
        {
          title: "خدمات ودعم تكنولوجيا المعلومات المُدارة",
          description: "حافظ على تشغيل بنيتك التحتية بأداء عالٍ مع المراقبة والصيانة والدعم للمستخدم النهائي على مدار الساعة.",
          tech: [
            {
              title: "الحلول",
              description: "مراقبة البنية التحتية والاستجابة للحوادث، إدارة التصحيحات، النسخ الاحتياطي واستعادة البيانات، دعم تكنولوجيا المعلومات عن بُعد وخدمات مكتب المساعدة",
            },
          ],
          tech1: [],
          tech2: [],
          suggest: "الأفضل لـ: المؤسسات التي لا تمتلك فرق تكنولوجيا المعلومات الداخلية أو تحتاج إلى إدارة البنية التحتية بالكامل",
        },
        {
          title: "استضافة التطبيقات السحابية الأصلية",
          description: "استضافة التطبيقات الحديثة مع التوافر العالي، التوسع التلقائي، والمرونة المدمجة على منصات السحابة المصممة للسرعة والتوسع.",
          tech: [
            {
              title: "التقنيات",
              description: "النشر بدون خادم، تنسيق الحاويات (Docker & Kubernetes)، بوابات API والنشر على الحافة",
            },
          ],
          tech1: [],
          tech2: [],
          suggest: "الأفضل لـ: شركات SaaS، التطبيقات ذات الحركة العالية، المطورين، والشركات الناشئة",
        },
        {
          title: "تخزين البيانات والنسخ الاحتياطي واستعادة البيانات",
          description: "حماية البيانات الهامة باستخدام استراتيجيات النسخ الاحتياطي الآمنة وأنظمة الاستعادة السريعة لضمان استمرارية الأعمال.",
          tech: [
            {
              title: "القدرات",
              description: "النسخ الاحتياطي خارج الموقع/السحابة، اللقطات، النسخ المتماثل في الوقت الفعلي، تخطيط استعادة البيانات (الامتثال لـ RTO & RPO)، أنظمة التوافر العالي",
            },
          ],
          tech1: [],
          tech2: [],
          suggest: "الأفضل لـ: الرعاية الصحية، التمويل، الخدمات العامة، والصناعات المنظمة",
        },
        {
          title: "أمن الشبكات والتحكم في الوصول",
          description: "تصميم شبكات داخلية وخارجية آمنة مع أنظمة الجدران النارية، VPNs، والوصول المشفر للفرق الموزعة.",
          tech: [
            {
              title: "الحلول",
              description: "تجزئة الشبكة والتقسيم، VPN، SD-WAN، الوصول إلى الشبكة بدون ثقة (ZTNA)، الجدران النارية، التحكم في الوصول إلى النقاط النهائية",
            },
          ],
          tech1: [],
          tech2: [],
          suggest: "الأفضل لـ: أماكن العمل الهجينة، الوكالات الحكومية، والمؤسسات الكبيرة",
        },
      ],
    },
  };

  const { toptitle, toptitle1, topdescription, title, title1, title2, description, description1, services } = content[language];

  return (
    <section className="w-full items-center justify-center">
      <div id="hero-section" className="w-full h-[50vh] relative">
        <img
          src="cloudtitle.jpg"
          alt="Background"
          className="w-full h-full object-cover shadow-lg"
        />
        <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 rounded-lg">
          <div className={`px-6 md:pl-32 text-white ${language === 'ar' ? 'md:ml-auto text-right md:pr-20' : ''}`}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold mb-4"
            >
              {toptitle}
              <div className={`${language === 'ar' ? 'md:ml-auto text-right md:pr-20' : ''}`}>{toptitle1}</div>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={"text-lg md:text-2xl mb-8" + (language === 'ar' ? ' md: pr-5 text-right' : '')}
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
                        {/* {service.tech2?.map((tech2, tech2Index) => (
                          <div key={tech2Index} className="text-sm md:text-lg text-gray-600">
                            <strong className="text-2xl md:text-5xl font-light text-[#3ba2ff]">{tech2.title}:</strong>
                            <div className="text-lg md:text-2xl font-thin text-black">{tech2.description}</div>
                          </div>
                        ))} */}
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
  );
}
