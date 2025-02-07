"use client";
import "@fontsource/asap-condensed";
import "@fontsource/albert-sans";
import "@fontsource/asap-condensed";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Lottie from "lottie-react";
import animation from "../../public/Animation - 1737981416584.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Menu, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
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


// Return();


  return (
    <div className="relative min-h-screen bg-white text-white">

      <Navbar/>

{/* ########################################################################################################################################### */}
{/* ########################################################################################################################################### */}

      {/* Hero Section */}
      {/* <section className="relative flex items-center justify-center min-h-screen px-6">
        <video autoPlay loop muted className="absolute w-full h-full object-cover z-10">
          <source src="/VisaSynergyFinal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="text-center -mt-40 z-20 relative">
          <h1 className="text-5xl md:text-5xl">Your Gateway to a New Beginning</h1>
          <p className="mt-4 text-2xl font-albert">
            Simplifying Immigration and Visa Processes for a World of Opportunities
          </p>
          <div className="mt-10 justify-center gap-20 flex flex-wrap items-center">
            {["usa", "australia", "canada", "europe", "newzealand"].map((country) => (
              <Button key={country} variant="outline" className="bg-transparent border-2 text-lg border-white hover:bg-white transition duration-700">
                {country.toUpperCase()}
                <Image src={`/${country}.png`} width={20} height={20} alt={`${country} Flag`} />
              </Button>
            ))}
          </div>
          <p className="mt-12 text-3xl font-albert">
            Start Your Immigration Journey Today!
          </p> */}

          {/* Quick Enquiry Button (Now Opens the Modal) */}
          {/* <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
            <Button className="mt-4 px-6 py-4 border-2 bg-[#51868e] border-[#51868e] text-white rounded-lg text-xl shadow-lg hover:bg-transparent hover:text-white transition duration-700 hover:border-2 hover:border-white group">
              Quick Enquiry
              <span className="ml-2 transition-transform duration-500 group-hover:-rotate-[45deg]">→</span>
            </Button>
            </DialogTrigger> */}

            {/* Modal Content */}
            {/* <DialogContent className="max-w-lg p-6 rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-center text-lg font-bold font-albert">Quick Enquiry</DialogTitle>
              </DialogHeader> */}

              {/* Form Inside Modal */}
              {/* <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name" className="font-albert font-bold">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="first-name" className="font-albert" placeholder="Enter Your First Name" required />
                  </div>
                  <div>
                    <Label htmlFor="last-name" className="font-albert font-bold">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="last-name" className="font-albert" placeholder="Enter Your Last Name" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-albert font-bold">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" className="font-albert" type="email" placeholder="Enter Your Email" required />
                </div>

                <div>
                  <Label htmlFor="mobile" className="font-albert font-bold">
                    Mobile Number <span className="text-red-500">*</span>
                  </Label>
                  <Input id="mobile" className="font-albert" type="tel" placeholder="Enter Your Mobile Number" required />
                </div>

                <div>
                  <Label htmlFor="program" className="font-albert font-bold">
                    Program You Are Interested In <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="font-albert"> */}
                      {/* <SelectValue placeholder="Select Your Program" className="placeholder-albert"/> */}
                      {/* <span className="font-albert text-gray-700">
                        <SelectValue placeholder="Select Your Program" />
                      </span>
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
                </div> */}

                {/* <Button type="submit" className="w-full bg-[#51868e] text-white py-3 text-lg font-albert hover:text-[#51868e] hover:bg-white hover:border-2 hover:border-[#51868e] transition duration-700">
                  Start Your Journey
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section> */}

<section className="relative flex items-center justify-center min-h-screen px-4 pt-0 md:px-6  ">
  {/* Background Video */}
  <video autoPlay loop muted className="absolute w-full h-full object-cover z-10">
    <source src="/VisaSynergyFinal.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Content */}
  <div className="text-center z-20 relative w-full flex flex-col items-center md:-mt-24">
    <h1 className="text-xl sm:text-3xl md:text-5xl font-bold">
      Your Gateway to a New Beginning
    </h1>
    <p className="mt-2 text-base sm:text-lg md:text-2xl font-albert px-2 md:mb-6">
      Simplifying Immigration and Visa Processes for a World of Opportunities
    </p>

    {/* Country Buttons */}
    <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-16">
      {["usa", "australia", "canada", "europe", "newzealand"].map((country) => (
        <Button key={country} variant="outline" className="bg-transparent border-2 text-xs sm:text-sm md:text-lg px-3 py-1 sm:px-4 sm:py-2 border-white hover:bg-white transition duration-700 flex items-center">
          {country.toUpperCase()}
          <Image src={`/${country}.png`} width={14} height={14} className="ml-2" alt={`${country} Flag`} />
        </Button>
      ))}
    </div>

    <p className="mt-6 text-lg sm:text-xl md:text-3xl font-albert md:mt-12">
      Start Your Immigration Journey Today!
    </p>

    {/* Quick Enquiry Button */}
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-4 px-4 py-2 sm:px-6 sm:py-3 border-2 bg-[#51868e] border-[#51868e] text-white rounded-lg text-sm sm:text-lg md:text-xl shadow-lg hover:bg-transparent hover:text-white transition duration-700 hover:border-white group">
          Quick Enquiry
          <span className="ml-2 transition-transform duration-500 group-hover:-rotate-[45deg]">→</span>
        </Button>
      </DialogTrigger>

      {/* Modal Content */}
            <DialogContent className="max-w-lg p-6 rounded-lg w-[90%] md:mx-auto">
              <DialogHeader>
                <DialogTitle className="text-center text-lg font-bold font-albert">Quick Enquiry</DialogTitle>
              </DialogHeader>

              {/* Form Inside Modal */}
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name" className="font-albert font-bold">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="first-name" className="font-albert bg-white border-gray-300" placeholder="Enter Your First Name" required />
                  </div>
                  <div>
                    <Label htmlFor="last-name" className="font-albert font-bold">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="last-name" className="font-albert bg-white border-gray-300" placeholder="Enter Your Last Name" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-albert font-bold">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" className="font-albert bg-white border-gray-300" type="email" placeholder="Enter Your Email" required />
                </div>

                <div>
                  <Label htmlFor="mobile" className="font-albert font-bold">
                    Mobile Number <span className="text-red-500">*</span>
                  </Label>
                  <Input id="mobile" className="font-albert bg-white border-gray-300" type="tel" placeholder="Enter Your Mobile Number" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name" className="font-albert font-bold">
                      Country <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="font-albert border-gray-300 text-gray-600">
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
                    <Label htmlFor="last-name" className="font-albert font-bold">
                      Visa Category <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="font-albert border-gray-300 text-gray-600">
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

                <Button type="submit" className="w-full bg-[#51868e] text-white py-3 text-lg font-albert hover:text-[#51868e] hover:bg-white hover:border-2 hover:border-[#51868e] transition duration-700">
                  Start Your Journey
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

</section>

      {/* Social Media Icons */}
      <div className="absolute right-5 top-[570px] hidden md:flex flex-col space-y-3 z-20">
        <a href="#" className="bg-blue-600 p-3 rounded-md text-white">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="bg-blue-700 p-3 rounded-md text-white">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="bg-pink-500 p-3 rounded-md text-white">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="bg-green-500 p-3 rounded-md text-white">
          <FaWhatsapp size={24} />
        </a>
      </div>


{/* ########################################################################################################################################### */}
{/* ########################################################################################################################################### */}
      
      <div className="relative min-h-screen bg-gray-700 text-white">
        {/* Collaboration Section */}
        {/* <section className="py-12 bg-white text-gray-900">
          <div className="container mx-auto min-w-[100%] flex items-center justify-between px-6">
            <div className="text-left w-2/5 max-w-lg">
              <h2 className="text-5xl font-bold my-4 text-[#3B4F84] font-asap">In Collaboration With</h2>
              <p className="text-2xl mb-8 font-albert max-w-80">Partnering with the Best to Guide Your Journey</p>
            </div>
            <div className="flex w-3/5 ml-auto gap-20 space-x-12 ">
              <Image src="/p1.png" alt="RCIC Logo" width={200} height={80} className="h-32 w-64"/>
              <Image src="/p2.png" alt="OISC Logo" width={100} height={100} className="h-32 w-28"/>
              <Image src="/p3.png" alt="MARA Logo" width={200} height={100} className="h-32 w-56"  />
            </div>
          </div>
        </section> */}

        <section className="py-6 bg-white text-gray-900">
          <div className="container mx-auto px-3 md:px-6 flex flex-col md:flex-row items-center md:justify-between md:min-w-full">
            {/* Text Section */}
            <div className="text-left md:text-left mx-auto md:w-2/5 max-w-full">
              <h2 className="text-xl md:text-5xl font-bold my-4 text-[#3B4F84] font-asap">
                In Collaboration With
              </h2>
              <p className="text-md md:text-2xl mb-8 font-albert max-w-80 mx-auto md:mx-0">
                Partnering with the Best to Guide Your Journey
              </p>
            </div>

            {/* Logos Section */}
            <div className="flex justify-center md:justify-end w-full md:w-3/5 gap-6 md:gap-32">
              <Image src="/p1.png" alt="RCIC Logo" width={100} height={40} className="h-14 w-auto md:h-32 md:w-auto" />
              <Image src="/p2.png" alt="OISC Logo" width={80} height={80} className="h-14 w-auto md:h-32 md:w-auto" />
              <Image src="/p3.png" alt="MARA Logo" width={100} height={50} className="h-14 w-auto md:h-32 md:w-auto" />
            </div>
          </div>
        </section>

        {/* Immigration Services Section */}
        <section className="py-8 bg-[#edf3f5] text-gray-900">
          <div className="container mx-auto text-center items-center px-4 md:min-w-full">
            {/* Container changes from row (desktop) to column (mobile) */}
            <div className="flex flex-col md:flex-row items-center">
              
              {/* Image Section */}
              <div className="w-full md:w-2/5 mb-6 md:mb-0 md:pr-8 flex justify-center">
                <img 
                  src="/girl.png" 
                  alt="Girl" 
                  className="w-[90%] md:w-[420px] border-[10px] md:border-[20px] h-auto md:h-[550px] rounded-[6px] shadow-md border-white"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-3/5">
                
                {/* Heading */}
                <h2 className="text-xl md:text-5xl font-bold text-[#3B4F84] text-center md:text-left mt-6 md:mt-10 font-asap md:w-4/5">
                  Immigration Services for Your Dream Destination
                </h2>

                {/* Service List */}
                <section className="pt-6 md:pt-10 pr-0 md:left-0 text-gray-900">
                  <div className="container mx-auto px-4 md:px-0">
                    
                    {/* Stack services vertically on mobile */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-32">

                      {/* Left Column Services */}
                      <div className="w-full md:w-1/2">
                        <div className="grid grid-cols-1 gap-10 text-center md:text-left">
                          {[
                            { title: "PR & Immigration Guidance", desc: "Canada | Australia | New Zealand | UK | USA | Europe" },
                            { title: "Work Permit Assistance", desc: "Canada | Australia | New Zealand | UK | USA | Europe" },
                            { title: "Visitor Visa", desc: "Canada | Australia | New Zealand | UK | USA | Europe" }
                          ].map((service, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start">
                              <h3 className="text-lg md:text-2xl font-bold">{service.title}</h3>
                              <p className="text-sm md:text-lg text-gray-700">{service.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column Services */}
                      <div className="w-full md:w-1/2">
                        <div className="grid grid-cols-1 gap-10 text-center md:text-left">
                          {[
                            { title: "Canada PNP Expertise", desc: "Canada PNP | Ontario PNP | Alberta PNP | Manitoba PNP | New Brunswick PNP" },
                            { title: "Study Abroad Guidance", desc: "Canada | Australia | New Zealand | UK | USA | Europe" },
                            { title: "Family Visa", desc: "Canada | Australia | New Zealand | UK | USA | Europe" }
                          ].map((service, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start">
                              <h3 className="text-lg md:text-2xl font-bold">{service.title}</h3>
                              <p className="text-sm md:text-lg text-gray-700">{service.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </section>

      </div>

{/* ################################################################################################################################################ */}
{/* ################################################################################################################################################ */}

      {/* Why Choose Visa Synergy Section */}
      <div className="w-6xl mx-auto p-6 md:mt-10">
        <h2 className="text-xl md:text-5xl font-semibold text-[#3b4f84] font-asap mx-3 md:mx-0">
          Why Choose Visa Synergy?
        </h2>
        <p className=" text-[#333333] mt-2 w-full md:w-1/2 font-albert text-md md:text-2xl mx-3 md:mx-0">
          Expert Guidance, Seamless Processing & Proven Success in Your Immigration Journey!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-[90%] mx-auto justify-center">
          <Card className="p-4 text-center max-w-1/3 md:mx-10 bg-[#edf3f5]">
            <img src="/bce.gif" alt="Easy Process" className="w-20 h-20 mx-auto mb-3" />
            <h3 className="font-semibold text-lg md:text-xl text-left ml-6">Expertise & Proven Success</h3>
            <CardContent className="text-[#404040] mt-2">
              <ul className="list-disc list-inside text-md md:text-lg text-left font-asap">
                <p className="pl-6 indent-[-1.7rem]">✔️ 21+ Years of Immigration Excellence</p>
                <p className="pl-6 indent-[-1.7rem]">✔️ Extensive knowledge of global visa policies</p>
                <p className="pl-6 indent-[-1.7rem]">✔️ <span>High success rate in PR, Work Permits & Student Visa</span></p>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-4 text-center max-w-1/3 md:mx-10 bg-[#edf3f5]">
            <img src="/easy.gif" alt="Easy Process" className="w-20 h-20 mx-auto mb-3" />
            <h3 className="font-semibold text-lg md:text-xl text-left ml-6">Easy & Effortless Process</h3>
            <CardContent className="text-[#404040] mt-2 font-asap">
            <ul className="text-md md:text-lg text-left">
              <p className="pl-6 indent-[-1.7rem]">
                ✔️ Personalized Immigration Pathways
              </p>
              <p className="pl-6 indent-[-1.7rem]">
                ✔️ Profile-based visa recommendations
              </p>
              <p className="pl-6 indent-[-1.7rem]">
                ✔️ Streamlined documentation & smooth processing
              </p>
            </ul>
            </CardContent>
          </Card>

          <Card className="p-4 text-center max-w-1/3 md:mx-10 bg-[#edf3f5]">
            <img src="/information.gif" alt="Easy Process" className="w-20 h-20 mx-auto mb-3" />
            <h3 className="font-semibold text-lg md:text-xl text-left ml-6">End-to-End Support</h3>
            <CardContent className="text-[#404040] mt-2 font-asap">
              <ul className="list-disc list-inside text-md md:text-lg text-left">
                <p className="pl-6 indent-[-1.7rem]">✔️ Guidance at Every Step</p>
                <p className="pl-6 indent-[-1.7rem]">✔️ Assistance from consultation to visa</p>
                <p className="pl-6 indent-[-1.7rem]">✔️ Document verification & post-landing assistance</p>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Check Your Eligibility */}
        
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

      </div>


{/* ################################################################################################################################################# */}
{/* ################################################################################################################################################# */}
    
    {/* Testimonials */}
      <div
        className="bg-white text-gray-900 font-asap"
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

{/* ################################################################################################################################################# */}
{/* ################################################################################################################################################# */}

    <Footer/>

    </div>
  );
}
