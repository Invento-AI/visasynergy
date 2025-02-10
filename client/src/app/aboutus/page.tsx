import { Card } from "@/components/ui/card";
import Image from "next/image";
import "@fontsource/asap-condensed";
import "@fontsource/albert-sans";
import "@fontsource/asap-condensed";
import { Button } from "@/components/ui/button";

import React from "react";
import Animation from "@/components/Animation";

export default function About() {
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
    <main className="md:mx-6 mb-6">
      <div className="container mx-auto md:min-w-full p-8">
        <div className="hidden md:grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-2 relative w-fit mx-auto">
            <Image
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
              partners in global mobility. Founded with a vision to simplify the
              complexities of visas and immigration, we’ve helped thousands of
              individuals and families achieve their dreams of studying,
              working, and living abroad.
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
                  Navigating borders, unlocking opportunities—our mission is to
                  make visa journeys effortless, empowering you to explore the
                  world with confidence.
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
            individuals and families achieve their dreams of studying, working,
            and living abroad.
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
              Navigating borders, unlocking opportunities—our mission is to make
              visa journeys effortless, empowering you to explore the world with
              confidence.
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
            <h3 className="font-bold text-black font-albert">Vision</h3>
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
        <div className="container mx-auto min-w-full px-2 ">
          {/* Heading Section */}
          <div className="text-left mb-4">
            <h2 className="text-5xl font-bold text-[#3b4f84] font-asap">
              How We Work
            </h2>
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
          <div className="flex-[2] flex justify-center">
            <Animation />
          </div>
          <div className="flex-[3] flex flex-col justify-center items-center md:items-start text-center md:text-left w-full">
            <h3 className="text-3xl md:text-5xl">
              Check Your Eligibility Instantly!
            </h3>
            <p className="mt-4 text-lg md:text-2xl w-full md:w-3/4 font-albert">
              Answer a few quick questions and discover your eligibility in
              seconds – no hassle, no waiting!
            </p>
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
    </main>
  );
}
