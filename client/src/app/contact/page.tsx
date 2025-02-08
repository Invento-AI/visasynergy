"use client";
import OfficeInfo from "@/components/OfficeInfo";

import React from 'react';
import Link from "next/link";
import "@fontsource/asap-condensed";
import "@fontsource/albert-sans";
import "@fontsource/asap-condensed";
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
        
      <Navbar/>

 {/* ###################################################################################################################################### */}
 {/* ###################################################################################################################################### */}

      {/* Contact Section */}
      <main className="px-4 md:px-0 mx-auto max-w-screen-xl">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#3B4F84] mt-8 md:mt-12">
        Get in Touch – Your Journey Starts Here!
      </h1>
      <p className="text-center text-black mt-2 text-lg md:text-2xl font-albert">
        Have questions about your visa application? Our experts are ready to assist you every step of the way.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-12 items-stretch">
        {/* Image Section */}
        <div className="flex flex-col space-y-6 justify-between">
          <div className="w-full">
            <img src="/contact_girl.png" alt="Contact Us" width={500} height={500} className='w-full h-auto object-cover rounded-md' />
          </div>

          {/* Email and Phone Section */}
          <div className="space-y-4 md:space-y-12">
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

          <form className="space-y-4 font-albert">
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="first-name" className="font-albert font-bold text-sm md:text-base">
                  Country <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="mt-2 font-albert border-gray-300 text-gray-600">
                    <SelectValue placeholder="Select Your Program" className="placeholder-albert"/>
                    {/* <span className="font-albert text-gray-700">
                      <SelectValue placeholder="Select Your Program" />
                    </span> */}
                  </SelectTrigger>
                  <SelectContent>
                  <span className="font-albert text-gray-700">
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="new-zealand">New Zealand</SelectItem>
                  </span>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="last-name" className="font-albert font-bold text-sm md:text-base">
                  Visa Category <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="mt-2 font-albert border-gray-300 text-gray-600">
                    <SelectValue placeholder="Select Your visa type" className="placeholder-albert"/>
                    {/* <span className="font-albert text-gray-700">
                      <SelectValue placeholder="Select Your Program" />
                    </span> */}
                  </SelectTrigger>
                  <SelectContent>
                  <span className="font-albert text-gray-700">
                    <SelectItem value="usa">Work</SelectItem>
                    <SelectItem value="canada">Study</SelectItem>
                    <SelectItem value="australia">Immigration</SelectItem>
                    <SelectItem value="europe">Business</SelectItem>
                    <SelectItem value="new-zealand">Tourist</SelectItem>
                  </span>
                  </SelectContent>
                </Select>
              </div>
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
            <img
              src="/map.png"
              alt="Office Location Map"
              width={730}
              height={444}
              className="transition-transform duration-700 transform hover:scale-95 shadow-md border-[15px] border-white"
            />
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col space-y-8 items-center text-center">
            
            {/* Office Details */}
            <OfficeInfo />
            
            {/* Map Image */}
            <img
              src="/map.png"
              alt="Office Location Map"
              width={350}
              height={250}
              className="shadow-md border-8 border-white"
            />
          </div>
        </div>
      </section>

      </main>
        
 {/* #################################################################################################################################### */}
 {/* #################################################################################################################################### */}

      <Footer/>
      
    </div>
  );
}
