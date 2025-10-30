"use client"

import { useState, useRef, useEffect } from "react"
import { useAnimation, useInView } from "framer-motion"
import { Code, Palette, Zap, Search, Server, Users, MessageSquare, PenTool, Code2, CheckCircle } from 'lucide-react'

import Header from "@/components/header"
import HeroSection from "@/components/hero"
import AboutUsSection from "@/components/aboutus"
import ServicesSection from "@/components/services"
import ProcessSection from "@/components/process"
import ProjectsSection from "@/components/projects"
import TeamSection from "@/components/team"
import Customers from '@/components/customers'
import FAQSection from "@/components/faq"
import ContactSection from "@/components/contact"
import Footer from "@/components/footer"

import projectsData from "@/data/projects.json"
import teamMembers from "@/data/team.json"

import { useSectionContext } from "./SectionContext";

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
        { id: "support", icon: <Users className="h-6 w-6" />, title: "Wartung & Support", description: "Bereitstellung technischer Unterstützung und regelmäßiger Updates, um Ihre  Produkte reibungslos und sicher am Laufen zu halten.", features: ["24/7-Support", "Sicherheitsupdates", "Überwachung", "Aktualisierungen", "Feature-Erweiterungen", "Schulung & Dokumentation"] },
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

    const { setSections } = useSectionContext();

    useEffect(() => {
        setSections([
          { id: "services", label: "Dienstleistung" },
          { id: "projects", label: "Projekte" },
          { id: "team", label: "Team" },
          { id: "contact", label: "Kontakt" },
        ]);
      }, [setSections]);

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
        setActiveProject((prev) => (prev + 1) % projectsData.length)
    }

    const prevProject = () => {
        setActiveProject((prev) => (prev - 1 + projectsData.length) % projectsData.length)
    }

    const toggleMember = (index: number) => {
        setExpandedMember(expandedMember === index ? null : index)
    }

    return (
        <div className="bg-black text-white"> 
            <HeroSection />
            <AboutUsSection />
            <ServicesSection services={services} activeService={activeService} setActiveService={setActiveService} />
            <ProcessSection processSteps={processSteps} processRef={processRef} processControls={processControls} />
            <ProjectsSection projects={projectsData} activeProject={activeProject} nextProject={nextProject} prevProject={prevProject} projectRef={projectRef} controls={controls} setActiveProject={setActiveProject} />
            <TeamSection teamMembers={teamMembers} expandedMember={expandedMember} toggleMember={toggleMember} />
            <Customers />
            <FAQSection />
            <ContactSection /> 
        </div>
    )
} 
