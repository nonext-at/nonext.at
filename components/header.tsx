export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-4 bg-black border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-5xl flex justify-between items-center">
        <div className="text-xl font-bold">nonext</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button onClick={() => scrollToSection('services')} className="text-sm text-gray-400 hover:text-white transition-colors">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="text-sm text-gray-400 hover:text-white transition-colors">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('team')} className="text-sm text-gray-400 hover:text-white transition-colors">
                Team
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  )
}