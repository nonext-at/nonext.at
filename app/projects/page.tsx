'use client'

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from 'lucide-react'
import projectsData from "@/data/projects.json"

import { useSectionContext } from "../SectionContext";

export default function ProjectsPage() {
  const { setSections } = useSectionContext();

  useEffect(() => {
    setSections([
    ]);
  }, [setSections]);

  const projectsRef = useRef(null)

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

  return (
    <div className="bg-black text-white min-h-screen">
      <HeroSection />
      <ProjectsSection />
    </div>
  )
}