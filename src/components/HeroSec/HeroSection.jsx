import React from "react";
import { Triangle } from "lucide-react"; // You can replace this with your custom Back icon
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate()
  const togodemo =()=>navigate("/demo")
  return (
    <section className="lg:w-[1000px] md:w-[700px] w-[350px] rounded-[10px] mx-auto relative  flex flex-col items-center justify-center text-center h-[700px] overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Gradient grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,1)_80%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-red-700 via-green-700 to-blue-700 opacity-50" />
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-gray-700" />
        ))}
      </div>

      {/* Content */}
      <div className="relative px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Build and deploy on the AI Cloud.
        </h1>
        <p className="text-gray-300 md:w-[600px] mx-auto mb-8">
          Vercel provides the developer tools and cloud infrastructure to build,
          scale, and secure a faster, more personalized web.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition">
            <Triangle size={18} className="fill-black" />
            Start Deploying
          </button>
          <button
          onClick={togodemo}
          className="bg-black text-white border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Get a Demo
          </button>
        </div>
      </div>

      {/* Center Pyramid Icon */}
      <div className="absolute bottom-16">
        <div className="w-24 h-24 bg-gradient-to-t from-black to-transparent relative">
          <div className="absolute inset-0 flex items-end justify-center">
            <Triangle
              size={72}
              className="text-white opacity-80 transform -translate-y-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
