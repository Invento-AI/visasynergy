// "use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import { headers } from 'next/headers';

export const About = async() => {
    
    return (
        <div className="min-h-screen bg-white">
       
        <Navbar/>
    
        <main>
        <div className="container mx-auto p-8">
  {/* Desktop Layout */}
  <div className="hidden md:grid md:grid-cols-5 gap-8 items-center">
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
    <div className="md:col-span-3">
      <h2 className="text-4xl font-semibold text-[#3b4f84]" style={{ fontFamily: "Asap Condensed" }}>
        Who We Are
      </h2>
      <p className="mt-4 text-lg text-[#333333]" style={{ fontFamily: "Albert Sans" }}>
        Visa Synergy is more than a visa consulting firm – we’re your partners in global mobility. Founded with a vision to simplify the complexities of visas and immigration, we’ve helped thousands of individuals and families achieve their dreams of studying, working, and living abroad.
      </p>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg flex items-center">
        <img src="/mission.gif" alt="Mission" width={50} height={50} className="mr-4" />
        <div>
          <h3 className="font-bold text-black" style={{ fontFamily: "Albert Sans" }}>Mission</h3>
          <p className="text-[#1d2c3c]" style={{ fontFamily: "Albert Sans" }}>
            Navigating borders, unlocking opportunities—our mission is to make visa journeys effortless, empowering you to explore the world with confidence.
          </p>
        </div>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg flex items-center">
        <img src="/vision.gif" alt="Vision" width={50} height={50} className="mr-4" />
        <div>
          <h3 className="font-bold text-black" style={{ fontFamily: "Albert Sans" }}>Vision</h3>
          <p className="text-[#1d2c3c]" style={{ fontFamily: "Albert Sans" }}>
            A world without boundaries—where aspirations know no limits, and every journey leads to new possibilities.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Mobile Layout */}
  <div className="md:hidden flex flex-col items-center text-center">
    <img src="/aboutus.png" alt="Team meeting" className="w-full max-w-xs rounded-lg shadow-lg border-[8px] border-white" />
    <h2 className="text-3xl font-semibold text-[#3b4f84] mt-6" style={{ fontFamily: "Asap Condensed" }}>
      Who We Are
    </h2>
    <p className="mt-4 text-base text-[#333333]" style={{ fontFamily: "Albert Sans" }}>
      Visa Synergy is more than a visa consulting firm – we’re your partners in global mobility. Founded with a vision to simplify the complexities of visas and immigration, we’ve helped thousands of individuals and families achieve their dreams of studying, working, and living abroad.
    </p>
    <div className="mt-6 p-4 bg-gray-100 rounded-lg flex flex-col items-center">
      <img src="/mission.gif" alt="Mission" width={50} height={50} className="mb-2" />
      <h3 className="font-bold text-black" style={{ fontFamily: "Albert Sans" }}>Mission</h3>
      <p className="text-[#1d2c3c] text-center" style={{ fontFamily: "Albert Sans" }}>
        Navigating borders, unlocking opportunities—our mission is to make visa journeys effortless, empowering you to explore the world with confidence.
      </p>
    </div>
    <div className="mt-4 p-4 bg-gray-100 rounded-lg flex flex-col items-center">
      <img src="/vision.gif" alt="Vision" width={50} height={50} className="mb-2" />
      <h3 className="font-bold text-black" style={{ fontFamily: "Albert Sans" }}>Vision</h3>
      <p className="text-[#1d2c3c] text-center" style={{ fontFamily: "Albert Sans" }}>
        A world without boundaries—where aspirations know no limits, and every journey leads to new possibilities.
      </p>
    </div>
  </div>



      {/* Title Section */}
  <div className="text-left mt-8">
    <h2 className="text-4xl font-bold text-[#3b4f84]" style={{ fontFamily: "Asap Condensed" }}>
      Why Trust Visa Synergy?
    </h2>
    <p className="text-[#333333] mt-2" style={{ fontFamily: "Albert Sans" }}>
      Guiding You with Integrity, Expertise, and Commitment
    </p>
  </div>

  {/* Desktop Layout */}
  <div className="hidden md:grid md:grid-cols-4 gap-6 mt-8">
    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center border-2">
      <h3 className="text-4xl font-bold text-[#3b4f84]" style={{ fontFamily: "Albert Sans" }}>21+</h3>
      <p className="text-[#333333] mt-2" style={{ fontFamily: "Albert Sans" }}>Years of Experience</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center border-2">
      <h3 className="text-4xl font-bold text-[#3b4f84]" style={{ fontFamily: "Albert Sans" }}>15+</h3>
      <p className="text-[#333333] mt-2" style={{ fontFamily: "Albert Sans" }}>Immigration Lawyers</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center border-2">
      <h3 className="text-4xl font-bold text-[#3b4f84]" style={{ fontFamily: "Albert Sans" }}>98%</h3>
      <p className="text-[#333333] mt-2" style={{ fontFamily: "Albert Sans" }}>Visa Success Ratio</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center border-2">
      <h3 className="text-4xl font-bold text-[#3b4f84]" style={{ fontFamily: "Albert Sans" }}>50+</h3>
      <p className="text-[#333333] mt-2" style={{ fontFamily: "Albert Sans" }}>Satisfied Clients</p>
    </div>
  </div>

  {/* Mobile Layout */}
  <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
    <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center border-2">
      <h3 className="text-3xl font-bold text-[#3b4f84]" style={{ fontFamily: "Albert Sans" }}>21+</h3>
      <p className="text-[#333333] mt-2 text-sm" style={{ fontFamily: "Albert Sans" }}>Years of Experience</p>
    </div>
    <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center border-2">
      <h3 className="text-3xl font-bold text-[#3b4f84]" style={{ fontFamily: "Albert Sans" }}>15+</h3>
      <p className="text-[#333333] mt-2 text-sm" style={{ fontFamily: "Albert Sans" }}>Immigration Lawyers</p>
    </div>
    <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center border-2">
      <h3 className="text-3xl font-bold text-[#3b4f84]" style={{ fontFamily: "Albert Sans" }}>98%</h3>
      <p className="text-[#333333] mt-2 text-sm" style={{ fontFamily: "Albert Sans" }}>Visa Success Ratio</p>
    </div>
    <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center border-2">
      <h3 className="text-3xl font-bold text-[#3b4f84]" style={{ fontFamily: "Albert Sans" }}>50+</h3>
      <p className="text-[#333333] mt-2 text-sm" style={{ fontFamily: "Albert Sans" }}>Satisfied Clients</p>
    </div>
  </div>
        </div>
      
    
            

        </main>
        <Footer/>
          
        </div>
    );
};

export default About;