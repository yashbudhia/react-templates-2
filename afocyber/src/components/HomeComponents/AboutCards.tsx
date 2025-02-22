import React from "react";
import Image from "next/image";
import image1 from "../../../public/image1.svg";
import image2 from "../../../public/image2.svg";
import image3 from "../../../public/image3.svg";

const AboutCards = () => {
  return (
    <div className="hidden md:flex">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-5 mb-10 px-[1rem] md:px-[4rem] w-full">
        <div className="img">
          <Image src={image1} alt="IT Risk Management" />
        </div>
        <div className="img">
          <Image src={image2} alt="IT Risk Management" />
        </div>
        <div className="img">
          <Image src={image3} alt="IT Risk Management" />
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
