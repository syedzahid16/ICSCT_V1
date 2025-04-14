import "./globals.css"
import { Roboto, Noto_Kufi_Arabic } from "next/font/google"
import type React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { LanguageProvider } from "./contexts/LanguageContext"
import { ThemeProvider } from "./components/ThemeProvider"
import localFont from "next/font/local"

// Load Roboto font for English text
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

// Load Noto_Kufi_Arabic for Arabic text
const notoKufiArabic = Noto_Kufi_Arabic({
  weight: ["100","300","400", "700"],
  subsets: ["arabic"],
  variable: "--font-noto-kufi-arabic",
  display: "swap",
})

// const dinNextArabic = localFont({
//   src: [
//     {
//       path: "fonts/dinnext.woff2",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-noto-kufi-arabic",
// })

export const metadata = {
  title: "ICSCT - Innovating Digital Transformation",
  description: "Empowering businesses with cutting-edge technology solutions",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${roboto.variable} ${notoKufiArabic.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'