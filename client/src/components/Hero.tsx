// import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import axios from "axios";
import { MoveRight } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Country, Continent } from "../lib/response_structure"
import Link from "next/link";
import axios from "axios";
import HeroCarousel from "./HeroCarousel";
import QuickEnquiry from "./QuickEnquiry";

const API_BASE_URL = "http://34.100.142.28";

const Hero = async () => {
  const resCountry = await axios.get(API_BASE_URL + "/api/countries?populate=*");
  const country_names: { name: string; flag: string }[] = [];
  
  resCountry.data.data.map((item: Country) => {
    if(item.show_on_home){
      country_names.push({
        name: item.name,
        flag: item.image? item.image.url : "",
      });
    }
  });

  const resContinent = await axios.get(API_BASE_URL + "/api/continents?populate=*");
  const continent_names: { name: string; flag: string }[] = [];

  resContinent.data.data.map((item: Continent) => {
    continent_names.push({
      name: item.name,
      flag: item.image? item.image.url : "",
    });
  });

  return (
    <div className="h-screen w-full relative bg-black">
      <HeroCarousel />
      <section className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white px-4 md:px-6 z-20">
        <div className="text-center w-full flex flex-col items-center md:-mt-24">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold">
            Your Gateway to a New Beginning
          </h1>
          <p className="mt-2 text-base sm:text-lg md:text-2xl font-albert px-2 md:mb-6">
            Simplifying Immigration and Visa Processes for a World of
            Opportunities
          </p>

          {/* Country Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-16">
            {country_names.map((country) => (
              <Link href={`/${country.name}`} key={country.name}>
                <Button
                  key={country.name}
                  variant="outline"
                  className="bg-transparent border-2 text-xs sm:text-sm md:text-lg px-3 py-1 sm:px-4 sm:py-2 border-white hover:bg-white transition duration-700 flex items-center"
                >
                  {country.name.toUpperCase()}
                  <img
                    src={country.flag}
                    width={14}
                    height={14}
                    className="ml-2"
                    key={`${country.name} Flag`}
                  />
                </Button>
              </Link>
            ))}
            {continent_names.map((continent) => (
              <Link href={`/${continent.name}`} key={continent.name}>
                <Button
                  key={continent.name}
                  variant="outline"
                  className="bg-transparent border-2 text-xs sm:text-sm md:text-lg px-3 py-1 sm:px-4 sm:py-2 border-white hover:bg-white transition duration-700 flex items-center"
                >
                  {continent.name.toUpperCase()}
                  <img
                    src={continent.flag}
                    width={14}
                    height={14}
                    className="ml-2"
                    key={`${continent.name} Flag`}
                  />
                </Button>
              </Link>
            ))}
          </div>

          <p className="mt-6 text-lg sm:text-xl md:text-3xl font-albert md:mt-12">
            Start Your Immigration Journey Today!
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4 px-4 py-2 sm:px-6 sm:py-3 border-2 bg-[#51868e] border-[#51868e] text-white rounded-lg text-sm sm:text-lg md:text-xl shadow-lg hover:bg-transparent hover:text-white transition duration-700 hover:border-white group">
                Quick Enquiry
                <span className="ml-2 transition-transform duration-500 group-hover:-rotate-[45deg]">
                  <MoveRight />
                </span>
              </Button>
            </DialogTrigger>

            {/* Enquiry Form */}
            <DialogContent className="max-w-lg p-6 rounded-lg w-[90%] md:mx-auto bg-white text-black">
              <DialogHeader>
                <DialogTitle className="text-center text-lg font-bold font-albert">
                  Quick Enquiry
                </DialogTitle>
              </DialogHeader>
              <QuickEnquiry btncss="w-full bg-[#51868e] text-white py-3 text-lg font-albert hover:text-[#51868e] hover:bg-white hover:border-2 hover:border-[#51868e] transition duration-700" />
            </DialogContent>
          </Dialog>
        </div>
      </section>
      <div className="absolute right-5 top-[60%] hidden md:flex flex-col space-y-3 z-20">
        <Link href="#" className="bg-blue-600 p-3 rounded-md text-white">
          <FaFacebook size={24} />
        </Link>
        <Link href="#" className="bg-blue-700 p-3 rounded-md text-white">
          <FaLinkedin size={24} />
        </Link>
        <Link href="#" className="bg-pink-500 p-3 rounded-md text-white">
          <FaInstagram size={24} />
        </Link>
        <Link href="#" className="bg-green-500 p-3 rounded-md text-white">
          <FaWhatsapp size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
