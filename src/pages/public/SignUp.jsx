import React, { useState } from 'react'
import { Logo } from '../../components/utils/Icons';
import { useNavigate } from 'react-router-dom';

function SignUp() {
   const [planType, setPlanType] = useState("personal");
  const [name, setName] = useState("");
  const navigate = useNavigate()
  const gotoLogin =()=> navigate('/login')
  return (
    <>
    <div className="flex justify-between items-center mx-4">
      <div className='flex '>
          <div className="flex justify-start items-start ps-5 mt-5"><Logo/></div>
         <p className='font-bold text-[30px] mt-5 ps-5 text-red-800'>Vercel</p>
      </div>
           
        {/* Sign Up button (top-right corner) */}
        <button
        onClick={gotoLogin}
        className="absolute top-6 right-6 p-4  py-2bg-gray-900 text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition">
            Log In
          </button>
        </div>
         <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 bg-[#111] rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-2">
          Your first deploy
        </h2>
        <p className="text-center text-gray-400 mb-6">
          is just a sign-up away.
        </p>

        {/* Plan Type Section */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">
            Plan Type
          </label>

          <div className="space-y-3">
            {/* Personal Project Option */}
            <div
              onClick={() => setPlanType("personal")}
              className={`flex justify-between items-center border rounded-xl p-4 cursor-pointer transition ${
                planType === "personal"
                  ? "border-blue-500 bg-[#1c1c1c]"
                  : "border-gray-600"
              }`}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={planType === "personal"}
                  onChange={() => setPlanType("personal")}
                  className="accent-blue-500"
                />
                <span>I’m working on personal projects</span>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  planType === "personal"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                Hobby
              </span>
            </div>

            {/* Commercial Project Option */}
            <div
              onClick={() => setPlanType("commercial")}
              className={`flex justify-between items-center border rounded-xl p-4 cursor-pointer transition ${
                planType === "commercial"
                  ? "border-blue-500 bg-[#1c1c1c]"
                  : "border-gray-600"
              }`}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={planType === "commercial"}
                  onChange={() => setPlanType("commercial")}
                  className="accent-blue-500"
                />
                <span>I’m working on commercial projects</span>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  planType === "commercial"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                Pro
              </span>
            </div>
          </div>
        </div>

        {/* Input Field */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">
            {planType === "personal" ? "Your Name" : "Team Name"}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={
              planType === "personal"
                ? "Enter your name"
                : "Enter your team name"
            }
            className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Continue Button */}
        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 rounded-lg transition">
          Continue
        </button>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By joining, you agree to our{" "}
          <a href="#" className="text-blue-400 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-400 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
    </>
  )
}

export default SignUp;