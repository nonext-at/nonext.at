import SpinningPyramid from "@/app/SpinningPyramid";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function HeroSection() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
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
                                onClick={() => { scrollToSection("contact") }}
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