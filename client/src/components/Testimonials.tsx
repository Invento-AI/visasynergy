import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial } from "@/lib/response_structure";
import axios from "axios";

const API_BASE_URL = "http://34.100.142.28";

const TestimonialCard = ( { testimonial }: { testimonial: Testimonial } ) => {
  return (
    <Card className="h-[300px] text-left max-w-1/5 md:mx-10 flex flex-col p-4 shadow-lg rounded-lg font-albert">
      <CardContent className="flex flex-col space-y-3 h-full">
        <div className="flex items-center space-x-1 ">
          {[...Array(5)].map((_, index:number) => (
            <span
              key={index}
              className={`text-lg ${
                index < testimonial.stars ? "text-black" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Feedback Section */}
        <p className="text-gray-700 text-sm flex-1 line-clamp-3">
          {testimonial.feedback}
        </p>

        {/* Footer Section (Image, Name, Designation) */}
        <div className="flex items-center">
          <img
            src={testimonial.image.url}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="text-blue-700 font-semibold text-xs">
              {testimonial.name}
            </h3>
            <p className="text-gray-500 text-xs">{testimonial.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = async() => {

  const resTestimonial = await axios.get( API_BASE_URL + "/api/testimonials?populate=*");
  const testimonials = resTestimonial.data.data

  return (
    <div className="md:mt-10 p-6 text-black">
      <h2 className="text-xl md:text-5xl font-semibold text-[#3b4f84] font-asap mx-3 md:mx-0">
        Why Choose Visa Synergy?
      </h2>
      <p className=" text-[#333333] mt-2 w-full md:w-1/2 font-albert text-md md:text-2xl mx-3 md:mx-0">
        Expert Guidance, Seamless Processing & Proven Success in Your
        Immigration Journey!
      </p>
      <div className=" px-6 w-full mt-12 mx-auto">
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial: Testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial}/>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
