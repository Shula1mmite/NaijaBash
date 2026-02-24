import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaGlobeAfrica,
  FaUsers,
  FaMapMarkedAlt,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";
import cultureImg from "../assets/images/image1.png";

export default function About() {
  const values = [
    {
      icon: FaHeart,
      title: "Celebrate culture",
      description:
        "We believe Nigerian celebrations deserve to be discovered, attended, and remembered by everyone — locals and visitors alike.",
      color: "#e73768",
    },
    {
      icon: FaGlobeAfrica,
      title: "Connect communities",
      description:
        "Breaking barriers between event organizers and attendees, one Owanbe at a time.",
      color: "#69e0f9",
    },
    {
      icon: FaUsers,
      title: "Empower hosts",
      description:
        "Giving families, planners, and cultural promoters the tools to reach the right guests.",
      color: "#000000",
    },
  ];

  const teamStats = [
    { number: "2024", label: "Founded", color: "#e73768" },
    { number: "30+", label: "Cities covered", color: "#69e0f9" },
    { number: "2K+", label: "Community members", color: "#000000" },
    { number: "500+", label: "Events hosted", color: "#e73768" },
  ];

  const story = [
    {
      year: "The Problem",
      title: "Missing the party",
      description:
        "Visitors from abroad and locals alike struggled to find authentic Nigerian events. Weddings, burials, festivals — all happening, but no central place to discover them.",
    },
    {
      year: "The Idea",
      title: "What if we connected everyone?",
      description:
        "We imagined a platform where anyone could find the best Owanbe weddings in Lagos, traditional festivals in Ibadan, or concerts in Abuja — filtered by vibe, date, and location.",
    },
    {
      year: "The Mission",
      title: "NaijaBash is born",
      description:
        "Today, we're building the go-to platform for Nigerian event discovery. Whether you're a visitor seeking cultural immersion or a local looking for the next big party, we've got you.",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={cultureImg}
            alt="Nigerian cultural celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-[#e73768] font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#e73768]" />
              About NaijaBash
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              We connect people to{" "}
              <span className="italic text-[#e73768] relative">
                celebrations
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C60 2 140 2 198 10"
                    stroke="#69e0f9"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              that matter.
            </h1>

            <p className="text-lg md:text-xl text-black/70 mb-10 max-w-2xl leading-relaxed">
              Nigeria's first event discovery platform built for Owanbe
              weddings, burials, festivals, and cultural celebrations.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <p className="text-3xl font-extrabold text-[#e73768]">2K+</p>
                <p className="text-sm text-black/60">Active users</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#69e0f9]">30+</p>
                <p className="text-sm text-black/60">Cities</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-black">500+</p>
                <p className="text-sm text-black/60">Events</p>
              </div>
            </div>

            <Link
              to="/events"
              className="inline-block px-10 py-5 bg-[#e73768] text-white font-semibold rounded-md hover:opacity-90 transition shadow-lg hover:shadow-xl"
            >
              Explore events →
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#69e0f9]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-[#e73768]/10 rounded-full blur-3xl" />
      </section>

      {/* OUR STORY */}
      <section className="bg-black/5 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 italic uppercase">
            Our <span className="text-[#69e0f9]">Story</span>
          </h2>

          <p className="text-center text-black/60 text-lg mb-20 max-w-2xl mx-auto">
            From idea to impact — here's how NaijaBash came to be.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {story.map((chapter, index) => (
              <div
                key={index}
                className="relative p-10 rounded-3xl border border-black/10 bg-white hover:border-[#e73768] transition-all duration-300 group"
              >
                <div className="absolute -top-4 left-10 bg-[#e73768] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                <p className="text-sm uppercase tracking-wide text-black/40 mb-3 mt-4">
                  {chapter.year}
                </p>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#e73768] transition-colors">
                  {chapter.title}
                </h3>

                <p className="text-black/60 leading-relaxed">
                  {chapter.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
            What we stand for
          </h2>

          <p className="text-center text-black/60 text-lg max-w-2xl mx-auto mb-20">
            Our values guide every decision we make — from product design to
            community building.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              const bgColor = value.color + "15";

              return (
                <div
                  key={index}
                  className="group relative p-10 rounded-3xl border border-black/10 overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20"
                    style={{ backgroundColor: value.color }}
                  />

                  <div
                    className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: bgColor }}
                  >
                    <Icon size={32} color={value.color} />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>

                  <p className="text-black/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-gradient-to-br from-[#e73768]/5 via-transparent to-[#69e0f9]/5 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our impact so far
            </h2>
            <p className="text-black/60 text-lg">
              Building community, one event at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {teamStats.map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl border border-black/10 bg-white hover:border-[#69e0f9] transition-all"
              >
                <p
                  className="text-5xl font-extrabold mb-3"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </p>
                <p className="text-black/50 text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <FaMapMarkedAlt size={48} className="text-[#69e0f9] mx-auto mb-6" />

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Where we're headed
            </h2>

            <p className="text-black/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Our vision is simple:{" "}
              <span className="font-semibold text-black">
                make every Nigerian celebration discoverable
              </span>
              . Whether you're in Lagos, London, or Los Angeles — if there's an
              Owanbe happening, you'll find it on NaijaBash.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="p-8 rounded-3xl border border-black/10 hover:border-[#e73768] transition-all">
              <FaLightbulb size={32} className="text-[#e73768] mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Expanding across Africa
              </h3>
              <p className="text-black/60">
                Starting with Nigeria, but planning to connect celebrations
                across Ghana, Kenya, South Africa, and beyond.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-black/10 hover:border-[#69e0f9] transition-all">
              <FaHandshake size={32} className="text-[#69e0f9] mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Empowering local communities
              </h3>
              <p className="text-black/60">
                Supporting event organizers, vendors, and cultural promoters
                with tools to grow their reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-black/5">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Join us in celebrating Nigerian culture.
            </h2>

            <p className="text-black/60 text-lg mb-10">
              Whether you're discovering events or hosting one, NaijaBash is
              your home for authentic celebrations.
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
                Explore events
              </Link>
            </div>

            <p className="mt-6 text-sm text-black/40">
              Questions? Reach us at{" "}
              <a
                href="mailto:hello@naijabash.com"
                className="text-[#69e0f9] hover:underline"
              >
                hello@naijabash.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
