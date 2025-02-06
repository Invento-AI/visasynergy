"use client";
import OfficeInfo from "@/components/OfficeInfo";

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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
        
      {/* Top Navbar */}
      <header className="relative top-0 left-0 right-0 flex justify-between items-center p-2 bg-primary text-white z-30">
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
      <header className="relative left-0 right-0 flex justify-between items-center p-2 bg-white text-gray-700 z-20">
        <div className="flex items-center">
          <Image src="/logo.png" width={150} height={10} alt="Visa Synergy Logo" />
        </div>
        <nav className="ml-auto mr-12 space-x-12 flex text-xl font-albert">
          <Link href={"/about"}>About</Link>
          <Link href={"/news"}>News</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/contact"} className='text-[#51868e] underline'>Contact Us</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
        </nav>
        <Button className="ml-4 mr-6 text-white border-2 hover:bg-white hover:text-[#51868e] border-[#51868e] hover:border-2 transition duration-700">
          Start Assessment
        </Button>
      </header>

      {/* ###################################################################################################################################### */}
      {/* ###################################################################################################################################### */}

      {/* Contact Section */}
      <main className="px-4 md:px-16 mx-auto max-w-screen-xl">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#3B4F84] mt-8 md:mt-12">
        Get in Touch – Your Journey Starts Here!
      </h1>
      <p className="text-center text-black mt-2 text-lg md:text-2xl font-albert">
        Have questions about your visa application? Our experts are ready to assist you every step of the way.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-12 items-stretch">
        {/* Image Section */}
        <div className="flex flex-col space-y-6">
          <div className="w-full">
            <Image src="/contact_girl.png" alt="Contact Us" width={500} height={500} className='w-full h-auto object-cover rounded-md' />
          </div>

          {/* Email and Phone Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-[#edf3f5] rounded-md font-albert">
              <div className="p-2 bg-white rounded-full">
                <img src="/email.gif" alt="email" className="w-10 h-10" />
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-gray-600 text-sm md:text-base">info@visasynergy.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-[#edf3f5] rounded-md font-albert">
              <div className="p-2 bg-white rounded-full">
                <img src="/call.gif" alt="phone" className="w-10 h-10" />
              </div>
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-gray-600 text-sm md:text-base">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 md:p-8 bg-[#edf3f5] rounded-md">
          <h2 className="text-xl md:text-2xl font-bold text-[#ff5f00] font-albert">Get in touch</h2>
          <p className='text-sm md:text-base font-albert'>We're here to help. Send us a message & we will respond within 24 hours.</p>
          <hr className="border-[#51868e] border-1 my-4" />

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="first-name" className="font-bold text-sm md:text-base">First Name <span className="text-red-500">*</span></Label>
                <Input id="first-name" className="mt-2 border-gray-300 bg-white" placeholder="Enter Your First Name" required />
              </div>
              <div>
                <Label htmlFor="last-name" className="font-bold text-sm md:text-base">Last Name <span className="text-red-500">*</span></Label>
                <Input id="last-name" className="mt-2 border-gray-300 bg-white" placeholder="Enter Your Last Name" required />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="font-bold text-sm md:text-base">Email <span className="text-red-500">*</span></Label>
              <Input id="email" className="mt-2 border-gray-300 bg-white" type="email" placeholder="Enter Your Email" required />
            </div>

            <div>
              <Label htmlFor="mobile" className="font-bold text-sm md:text-base">Mobile Number <span className="text-red-500">*</span></Label>
              <Input id="mobile" className="mt-2 border-gray-300 bg-white" type="tel" placeholder="Enter Your Mobile Number" required />
            </div>

            <div>
              <Label htmlFor="program" className="font-bold text-sm md:text-base">Program You Are Interested In <span className="text-red-500">*</span></Label>
              <Select>
                <SelectTrigger className="mt-2">
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
              <Label htmlFor="message" className="font-bold text-sm md:text-base">How can we assist you? <span className="text-red-500">*</span></Label>
              <Textarea id="message" className="mt-2 bg-white border-gray-300" placeholder="Type your message here" />
              <p className='text-sm text-gray-600 mt-1'>Briefly describe your visa query, and our experts will get back to you soon.</p>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="accent-[#51868e]" required />
              <Label htmlFor="terms" className="text-sm">I accept the <a href="#" className="text-[#51868e] underline">terms and conditions</a>.</Label>
            </div>

            <Button className="w-full bg-[#51868e] text-white text-lg hover:bg-transparent hover:text-[#51868e] border-2 hover:border-[#51868e]">
              Submit Enquiry
            </Button>
          </form>
        </div>
      </div>

        {/* #################################################################################################################################### */}
        {/* #################################################################################################################################### */}
        
        <section className="py-16 mt-6 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 gap-12 items-center">
          {/* Left Column - Office Info */}
          <OfficeInfo />
          {/* Right Column - Map */}
          <Image
            src="/map.png"
            alt="Office Location Map"
            width={730}
            height={444}
            className="transition-transform duration-700 transform hover:scale-95 shadow-md border-[15px] border-white"
          />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col space-y-8 items-center text-center">
          {/* <h2 className="text-3xl font-bold text-[#3B4F84] w-full" style={{ fontFamily: "Asap Condensed" }}>
            Visit Our Office – Let’s Meet in Person!
          </h2>
          <p className="text-lg text-[#404040]" style={{ fontFamily: "albert sans" }}>
            Visit us at our office for a face-to-face consultation.
          </p> */}
          
          {/* Office Details */}
          <OfficeInfo />
          
          {/* Map Image */}
          <Image
            src="/map.png"
            alt="Office Location Map"
            width={350}
            height={250}
            className="shadow-md border-8 border-white"
          />
        </div>
      </div>
    </section>

        {/* #################################################################################################################################### */}
        {/* #################################################################################################################################### */}
        
      </main>

      <footer
            className="bg-[#4E878C] text-white py-10 font-albert"
        >
            <div className="container mx-auto px-6 grid grid-cols-[40%_60%] gap-8">
            {/* Logo and Social Icons - 40% */}
            <div>
                <img
                src="/logo-white.jpg"
                alt="Visa Synergy"
                className="w-36 mb-4 rounded-lg"
                />
                <p className="text-sm">
                At Visa Synergy, We Simplify Your Journey and Open Doors to New
                Opportunities
                </p>
                <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white text-xl hover:text-gray-300">
                    <FaWhatsapp size={24} />
                </a>
                <a href="#" className="text-white text-xl hover:text-gray-300">
                    <FaInstagram size={24} />
                </a>
                <a href="#" className="text-white text-xl hover:text-gray-300">
                    <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-white text-xl hover:text-gray-300">
                    <FaFacebook size={24} />
                </a>
                </div>
            </div>

            {/* Other Sections - 60% (Equally Divided) */}
            <div className="grid grid-cols-3 gap-10">
                {/* Quick Links */}
                <div>   
                <h3
                    className="font-semibold text-2xl mb-4 font-asap"
                >
                    Quick Links
                </h3>
                <ul className="space-y-4 text-sm mt-7 underline">
                    <li>
                    <a href="#">About Us</a>
                    </li>
                    <li>
                    <a href="#">Eligibility Calculator</a>
                    </li>
                    <li>
                    <a href="#">Blog & Resources</a>
                    </li>
                    <li>
                    <a href="#">Contact Us</a>
                    </li>
                    <li>
                    <a href="#">Dashboard</a>
                    </li>
                    <li>
                    <a href="#">News</a>
                    </li>
                </ul>
                </div>

                {/* Visa Quick Links */}
                <div>
                <h3
                    className="font-semibold text-2xl mb-4 font-asap"
                >
                    Visa Quick Links
                </h3>
                <ul className="space-y-4 text-sm mt-7 underline">
                    <li>
                    <a href="#">USA Visa</a>
                    </li>
                    <li>
                    <a href="#">Canada Visa</a>
                    </li>
                    <li>
                    <a href="#">Australia Visa</a>
                    </li>
                    <li>
                    <a href="#">Europe Visa</a>
                    </li>
                    <li>
                    <a href="#">New Zealand Visa</a>
                    </li>
                    <li>
                    <a href="#">UK Visa</a>
                    </li>
                </ul>
                </div>

                {/* Contact Details */}
                <div>
                <h3
                    className="font-semibold text-2xl mb-4 font-asap"
                >
                    Contact Details
                </h3>
                <p className="text-sm mt-7">
                    123 Global Avenue, Suite 456, New York, NY 10001, USA
                </p>
                <p className="text-sm mt-2">+1 (555) 123-4567</p>
                <p className="text-sm mt-2">info@visasynergy.com</p>
                </div>
            </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t-2 border-white/50 mt-10 pt-4">
            <p className="container mx-auto px-6 text-left text-md">
                visasynergy.in © 2025, All Rights Reserved
            </p>
            </div>
        </footer>

    </div>
  );
}
