import { useState, useEffect } from "react";
import MenuIcon from "../assets/menu";
import CloseIcon from "../assets/close";
import Logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "Services", "Portfolio", "About", "Contact"];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <img src={Logo} alt="BAYREMS Concepts" className="w-42 md:w-42" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`font-medium transition ${
                  scrolled
                    ? "text-white hover:text-gray-200"
                    : "text-gray-700 hover:text-indigo-700"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-1">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 font-medium transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
