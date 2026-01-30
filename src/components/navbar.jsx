import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/logo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black text-white shadow-md h-15">
  <div className="max-w-full mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
   <Link to="/" className="flex items-center h-full">
  <img
    src={Logo}
    alt="NaijaBash Logo"
    className="lg:h-[80px] lg:w-[200px] md:h-16 md:w-auto "
  />
</Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#e73768] font-semibold transition-all transform scale-105"
                    : "text-white hover:text-[#69e0f9] hover:scale-105 transition-all"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {/* Sign In / Sign Up */}
          <li>
            <Link
              to="/auth"
              className="ml-4 px-4 py-2 bg-[#e73768] text-white font-bold uppercase tracking-wide rounded-md hover:bg-[#69e0f9] hover:text-black transition-all"
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/auth"
              className="ml-2 px-4 py-2 border-2 border-[#69e0f9] text-[#69e0f9] font-bold uppercase tracking-wide rounded-md hover:bg-[#69e0f9] hover:text-black transition-all"
            >
              Sign In
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
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
      {isOpen && (
        <ul className="md:hidden bg-[#111111] px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#e73768] font-semibold block transition-all"
                    : "block text-white hover:text-[#69e0f9] transition-all"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {/* Mobile Sign Up / Sign In */}
          <li>
            <Link
              to="/auth"
              className="block w-full text-center px-4 py-2 bg-[#e73768] text-white font-bold uppercase tracking-wide rounded-md hover:bg-[#69e0f9] hover:text-black transition-all"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/auth"
              className="block w-full text-center px-4 py-2 border-2 border-[#69e0f9] text-[#69e0f9] font-bold uppercase tracking-wide rounded-md hover:bg-[#69e0f9] hover:text-black transition-all"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
