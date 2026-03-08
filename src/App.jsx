import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Events from "./pages/event";
import EventDetails from "./pages/eventdetails";
import MainLayout from "./layout/mainlayout";
import DashboardLayout from "./layout/dashboardlayout";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import HostEvent from "./pages/hostevent";
import Contact from "./pages/contact";
import About from "./pages/about";
import Settings from "./pages/settings";
import Myevents from "./pages/myevents";
import Notification from "./pages/notification";
import Logout from "./pages/logout";

export default function App() {
  return (
    <Routes>
      {/* Main Layout Routes - With Navbar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Dashboard Sub-Routes - Without Navbar */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="hostevent" element={<HostEvent />} />
        <Route path="myevents" element={<Myevents />} />
        <Route path="settings" element={<Settings />} />
        <Route path="notification" element={<Notification />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}