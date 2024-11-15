import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Get in Touch
                </motion.h2>
                <motion.p
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Have a project in mind? Let's create something amazing together.
                </motion.p>
                <motion.div
                    className="flex justify-center space-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a href="#" className="text-2xl hover:text-gray-300 transition-colors"><FaGithub /></a>
                    <a href="#" className="text-2xl hover:text-gray-300 transition-colors"><FaInstagram /></a>
                    <a href="#" className="text-2xl hover:text-gray-300 transition-colors"><FaEnvelope /></a>
                </motion.div>
            </div>
        </section>
    )
}