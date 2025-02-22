import Image from "next/image";
import React from "react";
import img from "../../../../public/services-05.jpg";

const Page = () => {
  return (
    <div className="bg-[#1B043A] font-[family-name:var(--font-manrope)] p-5 text-white flex flex-col justify-center items-center">
      <h1 className="light-gradient-text font-extrabold text-[64px] text-center leading-tight">
        Incident Response and Forensics
      </h1>
      <p className="lg:w-[70%] text-center text-[20px] mb-5">
        In case of a breach, our incident response team provides rapid
        containment, forensic analysis, and post-incident recommendations and
        lessons learned.
      </p>
      <Image src={img} alt="Incident Response and Forensics" width={800} />
    </div>
  );
};

export default Page;
