import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";



function Footer() {
  return (
    <div>
            {/* Desktop Footer */}
            <footer className="hidden md:block bg-[#4E878C] text-white py-10 font-albert w-full">
              <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-[1fr_2fr] gap-8 w-full">
                
                {/* Left Section - Logo and Social Icons */}
                <div>
                  <img src="/logo-white.jpg" alt="Visa Synergy" className="w-36 mb-4 rounded-lg" />
                  <p className="text-sm max-w-sm">
                    At Visa Synergy, We Simplify Your Journey and Open Doors to New Opportunities
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-white text-xl hover:text-gray-300"><FaWhatsapp size={24} /></a>
                    <a href="#" className="text-white text-xl hover:text-gray-300"><FaInstagram size={24} /></a>
                    <a href="#" className="text-white text-xl hover:text-gray-300"><FaLinkedin size={24} /></a>
                    <a href="#" className="text-white text-xl hover:text-gray-300"><FaFacebook size={24} /></a>
                  </div>
                </div>
        
                {/* Right Section - Links and Contact */}
                <div className="grid grid-cols-3 gap-10 w-full">
                  
                  {/* Quick Links */}
                  <div>
                    <h3 className="font-semibold text-2xl mb-4 font-asap">Quick Links</h3>
                    <ul className="space-y-4 text-sm mt-7 underline">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Eligibility Calculator</a></li>
                      <li><a href="#">Blog & Resources</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Dashboard</a></li>
                      <li><a href="#">News</a></li>
                    </ul>
                  </div>
        
                  {/* Visa Quick Links */}
                  <div>
                    <h3 className="font-semibold text-2xl mb-4 font-asap">Visa Quick Links</h3>
                    <ul className="space-y-4 text-sm mt-7 underline">
                      <li><a href="#">USA Visa</a></li>
                      <li><a href="#">Canada Visa</a></li>
                      <li><a href="#">Australia Visa</a></li>
                      <li><a href="#">Europe Visa</a></li>
                      <li><a href="#">New Zealand Visa</a></li>
                      <li><a href="#">UK Visa</a></li>
                    </ul>
                  </div>
        
                  {/* Contact Details */}
                  <div>
                    <h3 className="font-semibold text-2xl mb-4 font-asap">Contact Details</h3>
                    <p className="text-sm mt-7">123 Global Avenue, Suite 456, New York, NY 10001, USA</p>
                    <p className="text-sm mt-2">+1 (555) 123-4567</p>
                    <p className="text-sm mt-2">info@visasynergy.com</p>
                  </div>
                </div>
              </div>
        
              {/* Footer Bottom */}
              <div className="border-t-2 border-white/50 mt-10 pt-4 w-full">
                <p className="max-w-[1400px] mx-auto px-6 text-left text-md">
                  visasynergy.in © 2025, All Rights Reserved
                </p>
              </div>
            </footer>
        
        
            {/* Mobile Footer */}
            <footer className="md:hidden bg-[#4E878C] text-white py-10 font-albert w-full">
              <div className="max-w-[500px] mx-auto px-6 flex flex-col items-center text-center w-full">
                
                {/* Logo and Social Icons */}
                <img src="/logo-white.jpg" alt="Visa Synergy" className="w-28 mb-4 rounded-lg" />
                <p className="text-sm max-w-xs">
                  At Visa Synergy, We Simplify Your Journey and Open Doors to New Opportunities
                </p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-white text-xl hover:text-gray-300"><FaWhatsapp size={24} /></a>
                  <a href="#" className="text-white text-xl hover:text-gray-300"><FaInstagram size={24} /></a>
                  <a href="#" className="text-white text-xl hover:text-gray-300"><FaLinkedin size={24} /></a>
                  <a href="#" className="text-white text-xl hover:text-gray-300"><FaFacebook size={24} /></a>
                </div>
        
                {/* Quick Links & Visa Links - Side by Side */}
                <div className="grid grid-cols-2 gap-6 mt-6">
                  
                  {/* Quick Links */}
                  <div>
                    <h3 className="font-semibold text-xl mb-3 font-asap">Quick Links</h3>
                    <ul className="space-y-3 text-xs underline">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Eligibility Calculator</a></li>
                      <li><a href="#">Blog & Resources</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Dashboard</a></li>
                      <li><a href="#">News</a></li>
                    </ul>
                  </div>
        
                  {/* Visa Quick Links */}
                  <div>
                    <h3 className="font-semibold text-xl mb-3 font-asap">Visa Quick Links</h3>
                    <ul className="space-y-3 text-xs underline">
                      <li><a href="#">USA Visa</a></li>
                      <li><a href="#">Canada Visa</a></li>
                      <li><a href="#">Australia Visa</a></li>
                      <li><a href="#">Europe Visa</a></li>
                      <li><a href="#">New Zealand Visa</a></li>
                      <li><a href="#">UK Visa</a></li>
                    </ul>
                  </div>
                </div>
        
                {/* Contact Details - Below the Links */}
                <div className="mt-6">
                  <h3 className="font-semibold text-xl mb-3 font-asap">Contact Details</h3>
                  <p className="text-xs">123 Global Avenue, Suite 456, New York, NY 10001, USA</p>
                  <p className="text-xs mt-2">+1 (555) 123-4567</p>
                  <p className="text-xs mt-2">info@visasynergy.com</p>
                </div>
              </div>
        
              {/* Footer Bottom */}
              <div className="border-t-2 border-white/50 mt-8 pt-4 w-full text-center">
                <p className="text-sm">
                  visasynergy.in © 2025, All Rights Reserved
                </p>
              </div>
            </footer>
    </div>
  )
}

export default Footer