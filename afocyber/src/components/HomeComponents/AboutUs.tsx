"use client";
import React from "react";
import Button from "../ui/button";
import { BsArrowRight } from "react-icons/bs";
import lock from "../../../public/lockSecurity.svg";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="z-40 pb-[3rem] md:pb-0 px-[1rem] pt-[2rem] md:pt-[0rem] md:px-[4rem] flex items-center font-[family-name:var(--font-manrope)] md:h-[80vh] relative">
      <div
        className="hidden md:flex absolute left-[1rem]"
        style={{ zIndex: 1 }}
      >
        <Image src={lock} alt="" className="w-[35rem] lg:w-[40rem]" />
      </div>
      <div className="flex md:justify-end items-center" style={{ zIndex: 100 }}>
        <div className="w-full md:w-[60%] lg:w-[50%] md:space-y-10 left">
          <h1 className="light-gradient-text font-extrabold text-[48px] tracking-[-2px] lg:w-[50%] leading-[80px] z-10">
            About Us
          </h1>
          <div className="space-y-2 mb-4">
            <p className="text-white font-[600] text-[26px]">
              Established with a goal to deliver top-notch cybersecurity
              solutions
            </p>
            <p className="text-[#808080] text-[16px] font-[600]">
              AFO Cyber-Sec Solutions has been safeguarding organizations and
              government entities from cyber threats for several years. Our team
              consists of certified professionals, each with extensive
              experience and expertise, who work diligently to provide
              customized, high-quality services to ensure the security of your
              information systems in the digital age.
            </p>
          </div>

          <Button className="w-fit">
            <Link
              href="/about"
              className="flex items-center gap-2 py-3 px-5"
              onClick={() => console.log("clicked")}
              style={{ zIndex: 100 }}
            >
              <p>Learn More</p>
              <BsArrowRight size="20px" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
