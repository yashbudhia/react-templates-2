import HeroSection from "@/components/AboutComponents/HeroSection";
import OurTeam from "@/components/AboutComponents/OurTeam";
import Slider from "@/components/Slider";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#1B043A] px-[1rem] md:px-[4rem] font-[family-name:var(--font-manrope)]">
      <HeroSection />
      <Slider />
      <OurTeam />
    </div>
  );
};

export default About;
