import React from "react";
import "@fontsource/roboto-slab";
import "@fontsource/albert-sans";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Information Navbar */}
      <nav className="bg-[#51868e] text-white px-6 py-2 flex justify-end items-center text-sm">
        <div>📞 +91 99858 58655 | ✉️ info@visasynergy.com</div>
      </nav>

      {/* Main Navbar */}
      <nav className="bg-white text-black px-6 py-3 flex justify-between items-center shadow-md" style={{ fontFamily: 'Albert Sans' }}>
        <div className="text-2xl font-bold">VISA SYNERGY</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">News</a>
          <a href="#" className="hover:underline">Blogs</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Dashboard</a>
          <button className="px-4 py-2 bg-[#51868e] text-white rounded-md hover:bg-transparent hover:text-[#51868e] transition duration-300">
            Check Eligibility
          </button>
        </div>
      </nav>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for content visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Roboto Slab' }}>
          Your Gateway to a <span className="text-blue-400">New Beginning</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Simplifying Immigration and Visa Processes for a World of Opportunities
        </p>

        {/* Country Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          {['USA', 'AUSTRALIA', 'CANADA', 'EUROPE', 'NEW ZEALAND'].map((country) => (
            <button
              key={country}
              className="px-4 py-2 bg-transparent text-white border border-white rounded-lg shadow-md hover:bg-white hover:text-blue-900 transition duration-300"
            >
              {country}
            </button>
          ))}
        </div>

        {/* Immigration Journey Text */}
        <p className="text-xl md:text-2xl mb-6">
          Start Your Immigration Journey Today!
        </p>

        {/* Quick Enquiry Button */}
        <button className="px-6 py-3 bg-[#51868e] text-white rounded-full text-xl shadow-lg hover:bg-transparent hover:text-white transition duration-300">
          Quick Enquiry
        </button>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2 text-white">
        <a href="#" className="hover:text-[#51868e]">LinkedIn</a>
        <a href="#" className="hover:text-[#51868e]">Facebook</a>
        <a href="#" className="hover:text-[#51868e]">Instagram</a>
        <a href="#" className="hover:text-[#51868e]">WhatsApp</a>
      </div>
    </div>
  );
}
