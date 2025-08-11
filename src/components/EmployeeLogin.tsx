// src/components/EmployeeLogin.tsx
import {cbeLogo} from '../assets';
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const EmployeeLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(""); // ✅ NEW
  const [password, setPassword] = useState(""); // ✅ NEW
  const [error, setError] = useState("");       // ✅ NEW

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => { // ✅ UPDATED
    e.preventDefault();

    // ✅ Simple validation (replace with real backend logic later)
    if (username === "admin" && password === "123456") {
      login();
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-4 overflow-auto">
      {/* Header */}
      <div className="text-center mb-4">
        <img src={cbeLogo} alt="CBE Logo" className="mx-auto h-14 mb-2 object-contain" />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-pink-950 leading-snug">
          የኢትዮጵያ ንግድ ባንክ <br />
          <span className="text-yellow-700 text-lg sm:text-xl font-bold block">
            Commercial Bank of Ethiopia
          </span>
        </h1>
        <div className="w-40 border-t-2 border-gray-300 mx-auto my-2" />
        <p className="text-sm text-pink-800 font-medium">Subscription Management System</p>
      </div>

      {/* Login Form Card */}
      <div className="w-full max-w-md bg-white border border-gray-400 shadow-lg p-6 sm:p-8 ">
        {/* Title */}
        <div className="flex flex-col items-center justify-center mb-2 text-yellow-700 font-semibold">
          <h1 className="text-2xl font-bold text-gray-700 mb-2 text-center">Welcome Back</h1>
          <span className="text-sm text-center font-medium">
            Enter your credentials to access the subscription<br />
            <span className="block">System</span>
          </span>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}> {/* ✅ UPDATED */}
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Enter your username"
              value={username} // ✅ ADDED
              onChange={(e) => setUsername(e.target.value)} // ✅ ADDED
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 text-sm focus:outline-none transition"
                placeholder="Enter your password"
                value={password} // ✅ ADDED
                onChange={(e) => setPassword(e.target.value)} // ✅ ADDED
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2.5 text-gray-500 cursor-pointer transition">
                {showPassword ? (<EyeSlashIcon className="h-4 w-4" />) : (<EyeIcon className="h-4 w-4" />)}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm font-medium text-center">{error}</p>} {/* ✅ NEW */}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-pink-950 text-white text-sm font-semibold py-2.5 shadow-md hover:bg-pink-900 transition"
          >
            Sign In to CBE System
          </button>

          {/* Links */}
          <div className="flex items-center justify-between text-sm mt-2">
            <a href="#" className="text-yellow-900 hover:underline">
              Forgot Password?
            </a>
            <Link to="/register" className="text-pink-900 hover:underline">
              Create Account
            </Link>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-4 text-xs text-gray-500 text-center">
        <p className="text-sm text-pink-900 font-medium text-center tracking-wide">
          Secure banking · Trusted service · Excellence in finance
        </p>
        &copy; {new Date().getFullYear()} Commercial Bank of Ethiopia. All rights reserved. <br />
        Your information is secure and confidential.
      </div>
    </div>
  );
};

export default EmployeeLogin;
