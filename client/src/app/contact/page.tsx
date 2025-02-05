"use client";
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
      <main className="px-16 mx-auto">
        <h1 className="text-5xl font-bold text-center text-[#3B4F84] mt-12">Get in Touch – Your Journey Starts Here!</h1>
        <p className="text-center text-black mt-2 text-2xl font-albert" >Have questions about your visa application? Our experts are ready to assist you every step of the way</p>

        <div className="grid md:grid-cols-2 gap-16 mt-12 items-stretch">
          {/* Grid:1 */}
          <div className="flex flex-col space-y-10">

            <div className="flex-1">
                <Image src="/contact_girl.png" alt="Contact Us" width={500} height={500} className='w-full h-full object-cover rounded-md' />
            </div>

            <div className="flex items-center space-x-4 p-4 bg-[#edf3f5] rounded-md  font-albert">
                <div className="p-2 bg-white rounded-full">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#51868e]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75M21.75 6.75A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25M21.75 6.75l-9.75 6-9.75-6" />
                </svg> */}
                <img src="/email.gif" alt="email" className="w-12 h-10 mx-auto mb-3 " />
                </div>
                <div>
                <p className="font-bold">Email</p>
                <p className="text-gray-600">info@visasynergy.com</p>
                </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-[#edf3f5] rounded-md  font-albert">
                <div className="p-2 bg-white rounded-full">
                <img src="/call.gif" alt="phone" className="w-12 h-10 mx-auto mb-3" />
                </div>
                <div>
                <p className="font-bold">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
            </div>

            </div>

          {/* Grid:2 Contact Form */}
          <div className="space-y-4 p-8 bg-[#edf3f5] rounded-md">
            <h2 className="text-2xl font-albert text-[#ff5f00]">Get in touch</h2>
            <p className='font-albert'>We're here to help. Send us a message & we will respond within 24 hours.</p>

            <hr className="border-[#51868e] border-1" />

            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="first-name" className="font-albert font-bold">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="first-name" className="font-albert mt-2 border-gray-300 bg-white" placeholder="Enter Your First Name" required />
                  </div>
                  <div>
                    <Label htmlFor="last-name" className="font-albert font-bold">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="last-name" className="font-albert mt-2 border-gray-300 bg-white" placeholder="Enter Your Last Name" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-albert font-bold">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" className="font-albert mt-2 border-gray-300 bg-white" type="email" placeholder="Enter Your Email" required />
                </div>

                <div>
                  <Label htmlFor="mobile" className="font-albert font-bold">
                    Mobile Number <span className="text-red-500">*</span>
                  </Label>
                  <Input id="mobile" className="font-albert mt-2 border-gray-300 bg-white" type="tel" placeholder="Enter Your Mobile Number" required />
                </div>

                <div>
                  <Label htmlFor="program" className="font-albert font-bold">
                    Program You Are Interested In <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="font-albert mt-2">
                      {/* <SelectValue placeholder="Select Your Program" className="placeholder-albert"/> */}
                      <span className="font-albert text-gray-700">
                        <SelectValue placeholder="Select Your Program"/>
                      </span>
                    </SelectTrigger>
                    <SelectContent>
                    <span className="font-albert text-gray-400">
                      <SelectItem className="font-albert text-gray-400" value="usa">USA</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="new-zealand">New Zealand</SelectItem>
                    </span>
                    </SelectContent>
                  </Select>
                </div>

                <div className="">
                    <Label htmlFor="program" className="font-albert font-bold">
                        How can we assist you? <span className="text-red-500">*</span>
                    </Label>
                    <Textarea className='font-albert mt-2 bg-white border-gray-300' placeholder="Type your message here"/>
                    <p className='text-sm font-albert text-gray-600 mt-1'>Briefly describe your visa query, and our experts will get back to you soon</p>
                </div>

                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="accent-[#51868e]" required />
                    <Label htmlFor="terms" className="font-albert text-sm">
                        I accept the <a href="#" className="text-[#51868e] underline">terms and conditions</a>.
                    </Label>
                </div>
                
                <Button className="w-full bg-[#51868e] border-2 border-gray-100 text-white text-lg hover:bg-transparent hover:text-[#51868e] hover:border-[#51868e] font-albert">Submit Enquiry</Button>

              </form>

          </div>

        </div>

        {/* #################################################################################################################################### */}
        {/* #################################################################################################################################### */}
        
        
        {/* #################################################################################################################################### */}
        {/* #################################################################################################################################### */}

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
        
      </main>
    </div>
  );
}
