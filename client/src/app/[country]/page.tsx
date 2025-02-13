import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@fontsource/albert-sans";
import "@fontsource/asap-condensed";
import { Card } from "@/components/ui/card";
import CheckEligibility from "@/components/CheckEligibility";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { visaCategories, faqData, STEPS } from "@/lib/constant";

function page({ params }: { params: { country: string } }) {
  return (
    <>
      <div>{params.country}</div>
      <div className="container min-w-full p-16 bg-white">
        {/* Header Section */}
        <div className="flex items-center p-6 gap-7 rounded-lg">
          <img
            src="/Images_home/Canada_svg.webp"
            alt="Canada Flag"
            width={278}
            height={175}
            className="mr-4 rounded-3xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-[#3b4f84] font-asap">
              Explore Visa Opportunities in [Country Name]
            </h1>
            <p className="mt-2 text-[#333333] font-albert text-lg">
              Everything you need to know about visas—study, work, PR, and more!
              Find the best visa option for your goals, from study to permanent
              residency.
            </p>
            <button className="mt-4 px-6 py-2 bg-[#51868e] hover:border-[#51868e] border-2 hover:text-[#51868e] text-white rounded-lg hover:bg-white duration-700">
              Need Help? Talk to an Expert
            </button>
          </div>
        </div>

        {/* Visa Categories Section */}
        <div className="mt-12 flex">
          <div className="w-3/5 pr-6">
            <h2 className="text-5xl font-semibold mb-6 font-asap text-[#3b4f84]">
              Visa Categories & Options for [Country Name]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visaCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-lg shadow-lg bg-[#EDF3F5] text-[#1A202C] flex flex-col justify-between h-full"
                >
                  <div>
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                    <p className="mt-2 text-gray-700">{category.description}</p>
                  </div>
                  <Link
                    href={category.link}
                    className="mt-6 w-full px-6 py-3 border-2 border-[#51868e] text-[#51868e] rounded-lg text-center hover:bg-[#51868e] hover:text-white duration-700"
                  >
                    Explore More
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/5 flex justify-center mt-14">
            <Image
              src="/Images_home/girl.png"
              alt="Girl"
              height={1080}
              width={1080}
              className="w-[90%] md:w-[420px] border-[10px] md:border-[20px] h-auto md:h-[550px] rounded-[6px] shadow-md border-white"
            />
          </div>
        </div>

        <div className="max-w-6xl mt-12">
          <h2 className="text-5xl font-semibold text-[#3b4f84] mb-6 font-asap">
            Why Choose <span className="text-[#3b4f84]">[Country Name]</span>?
          </h2>
          <p className="text-[#333333] text-lg font-albert mb-4">
            [Country Name] is a top destination for students, professionals, and
            families seeking a better future. With its strong economy,
            world-class education, and welcoming immigration policies, it's the
            perfect place to grow and succeed.
          </p>
          <ul className="list-disc list-outside space-y-3 text-[#333333] pl-6 text-lg font-albert">
            <li>
              <strong>High Quality of Life</strong> – Safe, diverse, and ranked
              among the best places to live.
            </li>
            <li>
              <strong>Top-Tier Education</strong> – Home to prestigious
              universities and globally recognized degrees.
            </li>
            <li>
              <strong>Thriving Job Market</strong> – Opportunities in
              technology, healthcare, finance, and more.
            </li>
            <li>
              <strong>Pathways to Permanent Residency</strong> – Easy transition
              from visa to PR for eligible candidates.
            </li>
            <li>
              <strong>Cultural Diversity & Inclusivity</strong> – A welcoming
              environment for all nationalities.
            </li>
            <li>
              <strong>Excellent Healthcare & Social Benefits</strong> – Access
              to top medical facilities and public services.
            </li>
          </ul>
          <p className="text-[#333333] text-lg font-albert mt-4">
            Whether you're looking to study, work, or settle, [Country Name]
            offers everything you need for a successful future!
          </p>
        </div>

        <div className="justify-centre mt-12 md:mb-4">
          <div className="container mx-auto min-w-full">
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
                  smooth and stress-free visa process. Just like a journey
                  through an airport, we guide you every step of the
                  way—ensuring a hassle-free experience from start to finish.
                </p>

                {/* Steps - Limited to 4 */}
                <div className="space-y-4 flex-1 flex flex-col justify-between mt-8">
                  {STEPS.slice(0, 4).map((step) => (
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

        <CheckEligibility />

        <div className="mt-12 mb-12">
          <h2 className="text-5xl font-semibold text-[#3b4f84] mb-6 font-asap">
            Visa FAQs: Your Questions, Answered!
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b"
              >
                <AccordionTrigger className="text-lg font-semibold text-[#1A202C] hover:text-[#3b4f84] transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#333333] text-md font-albert">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default page;
