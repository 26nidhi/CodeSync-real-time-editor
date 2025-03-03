import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiEye, FiEyeOff } from "react-icons/fi";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roomLink, setRoomLink] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const generateRoomLink = () => {
    const uniqueLink = `https://myapp.com/room/${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    setRoomLink(uniqueLink);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roomLink) {
      navigate("/dashboard", { state: { roomLink } });
    } else {
      alert("Please generate a room link before proceeding.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#1A1825]">
      <div className="w-full max-w-[420px] p-4">
        <div className="bg-[#1E1C2E] rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-10">
            <div className="mb-2">
              <div className="text-xl font-medium text-gray-300 tracking-wide mb-2 uppercase">
                Welcome to
              </div>
              <div className="relative inline-block">
                <div
                  className="text-6xl font-extrabold bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#4C1D95] bg-clip-text text-transparent 
  transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "0.02em",
                    textShadow: "0px 0px 12px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  CodeSync
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent"></div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input Field */}
            <div className="flex flex-col items-start">
              <label className="text-sm text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 pr-12 bg-[#211F2D] border border-[#312E3F] rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] transition-all duration-200"
                  placeholder="name@email.com"
                  required
                />
                <FiMail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Password Input Field */}
            <div className="flex flex-col items-start">
              <label className="text-sm text-gray-300 mb-2">Password</label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 px-4 pr-12 bg-[#211F2D] border border-[#312E3F] rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] transition-all duration-200"
                  placeholder="••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Generate Room Link */}
            <button
              type="button"
              onClick={generateRoomLink}
              className="w-full h-12 bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#6366F1] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#8B5CF6]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Generate Room Link
            </button>

            {roomLink && (
              <div className="p-4 bg-[#211F2D] border border-[#312E3F] rounded-lg">
                <p className="text-sm text-[#8B5CF6] break-all">{roomLink}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#7C3AED] to-[#6366F1] text-white rounded-lg font-medium shadow-xl shadow-[#8B5CF6]/10 hover:shadow-[#8B5CF6]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-[#8B5CF6] hover:text-[#9D71FB] hover:underline transition-colors"
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
