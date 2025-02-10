"use client";
import Lottie from "lottie-react";
import React from "react";
import animation from "@/assets/Animation_passport.json";
const Animation = () => {
  return (
    <Lottie animationData={animation} className="w-60 h-60 md:w-80 md:h-80" />
  );
};

export default Animation;
