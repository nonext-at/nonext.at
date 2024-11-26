import { Mail, Instagram } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 relative z-10 bg-black">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">Bereit, Ihr Projekt zu starten?</h2>
                <p className="text-base mb-8 text-gray-400">Lassen Sie uns Ihre Ideen Wirklichkeit werden. Kontaktieren Sie uns noch heute.</p>
                <div className="flex justify-center space-x-8">
                    <a href="mailto:info@nonext.at" className="flex items-center text-white hover:text-gray-300 transition-colors">
                        <Mail className="w-6 h-6 mr-2" />
                        <span>info@nonext.at</span>
                    </a>
                    <a href="https://www.instagram.com/nonext.at" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-300 transition-colors">
                        <Instagram className="w-6 h-6 mr-2" />
                        <span>@nonext.at</span>
                    </a>
                </div>
            </div>
        </section>
    )
}