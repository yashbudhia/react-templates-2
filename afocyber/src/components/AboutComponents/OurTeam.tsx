import React from "react";
import ojo from "../../../public/ojo.svg";
import Image from "next/image";
import pointer from "../../../public/pointer.svg";

const OurTeam = () => {
  return (
    <div className="text-white py-10 relative">
      <div
        className="hidden md:flex bg-[#4F3EE7B2] absolute h-[530px] w-[530px] right-[-60px] top-[50%] rounded-l-full blur-[435.33px]"
        style={{ zIndex: 1 }}
      />
      <h1 className="hidden light-gradient-text font-[800] text-[48px] text-center">
        Our Team
      </h1>
      <p className=" hidden text-center text-[26px] font-[500]">
        Meet our experienced individuals
      </p>
      <div className="hidden justify-between grid-cols-3 items-start mt-10">
        <div className="opacity-25 hidden md:flex">
          <Image src={ojo} alt="Ojo Akinnisola | Founder/CEO" />
        </div>
        <div className="space-y-5">
          <Image src={ojo} alt="Ojo Akinnisola | Founder/CEO" />
          <p className="text-[24px] font-[700]">
            Ojo Akinnisola |{" "}
            <span className="font-[400] opacity-70 text-[18px]">
              Founder/CEO
            </span>
          </p>
        </div>
        <div className="opacity-25 hidden md:flex" style={{ zIndex: 50 }}>
          <Image src={ojo} alt="Ojo Akinnisola | Founder/CEO" />
        </div>
      </div>

      <div className="relative flex justify-center items-center pt-[2rem] md:pt-[14rem] mb-[4rem]">
        <div
          className="hidden md:flex md:absolute left-0 lg:left-[8rem] top-0 lg:top-[5rem]"
          style={{ zIndex: 50 }}
        >
          <Image src={pointer} alt="Security" />
        </div>
        <div
          className="lg:w-[50%] backdrop-blur-md bg-white/20 border border-white/25 rounded-[36px] shadow-lg p-10 ring-1 ring-white/20 text-white"
          style={{ zIndex: 10 }}
        >
          <p className="text-[16px] font-[500] leading-[30px]">
            Established with a goal to deliver top-notch cybersecurity
            solutions, AFO Cyber-Sec Solutions has been safeguarding
            organizations and government entities from cyber threats for over
            five years. Our team consists of certified professionals, each with
            extensive experience and expertise, who work diligently to provide
            customized, high-quality services to ensure the security of your
            information systems in the digital age. We take pride in our
            proactive approach to cybersecurity, continuously innovating and
            utilizing state-of-the-art tools and technologies to defend against
            the constantly evolving threat landscape. Our core values are trust,
            innovation, and integrity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
