"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [isTransparent, setIsTransparent] = useState(true);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsTransparent(window.scrollY < heroBottom);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: language === "en" ? "Home" : "الرئيسية" },
    { href: "/about", label: language === "en" ? "About" : "من نحن" },
    {
      href: "/services",
      label: language === "en" ? "Services" : "خدماتنا",
      subItems: [
        { href: "/services/web-development", label: language === "en" ? "Web Development" : "تطوير الويب" },
        { href: "/services/mobile-development", label: language === "en" ? "Mobile App Development" : "تطوير تطبيقات الجوال" },
        { href: "/services/cybersecurity", label: language === "en" ? "Cybersecurity Solutions" : "حلول الأمن السيبراني" },
        { href: "/services/consulting-digital-strategy", label: language === "en" ? "Consulting & Digital Strategy" : "الاستشارات والاستراتيجيات الرقمية" },
        { href: "/services/it-infrastructure-cloud-services", label: language === "en" ? "IT Infrastructure & Cloud Services" : "البنية التحتية لتكنولوجيا المعلومات والخدمات السحابية" },
        { href: "/services/erp-solutions", label: language === "en" ? "ERP Solutions" : "حلول تخطيط موارد المؤسسات" },
        { href: "/services/testing-qa", label: language === "en" ? "Testing and Quality Assurance" : "اختبار وضمان الجودة" },
      ],
    },
    { href: "/contact", label: language === "en" ? "Contact" : "اتصل بنا" },
  ];

  const handleMouseEnter = (menu: string) => setHoveredMenu(menu);
  const handleMouseLeave = () => setHoveredMenu(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isTransparent ? "bg-transparent" : "bg-white text-[#12004c]"
      }`}
    >
      <nav className="container mx-auto px-4 py-2">
        <div className={`flex justify-between items-center ${language === "ar" ? "flex-row-reverse" : ""}`}>
          <Link href="/" className={isTransparent ? "text-blue-500" : "text-[#12004c]"}>
            <img
              src={isTransparent ? "/ICSCT-logo-white.svg" : "/ICSCT-logo-colour.svg"}
              alt={language === "en" ? "ICSCT" : "إكسيت"}
              className="h-[70px]"
            />
          </Link>
          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`text-xl hover:text-secondary pb-3 ${
                    isTransparent ? "text-white" : "text-[#12004c]"
                  } ${language === "ar" ? "ml-4" : "mr-4"} flex items-center`}
                >
                  {language === "en" ? (
                    <>
                      {item.label}
                      {item.subItems && <FaChevronDown className="ml-2" />}
                    </>
                  ) : (
                    <>
                      {item.subItems && <FaChevronDown className="mr-2" />}
                      {item.label}
                    </>
                  )}
                </Link>
                {item.subItems && hoveredMenu === item.label && (
                  <div className="absolute top-full py-2 w-60 bg-white rounded-lg shadow-lg">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block px-4 py-2 text-lg text-gray-800 hover:bg-gray-800 hover:text-white  ${language === 'ar' ? 'text-right' : ''}`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              className={`text-base ${
                isTransparent
                  ? "border-white text-white hover:bg-white hover:text-primary"
                  : "border-[#12004c] text-[#12004c] hover:bg-[#12004c] hover:text-primary"
              } ${language === "ar" ? "ml-5" : "ml-5"}`}
            >
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className={`text-2xl ${isTransparent ? "text-white" : "text-[#12004c]"}`}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40">
            <ul className={`flex flex-col ${language === "ar" ? "text-right pr-4" : "items-start pl-4"} p-4`}>
              {navItems.map((item) => (
                <li key={item.href} className="mb-2">
                  <Link
                    href={item.href}
                    className="text-lg text-gray-800 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <ul className={`pl-4 ${language === "ar" ? "text-right pr-4" : ""}`}>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.href} className="mb-1">
                          <Link
                            href={subItem.href}
                            className="text-sm text-gray-600 hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Button
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full text-base border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                >
                  {language === "en" ? "العربية" : "English"}
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
