"use client";
import { useState } from "react";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import animation from "../../../public/email.gif";
import "@fontsource/asap-condensed";
import "@fontsource/albert-sans";
import "@fontsource/asap-condensed";
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Menu, X } from "lucide-react";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navbar */}
      <header className="hidden md:flex relative top-0 left-0 right-0 justify-between items-center p-2 bg-primary text-white z-30">
        <div className="ml-auto flex space-x-6 mr-6">
          <span className="flex w-100 mr-6">
            <Image className="mr-2" src="/call.png" alt="call" width={20} height={20} /> +1 234 567 890
          </span>
          <span className="flex w-100 mr-6">
            <Image className="mr-2" src="/email.png" alt="email" width={25} height={20} /> contact@visasynergy.com
          </span>
        </div>
      </header>


      {/* Navigation Bar */}
      {/* <header className="relative left-0 right-0 flex justify-between items-center p-2 bg-white shadow-md text-gray-700 z-20">
        <div className="flex items-center">
          <Image src="/logo.png" width={150} height={10} alt="Visa Synergy Logo" />
        </div>
        <nav className="ml-auto mr-12 space-x-12 flex text-xl font-bold font-albert">
          <Link href={"/about"}>About</Link>
          <Link href={"/news"}>News</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/contact"}>Contact Us</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
        </nav>
        <Button className="ml-4 mr-6 text-white border-2 hover:bg-white hover:text-[#51868e] border-[#51868e] hover:border-2 transition duration-700">
          Start Assessment
        </Button>
      </header> */}
      <header className="relative left-0 right-0 flex justify-between items-center bg-white text-gray-700 z-20 p-2">
      <div className="flex items-center">
        {/* Adjust logo size for mobile screens */}
        <Image
          src="/logo.png"
          width={150} // Desktop size
          height={10}
          alt="Visa Synergy Logo"
          className="w-[120px] md:w-[150px]" // Smaller logo for mobile
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex ml-auto mr-12 space-x-12 text-xl font-bold font-albert ">
        <Link href={"/about"}>About</Link>
        <Link href={"/news"}>News</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <Link href={"/contact"}>Contact Us</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
      </nav>

      <Button className="hidden md:block ml-4 mr-6 text-white border-2 font-albert text-lg md:py-0 font-bold  hover:bg-white hover:text-[#51868e] border-[#51868e] hover:border-2 transition duration-700">
        Start Assessment
      </Button>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-full bg-white shadow-lg flex flex-col items-center space-y-6 py-4 md:hidden">
          <Link href={"/about"} className="text-lg font-albert">About</Link>
          <Link href={"/news"} className="text-lg font-albert">News</Link>
          <Link href={"/blogs"} className="text-lg font-albert">Blogs</Link>
          <Link href={"/contact"} className="text-lg font-albert">Contact Us</Link>
          <Link href={"/dashboard"} className="text-lg font-albert">Dashboard</Link>
          <Button className="w-3/4 text-white border-2 hover:bg-white font-albert hover:text-[#51868e] border-[#51868e] transition duration-700">
            Start Assessment
          </Button>
        </div>
      )}
    </header>


      {/* ###################################################################################################################################### */}
      {/* ###################################################################################################################################### */}

      {/* Contact Section */}
