import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, Github, Linkedin, Mail, Globe, Coffee, Code, Zap, Instagram, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from 'next/image'

export default function TeamSection({ teamMembers, expandedMember, toggleMember }) {
    return (
        <section id="team" className="py-16 relative z-10 bg-black">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold mb-10 text-center">Das Duo hinter der Magie</h2>
                <div className="space-y-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="border-b border-white/20 pb-6">
                            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleMember(index)}>
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={48}
                                            height={48}
                                            className="object-cover"
                                            priority={true}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{member.name}</h3>
                                        <p className="text-sm text-gray-400">{member.role}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" aria-label="Personen Details umschalten">
                                    {expandedMember === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </Button>
                            </div>
                            <AnimatePresence>
                                {expandedMember === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4 overflow-hidden"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-gray-400 mb-3">{member.bio}</p>
                                                <div className="mb-3">
                                                    <h4 className="text-sm font-semibold mb-2">Expertise</h4>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {member.skills.map((skill, skillIndex) => (
                                                            <Badge key={skillIndex} variant="secondary" className="bg-white/10 text-gray-400 hover:text-gray-100 hover:bg-white/20 text-xs">
                                                                {skill}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <div className="flex items-center text-gray-400 text-sm">
                                                        <a href={member.contact.website} className="hover:cursor-pointer hover:underline">Erfahre mehr</a>
                                                        <ExternalLink className="ml-1 h-3 w-3" />
                                                    </div>

                                                </div>
                                            </div>
                                            <div>
                                                <div className="mb-3">
                                                    <h4 className="text-sm font-semibold mb-2">Fun Facts</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                                        {member.funFacts.map((fact, factIndex) => (
                                                            <li key={factIndex} className="text-gray-400">{fact}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="mb-3">
                                                    <h4 className="text-sm font-semibold mb-2">Lieblingszitat</h4>
                                                    <blockquote className="border-l-2 border-white/20 pl-3 italic text-sm text-gray-400">
                                                        "{member.quote}"
                                                    </blockquote>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold mb-2">Verbinden</h4>
                                                    <div className="flex space-x-3">
                                                        <a href={member.contact.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                            <Instagram size={18} />
                                                        </a>
                                                        <a href={member.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                            <Github size={18} />
                                                        </a>
                                                        <a href={member.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                            <Linkedin size={18} />
                                                        </a>
                                                        <a href={`mailto:${member.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                                                            <Mail size={18} />
                                                        </a>
                                                        <a href={member.contact.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                            <Globe size={18} />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <p className="text-xl font-light italic text-gray-200">
                        "Einzeln sind wir geschickte Entwickler. Zusammen erschaffen wir digitale Meisterwerke."
                    </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-4 sm:space-y-0">
                    <div className="flex items-center mx-auto md:mx-0">
                        <Coffee
                            className="text-yellow-400 mr-2 h-4 w-4"
                            style={{ filter: "drop-shadow(0 0 5px rgba(251, 191, 36, 0.5))" }}
                        />
                        <span className="text-sm text-gray-400">Angetrieben von Kaffee</span>
                    </div>
                    <div className="flex items-center mx-auto md:mx-0">
                        <Code
                            className="text-blue-400 mr-2 h-4 w-4"
                            style={{ filter: "drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))" }}
                        />
                        <span className="text-sm text-gray-400">Getrieben von Leidenschaft</span>
                    </div>
                    <div className="flex items-center mx-auto md:mx-0">
                        <Zap
                            className="text-green-400 mr-2 h-4 w-4"
                            style={{ filter: "drop-shadow(0 0 5px rgba(52, 211, 153, 0.5))" }}
                        />
                        <span className="text-sm text-gray-400">Inspiriert von Innovation</span>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}