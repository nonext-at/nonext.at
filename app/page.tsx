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
        { title: "Fränkis", description: "Eine moderne, mobilfreundliche Seite für Fränkis Pub. Entdecken Sie Events, durchstöbern Sie die Speisekarte und verbinden Sie sich mit Ihrem Lieblingslokal.", image: "/projekte/fraenkis.webp", link: "https://fraenkis.nonext.io", tech: ["React", "Next.js", "motion", "shadcn", "Tailwind", "Firebase"] },
        { title: "Reality Break", description: "Die offizielle Seite für Reality Break mit Musik, Tour-Infos und Bandmitgliedern. Eine nahtlose Möglichkeit für Fans, sich mit der Band zu verbinden.", image: "/projekte/realitybreak.webp", link: "https://reality-break.nonext.io", tech: ["React", "Next.js", "motion", "shadcn", "Tailwind", "Firebase"] },
        { title: "nonext", description: "nonext ist eine elegante One-Pager-Seite, die unsere Top-Projekte präsentiert. Es ist ein einfaches und intuitives Gateway, um unsere Arbeit und Kooperationen zu erkunden.", image: "/projekte/nonext.webp", link: "https://nonext.io", tech: ["React", "Next.js", "motion", "shadcn", "Tailwind", "Firebase", "Three.js"] },
    ]

    const teamMembers = [
        {
            name: "Michael Prietl",
            role: "Gründer, Entwickler",
            image: "/team/michael.webp",
            bio: "Michael ist ein leidenschaftlicher Frontend-Entwickler, der moderne Technologien mit ansprechendem Design verbindet. Mit Fokus auf React, TypeScript und Next.js schafft er intuitive Benutzeroberflächen, die sowohl funktional als auch ästhetisch überzeugen. Er liebt es, komplexe Probleme in einfache Lösungen zu übersetzen und legt besonderen Wert auf sauberen, wartbaren Code und exzellente Nutzererfahrungen.",
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
            funFacts: [
                "Kennt den Unterschied zwischen 'margin' und 'padding' blind",
                "Schreibt eleganteren Code als seine eigene Handschrift",
                "Hat ein Talent dafür, Bugs im Code in Rekordzeit zu finden",
            ],
            quote: "Design ist nicht, wie es aussieht – Design ist, wie es funktioniert.",
            instagram: "https://www.instagram.com/maikeru.jpg/",
            github: "https://github.com/MaikeruDev",
            linkedin: "https://www.linkedin.com/in/michael-prietl-93a6b625b/",
            email: "mp@nonext.io",
            website: "https://michael.nonext.io",
        },
        {
            name: "Noel Hermann",
            role: "Gründer, Entwickler",
            image: "/team/noel.webp",
            bio: "Noel verbindet kreatives Design mit technischer Präzision und sorgt dafür, dass Frontend und Backend harmonisch zusammenarbeiten. Von der ersten Codezeile bis zur finalen Auslieferung stellt er sicher, dass unsere Anwendungen nicht nur leistungsstark, sondern auch benutzerfreundlich sind. Sein Anspruch ist es, Lösungen zu schaffen, die nicht nur gut aussehen, sondern auch reibungslos funktionieren – und das auf jeder Ebene.",
            skills: ["React", "Next.js", "Node.js", "Datenbanken", "API", "UI/UX"],
            funFacts: [
                "Hat schon mal aus Versehen ein Projekt in der Pause fertiggestellt",
                "Träumt manchmal von einem Leben ohne Merge-Konflikte",
                "Kann ein div zentrieren (manchmal)",
            ],
            quote: "Ein Design ist dann perfekt, wenn man es nicht erklären, sondern nur fühlen kann.",
            instagram: "https://www.instagram.com/noel_her/",
            github: "https://github.com/FIEF-nohell",
            linkedin: "https://www.linkedin.com/in/noel-hermann-a9b925243/",
            email: "nh@nonext.io",
            website: "https://noel.nonext.io",
        }
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
