import { motion } from "framer-motion";

export default function ProcessSection({ processSteps, processRef, processControls }) {
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