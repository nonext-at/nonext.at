"use client"

import { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { FaGithub, FaInstagram, FaEnvelope, FaChevronDown } from 'react-icons/fa'
import { ChevronRight, Pyramid, ExternalLink, Coffee, PenTool, Rocket, MessageSquare, Code, Palette, Wrench, Search, Server } from 'lucide-react'
import PyramidScene from './components/pyramid-scene'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from 'next/link'
import GalaxyJourney from './components/GalaxyJourney'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Projects from './components/projects'
import Process from './components/process'
import Customers from './components/customers'
import FAQ from './components/faq'
import Contact from './components/contact'

export default function Home() {
  const [showGalaxyJourney, setShowGalaxyJourney] = useState(false)

  const startGalaxyJourney = () => {
    setShowGalaxyJourney(true)
    setTimeout(() => {
      setShowGalaxyJourney(false)
    }, 30000)
  }

  const faqs = [
    {
      question: "What technologies do you use?",
      answer: "We primarily use modern web technologies such as React, Next.js, and Tailwind CSS. We also have experience with various backend technologies and databases."
    },
    {
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines can vary depending on the scope and complexity. A simple website might take 2-4 weeks, while more complex projects could take 2-3 months or more."
    },
    {
      question: "Do you offer ongoing support after the website is launched?",
      answer: "Yes, we offer maintenance packages to keep your website up-to-date, secure, and running smoothly after launch."
    },
    {
      question: "Can you help with content creation for my website?",
      answer: "While we don't provide full content creation services, we can guide you on best practices and help integrate your content into the website design effectively."
    }
  ]

  /* const [isHovered, setIsHovered] = useState(false) */
  /* const brandName = "nonext" */

  return (
    <div className="relative w-full min-h-screen">
      <AnimatePresence mode="wait">
        {showGalaxyJourney ? (
          <>
            <motion.div
              key="black-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              key="galaxy-journey"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="fixed inset-0 z-50"
            >
              <GalaxyJourney />
            </motion.div>
          </>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-black text-white min-h-screen font-sans"
          >
            <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-md">
              <nav className="flex justify-between items-center max-w-6xl mx-auto">
                {/* <motion.h1
                  className="text-2xl font-bold flex items-center space-x-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Pyramid className="w-6 h-6 relative top-1" />
                  <motion.div
                    className="text-2xl font-bold"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {brandName.split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        animate={{
                          color: isHovered ? (Math.random() > 0.5 ? '#fff' : 'rgba(0,0,0,0)') : '#fff',
                        }}
                        transition={{ duration: 0.1 }}
                        className="inline-block"
                        style={{
                          textShadow: isHovered ? '2px 2px 0 rgba(255,255,255,0.0)' : 'none'
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.h1> */}
                <Image src="/logo_white_transparent.png" draggable={false} alt="Brands Logo" width={125} height={0} className='select-none' />

                <motion.ul
                  className="flex space-x-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <li><a href="#about" className="hover:text-gray-300 transition-colors">Über uns</a></li>
                  <li><a href="#projects" className="hover:text-gray-300 transition-colors">Projekte</a></li>
                  <li><a href="#contact" className="hover:text-gray-300 transition-colors">Kontakt</a></li>
                </motion.ul>
              </nav>
            </header>

            <main>

              <Hero />

              <About />

              <Services />

              <Projects />

              <Process />

              <Customers />

              <FAQ />

              <Contact />
            </main>

            <footer className="py-6 px-4 text-center text-sm text-gray-500">
              <p>&copy; 2024 nonext. All rights reserved.</p>
              <p className="text-gray-500 text-sm mt-1">
                Made with 🤍 by <a href="https://www.nonext.io/" target="_blank" className="text-gray-300">nonext.io</a>
              </p>
              <button
                className=" text-[0.7rem] text-gray-500 hover:text-gray-300 transition-colors"
                onClick={startGalaxyJourney}
              >
                Klick mich nicht an
              </button>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}