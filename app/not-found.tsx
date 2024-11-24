'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const generiereSterne = (anzahl: number) => {
    return Array.from({ length: anzahl }, () => ({
        oben: `${Math.random() * 100}%`,
        links: `${Math.random() * 100}%`,
        größe: Math.random() * 2 + 1,
        animationsdauer: `${Math.random() * 10 + 10}s`,
        animationsverzögerung: `${Math.random() * 10}s`,
        deckkraft: Math.random(),
    }))
}

const Sterne = ({ anzahl }: { anzahl: number }) => {
    const sterne = useMemo(() => generiereSterne(anzahl), [anzahl])

    return (
        <>
            {sterne.map((stern, i) => (
                <div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        top: stern.oben,
                        left: stern.links,
                        width: `${stern.größe}px`,
                        height: `${stern.größe}px`,
                        opacity: stern.deckkraft,
                        animation: `float ${stern.animationsdauer} linear infinite ${stern.animationsverzögerung}, twinkle 5s infinite`
                    }}
                />
            ))}
        </>
    )
}

export default function NichtGefunden() {
    const [zeitÜbrig, setZeitÜbrig] = useState(10)
    const router = useRouter()

    useEffect(() => {
        if (zeitÜbrig > 0) {
            const timer = setTimeout(() => setZeitÜbrig(prev => prev - 1), 1000)
            return () => clearTimeout(timer)
        } else {
            router.push('/') 
        }
    }, [zeitÜbrig, router])

    const formatiereZeit = useCallback((zeit: number) => {
        const minuten = Math.floor(zeit / 60)
        const sekunden = zeit % 60
        return `${minuten.toString().padStart(2, '0')}:${sekunden.toString().padStart(2, '0')}`
    }, [])


    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
            <Sterne anzahl={50} />

            <div className="text-center z-10 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl mb-4 max-w-72 mx-auto text-center sm:max-w-none"
                >
                    Ups! Dir ist der Sauerstoff ausgegangen.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-sm text-gray-400 mb-8"
                >
                    Die Seite, die du suchst, ist jetzt außer Reichweite.
                    <br />
                    Lass uns zurückgehen...
                </motion.p>

                <div className="relative flex justify-center items-center my-12">
                    <motion.div
                        className="text-[180px] font-bold flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <motion.span
                            className="mr-[-20px] select-none"
                            animate={{
                                y: [-9.85, 6.5, -9.85],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            4
                        </motion.span>
                        <div className="relative w-[300px] h-[300px] mx-[-20px]">
                            <motion.span
                                className="absolute left-1/3 text-[180px] select-none"
                                animate={{
                                    y: [-7.8, 8.4, -7.8], // Astronaut's animation
                                }}
                                transition={{
                                    duration: 4.7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                0
                            </motion.span>
                            <motion.div
                                className="absolute left-0 top-0 w-full h-full"
                                animate={{
                                    y: [-10, 10, -10], // Astronaut's animation
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Image
                                    draggable={false}
                                    src="/astronaut.png"
                                    alt="Schwebender Astronaut"
                                    width={300}
                                    height={300}
                                    objectFit="contain"
                                    sizes="300px"
                                    style={{ width: '100%', height: '100%', userSelect: 'none' }}
                                />
                            </motion.div>
                        </div>

                        <motion.span
                            className="ml-[-20px] select-none"
                            animate={{
                                y: [-6.2, 6.7, -6.2],
                            }}
                            transition={{
                                duration: 3.4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            4
                        </motion.span>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col items-center gap-4"
                >
                    <Link
                        href="/"
                        className="text-sm hover:text-gray-300 transition-colors flex items-center gap-2"
                    >
                        Zurück nach Hause in <span className="font-mono">{formatiereZeit(zeitÜbrig)}</span>
                    </Link>
                    <Link
                        href="/"
                        className="text-xs text-gray-500 hover:text-gray-400 transition-colors uppercase tracking-wider"
                    >
                        STARTSEITE
                    </Link>
                </motion.div>
            </div>

            <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, 10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
      `}</style>
        </div>
    )
}
