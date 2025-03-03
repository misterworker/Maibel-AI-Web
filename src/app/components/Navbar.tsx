// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
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
            <Link href="/" className="text-gray-600 hover:text-pink-500">
              About
            </Link>
            <Link href="mailto:test@gmail.com" className="text-gray-600 hover:text-pink-500">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-pink-500">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div>
            <a href="https://www.maibel-ai.com/refer" className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
