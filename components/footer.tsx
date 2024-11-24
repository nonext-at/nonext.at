export default function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-white/20">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-xl font-bold mb-4 md:mb-0">nonext</div>
                    <div className="flex space-x-4"> 
                        <a href="https://instagram.com/nonext.io" target="_blank" className="text-sm text-gray-400 hover:text-white transition-colors">Instagram</a> 
                    </div>
                </div>
                <div className="mt-6 text-center text-gray-400 text-xs">
                    © 2024 nonext. Alle Rechte vorbehalten.
                </div>
            </div>
        </footer>
    )
}