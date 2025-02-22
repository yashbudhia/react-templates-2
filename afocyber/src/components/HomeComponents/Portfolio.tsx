"use client";
import Image from "next/image";
import React, { useState } from "react";
import business from "../../../public/business.svg";
import agency from "../../../public/agency.svg";
import marketing from "../../../public/marketing.svg";

const Portfolio = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <div
      id="portfolio"
      className="relative flex flex-col justify-center items-center px-[4rem] p-5 text-white font-[family-name:var(--font-manrope)] xl:h-[100vh]"
    >
      <div className="z-40">
        <div className="text-center leading-[50px]">
          <h1 className="light-gradient-text font-extrabold text-[64px] tracking-[-2px]">
            Portfolio
          </h1>
          <p className="text-[#FAFAFA] font-semibold text-[26px]">
            Our Latest Case Studies
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 items-center gap-[5rem] justify-center ">
          <div
            className="flex flex-col justify-center items-center"
            onMouseEnter={() => setIsActive("business")}
            onMouseLeave={() => setIsActive("")}
          >
            <div className="image-container">
              <Image src={business} alt="business" className="" />
            </div>
            <div
              className={`flex flex-col justify-center items-center mt-4 space-y-3 transition-opacity duration-700 ${
                isActive === "business" ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="border p-5 py-3 w-fit rounded-[24px] text-[16px]">
                Business
              </p>
              <p className="text-[#808080] text-[16px] font-[600]">
                Cyber Security Protects Sensitive Data
              </p>
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center"
            onMouseEnter={() => setIsActive("agency")}
            onMouseLeave={() => setIsActive("")}
          >
            <div className="image-container">
              <Image src={agency} alt="agency" className="" />
            </div>
            <div
              className={`flex flex-col justify-center items-center mt-4 space-y-3 transition-opacity duration-700 ${
                isActive === "agency" ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="border p-5 py-3 w-fit rounded-[24px] text-[16px]">
                Agency
              </p>
              <p className="text-[#808080] text-[16px] font-[600] text-center">
                The Steps to Gaining Privileged Access Security
              </p>
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center"
            onMouseEnter={() => setIsActive("marketing")}
            onMouseLeave={() => setIsActive("")}
          >
            <div className="image-container">
              <Image src={marketing} alt="marketing" className="" />
            </div>
            <div
              className={`flex flex-col justify-center items-center mt-4 space-y-3 transition-opacity duration-700 ${
                isActive === "marketing" ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="border p-5 py-3 w-fit rounded-[24px] text-[16px]">
                Marketing
              </p>
              <p className="text-[#808080] text-[16px] font-[600] text-center">
                Enhance Trust, Compliance, And Governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
