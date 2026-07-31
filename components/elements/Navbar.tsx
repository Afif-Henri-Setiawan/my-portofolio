"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [showFloating, setShowFloating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks = () => (
    <>
      <li>
        <Link href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
      </li>
      <li>
        <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
      </li>
      <li>
        <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Project</Link>
      </li>
      <li>
        <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
      </li>
    </>
  );

  return (
    <>
      {/* Navbar normal */}
      <nav className="px-6 py-4 flex items-center justify-between glass my-8 rounded-2xl max-w-7xl mx-auto relative z-[60]">
        <div>
          <h1 className="text-white text-xl md:text-2xl font-bold">My Portfolio</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white">
          <NavLinks />
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none p-1">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Floating navbar */}
      <nav
        className={`
          fixed top-4 left-1/2 -translate-x-1/2
          z-50
          px-6 md:px-8 py-3 md:py-4
          rounded-2xl
          glass
          transition-all duration-300
          ${
            showFloating && !isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }
        `}
      >
        <ul className="hidden md:flex gap-6 text-white text-sm">
          <NavLinks />
        </ul>
        {/* Floating Mobile Hamburger */}
        <div className="md:hidden flex items-center justify-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none p-1">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center md:hidden transition-all duration-300">
          <button 
            onClick={toggleMobileMenu} 
            className="absolute top-10 right-6 text-white p-2 focus:outline-none"
          >
            <X size={36} />
          </button>
          <ul className="flex flex-col space-y-8 text-white text-2xl font-medium text-center">
            <NavLinks />
          </ul>
        </div>
      )}
    </>
  );
}
