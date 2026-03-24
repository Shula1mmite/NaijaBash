import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import networkingImg from "../assets/images/eventimage2.png";

import lagosWeddingImg from "../assets/images/eventimage16.jpg";
import ibadanBurialImg from "../assets/images/eventimage17.jpg";
import abujaFestivalImg from "../assets/images/eventimage3.png";

const CATEGORIES = [
  "All",
  "Owanbe Weddings",
  "Burials",
  "Naming Ceremonies",
  "Traditional Festivals",
  "Concerts",
  "Nightlife",
  "Food & Drinks",
  "Business",
  "Sports",
  "Cultural",
];

const EVENTS = [
  {
    id: 1,
    title: "Owanbe Wedding in Lekki",
    city: "Lagos",
    date: "2026-03-23",
    price: "Free",
    category: "Owanbe Weddings",
    image: weddingImg,
  },
  {
    id: 2,
    title: "Ibadan Burial Ceremony",
    city: "Ibadan",
    date: "2026-03-30",
    price: "Free",
    category: "Burials",
    image: burialImg,
  },
  {
    id: 3,
    title: "Igbo Cultural Festival",
    city: "Enugu",
    date: "2026-04-12",
    price: "Paid",
    category: "Traditional Festivals",
    image: festivalImg,
  },
  {
    id: 4,
    title: "Live Concert Night",
    city: "Abuja",
    date: "2026-04-02",
    price: "Paid",
    category: "Concerts",
    image: concertImg,
  },
  {
    id: 5,
    title: "Street Food Carnival",
    city: "Lagos",
    date: "2026-04-18",
    price: "Free",
    category: "Food & Drinks",
    image: foodImg,
  },
  {
    id: 6,
    title: "Tech & Business Mixer",
    city: "Lagos",
    date: "2026-04-25",
    price: "Paid",
    category: "Business",
    image: businessImg,
  },
  {
    id: 7,
    title: "Friday Night Party",
    city: "Port Harcourt",
    date: "2026-04-05",
    price: "Paid",
    category: "Nightlife",
    image: nightlifeImg,
  },
  {
    id: 8,
    title: "University Sports Festival",
    city: "Ilorin",
    date: "2026-05-01",
    price: "Free",
    category: "Sports",
    image: sportsImg,
  },

  {
    id: 9,
    title: "Luxury Yoruba Traditional Wedding",
    city: "Ibadan",
    date: "2026-05-10",
    price: "Invitation only",
    category: "Owanbe Weddings",
    image: lagosWeddingImg,
  },
  {
    id: 10,
    title: "Celebrity Burial Ceremony",
    city: "Abeokuta",
    date: "2026-05-14",
    price: "Free",
    category: "Burials",
    image: ibadanBurialImg,
  },
  {
    id: 11,
    title: "Abuja Food & Wine Festival",
    city: "Abuja",
    date: "2026-05-20",
    price: "Paid",
    category: "Food & Drinks",
    image: foodImg,
  },
  {
    id: 12,
    title: "Amapiano & Afrobeats Night",
    city: "Lagos",
    date: "2026-05-07",
    price: "Paid",
    category: "Nightlife",
    image: nightlifeImg,
  },
  {
    id: 13,
    title: "National Cultural Day",
    city: "Abuja",
    date: "2026-06-01",
    price: "Free",
    category: "Cultural",
    image: culturalImg,
  },
  {
    id: 14,
    title: "Startup Pitch & Networking",
    city: "Lagos",
    date: "2026-06-04",
    price: "Paid",
    category: "Business",
    image: networkingImg,
  },
  {
    id: 15,
    title: "Inter-State Football Tournament",
    city: "Benin City",
    date: "2026-06-10",
    price: "Free",
    category: "Sports",
    image: sportsImg,
  },
  {
    id: 16,
    title: "Traditional Naming Ceremony",
    city: "Awka",
    date: "2026-06-12",
    price: "Free",
    category: "Naming Ceremonies",
    image: namingImg,
  },
];

export default function Events() {
  const [category, setCategory] = useState("All");
  const [city, setCity] = useState("All");
  const [price, setPrice] = useState("All");
  const navigate = useNavigate();

  const filteredEvents = EVENTS.filter((event) => {
    return (
      (category === "All" || event.category === category) &&
      (city === "All" || event.city === city) &&
      (price === "All" || event.price === price)
    );
  });

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <h1 className="text-4xl font-extrabold text-black mb-3">
          Explore Nigerian Events 🇳🇬
        </h1>
        <p className="text-black/60 mb-10 max-w-3xl">
          Discover Owanbe weddings, burials, festivals, concerts, and parties
          happening across Nigeria. Browse freely — sign in when you’re ready to
          attend.
        </p>

        {/* CATEGORY TABS */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border transition ${
                category === cat
                  ? "bg-[#e73768] text-white border-[#e73768]"
                  : "bg-white text-black/70 border-black/10 hover:border-[#69e0f9]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FILTER BAR */}
        <div className="bg-black/5 border border-black/10 rounded-2xl p-6 mb-12 grid sm:grid-cols-3 gap-4">
          <select
            onChange={(e) => setCity(e.target.value)}
            className="bg-white border border-black/20 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#69e0f9]"
          >
            <option>All cities</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Ibadan</option>
            <option>Enugu</option>
            <option>Port Harcourt</option>
          </select>

          <select
            onChange={(e) => setPrice(e.target.value)}
            className="bg-white border border-black/20 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#69e0f9]"
          >
            <option>All prices</option>
            <option>Free</option>
            <option>Paid</option>
          </select>

          <button className="bg-[#e73768] text-white rounded-md font-semibold hover:opacity-90 transition">
            Apply filters
          </button>
        </div>

        {/* EVENTS GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden border border-black/10 hover:border-[#69e0f9] transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <span className="text-xs bg-[#69e0f9]/20 text-[#1b6f82] px-3 py-1 rounded-full">
                  {event.category}
                </span>

                <h3 className="text-lg font-bold text-black mt-4">
                  {event.title}
                </h3>

                <p className="text-black/60 text-sm mt-1">
                  {event.city} • {event.date}
                </p>

                <p className="text-black/50 text-sm mt-2">
                  {event.price} event
                </p>

                <button
                  onClick={() => navigate(`/events/${event.id}`)}
                  className="mt-6 text-sm font-semibold text-[#e73768] hover:underline"
                >
                  View details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredEvents.length === 0 && (
          <p className="text-black/50 text-center mt-20">
            No events match your filters right now.
          </p>
        )}
      </div>
    </div>
  );
}
