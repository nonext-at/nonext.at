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
      description: "nonext is a sleek one-pager showcasing our top projects. It’s a simple and intuitive gateway to explore our work and collaborations.",
      image: "/projekte/Projekt1.png",
      url: "https://nonext.io",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "Three.js", "motion"],
      fullDescription: "nonext.io is our flagship project, serving as a dynamic portfolio of our best work. It combines cutting-edge web technologies to create a seamless, interactive user experience that highlights our capabilities in web development and design. The site features a modern, minimalist design with smooth animations and 3D elements, showcasing our expertise in creating visually stunning and high-performance web applications. We've implemented server-side rendering for improved SEO and initial load times, and utilized Three.js for immersive 3D graphics that bring our portfolio to life.",
      duration: "5 weeks",
      performance: 68,
      accessibility: 91,
      bestPractices: 100,
      seo: 100,
      metrics: {
        fcp: "0.4s",
        lcp: "4.9s",
        tbt: "0ms",
        cls: "0",
        si: "4.0s"
      }
    },
    {
      name: "Fränkis Pub",
      description: "A modern, mobile-friendly site for Fränkis Pub. Discover events, browse the menu, and connect with your favorite local spot.",
      image: "/projekte/Projekt2.png",
      url: "https://fraenkis.nonext.io",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "motion"],
      fullDescription: "Fränkis Pub website is a vibrant, user-friendly platform designed to enhance the pub's online presence. It features an intuitive interface for browsing menus, checking event schedules, and making reservations, all while capturing the unique atmosphere of the pub. The site is optimized for mobile devices, ensuring a seamless experience for users on the go, and includes integration with social media platforms to boost engagement and reach. We've implemented a custom CMS using Supabase, allowing the pub owners to easily update menus, events, and other content. The reservation system is integrated with the pub's internal management software for streamlined operations.",
      duration: "2 weeks",
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      metrics: {
        fcp: "0.4s",
        lcp: "0.7s",
        tbt: "0ms",
        cls: "0.01",
        si: "0.4s"
      }
    },
    {
      name: "Reality Break",
      description: "The official site for Reality Break, featuring music, tour info, and band members. A seamless way for fans to connect with the band.",
      image: "/projekte/Projekt3.webp",
      url: "https://reality-break.nonext.io",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "motion"],
      fullDescription: "Reality Break's website is a dynamic platform for the band to connect with their fans. It showcases their music, upcoming tour dates, and band information in an engaging, interactive format. The site also includes e-commerce functionality for merchandise sales, a media gallery with high-quality images and videos, and a blog section for band updates. Special attention was given to creating an immersive audio experience, allowing fans to preview tracks directly on the site. We've integrated Stripe for secure payment processing and Sanity.io as a headless CMS, giving the band full control over their content. The tour section includes an interactive map and integrates with ticketing platforms for seamless ticket purchases.",
      duration: "3 weeks",
      performance: 89,
      accessibility: 96,
      bestPractices: 100,
      seo: 100,
      metrics: {
        fcp: "0.3s",
        lcp: "0.4s",
        tbt: "0ms",
        cls: "0",
        si: "0.5s"
      }
    }
  ]

  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

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
                      onClick={() => setSelectedProject(project)}
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
                    Visit Page <ChevronRight className="ml-1 h-4 w-4" />
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
  )
}