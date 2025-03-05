'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // Function to check if the current path is active
  const isActive = (path: string) => pathname === path ? 'border-b-2 border-pink-500' : '';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold text-pink-600">Maibel.ai</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className={`text-gray-600 hover:text-pink-500 ${isActive('/')}`}>
              About
            </Link>
            <Link href="/contact" className={`text-gray-600 hover:text-pink-500 ${isActive('/contact')}`}>
              Contact
            </Link>
            <Link href="/blog" className={`text-gray-600 hover:text-pink-500 ${isActive('/blog')}`}>
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div>
            <a href="/refer" className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
