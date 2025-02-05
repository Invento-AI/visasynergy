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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative min-h-screen bg-white text-white">
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
      <header className="relative left-0 right-0 flex justify-between items-center p-2 bg-white shadow-md text-gray-700 z-20">
        <div className="flex items-center">
          <Image src="/logo.png" width={150} height={10} alt="Visa Synergy Logo" />
        </div>
        <nav className="ml-auto mr-12 space-x-12 flex text-xl font-bold" style={{ fontFamily: "Albert Sans" }}>
          <Link href={"/about"}>About</Link>
          <Link href={"/news"}>News</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/contact"}>Contact Us</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
        </nav>
        <Button className="ml-4 mr-6 text-white border-2 hover:bg-white hover:text-[#51868e] border-[#51868e] hover:border-2 transition duration-700">
          Start Assessment
        </Button>
      </header>

{/* ########################################################################################################################################### */}
{/* ########################################################################################################################################### */}

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen px-6">
        <video autoPlay loop muted className="absolute w-full h-full object-cover z-10">
          <source src="/VisaSynergyFinal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="text-center -mt-40 z-20 relative">
          <h1 className="text-5xl md:text-5xl">Your Gateway to a New Beginning</h1>
          <p className="mt-4 text-2xl" style={{ fontFamily: "Albert Sans" }}>
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
          <p className="mt-12 text-3xl" style={{ fontFamily: "Albert Sans" }}>
            Start Your Immigration Journey Today!
          </p>

          {/* Quick Enquiry Button (Now Opens the Modal) */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
            <Button className="mt-4 px-6 py-4 border-2 bg-[#51868e] border-[#51868e] text-white rounded-lg text-xl shadow-lg hover:bg-transparent hover:text-white transition duration-700 hover:border-2 hover:border-white group">
              Quick Enquiry
              <span className="ml-2 transition-transform duration-500 group-hover:-rotate-[45deg]">→</span>
            </Button>
            </DialogTrigger>

            {/* Modal Content */}
            <DialogContent className="max-w-lg p-6 rounded-lg">
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
                    <SelectTrigger className="font-albert">
                      {/* <SelectValue placeholder="Select Your Program" className="placeholder-albert"/> */}
                      <span className="font-albert text-gray-700">
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
      <div className="absolute right-5 top-[570px] flex flex-col space-y-3 z-20">
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
        <section className="py-12 bg-white text-gray-900">
          <div className="container mx-auto min-w-[100%] flex items-center justify-between px-6">
            <div className="text-left w-2/5 max-w-lg">
              <h2 className="text-5xl font-bold my-4 text-[#3B4F84]" style={{fontFamily: 'Asap condensed'}}>In Collaboration With</h2>
              <p className="text-2xl mb-8 font-albert max-w-80">Partnering with the Best to Guide Your Journey</p>
            </div>
            <div className="flex w-3/5 ml-auto gap-20 space-x-12 ">
              <Image src="/p1.png" alt="RCIC Logo" width={200} height={80} className="h-32 w-64"/>
              <Image src="/p2.png" alt="OISC Logo" width={100} height={100} className="h-32 w-28"/>
              <Image src="/p3.png" alt="MARA Logo" width={200} height={100} className="h-32 w-56"  />
            </div>
          </div>
        </section>

        {/* Immigration Services Section */}
        <section className="py-12 bg-[#edf3f5] text-gray-900">
            <div className="container mx-auto text-center items-center">
              <div className="flex items-center">
                <div className="w-2/5 pr-8">
                  <img 
                    src="/girl.png" 
                    alt="Girl" 
                    className="w-[420px] border-[20px] h-[550px] rounded-[6px] shadow-md border-white" 
                  />
                </div>
                <div className="w-3/5">
                  <h2 className="text-5xl font-bold text-[#3B4F84] text-left mt-10" style={{fontFamily: 'Asap condensed'}}>
                    Immigration Services for Your Dream Destination
                  </h2>
                  <section className="pb-16 pt-10 pr-10 text-gray-900 ml-4">
                    <div className="container mx-auto px-1 text-center">
                      <div className="flex gap-32"> {/* Increased gap between columns */}
                        {/* Left Column */}
                        <div className="w-1/2 pr-8 ml-[-20px]"> {/* Shifted the first column to the left */}
                          <div className="grid grid-cols-1 gap-12 text-left" >
                            {[
                              { title: "PR & Immigration Guidance", desc: "Canada | Australia | New Zealand | UK   |   USA  | Europe" },
                              { title: "Work Permit Assistance", desc: "Canada | Australia | New Zealand | UK | USA |  Europe" },
                              { title: "Visitor Visa", desc: "Canada | Australia | New Zealand | UK | USA | Europe" }
                            ].map((service, index) => (
                              <div key={index} className="flex flex-col items-start h-[100px] w-[300px]">
                                <h3 className="text-2xl font-bold whitespace-nowrap">{service.title}</h3>
                                <p className="text-lg text-gray-700 line-clamp-2">{service.desc}</p> {/* Apply line-clamp to restrict to 2 lines */}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-1/2">
                          <div className="grid grid-cols-1  gap-12 text-left">
                            {[
                              { title: "Canada PNP Expertise", desc: "Canada PNP | Ontario PNP | Alberta PNP | Manitoba PNP | New Brunswick PNP" },
                              { title: "Study Abroad Guidance", desc: "Canada | Australia | New Zealand | UK | USA | Europe" },
                              { title: "Family Visa", desc: "Canada | Australia | New Zealand | UK | USA | Europe" }
                            ].map((service, index) => (
                              <div key={index} className="flex flex-col items-start h-[100px] w-[350px]">
                                <h3 className="text-2xl font-bold whitespace-nowrap">{service.title}</h3>
                                <p className="text-lg text-gray-700 line-clamp-2">{service.desc}</p> {/* Apply line-clamp to restrict to 2 lines */}
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
      <div className="w-6xl mx-auto p-6 mt-10">
        <h2 className="text-5xl font-semibold text-[#3b4f84]" style={{ fontFamily: "Asap condensed" }}>
          Why Choose Visa Synergy?
        </h2>
        <p className=" text-[#333333] mt-2 w-1/2 font-albert text-2xl">
          Expert Guidance, Seamless Processing & Proven Success in Your Immigration Journey!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-[90%] mx-auto justify-center">
          <Card className="p-4 text-center max-w-1/3 mx-10 bg-[#edf3f5]">
            <img src="/bce.gif" alt="Easy Process" className="w-20 h-20 mx-auto mb-3" />
            <h3 className="font-semibold text-xl text-left ml-6">Expertise & Proven Success</h3>
            <CardContent className="text-[#404040] mt-2">
              <ul className="list-disc list-inside text-lg text-left " style={{ fontFamily: "Asap Condensed" }}>
                <p className="pl-6 indent-[-1.7rem]">✔️ 21+ Years of Immigration Excellence</p>
                <p className="pl-6 indent-[-1.7rem]">✔️ Extensive knowledge of global visa policies</p>
                <p className="pl-6 indent-[-1.7rem]">✔️ <span>High success rate in PR, Work Permits & Student Visa</span></p>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-4 text-center max-w-1/3 mx-10 bg-[#edf3f5]">
            <img src="/easy.gif" alt="Easy Process" className="w-20 h-20 mx-auto mb-3" />
            <h3 className="font-semibold text-xl text-left ml-6">Easy & Effortless Process</h3>
            <CardContent className="text-[#404040] mt-2" style={{ fontFamily: "Asap Condensed" }}>
            <ul className="text-lg text-left">
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

          <Card className="p-4 text-center max-w-1/3 mx-10 bg-[#edf3f5]">
            <img src="/information.gif" alt="Easy Process" className="w-20 h-20 mx-auto mb-3" />
            <h3 className="font-semibold text-xl text-left ml-6">End-to-End Support</h3>
            <CardContent className="text-[#404040] mt-2" style={{ fontFamily: "Asap Condensed" }}>
              <ul className="list-disc list-inside text-lg text-left">
                <p className="pl-6 indent-[-1.7rem]">✔️ Guidance at Every Step</p>
                <p className="pl-6 indent-[-1.7rem]">✔️ Assistance from consultation to visa</p>
                <p className="pl-6 indent-[-1.7rem]">✔️ Document verification & post-landing assistance</p>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Check Your Eligibility */}
        <div
          className="bg-[#51868e] text-white px-10 rounded-lg mt-12 text-center max-h-80"
          style={{ fontFamily: "Asap Condensed" }}
        >
          {/* Parent Flex Container with 1:2 Ratio */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            
            {/* Animation Section (1 Part) */}
            <div className="flex-[2] flex justify-center">
              <Lottie 
                animationData={animation} 
                className="w-80 h-80"
              />
            </div>

            {/* Text Content Section (2 Parts) */}
            <div className="flex-[3] flex-col justify-center items-center text-center md:text-left ">
              <h3 className="text-5xl">Check Your Eligibility Instantly!</h3>
              <p 
                className="mt-4 text-2xl w-3/4"
                style={{ fontFamily: "Albert Sans" }}
              >
                Answer a few quick questions and discover your eligibility in seconds – no hassle, no waiting!
              </p>

              {/* Buttons */}
              <div className="flex space-x-16 w-full flex-col md:flex-row justify-center md:justify-start gap-4 mt-6 font-albert">
                <Button className="bg-white text-xl text-[#51868e] border-2 hover:bg-[#51868e] hover:text-white hover:border-2 hover:border-white transition duration-700">
                  Calculate My Eligibility
                </Button>
                <Button className="bg-white text-xl text-[#51868e] border-2 hover:bg-[#51868e] hover:text-white hover:border-2 hover:border-white transition duration-700">
                  Need Help? Talk to an Expert
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>

{/* ################################################################################################################################################# */}
{/* ################################################################################################################################################# */}
    </div>
  );
}
