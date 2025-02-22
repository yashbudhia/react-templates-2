import Image from "next/image";
import React from "react";
import riskManagement from "../../../../public/riskManagement.svg";

const RiskManagement = () => {
  return (
    <div className="bg-[#1B043A] font-[family-name:var(--font-manrope)] p-5 text-white flex flex-col justify-center items-center">
      <h1 className="light-gradient-text font-extrabold text-[40px] md:text-[64px] text-center">
        IT Risk Management
      </h1>
      <p className="lg:w-[70%] text-center text-[20px] mb-5">
        Enhance your security with our SOC as a Service—24/7 threat monitoring,
        real-time incident response, and advanced threat intelligence. We
        protect your business from cyber threats, ensuring compliance and
        resilience.
      </p>
      <Image src={riskManagement} alt="IT Risk Management" width={1000} />
    </div>
  );
};

export default RiskManagement;
