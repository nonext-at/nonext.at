import Image from "next/image"; // Import the Next.js Image component

export default function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-white/20">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo */}
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

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a
                            href="https://instagram.com/nonext.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="mt-6 text-center text-gray-400 text-xs">
                    © 2024 nonext. Alle Rechte vorbehalten.
                </div>
            </div>
        </footer>
    );
}
