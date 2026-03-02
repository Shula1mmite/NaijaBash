import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaBell,
  FaLock,
  FaCreditCard,
  FaGlobe,
  FaShieldAlt,
  FaTrash,
  FaChevronLeft,
  FaCamera,
  FaCheck,
  FaSave,
  FaDownload,
  FaStar,
  FaHeart,
} from "react-icons/fa";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    fullName: "Chioma Adebayo",
    email: "chioma.adebayo@email.com",
    phone: "+234 801 234 5678",
    city: "Lagos",
    bio: "Event enthusiast and cultural celebration lover. Always looking for the next Owanbe!",
  });

  const [notifications, setNotifications] = useState({
    emailEvents: true,
    emailReminders: true,
    emailUpdates: false,
    pushEvents: true,
    pushReminders: true,
    pushMessages: false,
    smsReminders: false,
  });

  const tabs = [
    { id: "profile", name: "Profile", icon: FaUser },
    { id: "notifications", name: "Notifications", icon: FaBell },
    { id: "privacy", name: "Privacy & Security", icon: FaLock },
    { id: "payment", name: "Payment Methods", icon: FaCreditCard },
    { id: "preferences", name: "Preferences", icon: FaGlobe },
  ];

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleNotificationToggle = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const handleSaveProfile = () => {
    alert("Profile updated successfully!");
  };

  // Stats for profile
  const profileStats = [
    { label: "Events Attended", value: "24", icon: FaCheck },
    { label: "Events Hosted", value: "3", icon: FaStar },
    { label: "Favorites", value: "12", icon: FaHeart },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Background */}
      <header className="relative bg-gradient-to-r from-[#e73768] to-[#69e0f9] overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
            alt="Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-white/90 hover:text-white transition"
            >
              <FaChevronLeft size={16} />
              <span className="font-medium">Back to Dashboard</span>
            </Link>
          </div>

          <h1 className="text-4xl font-extrabold text-white mb-2">Settings</h1>
          <p className="text-white/80">
            Manage your account and customize your experience
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* SIDEBAR - Tabs */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sticky top-24 shadow-sm">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                        isActive
                          ? "bg-gradient-to-r from-[#e73768] to-[#e73768]/90 text-white font-semibold shadow-lg"
                          : "text-gray-600 hover:bg-gray-50 hover:text-black"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{tab.name}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Help Card */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="p-4 bg-gradient-to-br from-[#69e0f9]/10 to-[#e73768]/10 rounded-xl">
                  <h4 className="font-bold text-black mb-2 text-sm">
                    Need Help?
                  </h4>
                  <p className="text-xs text-gray-600 mb-3">
                    Our support team is here for you 24/7
                  </p>
                  <Link
                    to="/contact"
                    className="text-sm text-[#69e0f9] hover:text-[#4db8d6] font-medium"
                  >
                    Contact support →
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-3">
            {/* PROFILE TAB */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                {/* Profile Header with Cover Image */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  {/* Cover Image */}
                  <div className="relative h-32 bg-gradient-to-r from-[#e73768]/20 via-[#69e0f9]/20 to-[#e73768]/20">
                    <img
                      src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80"
                      alt="Cover"
                      className="w-full h-full object-cover opacity-50"
                    />
                    <button className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur rounded-lg text-sm font-medium hover:bg-white transition">
                      <FaCamera className="inline mr-2" size={14} />
                      Change Cover
                    </button>
                  </div>

                  {/* Profile Info */}
                  <div className="p-8 -mt-16">
                    <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
                      {/* Avatar */}
                      <div className="relative">
                        <img
                          src="https://ui-avatars.com/api/?name=Chioma+Adebayo&background=e73768&color=fff&size=200"
                          alt="Profile"
                          className="w-28 h-28 rounded-2xl border-4 border-white shadow-xl"
                        />
                        <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#69e0f9] text-white rounded-xl flex items-center justify-center hover:bg-[#4db8d6] transition shadow-lg">
                          <FaCamera size={16} />
                        </button>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <h2 className="text-3xl font-extrabold text-black mb-1">
                          {profileData.fullName}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {profileData.email}
                        </p>

                        {/* Stats */}
                        <div className="flex gap-6">
                          {profileStats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                              <div key={index} className="text-center">
                                <div className="flex items-center gap-2 mb-1">
                                  <Icon className="text-[#69e0f9]" size={16} />
                                  <p className="text-2xl font-extrabold text-black">
                                    {stat.value}
                                  </p>
                                </div>
                                <p className="text-xs text-gray-600">
                                  {stat.label}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Form */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-6">
                    Personal Information
                  </h3>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-black">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={profileData.fullName}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-black">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={profileData.email}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-black">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-black">
                          City
                        </label>
                        <select
                          name="city"
                          value={profileData.city}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                        >
                          <option>Lagos</option>
                          <option>Abuja</option>
                          <option>Port Harcourt</option>
                          <option>Ibadan</option>
                          <option>Kano</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={profileData.bio}
                        onChange={handleProfileChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition resize-none"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {profileData.bio.length} / 200 characters
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleSaveProfile}
                        className="flex items-center gap-2 px-8 py-3 bg-[#e73768] text-white rounded-lg font-semibold hover:bg-[#d62d5c] transition shadow-lg"
                      >
                        <FaSave size={16} />
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* NOTIFICATIONS TAB */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                {/* Header Card with Image */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-black mb-2">
                        Stay in the loop
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Choose how you want to be notified about events,
                        updates, and messages.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaBell className="text-[#69e0f9]" />
                        <span>Customize notifications for each channel</span>
                      </div>
                    </div>
                    <div className="relative h-48 md:h-auto">
                      <img
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
                        alt="Notifications"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent md:from-transparent"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <div className="space-y-8">
                    {/* Email Notifications */}
                    <div>
                      <h4 className="font-bold text-black mb-4 flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#69e0f9]/10 rounded-xl flex items-center justify-center">
                          <FaBell className="text-[#69e0f9]" size={18} />
                        </div>
                        Email Notifications
                      </h4>

                      <div className="space-y-3 ml-12">
                        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
                          <div>
                            <p className="font-medium text-black">New Events</p>
                            <p className="text-sm text-gray-600">
                              Get notified when new events are posted in your
                              city
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              handleNotificationToggle("emailEvents")
                            }
                            className={`relative w-14 h-7 rounded-full transition-colors shadow-inner ${
                              notifications.emailEvents
                                ? "bg-[#69e0f9]"
                                : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform shadow-md ${
                                notifications.emailEvents ? "translate-x-7" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
                          <div>
                            <p className="font-medium text-black">
                              Event Reminders
                            </p>
                            <p className="text-sm text-gray-600">
                              Reminder emails before events you're attending
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              handleNotificationToggle("emailReminders")
                            }
                            className={`relative w-14 h-7 rounded-full transition-colors shadow-inner ${
                              notifications.emailReminders
                                ? "bg-[#69e0f9]"
                                : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform shadow-md ${
                                notifications.emailReminders
                                  ? "translate-x-7"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
                          <div>
                            <p className="font-medium text-black">
                              Product Updates
                            </p>
                            <p className="text-sm text-gray-600">
                              News about features and improvements
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              handleNotificationToggle("emailUpdates")
                            }
                            className={`relative w-14 h-7 rounded-full transition-colors shadow-inner ${
                              notifications.emailUpdates
                                ? "bg-[#69e0f9]"
                                : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform shadow-md ${
                                notifications.emailUpdates
                                  ? "translate-x-7"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Push Notifications */}
                    <div>
                      <h4 className="font-bold text-black mb-4 flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#e73768]/10 rounded-xl flex items-center justify-center">
                          <FaBell className="text-[#e73768]" size={18} />
                        </div>
                        Push Notifications
                      </h4>

                      <div className="space-y-3 ml-12">
                        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
                          <div>
                            <p className="font-medium text-black">New Events</p>
                            <p className="text-sm text-gray-600">
                              Mobile notifications for new events
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              handleNotificationToggle("pushEvents")
                            }
                            className={`relative w-14 h-7 rounded-full transition-colors shadow-inner ${
                              notifications.pushEvents
                                ? "bg-[#69e0f9]"
                                : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform shadow-md ${
                                notifications.pushEvents ? "translate-x-7" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
                          <div>
                            <p className="font-medium text-black">
                              Event Reminders
                            </p>
                            <p className="text-sm text-gray-600">
                              Push notifications before your events
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              handleNotificationToggle("pushReminders")
                            }
                            className={`relative w-14 h-7 rounded-full transition-colors shadow-inner ${
                              notifications.pushReminders
                                ? "bg-[#69e0f9]"
                                : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform shadow-md ${
                                notifications.pushReminders
                                  ? "translate-x-7"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
                          <div>
                            <p className="font-medium text-black">Messages</p>
                            <p className="text-sm text-gray-600">
                              Notifications when organizers message you
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              handleNotificationToggle("pushMessages")
                            }
                            className={`relative w-14 h-7 rounded-full transition-colors shadow-inner ${
                              notifications.pushMessages
                                ? "bg-[#69e0f9]"
                                : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform shadow-md ${
                                notifications.pushMessages
                                  ? "translate-x-7"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PRIVACY & SECURITY TAB */}
            {activeTab === "privacy" && (
              <div className="space-y-6">
                {/* Header with Image */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-48 md:h-auto order-2 md:order-1">
                      <img
                        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80"
                        alt="Security"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-white/90 to-transparent md:from-transparent"></div>
                    </div>
                    <div className="p-8 order-1 md:order-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-[#69e0f9]/10 rounded-xl flex items-center justify-center">
                          <FaShieldAlt className="text-[#69e0f9]" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-black">
                          Stay Secure
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        Protect your account with strong security settings and
                        control your privacy preferences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Password */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-6">
                    Change Password
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Current Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter current password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        New Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter new password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition"
                      />
                    </div>

                    <button className="px-6 py-3 bg-[#e73768] text-white rounded-lg font-semibold hover:bg-[#d62d5c] transition shadow-lg">
                      Update Password
                    </button>
                  </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="bg-gradient-to-br from-[#69e0f9]/5 to-transparent rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#69e0f9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaLock className="text-[#69e0f9]" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2">
                          Two-Factor Authentication
                        </h3>
                        <p className="text-gray-600">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                      Not Enabled
                    </span>
                  </div>

                  <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition shadow-sm">
                    Enable 2FA
                  </button>
                </div>

                {/* Privacy Settings */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-6">
                    Privacy Settings
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
                      <div>
                        <p className="font-medium text-black">
                          Profile Visibility
                        </p>
                        <p className="text-sm text-gray-600">
                          Allow others to see your profile
                        </p>
                      </div>
                      <select className="px-4 py-2 border border-gray-200 rounded-lg focus:border-[#69e0f9] focus:outline-none bg-white">
                        <option>Public</option>
                        <option>Friends Only</option>
                        <option>Private</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
                      <div>
                        <p className="font-medium text-black">
                          Show Attending Events
                        </p>
                        <p className="text-sm text-gray-600">
                          Let others see which events you're attending
                        </p>
                      </div>
                      <button className="relative w-14 h-7 rounded-full bg-[#69e0f9] shadow-inner">
                        <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 shadow-md" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
                      <div>
                        <p className="font-medium text-black">
                          Activity Status
                        </p>
                        <p className="text-sm text-gray-600">
                          Show when you're online
                        </p>
                      </div>
                      <button className="relative w-14 h-7 rounded-full bg-gray-300 shadow-inner">
                        <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Delete Account */}
                <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl border-2 border-red-200 p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaTrash className="text-red-500" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-black mb-2">
                        Delete Account
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Once you delete your account, there is no going back.
                        Please be certain.
                      </p>
                      <button className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition shadow-lg">
                        Delete My Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PAYMENT TAB */}
            {activeTab === "payment" && (
              <div className="space-y-6">
                {/* Header with Image */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-[#e73768]/10 rounded-xl flex items-center justify-center">
                          <FaCreditCard className="text-[#e73768]" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-black">
                          Payment Methods
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Manage your payment methods and view billing history.
                      </p>
                      <button className="px-6 py-3 bg-[#e73768] text-white rounded-lg font-semibold hover:bg-[#d62d5c] transition shadow-lg">
                        + Add New Card
                      </button>
                    </div>
                    <div className="relative h-48 md:h-auto">
                      <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
                        alt="Payment"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent md:from-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Saved Cards */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-6">
                    Saved Cards
                  </h3>

                  <div className="space-y-4">
                    {/* Card 1 */}
                    <div className="p-6 rounded-xl border-2 border-[#69e0f9] bg-gradient-to-br from-[#69e0f9]/5 to-transparent shadow-md">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#69e0f9] to-[#4db8d6] rounded-xl flex items-center justify-center shadow-lg">
                            <FaCreditCard className="text-white" size={24} />
                          </div>
                          <div>
                            <p className="font-bold text-black text-lg">
                              •••• •••• •••• 4242
                            </p>
                            <p className="text-sm text-gray-600">
                              Expires 12/2025
                            </p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-[#69e0f9] text-white rounded-full text-xs font-semibold shadow-sm">
                          Default
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <button className="text-sm text-gray-600 hover:text-black font-medium">
                          Edit
                        </button>
                        <span className="text-gray-300">|</span>
                        <button className="text-sm text-red-500 hover:text-red-600 font-medium">
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition shadow-sm">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                            <FaCreditCard className="text-gray-600" size={24} />
                          </div>
                          <div>
                            <p className="font-bold text-black text-lg">
                              •••• •••• •••• 8888
                            </p>
                            <p className="text-sm text-gray-600">
                              Expires 03/2026
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button className="text-sm text-gray-600 hover:text-black font-medium">
                          Set as Default
                        </button>
                        <span className="text-gray-300">|</span>
                        <button className="text-sm text-gray-600 hover:text-black font-medium">
                          Edit
                        </button>
                        <span className="text-gray-300">|</span>
                        <button className="text-sm text-red-500 hover:text-red-600 font-medium">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Billing History */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-6">
                    Billing History
                  </h3>

                  <div className="space-y-3">
                    {[
                      {
                        date: "Feb 15, 2026",
                        description: "Afrobeat Night Ticket",
                        amount: "₦5,000",
                        status: "Paid",
                      },
                      {
                        date: "Jan 28, 2026",
                        description: "Wedding RSVP Fee",
                        amount: "₦2,500",
                        status: "Paid",
                      },
                      {
                        date: "Jan 10, 2026",
                        description: "Festival Entry Pass",
                        amount: "₦8,000",
                        status: "Paid",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-5 rounded-xl border border-gray-200 hover:bg-gray-50 transition"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <FaCheck className="text-green-600" size={18} />
                          </div>
                          <div>
                            <p className="font-semibold text-black">
                              {item.description}
                            </p>
                            <p className="text-sm text-gray-600">{item.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-black text-lg">
                            {item.amount}
                          </p>
                          <button className="text-sm text-[#69e0f9] hover:underline flex items-center gap-1">
                            <FaDownload size={12} />
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PREFERENCES TAB */}
            {activeTab === "preferences" && (
              <div className="space-y-6">
                {/* Header with Image */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-48 md:h-auto order-2 md:order-1">
                      <img
                        src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80"
                        alt="Preferences"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-white/90 to-transparent md:from-transparent"></div>
                    </div>
                    <div className="p-8 order-1 md:order-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-[#e73768]/10 rounded-xl flex items-center justify-center">
                          <FaGlobe className="text-[#e73768]" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-black">
                          Your Preferences
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        Customize your experience with language, currency, and
                        event preferences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Language & Region */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-6">
                    Language & Region
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Language
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition bg-white">
                        <option>English</option>
                        <option>Yoruba</option>
                        <option>Igbo</option>
                        <option>Hausa</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Time Zone
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition bg-white">
                        <option>West Africa Time (WAT)</option>
                        <option>Central Africa Time (CAT)</option>
                        <option>East Africa Time (EAT)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">
                        Currency
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition bg-white">
                        <option>Nigerian Naira (₦)</option>
                        <option>US Dollar ($)</option>
                        <option>British Pound (£)</option>
                        <option>Euro (€)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Event Preferences */}
                <div className="bg-gradient-to-br from-[#69e0f9]/5 to-[#e73768]/5 rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-6">
                    Event Preferences
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-black">
                        Favorite Categories
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Owanbe Weddings",
                          "Concerts",
                          "Cultural Festivals",
                          "Food & Drinks",
                          "Nightlife",
                        ].map((category) => (
                          <button
                            key={category}
                            className="px-4 py-2 bg-white border border-[#69e0f9] text-[#69e0f9] rounded-lg font-medium hover:bg-[#69e0f9] hover:text-white transition text-sm shadow-sm"
                          >
                            {category} ✕
                          </button>
                        ))}
                        <button className="px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg font-medium hover:border-[#69e0f9] hover:bg-[#69e0f9]/5 transition text-sm">
                          + Add Category
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3 text-black">
                        Default Search Radius
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#69e0f9] focus:outline-none transition bg-white">
                        <option>Within 10km</option>
                        <option>Within 25km</option>
                        <option>Within 50km</option>
                        <option>Within 100km</option>
                        <option>Entire City</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
