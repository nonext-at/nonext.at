import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Hero() {
    return (
        <section id="about" className="py-20 px-4 bg-white text-black">
                <div className="max-w-4xl mx-auto">
                  <motion.h2
                    className="text-3xl font-bold text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    About Us
                  </motion.h2>
                  <motion.p
                    className="text-md text-gray-800 mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Feel free to check out our profiles.
                  </motion.p>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="text-center">
                      <img src="/maikeru.jpg" alt="Michael Prietl" className="w-40 h-40 rounded-full mx-auto mb-4 border-white border-solid border-4 shadow-lg" />
                      <h3 className="text-xl font-semibold mb-2 items-center flex justify-center gap-2 hover:underline">
                        <a href="https://michael.nonext.io" target="_blank" rel="noopener noreferrer">
                          Michael Prietl
                        </a>
                        <ExternalLink className='w-4 h-4'></ExternalLink>
                      </h3>
                      <p>Front-/Backend Developer & Designer</p>
                    </div>
                    <div className="text-center">
                      <img src="/nohell.png" alt="Noel Hermann" className="w-40 h-40 rounded-full mx-auto mb-4 border-white border-solid border-4 shadow-lg" />
                      <h3 className="text-xl font-semibold mb-2 items-center flex justify-center gap-2 hover:underline">
                        <a href="https://noel.nonext.io" target="_blank" rel="noopener noreferrer">
                          Noel Hermann
                        </a>
                        <ExternalLink className='w-4 h-4'></ExternalLink>
                      </h3>
                      <p>Front-/Backend Developer & Database Engineer</p>
                    </div>
                  </motion.div>
                </div>
              </section>
    )
}