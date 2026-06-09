import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../public/img/logo.png";

import { BASE_URL } from  '../config.js'

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("response", username)

    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}api/signin`, { username, password });

      if (response.status === 200) {
       
        alert("Login successful ✅");
        navigate("/dashboard"); // redirect after successful login
      }
    } catch (error: any) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col xl:flex-row bg-white shadow-lg rounded-3xl overflow-hidden w-full max-w-6xl">
        {/* Left Logo Section */}
        <div className="hidden xl:flex xl:w-1/2 justify-center items-center bg-gradient-to-b from-blue-200 to-orange-100 p-10">
          <Link to="/" className="inline-block">
<img
  src="/img/logo.png"
  alt="Logo"
  className="h-40 w-auto object-contain"
  style={{ maxWidth: "300px" }}
/>
          </Link>
        </div>

        {/* Sign-in form section */}
        <div className="w-full xl:w-1/2 p-10 sm:p-16 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Sign In to Admin Panel
          </h2>
          <p className="text-gray-500 mb-6">
            Enter your credentials to access your dashboard
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 px-5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 px-5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl shadow-md transition transform hover:scale-105"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-gray-500 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
