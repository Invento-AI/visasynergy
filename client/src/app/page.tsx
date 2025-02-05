"use client";
import "@fontsource/asap-condensed";
import "@fontsource/albert-sans";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-700 text-white">
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
          Check Eligibility
        </Button>
      </header>

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
              <Button key={country} variant="outline" className="bg-transparent border-2 border-white hover:bg-white transition duration-700">
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

      {/* Social Media Floating Icons */}
      <div className="fixed right-5 bottom-10 flex flex-col space-y-3 z-20">
        <a href="#" className="bg-blue-600 p-3 rounded-full text-white">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="bg-blue-700 p-3 rounded-full text-white">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="bg-pink-500 p-3 rounded-full text-white">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="bg-green-500 p-3 rounded-full text-white">
          <FaWhatsapp size={24} />
        </a>
      </div>
      <div className="relative min-h-screen bg-gray-700 text-white">
      {/* Collaboration Section */}
      <section className="py-16 bg-gray-100 text-gray-900">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="text-left max-w-lg">
            <h2 className="text-4xl font-bold mb-6 text-[#3B4F84]" style={{fontFamily: 'Asap condensed'}}>In Collaboration With</h2>
            <p className="text-lg mb-8">Partnering with the Best to Guide Your Journey</p>
          </div>
          <div className="flex ml-auto gap-20 ">
            <Image src="/p1.png" alt="RCIC Logo" width={200} height={100} />
            <Image src="/p2.png" alt="OISC Logo" width={100} height={100} />
            <Image src="/p3.png" alt="MARA Logo" width={200} height={100} />
          </div>
        </div>
      </section>

      {/* Immigration Services Section */}
      <section className="py-16 bg-white text-gray-900">
  <div className="container mx-auto px-6 text-center">
    <div className="flex items-center">
      <div className="w-1/2 pr-8">
        <img 
          src="/girl.png" 
          alt="Girl" 
          className="w-[436px] h-[500px] rounded-[6px] shadow-md" 
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-4xl font-bold mb-12 text-[#3B4F84] text-left" style={{fontFamily: 'Asap condensed'}}>
          Immigration Services for Your Dream Destination
        </h2>
        <section className="py-16 pr-10 bg-white text-gray-900">
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
    </div>
  );
}
