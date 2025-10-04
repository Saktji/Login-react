import React, { useState } from "react";
import Logo from "./assets/lo.jpg";
import Backcard from "./assets/Back.jpg";
import BluImage from "./assets/bluim.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./index.css";

export default function App() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Error states
  const [errorUsername, setErrorUsername] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset previous errors
    setErrorUsername("");
    setErrorPassword("");

    let hasError = false;

    if (!username) {
      setErrorUsername("Username is required");
      hasError = true;
    }

    if (!password) {
      setErrorPassword("Password is required");
      hasError = true;
    }

    if (hasError) return;

    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setErrorUsername("");
      setErrorPassword("");
    } else {
      setErrorPassword("Invalid username or password ❌");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setErrorUsername("");
    setErrorPassword("");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${Backcard})` }}
    >
      <div
        className="bg-white/90 p-8 md:p-10 rounded-3xl w-full max-w-sm shadow-2xl flex flex-col items-center"
        style={{
          backgroundImage: `url(${BluImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {isLoggedIn ? (
          <div className="flex flex-col items-center text-center">
            <img src={Logo} alt="Logo" className="w-24 h-24 rounded-full mb-4 shadow-lg" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome, {username} 🎉
            </h2>
            <p className="text-gray-700 mb-6">You have successfully logged in.</p>
            <button
              className="w-full bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <img src={Logo} alt="Logo" className="w-24 h-24 rounded-full mb-4 shadow-lg" />
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>

            <form onSubmit={handleLogin} className="w-full">
              {/* Username Field */}
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errorUsername && (
                  <p className="text-red-600 text-sm mt-1">{errorUsername}</p>
                )}
              </div>

              
              <div className="mb-4 relative">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                > <br />
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errorPassword && (
                  <p className="text-red-600 text-sm mt-1">{errorPassword}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
              >
                Login
              </button>
            </form>

            <p className="mt-4 text-gray-600 text-sm text-center">
              Don't have an account?{" "}
              <a href="#" className="text-purple-700 font-medium hover:underline">
                Sign up
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
