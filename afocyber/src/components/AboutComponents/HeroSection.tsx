import React from "react";
import lock from "../../../public/lockSecurity.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative md:h-[110vh] pb-[5rem] md:pb-0 pt-10">
      <div
        className="hidden md:flex bg-[#D359FF] h-[430px] w-[400px] absolute left-[-60px] top-[40%]  blur-[435.33px] rounded-r-full"
        style={{ zIndex: 1 }}
      />
      <div
        className="hidden md:flex absolute justify-center items-center w-full"
        style={{ zIndex: 1 }}
      >
        <Image src={lock} alt="" className="h-[900px] w-[1200px]" />
      </div>
      <h1
        className="light-gradient-text font-[800] text-[48px] text-center"
        style={{ zIndex: 30 }}
      >
        We provides best Approach to Security
      </h1>
      <div
        className="flex flex-col space-y-5 md:space-y-[-4rem] mt-[10rem] items-center h-full"
        style={{ zIndex: 50 }}
      >
        <div
          className="lg:h-[260px] md:w-[50%] lg:w-[50%] backdrop-blur-md bg-white/20 border border-white/25 rounded-[36px] shadow-lg p-5 lg:p-10 ring-1 ring-white/20 text-white md:translate-x-[-10rem]"
          style={{ zIndex: 50 }}
        >
          <h2 className="text-[26px] font-[700] leading-[35px]">Our Vision</h2>
          <div className="border border-b my-3" />
          <p className="leading-[30px] font-[600] text-[16px]">
            To become the foremost and reliable cybersecurity partner for
            government, corporate, and small to midsize businesses, driving
            change and establishing new benchmarks in the industry.
          </p>
        </div>

        <div
          className="lg:h-[260px] md:w-[50%] lg:w-[40%] backdrop-blur-md bg-white/20 border border-white/25 rounded-[36px] shadow-lg p-5 lg:p-10 ring-1 ring-white/20 text-white md:translate-x-[10rem]"
          style={{ zIndex: 50 }}
        >
          <h2 className="text-[26px] font-[700] leading-[35px]">Our Mission</h2>
          <div className="border border-b my-3" />
          <p className="leading-[30px] font-[600] text-[16px]">
            To safeguard critical infrastructures by offering comprehensive,
            proactive, and cost-effective cybersecurity solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
