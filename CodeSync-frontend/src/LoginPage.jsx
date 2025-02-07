import React, { useState } from "react";
import Lottie from "lottie-react"; // Correct import
import animationData from "./animation.json"; // Ensure this exists in the same folder
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
      {/* Lottie Animation - Fullscreen Background */}
      <div className="absolute inset-0 -z-10">
        <Lottie
          animationData={animationData}
          loop
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Sign in to your account
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2.5 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2.5 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="button"
              onClick={generateRoomLink}
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700"
            >
              Generate Room Link
            </button>
          </div>
          {roomLink && (
            <p className="text-sm text-green-600 mt-2">
              Room Link:{" "}
              <a
                href={roomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {roomLink}
              </a>
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
