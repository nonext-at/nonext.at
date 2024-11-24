import { motion } from "framer-motion";
import { Rocket, Target, Lightbulb } from "lucide-react";

export default function AboutUsSection() {
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