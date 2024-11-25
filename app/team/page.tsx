'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mountain, Users, Briefcase, Code } from 'lucide-react'
import teamData from "@/data/team.json"

export default function TeamPage() {
  const { scrollYProgress } = useScroll()
  const teamRef = useRef(null)

  // Function to determine grid columns based on team size
  const getGridColumns = (teamSize: number) => {
    if (teamSize === 1) return 'grid-cols-1'
    if (teamSize === 2) return 'sm:grid-cols-2'
    return 'sm:grid-cols-2 lg:grid-cols-3'
  }

  function Header() {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <header className="py-4 bg-black border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-5xl flex justify-between items-center">
          {/* Left Navigation (Logo + Current Page Sections) */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <a
              className="cursor-pointer p-1 px-2 flex items-center"
              href="/"
            >
              <Image
                src="/logo.webp"
                alt="Nonext Logo"
                width={100}
                height={100}
                priority
                draggable={false}
                className="select-none"
              />
            </a>

            {/* Current Page Sections */}
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <button
                    onClick={() => scrollToSection("our-team")}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Unser Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about-us")}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Über uns
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Home Seite
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-400 underline-offset-4 underline hover:text-white transition-colors cursor-pointer"
                >
                  Team Seite
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Projekte Seite
                </a>
              </li> 
            </ul>
          </nav>

        </div>
      </header>
    )
  }

  function HeroSection() {
    return (
      <section id="our-team" className="relative z-10 py-16 sm:py-24 overflow-hidden bg-black">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Unser Team
            </h1>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              Lernen Sie die kreativen Köpfe kennen, die nonext antreiben und innovative Lösungen für unsere Kunden entwickeln.
            </p>
          </motion.div>
          <div className={`grid ${getGridColumns(teamData.length)} gap-8 justify-items-center`} ref={teamRef}>
            {teamData.map((member, index) => (
              <motion.div
                key={member.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-xs"
              >
                <Link href={`/team/${member.slug}`} className="group">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4 overflow-hidden rounded-full border-4 border-white/20 transition-all duration-300 group-hover:border-white/40">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="rounded-full transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-blue-400">{member.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{member.role}</p>
                    <Button variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white transition-colors">
                      Profil ansehen
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  function TeamInfoSection() {
    return (
      <section id="about-us" className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Über unser Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white/5 rounded-lg p-6 h-full hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Zusammenarbeit</h3>
                </div>
                <p className="text-gray-300">
                  Unser Team zeichnet sich durch enge Zusammenarbeit und offene Kommunikation aus. Wir nutzen agile Methoden, um flexibel auf Projektanforderungen zu reagieren und kontinuierlich voneinander zu lernen.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white/5 rounded-lg p-6 h-full hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Arbeitsaufteilung</h3>
                </div>
                <p className="text-gray-300">
                  Jedes Teammitglied bringt einzigartige Fähigkeiten ein. Wir verteilen Aufgaben basierend auf individuellen Stärken, fördern aber auch die Weiterentwicklung in neuen Bereichen, um vielseitige Experten zu werden.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Technologie-Stack</h3>
              </div>
              <p className="text-gray-300">
                Wir setzen auf moderne Technologien wie React, Next.js und TypeScript für Frontend-Entwicklung, kombiniert mit robusten Backend-Lösungen. Unser Team ist stets bestrebt, neue Technologien zu erlernen und in unsere Projekte zu integrieren, um innovative und zukunftssichere Lösungen zu schaffen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  function Footer() {
    return (
      <footer className="py-8 border-t border-white/20 bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/logo.webp"
                alt="Nonext Logo"
                width={120}
                height={120}
                draggable={false}
                className="select-none"
              />
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nonext.at" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                Instagram
              </a>
              <a href="https://github.com/nonext-at" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/company/nonext" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} nonext. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <HeroSection />
      <TeamInfoSection />
      <Footer />
    </div>
  )
}