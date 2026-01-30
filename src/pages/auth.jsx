import { useState } from "react";
import signupImg from "../assets/images/image2.png";
import signinImg from "../assets/images/image1.png";
import { FcGoogle } from "react-icons/fc";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const isSignup = mode === "signup";

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${isSignup ? signupImg : signinImg})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* PANEL CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl h-[600px]">
        {/* WRITE-UP */}
        <div
          className={`absolute top-0 w-1/2 h-full px-12 py-16 flex flex-col justify-center text-white transition-transform duration-700`}
          style={{
            left: isSignup ? "0" : "50%",
            transform: isSignup ? "translateX(0%)" : "translateX(10%)",
          }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-snug">
            {isSignup
              ? "Never miss the vibe of Nigerian events!"
              : "Welcome back! Let’s get you into the party."}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-lg">
            {isSignup
              ? "Join OwanbeConnect to discover, RSVP, and attend the hottest events across Nigeria — weddings, burials, festivals, concerts, and more."
              : "Sign in to continue exploring events tailored to your city, vibe, and schedule. Keep up with the culture 🇳🇬"}
          </p>
        </div>

        {/* AUTH BOX */}
        <div
          className={`absolute top-0 w-1/2 h-full px-10 py-16 flex items-center justify-center transition-transform duration-700`}
          style={{
            left: isSignup ? "50%" : "0%",
            transform: isSignup ? "translateX(0%)" : "translateX(10%)",
          }}
        >
          <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/20 transition-all">
            <h2 className="text-3xl font-extrabold text-white mb-2">
              {isSignup ? "Create an account" : "Welcome back"}
            </h2>

            <p className="text-sm text-white/70 mb-8">
              {isSignup
                ? "Join OwanbeConnect and never miss the vibe."
                : "Sign in to continue discovering events."}
            </p>

            <button className="w-full flex items-center justify-center gap-3 border border-white/20 py-3 rounded-md mb-6 hover:bg-white/10 transition text-white">
              <FcGoogle size={20} />
              <span className="font-medium text-sm">
                {isSignup ? "Sign up with Google" : "Sign in with Google"}
              </span>
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-xs text-white/50">OR</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            <form className="space-y-4">
              {isSignup && (
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-[#e73768]"
                />
              )}
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-[#e73768]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-[#e73768]"
              />
              <button
                type="submit"
                className="w-full mt-4 bg-[#e73768] text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
              >
                {isSignup ? "Create account" : "Sign in"}
              </button>
            </form>

            <p className="text-sm text-center text-white/70 mt-8">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setMode("signin")}
                    className="text-[#e73768] font-semibold hover:underline"
                  >
                    Sign in
                  </button>
                </>
              ) : (
                <>
                  New here?{" "}
                  <button
                    onClick={() => setMode("signup")}
                    className="text-[#e73768] font-semibold hover:underline"
                  >
                    Create an account
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
