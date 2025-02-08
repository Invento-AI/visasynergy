"use client";

import { useState, useEffect } from "react";
import "@fontsource/asap-condensed";
import "@fontsource/albert-sans";
import "@fontsource/asap-condensed";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../components/ui/select";
import { Button } from "../../components/ui/button";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import Footer from "@/components/Footer";

const newsData = [
  {
    id: 1,
    title: "Canada Introduces Faster Visa Processing for Skilled Workers",
    description:
      "The Canadian government has implemented new policies to expedite visa approvals for skilled professionals, reducing processing times significantly...",
    image: "/Images_news/news1.jpg",
  },
  {
    id: 2,
    title: "New Immigration Pathways Announced",
    description:
      "Authorities have launched new pathways for professionals looking to settle in various countries...",
    image: "/Images_news/news2.jpg",
  },
  {
    id: 3,
    title: "Travel Restrictions Updated for 2025",
    description:
      "Recent changes in travel restrictions impact visa applications for multiple regions...",
    image: "/Images_news/news3.jpg",
  },
  {
    id: 4,
    title: "Visa Interview Process Simplified",
    description:
      "Government authorities have introduced new procedures to simplify visa interviews...",
    image: "/Images_news/news4.jpg",
  },
  {
    id: 5,
    title: "Canada Introduces Faster Visa Processing for Skilled Workers",
    description:
      "The Canadian government has implemented new policies to expedite visa approvals for skilled professionals, reducing processing times significantly...",
    image: "/Images_news/news1.jpg",
  },
  {
    id: 6,
    title: "New Immigration Pathways Announced",
    description:
      "Authorities have launched new pathways for professionals looking to settle in various countries...",
    image: "/Images_news/news2.jpg",
  },
  {
    id: 7,
    title: "Travel Restrictions Updated for 2025",
    description:
      "Recent changes in travel restrictions impact visa applications for multiple regions...",
    image: "/Images_news/news3.jpg",
  },
  {
    id: 8,
    title: "Visa Interview Process Simplified",
    description:
      "Government authorities have introduced new procedures to simplify visa interviews...",
    image: "/Images_news/news4.jpg",
  },
  {
    id: 9,
    title: "Canada Introduces Faster Visa Processing for Skilled Workers",
    description:
      "The Canadian government has implemented new policies to expedite visa approvals for skilled professionals, reducing processing times significantly...",
    image: "/Images_news/news1.jpg",
  },
  {
    id: 10,
    title: "New Immigration Pathways Announced",
    description:
      "Authorities have launched new pathways for professionals looking to settle in various countries...",
    image: "/Images_news/news2.jpg",
  },
  {
    id: 11,
    title: "Travel Restrictions Updated for 2025",
    description:
      "Recent changes in travel restrictions impact visa applications for multiple regions...",
    image: "/Images_news/news3.jpg",
  },
  {
    id: 12,
    title: "Visa Interview Process Simplified",
    description:
      "Government authorities have introduced new procedures to simplify visa interviews...",
    image: "/Images_news/news4.jpg",
  },
];

