'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4 max-w-7xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-white">Giovanni Mendola</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative group flex flex-col items-center"
            >
              <span
                className={`transition-opacity duration-200 ${
                  isActive(href)
                    ? 'text-white font-semibold opacity-100'
                    : 'text-white opacity-60 hover:opacity-80'
                }`}
              >
                {label}
              </span>
              <span
                className={`h-[2px] bg-white rounded-full transition-all duration-300 mt-0.5 ${
                  isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((o) => !o)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu — always rendered, height animated */}
      <nav
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-4 py-4 space-y-4 border-t border-white/20">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`transition-opacity py-2 ${
                isActive(href)
                  ? 'text-white font-semibold opacity-100'
                  : 'text-white opacity-60 hover:opacity-80'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="w-full h-px bg-white/20"></div>
    </header>
  );
}
