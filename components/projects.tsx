import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";

export default function Projects () {

    const projects = [
        {
            name: "nonext.io",
            description: "nonext is a sleek one-pager showcasing our top projects. It’s a simple and intuitive gateway to explore our work and collaborations.",
            image: "/Projekt1.png",
            url: "https://nonext.io",
            tech: ["Next.js", "Tailwind CSS", "Vercel", "Three.js", "motion"]
        },
        {
            name: "Fränkis Pub",
            description: "A modern, mobile-friendly site for Fränkis Pub. Discover events, browse the menu, and connect with your favorite local spot.",
            image: "/Projekt2.png",
            url: "https://fraenkis.nonext.io",
            tech: ["Next.js", "Tailwind CSS", "Vercel", "motion"]
        },
        {
            name: "Reality Break",
            description: "The official site for Reality Break, featuring music, tour info, and band members. A seamless way for fans to connect with the band.",
            image: "/Projekt3.png",
            url: "https://reality-break.nonext.io",
            tech: ["Next.js", "Tailwind CSS", "Vercel", "motion"]
        }
    ]
 
    const [hoveredProject, setHoveredProject] = useState(null)

    return (
        <section id="projects" className="py-20 px-10 sm:px-4 bg-white text-black">
                <div className="max-w-6xl mx-auto">
                  <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Our Projects
                  </motion.h2>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {projects.map((project, index) => (
                      <Card
                        key={index}
                        className="bg-white text-black overflow-hidden transition-all duration-300 transform sm:hover:scale-105 border border-gray-200 shadow-md rounded-lg"
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <CardContent className="p-0 group">
                          <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-full object-cover transition-all duration-300 transform sm:group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Button
                                variant="outline"
                                className="text-black"
                                onClick={() => window.open(project.url, '_blank')}
                              >
                                View Project
                              </Button>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tech.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <Button
                              variant="link"
                              className="text-black hover:text-gray-600 p-0 h-auto font-normal"
                              onClick={() => window.open(project.url, '_blank')}
                            >
                              Learn more <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </motion.div>

                </div>
              </section>
    )
}