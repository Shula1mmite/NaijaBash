import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Events from "./pages/event";
import EventDetails from "./pages/eventdetails";
import MainLayout from "./layout/mainlayout";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard"; //
import HostEvent from "./pages/hostevent";
import Contact from "./pages/contact";
import About from "./pages/about";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/host-event" element={<HostEvent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
