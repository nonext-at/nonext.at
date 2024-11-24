"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { Code, Palette, Zap, Search, Server, Users, ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Github, Linkedin, Mail, Globe, Coffee, ChevronUp, ChevronDown, MessageSquare, PenTool, Code2, CheckCircle, Target, Lightbulb, Rocket, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SpinningPyramid from "./SpinningPyramid"
import PyramidScene from "@/components/pyramid-scene"
import Customers from '@/components/customers'
import { Canvas } from "@react-three/fiber"

function Header() {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <header className="py-4 bg-black border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-5xl flex justify-between items-center">
          <div className="text-xl font-bold">nonext</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="javascript:void(0)" onClick={() => scrollToSection('services')} className="text-sm text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="javascript:void(0)" onClick={() => scrollToSection('projects')} className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="javascript:void(0)" onClick={() => scrollToSection('team')} className="text-sm text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="javascript:void(0)" onClick={() => scrollToSection('contact')} className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }

export default function Component() {
    const [activeService, setActiveService] = useState("design")
    const [activeProject, setActiveProject] = useState(0)
    const [expandedMember, setExpandedMember] = useState<number | null>(null)
    const projectRef = useRef(null)
    const processRef = useRef(null)
    const isInView = useInView(projectRef, { once: true })
    const isProcessInView = useInView(processRef, { once: true, amount: 0.2 })
    const controls = useAnimation()
    const processControls = useAnimation()

    const services = [
        { id: "design", icon: <Palette className="h-6 w-6" />, title: "Design", description: "Gestaltung intuitiver und visuell beeindruckender Schnittstellen, die Benutzer fesseln und ihr digitales Erlebnis verbessern.", features: ["Benutzerforschung", "Wireframing", "Prototyping", "UI/UX-Design", "Markenidentität", "Responsives Design"] },
        { id: "development", icon: <Code className="h-6 w-6" />, title: "Entwicklung", description: "Erstellung robuster, skalierbarer und leistungsstarker Webanwendungen unter Verwendung modernster Technologien und Best Practices.", features: ["Frontend-Entwicklung", "Backend-Entwicklung", "API-Integration", "Datenbankdesign", "Cloud-Dienste", "Versionskontrolle"] },
        { id: "optimization", icon: <Zap className="h-6 w-6" />, title: "Optimierung", description: "Verbesserung der Website-Geschwindigkeit und -Effizienz, um Benutzern blitzschnelle Erlebnisse zu bieten und Suchmaschinenrankings zu verbessern.", features: ["Performance-Audits", "Code-Optimierung", "Asset-Komprimierung", "Caching-Strategien", "CDN-Implementierung", "Core Web Vitals"] },
        { id: "seo", icon: <Search className="h-6 w-6" />, title: "SEO & Analyse", description: "Implementierung von Strategien zur Verbesserung Ihrer Online-Sichtbarkeit und Bereitstellung von Erkenntnissen für datengesteuerte Entscheidungen.", features: ["Keyword-Recherche", "On-Page-SEO", "Technisches SEO", "Content-Strategie", "Analytics-Setup", "Conversion-Tracking"] },
        { id: "hosting", icon: <Server className="h-6 w-6" />, title: "Hosting & Bereitstellung", description: "Angebot sicherer, zuverlässiger und skalierbarer Hosting-Lösungen, um sicherzustellen, dass Ihre Webanwendungen immer verfügbar und leistungsfähig sind.", features: ["Cloud-Hosting", "Server-Konfiguration", "SSL-Zertifikate", "Automatisierte Backups", "Lastverteilung", "24/7-Überwachung"] },
        { id: "support", icon: <Users className="h-6 w-6" />, title: "Wartung & Support", description: "Bereitstellung laufender technischer Unterstützung und regelmäßiger Updates, um Ihre digitalen Produkte reibungslos und sicher am Laufen zu halten.", features: ["24/7-Support", "Sicherheitsupdates", "Performance-Überwachung", "Inhaltsaktualisierungen", "Feature-Erweiterungen", "Schulung & Dokumentation"] },
    ]

    const projects = [
        { title: "Fränkis", description: "Eine moderne, mobilfreundliche Seite für Fränkis Pub. Entdecken Sie Events, durchstöbern Sie die Speisekarte und verbinden Sie sich mit Ihrem Lieblingslokal.", image: "/projekte/Projekt2.png", link: "#", tech: ["React", "Node.js", "AWS", "TensorFlow"] },
        { title: "Reality Break", description: "Die offizielle Seite für Reality Break mit Musik, Tour-Infos und Bandmitgliedern. Eine nahtlose Möglichkeit für Fans, sich mit der Band zu verbinden.", image: "/projekte/Projekt3.webp", link: "#", tech: ["Vue.js", "Python", "MongoDB", "WebRTC"] },
        { title: "EduTech-Ökosystem", description: "Ein umfassendes Lernmanagementsystem mit Gamification-Elementen.", image: "/placeholder.svg?height=400&width=600", link: "#", tech: ["React Native", "Firebase", "GraphQL", "Unity"] },
        { title: "FinTech-Dashboard", description: "Echtzeit-Finanzdatenvisualisierung und prädiktive Analysen für Investoren.", image: "/placeholder.svg?height=400&width=600", link: "#", tech: ["Angular", "D3.js", "Django", "PostgreSQL"] },
    ]

    const teamMembers = [
        {
            name: "Michael Prietl",
            role: "Frontend-Entwickler",
            image: "/maikeru.jpg",
            bio: "Michael ist ein leidenschaftlicher Frontend-Entwickler, der moderne Technologien mit ansprechendem Design verbindet. Mit Fokus auf React, TypeScript und Next.js schafft er intuitive Benutzeroberflächen, die sowohl funktional als auch ästhetisch überzeugen. Er liebt es, komplexe Probleme in einfache Lösungen zu übersetzen und legt besonderen Wert auf sauberen, wartbaren Code und exzellente Nutzererfahrungen.",
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
            funFacts: [
                "Kennt den Unterschied zwischen 'margin' und 'padding' blind",
                "Schreibt eleganteren Code als seine eigene Handschrift",
                "Hat ein Talent dafür, Bugs im Code in Rekordzeit zu finden",
            ],
            quote: "Design ist nicht, wie es aussieht – Design ist, wie es funktioniert.",
            github: "https://github.com/MaikeruDev",
            linkedin: "https://www.linkedin.com/in/michael-prietl-93a6b625b/",
            email: "mp@nonext.io",
            website: "https://michael.nonext.io",
        },
        {
            name: "Noel Hermann",
            role: "Frontend-Entwickler",
            image: "/nohell.png",
            bio: "Sam ist ein Backend-Zauberer, der robuste und skalierbare Systeme entwickelt, die komplexe Webanwendungen antreiben. Mit einem tiefen Verständnis für Datenbanken und serverseitige Technologien sorgt Sam dafür, dass unsere Projekte ein solides Fundament haben.",
            skills: ["Node.js", "Python", "MongoDB", "GraphQL", "Docker"],
            funFacts: [
                "Spricht fließend SQL",
                "Kann Abfragen im Schlaf optimieren",
                "Glaubt an die 'API-first'-Religion",
            ],
            quote: "Performance ist kein Zufall, sondern ein Feature.",
            github: "https://github.com/samlee",
            linkedin: "https://linkedin.com/in/samlee",
            email: "sam@nonext.com",
            website: "https://samlee.dev",
        },
    ]

    const processSteps = [
        {
            title: "Erstberatung",
            description: "Wir treffen uns mit Ihnen, um Ihre Vision, Ziele und Anforderungen für das Projekt zu besprechen.",
            icon: <MessageSquare className="h-8 w-8" />,
        },
        {
            title: "Design & Planung",
            description: "Unser Team erstellt detaillierte Wireframes und Designs basierend auf Ihrem Input und Feedback.",
            icon: <PenTool className="h-8 w-8" />,
        },
        {
            title: "Entwicklung & Test",
            description: "Wir bauen Ihre Website mit modernsten Technologien und sorgen für eine reibungslose und responsive Erfahrung.",
            icon: <Code2 className="h-8 w-8" />,
        },
        {
            title: "Prüfen & Verfeinerung",
            description: "Wir präsentieren das fertige Produkt und nehmen basierend auf Ihrem Feedback notwendige Anpassungen vor.",
            icon: <CheckCircle className="h-8 w-8" />,
        },
    ]

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    useEffect(() => {
        if (isProcessInView) {
            processControls.start("visible")
        }
    }, [isProcessInView, processControls])

    const nextProject = () => {
        setActiveProject((prev) => (prev + 1) % projects.length)
    }

    const prevProject = () => {
        setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
    }

    const toggleMember = (index: number) => {
        setExpandedMember(expandedMember === index ? null : index)
    }

    return (
        <div className="bg-black text-white">
            <Header />
            <HeroSection />
            <AboutUsSection />
            <ServicesSection services={services} activeService={activeService} setActiveService={setActiveService} />
            <ProcessSection processSteps={processSteps} processRef={processRef} processControls={processControls} />
            <ProjectsSection projects={projects} activeProject={activeProject} nextProject={nextProject} prevProject={prevProject} projectRef={projectRef} controls={controls} setActiveProject={setActiveProject} />
            <TeamSection teamMembers={teamMembers} expandedMember={expandedMember} toggleMember={toggleMember} />
            <Customers />
            <FAQSection />
            <ContactSection />
            <Footer />
        </div>
    )
} 

