import Image from "next/image";
import React from "react";
import img from "../../../../public/Compliance.jpg";

const Page = () => {
  return (
    <div className="bg-[#1B043A] font-[family-name:var(--font-manrope)] p-5 text-white flex flex-col justify-center items-center">
      <h1 className="light-gradient-text font-extrabold text-[64px] text-center leading-tight">
        Compliance Management
      </h1>
      <p className="lg:w-[70%] text-center text-[20px] mb-5">
        Our compliance services supports you to meet industry and regulatory
        requirements, including GDPR, ISO 27001, and other government
        frameworks. Our approach treats regulatory and industry standard as the
        minimum requirements; we go a step further to stay ahead of compliance.
      </p>
      <Image src={img} alt="Compliance Management" width={800} />
    </div>
  );
};

export default Page;
