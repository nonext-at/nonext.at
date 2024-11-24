import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "./ui/button";
import { Badge } from "./ui/badge"; // Import Badge from your UI components

export default function ProjectsSection({ projects, activeProject, nextProject, prevProject, projectRef, controls, setActiveProject }) {
    return (
        <section id="projects" className="py-16 relative z-10 bg-black" ref={projectRef}>
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold mb-10 text-center">Unsere Projekte</h2>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 50 }
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="relative overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeProject * 100}%)` }}>
                            {projects.map((project, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-12">
                                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                                        <div className="lg:w-1/2">
                                            <img src={project.image} alt={project.title} className="rounded-lg shadow-lg" />
                                        </div>
                                        <div className="lg:w-1/2">
                                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tech.map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="secondary" className="bg-white/10 text-xs hover:bg-white/20 text-gray-400">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" size="sm" className="text-black hover:border-gray-700 border-2 hover:bg-black hover:text-white">
                                                    Projekt ansehen
                                                    <ExternalLink className="ml-2 h-3 w-3" />
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button
                            size="icon"
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent hover:bg-transparent"
                            onClick={prevProject}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            size="icon"
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent hover:bg-transparent"
                            onClick={nextProject}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                    <div className="flex justify-center mt-6">
                        {projects.map((_, index) => (
                            <Button
                                key={index}
                                variant="ghost"
                                size="sm"
                                className={`mx-1 ${index === activeProject ? 'text-white' : 'text-gray-500'}`}
                                onClick={() => setActiveProject(index)}
                            >
                                {index + 1}
                            </Button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}