"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Youtube, Radio } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Episodes', href: '/episodes' },
    { name: 'About', href: '/about' },
    { name: 'Prayer Requests', href: '/prayer' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <Radio className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              DETENTE<span className="text-red-600">SENTINELLE</span>
            </span>


          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://youtube.com/@yourchannel"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-all shadow-md"
              >
                <Youtube size={18} />
                Subscribe
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-slate-600 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://youtube.com/@yourchannel"
              className="mt-4 flex items-center justify-center gap-2 w-full rounded-md bg-red-600 px-3 py-3 text-base font-bold text-white"
            >
              <Youtube size={20} />
              Watch on YouTube
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;