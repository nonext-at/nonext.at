import Image from "next/image"; // Import the Next.js Image component

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/20 bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/logo.webp"
                alt="Nonext Logo"
                width={120}
                height={120}
                draggable={false}
                className="select-none"
              />
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nonext.at" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                Instagram
              </a>
              <a href="https://github.com/nonext-at" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/company/nonext" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} nonext. Alle Rechte vorbehalten.
          </div>
          <p className="text-xs mt-3 ml-4 text-center text-gray-400">
                    Made with 🤍 by <a href="https://www.nonext.at" target="_blank" className="text-gray-300 font-semibold">nonext.at</a>
                </p>
        </div>
      </footer> 
    );
}
