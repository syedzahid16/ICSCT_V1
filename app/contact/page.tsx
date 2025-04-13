"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Contact Us",
      description: "Get in touch with us for any inquiries or support.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      address: "Sheikh Abdul Latif Bin 83632821 Ibrahim Street 12652 Riyadh, Saudi Arabia",
      phone: "+966 55 770 2910",
      emailAddress: "info@icsct.sa",
    },
    ar: {
      title: "اتصل بنا",
      description: "تواصل معنا لأي استفسارات أو دعم.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      submit: "إرسال الرسالة",
      address: "شارع الشيخ عبد اللطيف بن إبراهيم ٨٣٦٣٢٨٢١، ١٢٦٥٢ الرياض، المملكة العربية السعودية",
      phone: "+٩٦٦٥٥٧٧٠٢٩١٠",
      emailAddress: "info@icsct.sa",
    },
  }

  const { title, description, name, email, message, submit, address, phone, emailAddress } = content[language]

  return (
    <section>
      <div id="hero-section" className="w-full h-[50vh] relative">
        <img 
          src="services/webdev.jpg" 
          alt="Background" 
          className="w-full h-full object-cover shadow-lg" 
        />
            <div className="absolute inset-0 pt-12 flex items-center">
            <div className={`pl-32 text-white ${language === 'ar' ? 'ml-auto pr-20' : ''}`}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`text-7xl md:text-7xl font-bold mb-4 ${language === 'ar' ? ' pl-20' : ''}`}
                    >
                        {title}
                        
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl mb-8"
                    >
                        {description}
                    </motion.p>
                    </div>
                </div>
            </div>
    <div className={`container mx-auto px-4 py-16 mt-8 ${language === "ar" ? "text-right" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{language === "en" ? "Send us a message" : "أرسل لنا رسالة"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    {name}
                  </label>
                  <Input type="text" id="name" name="name" required className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    {email}
                  </label>
                  <Input type="email" id="email" name="email" required className="w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    {message}
                  </label>
                  <Textarea id="message" name="message" rows={4} required className="w-full" />
                </div>
                <Button type="submit">{submit}</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{language === "en" ? "Our Information" : "معلوماتنا"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className={`flex items-center ${language === "ar" ? "flex-row-reverse text-right" : ""}`}>
                  <MapPin className={`${language === "ar" ? "ml-2" : "mr-2"}`} />
                  <p>{address}</p>
                </div>
                <div className={`flex items-center ${language === "ar" ? "flex-row-reverse text-right" : ""}`}>
                  <Phone className={`${language === "ar" ? "mr-2" : "mr-2"}`} />
                  <p>{phone}</p>
                </div>
                <div className={`flex items-center ${language === "ar" ? "flex-row-reverse text-right" : ""}`}>
                  <Mail className={`${language === "ar" ? "ml-2" : "mr-2"}`} />
                  <p>{emailAddress}</p>
                </div>
              </div>
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.9999999999995!2d46.7137260437012!3d24.6258792877197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM3JzMzLjIiTiA0NsKwNDInNDkuNCJF!5e0!3m2!1sen!2ssa!4v1697040000000!5m2!1sen!2ssa"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
    </section>
  )
}

