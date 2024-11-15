import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
import PyramidScene from "@/components/pyramid-scene"
import { Canvas } from "@react-three/fiber"
import { FaChevronDown } from "react-icons/fa"


export default function Hero() {

    const heroRef = useRef<HTMLDivElement>(null)  
  
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about')
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
      }

    return (
        <section ref={heroRef} className="relative overflow-hidden">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-center">
                <h2 className="text-5xl font-bold mb-4">Welcome to nonext</h2>
                <p className="text-xl mb-8">Creating modern, unique websites</p>
                <Button onClick={scrollToAbout} variant="outline" className="text-black border-white hover:bg-white hover:text-black transition-colors">
                Explore Our Work
                </Button>
            </div>

            <Canvas className="absolute inset-0" style={{ height: '100vh' }}>
                <PyramidScene />
            </Canvas>

            <motion.div
                className="absolute bottom-4 transform -translate-x-1/2 cursor-pointer w-full flex justify-center items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                onClick={scrollToAbout}
            >
                <FaChevronDown className="text-4xl animate-bounce text-white" />
            </motion.div>
        </section>
    )
}