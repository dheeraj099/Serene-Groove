"use client";
import React, { useState } from "react";
import logo from "../../app/assets/sg_logo.png";
import { usePathname, useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Explore", path: "/explore" },
    { label: "Story", path: "/story" },
  ];
  return (
    <>
      <div className="hidden lg:flex lg:w-full lg:items-center lg:justify-between lg:px-52">
        <div className="flex gap-6">
          {navItems.map((item) => (
            <span
              key={item.label}
              className={`text-xl lg:text-base text-text cursor-pointer border-b-2 transition duration-300 ${
                pathname === item.path ? "border-text" : "border-transparent"
              }`}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </span>
          ))}
        </div>
        <img src={logo.src} alt="logo" className="w-20 h-20" /> 
        <button className="text-sm font-semibold bg-accent px-16 rounded-3xl text-white py-2">
          Book Now
        </button>
      </div>

      <div className="flex items-center justify-between p-2 lg:hidden bg-white shadow-md relative">
      <img src={logo.src} alt="logo" className="w-12 h-12" />

      {/* Hamburger / Close Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
        {menuOpen ? (
          // Close (X) Icon
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col items-start gap-4 p-4">
            {navItems.map((item) => (
              <li
                key={item.label}
                onClick={() => {
                  setMenuOpen(false);
                  router.push(item.path);
                }}
                className="text-lg text-gray-800 border-b border-gray-200 w-full pb-2 cursor-pointer"
              >
                {item.label}
              </li>
            ))}
            <button className="text-sm font-semibold bg-accent px-8 py-2 rounded-3xl text-white">
              Book Now
            </button>
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default Header;
