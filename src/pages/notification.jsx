import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaChevronLeft,
  FaCalendarAlt,
  FaHeart,
  FaComment,
  FaUserPlus,
  FaTicketAlt,
  FaStar,
  FaExclamationCircle,
  FaCheck,
  FaTrash,
  FaFilter,
  FaCog,
  FaEnvelope,
  FaGift,
  FaMusic,
  FaUsers,
} from "react-icons/fa";

export default function Notifications() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "event_reminder",
      title: "Event Tomorrow!",
      message: "Adaeze's Owanbe Wedding is happening tomorrow at 2:00 PM",
      time: "2 hours ago",
      read: false,
      icon: FaCalendarAlt,
      iconColor: "#e73768",
      iconBg: "#e73768",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=200&q=80",
      actionText: "View Event",
      actionLink: "/events/1",
    },
    {
      id: 2,
      type: "new_event",
      title: "New Event Near You",
      message: "Lagos Jazz Festival 2026 just got posted in your area",
      time: "5 hours ago",
      read: false,
      icon: FaMusic,
      iconColor: "#69e0f9",
      iconBg: "#69e0f9",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80",
      actionText: "Discover",
      actionLink: "/events/10",
    },
    {
      id: 3,
      type: "rsvp_update",
      title: "Guest List Update",
      message: "15 new people RSVP'd to your Birthday Bash",
      time: "1 day ago",
      read: false,
      icon: FaUserPlus,
      iconColor: "#69e0f9",
      iconBg: "#69e0f9",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=200&q=80",
      actionText: "View Guests",
      actionLink: "/dashboard/hosting",
    },
    {
      id: 4,
      type: "liked",
      title: "Someone Saved Your Event",
      message: "5 people saved 'My Birthday Bash 2026' to their favorites",
      time: "1 day ago",
      read: true,
      icon: FaHeart,
      iconColor: "#e73768",
      iconBg: "#e73768",
      actionText: "View Event",
      actionLink: "/dashboard/hosting",
    },
    {
      id: 5,
      type: "review",
      title: "New Review Received",
      message: "Your event received a 5-star review from Chioma A.",
      time: "2 days ago",
      read: true,
      icon: FaStar,
      iconColor: "#fbbf24",
      iconBg: "#fbbf24",
      actionText: "Read Review",
      actionLink: "/dashboard/hosting",
    },
    {
      id: 6,
      type: "ticket_confirmed",
      title: "Ticket Confirmed",
      message: "Your ticket for Afrobeat Night has been confirmed",
      time: "3 days ago",
      read: true,
      icon: FaTicketAlt,
      iconColor: "#69e0f9",
      iconBg: "#69e0f9",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=200&q=80",
      actionText: "View Ticket",
      actionLink: "/dashboard/my-events",
    },
    {
      id: 7,
      type: "event_update",
      title: "Event Time Changed",
      message: "Naming Ceremony - Baby Tunde has been rescheduled to 12:00 PM",
      time: "4 days ago",
      read: true,
      icon: FaExclamationCircle,
      iconColor: "#f59e0b",
      iconBg: "#f59e0b",
      image:
        "https://images.unsplash.com/photo-1610149404767-4f82f2f5211e?auto=format&fit=crop&w=200&q=80",
      actionText: "View Changes",
      actionLink: "/events/3",
    },
    {
      id: 8,
      type: "friend_activity",
      title: "Friend Going to Event",
      message: "Tunde and 3 others are attending Lagos Food Festival",
      time: "5 days ago",
      read: true,
      icon: FaUsers,
      iconColor: "#69e0f9",
      iconBg: "#69e0f9",
      image:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=200&q=80",
      actionText: "Join Them",
      actionLink: "/events/4",
    },
  ]);

  const filters = [
    { id: "all", label: "All", icon: FaBell },
    { id: "events", label: "Events", icon: FaCalendarAlt },
    { id: "social", label: "Social", icon: FaHeart },
    { id: "updates", label: "Updates", icon: FaExclamationCircle },
  ];

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filteredNotifications =
    activeFilter === "all"
      ? notifications
      : notifications.filter((n) => {
          if (activeFilter === "events")
            return [
              "event_reminder",
              "new_event",
              "ticket_confirmed",
              "event_update",
            ].includes(n.type);
          if (activeFilter === "social")
            return ["liked", "friend_activity", "rsvp_update"].includes(n.type);
          if (activeFilter === "updates")
            return ["event_update", "review"].includes(n.type);
          return true;
        });

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

            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-extrabold text-black">
                Notifications
              </h1>
              {unreadCount > 0 && (
                <span className="px-3 py-1 bg-[#e73768] text-white rounded-full text-sm font-bold">
                  {unreadCount}
                </span>
              )}
            </div>

            <Link
              to="/dashboard/settings"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition"
            >
              <FaCog size={18} />
              <span className="font-medium hidden sm:inline">Settings</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden mb-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
            alt="Notifications background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/90"></div>
        </div>

        <div className="relative z-10 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#e73768] to-[#d62d5c] rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <FaBell className="text-white" size={36} />
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">
              Stay in the loop
            </h2>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Never miss important updates about your events, RSVPs, and
              celebrations
            </p>

            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="px-6 py-3 bg-[#e73768] text-white rounded-lg font-semibold hover:bg-[#d62d5c] transition shadow-lg"
              >
                <FaCheck className="inline mr-2" size={16} />
                Mark All as Read
              </button>
            )}
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 pb-12">
        {/* Filter Tabs */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-8 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? "bg-[#e73768] text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon size={16} />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition-all group ${
                    notification.read
                      ? "border-gray-200"
                      : "border-[#69e0f9] shadow-md"
                  }`}
                >
                  <div className="flex gap-0">
                    {/* Icon/Image Section */}
                    {notification.image ? (
                      <div className="relative w-32 flex-shrink-0">
                        <img
                          src={notification.image}
                          alt={notification.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                            style={{ backgroundColor: notification.iconBg }}
                          >
                            <Icon className="text-white" size={18} />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-20 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: `${notification.iconBg}15`,
                          }}
                        >
                          <Icon
                            size={20}
                            style={{ color: notification.iconColor }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-bold text-black">
                              {notification.title}
                            </h3>
                            {!notification.read && (
                              <span className="w-2 h-2 bg-[#69e0f9] rounded-full"></span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500">
                            {notification.time}
                          </p>
                        </div>

                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="text-gray-400 hover:text-red-500 transition ml-4"
                          title="Delete notification"
                        >
                          <FaTrash size={16} />
                        </button>
                      </div>

                      <div className="flex gap-3 mt-4">
                        {notification.actionLink && (
                          <Link
                            to={notification.actionLink}
                            onClick={() => markAsRead(notification.id)}
                            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium text-sm"
                          >
                            {notification.actionText}
                          </Link>
                        )}
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition font-medium text-sm"
                          >
                            Mark as Read
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#e73768]/10 to-[#69e0f9]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaBell className="text-gray-400" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-black mb-3">
                All caught up!
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                No new notifications in this category
              </p>
              <Link
                to="/events"
                className="inline-block px-8 py-4 bg-[#e73768] text-white rounded-lg font-semibold hover:bg-[#d62d5c] transition shadow-lg"
              >
                Discover Events
              </Link>
            </div>
          )}
        </div>

        {/* Notification Preferences Card */}
        {filteredNotifications.length > 0 && (
          <div className="mt-12 bg-gradient-to-br from-[#69e0f9]/10 to-[#e73768]/10 rounded-2xl border border-gray-200 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                <FaCog className="text-[#69e0f9]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">
                  Customize Your Notifications
                </h3>
                <p className="text-gray-600 mb-4">
                  Manage which notifications you receive via email, push, and
                  SMS
                </p>
                <Link
                  to="/dashboard/settings"
                  className="inline-block px-6 py-3 bg-white border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition text-sm"
                >
                  Notification Settings
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
