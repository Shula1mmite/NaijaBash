import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockSignIn, mockSignUp } from "../mock/auth";
import signupImg from "../assets/images/eventimage1.png";
import signinImg from "../assets/images/eventimage3.png";
import { FcGoogle } from "react-icons/fc";
import {
  FaUserPlus,
  FaSignInAlt,
  FaEnvelope,
  FaLock,
  FaUser,
  FaBirthdayCake,
  FaGlassCheers,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const isSignup = mode === "signup";
  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let user;
    if (isSignup) {
      user = mockSignUp({ name, email });
    } else {
      user = mockSignIn({ email });
    }

    if (user) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden py-8 px-4">
      {/* ANIMATED BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
        style={{ backgroundImage: `url(${isSignup ? signupImg : signinImg})` }}
      />

      {/* Darker gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />

      {/* Animated gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e73768] via-[#69e0f9] to-[#e73768] bg-[length:200%_100%] animate-gradient"></div>

      {/* Floating party elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#e73768]/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#69e0f9]/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#e73768]/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#69e0f9]/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:block relative z-10 w-full max-w-7xl h-[650px]">
        {/* WRITE-UP PANEL */}
        <div
          className={`absolute top-0 w-1/2 h-full px-12 py-16 flex flex-col justify-center transition-all duration-700 ease-out`}
          style={{
            left: isSignup ? "0" : "50%",
            transform: isSignup ? "translateX(0%)" : "translateX(10%)",
          }}
        >
          {/* Animated icon */}
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#e73768] to-[#69e0f9] rounded-2xl mb-6 shadow-xl animate-bounce">
            {isSignup ? (
              <FaBirthdayCake className="text-white text-4xl" />
            ) : (
              <FaGlassCheers className="text-white text-4xl" />
            )}
          </div>

          <h1 className="text-5xl xl:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-2xl">
            {isSignup
              ? "Never miss the vibe of Nigerian events!"
              : "Welcome back! Let's get you into the party."}
          </h1>

          <p className="text-lg xl:text-xl text-white/95 max-w-lg leading-relaxed drop-shadow-xl mb-10">
            {isSignup
              ? "Join NaijaBash to discover, RSVP, and attend the hottest events across Nigeria — weddings, burials, festivals, concerts, and more."
              : "Sign in to continue exploring events tailored to your city, vibe, and schedule. Keep up with the culture 🇳🇬"}
          </p>

          {/* Party stats */}
          <div className="flex gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#e73768]/30 backdrop-blur-sm rounded-xl mb-2 mx-auto shadow-lg border border-white/20">
                <FaUsers className="text-white text-xl drop-shadow-lg" />
              </div>
              <p className="text-4xl font-extrabold text-white drop-shadow-2xl">
                2K+
              </p>
              <p className="text-sm text-white/90 font-medium drop-shadow-lg">
                Active Users
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#69e0f9]/30 backdrop-blur-sm rounded-xl mb-2 mx-auto shadow-lg border border-white/20">
                <FaCalendarAlt className="text-white text-xl drop-shadow-lg" />
              </div>
              <p className="text-4xl font-extrabold text-white drop-shadow-2xl">
                500+
              </p>
              <p className="text-sm text-white/90 font-medium drop-shadow-lg">
                Events
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#e73768]/30 backdrop-blur-sm rounded-xl mb-2 mx-auto shadow-lg border border-white/20">
                <FaMapMarkerAlt className="text-white text-xl drop-shadow-lg" />
              </div>
              <p className="text-4xl font-extrabold text-white drop-shadow-2xl">
                30+
              </p>
              <p className="text-sm text-white/90 font-medium drop-shadow-lg">
                Cities
              </p>
            </div>
          </div>
        </div>
        {/* AUTH BOX - DESKTOP */}
        <div
          className={`absolute top-0 w-1/2 h-full px-10 py-16 flex items-center justify-center transition-all duration-700 ease-out`}
          style={{
            left: isSignup ? "50%" : "0%",
            transform: isSignup ? "translateX(0%)" : "translateX(10%)",
          }}
        >
          <div className="w-full max-w-md bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/30 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e73768]/20 via-transparent to-[#69e0f9]/20 opacity-50"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#e73768] to-[#69e0f9] rounded-2xl flex items-center justify-center shadow-lg">
                  {isSignup ? (
                    <FaUserPlus className="text-white" size={20} />
                  ) : (
                    <FaSignInAlt className="text-white" size={20} />
                  )}
                </div>
                <h2 className="text-3xl font-extrabold text-white">
                  {isSignup ? "Join the Party" : "Welcome Back"}
                </h2>
              </div>

              <p className="text-sm text-white/80 mb-8">
                {isSignup
                  ? "Create your account and never miss the vibe."
                  : "Sign in to continue discovering events."}
              </p>

              {/* Google button */}
              <button className="w-full flex items-center justify-center gap-3 bg-white/10 border border-white/30 py-3.5 rounded-xl mb-6 hover:bg-white/20 transition-all duration-300 text-white font-semibold shadow-lg group">
                <FcGoogle size={24} />
                <span className="text-sm">
                  {isSignup ? "Sign up with Google" : "Sign in with Google"}
                </span>
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="text-xs text-white/50 font-medium">OR</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>

              {/* FORM */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                {isSignup && (
                  <div className="relative">
                    <FaUser
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                      size={16}
                    />
                    <input
                      type="text"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-[#69e0f9] focus:bg-white/15 transition-all duration-300"
                      required
                    />
                  </div>
                )}

                <div className="relative">
                  <FaEnvelope
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                    size={16}
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-[#69e0f9] focus:bg-white/15 transition-all duration-300"
                    required
                  />
                </div>

                <div className="relative">
                  <FaLock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                    size={16}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-[#69e0f9] focus:bg-white/15 transition-all duration-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-[#e73768] via-[#69e0f9] to-[#e73768] bg-[length:200%_100%] text-white py-4 rounded-xl font-bold hover:bg-[position:100%_0] transition-all duration-700 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  {isSignup ? (
                    <>
                      <FaBirthdayCake size={18} />
                      Create Account
                    </>
                  ) : (
                    <>
                      <FaGlassCheers size={18} />
                      Sign In
                    </>
                  )}
                </button>
              </form>

              <p className="text-sm text-center text-white/80 mt-8">
                {isSignup ? (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => setMode("signin")}
                      className="text-[#69e0f9] font-bold hover:underline transition-all"
                    >
                      Sign in
                    </button>
                  </>
                ) : (
                  <>
                    New here?{" "}
                    <button
                      onClick={() => setMode("signup")}
                      className="text-[#69e0f9] font-bold hover:underline transition-all"
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

      {/* MOBILE LAYOUT */}
      <div className="lg:hidden relative z-10 w-full max-w-md">
        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/30 relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e73768]/20 via-transparent to-[#69e0f9]/20 opacity-50"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#e73768] to-[#69e0f9] rounded-2xl mb-4 mx-auto shadow-xl animate-bounce">
                {isSignup ? (
                  <FaBirthdayCake className="text-white text-4xl" />
                ) : (
                  <FaGlassCheers className="text-white text-4xl" />
                )}
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-2">
                {isSignup ? "Join the Party" : "Welcome Back"}
              </h2>
              <p className="text-sm text-white/80">
                {isSignup
                  ? "Never miss the vibe of Nigerian events!"
                  : "Let's get you back into the party."}
              </p>
            </div>

            {/* Google button */}
            <button className="w-full flex items-center justify-center gap-3 bg-white/10 border border-white/30 py-4 rounded-xl mb-6 hover:bg-white/20 transition-all duration-300 text-white font-semibold shadow-lg active:scale-95">
              <FcGoogle size={24} />
              <span className="text-sm">
                {isSignup ? "Sign up with Google" : "Sign in with Google"}
              </span>
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <span className="text-xs text-white/50 font-medium">OR</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            {/* FORM */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {isSignup && (
                <div className="relative">
                  <FaUser
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-[#69e0f9] focus:bg-white/15 transition-all duration-300 text-base"
                    required
                  />
                </div>
              )}

              <div className="relative">
                <FaEnvelope
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                  size={16}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-[#69e0f9] focus:bg-white/15 transition-all duration-300 text-base"
                  required
                />
              </div>

              <div className="relative">
                <FaLock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                  size={16}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-[#69e0f9] focus:bg-white/15 transition-all duration-300 text-base"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-[#e73768] via-[#69e0f9] to-[#e73768] bg-[length:200%_100%] text-white py-4 rounded-xl font-bold hover:bg-[position:100%_0] transition-all duration-700 shadow-xl active:scale-95 text-lg flex items-center justify-center gap-2"
              >
                {isSignup ? (
                  <>
                    <FaBirthdayCake size={20} />
                    Create Account
                  </>
                ) : (
                  <>
                    <FaGlassCheers size={20} />
                    Sign In
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-center text-white/80 mt-8">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setMode("signin")}
                    className="text-[#69e0f9] font-bold hover:underline transition-all"
                  >
                    Sign in
                  </button>
                </>
              ) : (
                <>
                  New here?{" "}
                  <button
                    onClick={() => setMode("signup")}
                    className="text-[#69e0f9] font-bold hover:underline transition-all"
                  >
                    Create an account
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
