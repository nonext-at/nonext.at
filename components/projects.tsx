import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { ViewDetails } from "./view-details";

export default function Projects() {

  const projects = [
    {
      name: "nonext.io",
      description: "nonext ist eine elegante One-Pager-Seite, die unsere Top-Projekte präsentiert. Es ist ein einfaches und intuitives Gateway, um unsere Arbeit und Kooperationen zu erkunden.",
      image: "/Projekt1.png",
      url: "https://nonext.io",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "Three.js", "motion"],
      fullDescription: "nonext.io ist unser Flaggschiffprojekt und dient als dynamisches Portfolio unserer besten Arbeiten. Es kombiniert modernste Webtechnologien, um ein nahtloses, interaktives Benutzererlebnis zu schaffen, das unsere Fähigkeiten in der Webentwicklung und im Design hervorhebt. Die Seite bietet ein modernes, minimalistisches Design mit flüssigen Animationen und 3D-Elementen, die unser Portfolio zum Leben erwecken. Wir haben serverseitiges Rendering implementiert, um die SEO und die Ladezeiten zu verbessern, und Three.js für beeindruckende 3D-Grafiken verwendet.",
      duration: "5 Wochen",
      performance: 68,
      accessibility: 91,
      bestPractices: 100, 
      seo: 100,
      metrics: {
        fcp: "0,4s",
        lcp: "4,9s",
        tbt: "0ms",
        cls: "0",
        si: "4,0s"
      }
    },
    {
      name: "Fränkis Pub",
      description: "Eine moderne, mobilfreundliche Seite für Fränkis Pub. Entdecken Sie Events, durchstöbern Sie die Speisekarte und verbinden Sie sich mit Ihrem Lieblingslokal.",
      image: "/Projekt2.png",
      url: "https://fraenkis.nonext.io",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "motion"],
      fullDescription: "Die Website von Fränkis Pub ist eine lebendige, benutzerfreundliche Plattform, die die Online-Präsenz des Pubs verbessert. Sie bietet eine intuitive Oberfläche zum Durchsuchen von Menüs, Überprüfen von Veranstaltungsplänen und Reservieren. Die Seite ist für mobile Geräte optimiert und umfasst eine Integration mit sozialen Medien, um die Reichweite zu erhöhen.",
      duration: "2 Wochen",
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      metrics: {
        fcp: "0,4s",
        lcp: "0,7s",
        tbt: "0ms",
        cls: "0,01",
        si: "0,4s"
      }
    },
    {
      name: "Reality Break",
      description: "Die offizielle Seite für Reality Break mit Musik, Tour-Infos und Bandmitgliedern. Eine nahtlose Möglichkeit für Fans, sich mit der Band zu verbinden.",
      image: "/Projekt3.png",
      url: "https://reality-break.nonext.io",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "motion"],
      fullDescription: "Die Website von Reality Break ist eine dynamische Plattform, um Fans mit der Band zu verbinden. Sie präsentiert Musik, kommende Tourdaten und Bandinformationen in einem ansprechenden, interaktiven Format.",
      duration: "3 Wochen",
      performance: 100,
      accessibility: 96,
      bestPractices: 100,
      seo: 100,
      metrics: {
        fcp: "0,3s",
        lcp: "0,4s",
        tbt: "0ms",
        cls: "0",
        si: "0,5s"
      }
    }
  ];

  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-10 sm:px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unsere Projekte
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
                      onClick={() => setSelectedProject(project)}
                    >
                      Projekt ansehen
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
                    Seite besuchen <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

      </div>
      {selectedProject && (
        <ViewDetails
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
