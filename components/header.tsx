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
              <li><a href="javascript:void(0)" onClick={() => scrollToSection('services')} className="text-sm text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="javascript:void(0)" onClick={() => scrollToSection('projects')} className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="javascript:void(0)" onClick={() => scrollToSection('team')} className="text-sm text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="javascript:void(0)" onClick={() => scrollToSection('contact')} className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }