import { motion } from "framer-motion";
import { Coffee, PenTool, Rocket, MessageSquare } from "lucide-react";


export default function Process () {

    const processSteps = [
        {
          icon: <Coffee className="w-12 h-12 mb-4" />,
          title: "Initial Consultation",
          description: "We meet with you to discuss your vision, goals, and requirements for the project."
        },
        {
          icon: <PenTool className="w-12 h-12 mb-4" />,
          title: "Design & Planning",
          description: "Our team creates detailed wireframes and designs based on your input and feedback."
        },
        {
          icon: <Rocket className="w-12 h-12 mb-4" />,
          title: "Development & Testing",
          description: "We build your website using cutting-edge technologies, ensuring a smooth and responsive experience."
        },
        {
          icon: <MessageSquare className="w-12 h-12 mb-4" />,
          title: "Review & Refinement",
          description: "We present the finished product and make any necessary adjustments based on your feedback."
        }
    ]
      
    return (
        <section id="process" className="py-20 px-16 bg-black text-white">
                <div className="max-w-6xl mx-auto">
                  <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Our Process
                  </motion.h2>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <div className="flex justify-center items-center mb-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{index + 1 + ". " + step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>
    )
}