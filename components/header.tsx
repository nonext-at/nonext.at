import Image from "next/image"; // Import the Next.js Image component

export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="py-4 bg-black border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-5xl flex justify-between items-center">
        {/* Left Navigation (Logo + Current Page Sections) */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div
            className="cursor-pointer p-1 px-2 flex items-center"
            onClick={() => scrollToSection("main-content")}
          >
            <Image
              src="/logo.webp"
              alt="Nonext Logo"
              width={100}
              height={100}
              priority
              draggable={false}
              className="select-none"
            />
          </div>

          {/* Current Page Sections */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Dienstleistung
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Projekte
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Navigation (Separate Pages) */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
              >
                Home Seite
              </a>
            </li>
            <li>
              <a
                href="/team"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Team Seite
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Projekte Seite
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
