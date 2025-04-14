"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CTASection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Ready to Transform Your Business?",
      description: "Let's work together to bring your digital vision to life.",
      cta: "Get Started",
    },
    ar: {
      title: "هل أنت مستعد لتحويل عملك؟",
      description: "دعنا نعمل معًا لتحقيق رؤيتك الرقمية.",
      cta: "ابدأ الآن",
    },
  }

  const { title, description, cta } = content[language]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl mb-8"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">{cta}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

