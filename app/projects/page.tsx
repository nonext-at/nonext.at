'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mountain, ExternalLink } from 'lucide-react'
import projectsData from "@/data/projects.json"

export default function ProjectsPage() { 
  const projectsRef = useRef(null)

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
            {/* <nav>
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
            </nav> */}
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
                    href="/team"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Team Seite
                </a>
              </li>
              <li>
                <a 
                  className="text-sm text-gray-400 hover:text-white transition-colors underline-offset-4 underline cursor-pointer"
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
      <section className="relative z-10 py-16 sm:pt-24 overflow-hidden bg-black">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Unsere Projekte
            </h1>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              Entdecken Sie unsere innovativen Lösungen und kreativen Arbeiten. Jedes Projekt erzählt eine einzigartige Geschichte von Design und Technologie.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  function ProjectsSection() {
    return (
      <section className="pb-16 bg-black" ref={projectsRef}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-16">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-4 text-white">{project.title}</h2>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="group">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-black">
                        Projekt ansehen
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              <a href="https://www.instagram.com/nonext.io" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                Instagram
              </a>
              <a href="https://github.com/nonext-io" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
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
      <ProjectsSection />
      <Footer />
    </div>
  )
}