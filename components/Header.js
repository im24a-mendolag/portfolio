'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-black z-50">
      <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-white">Portfolio</h1>
        <nav className="flex gap-8">
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
      </div>
      <div className="w-full h-px bg-white"></div>
    </header>
  );
}
