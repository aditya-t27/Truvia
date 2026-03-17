import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY || 0;

    const onScroll = () => {
      const currentY = window.scrollY || 0;
      const lastY = lastScrollYRef.current;
      const delta = currentY - lastY;

      // Always show near top; otherwise hide on scroll down, show on scroll up.
      if (currentY < 24) {
        setIsVisible(true);
      } else if (delta > 6) {
        setIsVisible(false);
        setIsOpen(false);
      } else if (delta < -6) {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full px-6 py-4 shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Truvia
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/#about" className="hover:text-gray-400 transition">About</Link>
          <Link to="/#contact" className="hover:text-gray-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close Icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            // Menu Icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link to="/" onClick={closeMobileMenu} className="hover:text-gray-400 transition">Home</Link>
          <Link to="/#about" onClick={closeMobileMenu} className="hover:text-gray-400 transition">About</Link>
          <Link to="/#contact" onClick={closeMobileMenu} className="hover:text-gray-400 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
