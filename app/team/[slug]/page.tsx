'use client'

import { notFound, useParams } from "next/navigation";
import { useState, useRef, useEffect } from "react"
import { useAnimation, useInView, motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Mountain, Code, Paintbrush, Zap, Layers, ExternalLink } from 'lucide-react'
import teamData from "@/data/team.json"; // Import the JSON file 
import { useSectionContext } from "@/app/SectionContext";

const iconMap = {
  Code: <Code className="h-8 w-8 text-blue-400" />,
  Paintbrush: <Paintbrush className="h-8 w-8 text-purple-400" />,
  Zap: <Zap className="h-8 w-8 text-yellow-400" />,
  Layers: <Layers className="h-8 w-8 text-green-400" />
};

export default function BlockPage() {
  const { setSections } = useSectionContext();

    useEffect(() => {
        setSections([
          { id: "skills", label: "Fähigkeiten" },
          { id: "expertise", label: "Expertise" },
          { id: "projects", label: "Projekte" },
          { id: "contact", label: "Kontakt" },
        ]);
      }, [setSections]);
      
  const { slug } = useParams();

  const teamMember = teamData.find((member) => member.slug === slug);

  if (!teamMember){
    notFound()
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { scrollYProgress } = useScroll()
  const projectRef = useRef(null)
  const isInView = useInView(projectRef, { once: true })
  const controls = useAnimation()

  useEffect(() => {
  if (isInView) {
    controls.start("visible");
  }
}, [isInView]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }
 

  function HeroSection() {
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

    return (
      <section className="relative z-10 py-16 sm:py-24 overflow-hidden bg-black">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {teamMember.name}
                </motion.span>
                <motion.span
                  className="block text-2xl sm:text-3xl text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {teamMember.role}
                </motion.span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-md mx-auto lg:mx-0">
                {teamMember.bioShort}
              </p>
              <motion.div className="flex justify-center lg:justify-start">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Kontakt aufnehmen
                </Button>
              </motion.div>
            </motion.div>

            <div className="relative mt-8 lg:mt-0"> 
              <motion.div
                className="relative z-10 flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Image
                  src={teamMember.image}
                  alt={teamMember.name}
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-white/20 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function SkillsSection() {
    return (
      <section id="skills" className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2 
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>Fähigkeiten</motion.h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-0 md:px-32">
            {teamMember.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge className="bg-white/10 hover:bg-white/20 text-white transition-colors py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  function ProjectsSection() {
    const projectRef = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(projectRef, { once: true });
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView]);
  
    return (
      <section id="projects" className="py-16 relative z-10 bg-black" ref={projectRef}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Beteiligte Projekte</h2>
          <motion.div 
            animate={controls} 
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMember.featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-black border-white/20 overflow-hidden group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold  text-white">{project.name}</h3>
                        <Badge className="mb-2 -ml-1 bg-white/10 hover:bg-white/20 text-white">
                          Head Developer 
                        </Badge>
                        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-300 hover:text-gray-200 transition-colors duration-300"
                        >
                          Projekt ansehen
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  

  function ExpertiseSection() {
    return (
      <section id="expertise" className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMember.expertiseAreas.map((area, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black border-white/20 h-full hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {iconMap[area.icon]}
                      <h3 className="text-xl font-semibold ml-3 text-white">{area.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  

const ContactOption = ({ icon, title, description, link, glowColor, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center text-center"
  >
    <div className="bg-black rounded-full p-4 mb-4 border border-white/20" style={{ boxShadow: `0 0 15px ${glowColor}` }}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-400 hover:text-blue-300 transition-colors">
      Kontakt aufnehmen
    </a>
  </motion.div>
)

  function ContactSection() {
    return (
      <section id="contact" className="py-16 bg-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kontakt aufnehmen
        </motion.h2>
        <motion.p 
          className="text-gray-400 mb-12 max-w-2xl mx-auto text-center text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Interessiert an einer Zusammenarbeit oder haben Sie Fragen? Zögern Sie nicht, mich zu kontaktieren!
        </motion.p>
        <div className="grid grid-cols-1 gap-12 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-black border border-white/10 shadow-lg shadow-blue-500/5">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <ContactOption
                    icon={<Mail className="h-8 w-8 text-blue-400" />}
                    title="E-Mail"
                    description="Schreiben Sie mir eine E-Mail für detaillierte Anfragen oder Projektvorschläge."
                    link={`mailto:${teamMember.contact.email}`}
                    glowColor="#3b82f6"
                    delay={0.4}
                  />
                  <ContactOption
                    icon={<Github className="h-8 w-8 text-purple-400" />}
                    title="GitHub"
                    description="Sehen Sie sich meine Projekte und Beiträge auf GitHub an."
                    link={teamMember.contact.github}
                    glowColor="#a855f7"
                    delay={0.5}
                  />
                  <ContactOption
                    icon={<Linkedin className="h-8 w-8 text-blue-400" />}
                    title="LinkedIn"
                    description="Vernetzen Sie sich mit mir auf LinkedIn für professionelle Kontakte."
                    link={teamMember.contact.linkedin}
                    glowColor="#3b82f6"
                    delay={0.6}
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black border border-white/10 shadow-lg shadow-purple-500/5">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-white">Verfügbarkeit</h3>
                <p className="text-gray-300 mb-4">Montag - Freitag: 9:00 - 17:00 Uhr</p>
                <Separator className="my-4 bg-white/10" />
                <p className="text-gray-400 text-sm">
                  Außerhalb dieser Zeiten antworte ich in der Regel innerhalb von 24 Stunden.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
    )
  } 

  return (
    <div className="bg-black text-white min-h-screen"> 
      <HeroSection />
      <SkillsSection />
      <ExpertiseSection />
      <ProjectsSection /> 
      <ContactSection /> 
    </div>
  )
}