import React, { useState } from "react";
import { Link } from "react-router-dom";
import cultureImg from "../assets/images/image1.png";
import {
  FaInfoCircle,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTicketAlt,
  FaUsers,
  FaImage,
  FaTshirt,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaUpload,
  FaTimes,
  FaPlus,
  FaMapMarked,
  FaSearch,
} from "react-icons/fa";

export default function HostEvent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    title: "",
    description: "",
    category: "",
    culturalType: "",

    // Date & Location
    date: "",
    time: "",
    city: "",
    venue: "",
    address: "",

    // Ticketing
    ticketType: "free",
    price: "",
    capacity: "",

    // Additional Details
    dressCode: "",
    tags: [],
    roles: [],
    images: [],
  });

  const [showMap, setShowMap] = useState(false);

  const steps = [
    { number: 1, title: "Basic Info", icon: FaInfoCircle },
    { number: 2, title: "Date & Location", icon: FaMapMarkerAlt },
    { number: 3, title: "Ticketing", icon: FaTicketAlt },
    { number: 4, title: "Details & Preview", icon: FaCheck },
  ];

  const categories = [
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

  const nigerianCities = [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Ibadan",
    "Kano",
    "Enugu",
    "Kaduna",
    "Benin City",
    "Jos",
    "Calabar",
    "Warri",
    "Abeokuta",
    "Ilorin",
    "Owerri",
    "Uyo",
  ];

  const culturalTypes = [
    "Yoruba",
    "Igbo",
    "Hausa",
    "Mixed/Multi-cultural",
    "Pan-Nigerian",
    "Other",
  ];

  const availableRoles = [
    "Bridesmaid",
    "Groomsman",
    "Usher",
    "VIP Guest",
    "MC",
    "Photographer",
    "Caterer",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagAdd = (tag) => {
    if (!formData.tags.includes(tag)) {
      setFormData({ ...formData, tags: [...formData.tags, tag] });
    }
  };

  const handleTagRemove = (tag) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    });
  };

  const handleRoleToggle = (role) => {
    if (formData.roles.includes(role)) {
      setFormData({
        ...formData,
        roles: formData.roles.filter((r) => r !== role),
      });
    } else {
      setFormData({ ...formData, roles: [...formData.roles, role] });
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Event created successfully! 🎉");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition"
          >
            <FaChevronLeft size={16} />
            <span className="font-medium">Back to Dashboard</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Save Draft
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-r from-[#e73768]/10 via-white to-[#69e0f9]/10 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left - Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
              Host an unforgettable event
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              From Owanbe weddings to cultural festivals, share your celebration
              with the world. It only takes a few minutes to get started.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#69e0f9]/10 rounded-full flex items-center justify-center">
                  <FaCheck className="text-[#69e0f9]" size={14} />
                </div>
                <span>Free to list</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#69e0f9]/10 rounded-full flex items-center justify-center">
                  <FaCheck className="text-[#69e0f9]" size={14} />
                </div>
                <span>Reach thousands</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#69e0f9]/10 rounded-full flex items-center justify-center">
                  <FaCheck className="text-[#69e0f9]" size={14} />
                </div>
                <span>Easy RSVP</span>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <img
              src={cultureImg}
              alt="Nigerian celebration"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#e73768] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#69e0f9] rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isCompleted
                          ? "bg-[#69e0f9] text-white"
                          : isActive
                          ? "bg-[#e73768] text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {isCompleted ? <FaCheck size={20} /> : <Icon size={20} />}
                    </div>
                    <p
                      className={`mt-2 text-sm font-medium ${
                        isActive ? "text-black" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-4 rounded transition-all ${
                        isCompleted ? "bg-[#69e0f9]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT SIDEBAR - Illustration/Tips */}
            <div className="lg:col-span-1 space-y-6">
              {/* Step Illustration */}
              {currentStep === 1 && (
                <div className="bg-gradient-to-br from-[#e73768]/5 to-[#69e0f9]/5 rounded-2xl p-6 border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=400&q=80"
                    alt="Event planning"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2 text-black">
                    Quick Tips
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <FaCheck
                        className="text-[#69e0f9] mt-1 flex-shrink-0"
                        size={14}
                      />
                      <span>Use a clear, descriptive title</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck
                        className="text-[#69e0f9] mt-1 flex-shrink-0"
                        size={14}
                      />
                      <span>Mention the cultural type if applicable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheck
                        className="text-[#69e0f9] mt-1 flex-shrink-0"
                        size={14}
                      />
                      <span>Include dress code and what to bring</span>
                    </li>
                  </ul>
                </div>
              )}

              {currentStep === 2 && (
                <div className="bg-gradient-to-br from-[#69e0f9]/5 to-[#e73768]/5 rounded-2xl p-6 border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80"
                    alt="Location"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2 text-black">
                    Location Tips
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <FaMapMarkerAlt
                        className="text-[#69e0f9] mt-1 flex-shrink-0"
                        size={14}
                      />
                      <span>Include nearby landmarks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaMapMarkerAlt
                        className="text-[#69e0f9] mt-1 flex-shrink-0"
                        size={14}
                      />
                      <span>Mention parking availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaMapMarkerAlt
                        className="text-[#69e0f9] mt-1 flex-shrink-0"
                        size={14}
                      />
                      <span>Add transportation options</span>
                    </li>
                  </ul>
                </div>
              )}

              {currentStep === 3 && (
                <div className="bg-gradient-to-br from-[#e73768]/5 to-[#69e0f9]/5 rounded-2xl p-6 border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80"
                    alt="Tickets"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2 text-black">
                    Pricing Tips
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <FaTicketAlt
                        className="text-[#69e0f9] mt-1 flex-shrink-0"
                        size={14}
                      />
                      <span>Free events get 3x more RSVPs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaTicketAlt
                        className="text-[#69e0f9] mt-1 flex-shrink-0"
                        size={14}
                      />
                      <span>Set capacity for exclusive feel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaTicketAlt
                        className="text-[#69e0f9] mt-1 flex-shrink-0"
                        size={14}
                      />
                      <span>Assign roles for better planning</span>
                    </li>
                  </ul>
                </div>
              )}

              {currentStep === 4 && (
                <div className="bg-gradient-to-br from-[#69e0f9]/5 to-[#e73768]/5 rounded-2xl p-6 border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80"
                    alt="Success"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2 text-black">
                    Almost there! 🎉
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Add high-quality images to make your event stand out and
                    attract more attendees.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <FaImage
                        className="text-[#69e0f9] mt-1 flex-shrink-0"
                        size={14}
                      />
                      <span>Events with images get 5x more views</span>
                    </li>
                  </div>
                </div>
              )}

              {/* Help Section */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-lg mb-2 text-black">
                  Need help?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our team is here to help you create the perfect event listing.
                </p>
                <Link
                  to="/contact"
                  className="text-sm text-[#69e0f9] hover:text-[#4db8d6] font-medium"
                >
                  Contact support →
                </Link>
              </div>
            </div>

            {/* RIGHT CONTENT - Form */}
            <div className="lg:col-span-2">
              {/* STEP 1: Basic Info */}
              {currentStep === 1 && (
                <div className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h2 className="text-3xl font-extrabold mb-2 text-black">
                    Tell us about your event
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Let's start with the basics so people know what to expect.
                  </p>

                  <div className="space-y-6">
                    {/* Event Title */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Event Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Adaeze & Chinedu's Traditional Wedding"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Event Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Cultural Type */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Cultural Type
                      </label>
                      <select
                        name="culturalType"
                        value={formData.culturalType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                      >
                        <option value="">
                          Select cultural type (optional)
                        </option>
                        {culturalTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Event Description *
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows="6"
                        maxLength="500"
                        placeholder="Tell people what makes this event special. Include important details like dress code expectations, what to bring, parking info, etc."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition resize-none"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {formData.description.length} / 500 characters
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Date & Location */}
              {currentStep === 2 && (
                <div className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h2 className="text-3xl font-extrabold mb-2 text-black">
                    When and where?
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Help attendees know exactly when and where to show up.
                  </p>

                  <div className="space-y-6">
                    {/* Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-black">
                          Event Date *
                        </label>
                        <div className="relative">
                          <FaCalendarAlt
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={16}
                          />
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-black">
                          Start Time *
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                        />
                      </div>
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        City *
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                      >
                        <option value="">Select a city</option>
                        {nigerianCities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Venue Search */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Search for Venue
                      </label>
                      <div className="relative">
                        <FaSearch
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={16}
                        />
                        <input
                          type="text"
                          placeholder="Search for a venue (e.g., Eko Hotel)"
                          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                          onFocus={() => setShowMap(true)}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        💡 Start typing to search for venues in Nigeria
                      </p>
                    </div>

                    {/* Venue Name */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Venue Name *
                      </label>
                      <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Eko Hotel Grand Ballroom"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                      />
                    </div>

                    {/* Full Address */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Full Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        placeholder="Street address, area, landmarks"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                      />
                    </div>

                    {/* Mock Map Preview */}
                    {showMap && formData.venue && (
                      <div className="mt-6">
                        <label className="block text-sm font-semibold mb-2 text-black">
                          Venue Location
                        </label>
                        <div className="rounded-xl overflow-hidden border-2 border-gray-200 relative">
                          <img
                            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80"
                            alt="Map preview"
                            className="w-full h-64 object-cover opacity-50"
                          />
                          {/* Mock map marker */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <FaMapMarkerAlt
                              size={48}
                              className="text-[#e73768] drop-shadow-2xl animate-bounce"
                            />
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
                              <p className="text-sm font-medium text-black">
                                Map Preview
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 p-4 bg-[#69e0f9]/5 rounded-lg border border-[#69e0f9]/20">
                          <p className="text-sm text-gray-700 flex items-center gap-2">
                            <FaMapMarked className="text-[#69e0f9]" />
                            <span>
                              <strong>Selected:</strong> {formData.venue},{" "}
                              {formData.city}
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 3: Ticketing */}
              {currentStep === 3 && (
                <div className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h2 className="text-3xl font-extrabold mb-2 text-black">
                    Ticketing & Access
                  </h2>
                  <p className="text-gray-600 mb-8">
                    How should people RSVP or get tickets to your event?
                  </p>

                  <div className="space-y-6">
                    {/* Ticket Type */}
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-black">
                        Event Access Type *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, ticketType: "free" })
                          }
                          className={`p-4 rounded-xl border-2 transition-all text-left ${
                            formData.ticketType === "free"
                              ? "border-[#69e0f9] bg-[#69e0f9]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <p className="font-bold text-black mb-1">
                            Free Event
                          </p>
                          <p className="text-sm text-gray-600">
                            Anyone can RSVP
                          </p>
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, ticketType: "paid" })
                          }
                          className={`p-4 rounded-xl border-2 transition-all text-left ${
                            formData.ticketType === "paid"
                              ? "border-[#69e0f9] bg-[#69e0f9]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <p className="font-bold text-black mb-1">
                            Paid Tickets
                          </p>
                          <p className="text-sm text-gray-600">
                            Charge for entry
                          </p>
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              ticketType: "invitation-only",
                            })
                          }
                          className={`p-4 rounded-xl border-2 transition-all text-left ${
                            formData.ticketType === "invitation-only"
                              ? "border-[#69e0f9] bg-[#69e0f9]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <p className="font-bold text-black mb-1">
                            Invitation Only
                          </p>
                          <p className="text-sm text-gray-600">Private event</p>
                        </button>
                      </div>
                    </div>

                    {/* Price (if paid) */}
                    {formData.ticketType === "paid" && (
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-black">
                          Ticket Price (₦) *
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                            ₦
                          </span>
                          <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            placeholder="5000"
                            min="0"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                          />
                        </div>
                      </div>
                    )}

                    {/* Capacity */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Maximum Attendees
                      </label>
                      <input
                        type="number"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        placeholder="Leave blank for unlimited"
                        min="1"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Set a limit to control how many people can RSVP
                      </p>
                    </div>

                    {/* Available Roles */}
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-black">
                        Available Roles (Optional)
                      </label>
                      <p className="text-sm text-gray-600 mb-3">
                        Allow attendees to specify their role at the event
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {availableRoles.map((role) => (
                          <button
                            key={role}
                            type="button"
                            onClick={() => handleRoleToggle(role)}
                            className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                              formData.roles.includes(role)
                                ? "border-[#69e0f9] bg-[#69e0f9]/10 text-[#69e0f9]"
                                : "border-gray-200 text-gray-700 hover:border-gray-300"
                            }`}
                          >
                            {formData.roles.includes(role) && (
                              <FaCheck className="inline mr-1" size={12} />
                            )}
                            {role}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Details & Preview */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  {/* Additional Details */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-8">
                    <h2 className="text-3xl font-extrabold mb-2 text-black">
                      Final touches
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Add images and extra details to make your event stand out.
                    </p>

                    <div className="space-y-6">
                      {/* Dress Code */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-black">
                          <FaTshirt className="inline mr-2 text-gray-400" />
                          Dress Code
                        </label>
                        <input
                          type="text"
                          name="dressCode"
                          value={formData.dressCode}
                          onChange={handleChange}
                          placeholder="e.g., Traditional Yoruba attire, Aso Ebi required"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                        />
                      </div>

                      {/* Tags */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-black">
                          Tags
                        </label>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {formData.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2"
                            >
                              {tag}
                              <button
                                type="button"
                                onClick={() => handleTagRemove(tag)}
                                className="text-gray-500 hover:text-black"
                              >
                                <FaTimes size={12} />
                              </button>
                            </span>
                          ))}
                        </div>
                        <input
                          type="text"
                          placeholder="Add tags (press Enter)"
                          onKeyPress={(e) => {
                            if (e.key === "Enter" && e.target.value.trim()) {
                              e.preventDefault();
                              handleTagAdd(e.target.value.trim());
                              e.target.value = "";
                            }
                          }}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                        />
                      </div>

                      {/* Image Upload */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-black">
                          Event Images
                        </label>

                        {/* Image Preview */}
                        {formData.images.length > 0 && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            {formData.images.map((image, index) => (
                              <div
                                key={index}
                                className="relative group rounded-lg overflow-hidden border-2 border-gray-200"
                              >
                                <img
                                  src={URL.createObjectURL(image)}
                                  alt={`Preview ${index + 1}`}
                                  className="w-full h-32 object-cover"
                                />
                                <button
                                  type="button"
                                  onClick={() => removeImage(index)}
                                  className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <FaTimes size={12} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#69e0f9] transition">
                          <FaUpload
                            size={40}
                            className="mx-auto text-gray-400 mb-3"
                          />
                          <p className="text-sm font-medium text-black mb-1">
                            Drop images here or click to upload
                          </p>
                          <p className="text-xs text-gray-500 mb-4">
                            PNG, JPG up to 5MB each
                          </p>
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="imageUpload"
                          />
                          <label
                            htmlFor="imageUpload"
                            className="inline-block px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition font-medium text-sm"
                          >
                            Choose files
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preview Summary */}
                  <div className="bg-gradient-to-br from-[#69e0f9]/5 to-[#e73768]/5 rounded-2xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
                      <FaCheck className="text-[#69e0f9]" />
                      Event Summary
                    </h3>

                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-gray-200 pb-3">
                        <span className="text-gray-600 font-medium">
                          Title:
                        </span>
                        <span className="font-semibold text-black text-right">
                          {formData.title || "—"}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-3">
                        <span className="text-gray-600 font-medium">
                          Category:
                        </span>
                        <span className="font-semibold text-black">
                          {formData.category || "—"}
                        </span>
                      </div>
                      {formData.culturalType && (
                        <div className="flex justify-between border-b border-gray-200 pb-3">
                          <span className="text-gray-600 font-medium">
                            Cultural Type:
                          </span>
                          <span className="font-semibold text-black">
                            {formData.culturalType}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between border-b border-gray-200 pb-3">
                        <span className="text-gray-600 font-medium">
                          Date & Time:
                        </span>
                        <span className="font-semibold text-black">
                          {formData.date && formData.time
                            ? `${formData.date} at ${formData.time}`
                            : "—"}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-3">
                        <span className="text-gray-600 font-medium">
                          Location:
                        </span>
                        <span className="font-semibold text-black text-right">
                          {formData.venue && formData.city
                            ? `${formData.venue}, ${formData.city}`
                            : "—"}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-3">
                        <span className="text-gray-600 font-medium">
                          Access:
                        </span>
                        <span className="font-semibold text-black capitalize">
                          {formData.ticketType.replace("-", " ")}
                          {formData.ticketType === "paid" && formData.price
                            ? ` (₦${formData.price})`
                            : ""}
                        </span>
                      </div>
                      {formData.capacity && (
                        <div className="flex justify-between border-b border-gray-200 pb-3">
                          <span className="text-gray-600 font-medium">
                            Capacity:
                          </span>
                          <span className="font-semibold text-black">
                            {formData.capacity} attendees
                          </span>
                        </div>
                      )}
                      {formData.dressCode && (
                        <div className="flex justify-between border-b border-gray-200 pb-3">
                          <span className="text-gray-600 font-medium">
                            Dress Code:
                          </span>
                          <span className="font-semibold text-black text-right">
                            {formData.dressCode}
                          </span>
                        </div>
                      )}
                      {formData.roles.length > 0 && (
                        <div className="flex justify-between pb-3">
                          <span className="text-gray-600 font-medium">
                            Roles:
                          </span>
                          <span className="font-semibold text-black text-right">
                            {formData.roles.join(", ")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
                    currentStep === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white border border-gray-200 text-black hover:bg-gray-50"
                  }`}
                >
                  <FaChevronLeft size={16} />
                  Previous
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2 px-6 py-3 bg-[#e73768] text-white rounded-lg font-semibold hover:bg-[#d62d5c] transition"
                  >
                    Next
                    <FaChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3 bg-[#e73768] text-white rounded-lg font-semibold hover:bg-[#d62d5c] transition shadow-lg"
                  >
                    <FaCheck size={16} />
                    Publish Event
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
