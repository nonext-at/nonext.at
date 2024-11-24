import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQSection() {
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