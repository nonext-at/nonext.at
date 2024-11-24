import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, Github, Linkedin, Mail, Globe, Coffee, Code, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

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
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{member.name}</h3>
                                        <p className="text-sm text-gray-400">{member.role}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm">
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
                                                    <div className="flex flex-wrap gap-2">
                                                        {member.skills.map((skill, skillIndex) => (
                                                            <Badge key={skillIndex} variant="secondary" className="bg-white/10 text-gray-400 hover:text-gray-100 hover:bg-white/20 text-xs">
                                                                {skill}
                                                            </Badge>
                                                        ))}
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
                                                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                            <Github size={18} />
                                                        </a>
                                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                            <Linkedin size={18} />
                                                        </a>
                                                        <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-white transition-colors">
                                                            <Mail size={18} />
                                                        </a>
                                                        <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
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
                <div className="mt-8 flex justify-center space-x-6">
                    <div className="flex items-center">
                        <Coffee className="text-yellow-400 mr-2 h-4 w-4" style={{ filter: "drop-shadow(0 0 5px rgba(251, 191, 36, 0.5))" }} />
                        <span className="text-sm text-gray-400">Angetrieben von Kaffee</span>
                    </div>
                    <div className="flex items-center">
                        <Code className="text-blue-400 mr-2 h-4 w-4" style={{ filter: "drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))" }} />
                        <span className="text-sm text-gray-400">Getrieben von Leidenschaft</span>
                    </div>
                    <div className="flex items-center">
                        <Zap className="text-green-400 mr-2 h-4 w-4" style={{ filter: "drop-shadow(0 0 5px rgba(52, 211, 153, 0.5))" }} />
                        <span className="text-sm text-gray-400">Inspiriert von Innovation</span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}