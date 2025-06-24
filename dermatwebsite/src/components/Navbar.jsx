import React, { useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name Section - Clickable to scroll to top */}
          <div
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={() => scrollToSection("home")}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full">
              <Stethoscope className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
                Dr. Shreya Singh
              </h1>
              <p className="text-xs text-gray-500 -mt-1">
                Medical Professional
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer"
            >
              Services
            </a>
            <a
              href="#appointments"
              onClick={(e) => handleNavClick(e, "appointments")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer"
            >
              Appointments
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer"
            >
              Contact
            </a>
            <button
              onClick={(e) => handleNavClick(e, "appointments")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 cursor-pointer"
              >
                About
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 cursor-pointer"
              >
                Services
              </a>
              <a
                href="#appointments"
                onClick={(e) => handleNavClick(e, "appointments")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 cursor-pointer"
              >
                Appointments
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 cursor-pointer"
              >
                Contact
              </a>
              <button
                onClick={(e) => handleNavClick(e, "appointments")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium mt-2 w-full"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
