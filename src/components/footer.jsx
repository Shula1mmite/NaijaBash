import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-black/5">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4">
              NaijaBash
            </h3>
            <p className="text-black/60 text-sm leading-relaxed">
              Discover, attend, and host Nigerian events — from intimate
              ceremonies to full-blown owanbe madness.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-black/60">
              <li>
                <Link to="/events" className="hover:text-black transition">
                  All events
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-black transition">
                  Weddings
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-black transition">
                  Burials
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-black transition">
                  Concerts
                </Link>
              </li>
            </ul>
          </div>

          {/* HOST */}
          <div>
            <h4 className="font-semibold mb-4">Host</h4>
            <ul className="space-y-3 text-sm text-black/60">
              <li>
                <Link to="/signup" className="hover:text-black transition">
                  Create account
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-black transition">
                  Host an event
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-black transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-black transition">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-black/60 mb-6">
              <li>
                <Link to="/" className="hover:text-black transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-black transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-black transition">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-black transition">
                  Terms of service
                </Link>
              </li>
            </ul>

            {/* SOCIAL ICONS — ADDED */}
            <div className="flex items-center gap-4">
              {[FaInstagram, FaTwitter, FaFacebookF, FaTiktok].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label="social link"
                    className="w-9 h-9 flex items-center justify-center
                               border border-black/20 rounded-full
                               text-black/60 hover:text-white
                               hover:bg-[#e73768] hover:border-[#e73768]
                               transition"
                  >
                    <Icon size={14} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-black/10 pt-8">
          <p className="text-sm text-black/40">
            © {new Date().getFullYear()} NaijaBash. All rights reserved.
          </p>

          <p className="text-sm text-black/40">
            Made for the culture 🇳🇬
          </p>
        </div>

      </div>
    </footer>
  );
}
