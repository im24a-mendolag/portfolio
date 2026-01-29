'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-black z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-white">Portfolio</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link 
            href="/" 
            className={`transition-opacity ${
              isActive('/') 
                ? 'text-white font-semibold opacity-100' 
                : 'text-white opacity-60 hover:opacity-80'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`transition-opacity ${
              isActive('/about') 
                ? 'text-white font-semibold opacity-100' 
                : 'text-white opacity-60 hover:opacity-80'
            }`}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className={`transition-opacity ${
              isActive('/projects') 
                ? 'text-white font-semibold opacity-100' 
                : 'text-white opacity-60 hover:opacity-80'
            }`}
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className={`transition-opacity ${
              isActive('/contact') 
                ? 'text-white font-semibold opacity-100' 
                : 'text-white opacity-60 hover:opacity-80'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
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

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black border-t border-white">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <Link 
              href="/" 
              onClick={closeMenu}
              className={`transition-opacity py-2 ${
                isActive('/') 
                  ? 'text-white font-semibold opacity-100' 
                  : 'text-white opacity-60 hover:opacity-80'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={closeMenu}
              className={`transition-opacity py-2 ${
                isActive('/about') 
                  ? 'text-white font-semibold opacity-100' 
                  : 'text-white opacity-60 hover:opacity-80'
              }`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              onClick={closeMenu}
              className={`transition-opacity py-2 ${
                isActive('/projects') 
                  ? 'text-white font-semibold opacity-100' 
                  : 'text-white opacity-60 hover:opacity-80'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className={`transition-opacity py-2 ${
                isActive('/contact') 
                  ? 'text-white font-semibold opacity-100' 
                  : 'text-white opacity-60 hover:opacity-80'
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}

      <div className="w-full h-px bg-white"></div>
    </header>
  );
}
