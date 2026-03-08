import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaChevronLeft,
  FaQrcode,
  FaDownload,
  FaShare,
  FaTimes,
  FaDirections,
  FaEye,
  FaStar,
  FaFilter,
  FaList,
  FaCalendar,
  FaSearch,
  FaTicketAlt,
  FaHeart,
  FaChevronDown,
  FaEdit,
  FaTrash,
  FaChartLine,
  FaUserFriends,
  FaBell,
  FaCheck,
  FaPlus,
} from "react-icons/fa";

export default function MyEvents() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [viewMode, setViewMode] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("date");

  // Mock upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Adaeze's Owanbe Wedding",
      date: "2026-03-15",
      time: "2:00 PM",
      daysUntil: 7,
      location: "Eko Hotel Grand Ballroom, Lagos",
      city: "Lagos",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      category: "Owanbe Weddings",
      role: "Bridesmaid",
      attendees: 245,
      hasQR: true,
    },
    {
      id: 2,
      title: "Afrobeat Night @ Terra Kulture",
      date: "2026-03-20",
      time: "8:00 PM",
      daysUntil: 12,
      location: "Terra Kulture, Victoria Island, Lagos",
      city: "Lagos",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      category: "Concerts",
      role: "Guest",
      attendees: 120,
      hasQR: true,
    },
    {
      id: 3,
      title: "Naming Ceremony - Baby Tunde",
      date: "2026-03-25",
      time: "11:00 AM",
      daysUntil: 17,
      location: "Private Residence, Ikeja, Lagos",
      city: "Lagos",
      image:
        "https://images.unsplash.com/photo-1610149404767-4f82f2f5211e?auto=format&fit=crop&w=800&q=80",
      category: "Naming Ceremonies",
      role: "VIP Guest",
      attendees: 80,
      hasQR: false,
    },
  ];

  // Mock past events
  const pastEvents = [
    {
      id: 5,
      title: "New Year's Eve Gala 2025",
      date: "2025-12-31",
      location: "Landmark Event Centre, Lagos",
      city: "Lagos",
      image:
        "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=800&q=80",
      category: "Nightlife",
      role: "Guest",
      attendees: 300,
      reviewed: false,
    },
    {
      id: 6,
      title: "Christmas Carol Night",
      date: "2025-12-24",
      location: "The Cathedral Church, Abuja",
      city: "Abuja",
      image:
        "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=800&q=80",
      category: "Cultural",
      role: "Guest",
      attendees: 450,
      reviewed: true,
      rating: 5,
    },
  ];

  // Mock saved events
  const savedEvents = [
    {
      id: 7,
      title: "Lagos Fashion Week 2026",
      date: "2026-04-15",
      time: "6:00 PM",
      daysUntil: 38,
      location: "Federal Palace Hotel, Lagos",
      city: "Lagos",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea66f7dd?auto=format&fit=crop&w=800&q=80",
      category: "Cultural",
      attendees: 500,
      price: "₦15,000",
    },
    {
      id: 8,
      title: "Jazz & Wine Evening",
      date: "2026-04-20",
      time: "7:00 PM",
      daysUntil: 43,
      location: "Muson Centre, Lagos",
      city: "Lagos",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      category: "Concerts",
      attendees: 150,
      price: "₦8,000",
    },
  ];

  // Mock hosting events
  const hostingEvents = [
    {
      id: 9,
      title: "My Birthday Bash 2026",
      date: "2026-05-10",
      time: "8:00 PM",
      daysUntil: 63,
      location: "My Residence, Lekki, Lagos",
      city: "Lagos",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
      category: "Nightlife",
      rsvps: 45,
      capacity: 100,
      views: 234,
      shares: 12,
      status: "Published",
    },
  ];

  const categories = [
    "All",
    "Owanbe Weddings",
    "Concerts",
    "Naming Ceremonies",
    "Food & Drinks",
    "Cultural",
    "Nightlife",
  ];

  const getCountdownText = (daysUntil) => {
    if (daysUntil === 0) return "Today!";
    if (daysUntil === 1) return "Tomorrow";
    if (daysUntil < 7) return `in ${daysUntil} days`;
    if (daysUntil < 30) return `in ${Math.floor(daysUntil / 7)} weeks`;
    return `in ${Math.floor(daysUntil / 30)} months`;
  };

  const getTabCount = (tab) => {
    switch (tab) {
      case "upcoming":
        return upcomingEvents.length;
      case "past":
        return pastEvents.length;
      case "saved":
        return savedEvents.length;
      case "hosting":
        return hostingEvents.length;
      default:
        return 0;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition"
            >
              <FaChevronLeft size={16} />
              <span className="font-medium">Dashboard</span>
            </Link>

            <h1 className="text-2xl font-extrabold text-black">My Events</h1>

            <Link
              to="/dashboard/host-event"
              className="px-4 py-2 bg-[#e73768] text-white rounded-lg font-semibold hover:bg-[#d62d5c] transition text-sm"
            >
              <FaPlus className="inline mr-2" size={14} />
              Host Event
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Width */}
      <section className="relative overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=80"
            alt="Nigerian celebration"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/70"></div>
        </div>

        <div className="relative z-10 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-[#e73768]/10 text-[#e73768] rounded-full text-sm font-semibold">
                  Your Events
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
                Your celebration journey
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
                From weddings to festivals, keep track of all the amazing events
                you're attending. Never miss a moment of the celebrations that
                matter to you.
              </p>

              {/* Stats Row */}
              <div className="flex items-center justify-center gap-8 mb-10">
                <div className="text-center">
                  <p className="text-5xl font-extrabold text-[#e73768] mb-1">
                    {upcomingEvents.length}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Upcoming
                  </p>
                </div>
                <div className="w-px h-16 bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-5xl font-extrabold text-[#69e0f9] mb-1">
                    {pastEvents.length}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Attended
                  </p>
                </div>
                <div className="w-px h-16 bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-5xl font-extrabold text-black mb-1">
                    {savedEvents.length}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">Saved</p>
                </div>
                <div className="w-px h-16 bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-5xl font-extrabold text-[#e73768] mb-1">
                    {hostingEvents.length}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">Hosting</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center justify-center gap-4">
                <Link
                  to="/events"
                  className="px-8 py-4 bg-[#e73768] text-white rounded-lg font-semibold hover:bg-[#d62d5c] transition shadow-lg"
                >
                  Discover More Events
                </Link>
                <button
                  onClick={() =>
                    setViewMode(viewMode === "list" ? "calendar" : "list")
                  }
                  className="px-8 py-4 bg-white border-2 border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition shadow-sm flex items-center gap-2"
                >
                  {viewMode === "list" ? (
                    <FaCalendar size={16} />
                  ) : (
                    <FaList size={16} />
                  )}
                  {viewMode === "list" ? "Calendar View" : "List View"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-12">
        {/* Tabs, Search, Filters */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "upcoming"
                  ? "bg-[#e73768] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <FaClock className="inline mr-2" size={14} />
              Upcoming ({getTabCount("upcoming")})
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "past"
                  ? "bg-[#e73768] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <FaCheck className="inline mr-2" size={14} />
              Past ({getTabCount("past")})
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "saved"
                  ? "bg-[#e73768] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <FaHeart className="inline mr-2" size={14} />
              Saved ({getTabCount("saved")})
            </button>
            <button
              onClick={() => setActiveTab("hosting")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "hosting"
                  ? "bg-[#e73768] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <FaUserFriends className="inline mr-2" size={14} />
              Hosting ({getTabCount("hosting")})
            </button>
          </div>

          {/* Search, Sort, Filter Row */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <FaSearch
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:border-[#69e0f9] focus:outline-none transition appearance-none bg-white min-w-[180px]"
            >
              <option value="date">Sort by: Date</option>
              <option value="recent">Recently Added</option>
              <option value="alphabetical">Alphabetical</option>
            </select>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-6 py-3 rounded-xl font-medium transition flex items-center gap-2 ${
                showFilters
                  ? "bg-[#69e0f9] text-white"
                  : "border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <FaFilter size={16} />
              Filters
            </button>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Filter by Category:
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat.toLowerCase())}
                    className={`px-4 py-2 rounded-lg font-medium transition text-sm ${
                      filterCategory === cat.toLowerCase()
                        ? "bg-[#69e0f9] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* UPCOMING EVENTS TAB */}
        {activeTab === "upcoming" && (
          <div className="space-y-6">
            {upcomingEvents.length > 0 ? (
              <>
                {/* Next Event - Hero */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
                  <div className="relative h-64 md:h-80">
                    <img
                      src={upcomingEvents[0].image}
                      alt={upcomingEvents[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-[#e73768] text-white rounded-lg text-sm font-bold shadow-lg">
                        🎉 Next Event
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold">
                          {upcomingEvents[0].category}
                        </span>
                        <span className="px-3 py-1 bg-[#69e0f9] rounded-full text-xs font-bold">
                          {getCountdownText(upcomingEvents[0].daysUntil)}
                        </span>
                        <span className="px-3 py-1 bg-[#e73768] rounded-full text-xs font-bold">
                          {upcomingEvents[0].role}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                        {upcomingEvents[0].title}
                      </h2>

                      <div className="flex flex-wrap gap-4 text-sm mb-6">
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt size={14} />
                          {upcomingEvents[0].date} at {upcomingEvents[0].time}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaMapMarkerAlt size={14} />
                          {upcomingEvents[0].city}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaUsers size={14} />
                          {upcomingEvents[0].attendees} attending
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link
                          to={`/events/${upcomingEvents[0].id}`}
                          className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition font-semibold"
                        >
                          View Details
                        </Link>
                        {upcomingEvents[0].hasQR && (
                          <button className="px-6 py-3 bg-white/20 backdrop-blur text-white rounded-lg hover:bg-white/30 transition font-semibold flex items-center gap-2">
                            <FaQrcode size={16} />
                            QR Code
                          </button>
                        )}
                        <button className="px-6 py-3 bg-white/20 backdrop-blur text-white rounded-lg hover:bg-white/30 transition font-semibold flex items-center gap-2">
                          <FaDirections size={16} />
                          Directions
                        </button>
                        <button className="px-6 py-3 bg-white/20 backdrop-blur text-white rounded-lg hover:bg-white/30 transition font-semibold flex items-center gap-2">
                          <FaShare size={16} />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Events */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {upcomingEvents.slice(1).map((event) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
                    >
                      <div className="relative h-48">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 bg-[#69e0f9] text-white rounded-lg text-xs font-bold shadow-md">
                            {getCountdownText(event.daysUntil)}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 bg-[#e73768]/90 backdrop-blur text-white rounded-lg text-xs font-semibold shadow-md">
                            {event.role}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur text-gray-700 rounded-lg text-xs font-semibold inline-block">
                            {event.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-black group-hover:text-[#e73768] transition line-clamp-2">
                          {event.title}
                        </h3>

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
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
                            <FaUsers size={14} className="text-gray-500" />
                            {event.attendees} attending
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <Link
                            to={`/events/${event.id}`}
                            className="flex-1 text-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm font-medium"
                          >
                            <FaEye className="inline mr-2" size={14} />
                            View
                          </Link>
                          {event.hasQR && (
                            <button
                              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                              title="QR Code"
                            >
                              <FaQrcode size={16} />
                            </button>
                          )}
                          <button
                            className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                            title="Directions"
                          >
                            <FaDirections size={16} />
                          </button>
                          <button
                            className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                            title="Share"
                          >
                            <FaShare size={16} />
                          </button>
                        </div>

                        <button className="w-full mt-3 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition text-sm font-medium">
                          <FaTimes className="inline mr-2" size={14} />
                          Cancel RSVP
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#e73768]/10 to-[#69e0f9]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCalendarAlt className="text-gray-400" size={40} />
                </div>
                <h3 className="text-3xl font-bold text-black mb-3">
                  No upcoming events
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Discover exciting celebrations happening near you
                </p>
                <Link
                  to="/events"
                  className="inline-block px-8 py-4 bg-[#e73768] text-white rounded-lg font-semibold hover:bg-[#d62d5c] transition shadow-lg"
                >
                  Browse Events
                </Link>
              </div>
            )}
          </div>
        )}

        {/* PAST EVENTS TAB */}
        {activeTab === "past" && (
          <div className="space-y-6">
            {pastEvents.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {pastEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
                  >
                    <div className="relative h-48">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                      {event.reviewed && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md">
                          <FaStar size={12} />
                          {event.rating} Star Review
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-gray-700 rounded-lg text-xs font-semibold inline-block">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-black line-clamp-2">
                        {event.title}
                      </h3>

                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <p className="flex items-center gap-2">
                          <FaCalendarAlt size={14} className="text-gray-500" />
                          {event.date}
                        </p>
                        <p className="flex items-center gap-2">
                          <FaMapMarkerAlt size={14} className="text-gray-500" />
                          {event.location}
                        </p>
                        <p className="flex items-center gap-2">
                          <FaUsers size={14} className="text-gray-500" />
                          {event.attendees} attended
                        </p>
                      </div>

                      {event.reviewed ? (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-3">
                          <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                            <FaStar className="text-yellow-500" size={14} />
                            You rated this event {event.rating} stars
                          </p>
                        </div>
                      ) : (
                        <button className="w-full px-4 py-3 bg-[#69e0f9] text-white rounded-lg hover:bg-[#4db8d6] transition font-semibold flex items-center justify-center gap-2 mb-3">
                          <FaStar size={16} />
                          Leave a Review
                        </button>
                      )}

                      <Link
                        to={`/events/${event.id}`}
                        className="block text-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                      >
                        View Event Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#e73768]/10 to-[#69e0f9]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaClock className="text-gray-400" size={40} />
                </div>
                <h3 className="text-3xl font-bold text-black mb-3">
                  No past events yet
                </h3>
                <p className="text-gray-600 text-lg">
                  Events you've attended will appear here
                </p>
              </div>
            )}
          </div>
        )}

        {/* SAVED EVENTS TAB */}
        {activeTab === "saved" && (
          <div className="space-y-6">
            {savedEvents.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {savedEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
                  >
                    <div className="relative h-48">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                      <div className="absolute top-3 right-3">
                        <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition shadow-md">
                          <FaHeart className="text-[#e73768]" size={18} />
                        </button>
                      </div>

                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-[#69e0f9] text-white rounded-lg text-xs font-bold shadow-md">
                          {getCountdownText(event.daysUntil)}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-gray-700 rounded-lg text-xs font-semibold">
                          {event.category}
                        </span>
                        <span className="px-3 py-1 bg-[#e73768]/90 backdrop-blur text-white rounded-lg text-xs font-bold">
                          {event.price}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-black group-hover:text-[#e73768] transition line-clamp-2">
                        {event.title}
                      </h3>

                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <p className="flex items-center gap-2">
                          <FaCalendarAlt size={14} className="text-[#e73768]" />
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
                          <FaUsers size={14} className="text-gray-500" />
                          {event.attendees} interested
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          to={`/events/${event.id}`}
                          className="flex-1 text-center px-4 py-3 bg-[#e73768] text-white rounded-lg hover:bg-[#d62d5c] transition font-semibold"
                        >
                          Get Tickets
                        </Link>
                        <button
                          className="px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                          title="Remove from saved"
                        >
                          <FaTimes size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#e73768]/10 to-[#69e0f9]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHeart className="text-gray-400" size={40} />
                </div>
                <h3 className="text-3xl font-bold text-black mb-3">
                  No saved events
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Save events you're interested in to easily find them later
                </p>
                <Link
                  to="/events"
                  className="inline-block px-8 py-4 bg-[#e73768] text-white rounded-lg font-semibold hover:bg-[#d62d5c] transition shadow-lg"
                >
                  Explore Events
                </Link>
              </div>
            )}
          </div>
        )}

        {/* HOSTING EVENTS TAB */}
        {activeTab === "hosting" && (
          <div className="space-y-6">
            {hostingEvents.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {hostingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Image */}
                      <div className="relative h-64 lg:h-auto">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-lg text-xs font-bold shadow-md ${
                              event.status === "Published"
                                ? "bg-green-500 text-white"
                                : "bg-yellow-500 text-white"
                            }`}
                          >
                            {event.status}
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur text-gray-700 rounded-lg text-xs font-semibold">
                            {event.category}
                          </span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-6 lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-black mb-2">
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
                            </div>
                          </div>

                          <span className="px-4 py-2 bg-[#69e0f9]/10 text-[#69e0f9] rounded-lg text-sm font-bold">
                            {getCountdownText(event.daysUntil)}
                          </span>
                        </div>

                        {/* Analytics */}
                        <div className="grid grid-cols-4 gap-4 mb-6">
                          <div className="bg-gradient-to-br from-[#e73768]/10 to-[#e73768]/5 rounded-xl p-4 text-center">
                            <p className="text-3xl font-extrabold text-[#e73768] mb-1">
                              {event.rsvps}
                            </p>
                            <p className="text-xs text-gray-600 font-medium">
                              RSVPs
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-[#69e0f9]/10 to-[#69e0f9]/5 rounded-xl p-4 text-center">
                            <p className="text-3xl font-extrabold text-[#69e0f9] mb-1">
                              {event.capacity}
                            </p>
                            <p className="text-xs text-gray-600 font-medium">
                              Capacity
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-4 text-center">
                            <p className="text-3xl font-extrabold text-black mb-1">
                              {event.views}
                            </p>
                            <p className="text-xs text-gray-600 font-medium">
                              Views
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-4 text-center">
                            <p className="text-3xl font-extrabold text-black mb-1">
                              {event.shares}
                            </p>
                            <p className="text-xs text-gray-600 font-medium">
                              Shares
                            </p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3">
                          <Link
                            to={`/dashboard/host-event?edit=${event.id}`}
                            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition font-semibold flex items-center gap-2"
                          >
                            <FaEdit size={16} />
                            Edit Event
                          </Link>
                          <button className="px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition font-semibold flex items-center gap-2">
                            <FaUserFriends size={16} />
                            Manage Guests
                          </button>
                          <button className="px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition font-semibold flex items-center gap-2">
                            <FaChartLine size={16} />
                            View Analytics
                          </button>
                          <button className="px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition font-semibold flex items-center gap-2">
                            <FaShare size={16} />
                            Promote
                          </button>
                          <button className="px-6 py-3 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition font-semibold flex items-center gap-2">
                            <FaTrash size={16} />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#e73768]/10 to-[#69e0f9]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaUserFriends className="text-gray-400" size={40} />
                </div>
                <h3 className="text-3xl font-bold text-black mb-3">
                  No events hosted yet
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Create your first event and invite your friends to celebrate
                </p>
                <Link
                  to="/dashboard/host-event"
                  className="inline-block px-8 py-4 bg-[#e73768] text-white rounded-lg font-semibold hover:bg-[#d62d5c] transition shadow-lg"
                >
                  <FaPlus className="inline mr-2" size={16} />
                  Host Your First Event
                </Link>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
