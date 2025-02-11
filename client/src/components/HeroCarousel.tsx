"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const Images = [
  "/Images_home/bg_image_1.png",
  "/Images_home/bg_image_2.png",
  "/Images_home/bg_image_3.png",
  "/Images_home/bg_image_4.jpg",
];
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
const HeroCarousel = () => {
  return (
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
  );
};

export default HeroCarousel;
