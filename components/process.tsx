import { motion } from "framer-motion";
import { Coffee, PenTool, Rocket, MessageSquare } from "lucide-react";


export default function Process () {

    const processSteps = [
        {
          icon: <Coffee className="w-12 h-12 mb-4" />,
          title: "Erstberatung",
          description: "Wir treffen uns mit Ihnen, um Ihre Vision, Ziele und Anforderungen für das Projekt zu besprechen."
        },
        {
          icon: <PenTool className="w-12 h-12 mb-4" />,
          title: "Design & Planung",
          description: "Unser Team erstellt detaillierte Wireframes und Designs basierend auf Ihrem Input und Feedback."
        },
        {
          icon: <Rocket className="w-12 h-12 mb-4" />,
          title: "Entwicklung & Test",
          description: "Wir bauen Ihre Website mit modernsten Technologien und sorgen für eine reibungslose und responsive Erfahrung."
        },
        {
          icon: <MessageSquare className="w-12 h-12 mb-4" />,
          title: "Prüfen & Verfeinerung",
          description: "Wir präsentieren das fertige Produkt und nehmen basierend auf Ihrem Feedback notwendige Anpassungen vor."
        }
    ]
      
    return (
        <section id="process" className="py-20 px-16 bg-black text-white">
                <div className="max-w-6xl mx-auto">
                  <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Unser Prozess
                  </motion.h2>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <div className="flex justify-center items-center mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,1)]">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{index + 1 + ". " + step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>
    )
}