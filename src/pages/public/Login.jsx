import React from "react";
import { Mail, Github, Lock, Users, Globe } from "lucide-react"; // icons from lucide-react
import { Logo } from "../../components/utils/Icons";
import { useNavigate } from "react-router-dom";

function Login() {
    const naviagte = useNavigate()
   const gotoSignup = () => naviagte("/signup");
  return (
    <>
    <div className="flex justify-between items-center mx-4">
       <div className="flex justify-start items-start ps-5 mt-5"><Logo/></div>
    {/* Sign Up button (top-right corner) */}
    <button 
    onClick={gotoSignup}
    className="absolute top-6 right-6 p-4 py-2bg-gray-900 text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition">
        Sign Up
      </button>
    </div>
    <div className="flex items-center justify-center mt-10 min-h-screen bg-black text-white">
     
      <div className="w-full max-w-sm p-8 rounded-2xl bg-[#111] shadow-xl">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-center mb-6">
          Log in to Vercel
        </h2>

        {/* Email input */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 mb-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
        />

        {/* Continue with Email */}
        <button className="w-full py-3 mb-4 bg-gray-100 text-black font-medium rounded-lg hover:bg-gray-300 transition">
          Continue with Email
        </button>

        {/* Divider line */}
        <div className="border-t border-gray-700 mb-4"></div>

        {/* Other Login Options */}
        <button className="w-full flex items-center justify-center gap-2 py-3 mb-3 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
          <Globe className="w-5 h-5 text-red-500" />
          <span>Continue with Google</span>
        </button>

        <button className="w-full flex items-center justify-center gap-2 py-3 mb-3 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
          <Github className="w-5 h-5" />
          <span>Continue with GitHub</span>
        </button>

        <button className="w-full flex items-center justify-center gap-2 py-3 mb-3 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
          <Lock className="w-5 h-5" />
          <span>Continue with SAML SSO</span>
        </button>

        <button className="w-full flex items-center justify-center gap-2 py-3 mb-3 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
          <Users className="w-5 h-5" />
          <span>Continue with Passkey</span>
        </button>

        
        <div className="flex justify-center  space-x-3 items-center text-center">
        <p>Dcon't have an account?</p> <p  
          onClick={gotoSignup}
          className="text-blue-800 underline cursor-pointer"> Sign Up</p>
        </div>
      </div> 
    </div>
      </>
  );
}

export default Login;
