// src/pages/dashboard.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../mock/auth";
import {
  FiHome,
  FiCalendar,
  FiUser,
  FiSettings,
  FiLogOut,
  FiTag,
} from "react-icons/fi";

// MOCK DATA
const MY_EVENTS = [
  {
    id: 1,
    title: "Owanbe Wedding in Lekki",
    date: "March 23, 2026",
    city: "Lagos",
    status: "RSVP'd",
  },
  {
    id: 4,
    title: "Live Concert Night",
    date: "April 2, 2026",
    city: "Abuja",
    status: "Upcoming",
  },
  {
    id: 7,
    title: "Friday Night Party",
    date: "April 5, 2026",
    city: "Port Harcourt",
    status: "Attended",
  },
];

const STATS = [
  { id: 1, label: "Upcoming Events", value: 3 },
  { id: 2, label: "RSVP'd Events", value: 5 },
  { id: 3, label: "Tickets", value: 2 },
  { id: 4, label: "Events Attended", value: 7 },
];

const RECENT_ACTIVITY = [
  { id: 1, action: "RSVP'd to Owanbe Wedding in Lekki", date: "Feb 5, 2026" },
  {
    id: 2,
    action: "Booked ticket for Live Concert Night",
    date: "Feb 6, 2026",
  },
  { id: 3, action: "RSVP'd to Friday Night Party", date: "Feb 7, 2026" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!user) {
    navigate("/auth");
    return null;
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* SIDEBAR */}
      <aside
        className={`bg-white border-r border-gray-200 h-screen transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1 rounded hover:bg-gray-100"
            >
              {sidebarOpen ? "←" : "→"}
            </button>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-2">
            <SidebarLink
              icon={FiHome}
              label="Dashboard"
              active
              sidebarOpen={sidebarOpen}
            />
            <SidebarLink
              icon={FiCalendar}
              label="My Events"
              sidebarOpen={sidebarOpen}
            />
            <SidebarLink
              icon={FiTag}
              label="Tickets"
              sidebarOpen={sidebarOpen}
            />
            <SidebarLink
              icon={FiUser}
              label="Profile"
              sidebarOpen={sidebarOpen}
            />
            <SidebarLink
              icon={FiSettings}
              label="Settings"
              sidebarOpen={sidebarOpen}
            />
            <button
              onClick={() => {
                logout();
                navigate("/auth");
              }}
              className="w-full flex items-center gap-3 p-2 text-gray-700 rounded hover:bg-gray-100"
            >
              <FiLogOut size={20} />
              {sidebarOpen && "Logout"}
            </button>
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {/* WELCOME BANNER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome back, {user.name} 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Here's what’s happening with your events
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-xl shadow border border-gray-200"
            >
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800 mt-2">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* UPCOMING EVENTS */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            My Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {MY_EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#69e0f9] transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-800">{event.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {event.city} • {event.date}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      event.status === "Upcoming"
                        ? "bg-blue-100 text-blue-700"
                        : event.status === "RSVP'd"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
                <button
                  onClick={() => navigate(`/events/${event.id}`)}
                  className="mt-4 text-sm font-semibold text-[#e73768]"
                >
                  View event →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section className="mb-10 bg-white p-6 rounded-xl border border-gray-200 shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/events")}
              className="px-6 py-3 bg-[#e73768] text-white rounded-md font-semibold hover:opacity-90"
            >
              Explore Events
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-md font-semibold text-gray-700">
              Complete Profile
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-md font-semibold text-gray-700">
              Create Event
            </button>
          </div>
        </section>

        {/* RECENT ACTIVITY */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-3">
            {RECENT_ACTIVITY.map((act) => (
              <li
                key={act.id}
                className="bg-white p-4 rounded-xl border border-gray-200 shadow flex justify-between items-center"
              >
                <span className="text-gray-700">{act.action}</span>
                <span className="text-gray-500 text-sm">{act.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

// Sidebar Link Component
function SidebarLink({ icon: Icon, label, active, sidebarOpen }) {
  return (
    <button
      className={`w-full flex items-center gap-3 p-2 rounded hover:bg-gray-100 ${
        active ? "bg-gray-100 font-semibold" : ""
      }`}
    >
      <Icon size={20} />
      {sidebarOpen && label}
    </button>
  );
}
