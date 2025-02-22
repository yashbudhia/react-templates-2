import Image from "next/image";
import React from "react";
import img from "../../../../public/services-06.jpg";

const Page = () => {
  return (
    <div className="bg-[#1B043A] font-[family-name:var(--font-manrope)] p-5 text-white flex flex-col justify-center items-center">
      <h1 className="light-gradient-text font-extrabold text-[64px] text-center leading-tight">
        Managed Firewall and Network Security
      </h1>
      <p className="lg:w-[70%] text-center text-[20px] mb-5">
        Keep your network secure with robust firewall protection, traffic
        monitoring, and intrusion detection services.
      </p>
      <Image
        src={img}
        alt="Managed Firewall and Network Security"
        width={800}
      />
    </div>
  );
};

export default Page;
