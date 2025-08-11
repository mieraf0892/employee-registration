import {cbeLogo, employeeIcon, employeeInfo, securityIcon, backIcon} from '../assets';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const EmployeeRegister = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-4 overflow-auto">
      {/* Top: Logo and Title */}
      <div className="text-center mb-4">
        <img src={cbeLogo} alt="CBE Logo" className="mx-auto mb-2 h-14 object-contain" />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-pink-950 leading-snug">
          የኢትዮጵያ ንግድ ባንክ <br />
          <span className="text-yellow-700 text-lg sm:text-xl font-bold block">Commercial Bank of Ethiopia</span>
        </h1>
        <p className="text-sm text-pink-900 font-medium mt-2">Create New Account</p>
      </div>

      <div className="w-full max-w-3xl border border-gray-400 shadow-lg p-6 sm:p-8">
        {/* Form Title */}
        <div className="mb-3">
          <div className="flex items-center gap-3 text-pink-900">
            <button onClick={()=>navigate('/')} className="flex items-center text-sm hover:underline">
              <img src={backIcon} alt="Back Icon" className="h-4 w-4 mr-1" />
            </button>
            <h2 className="text-base font-bold flex items-center gap-2">
              <img src={employeeIcon} alt="Employee Icon" className="h-4 w-4" />
              Employee Registration
            </h2>
          </div>
          <p className="text-sm text-yellow-700 mt-2 text-left">Register for access to the subscription management system</p>
        </div>

        {/* Personal Information */}
        <div className="flex items-center gap-1 text-pink-900 font-semibold mb-1">
          <img src={employeeInfo} alt="Personal Info Icon" className="h-4 w-4" />
          <span className="text-sm">Personal Information</span>
        </div>
        <hr className="border-t border-gray-400 mb-3" />
        <div className="border border-gray-400 rounded-xs p-4 mb-4 shadow-lg">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name<span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition" placeholder="Enter your full name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID<span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition" placeholder="Enter your employee ID" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address<span className="text-red-500">*</span></label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition" placeholder="Enter your email address" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition" placeholder="Enter your phone number" />
            </div>
          </div>
        </div>

        {/* Work Information */}
        <div className="flex items-center gap-1 text-pink-900 font-semibold mb-1">
          <img src={cbeLogo} alt="Work Info Icon" className="h-4 w-auto" />
          <span className="text-sm">Work Information</span>
        </div>
        <hr className="border-t border-gray-400 mb-3" />
        <div className="border border-gray-400 rounded-xs p-4 mb-4 shadow-lg">
        <div className="grid grid-cols-2 gap-4 mb-3">
        {/* Branch */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Branch<span className="text-red-500">*</span></label>
          <select className="w-full border border-gray-300 bg-white text-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition appearance-none">
            <option className="bg-white text-gray-800">Select your branch</option>
            <option className="bg-white text-gray-800">Addis Ababa Branch</option>
            <option className="bg-white text-gray-800">Hawassa Branch</option>
            <option className="bg-white text-gray-800">Mekelle Branch</option>
            <option className="bg-white text-gray-800">Bahir Dar Branch</option>
          </select>
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Department<span className="text-red-500">*</span></label>
          <select className="w-full border border-gray-300 bg-white text-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition appearance-none">
            <option className="bg-white text-gray-800">Select your department</option>
            <option className="bg-white text-gray-800">IT Department</option>
            <option className="bg-white text-gray-800">Human Resource</option>
            <option className="bg-white text-gray-800">Finance</option>
            <option className="bg-white text-gray-800">Marketing</option>
          </select>
        </div>
      </div>

  {/* Role */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Role<span className="text-red-500">*</span>
    </label>
    <select
      className="w-full border border-gray-300 bg-white text-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition appearance-none"
    >
      <option className="bg-white text-gray-800">Select your role</option>
      <option className="bg-white text-gray-800">Admin</option>
      <option className="bg-white text-gray-800">Developer</option>
      <option className="bg-white text-gray-800">Manager</option>
      <option className="bg-white text-gray-800">Clerk</option>
    </select>
  </div>
</div>


        {/* Security Information */}
        <div className="flex items-center gap-1 text-pink-900 font-semibold mb-1">
          <img src={securityIcon} alt="Security Icon" className="h-4 w-4" />
          <span className="text-sm">Security Information</span>
        </div>
        <hr className="border-t border-gray-400 mb-3" />
<div className="border border-gray-400 rounded-xs  p-4 mb-4 shadow-lg">
  <div className="grid grid-cols-2 gap-4">
    {/* Password Field */}
    <div className="relative">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        name="password"
        className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm text-sm transition"
        placeholder="Enter your password"
        required
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-9 text-gray-500 cursor-pointer transition"
      >
        {showPassword ? <EyeSlashIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
      </button>
    </div>

    {/* Confirm Password Field */}
    <div className="relative">
      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password<span className="text-red-500">*</span></label>
      <input
        type={showConfirmPassword ? 'text' : 'password'}
        id="confirmPassword"
        name="confirmPassword"
        className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm text-sm transition"
        placeholder="Re-enter your password"
        required
      />
      <button
        type="button"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        className="absolute right-3 top-9 text-gray-500 cursor-pointer transition"
      >
        {showConfirmPassword ? <EyeSlashIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
      </button>
    </div>
  </div>

  <div className="mt-3 text-sm text-gray-500 font-medium">
    <span className="text-yellow-700">Password must be at least 8 characters, include an uppercase letter, a number, and a special character.</span>
  </div>
</div>


        {/* Terms and Conditions */}
        <div className="flex items-start gap-2 mb-4">
          <input type="checkbox" id="terms" name="terms" className="mt-1 accent-pink-900" required />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree to the <span className="text-yellow-700 font-medium cursor-pointer underline">terms and conditions</span> and <span className="text-yellow-700 font-medium cursor-pointer underline">Privacy Policy</span> of Commercial Bank of Ethiopia's Subscription Management System.
          </label>
        </div>

        {/* Submit Button */}
        <div>
            <button type="submit" className="w-full bg-pink-950 text-white text-sm font-bold py-2.5 mt-2 shadow-lg hover:bg-pink-900 transition-all duration-200">
            Create CBE Account
            </button>
        </div>

        {/* Sign-in Link */}
        <div className="text-center text-sm text-gray-600 mt-5">
          Already have an account?{' '}
          <Link to="/" className="text-yellow-700 font-semibold hover:underline transition">Sign in</Link>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-600 mt-4">
        <span className="text-gray-600 font-semibold">Registration</span> requires approval from your branch manager.
      </div>
      <div className="text-xs text-gray-600 mt-1">
        &copy; {new Date().getFullYear()} Commercial Bank of Ethiopia. All rights reserved.
      </div>
    </div>
  );
};

export default EmployeeRegister;
