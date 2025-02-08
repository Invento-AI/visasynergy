"use client";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Footer from "@/components/Footer";
import "@fontsource/asap-condensed";
import "@fontsource/albert-sans";
import "@fontsource/asap-condensed";
import Lottie from "lottie-react";
import animation from "@/assets/Animation_passport.json";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import React from "react";

export default function About() {
  const [open, setOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Amit S.",
      desc: "Canada PR Holder",
      feedback:
        "Visa Synergy made my PR process so easy! Their expert guidance and seamless documentation process helped me settle in Canada without stress. From the initial consultation to the final approval, they handled everything with professionalism and care. Thanks to Visa Synergy, I’m now living my dream in Canada!",
      stars: 5,
      image: "/ved.jpg",
    },
    {
      id: 2,
      name: "Sarah L.",
      desc: "Work Permit Approved, Australia",
      feedback:
        "From my first consultation to getting my visa approved, Visa Synergy was there every step of the way. Highly recommended!",
      stars: 5,
      image: "/ved.jpg",
    },
    {
      id: 3,
      name: "John D.",
      desc: "Study Visa Approved, USA",
      feedback:
        "I was overwhelmed with visa formalities, but Visa Synergy simplified everything. Their personalized approach made my study abroad journey smooth! From selecting the right university to preparing my documents and securing my visa, today, I’m studying in my dream country, all thanks to their exceptional support!",
      stars: 5,
      image: "/ved.jpg",
    },
    {
      id: 4,
      name: "Emily R.",
      desc: "Visitor Visa Approved, UK",
      feedback:
        "Visa Synergy's team was extremely supportive and provided expert guidance. I got my visitor visa approved in no time. Highly recommended!",
      stars: 3,
      image: "/ved.jpg",
    },
    // Add more testimonials as needed
  ];

  interface Testimonial {
    stars: number;
    feedback: string;
    image: string;
    name: string;
    desc: string;
  }

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
      <div className="bg-gray-100 p-6 rounded-lg w-[400px] h-[300px] flex flex-col space-y-2 md:space-y-4">

        {/* Stars Section */}
        <div className="flex items-center justify-start space-x-1">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-lg ${index < testimonial.stars ? 'text-yellow-500' : 'text-gray-300'}`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Feedback Section */}
        <p className="text-gray-700 text-sm flex-1">{testimonial.feedback}</p>

        {/* Footer Section (Image, Name, Designation) */}
        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-blue-700 font-semibold text-sm">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm">{testimonial.desc}</p>
          </div>
        </div>
      </div>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleTestimonials =
    testimonials.slice(currentIndex, currentIndex + 3).length < 3
      ? [
          ...testimonials.slice(currentIndex),
          ...testimonials.slice(0, 3 - testimonials.slice(currentIndex).length),
        ]
      : testimonials.slice(currentIndex, currentIndex + 3);
  const steps = [
    {
      id: 1,
      icon: "/mentoring.gif",
      title: "Step 1 - Boarding (Consultation)",
      description:
        "Your journey begins with a consultation. Share your goals, and our experts will create a personalized visa plan for you.",
    },
    {
      id: 2,
      icon: "/agreement.gif",
      title: "Step 2 – Security Check (Documents)",
      description:
        "We ensure all your documents are in order—just like a smooth security check before your flight.",
    },
    {
      id: 3,
      icon: "/online-education.gif",
      title: "Step 3 - Takeoff (Submission)",
      description:
        "We carefully review and submit your visa application, ensuring every detail is perfect. Just like a smooth takeoff, we handle the process with precision.",
    },
    {
      id: 4,
      icon: "/customs-clearance.gif",
      title: "Step 4 - Landing (Approval)",
      description:
        "Visa approved! Welcome to your new journey. We're with you till the final step to celebrate your success and provide final guidance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="md:mx-6">
        <div className="container mx-auto md:min-w-full p-8">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-2 relative w-fit mx-auto">
              {/* Background Rotated Square */}
              <div className="absolute top-0 left-0 w-full h-full bg-red-700 rotate-12 rounded-lg -z-10"></div>

              {/* Image */}
              <img
                src="/aboutus.png"
                alt="Team meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg border-[12px] border-white "
              />
            </div>
            <div className="md:col-span-3 md:justify-between">
              <h2
                className="text-5xl font-semibold text-[#3b4f84]"
                style={{ fontFamily: "Asap Condensed" }}
              >
                Who We Are
              </h2>
              <p
                className="mt-4 text-2xl text-[#333333]"
                style={{ fontFamily: "Albert Sans" }}
              >
                Visa Synergy is more than a visa consulting firm – we’re your
                partners in global mobility. Founded with a vision to simplify
                the complexities of visas and immigration, we’ve helped
                thousands of individuals and families achieve their dreams of
                studying, working, and living abroad.
              </p>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg flex items-center">
                <img
                  src="/mission.gif"
                  alt="Mission"
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <div>
                  <h3 className="font-bold text-black font-albert text-lg">
                    Mission
                  </h3>
                  <p className="text-[#1d2c3c] font-albert text-lg">
                    Navigating borders, unlocking opportunities—our mission is
                    to make visa journeys effortless, empowering you to explore
                    the world with confidence.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg flex items-center">
                <img
                  src="/vision.gif"
                  alt="Vision"
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <div>
                  <h3 className="font-bold text-black font-albert text-lg">
                    Vision
                  </h3>
                  <p className="text-[#1d2c3c] font-albert text-lg">
                    A world without boundaries—where aspirations know no limits,
                    and every journey leads to new possibilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center text-center">
            <img
              src="/aboutus.png"
              alt="Team meeting"
              className="w-full max-w-xs rounded-lg shadow-lg border-[8px] border-white"
            />
            <h2
              className="text-3xl font-semibold text-[#3b4f84] mt-6"
              style={{ fontFamily: "Asap Condensed" }}
            >
              Who We Are
            </h2>
            <p
              className="mt-4 text-base text-[#333333]"
              style={{ fontFamily: "Albert Sans" }}
            >
              Visa Synergy is more than a visa consulting firm – we’re your
              partners in global mobility. Founded with a vision to simplify the
              complexities of visas and immigration, we’ve helped thousands of
              individuals and families achieve their dreams of studying,
              working, and living abroad.
            </p>
            <div className="mt-6 p-4 bg-gray-100 rounded-lg flex flex-col items-center">
              <img
                src="/mission.gif"
                alt="Mission"
                width={50}
                height={50}
                className="mb-2"
              />
              <h3
                className="font-bold text-black"
                style={{ fontFamily: "Albert Sans" }}
              >
                Mission
              </h3>
              <p
                className="text-[#1d2c3c] text-center"
                style={{ fontFamily: "Albert Sans" }}
              >
                Navigating borders, unlocking opportunities—our mission is to
                make visa journeys effortless, empowering you to explore the
                world with confidence.
              </p>
            </div>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg flex flex-col items-center">
              <img
                src="/vision.gif"
                alt="Vision"
                width={50}
                height={50}
                className="mb-2"
              />
              <h3 className="font-bold text-black font-albert">
                Vision
              </h3>
              <p className="text-[#1d2c3c] text-center font-albert">
                A world without boundaries—where aspirations know no limits, and
                every journey leads to new possibilities.
              </p>
            </div>
          </div>

          {/* Title Section */}
          <div className="text-left mt-12">
            <h2 className="text-5xl font-bold text-[#3b4f84] font-asap">
              Why Trust Visa Synergy?
            </h2>
            <p className="text-[#333333] mt-2 text-2xl font-albert">
              Guiding You with Integrity, Expertise, and Commitment
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 mt-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center border-2">
              <h3 className="text-4xl font-bold text-[#3b4f84] font-albert">
                21+
              </h3>
              <p className="text-[#333333] mt-2 text-xl font-albert">
                Years of Experience
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center border-2">
              <h3 className="text-4xl font-bold text-[#3b4f84] font-albert">

                15+
              </h3>
              <p className="text-[#333333] mt-2 text-xl font-albert">
                Immigration Lawyers
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center border-2">
              <h3 className="text-4xl font-bold text-[#3b4f84] font-albert">

                98%
              </h3>
              <p className="text-[#333333] mt-2 text-xl font-albert">
                Visa Success Ratio
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center border-2">
              <h3 className="text-4xl font-bold text-[#3b4f84] font-albert">

                50+
              </h3>
              <p className="text-[#333333] mt-2 text-xl font-albert">
                Satisfied Clients
              </p>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center border-2">
              <h3
                className="text-3xl font-bold text-[#3b4f84]"
                style={{ fontFamily: "Albert Sans" }}
              >
                21+
              </h3>
              <p
                className="text-[#333333] mt-2 text-sm"
                style={{ fontFamily: "Albert Sans" }}
              >
                Years of Experience
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center border-2">
              <h3
                className="text-3xl font-bold text-[#3b4f84]"
                style={{ fontFamily: "Albert Sans" }}
              >
                15+
              </h3>
              <p
                className="text-[#333333] mt-2 text-sm"
                style={{ fontFamily: "Albert Sans" }}
              >
                Immigration Lawyers
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center border-2">
              <h3
                className="text-3xl font-bold text-[#3b4f84]"
                style={{ fontFamily: "Albert Sans" }}
              >
                98%
              </h3>
              <p
                className="text-[#333333] mt-2 text-sm"
                style={{ fontFamily: "Albert Sans" }}
              >
                Visa Success Ratio
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center border-2">
              <h3
                className="text-3xl font-bold text-[#3b4f84]"
                style={{ fontFamily: "Albert Sans" }}
              >
                50+
              </h3>
              <p
                className="text-[#333333] mt-2 text-sm"
                style={{ fontFamily: "Albert Sans" }}
              >
                Satisfied Clients
              </p>
            </div>
          </div>
        </div>

      <div className="justify-centre py-6 md:mx-6 md:mb-4">
        <div className="container mx-auto min-w-full px-8 ">
          {/* Heading Section */}
          <div className="text-left mb-8">
            <h2 className="text-5xl font-bold text-[#3b4f84] font-asap">How We Work</h2>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 w-full md:w-full items-start">
            {/* Left Section - 60% Width */}
            <div className="lg:col-span-2 flex flex-col justify-between h-full">
              <p className="text-2xl text-black mb-6 font-albert">
                At Visa Synergy, we make your global dreams take flight with a
                smooth and stress-free visa process. Just like a journey through
                an airport, we guide you every step of the way—ensuring a
                hassle-free experience from start to finish.
              </p>

              {/* Steps - Limited to 4 */}
              <div className="space-y-4 flex-1 flex flex-col justify-between mt-8">
                {steps.slice(0, 4).map((step) => (
                  <Card
                    key={step.id}
                    className="p-4 bg-gray-100 rounded-lg flex items-center"
                  >
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={50}
                      height={50}
                      className="mr-4"
                    />
                    <div>
                      <h3
                        className="font-bold text-black"
                        style={{ fontFamily: "Albert Sans" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-[#1d2c3c]"
                        style={{ fontFamily: "Albert Sans" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

              {/* Right Section - 40% Width */}
              <div className="lg:col-span-2 flex justify-center items-stretch h-full">
                <Image
                  src="/happy-young-man-holding-passport-boarding-pass-with-globe-while-standing-against-blue-background 2.png"
                  alt="Visa Consultation"
                  width={700}
                  height={1000}
                  className="rounded-lg shadow-md object-cover w-full h-full self-stretch"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#51868e] text-white px-6 md:px-10 rounded-lg mt-12 text-center font-asap py-10 md:py-0">
          {/* Parent Flex Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">

            {/* Animation Section */}
            <div className="flex-[2] flex justify-center">
              <Lottie animationData={animation} className="w-60 h-60 md:w-80 md:h-80" />
            </div>

            {/* Text & Buttons Container */}
            <div className="flex-[3] flex flex-col justify-center items-center md:items-start text-center md:text-left w-full">
              <h3 className="text-3xl md:text-5xl">Check Your Eligibility Instantly!</h3>
              <p className="mt-4 text-lg md:text-2xl w-full md:w-3/4 font-albert">
                Answer a few quick questions and discover your eligibility in seconds – no hassle, no waiting!
              </p>

              {/* Buttons (Side by Side on Mobile) */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 w-full">
                <Button className="bg-white text-lg md:text-xl text-[#51868e] border-2 hover:bg-[#51868e] hover:text-white hover:border-2 hover:border-white transition duration-700 px-6 py-3">
                  Calculate My Eligibility
                </Button>
                <Button className="bg-white text-lg md:text-xl text-[#51868e] border-2 hover:bg-[#51868e] hover:text-white hover:border-2 hover:border-white transition duration-700 px-6 py-3">
                  Need Help? Talk to an Expert
                </Button>
              </div>
            </div>

          </div>
        </div>
{/* ################################################################################################################################################# */}
{/* ################################################################################################################################################# */}
    
    {/* Testimonials */}
      <div
        className="bg-white py-11  text-gray-900 font-asap"
      >
        <div className="container px-6 py-8 min-w-full">
          <h2 className="text-xl md:text-5xl font-bold text-blue-900 mb-2">
            Words That Matter : Client Testimonials
          </h2>
          <p className="text-gray-500 text-lg md:text-2xl mb-8">
            Real Experiences, Real Success
          </p>

          <div className="relative">
            {/* Cards Container */}
            <div className="flex overflow-hidden space-x-6 md:overflow-visible md:flex-wrap md:justify-center">
              {visibleTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full md:min-w-[400px] flex justify-center">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute -left-6 md:left-0 top-1/2 transform -translate-y-1/2 bg-[#4E878C] text-white p-3 rounded-lg shadow-md hover:bg-[#3b6b6f] z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute -right-6 md:right-0 top-1/2 transform -translate-y-1/2 bg-[#4E878C] text-white p-3 rounded-lg shadow-md hover:bg-[#3b6b6f] z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      </main> 
      

      {/*################################//////////////################################*/}
      <Footer />
    </div>
  );
}
