import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    image: "https://images.unsplash.com/photo-1529634894511-1c9c5fbc3b4d",
  },
  {
    id: 2,
    title: "Ibadan Burial Ceremony",
    city: "Ibadan",
    date: "2026-03-30",
    price: "Free",
    category: "Burials",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 3,
    title: "Igbo Cultural Festival",
    city: "Enugu",
    date: "2026-04-12",
    price: "Paid",
    category: "Traditional Festivals",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
  },
  {
    id: 4,
    title: "Live Concert Night",
    city: "Abuja",
    date: "2026-04-02",
    price: "Paid",
    category: "Concerts",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  },
  {
    id: 5,
    title: "Street Food Carnival",
    city: "Lagos",
    date: "2026-04-18",
    price: "Free",
    category: "Food & Drinks",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
  },
  {
    id: 6,
    title: "Tech & Business Mixer",
    city: "Lagos",
    date: "2026-04-25",
    price: "Paid",
    category: "Business",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    id: 7,
    title: "Friday Night Party",
    city: "Port Harcourt",
    date: "2026-04-05",
    price: "Paid",
    category: "Nightlife",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  },
  {
    id: 8,
    title: "University Sports Festival",
    city: "Ilorin",
    date: "2026-05-01",
    price: "Free",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
  },

  // 🔥 MORE EVENTS BELOW

  {
    id: 9,
    title: "Luxury Yoruba Traditional Wedding",
    city: "Ibadan",
    date: "2026-05-10",
    price: "Invitation only",
    category: "Owanbe Weddings",
    image: "https://images.unsplash.com/photo-1523437237209-d0f6d4c4e6c8",
  },
  {
    id: 10,
    title: "Celebrity Burial Ceremony",
    city: "Abeokuta",
    date: "2026-05-14",
    price: "Free",
    category: "Burials",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 11,
    title: "Abuja Food & Wine Festival",
    city: "Abuja",
    date: "2026-05-20",
    price: "Paid",
    category: "Food & Drinks",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    id: 12,
    title: "Amapiano & Afrobeats Night",
    city: "Lagos",
    date: "2026-05-07",
    price: "Paid",
    category: "Nightlife",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
  },
  {
    id: 13,
    title: "National Cultural Day",
    city: "Abuja",
    date: "2026-06-01",
    price: "Free",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
  },
  {
    id: 14,
    title: "Startup Pitch & Networking",
    city: "Lagos",
    date: "2026-06-04",
    price: "Paid",
    category: "Business",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 15,
    title: "Inter-State Football Tournament",
    city: "Benin City",
    date: "2026-06-10",
    price: "Free",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2",
  },
  {
    id: 16,
    title: "Traditional Naming Ceremony",
    city: "Awka",
    date: "2026-06-12",
    price: "Free",
    category: "Naming Ceremonies",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
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
