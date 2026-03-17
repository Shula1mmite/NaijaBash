import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/images/logo2.png";
import {
  FaUser,
  FaUserPlus,
  FaCalendarAlt,
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navbar - Party Aesthetic */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl shadow-2xl border-b border-[#e73768]/20"
            : "bg-gradient-to-b from-black via-black to-black/95"
        }`}
      >
        {/* Animated gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e73768] via-[#69e0f9] to-[#e73768] bg-[length:200%_100%] animate-gradient"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with party glow effect - BIGGER */}
            <Link
              to="/"
              className="flex items-center flex-shrink-0 group relative"
            >
              {/* Multi-color glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#e73768] via-[#69e0f9] to-[#e73768] blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>

              {/* Rotating halo effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#e73768]/30 via-transparent to-[#69e0f9]/30 blur-xl opacity-50 group-hover:animate-spin-slow"></div>

              <img
                src={Logo}
                alt="NaijaBash Logo"
                className="h-16 w-auto relative z-10 transition-all duration-500 group-hover:scale-110 drop-shadow-2xl"
              />
            </Link>

            {/* Desktop Menu - Party Pills with confetti effect */}
            <div className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm rounded-full px-2 py-2 border border-[#e73768]/20 shadow-lg">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 overflow-hidden group ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Animated party gradient for active */}
                      <span
                        className={`absolute inset-0 bg-gradient-to-r from-[#e73768] via-[#69e0f9] to-[#e73768] bg-[length:200%_100%] transition-all duration-500 ${
                          isActive
                            ? "opacity-100 scale-100 animate-gradient"
                            : "opacity-0 scale-90 group-hover:opacity-20 group-hover:scale-100"
                        }`}
                      ></span>

                      {/* Sparkle effect on hover */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>

                      {/* Color burst on active */}
                      {isActive && (
                        <span className="absolute inset-0 bg-gradient-to-r from-[#e73768] to-[#69e0f9] blur-lg opacity-50 animate-pulse"></span>
                      )}

                      <span className="relative z-10 drop-shadow-lg">
                        {item.name}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop Auth Buttons - Party Style */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Sign In - Cyan glow */}
              <Link
                to="/auth"
                className="group relative px-6 py-2.5 rounded-full font-bold text-sm overflow-hidden"
              >
                {/* Animated gradient border */}
                <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#69e0f9] via-[#4db8d6] to-[#69e0f9] bg-[length:200%_100%] animate-gradient">
                  <span className="absolute inset-[2px] bg-black rounded-full"></span>
                </span>

                {/* Party glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#69e0f9]/0 via-[#69e0f9]/50 to-[#69e0f9]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>

                {/* Sparkles */}
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#69e0f9] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 bg-[#69e0f9] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-150"></span>

                <span className="relative z-10 bg-gradient-to-r from-[#69e0f9] to-[#4db8d6] bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300 flex items-center gap-2">
                  Sign In
                  <FaChevronRight
                    size={10}
                    className="group-hover:translate-x-1 transition-transform duration-300 text-[#69e0f9] group-hover:text-white"
                  />
                </span>
              </Link>

              {/* Sign Up - Party gradient with confetti */}
              <Link
                to="/auth"
                className="group relative px-6 py-2.5 rounded-full font-bold text-sm overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Animated multi-color gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#e73768] via-[#69e0f9] to-[#e73768] bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-all duration-700"></span>

                {/* Party glow halo */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#e73768] via-[#69e0f9] to-[#e73768] opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500 animate-pulse"></span>

                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>

                {/* Confetti sparkles */}
                <span className="absolute top-1 right-2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"></span>
                <span className="absolute top-2 right-4 w-1 h-1 bg-[#69e0f9] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce animation-delay-100"></span>
                <span className="absolute bottom-2 left-3 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce animation-delay-200"></span>

                <span className="relative z-10 text-white flex items-center gap-2 drop-shadow-lg">
                  Sign Up
                  <FaUserPlus
                    size={12}
                    className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
                  />
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden relative p-2 rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                <span
                  className={`absolute h-0.5 w-6 bg-gradient-to-r from-[#e73768] to-[#69e0f9] transform transition-all duration-300 ${
                    isOpen ? "rotate-45" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-gradient-to-r from-[#69e0f9] to-[#e73768] transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-gradient-to-r from-[#e73768] to-[#69e0f9] transform transition-all duration-300 ${
                    isOpen ? "-rotate-45" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-b from-gray-900 via-black to-gray-900 z-40 lg:hidden transform transition-transform duration-500 ease-out shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="sticky top-0 bg-black/50 backdrop-blur-lg border-b border-white/10 p-6 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-white">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl hover:bg-white/10 transition-all"
              aria-label="Close menu"
            >
              <FaTimes className="text-white" size={24} />
            </button>
          </div>

          {/* Mobile Nav Items */}
          <div className="p-6 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
                    isActive
                      ? "bg-gradient-to-r from-[#e73768] to-[#d62d5c] text-white shadow-lg scale-105"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <svg
                    className="w-5 h-5 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </NavLink>
            ))}
          </div>

          {/* Mobile Auth Section */}
          <div className="p-6 space-y-4 border-t border-white/10">
            <Link
              to="/auth"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-[#e73768] to-[#d62d5c] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaUserPlus size={18} />
              </div>
              <span className="text-lg">Create Account</span>
            </Link>

            <Link
              to="/auth"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 border-2 border-[#69e0f9] text-[#69e0f9] font-bold rounded-2xl hover:bg-[#69e0f9] hover:text-black transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-10 h-10 bg-[#69e0f9]/20 rounded-full flex items-center justify-center">
                <FaUser size={18} />
              </div>
              <span className="text-lg">Sign In</span>
            </Link>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-white/10 mt-auto">
            <Link
              to="/events"
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#69e0f9]/10 to-[#e73768]/10 rounded-2xl border border-white/10 hover:border-[#69e0f9] transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#e73768] to-[#69e0f9] rounded-xl flex items-center justify-center shadow-lg">
                <FaCalendarAlt className="text-white" size={20} />
              </div>
              <div>
                <p className="font-bold text-white">Discover Events</p>
                <p className="text-xs text-gray-400">
                  Find celebrations near you
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-150 {
          animation-delay: 0.15s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </>
  );
}
