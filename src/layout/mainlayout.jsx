import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-[#e73768] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed top-1/2 -right-24 w-[500px] h-[500px] bg-[#69e0f9] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
