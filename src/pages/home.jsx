import React from "react";
import { Link } from "react-router-dom";
import cultureImg from "../assets/images/eventimage12.png";
// At the top of your home.jsx file, after other imports
import weddingImg from "../assets/images/eventimage16.jpg";
import burialImg from "../assets/images/eventimage17.jpg";
import namingImg from "../assets/images/eventimage1.png";
import festivalImg from "../assets/images/eventimage4.png";
import concertImg from "../assets/images/eventimage15.jpg";
import nightlifeImg from "../assets/images/eventimage9.png";
import foodImg from "../assets/images/eventimage14.jpg";
import businessImg from "../assets/images/eventimage10.png";
import sportsImg from "../assets/images/eventimage13.jpg";
import culturalImg from "../assets/images/eventimage6.png";

// Event images
import lagosWeddingImg from "../assets/images/eventimage16.jpg";
import ibadanBurialImg from "../assets/images/eventimage17.jpg";
import abujaFestivalImg from "../assets/images/eventimage3.png";
import { useEffect, useState } from "react";

import {
  FaRing,
  FaSkull,
  FaBaby,
  FaMusic,
  FaTheaterMasks,
  FaSearch,
  FaTicketAlt,
  FaGlassCheers,
  FaBookmark,
  FaRegSmile,
  FaCocktail,
  FaHeart,
  FaBeer,
  FaCalendarAlt,
  FaUtensils,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaFire,
  FaBolt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const categories = [
  {
    name: "Owanbe Weddings",
    icon: FaHeart,
    image: weddingImg,
    color: "#e73768",
  },
  {
    name: "Burials",
    icon: FaUsers,
    image: burialImg,
    color: "#8f37b1",
  },
  {
    name: "Naming Ceremonies",
    icon: FaStar,
    image: namingImg,
    color: "#36123f",
  },
  {
    name: "Traditional Festivals",
    icon: FaCalendarAlt,
    image: festivalImg,
    color: "#69e0f9",
  },
  {
    name: "Concerts",
    icon: FaMusic,
    image: concertImg,
    color: "#e73768",
  },
  {
    name: "Nightlife",
    icon: FaBeer,
    image: nightlifeImg,
    color: "#8f37b1",
  },
  {
    name: "Food & Drinks",
    icon: FaUtensils,
    image: foodImg,
    color: "#36123f",
  },
  {
    name: "Business",
    icon: FaUsers,
    image: businessImg,
    color: "#69e0f9",
  },
  {
    name: "Sports",
    icon: FaStar,
    image: sportsImg,
    color: "#e73768",
  },
  {
    name: "Cultural",
    icon: FaCalendarAlt,
    image: culturalImg,
    color: "#8f37b1",
  },
];

const events = [
  {
    id: 1,
    title: "Lagos Owanbe Wedding",
    date: "Feb 20, 2026",
    city: "Lagos",
    attendees: 245,
    image: lagosWeddingImg,
  },
  {
    id: 2,
    title: "Ibadan Burial Ceremony",
    date: "Mar 3, 2026",
    city: "Ibadan",
    attendees: 180,
    image: ibadanBurialImg,
  },
  {
    id: 3,
    title: "Abuja Music Festival",
    date: "Apr 12, 2026",
    city: "Abuja",
    attendees: 500,
    image: abujaFestivalImg,
  },
];

export default function Home() {
  const messages = [
    "Trusted by 2,000+ party lovers across Nigeria 🇳🇬",
    "For anyone who wants to experience Nigerian culture across the world",
    "Never miss the event people will talk about",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Animated gradient top border */}
      <div className="fixed top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#e73768] via-[#69e0f9] to-[#e73768] bg-[length:200%_100%] animate-gradient z-40"></div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-16 md:pb-24 relative">
        {/* Subtle floating blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#e73768]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#69e0f9]/5 rounded-full blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* IMAGE - First on Mobile, Second on Desktop */}
          <div className="relative group order-1 lg:order-2">
            <img
              src={cultureImg}
              alt="Nigerian cultural celebrations"
              className="w-full h-[400px] md:h-[480px] object-cover rounded-3xl shadow-2xl group-hover:shadow-[#e73768]/20 transition-shadow duration-500"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-full h-full border-2 border-[#69e0f9] rounded-2xl -z-10 group-hover:border-[#e73768] transition-colors duration-500" />

            {/* Floating badges */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full shadow-lg border border-gray-100">
              <p className="text-xs font-medium text-gray-600">500+ Events</p>
            </div>
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full shadow-lg border border-gray-100">
              <p className="text-xs font-medium text-gray-600">30+ Cities</p>
            </div>
          </div>

          {/* TEXT - Second on Mobile, First on Desktop */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Discover{" "}
              <span className="bg-gradient-to-r from-[#e73768] to-[#69e0f9] bg-clip-text text-transparent">
                Nigerian events
              </span>{" "}
              worth showing up for.
            </h1>

            <p className="mt-6 text-base md:text-lg text-black/60 max-w-xl">
              Weddings, burials, festivals, concerts & cultural celebrations —
              curated by city, vibe, and date.
            </p>

            <p className="mt-4 text-sm text-black/50 h-5 overflow-hidden">
              <span key={currentMessage} className="block animate-slideUp">
                {messages[currentMessage]}
              </span>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/events"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#e73768] to-[#d62d5c] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#e73768]/30 transition-all duration-300 overflow-hidden text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <span className="relative flex items-center justify-center gap-2">
                  Explore events
                  <FaArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={14}
                  />
                </span>
              </Link>

              <Link
                to="/auth"
                className="px-8 py-4 border-2 border-black/20 font-semibold rounded-xl hover:border-[#69e0f9] hover:text-[#69e0f9] transition-all duration-300 text-center"
              >
                Create account
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4 md:gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#e73768] to-[#69e0f9] border-2 border-white shadow-md"
                  ></div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-black">
                  2,000+ party lovers
                </p>
                <p className="text-xs text-black/60">Already vibing with us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-3 md:mb-4">
            Browse by{" "}
            <span className="bg-gradient-to-r from-[#e73768] to-[#69e0f9] bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-center text-black/60 text-base md:text-lg lg:text-xl mb-16 md:mb-20 max-w-2xl mx-auto">
            From elegant weddings to high-energy nightlife — find the
            celebration that fits your vibe.
          </p>

          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[${cat.color}]/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                >
                  {/* Background Image */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>

                  {/* Icon + Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-2">
                    <div
                      className="mb-2 p-2.5 md:p-3 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                      style={{ backgroundColor: `${cat.color}50` }}
                    >
                      <Icon
                        size={24}
                        md:size={32}
                        color={cat.color}
                        className="drop-shadow-lg"
                      />
                    </div>
                    <p className="font-bold text-xs md:text-sm drop-shadow-lg">
                      {cat.name}
                    </p>
                  </div>

                  {/* Sparkle on hover */}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="bg-black/5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-12 md:mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Featured events
              </h2>
              <p className="mt-3 text-black/60 text-base md:text-lg max-w-md">
                Hand-picked celebrations people are actually talking about right
                now.
              </p>
            </div>

            <Link
              to="/events"
              className="group text-sm font-semibold text-[#e73768] hover:text-[#69e0f9] self-start md:self-auto flex items-center gap-2 transition-colors"
            >
              View all events
              <FaArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={12}
              />
            </Link>
          </div>

          {/* EVENTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {events.map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="group bg-white rounded-3xl overflow-hidden border border-black/10
                     hover:shadow-2xl hover:border-[#e73768] transition-all duration-500 hover:scale-105"
              >
                {/* IMAGE */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* BADGES */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/95 backdrop-blur text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <FaMapMarkerAlt size={10} className="text-[#e73768]" />
                      {event.city}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="bg-[#69e0f9]/95 backdrop-blur text-xs font-semibold px-3 py-1 rounded-full text-white flex items-center gap-1 shadow-lg">
                      <FaUsers size={10} />
                      {event.attendees}+
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gradient-to-r from-[#e73768] to-[#69e0f9] text-xs font-bold px-3 py-1 rounded-full text-white flex items-center gap-1 shadow-lg animate-pulse">
                      <FaFire size={10} />
                      TRENDING
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 md:p-6">
                  <p className="text-sm text-[#69e0f9] font-semibold mb-2 flex items-center gap-2">
                    <FaCalendarAlt size={12} />
                    {event.date}
                  </p>

                  <h3 className="text-lg md:text-xl font-bold leading-snug group-hover:text-[#e73768] transition-colors">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-sm text-black/50">
                    Tap to view details, RSVP, and see who's going.
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-12 md:mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                Popular right now
              </h2>
              <p className="text-black/60 text-base md:text-lg mt-3 max-w-xl">
                Real events Nigerians are viewing, saving, and attending today.
              </p>
            </div>

            <p className="text-sm text-black/40">
              Updated live · last 24 hours
            </p>
          </div>

          {/* Cities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* LAGOS */}
            <div className="group p-6 md:p-8 rounded-3xl border border-black/10 hover:border-[#e73768] transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#e73768]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="text-[#e73768]" />
                </div>
                <p className="text-sm uppercase tracking-wide text-black/40 font-semibold">
                  Lagos
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                124 events trending
              </h3>

              <ul className="space-y-3 md:space-y-4 text-black/70 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#e73768] rounded-full"></span>
                  Owanbe weddings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#e73768] rounded-full"></span>
                  Beach parties
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#e73768] rounded-full"></span>
                  Concerts & nightlife
                </li>
              </ul>
            </div>

            {/* ABUJA */}
            <div className="group p-6 md:p-8 rounded-3xl border border-black/10 hover:border-[#69e0f9] transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#69e0f9]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="text-[#69e0f9]" />
                </div>
                <p className="text-sm uppercase tracking-wide text-black/40 font-semibold">
                  Abuja
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                67 events trending
              </h3>

              <ul className="space-y-3 md:space-y-4 text-black/70 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#69e0f9] rounded-full"></span>
                  Live music shows
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#69e0f9] rounded-full"></span>
                  Corporate events
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#69e0f9] rounded-full"></span>
                  Exclusive parties
                </li>
              </ul>
            </div>

            {/* IBADAN */}
            <div className="group p-6 md:p-8 rounded-3xl border border-black/10 hover:border-black transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="text-black" />
                </div>
                <p className="text-sm uppercase tracking-wide text-black/40 font-semibold">
                  Ibadan
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                42 events trending
              </h3>

              <ul className="space-y-3 md:space-y-4 text-black/70 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                  Burial ceremonies
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                  Traditional weddings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                  Cultural festivals
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 md:mt-24 border-t border-black/10 pt-12 md:pt-16 text-center">
            <div className="group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#e73768] to-[#d62d5c] rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <FaUsers className="text-white" size={24} md:size={28} />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#e73768] to-[#69e0f9] bg-clip-text text-transparent">
                2K+
              </p>
              <p className="text-black/50 mt-2 text-xs md:text-sm">
                Active users
              </p>
            </div>

            <div className="group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#69e0f9] to-[#4db8d6] rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <FaCalendarAlt className="text-white" size={24} md:size={28} />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#69e0f9] to-[#e73768] bg-clip-text text-transparent">
                500+
              </p>
              <p className="text-black/50 mt-2 text-xs md:text-sm">
                Events listed
              </p>
            </div>

            <div className="group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-black to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <FaMapMarkerAlt className="text-white" size={24} md:size={28} />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-black">
                30+
              </p>
              <p className="text-black/50 mt-2 text-xs md:text-sm">
                Cities covered
              </p>
            </div>

            <div className="group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#e73768] via-[#69e0f9] to-[#e73768] rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <FaStar className="text-white" size={24} md:size={28} />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-black">
                98%
              </p>
              <p className="text-black/50 mt-2 text-xs md:text-sm">
                User satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4 md:mb-6">
            How NaijaBash works
          </h2>

          <p className="text-center text-black/60 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-16 md:mb-20">
            Find events, plan your outings, and show up ready to vibe. No
            stress. No guesswork.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* STEP 1 */}
            <div className="group relative p-8 md:p-10 rounded-3xl border border-black/10 hover:border-[#69e0f9] overflow-hidden transition-all duration-500 bg-white hover:shadow-xl">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#69e0f9]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#69e0f9] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <FaSearch className="text-white" size={20} md:size={24} />
                  </div>
                  <span className="text-4xl md:text-5xl font-extrabold text-black/10">
                    01
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Discover events
                </h3>

                <p className="text-black/60 text-sm leading-relaxed">
                  Browse weddings, festivals, burials, nightlife and more —
                  filtered by city, date and vibe.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="group relative p-8 md:p-10 rounded-3xl border border-black/10 hover:border-[#e73768] overflow-hidden transition-all duration-500 bg-white hover:shadow-xl">
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#e73768]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#e73768] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <FaTicketAlt
                      className="text-white"
                      size={20}
                      md:size={24}
                    />
                  </div>
                  <span className="text-4xl md:text-5xl font-extrabold text-black/10">
                    02
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Plan & RSVP
                </h3>

                <p className="text-black/60 text-sm leading-relaxed">
                  Save events, RSVP, get reminders, and plan your attendance
                  without missing the important details.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="group relative p-8 md:p-10 rounded-3xl border border-black/10 hover:border-black overflow-hidden transition-all duration-500 bg-white hover:shadow-xl">
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-black/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <FaGlassCheers
                      className="text-white"
                      size={20}
                      md:size={24}
                    />
                  </div>
                  <span className="text-4xl md:text-5xl font-extrabold text-black/10">
                    03
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Show up & vibe
                </h3>

                <p className="text-black/60 text-sm leading-relaxed">
                  Arrive prepared, dressed right, and in the know — because
                  vibes matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGN UP PROMPT - PARTY CTA */}
      <section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e73768] via-[#69e0f9] to-[#e73768] bg-[length:400%_400%] animate-gradient-slow"></div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
            }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <p className="text-xs md:text-sm uppercase tracking-wide text-white/80 mb-4 font-semibold">
            Don't just hear about it later
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Be in the know before the party starts.
          </h2>

          <p className="text-white/90 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Join NaijaBash to RSVP faster, discover invite-only events, and host
            celebrations people actually show up for.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/auth"
              className="group px-10 py-4 bg-white text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Create free account
                <FaArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={14}
                />
              </span>
            </Link>

            <Link
              to="/events"
              className="px-10 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-300"
            >
              Browse events first
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-300" size={12} />
              Free to join
            </span>
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-300" size={12} />
              No spam
            </span>
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-300" size={12} />
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Custom animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-slow {
          animation: gradient-slow 15s ease infinite;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
