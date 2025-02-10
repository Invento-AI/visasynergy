"use client";
import "@fontsource/asap-condensed";
import "@fontsource/albert-sans";
import "@fontsource/asap-condensed";
import Lottie from "lottie-react";
import animation from "../../../public/Images_home/Animation.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-white">
      <Navbar />
      <Hero />
      <div className="relative text-white">
        <section className="py-6 bg-white text-gray-900">
          <div className="container mx-auto px-3 md:px-6 flex flex-col md:flex-row items-center md:justify-between md:min-w-full">
            <div className="text-left md:text-left mx-auto md:w-2/5 max-w-full">
              <h2 className="text-xl md:text-5xl font-bold my-4 text-[#3B4F84] font-asap">
                In Collaboration With
              </h2>
              <p className="text-md md:text-2xl mb-8 font-albert max-w-80 mx-auto md:mx-0">
                Partnering with the Best to Guide Your Journey
              </p>
            </div>

            <div className="flex justify-center md:justify-end w-full md:w-3/5 gap-6 md:gap-32">
              <img
                src="/Images_home/p1.png"
                alt="RCIC Logo"
                className="h-14 w-auto md:h-32 md:w-auto"
              />
              <img
                src="/Images_home/p2.png"
                alt="OISC Logo"
                className="h-14 w-auto md:h-32 md:w-auto"
              />
              <img
                src="/Images_home/p3.png"
                alt="MARA Logo"
                className="h-14 w-auto md:h-32 md:w-auto"
              />
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#edf3f5] text-gray-900">
          <div className="container mx-auto text-center items-center px-4 md:min-w-full">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/5 mb-6 md:mb-0 md:pr-8 flex justify-center">
                <img
                  src="/Images_home/girl.png"
                  alt="Girl"
                  className="w-[90%] md:w-[420px] border-[10px] md:border-[20px] h-auto md:h-[550px] rounded-[6px] shadow-md border-white"
                />
              </div>

              <div className="w-full h-full md:w-3/5">
                <h2 className="text-xl md:text-5xl font-bold text-[#3B4F84] text-center md:text-left mt-6 md:mt-10 font-asap md:w-4/5">
                  Immigration Services for Your Dream Destination
                </h2>

                <section className="pt-6 md:pt-10 pr-0 md:left-0 text-gray-900">
                  <div className="container mx-auto px-4 md:px-0">
                    <div className="flex flex-col md:flex-row gap-12 md:gap-32">
                      <div className="w-full md:w-1/2">
                        <div className="grid grid-cols-1 gap-10 text-center md:text-left">
                          {[
                            {
                              title: "PR & Immigration Guidance",
                              desc: "Canada | Australia | New Zealand | UK | USA | Europe",
                            },
                            {
                              title: "Work Permit Assistance",
                              desc: "Canada | Australia | New Zealand | UK | USA | Europe",
                            },
                            {
                              title: "Visitor Visa",
                              desc: "Canada | Australia | New Zealand | UK | USA | Europe",
                            },
                          ].map((service, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center md:items-start"
                            >
                              <h3 className="text-lg md:text-2xl font-bold">
                                {service.title}
                              </h3>
                              <p className="text-sm md:text-lg text-gray-700 font-albert">
                                {service.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="w-full md:w-1/2">
                        <div className="grid grid-cols-1 gap-10 text-center md:text-left">
                          {[
                            {
                              title: "Canada PNP Expertise",
                              desc: "Canada PNP | Ontario PNP | Alberta PNP | Manitoba PNP | New Brunswick PNP",
                            },
                            {
                              title: "Study Abroad Guidance",
                              desc: "Canada | Australia | New Zealand | UK | USA | Europe",
                            },
                            {
                              title: "Family Visa",
                              desc: "Canada | Australia | New Zealand | UK | USA | Europe",
                            },
                          ].map((service, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center md:items-start"
                            >
                              <h3 className="text-lg md:text-2xl font-bold">
                                {service.title}
                              </h3>
                              <p className="text-sm md:text-lg text-gray-700 font-albert">
                                {service.desc}
                              </p>
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
      {/* Why Choose Visa Synergy Section */}
      <div className="w-6xl mx-auto p-6 md:mt-10">
        <h2 className="text-xl md:text-5xl font-semibold text-[#3b4f84] font-asap mx-3 md:mx-0">
          Why Choose Visa Synergy?
        </h2>
        <p className=" text-[#333333] mt-2 w-full md:w-1/2 font-albert text-md md:text-2xl mx-3 md:mx-0">
          Expert Guidance, Seamless Processing & Proven Success in Your
          Immigration Journey!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-[90%] mx-auto justify-center">
          <Card className="p-4 text-center max-w-1/3 md:mx-10 bg-[#edf3f5]">
            <img
              src="/Images_home/bce.gif"
              alt="Easy Process"
              className="w-20 h-20 mx-auto mb-3"
            />
            <h3 className="font-semibold text-lg md:text-xl text-left ml-6">
              Expertise & Proven Success
            </h3>
            <CardContent className="text-[#404040] mt-2">
              <ul className="list-disc list-inside text-md md:text-lg text-left font-asap">
                <p className="pl-6 indent-[-1.7rem]">
                  ✔️ 21+ Years of Immigration Excellence
                </p>
                <p className="pl-6 indent-[-1.7rem]">
                  ✔️ Extensive knowledge of global visa policies
                </p>
                <p className="pl-6 indent-[-1.7rem]">
                  ✔️{" "}
                  <span>
                    High success rate in PR, Work Permits & Student Visa
                  </span>
                </p>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-4 text-center max-w-1/3 md:mx-10 bg-[#edf3f5]">
            <img
              src="/Images_home/easy.gif"
              alt="Easy Process"
              className="w-20 h-20 mx-auto mb-3"
            />
            <h3 className="font-semibold text-lg md:text-xl text-left ml-6">
              Easy & Effortless Process
            </h3>
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
            <img
              src="/Images_home/information.gif"
              alt="Easy Process"
              className="w-20 h-20 mx-auto mb-3"
            />
            <h3 className="font-semibold text-lg md:text-xl text-left ml-6">
              End-to-End Support
            </h3>
            <CardContent className="text-[#404040] mt-2 font-asap">
              <ul className="list-disc list-inside text-md md:text-lg text-left">
                <p className="pl-6 indent-[-1.7rem]">
                  ✔️ Guidance at Every Step
                </p>
                <p className="pl-6 indent-[-1.7rem]">
                  ✔️ Assistance from consultation to visa
                </p>
                <p className="pl-6 indent-[-1.7rem]">
                  ✔️ Document verification & post-landing assistance
                </p>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#51868e] text-white px-6 md:px-10 rounded-lg mt-12 text-center font-asap py-10 md:py-0">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
            <div className="flex-[2] flex justify-center">
              <Lottie
                animationData={animation}
                className="w-60 h-60 md:w-80 md:h-80"
              />
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
      </div>
      <Footer />
    </div>
  );
}
