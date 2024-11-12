"use client"

import { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaEnvelope, FaChevronDown } from 'react-icons/fa'
import PyramidScene from './pyramid-scene'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateHeight = () => {
      if (heroRef.current) {
        heroRef.current.style.height = `${window.innerHeight}px`
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const projects = [
    {
      name: "Fränkis Pub",
      description: "Eine schlichte one-pager Website mit den wichtigsten infos.",
      image: "/Projekt1.png"
    },
    {
      name: "Project Beta",
      description: "An innovative mobile-first design implementing the latest responsive web design principles.",
      image: "/Projekt2.png"
    },
    {
      name: "Project Gamma",
      description: "A high-performance e-commerce platform built with Next.js, featuring server-side rendering and API routes.",
      image: "/Projekt3.png"
    }
  ]

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <motion.h1 
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            nonext
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
            <Button onClick={scrollToAbout} variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors">
              Explore Our Work
            </Button>
          </div>

          <Canvas className="absolute inset-0">
            <PyramidScene />
          </Canvas>

          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            onClick={scrollToAbout}
          >
            <FaChevronDown className="text-4xl animate-bounce" />
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
                <h3 className="text-xl font-semibold mb-2">Michael Prietl</h3>
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
              className="text-3xl font-bold mb-12 text-center"
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
                <Card key={index}>
                  <CardContent className="p-6">
                    <img src={project.image} alt={project.name} className="w-full h-40 object-cover mb-4 rounded" />
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Button variant="outline">View Project</Button>
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
      </footer>
    </div>
  )
}