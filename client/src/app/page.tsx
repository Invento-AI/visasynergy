'use client';

import "@fontsource/albert-sans";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-700 text-white">
      {/* Top Navbar with Phone and Email */}
      <header className="relative top-0 left-0 right-0 flex justify-between items-center p-2 bg-primary text-white z-30">
        <div className="ml-auto flex space-x-6">
          <span className='flex w-100 mr-6'> 
            <Image className='mr-2' src="/call.png" alt="call" width={20} height={20}/> +1 234 567 890
          </span>
          <span className='flex w-100 mr-6'> 
            <Image className='mr-2' src="/email.png" alt="email" width={25} height={20}/> contact@visasynergy.com
          </span>
        </div>
      </header>

      {/* Navigation Bar */}
      <header className="relative left-0 right-0 flex justify-between items-center p-2 bg-white shadow-md text-gray-700 z-20">
        <div className="flex items-center">
          <Image src="/logo.png" width={150} height={10} alt="Visa Synergy Logo" />
        </div>
        <nav className="ml-auto mr-12 space-x-12 flex text-xl font-bold" style={{fontFamily: 'Albert Sans'}}>
          <Link href="#about">About</Link>
          <Link href="#news">News</Link>
          <Link href="#blogs">Blogs</Link>
          <Link href="#contact">Contact Us</Link>
          <Link href="#dashboard">Dashboard</Link>
        </nav>
        <Button className="ml-4 mr-6 text-white border-2 hover:bg-white hover:text-[#51868e] border-[#51868e] hover:border-2 transition duration-700">Check Eligibility</Button>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen px-6">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover z-10"
        >
          <source src="/VisaSynergyFinal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* <Image src="/bg.png" className="absolute w-full h-full object-cover z-10" layout="fill" objectFit="cover" alt="Visa Synergy Hero Image" /> */}
        <div className="text-center -mt-40 z-20 relative">
          <h1 className="text-5xl md:text-5xl">Your Gateway to a New Beginning</h1>
          <p className="mt-4 text-2xl" style={{ fontFamily: 'Albert Sans' }}>Simplifying Immigration and Visa Processes for a World of Opportunities</p>
          <div className="mt-10 justify-center gap-20 flex flex-wrap items-center">
            <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white transition duration-700">USA 
              <Image src="/usa.png" width={20} height={20} alt="USA Flag" />
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white transition duration-700">AUSTRALIA 
              <Image src="/australia.png" width={20} height={20} alt="Australia Flag" />
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white transition duration-700">CANADA 
              <Image src="/canada.png" width={20} height={20} alt="Canada Flag" />
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white transition duration-700">EUROPE 
              <Image src="/europe.png" width={20} height={20} alt="Europe Flag" />
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white transition duration-700">NEW ZEALAND 
              <Image src="/newzealand.png" width={20} height={20} alt="New Zealand Flag" />
            </Button>
          </div>
          <p className="mt-12 text-3xl" style={{ fontFamily: 'Albert Sans' }}>Start Your Immigration Journey Today!</p>
          <Button className="mt-4 px-6 py-4  border-2 bg-[#51868e] border-[#51868e] text-white rounded-lg text-xl shadow-lg hover:bg-transparent hover:text-white transition duration-700 hover:border-2 hover:border-white">Quick Enquiry? →</Button>
        </div>

      </section>

      {/* Social Media Floating Icons */}
      <div className="fixed right-5 bottom-10 flex flex-col space-y-3 z-20">
        <a href="#" className="bg-blue-600 p-3 rounded-full text-white"><FaFacebook size={24} /></a>
        <a href="#" className="bg-blue-700 p-3 rounded-full text-white"><FaLinkedin size={24} /></a>
        <a href="#" className="bg-pink-500 p-3 rounded-full text-white"><FaInstagram size={24} /></a>
        <a href="#" className="bg-green-500 p-3 rounded-full text-white"><FaWhatsapp size={24} /></a>
      </div>
    </div>
  );
}