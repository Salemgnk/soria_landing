"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Accueil" },
    { href: "#features", label: "Fonctionnalités" },
    { href: "#solution", label: "Pourquoi Soria" },
    { href: "#screenshots", label: "L'application" },
    { href: "#pricing", label: "Tarifs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#1a0b2e] shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image src="/soria_logo.jpeg" alt="Soria logo" fill sizes="(max-width: 768px) 40px, 48px" className="object-contain rounded-md" />
            </div>
            <span className="hidden sm:inline-block text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Soria
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm font-medium ${
                  idx === 0 
                    ? 'text-pink-500' 
                    : scrolled 
                      ? 'text-gray-300 hover:text-pink-400' 
                      : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Download Button */}
          <a 
            href="#download" 
            className="hidden lg:block bg-white text-purple-900 px-8 py-2.5 rounded-full transition-all text-sm font-bold hover:shadow-xl hover:scale-105"
          >
            TÉLÉCHARGER
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${scrolled ? 'text-white' : 'text-gray-700'}`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="px-4 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-gray-700 hover:text-pink-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#download" 
                className="block mt-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center px-6 py-2.5 rounded-full font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                TÉLÉCHARGER
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
