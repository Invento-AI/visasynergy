import OfficeInfo from "@/components/OfficeInfo";
import React from "react";
import "@fontsource/asap-condensed";
import "@fontsource/albert-sans";
import "@fontsource/asap-condensed";
import Image from "next/image";
import ContactUsForm from "@/components/ContactUsForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <main className="px-4 md:px-0 mx-auto max-w-screen-xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-[#3B4F84]">
          Get in Touch – Your Journey Starts Here!
        </h1>
        <p className="text-center text-black mt-2 text-lg md:text-2xl font-albert">
          Have questions about your visa application? Our experts are ready to
          assist you every step of the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-12 items-stretch">
          <div className="flex flex-col space-y-6 justify-between">
            <div className="w-full">
              <Image
                src="/contact_girl.png"
                alt="Contact Us"
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="space-y-4 md:space-y-12">
              <div className="flex items-center space-x-4 p-4 bg-[#edf3f5] rounded-md font-albert">
                <div className="p-2 bg-white rounded-full">
                  <img src="/email.gif" alt="email" className="w-10 h-10" />
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-gray-600 text-sm md:text-base">
                    info@visasynergy.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#edf3f5] rounded-md font-albert">
                <div className="p-2 bg-white rounded-full">
                  <img src="/call.gif" alt="phone" className="w-10 h-10" />
                </div>
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-gray-600 text-sm md:text-base">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8 bg-[#edf3f5] rounded-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#ff5f00] font-albert">
              Get in touch
            </h2>
            <p className="text-sm md:text-base font-albert">
              We're here to help. Send us a message & we will respond within 24
              hours.
            </p>
            <hr className="border-[#51868e] border-1 my-4" />

            <ContactUsForm />
          </div>
        </div>

        <section className="py-16 mt-6 bg-white text-gray-900">
          <div className="container mx-auto px-6">
            <div className="hidden md:grid grid-cols-2 gap-12 items-center">
              <OfficeInfo />
              <Image
                src="/map.png"
                alt="Office Location Map"
                width={730}
                height={444}
                className="transition-transform duration-700 transform hover:scale-95 shadow-md border-[15px] border-white"
              />
            </div>

            <div className="md:hidden flex flex-col space-y-8 items-center text-center">
              <OfficeInfo />

              <Image
                src="/map.png"
                alt="Office Location Map"
                width={350}
                height={250}
                className="shadow-md border-8 border-white"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
