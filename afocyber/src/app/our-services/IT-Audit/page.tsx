import Image from "next/image";
import React from "react";
import IT from "../../../../public/audit.svg";

const Service = () => {
  return (
    <div className="bg-[#1B043A] font-[family-name:var(--font-manrope)] p-5 text-white flex flex-col justify-center items-center gap-0">
      <h1 className="light-gradient-text font-extrabold text-[64px]">
        IT Audit
      </h1>
      <p className="lg:w-[70%] text-center text-[20px] mb-5">
        AFO Solution has a team of dedicated IT auditors with vast experience in
        investigating the effectiveness of controls within an organization.
        <br /> Our auditors use independent reasoning with supporting
        authoritative facts to test IT controls effectiveness within an
        information system.
      </p>
      <Image src={IT} alt="IT Audit" />
    </div>
  );
};

export default Service;
