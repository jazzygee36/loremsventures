import { useState } from "react";
import MenuIcon from "../assets/menu";
import CloseIcon from "../assets/close";
import Logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Services", "Portfolio", "About", "Contact"];

  return (
    <header className="bg-white  sticky w-full z-50 ">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className=" ">
            <img src={Logo} alt="Lorems Ventures" className="w-42 md:w-42" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-indigo-700 font-medium transition"
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
            <button className="w-full px-4 py-2 mt-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