function HeroSection() {
    return (
        <section className="relative z-10 py-16">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl text-center md:text-left font-black mb-4 leading-tight">
                            <motion.span
                                className="block"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                KREATIVE
                            </motion.span>
                            <motion.span
                                className="block"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                WEB-
                            </motion.span>
                            <motion.span
                                className="block"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                ENTWICKLUNG
                            </motion.span>
                        </h1>
                        <p className="text-gray-400 text-center md:text-left mx-auto md:mx-0 text-base mb-6 max-w-md">
                            Wir gestalten außergewöhnliche digitale Erlebnisse durch innovative Designs und modernste Entwicklung.
                        </p>
                        <motion.div className="flex justify-center md:justify-start">
                            <Button
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                onClick={() => { }}
                            >
                                Projekt starten
                            </Button>
                        </motion.div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{
                                opacity: [0.5, 0.8, 0.5],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.div
                            className="relative z-10 flex items-center justify-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="bg-black rounded-full p-4 backdrop-blur-sm overflow-hidden aspect-square w-150 h-150 border border-white/20">
                                <Canvas className="rounded-full">
                                    <SpinningPyramid />
                                </Canvas>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function AboutUsSection() {
    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.h2
                    className="text-3xl font-bold mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Warum nonext?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AboutUsCard
                        icon={<Rocket className="h-8 w-8 text-blue-400" />}
                        title="Innovative Lösungen"
                        description="Wir nutzen modernste Technologien, um zukunftssichere digitale Erlebnisse zu schaffen."
                        delay={0.2}
                        glowColor="rgba(59, 130, 246, 0.5)" // blue glow
                    />
                    <AboutUsCard
                        icon={<Target className="h-8 w-8 text-green-400" />}
                        title="Maßgeschneiderte Entwicklung"
                        description="Jedes Projekt wird individuell auf Ihre spezifischen Bedürfnisse und Ziele zugeschnitten."
                        delay={0.4}
                        glowColor="rgba(52, 211, 153, 0.5)" // green glow
                    />
                    <AboutUsCard
                        icon={<Lightbulb className="h-8 w-8 text-yellow-400" />}
                        title="Kreative Expertise"
                        description="Unser erfahrenes Team verbindet technisches Know-how mit kreativer Vision."
                        delay={0.6}
                        glowColor="rgba(251, 191, 36, 0.5)" // yellow glow
                    />
                </div>
            </div>
        </section>
    )
}

function AboutUsCard({ icon, title, description, delay, glowColor }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center text-center"
        >
            <div className="bg-black rounded-full p-4 mb-4 border border-white/20" style={{ boxShadow: `0 0 15px ${glowColor}` }}>
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </motion.div>
    )
}

function ServicesSection({ services, activeService, setActiveService }) {
    return (
        <section id="services" className="py-20 sm:py-16 relative z-10 bg-black text-white">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold mb-10 text-center">Unsere Dienstleistungen</h2>
                <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
                    <TabsList className="grid bg-black grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
                        {services.map((service) => (
                            <TabsTrigger
                                key={service.id}
                                value={service.id}
                                className="flex flex-col items-center text-center p-2 data-[state=active]:bg-black data-[state=active]:text-white text-gray-500 rounded-lg text-xs sm:text-sm"
                            >
                                {service.icon}
                                <span className="mt-1 sm:mt-2 text-xs">{service.title}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {services.map((service) => (
                        <TabsContent key={service.id} value={service.id} className="mt-44 sm:mt-32 lg:mt-12">
                            <Card className="bg-black border-white/20">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                                    <p className="text-gray-400 mb-4">{service.description}</p>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-center">
                                                <ArrowRight className="h-4 w-4 mr-2 text-white" />
                                                <span className="text-sm text-gray-400">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </motion.div>
        </section>
    )
}

function ProcessSection({ processSteps, processRef, processControls }) {
    return (
        <section id="process" className="py-16 relative z-10 bg-black" ref={processRef}>
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold mb-10 text-center">Unser Prozess</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate={processControls}
                            variants={{
                                visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
                                hidden: { opacity: 0, y: 50 }
                            }}
                            className="bg-black rounded-lg p-4 backdrop-blur-sm border border-white/20"
                        >
                            <div className="flex items-center justify-center mb-3">
                                <div className="bg-black rounded-full p-4">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">{step.title}</h3>
                            <p className="text-gray-400 text-sm text-center">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ProjectsSection({ projects, activeProject, nextProject, prevProject, projectRef, controls, setActiveProject }) {
    return (
        <section id="projects" className="py-16 relative z-10 bg-black" ref={projectRef}>
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold mb-10 text-center">Unsere Projekte</h2>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 50 }
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="relative overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeProject * 100}%)` }}>
                            {projects.map((project, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-12">
                                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                                        <div className="lg:w-1/2">
                                            <img src={project.image} alt={project.title} className="rounded-lg shadow-lg" />
                                        </div>
                                        <div className="lg:w-1/2">
                                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tech.map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="secondary" className="bg-white/10 text-xs text-gray-400">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <a href={project.link} target="_blank">
                                                <Button variant="outline" size="sm" className="text-black hover:border-gray-700 border-2 hover:bg-black hover:text-white">
                                                    Projekt ansehen
                                                    <ExternalLink className="ml-2 h-3 w-3" />
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button
                            size="icon"
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent hover:bg-transparent"
                            onClick={prevProject}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            size="icon"
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent hover:bg-transparent"
                            onClick={nextProject}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                    <div className="flex justify-center mt-6">
                        {projects.map((_, index) => (
                            <Button
                                key={index}
                                variant="ghost"
                                size="sm"
                                className={`mx-1 ${index === activeProject ? 'text-white' : 'text-gray-500'}`}
                                onClick={() => setActiveProject(index)}
                            >
                                {index + 1}
                            </Button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function TeamSection({ teamMembers, expandedMember, toggleMember }) {
    return (
        <section id="team" className="py-16 relative z-10 bg-black">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold mb-10 text-center">Das Duo hinter der Magie</h2>
                <div className="space-y-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="border-b border-white/20 pb-6">
                            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleMember(index)}>
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{member.name}</h3>
                                        <p className="text-sm text-gray-400">{member.role}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm">
                                    {expandedMember === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </Button>
                            </div>
                            <AnimatePresence>
                                {expandedMember === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4 overflow-hidden"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-gray-400 mb-3">{member.bio}</p>
                                                <div className="mb-3">
                                                    <h4 className="text-sm font-semibold mb-2">Expertise</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {member.skills.map((skill, skillIndex) => (
                                                            <Badge key={skillIndex} variant="secondary" className="bg-white/10 text-gray-400 hover:text-gray-100 hover:bg-white/20 text-xs">
                                                                {skill}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mb-3">
                                                    <h4 className="text-sm font-semibold mb-2">Fun Facts</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                                        {member.funFacts.map((fact, factIndex) => (
                                                            <li key={factIndex} className="text-gray-400">{fact}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="mb-3">
                                                    <h4 className="text-sm font-semibold mb-2">Lieblingszitat</h4>
                                                    <blockquote className="border-l-2 border-white/20 pl-3 italic text-sm text-gray-400">
                                                        "{member.quote}"
                                                    </blockquote>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold mb-2">Verbinden</h4>
                                                    <div className="flex space-x-3">
                                                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                            <Github size={18} />
                                                        </a>
                                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                            <Linkedin size={18} />
                                                        </a>
                                                        <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-white transition-colors">
                                                            <Mail size={18} />
                                                        </a>
                                                        <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                            <Globe size={18} />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <p className="text-xl font-light italic text-gray-200">
                        "Einzeln sind wir geschickte Entwickler. Zusammen erschaffen wir digitale Meisterwerke."
                    </p>
                </div>
                <div className="mt-8 flex justify-center space-x-6">
                    <div className="flex items-center">
                        <Coffee className="text-yellow-400 mr-2 h-4 w-4" style={{ filter: "drop-shadow(0 0 5px rgba(251, 191, 36, 0.5))" }} />
                        <span className="text-sm text-gray-400">Angetrieben von Kaffee</span>
                    </div>
                    <div className="flex items-center">
                        <Code className="text-blue-400 mr-2 h-4 w-4" style={{ filter: "drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))" }} />
                        <span className="text-sm text-gray-400">Getrieben von Leidenschaft</span>
                    </div>
                    <div className="flex items-center">
                        <Zap className="text-green-400 mr-2 h-4 w-4" style={{ filter: "drop-shadow(0 0 5px rgba(52, 211, 153, 0.5))" }} />
                        <span className="text-sm text-gray-400">Inspiriert von Innovation</span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

function FAQSection() {
    return (
        <section id="faq" className="py-16 relative z-10 bg-black">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold mb-10 text-center">Häufig gestellte Fragen</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b border-white/20">
                        <AccordionTrigger className="text-sm">Auf welche Technologien spezialisieren Sie sich?</AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-400">
                            Wir spezialisieren uns auf moderne Webtechnologien wie React, Next.js, Node.js und GraphQL. Unsere Expertise umfasst sowohl Frontend- als auch Backend-Entwicklung, was es uns ermöglicht, Full-Stack-Anwendungen zu erstellen, die robust, skalierbar und benutzerfreundlich sind.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b border-white/20">
                        <AccordionTrigger className="text-sm">Wie lange dauert ein typisches Projekt?</AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-400">
                            Die Projektdauer variiert je nach Komplexität und Umfang der Arbeit. Eine einfache Website kann 4-6 Wochen dauern, während eine komplexere Webanwendung 3-6 Monate in Anspruch nehmen kann. Wir stellen Ihnen nach unserer ersten Beratung und Projektplanung eine detaillierte Zeitschätzung zur Verfügung.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b border-white/20">
                        <AccordionTrigger className="text-sm">Bieten Sie laufende Unterstützung und Wartung an?</AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-400">
                            Ja, wir bieten verschiedene Support- und Wartungspakete an, um Ihre Website oder Anwendung reibungslos am Laufen zu halten. Diese können regelmäßige Updates, Sicherheitspatches, Leistungsoptimierung und technischen Support umfassen. Wir arbeiten mit Ihnen zusammen, um einen Supportplan zu erstellen, der Ihren spezifischen Bedürfnissen entspricht.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </motion.div>
        </section>
    )
}

function ContactSection() {
    return (
        <section id="contact" className="py-16 relative z-10 bg-black">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">Bereit, Ihr Projekt zu starten?</h2>
                <p className="text-base mb-8 text-gray-400">Lassen Sie uns Ihre Ideen Wirklichkeit werden. Kontaktieren Sie uns noch heute.</p>
                <div className="flex justify-center space-x-8">
                    <a href="mailto:info@nonext.io" className="flex items-center text-white hover:text-gray-300 transition-colors">
                        <Mail className="w-6 h-6 mr-2" />
                        <span>info@nonext.io</span>
                    </a>
                    <a href="https://www.instagram.com/nonext.io" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-300 transition-colors">
                        <Instagram className="w-6 h-6 mr-2" />
                        <span>@nonext.io</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-white/20">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-xl font-bold mb-4 md:mb-0">nonext</div>
                    <div className="flex space-x-4"> 
                        <a href="https://instagram.com/nonext.io" target="_blank" className="text-sm text-gray-400 hover:text-white transition-colors">Instagram</a> 
                    </div>
                </div>
                <div className="mt-6 text-center text-gray-400 text-xs">
                    © 2024 nonext. Alle Rechte vorbehalten.
                </div>
            </div>
        </footer>
    )
}