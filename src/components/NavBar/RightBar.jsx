import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { Down, Up } from "../utils/Icons"; // your custom icons
import { useNavigate } from "react-router-dom";

function RightBar() {
  const navigate = useNavigate();

  // Navigation functions
  const gotoLogin = () => navigate("/login");
  const gotoSignup = () => navigate("/signup");

  
  const [isOpen, setIsOpen] = useState(false); // controls mobile menu
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Desktop Buttons */}
      <div className="p-5 lg:flex hidden">
        <button
        onClick={gotoLogin}
        className="px-3 py-1 mx-1 text-white rounded-[10px] cursor-pointer duration-300 hover:bg-gray-700 border-2 border-gray-500">
          Log In
        </button>
        <button className="px-3 py-1 mx-1 text-white rounded-[10px] cursor-pointer duration-300 hover:bg-gray-700 border-2 border-gray-500">
          Contact
        </button>
        <button
          onClick={gotoSignup}
        className="px-5 py-2 mx-1 bg-white text-black text-base rounded-[10px] cursor-pointer transition-colors duration-300 hover:bg-gray-300">
          Sign Up
        </button>
      </div>

      {/* Mobile menu toggle */}
      <div className="flex lg:hidden p-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 md:w-[730px] w-[340px] mx-4 flex flex-col space-y-4 right-0 bg-gray-800 text-white p-5 rounded-lg shadow-lg lg:hidden">
          {/* Products */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown("products")}
            >
              <button>Products</button>
              {openDropdown === "products" ? <Up /> : <Down />}
            </div>
            {openDropdown === "products" && (
              <div className="mt-3 ml-4 space-y-1">
                <div className="font-medium">CI/CD</div>
                <div className="font-medium">Content Delivery</div>
                <div className="font-medium">Fluid Compute</div>
                <div className="font-medium">Observability</div>
                <div className="font-medium">Bot Management</div>
                <div className="font-medium">BotID</div>
                <div className="font-medium">Platform Security</div>
                <div className="font-medium">Web Application Firewall</div>
              </div>
            )}
          </div>

          {/* Resources */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown("resources")}
            >
              <button>Resources</button>
              {openDropdown === "resources" ? <Up /> : <Down />}
            </div>
            {openDropdown === "resources" && (
              <div className="mt-3 ml-4 space-y-1">
                <div className="font-medium">Docs</div>
                <div className="font-medium">Guides</div>
                <div className="font-medium">Tutorials</div>
                <div className="font-medium">Community</div>
              </div>
            )}
          </div>

          {/* Solutions */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown("solutions")}
            >
              <button>Solutions</button>
              {openDropdown === "solutions" ? <Up /> : <Down />}
            </div>
            {openDropdown === "solutions" && (
              <div className="mt-3 ml-4 space-y-1">
                <div className="font-medium">E-commerce</div>
                <div className="font-medium">Portfolio</div>
                <div className="font-medium">SaaS</div>
                <div className="font-medium">Education</div>
              </div>
            )}
          </div>

          {/* Static links */}
          <div><button>Enterprise</button></div>
          <div><button>Docs</button></div>
          <div><button>Pricing</button></div>

          <div className="border-t border-gray-600 my-3"></div>

          {/* Buttons */}
          <button
          onClick={gotoLogin}
          className="px-3 py-1 mx-1 text-white rounded-[10px] cursor-pointer duration-300 hover:bg-gray-700 border-2 border-gray-500">
            Log In
          </button>
          <button className="px-3 py-1 mx-1 text-white rounded-[10px] cursor-pointer duration-300 hover:bg-gray-700 border-2 border-gray-500">
            Contact
          </button>
          <button
            onClick={gotoSignup}
          className="px-5 py-2 mx-1 bg-white text-black text-base rounded-[10px] cursor-pointer transition-colors duration-300 hover:bg-gray-300">
            Sign Up
          </button>
        </div>
      )}
    </>
  );
}

export default RightBar;
