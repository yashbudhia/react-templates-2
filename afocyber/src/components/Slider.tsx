import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import shieldBroken from "../../public/shield-broken.svg";

const Slider = () => {
  return (
    <Marquee className="flex" gradientColor="white" gradientWidth="200px">
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
      <Image src={shieldBroken} alt="Security" className="mx-7 w-10 h-10" />
    </Marquee>
  );
};

export default Slider;
