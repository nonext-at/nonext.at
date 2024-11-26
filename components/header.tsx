'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSectionContext } from "@/app/SectionContext";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from 'lucide-react';

export default function Header() {
  const { sections } = useSectionContext();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLogoClick = () => {
    if (pathname === "/") {
      const element = document.getElementById("main-content");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/");
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="py-4 bg-black border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-5xl flex justify-between items-center">
        {/* Left Navigation */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div
            className="cursor-pointer p-1 px-2 flex items-center relative justify-center"
            style={{ width: "100px", height: "30px" }}
            onClick={handleLogoClick}
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

          {/* Current Page Sections - Visible on desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Navigation - Visible on desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className={`relative text-sm transition-colors ${
                  pathname === "/"
                    ? "text-white active-link"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Home Seite
              </a>
            </li>
            <li>
              <a
                href="/team"
                className={`relative text-sm transition-colors ${
                  pathname === "/team"
                    ? "text-white active-link"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Team Seite
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className={`relative text-sm transition-colors ${
                  pathname === "/projects"
                    ? "text-white active-link"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Projekte Seite
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 md:hidden"
            onClick={closeMenu}
          >
            <div 
              className="flex flex-col items-center justify-center h-full"
              onClick={closeMenu}
            >
              <nav className="w-full max-w-sm">
                <ul className="space-y-4 text-center">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className="text-lg text-white hover:text-gray-300 transition-colors"
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                  <li className="py-2">
                    <div className="w-16 h-px bg-white/20 mx-auto"></div>
                  </li>
                  <li>
                    <a
                      href="/"
                      className={`text-lg ${
                        pathname === "/" ? "text-white" : "text-gray-300 hover:text-white"
                      }`}
                      onClick={closeMenu}
                    >
                      Home Seite
                    </a>
                  </li>
                  <li>
                    <a
                      href="/team"
                      className={`text-lg ${
                        pathname === "/team" ? "text-white" : "text-gray-300 hover:text-white"
                      }`}
                      onClick={closeMenu}
                    >
                      Team Seite
                    </a>
                  </li>
                  <li>
                    <a
                      href="/projects"
                      className={`text-lg ${
                        pathname === "/projects" ? "text-white" : "text-gray-300 hover:text-white"
                      }`}
                      onClick={closeMenu}
                    >
                      Projekte Seite
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}