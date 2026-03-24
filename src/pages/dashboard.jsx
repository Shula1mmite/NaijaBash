import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import weddingImg from "../assets/images/eventimage16.jpg";

import namingImg from "../assets/images/eventimage1.png";

import nightlifeImg from "../assets/images/eventimage9.png";

import culturalImg from "../assets/images/eventimage6.png";

import {
  FaHome,
  FaCalendarAlt,
  FaHeart,
  FaBookmark,
  FaTicketAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPlus,
  FaBell,
  FaUsers,
  FaStar,
  FaChevronRight,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaCompass,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Dashboard() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock user data
  const user = {
    name: "Chioma Adebayo",
    avatar: culturalImg,
    location: "Lagos, Nigeria",
  };

  // Sidebar navigation items
  const navItems = [
    { name: "Dashboard", icon: FaHome, path: "/dashboard", badge: null },
    { name: "Discover Events", icon: FaCompass, path: "/events", badge: null },
    {
      name: "My Events",
      icon: FaCalendarAlt,
      path: "/dashboard/myevents",
      badge: "12",
    },
    { name: "Saved", icon: FaBookmark, path: "/dashboard/saved", badge: "8" },
    {
      name: "Hosting",
      icon: FaTicketAlt,
      path: "/dashboard/hostevent",
      badge: "3",
    },
    {
      name: "Notifications",
      icon: FaBell,
      path: "/dashboard/notification",
      badge: "5",
    },
  ];

  const bottomNavItems = [
    { name: "Settings", icon: FaCog, path: "/dashboard/settings" },
    { name: "Logout", icon: FaSignOutAlt, path: "/dashboard/logout" },
  ];

  // Mock stats - now with colors
  const stats = [
    {
      icon: FaTicketAlt,
      label: "Events attending",
      value: "12",
      trend: "+3 this month",
      color: "#000000", // Pink
    },
    {
      icon: FaBookmark,
      label: "Saved events",
      value: "8",
      trend: "2 new",
      color: "#000000", // Blue
    },
    {
      icon: FaUsers,
      label: "Events hosted",
      value: "3",
      trend: "1 upcoming",
      color: "#000000", // Black
    },
  ];

  // Mock upcoming events user RSVP'd to
  const upcomingEvents = [
    {
      id: 1,
      title: "Adaeze's Owanbe Wedding",
      date: "Feb 22, 2026",
      time: "2:00 PM",
      location: "Lekki, Lagos",
      image: weddingImg,
      category: "Wedding",
      attendees: 245,
      role: "Guest",
    },
    {
      id: 2,
      title: "Afrobeat Night @ Terra Kulture",
      date: "Feb 28, 2026",
      time: "8:00 PM",
      location: "Victoria Island, Lagos",
      image: nightlifeImg,
      category: "Concert",
      attendees: 120,
      role: "Attendee",
    },
    {
      id: 3,
      title: "Naming Ceremony - Baby Tunde",
      date: "Mar 5, 2026",
      time: "11:00 AM",
      location: "Ikeja, Lagos",
      image: namingImg,
      category: "Naming Ceremony",
      attendees: 80,
      role: "VIP Guest",
    },
  ];

  // Mock recommended events
  const recommendedEvents = [
    {
      id: 6,
      title: "Detty December Warm-Up Party",
      date: "Mar 20, 2026",
      location: "Victoria Island",
      image: namingImg,
      tag: "Popular",
    },
    {
      id: 7,
      title: "Traditional Igbo Wedding",
      date: "Mar 25, 2026",
      location: "Enugu",
      image: weddingImg,
      tag: "New",
    },
  ];

  // Mock notifications
  const notifications = [
    {
      id: 1,
      message: "Adaeze's wedding is in 9 days",
      time: "2 hours ago",
      type: "reminder",
    },
    {
      id: 2,
      message: "3 new events added in Lagos",
      time: "5 hours ago",
      type: "update",
    },
    {
      id: 3,
      message: "Your friend Tunde RSVP'd to Afrobeat Night",
      time: "1 day ago",
      type: "social",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo & Close Button */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#e73768] to-[#69e0f9] rounded-xl flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">NB</span>
              </div>
              <span className="font-extrabold text-xl text-black">
                NaijaBash
              </span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-600 hover:text-black"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* User Profile */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#69e0f9] border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm truncate text-black">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <FaMapMarkerAlt size={10} className="text-[#69e0f9]" />
                  {user.location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-gray-100 text-black font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-black"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#69e0f9]/10 text-[#69e0f9]">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Host Event Button */}
            <div className="mt-6 px-4">
              <Link
                to="/dashboard/hostevent"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#e73768] text-white font-semibold rounded-xl hover:bg-[#d62d5c] transition shadow-sm"
              >
                <FaPlus size={16} />
                Host Event
              </Link>
            </div>
          </nav>

          {/* Bottom Navigation */}
          <div className="p-4 border-t border-gray-200 space-y-1">
            {bottomNavItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-black transition-all"
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
          <div className="px-6 py-4 flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-600 hover:text-black"
            >
              <FaBars size={24} />
            </button>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <FaSearch
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search events, locations, or categories..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#69e0f9] focus:bg-white focus:outline-none transition"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="relative p-3 rounded-xl hover:bg-gray-50 transition">
                <FaBell size={20} className="text-gray-600" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#e73768] rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Welcome Section */}
          <section className="bg-gradient-to-r from-[#e73768]/5 via-white to-[#69e0f9]/5 px-6 py-8 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">
              Welcome back, {user.name.split(" ")[0]}! 👋
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your events today.
            </p>
          </section>

          {/* Stats Cards */}
          <section className="px-6 py-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          {stat.label}
                        </p>
                        <p
                          className="text-4xl font-extrabold"
                          style={{ color: stat.color }}
                        >
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {stat.trend}
                        </p>
                      </div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${stat.color}10` }}
                      >
                        <Icon size={24} style={{ color: stat.color }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Main Content Grid */}
          <section className="px-6 pb-8 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* LEFT COLUMN - Upcoming Events */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-extrabold text-black">
                    Upcoming Events
                  </h2>
                  <Link
                    to="/dashboard/my-events"
                    className="text-sm text-gray-600 hover:text-[#69e0f9] flex items-center gap-1 transition-colors"
                  >
                    View all
                    <FaChevronRight size={12} />
                  </Link>
                </div>

                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <Link
                      key={event.id}
                      to={`/events/${event.id}`}
                      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all flex flex-col sm:flex-row"
                    >
                      {/* Image */}
                      <div className="sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0 relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Blue accent on image */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#69e0f9]"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                            {event.category}
                          </span>
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#69e0f9]/10 text-[#69e0f9]">
                            {event.role}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-black group-hover:text-[#e73768] transition-colors">
                          {event.title}
                        </h3>

                        <div className="space-y-2 text-sm text-gray-600">
                          <p className="flex items-center gap-2">
                            <FaCalendarAlt
                              size={14}
                              className="text-[#e73768]"
                            />
                            {event.date} at {event.time}
                          </p>
                          <p className="flex items-center gap-2">
                            <FaMapMarkerAlt
                              size={14}
                              className="text-[#69e0f9]"
                            />
                            {event.location}
                          </p>
                          <p className="flex items-center gap-2">
                            <FaUsers size={14} className="text-gray-400" />
                            {event.attendees} attending
                          </p>
                        </div>

                        <div className="mt-4 flex gap-3">
                          <button className="text-sm px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                            View details
                          </button>
                          <button className="text-sm px-4 py-2 border border-gray-200 text-[#69e0f9] rounded-lg hover:border-[#69e0f9] hover:bg-[#69e0f9]/5 transition">
                            Share
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN - Sidebar Content */}
              <div className="space-y-6">
                {/* Notifications */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-black">
                      Recent updates
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-[#69e0f9]/10 flex items-center justify-center">
                      <FaBell size={18} className="text-[#69e0f9]" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className="pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                      >
                        <p className="text-sm font-medium text-black">
                          {notif.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                          <FaClock size={10} />
                          {notif.time}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/dashboard/notification"
                    className="mt-4 text-sm text-[#69e0f9] hover:text-[#4db8d6] flex items-center gap-1 font-medium"
                  >
                    View all notifications
                    <FaChevronRight size={12} />
                  </Link>
                </div>

                {/* Recommended Events */}
                <div className="bg-gradient-to-br from-[#69e0f9]/5 to-transparent rounded-2xl border border-gray-200 p-6">
                  <h3 className="font-bold text-lg mb-4 text-black">
                    Recommended for you
                  </h3>

                  <div className="space-y-4">
                    {recommendedEvents.map((event) => (
                      <Link
                        key={event.id}
                        to={`/events/${event.id}`}
                        className="group flex gap-3 hover:bg-white p-3 rounded-xl -mx-3 transition-all border border-transparent hover:border-gray-200"
                      >
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-semibold px-2 py-1 rounded bg-[#e73768]/10 text-[#e73768]">
                            {event.tag}
                          </span>
                          <h4 className="font-semibold text-sm mt-1 text-black group-hover:text-[#69e0f9] transition-colors line-clamp-2">
                            {event.title}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1">
                            {event.date}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/events"
                    className="mt-4 block text-center text-sm text-[#69e0f9] hover:text-[#4db8d6] font-medium"
                  >
                    Explore more events →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
