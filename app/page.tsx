"use client"

import { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaEnvelope, FaChevronDown } from 'react-icons/fa'
import { ChevronRight, Pyramid } from 'lucide-react'
import PyramidScene from './pyramid-scene'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import GalaxyJourney from './GalaxyJourney'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [showGalaxyJourney, setShowGalaxyJourney] = useState(false)

  const updateHeight = () => {
    if (heroRef.current) {
      heroRef.current.style.height = `${window.innerHeight}px`
    }
  }

  useEffect(() => {
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  useEffect(() => {
    if (!showGalaxyJourney) { 
      setTimeout(updateHeight, 100)
    }
  }, [showGalaxyJourney])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const startGalaxyJourney = () => {
    setShowGalaxyJourney(true)
    setTimeout(() => {
      setShowGalaxyJourney(false)
    }, 30000)
  }

  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      name: "nonext.io",
      description: "nonext is a sleek one-pager showcasing our top projects. It’s a simple and intuitive gateway to explore our work and collaborations.",
      image: "/Projekt1.png",
      url: "https://nonext.io",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "Three.js", "motion"]
    },
    {
      name: "Fränkis Pub",
      description: "A modern, mobile-friendly site for Fränkis Pub. Discover events, browse the menu, and connect with your favorite local spot.",
      image: "/Projekt2.png",
      url: "https://fraenkis.nonext.io",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "motion"]
    },
    {
      name: "Reality Break",
      description: "The official site for Reality Break, featuring music, tour info, and band members. A seamless way for fans to connect with the band.",
      image: "/Projekt3.png",
      url: "https://reality-break.nonext.io",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "motion"]
    }
  ]

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
                <motion.h1
                  className="text-2xl font-bold flex items-center space-x-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Pyramid className="w-6 h-6 relative top-1" />
                  <span>nonext</span>
                </motion.h1>

                <motion.ul
                  className="flex space-x-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <li><a href="#about" className="hover:text-gray-300 transition-colors">About</a></li>
                  <li><a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a></li>
                  <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
                </motion.ul>
              </nav>
            </header>

            <main>
              <section ref={heroRef} className="relative overflow-hidden">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-center">
                  <h2 className="text-5xl font-bold mb-4">Welcome to nonext</h2>
                  <p className="text-xl mb-8">Creating modern, unique websites</p>
                  <Button onClick={scrollToAbout} variant="outline" className="text-black border-white hover:bg-white hover:text-black transition-colors">
                    Explore Our Work
                  </Button>
                </div>

                <Canvas className="absolute inset-0" style={{ height: '100vh' }}>
                  <PyramidScene />
                </Canvas>

                <motion.div
                  className="absolute bottom-4 transform -translate-x-1/2 cursor-pointer w-full flex justify-center items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  onClick={scrollToAbout}
                >
                  <FaChevronDown className="text-4xl animate-bounce text-white" />
                </motion.div>
              </section>

              <section id="about" className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                  <motion.h2
                    className="text-3xl font-bold mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    About Us
                  </motion.h2>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="text-center">
                      <img src="/maikeru.jpg" alt="Michael Prietl" className="w-40 h-40 rounded-full mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        <a href="https://michael.nonext.io" target="_blank" rel="noopener noreferrer">
                          Michael Prietl
                        </a>
                      </h3>
                      <p>Front-/Backend Developer & Designer</p>
                    </div> 
                    <div className="text-center">
                      <img src="/nohell.png" alt="Noel Hermann" className="w-40 h-40 rounded-full mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Noel Hermann</h3>
                      <p>Front-/Backend Developer & Datenbanken</p>
                    </div>
                  </motion.div>
                </div>
              </section>

              <section id="projects" className="py-20 px-4 bg-white text-black">
                <div className="max-w-6xl mx-auto">
                  <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Our Projects
                  </motion.h2>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {projects.map((project, index) => (
                      <Card 
                        key={index}
                        className="bg-white text-black overflow-hidden transition-all duration-300 transform hover:scale-105 border border-gray-200"
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <CardContent className="p-0">
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.name} 
                              className="w-full h-full object-cover transition-all duration-300 transform hover:scale-110 filter grayscale"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <Button
                                variant="outline"
                                className="text-black border-white hover:bg-white hover:text-black"
                                onClick={() => window.open(project.url, '_blank')}
                              >
                                View Project
                              </Button>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tech.map((tech, techIndex) => (
                                <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">{tech}</span>
                              ))}
                            </div>
                            <Button
                              variant="link"
                              className="text-black hover:text-gray-600 p-0 h-auto font-normal"
                              onClick={() => window.open(project.url, '_blank')}
                            >
                              Learn more <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </motion.div>
                </div>
              </section>

              <section id="contact" className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.h2
                    className="text-3xl font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Get in Touch
                  </motion.h2>
                  <motion.p
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Have a project in mind? Let's create something amazing together.
                  </motion.p>
                  <motion.div
                    className="flex justify-center space-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <a href="#" className="text-2xl hover:text-gray-300 transition-colors"><FaGithub /></a>
                    <a href="#" className="text-2xl hover:text-gray-300 transition-colors"><FaInstagram /></a>
                    <a href="#" className="text-2xl hover:text-gray-300 transition-colors"><FaEnvelope /></a>
                  </motion.div>
                </div>
              </section>
            </main>

            <footer className="py-6 px-4 text-center text-sm">
              <p>&copy; 2024 nonext. All rights reserved.</p>
              <button
                className="mt-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
                onClick={startGalaxyJourney}
              >
                Do not click me
              </button>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}