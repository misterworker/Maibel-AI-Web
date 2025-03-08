'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // Function to check if the current path is active
  const isActive = (path: string) => pathname === path ? 'border-b-2 border-[#512260]' : '';

  return (
    <nav className="bg-[#f6f2ea] shadow-md sticky top-0 z-50 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold text-[#512260]">Maibel.ai</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {/* <Link href="/" className={`text-[#382a40] hover:text-[#512260] ${isActive('/')}`}>
              About
            </Link>
            <Link href="/contact" className={`text-[#382a40] hover:text-[#512260] ${isActive('/contact')}`}>
              Contact
            </Link> */}
            {/* <Link href="/blog" className={`text-[#382a40] hover:text-[#512260] ${isActive('/blog')}`}>
              Blog
            </Link> */}
          </div>

          {/* CTA Button */}
          <div>
            <a href="/refer" className="px-4 py-2 bg-[#512260] text-white rounded-lg hover:bg-[#c5aded]">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
