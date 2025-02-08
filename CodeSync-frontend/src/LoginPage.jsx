import React, { useState } from "react";
import Lottie from "lottie-react"; // Correct import
import animationData from "./myanimation.json"; // Ensure this exists in the same folder
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roomLink, setRoomLink] = useState("");
  const navigate = useNavigate();

  const generateRoomLink = () => {
    const uniqueLink = `https://myapp.com/room/${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    setRoomLink(uniqueLink);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (roomLink) {
      navigate("/dashboard");
    } else {
      alert("Please generate a room link before logging in.");
    }
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Lottie
          animationData={animationData}
          loop
          className="w-full h-full scale-150"
        />
      </div>

      <div
        className="absolute top-20 left-[50%] transform -translate-x-1/2 text-6xl font-extrabold z-10"
        style={{
          color: "#708090",
          textShadow: "0 0 5px #F0F8FF, 0 0 15px #FF4500, 0 0 30px #F0F8FF",
          animation: "glow 3s ease-in-out infinite",
        }}
      >
        CODESYNC
      </div>

      <div className="bg-white/80 dark:bg-gray-900/70 shadow-2xl rounded-2xl p-10 w-full max-w-lg backdrop-blur-sm">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-6 text-center">
          Welcome Back
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="button"
              onClick={generateRoomLink}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all"
            >
              Generate Room Link
            </button>
          </div>
          {roomLink && (
            <p className="text-sm text-green-500 mt-2 text-center">
              Room Link:{" "}
              <a
                href={roomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                {roomLink}
              </a>
            </p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-md hover:from-green-600 hover:to-green-800 transition-all"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