<main className="px-4 md:px-12 lg:px-16 mx-auto max-w-7xl">
  <h1 className="text-3xl md:text-5xl font-bold text-center text-[#3B4F84] mt-8 md:mt-12">
    Get in Touch – Your Journey Starts Here!
  </h1>
  <p className="text-center text-black mt-2 text-lg md:text-2xl font-albert">
    Have questions about your visa application? Our experts are ready to assist you every step of the way.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-10 md:mt-12 items-center">
    
    {/* Image Section */}
    <div className="flex justify-center">
      <Image 
        src="/contact_girl.png" 
        alt="Contact Us" 
        width={500} 
        height={500} 
        className="w-full max-w-[400px] md:max-w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Contact Form */}
    <div className="space-y-4 p-6 md:p-8 bg-[#edf3f5] rounded-md">
      <h2 className="text-2xl font-albert text-[#ff5f00]">Get in touch</h2>
      <p className="font-albert">We're here to help. Send us a message & we will respond within 24 hours.</p>
      <hr className="border-[#51868e] border-1" />

      <form className="space-y-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="first-name" className="font-albert font-bold">First Name <span className="text-red-500">*</span></Label>
            <Input id="first-name" className="font-albert mt-2 border-gray-300 bg-white w-full" placeholder="Enter Your First Name" required />
          </div>
          <div>
            <Label htmlFor="last-name" className="font-albert font-bold">Last Name <span className="text-red-500">*</span></Label>
            <Input id="last-name" className="font-albert mt-2 border-gray-300 bg-white w-full" placeholder="Enter Your Last Name" required />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="font-albert font-bold">Email <span className="text-red-500">*</span></Label>
          <Input id="email" className="font-albert mt-2 border-gray-300 bg-white w-full" type="email" placeholder="Enter Your Email" required />
        </div>

        <div>
          <Label htmlFor="mobile" className="font-albert font-bold">Mobile Number <span className="text-red-500">*</span></Label>
          <Input id="mobile" className="font-albert mt-2 border-gray-300 bg-white w-full" type="tel" placeholder="Enter Your Mobile Number" required />
        </div>

        <div>
          <Label htmlFor="program" className="font-albert font-bold">Program You Are Interested In <span className="text-red-500">*</span></Label>
          <Select>
            <SelectTrigger className="font-albert mt-2 w-full">
              <SelectValue placeholder="Select Your Program" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usa">USA</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="australia">Australia</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="new-zealand">New Zealand</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="font-albert font-bold">How can we assist you? <span className="text-red-500">*</span></Label>
          <Textarea id="message" className="font-albert mt-2 bg-white border-gray-300 w-full" placeholder="Type your message here" required />
          <p className="text-sm font-albert text-gray-600 mt-1">Briefly describe your visa query, and our experts will get back to you soon</p>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="terms" className="accent-[#51868e]" required />
          <Label htmlFor="terms" className="font-albert text-sm">
            I accept the <a href="#" className="text-[#51868e] underline">terms and conditions</a>.
          </Label>
        </div>

        <Button className="w-full bg-[#51868e] border-2 border-gray-100 text-white text-lg hover:bg-transparent hover:text-[#51868e] hover:border-[#51868e] font-albert">
          Submit Enquiry
        </Button>

      </form>

    </div>

  </div>



        {/* #################################################################################################################################### */}
        {/* #################################################################################################################################### */}
        
        <section className="py-12 md:py-16 mt-6 bg-white text-gray-900">
  <div className="container mx-auto px-4 md:px-6 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Column - Office Info */}
      <div className="text-left">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#3B4F84] max-w-xl"
          style={{ fontFamily: "Asap Condensed" }}
        >
          Visit Our Office – Let’s Meet in Person!
        </h2>
        <p className="text-lg text-[#404040] mt-2" style={{ fontFamily: "Albert Sans" }}>
          Visit us at our office for a face-to-face consultation.
        </p>

        {/* Office Details */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Our Office Location</h3>
          <div className="mt-4 flex items-start">
            <Image className="mr-2" src="/location.png" alt="Location" width={24} height={24} />
            <p className="text-lg font-semibold">Visa Synergy Office – New York, USA</p>
          </div>
          <p className="text-[#404040] pl-8 mt-2">
            Visa Synergy Consultancy
            <br />
            123 Global Avenue, Suite 456,
            <br />
            Midtown Manhattan, Near Times Square,
            <br />
            New York, NY 10001, USA
          </p>
        </div>

        {/* Business Hours */}
        <div className="mt-4">
          <div className="flex items-start">
            <Image className="mr-2" src="/time.png" alt="Business Hours" width={24} height={24} />
            <p className="text-lg font-semibold">
              Business Hours: <span className="ml-2">Monday – Friday | 9 AM – 6 PM</span>
            </p>
          </div>
        </div>

        {/* Get Directions Button */}
        <button
          className="mt-6 px-6 py-3 bg-[#51868e] w-full md:w-[350px] text-white rounded-md hover:bg-white border-2 hover:text-[#51868e] transition duration-700"
          onClick={() => window.location.href = 'https://www.google.com/maps/place/Kalapi/@22.5518622,72.9406648,21z'}
        >
          Get Direction
        </button>
      </div>

      {/* Right Column - Map */}
      <div className="flex justify-center md:justify-end">
        <Image
          src="/map.png"
          alt="Office Location Map"
          width={600}
          height={400}
          className="transition-transform duration-700 transform hover:scale-95 shadow-md border-8 border-white rounded-md w-full max-w-lg md:max-w-xl"
        />
      </div>
    </div>
  </div>
</section>

        {/* #################################################################################################################################### */}
        {/* #################################################################################################################################### */}
        
      </main>

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
  );
}
