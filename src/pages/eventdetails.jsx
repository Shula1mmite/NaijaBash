import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

const EVENTS = [
  {
    id: 1,
    title: "Owanbe Wedding in Lekki",
    city: "Lagos",
    date: "March 23, 2026",
    category: "Owanbe Weddings",
    image: weddingImg,
    description:
      "A grand Yoruba traditional wedding featuring live bands, flowing drinks, and a full owanbe experience.",
    dressCode: "Aso Ebi (Gold & Champagne)",
    venue: "Lekki Event Centre",
  },
  {
    id: 2,
    title: "Ibadan Burial Ceremony",
    city: "Ibadan",
    date: "March 30, 2026",
    category: "Burials",
    image: burialImg,
    description:
      "A respectful burial ceremony honouring a life well lived, with prayers, tributes, and family gatherings.",
    dressCode: "Black or Navy Blue",
    venue: "Family Compound, Ibadan",
  },
  {
    id: 3,
    title: "Igbo Cultural Festival",
    city: "Enugu",
    date: "April 12, 2026",
    category: "Traditional Festivals",
    image: festivalImg,
    description:
      "A colourful celebration of Igbo culture featuring masquerades, traditional dances, and local cuisine.",
    dressCode: "Traditional Attire",
    venue: "Michael Okpara Square",
  },
  {
    id: 4,
    title: "Live Concert Night",
    city: "Abuja",
    date: "April 2, 2026",
    category: "Concerts",
    image: concertImg,
    description:
      "An electrifying night of live performances from top Nigerian artists and DJs.",
    dressCode: "Casual / Party Wear",
    venue: "Eagle Square",
  },
  {
    id: 5,
    title: "Street Food Carnival",
    city: "Lagos",
    date: "April 18, 2026",
    category: "Food & Drinks",
    image: foodImg,
    description:
      "A vibrant outdoor food carnival showcasing Nigeria’s best street food and drinks.",
    dressCode: "Casual",
    venue: "Tafawa Balewa Square",
  },
  {
    id: 6,
    title: "Tech & Business Mixer",
    city: "Lagos",
    date: "April 25, 2026",
    category: "Business",
    image: businessImg,
    description:
      "A networking mixer for founders, creatives, and professionals in tech and business.",
    dressCode: "Smart Casual",
    venue: "Landmark Event Centre",
  },
  {
    id: 7,
    title: "Friday Night Party",
    city: "Port Harcourt",
    date: "April 5, 2026",
    category: "Nightlife",
    image: nightlifeImg,
    description:
      "A high-energy Friday night party with DJs, cocktails, and late-night vibes.",
    dressCode: "Party Wear",
    venue: "Club Fahrenheit",
  },
  {
    id: 8,
    title: "University Sports Festival",
    city: "Ilorin",
    date: "May 1, 2026",
    category: "Sports",
    image: sportsImg,
    description:
      "An inter-university sports festival featuring football, athletics, and team sports.",
    dressCode: "Sportswear",
    venue: "University Sports Complex",
  },
  {
    id: 9,
    title: "Luxury Yoruba Traditional Wedding",
    city: "Ibadan",
    date: "May 10, 2026",
    category: "Owanbe Weddings",
    image: weddingImg,
    description:
      "An exclusive, invitation-only luxury traditional wedding with premium catering and décor.",
    dressCode: "Aso Ebi (Royal Blue)",
    venue: "Agodi Gardens",
  },
  {
    id: 10,
    title: "Celebrity Burial Ceremony",
    city: "Abeokuta",
    date: "May 14, 2026",
    category: "Burials",
    image: burialImg,
    description:
      "A high-profile burial ceremony attended by dignitaries and members of the public.",
    dressCode: "Black Formal",
    venue: "Abeokuta City Hall",
  },
  {
    id: 11,
    title: "Abuja Food & Wine Festival",
    city: "Abuja",
    date: "May 20, 2026",
    category: "Food & Drinks",
    image: foodImg,
    description:
      "A premium food and wine experience featuring chefs, tastings, and live entertainment.",
    dressCode: "Smart Casual",
    venue: "International Conference Centre",
  },
  {
    id: 12,
    title: "Amapiano & Afrobeats Night",
    city: "Lagos",
    date: "May 7, 2026",
    category: "Nightlife",
    image: concertImg,
    description:
      "A night dedicated to Amapiano and Afrobeats with top DJs and party lovers.",
    dressCode: "Trendy Night Out",
    venue: "Hard Rock Cafe Lagos",
  },
  {
    id: 13,
    title: "National Cultural Day",
    city: "Abuja",
    date: "June 1, 2026",
    category: "Cultural",
    image: culturalImg,
    description:
      "A national celebration of Nigeria’s diverse cultures, arts, and traditions.",
    dressCode: "Traditional Attire",
    venue: "Eagle Square",
  },
  {
    id: 14,
    title: "Startup Pitch & Networking",
    city: "Lagos",
    date: "June 4, 2026",
    category: "Business",
    image: networkingImg,
    description:
      "Startup founders pitch ideas while investors and professionals network.",
    dressCode: "Business Casual",
    venue: "Co-Creation Hub (CcHub)",
  },
  {
    id: 15,
    title: "Inter-State Football Tournament",
    city: "Benin City",
    date: "June 10, 2026",
    category: "Sports",
    image: sportsImg,
    description:
      "A competitive football tournament featuring teams from multiple states.",
    dressCode: "Team Jerseys / Casual",
    venue: "Samuel Ogbemudia Stadium",
  },
  {
    id: 16,
    title: "Traditional Naming Ceremony",
    city: "Awka",
    date: "June 12, 2026",
    category: "Naming Ceremonies",
    image: namingImg,
    description:
      "A traditional naming ceremony celebrating family, culture, and heritage.",
    dressCode: "Traditional Wear",
    venue: "Family Residence, Awka",
  },
];

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAuthenticated] = useState(false); // temp auth state

  const event = EVENTS.find((e) => e.id === parseInt(id));
  if (!event) return <p className="p-6 text-white">Event not found</p>;

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      {/* HERO */}
      <div className="relative h-[55vh]">
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-white/80 hover:text-white bg-black/30 backdrop-blur-md px-3 py-1 rounded-md transition"
        >
          ← Back
        </button>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <span className="inline-block mb-4 bg-[#e73768]/20 text-[#e73768] px-4 py-1 rounded-full text-sm w-fit">
            {event.category}
          </span>

          <h1 className="text-5xl font-extrabold mb-2">{event.title}</h1>

          <p className="text-white/80">
            {event.city} • {event.date}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* LEFT */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">About this event</h2>
          <p className="text-white/75 leading-relaxed mb-8">
            {event.description}
          </p>

          <h3 className="text-xl font-semibold mb-2">Dress Code</h3>
          <p className="text-white/70 mb-8">{event.dressCode}</p>

          <h3 className="text-xl font-semibold mb-2">Venue</h3>
          <p className="text-white/70 mb-8">{event.venue}</p>

          <h3 className="text-xl font-semibold mb-2">Available Roles</h3>
          <div className="flex gap-3 flex-wrap">
            {["Guest", "Bridesmaid", "Groomsman", "VIP"].map((role) => (
              <span
                key={role}
                className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT (ACTION CARD) */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-fit">
          <h3 className="text-xl font-bold mb-2">Attend this event</h3>

          {!isAuthenticated ? (
            <>
              <p className="text-white/60 text-sm mb-6">
                You need to sign in to RSVP, select roles, or get tickets.
              </p>

              <button
                disabled
                className="w-full bg-[#e73768]/40 text-white py-3 rounded-md font-semibold cursor-not-allowed mb-4"
              >
                RSVP unavailable
              </button>

              <button className="w-full border border-white/20 py-3 rounded-md text-sm hover:bg-white/10 transition">
                Sign in to continue
              </button>
            </>
          ) : (
            <button className="w-full bg-[#e73768] py-3 rounded-md text-white font-semibold hover:opacity-90 transition">
              RSVP now
            </button>
          )}
        </div>
      </div>

      {/* SIMILAR EVENTS */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6">Similar Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {EVENTS.filter((e) => e.id !== event.id).map((e) => (
            <div
              key={e.id}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#e73768] transition cursor-pointer"
              onClick={() => navigate(`/event/${e.id}`)}
            >
              <img
                src={e.image}
                alt={e.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <span className="text-xs bg-[#e73768]/20 text-[#e73768] px-2 py-1 rounded-full">
                  {e.category}
                </span>
                <h3 className="font-semibold mt-2">{e.title}</h3>
                <p className="text-white/60 text-sm">
                  {e.city} • {e.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
