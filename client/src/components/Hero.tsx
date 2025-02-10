import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { MoveRight } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
const Images = [
  "/Images_home/bg_image_1.png",
  "/Images_home/bg_image_2.png",
  "/Images_home/bg_image_3.png",
  "/Images_home/bg_image_4.jpg",
];
const Hero = () => {
  return (
    <div className="h-screen w-full relative bg-black">
      <Carousel plugins={[AutoPlay({ delay: 3000 })]}>
        <CarouselContent>
          {Images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="h-screen w-full relative">
                <Image
                  src={image}
                  alt="image"
                  fill
                  className="object-cover opacity-50"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

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
            {["usa", "australia", "canada", "europe", "newzealand"].map(
              (country) => (
                <Button
                  key={country}
                  variant="outline"
                  className="bg-transparent border-2 text-xs sm:text-sm md:text-lg px-3 py-1 sm:px-4 sm:py-2 border-white hover:bg-white transition duration-700 flex items-center"
                >
                  {country.toUpperCase()}
                  <Image
                    src={`/Images_home/${country}.png`}
                    width={14}
                    height={14}
                    className="ml-2"
                    alt={`${country} Flag`}
                  />
                </Button>
              )
            )}
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

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="first-name"
                      className="font-albert font-bold"
                    >
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="first-name"
                      className="font-albert bg-white border-gray-300"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="last-name"
                      className="font-albert font-bold"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="last-name"
                      className="font-albert bg-white border-gray-300"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-albert font-bold">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    className="font-albert bg-white border-gray-300"
                    type="email"
                    placeholder="Enter your mail"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="mobile" className="font-albert font-bold">
                    Mobile Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="mobile"
                    className="font-albert bg-white border-gray-300"
                    type="tel"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="country" className="font-albert font-bold">
                      Country <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="font-albert border-gray-300 text-gray-600">
                        <SelectValue
                          placeholder="Select a country"
                          className="placeholder-albert"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="new-zealand">New Zealand</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label
                      htmlFor="visa-category"
                      className="font-albert font-bold"
                    >
                      Visa Category <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="font-albert border-gray-300 text-gray-600">
                        <SelectValue
                          placeholder="Select your visa type"
                          className="placeholder-albert"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="work">Work</SelectItem>
                        <SelectItem value="study">Study</SelectItem>
                        <SelectItem value="immigration">Immigration</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="tourist">Tourist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#51868e] text-white py-3 text-lg font-albert hover:text-[#51868e] hover:bg-white hover:border-2 hover:border-[#51868e] transition duration-700"
                >
                  Start Your Journey
                </Button>
              </form>
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