export default function NewsPage() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div>
      <div className="bg-white hidden md:block">
        <Navbar />

        <h1 className="text-5xl font-bold mb-4 text-center text-[#3b4f84] mt-10">
          Stay Updated with the Latest Immigration & Visa News
        </h1>
        <p className="text-2xl text-black font-albert mb-6 text-center">
          Your go-to source for the latest visa policies, immigration updates,
          and travel regulations worldwide.
        </p>

        <div className="relative flex w-full h-[80%] px-10 py-8">
          {/* Custom Cursor */}
          <div
            className={`fixed w-24 h-24 z-30 flex items-center justify-center bg-black text-white text-xs uppercase font-bold rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300 ${
              cursorVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          >
            Read More
          </div>

          {/* Left: Scrollable News Section */}
          <div className="w-2/3 h-full overflow-y-auto pr-6">
            <div className="grid grid-cols-2 gap-6 my-8">
              {newsData.map((news) => (
                <div
                  key={news.id}
                  className="group bg-gray-100 font-albert shadow-md rounded-xl p-5 transform transition duration-300 ease-in-out hover:-translate-y-2 flex flex-col justify-between h-full relative cursor-pointer"
                  onMouseEnter={() => setCursorVisible(true)}
                  onMouseLeave={() => setCursorVisible(false)}
                >
                  <div>
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={news.image}
                        alt={news.title}
                        width={500}
                        height={300}
                        className="w-full h-52 object-cover transform transition duration-300 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <h2 className="text-lg font-semibold mt-3 text-[#3b4f84]">
                      {news.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{news.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Fixed Enquiry Form with Connect Section */}
          <div className="w-1/3 h-fit sticky top-8">
            <div className="w-full h-2/3 mt-8 top-8 bg-gray-100 ml-4 shadow-md rounded-xl p-6">
              <h2 className="text-xl text-center font-bold mb-4 text-[#3b4f84] font-albert">
                Quick Enquiry
              </h2>

              {/* Form Inside Modal */}
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="first-name"
                      className="font-albert font-bold"
                    >
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="first-name"
                      className="font-albert bg-white border-gray-300"
                      placeholder="Enter Your First Name"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="last-name"
                      className="font-albert font-bold"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="last-name"
                      className="font-albert bg-white border-gray-300"
                      placeholder="Enter Your Last Name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-albert font-bold">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    className="font-albert bg-white border-gray-300"
                    type="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="mobile" className="font-albert font-bold">
                    Mobile Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="mobile"
                    className="font-albert bg-white border-gray-300"
                    type="tel"
                    placeholder="Enter Your Mobile Number"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="first-name"
                      className="font-albert font-bold"
                    >
                      Country <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="font-albert border-gray-300 text-gray-600">
                        <SelectValue
                          placeholder="Select A Country"
                          className="placeholder-albert"
                        />
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
                          <SelectItem value="new-zealand">
                            New Zealand
                          </SelectItem>
                        </span>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label
                      htmlFor="last-name"
                      className="font-albert font-bold"
                    >
                      Visa Category <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="font-albert border-gray-300 text-gray-600">
                        <SelectValue
                          placeholder="Select Your Visa Type"
                          className="placeholder-albert"
                        />
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

                <Button
                  type="submit"
                  className="w-full mt-4 bg-[#3b4f84] text-white py-3 text-lg font-albert hover:text-[#3b4f84] hover:bg-white hover:border-2 hover:border-[#3b4f84] transition duration-700"
                >
                  Start Your Journey
                </Button>
              </form>
            </div>

            {/* Connect With Us Section */}
            <div className="mt-8 text-center sticky">
              <h3 className="text-4xl font-bold text-[#3b4f84] font-asap">
                Connect with Us
              </h3>
              <div className="flex justify-center space-x-12 mt-10">
                <a
                  href="#"
                  className="text-[#3b4f84] text-6xl hover:text-gray-600 transition rounded-xl"
                >
                  <FaFacebookF className="p-3 bg-blue-600 text-white rounded-xl" />
                </a>
                <a
                  href="#"
                  className="text-[#3b4f84] text-6xl hover:text-gray-600 transition "
                >
                  <FaInstagram className="p-3 bg-pink-500 text-white rounded-xl" />
                </a>
                <a
                  href="#"
                  className="text-[#3b4f84] text-6xl hover:text-gray-600 transition "
                >
                  <FaWhatsapp className="p-3 bg-green-500 text-white rounded-xl" />
                </a>
                <a
                  href="#"
                  className="text-[#3b4f84] text-6xl hover:text-gray-600 transition "
                >
                  <FaLinkedinIn className="p-3 bg-blue-700 text-white rounded-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <div className="bg-white black md:hidden">
        <Navbar />

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#3b4f84] mt-10 px-4">
          Stay Updated with the Latest Immigration & Visa News
        </h1>
        <p className="text-lg md:text-2xl text-black font-albert mb-6 text-center px-4">
          Your go-to source for the latest visa policies, immigration updates,
          and travel regulations worldwide.
        </p>

        <div className="relative flex flex-col md:flex-row w-full px-4 md:px-10 py-8">
          {/* Custom Cursor */}
          <div
            className={`fixed w-24 h-24 z-30 flex items-center justify-center bg-black text-white text-xs uppercase font-bold rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300 ${
              cursorVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          >
            Read More
          </div>

          {/* Left: Scrollable News Section */}
          <div className="w-full md:w-2/3 overflow-y-auto pr-0 md:pr-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
              {newsData.map((news) => (
                <div
                  key={news.id}
                  className="group bg-gray-100 font-albert shadow-md rounded-xl p-5 transform transition duration-300 ease-in-out hover:-translate-y-2 flex flex-col justify-between h-full relative cursor-pointer"
                  onMouseEnter={() => setCursorVisible(true)}
                  onMouseLeave={() => setCursorVisible(false)}
                >
                  <div>
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={news.image}
                        alt={news.title}
                        width={500}
                        height={300}
                        className="w-full h-52 object-cover transform transition duration-300 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <h2 className="text-lg font-semibold mt-3 text-[#3b4f84]">
                      {news.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{news.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick Enquiry Form (Hidden on Mobile) */}
          <div className="hidden md:block w-1/3 h-fit sticky top-8">
            <div className="w-full bg-gray-100 ml-4 shadow-md rounded-xl p-6">
              <h2 className="text-xl text-center font-bold mb-4 text-[#3b4f84] font-albert">
                Quick Enquiry
              </h2>
              <Button className="w-full bg-[#3b4f84] text-white py-3 text-lg font-albert">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>

        {/* Connect With Us Section */}
        <div className=" text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-[#3b4f84] font-asap">
            Connect with Us
          </h3>
          <div className="flex justify-center space-x-6 md:space-x-12 mt-6 md:mt-10">
            <a
              href="#"
              className="text-[#3b4f84] text-4xl md:text-6xl hover:text-gray-600 transition rounded-xl"
            >
              <FaFacebookF className="p-3 bg-blue-600 text-white rounded-xl" />
            </a>
            <a
              href="#"
              className="text-[#3b4f84] text-4xl md:text-6xl hover:text-gray-600 transition"
            >
              <FaInstagram className="p-3 bg-pink-500 text-white rounded-xl" />
            </a>
            <a
              href="#"
              className="text-[#3b4f84] text-4xl md:text-6xl hover:text-gray-600 transition"
            >
              <FaWhatsapp className="p-3 bg-green-500 text-white rounded-xl" />
            </a>
            <a
              href="#"
              className="text-[#3b4f84] text-4xl md:text-6xl hover:text-gray-600 transition"
            >
              <FaLinkedinIn className="p-3 bg-blue-700 text-white rounded-xl" />
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}