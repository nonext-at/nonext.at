import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronRight, Code, Palette, Search, Server, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

export default function Services() {
    const services = [
        {
            icon: <Palette className="w-12 h-12" />,
            name: "Design",
            description: "Individuelles UI/UX-Design, abgestimmt auf Ihre Marke, mit visuell beeindruckenden und intuitiven Oberflächen, die Ihr Publikum fesseln und die Nutzerbindung verbessern."
        },
        {
            icon: <Code className="w-12 h-12" />,
            name: "Entwicklung",
            description: "Full-Stack-Webentwicklung mit modernster Technologie, um robuste, skalierbare und leistungsstarke Anwendungen zu erstellen, die Ihren spezifischen Geschäftsanforderungen entsprechen."
        },
        {
            icon: <Wrench className="w-12 h-12" />,
            name: "Wartung",
            description: "Laufende Unterstützung und Aktualisierungen für Ihre Website, um optimale Leistung, Sicherheit und Kompatibilität mit den neuesten Webstandards und Technologien zu gewährleisten."
        },
        {
            icon: <Search className="w-12 h-12" />,
            name: "SEO",
            description: "Suchmaschinenoptimierung zur Verbesserung Ihrer Online-Sichtbarkeit, Implementierung von Strategien, um das Ranking Ihrer Website zu steigern und organischen Traffic für Ihr Unternehmen zu gewinnen."
        },
        {
            icon: <Server className="w-12 h-12" />,
            name: "Hosting",
            description: "Zuverlässige und sichere Hosting-Lösungen für Ihre Website, mit schnellen Ladezeiten, hoher Verfügbarkeit und robusten Sicherheitsmaßnahmen zum Schutz Ihrer Online-Präsenz."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedService((prev) => (prev === null ? 0 : (prev + 1) % services.length));
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const [selectedService, setSelectedService] = useState(0);

    return (
        <section id="services" className="py-20 px-4 bg-black text-white flex items-center flex-col h-[48rem] sm:h-[46rem] md:h-[48rem] lg:h-[40rem]">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    Unsere Dienste
                </h2>
                <div className="flex flex-col gap-6">
                    {/* Selected Card */}
                    <div className="w-full">
                        <div
                            className={`relative overflow-hidden rounded-lg border border-white/20 
                                bg-white/10 transition-all duration-500 ease-in-out p-6`}
                        >
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="mb-4">
                                    <div className="mb-4 text-white">
                                        {services[selectedService].icon}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                        {services[selectedService].name}
                                    </h3>
                                    <p className="text-sm mb-4 text-gray-300">
                                        {services[selectedService].description}
                                    </p>
                                </div>
                                <Button
                                    variant="outline"
                                    className="mt-4 border-white text-black hover:bg-white hover:text-black transition-colors"
                                >
                                    Erfahre mehr <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Small Cards Row */}
                    <div className="flex justify-between gap-4 flex-wrap select-none">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`w-[calc(25%-1rem)] lg:w-[calc(20%-1rem)] rounded-lg border border-white/20 
                transition-all duration-300 ease-in-out p-4 cursor-pointer
                ${selectedService === index ? "opacity-50 pointer-events-none" : "hover:bg-white/5"}
            `}
                                onClick={() => setSelectedService(index)}
                            >
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="mb-2 flex items-center justify-center">{service.icon}</div>
                                    <h4 className="text-xs sm:text-sm font-medium">{service.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
