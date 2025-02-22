import { Phone } from "lucide-react";
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="bg-[#1B043A] font-[family-name:var(--font-manrope)] p-5 text-white flex flex-col justify-center items-center relative">
      <div className="bg-[#D359FF] hidden md:flex rounded-r-full h-[500px] w-[300px] blur-[435.33px] absolute top-[50%] left-0" />
      <h1 className="light-gradient-text font-extrabold text-[64px] text-center leading-tight">
        Our Locations
      </h1>
      <div className="flex flex-col justify-center items-center w-full">
        <p className="lg:w-[70%] text-center text-[20px] flex justify-center md:space-x-7">
          {/* <MapPin size="30px" /> */}
          <span>
            <span className="font-bold">Nigeria:</span> 1st Floor, Dalian Plaza,
            43, Oritshe Street, Balogun Bus-stop, Obafemi Awolowo way Ikeja
            Lagos
          </span>
        </p>
        <p className="lg:w-[70%] text-center text-[20px] mt-2 mb-5 flex md:space-x-10 justify-center">
          <Phone size="30px" />
          <a href="tel:+2349121287092">+2349121287092</a>
        </p>
        <p className="lg:w-[70%] text-center text-[20px] flex md:space-x-10 justify-center">
          {/* <MapPin size="30px" /> */}
          <span>
            <span className="font-bold">USA:</span> 2550 Gray Falls Drive –
            Suite 217 Houston, Texas 77077
          </span>
        </p>
        <p className="lg:w-[70%] text-center text-[20px] mt-2 mb-5 flex md:space-x-10 justify-center">
          <Phone size="30px" />
          <a href="tel:+19804280217">+19804280217</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUsPage;
