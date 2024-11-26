'use client'

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mountain, Users, Briefcase, Code } from 'lucide-react'
import teamData from "@/data/team.json"

import { useSectionContext } from "../SectionContext";

export default function TeamPage() {
  const { setSections } = useSectionContext();

    useEffect(() => {
        setSections([
          { id: "our-team", label: "Unser Team" },
          { id: "about-us", label: "Über uns" }, 
        ]);
      }, [setSections]);
       
  const teamRef = useRef(null)

  // Function to determine grid columns based on team size
  const getGridColumns = (teamSize: number) => {
    if (teamSize === 1) return 'grid-cols-1'
    if (teamSize === 2) return 'sm:grid-cols-2'
    return 'sm:grid-cols-2 lg:grid-cols-3'
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

  return (
    <div className="bg-black text-white min-h-screen"> 
      <HeroSection />
      <TeamInfoSection /> 
    </div>
  )
}