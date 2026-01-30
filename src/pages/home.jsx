import React from "react";
import { Link } from "react-router-dom";
import cultureImg from "../assets/images/image1.png";
import { useEffect, useState } from "react";



import { FaRing, FaSkull, FaBaby, FaMusic, FaTheaterMasks, FaSearch, FaTicketAlt, FaGlassCheers,  FaBookmark, FaRegSmile, FaCocktail } from "react-icons/fa";

const categories = [
  { name: "Owanbe Weddings", icon: FaRing, color: "#e73768" },
  { name: "Burials", icon: FaSkull, color: "#69e0f9" },
  { name: "Naming Ceremonies", icon: FaBaby, color: "#e73768" },
  { name: "Festivals", icon: FaTheaterMasks, color: "#e73768" },
  { name: "Concerts", icon: FaMusic, color: "#69e0f9" },
  { name: "Nightlife", icon: FaCocktail, color: "#e73768" },
];


const events = [
  {
    id: 1,
    title: "Lagos Owanbe Wedding",
    date: "Feb 20, 2026",
    city: "Lagos",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Ibadan Burial Ceremony",
    date: "Mar 3, 2026",
    city: "Ibadan",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Abuja Music Festival",
    date: "Apr 12, 2026",
    city: "Abuja",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  const messages = [
  "Trusted by 2,000+ party lovers across Nigeria 🇳🇬",
  "For anyone who wants to experience Nigerian culture accross the world",
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
    <div className="bg-white text-black min-h-screen ">
      {/* HERO */}
          <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="animate-fadeUp">

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Discover Nigerian events worth showing up for.
          </h1>

          <p className="mt-6 text-lg text-black/60 max-w-xl">
            Weddings, burials, festivals, concerts & cultural celebrations —
            curated by city, vibe, and date.
          </p>

          <p className="mt-4 text-sm text-black/50 h-5 overflow-hidden">
  <span
    key={currentMessage}
    className="block animate-fadeUp"
  >
    {messages[currentMessage]}
  </span>
</p>


          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/events"
              className="px-8 py-4 bg-[#e73768] text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Explore events
            </Link>

            <Link
              to="/auth"
              className="px-8 py-4 border border-black/20 font-semibold rounded-md hover:border-black transition"
            >
              Create account
            </Link>
          </div>
        </div>

        {/* RIGHT */}
         <div className="relative animate-fadeUp delay-150">

          <img
            src={cultureImg}
            alt="Nigerian cultural celebrations"
            className="w-full h-[480px] object-cover rounded-3xl"
          />
          <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#69e0f9] rounded-2xl -z-10" />
        </div>
      </section>

      {/* CATEGORIES */}
      
<section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 italic uppercase">
      Browse by <span className="text-[#e73768]">Category</span>
    </h2>

    <p className="text-center text-black/60 text-lg md:text-xl mb-20 max-w-2xl mx-auto">
      From elegant weddings to high-energy nightlife — find the celebration that fits your vibe.
    </p>

    {/* Static Grid - Responsive layout */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {/* We use only the original categories array now (no doubling) */}
      {categories.map((cat, index) => {
        const Icon = cat.icon;
        return (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 flex flex-col items-center text-center
                       border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                       hover:shadow-[8px_8px_0px_0px_#69e0f9] hover:-translate-y-2 
                       transition-all duration-300 cursor-pointer"
          >
            {/* Icon container with a slight rotate on hover */}
            <div
              className="mb-4 p-5 rounded-full transition-transform group-hover:rotate-12 group-hover:scale-110"
              style={{ backgroundColor: `${cat.color}15` }}
            >
              <Icon size={35} color={cat.color} />
            </div>

            <p className="font-black uppercase tracking-tight text-sm">
              {cat.name}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>




 {/* FEATURED EVENTS */}
<section className="bg-black/5 py-28">
  <div className="max-w-7xl mx-auto px-6">
    {/* HEADER */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Featured events
        </h2>
        <p className="mt-3 text-black/60 max-w-md">
          Hand-picked celebrations people are actually talking about right now.
        </p>
      </div>

      <Link
        to="/events"
        className="text-sm font-semibold text-[#e73768] hover:underline self-start md:self-auto"
      >
        View all events →
      </Link>
    </div>

    {/* EVENTS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {events.map((event) => (
        <Link
          key={event.id}
          to={`/events/${event.id}`}
          className="group bg-white rounded-3xl overflow-hidden border border-black/10
                     hover:shadow-2xl transition-all duration-300"
        >
          {/* IMAGE */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* CITY BADGE */}
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur
                             text-xs font-semibold px-3 py-1 rounded-full">
              {event.city}
            </span>
          </div>

          {/* CONTENT */}
          <div className="p-6">
            <p className="text-sm text-[#69e0f9] font-semibold mb-2">
              {event.date}
            </p>

            <h3 className="text-xl font-bold leading-snug group-hover:text-[#e73768] transition-colors">
              {event.title}
            </h3>

            <p className="mt-3 text-sm text-black/50">
              Tap to view details, RSVP, and see who’s going.
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

{/* SOCIAL PROOF */}
{/* SOCIAL PROOF */}
<section className="py-28 bg-black/6">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Popular right now
        </h2>
        <p className="text-black/60 text-lg mt-3 max-w-xl">
          Real events Nigerians are viewing, saving, and attending today.
        </p>
      </div>

      <p className="text-sm text-black/40">
        Updated live · last 24 hours
      </p>
    </div>

    {/* Cities */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* LAGOS */}
      <div className="p-8 rounded-3xl border border-black/10 hover:border-[#e73768] transition">
        <p className="text-sm uppercase tracking-wide text-black/40 mb-3">
          Lagos
        </p>

        <h3 className="text-xl font-semibold mb-6">
          124 events trending
        </h3>

        <ul className="space-y-4 text-black/70">
          <li>Owanbe weddings</li>
          <li>Beach parties</li>
          <li>Concerts & nightlife</li>
        </ul>
      </div>

      {/* ABUJA */}
      <div className="p-8 rounded-3xl border border-black/10 hover:border-[#69e0f9] transition">
        <p className="text-sm uppercase tracking-wide text-black/40 mb-3">
          Abuja
        </p>

        <h3 className="text-xl font-semibold mb-6">
          67 events trending
        </h3>

        <ul className="space-y-4 text-black/70">
          <li>Live music shows</li>
          <li>Corporate events</li>
          <li>Exclusive parties</li>
        </ul>
      </div>

      {/* IBADAN */}
      <div className="p-8 rounded-3xl border border-black/10 hover:border-black transition">
        <p className="text-sm uppercase tracking-wide text-black/40 mb-3">
          Ibadan
        </p>

        <h3 className="text-xl font-semibold mb-6">
          42 events trending
        </h3>

        <ul className="space-y-4 text-black/70">
          <li>Burial ceremonies</li>
          <li>Traditional weddings</li>
          <li>Cultural festivals</li>
        </ul>
      </div>

    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 border-t border-black/10 pt-16 text-center">

      <div>
        <p className="text-4xl font-extrabold text-[#e73768]">2K+</p>
        <p className="text-black/50 mt-2 text-sm">Active users</p>
      </div>

      <div>
        <p className="text-4xl font-extrabold text-[#69e0f9]">500+</p>
        <p className="text-black/50 mt-2 text-sm">Events listed</p>
      </div>

      <div>
        <p className="text-4xl font-extrabold">30+</p>
        <p className="text-black/50 mt-2 text-sm">Cities covered</p>
      </div>

      <div>
        <p className="text-4xl font-extrabold">98%</p>
        <p className="text-black/50 mt-2 text-sm">User satisfaction</p>
      </div>

    </div>

  </div>
</section>



{/* HOW IT WORKS */}
<section className="py-28 bg-black/5">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
      How NaijaBash works
    </h2>

    <p className="text-center text-black/60 text-lg md:text-xl max-w-2xl mx-auto mb-20">
      Find events, plan your outings, and show up ready to vibe.
      No stress. No guesswork.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* STEP 1 */}
      <div className="relative p-10 rounded-3xl border border-black/10 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#69e0f9]/20 rounded-full blur-2xl" />

        <FaSearch size={36} className="text-[#69e0f9] mb-6" />

        <h3 className="text-xl font-bold mb-2">
          Discover events
        </h3>

        <p className="text-black/60 text-sm leading-relaxed">
          Browse weddings, festivals, burials, nightlife and more —
          filtered by city, date and vibe.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="relative p-10 rounded-3xl border border-black/10 overflow-hidden">
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#e73768]/20 rounded-full blur-2xl" />

        <FaTicketAlt size={36} className="text-[#e73768] mb-6" />

        <h3 className="text-xl font-bold mb-2">
          Plan & RSVP
        </h3>

        <p className="text-black/60 text-sm leading-relaxed">
          Save events, RSVP, get reminders, and plan your attendance
          without missing the important details.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="relative p-10 rounded-3xl border border-black/10 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-black/10 rounded-full blur-2xl" />

        <FaGlassCheers size={36} className="text-black mb-6" />

        <h3 className="text-xl font-bold mb-2">
          Show up & vibe
        </h3>

        <p className="text-black/60 text-sm leading-relaxed">
          Arrive prepared, dressed right, and in the know —
          because vibes matter.
        </p>
      </div>

    </div>
  </div>
</section>



  {/* SIGN UP PROMPT */}
<section className="border-t border-black/10 bg-white">
  <div className="max-w-7xl mx-auto px-6 py-28">

    <div className="max-w-3xl mx-auto text-center">

      <p className="text-sm uppercase tracking-wide text-black/50 mb-4">
        Don’t just hear about it later
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
        Be in the know before the party starts.
      </h2>

      <p className="text-black/60 text-lg mb-10">
        Join NaijaBash to RSVP faster, discover invite-only events,
        and host celebrations people actually show up for.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
  to="/auth"
  className="px-10 py-4 bg-[#e73768] text-white font-semibold rounded-md hover:opacity-90 transition"
>
  Create free account
</Link>


        <Link
          to="/events"
          className="px-10 py-4 border border-black/20 font-semibold rounded-md hover:border-[#69e0f9] transition"
        >
          Browse events first
        </Link>
      </div>

      <p className="mt-6 text-sm text-black/46">
        Free to join • No spam • Cancel anytime
      </p>

    </div>
  </div>
</section>

    </div>
  );
}
