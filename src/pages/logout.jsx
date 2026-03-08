import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaCalendarAlt,
  FaHeart,
  FaUserFriends,
} from "react-icons/fa";

export default function Logout() {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);

    // Simulate logout process
    setTimeout(() => {
      setIsLoggingOut(false);
      setLoggedOut(true);

      // Redirect to home after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 1500);
  };

  if (loggedOut) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          {/* Success Animation */}
          <div className="mb-8 animate-bounce">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <FaCheckCircle className="text-white" size={50} />
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">
            Successfully Logged Out
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Thanks for celebrating with us! See you at the next Owanbe! 🎉
          </p>

          <p className="text-gray-500 text-sm">
            Redirecting you to homepage...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=80"
            alt="Nigerian celebration"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/50 to-white"></div>
        </div>

        <div className="relative z-10 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#e73768] to-[#d62d5c] rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <FaSignOutAlt className="text-white" size={36} />
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
              Ready to sign out?
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              We hope you enjoyed discovering and celebrating amazing events.
              You can always come back anytime!
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 pb-12 -mt-8">
        {/* Main Logout Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden mb-8">
          <div className="p-10 lg:p-12">
            {/* Stats Reminder */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 text-center">
                Your NaijaBash Journey
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-[#e73768]/10 to-[#e73768]/5 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 bg-[#e73768]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaCalendarAlt className="text-[#e73768]" size={24} />
                  </div>
                  <p className="text-4xl font-extrabold text-[#e73768] mb-1">
                    3
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    Upcoming Events
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#69e0f9]/10 to-[#69e0f9]/5 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 bg-[#69e0f9]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaHeart className="text-[#69e0f9]" size={24} />
                  </div>
                  <p className="text-4xl font-extrabold text-[#69e0f9] mb-1">
                    8
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    Saved Events
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/10 to-gray-800/5 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 bg-gray-800/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaUserFriends className="text-gray-800" size={24} />
                  </div>
                  <p className="text-4xl font-extrabold text-gray-800 mb-1">
                    1
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    Hosting Event
                  </p>
                </div>
              </div>
            </div>

            {/* Warning Message */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">
                    Before you go...
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>
                      • Make sure you've RSVP'd to all events you want to attend
                    </li>
                    <li>• Your saved events will be waiting when you return</li>
                    <li>• Event reminders will still be sent to your email</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className={`flex-1 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3 ${
                  isLoggingOut
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#e73768] hover:bg-[#d62d5c] text-white"
                }`}
              >
                {isLoggingOut ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Logging out...
                  </>
                ) : (
                  <>
                    <FaSignOutAlt size={20} />
                    Yes, Log Me Out
                  </>
                )}
              </button>

              <Link
                to="/dashboard"
                className="flex-1 px-8 py-4 bg-white border-2 border-gray-200 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3"
              >
                <FaArrowLeft size={20} />
                Stay Logged In
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/events"
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#69e0f9]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <FaCalendarAlt className="text-[#69e0f9]" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-black mb-1 group-hover:text-[#e73768] transition">
                  Browse More Events
                </h3>
                <p className="text-sm text-gray-600">
                  Discover celebrations happening near you
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/dashboard/my-events"
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e73768]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <FaHeart className="text-[#e73768]" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-black mb-1 group-hover:text-[#e73768] transition">
                  Check Your Events
                </h3>
                <p className="text-sm text-gray-600">
                  View your upcoming celebrations
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <Link
              to="/contact"
              className="text-[#69e0f9] hover:underline font-medium"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
