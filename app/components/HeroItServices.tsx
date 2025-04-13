"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"

export default function HeroITServices() {
    const { language } = useLanguage()

    const content = {
        en: {
            title: "IT Services",
            description: "We offer a wide range of innovative technology solutions to help your business thrive in the digital age.",
        },
        ar: {
            title: "خدماتنا",
            description: "نقدم مجموعة واسعة من حلول التكنولوجيا المبتكرة لمساعدة عملك على الازدهار في العصر الرقمي.",
        },
    }

    const { title, description } = content[language]

    return (
        <section id="hero-section" className="w-full h-[50vh] flex items-center justify-center">
            <div className="w-full h-full relative">
                <img 
                    src="services/webdev.jpg" 
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
                            {title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-2xl mb-8"
                        >
                            {description}
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
}
