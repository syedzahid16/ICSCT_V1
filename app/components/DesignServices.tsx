"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "../../components/ui/card";

export default function Services() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Our Creative",
      title1: "Design",
      title2: "Services.",
      description: "Empowering Your Vision with Creative Design Solutions",
      services: [
        {
          title: "UI/UX",
          title1: "Design",
        },
        {
          title: "Branding &",
          title1: "Identity",
        },
        {
          title: "Social Media",
          title1: "Marketing",
        },
        {
          title: "Printing &",
          title1: "Collaterals",
        },
      ],
    },
    ar: {
      title: "إبداعنا",
      title1: "في التصميم",
      title2: "الخدمات.",
      description: "تمكين رؤيتك من خلال حلول تصميم إبداعية",
      services: [
        {
          title: "تصميم واجهات المستخدم وتجربة المستخدم",
          title1: "",
        },
        {
          title: "العلامة التجارية و",
          title1: "الهوية",
        },
        {
          title: "التسويق عبر وسائل",
          title1: "التواصل الاجتماعي",
        },
        {
          title: "الطباعة و",
          title1: "المطبوعات",
        },
      ],
    },
  };

  const { title, title1, title2, description, services } = content[language];

  return (
    <div className={`${language === "ar" ? "text-right" : ""}`}>
      <section className="w-11/12 mx-auto py-10">
        <div className="container mx-auto">
          <div
            className={`flex flex-col justify-center ${
              language === "ar" ? "order-last" : ""
            }`}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-9xl font-thin mb-4 text-gradient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, ease: "linear" }}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  direction: language === "ar" ? "rtl" : "ltr",
                }}
              >
                {title}
                <div>
                  {title1}{" "}
                  <span className="text-[#c132da]">{title2}</span>
                  <img
                    src="/box2.svg"
                    alt="Serve Icon"
                    className="inline-block w-24 h-30 md:w-64 md:h-30 ml-2 pb-4 md:pb-8"
                  />
                </div>
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
              className="text-lg md:text-xl lg:text-2xl font-light mb-8"
            >
              {description}
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="rounded-none h-60 md:h-80 border-none"
                  style={{
                    backgroundImage: `url('/${content.en.services[
                      index
                    ].title.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}.jpeg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <CardHeader>
                    <CardTitle
                      className={`text-2xl md:text-3xl lg:text-4xl text-white pt-10 md:pt-20 text-center leading-snug break-words w-10/12 mx-auto ${
                        language === "ar" ? "text-xl md:text-2xl" : ""
                      }`}
                    >
                      {service.title}
                      <div>{service.title1}</div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
