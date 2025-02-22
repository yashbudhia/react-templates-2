import Image from "next/image";
import React from "react";
import logo from "../../../public/afoLogo.svg";
import Link from "next/link";
import securityIcon from "../../../public/3D-security.svg";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <div className="relative bg-[#1B043A] text-white p-5 px-1 md:px-[4rem] font-[family-name:var(--font-manrope)] overflow-hidden">
      <div
        className="bg-[#4F3EE7B2] rounded-l-full  h-[530px] w-[530px] blur-[435.33px] absolute top-[-10%] right-0 hidden md:flex"
        style={{ zIndex: 1 }}
      />

      <div className="z-40">
        <div className="md:flex justify-between items-center">
          <Image src={logo} alt="Afo Cyber Sec" />
          <div className="lg:flex items-center gap-4">
            <p className="text-xl text-semibold">Subscribe to our Newsletter</p>
            <div
              className="border border-[#FAFAFA] rounded-xl flex"
              style={{ zIndex: 10 }}
            >
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent placeholder:text-[#FAFAFA4D] font-medium pl-4 py-2 w-full  lg:w-[40vw] outline-none"
              />
              <button className="bg-white px-5 py-2 rounded-r-lg text-black text-medium text-[18px] ">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-start mt-1 md:mt-10 ">
          <div className="space-y-5 md:space-y-10 pt-[2rem] md:pt-[5rem]">
            <h2 className="font-semibold text-[26px]">Navigations</h2>
            <ul className="flex flex-col gap-5 md:gap-8 text-[#FAFAFA80] font-medium text-[16px]">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/our-services"}>Our Services</Link>
              <Link href={"/"}>Solutions</Link>
              {/* <Link href={"/"}>Blog</Link> */}
              <Link href={"/contact-us"}>Contact Us</Link>
            </ul>
            <div className="hidden md:flex gap-10 items-center">
              <div className="bg-white p-3 rounded-full w-fit">
                <BsTwitterX color="black" />
              </div>
              <div className="bg-white p-3 rounded-full w-fit">
                <FaLinkedinIn color="black" />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex z-10">
            <Image src={securityIcon} alt="Internet Security" height={680} />
          </div>
          <div
            className="space-y-5 md:space-y-10 md:text-right pt-[5rem]"
            style={{ zIndex: 10 }}
          >
            <h2 className="font-semibold text-[26px]">Services</h2>
            <ul
              className="flex flex-col gap-5 md:gap-8 text-[#FAFAFA80] font-medium text-[16px]"
              style={{ zIndex: 10 }}
            >
              <Link href={"/our-services"}>SOC as a service</Link>
              <Link href={"/our-serivces"} className="truncate">
                Managed Threat Detection
              </Link>
              <Link href={"/our-services"} className="truncate">
                Vunerability Management
              </Link>
              <Link href={"/our-services"} className="truncate">
                Audit & Compliance
              </Link>
              <Link href={"/our-services"}>Network Security</Link>
              <Link href={"/our-services"} className="truncate">
                Incident Response & Forensics
              </Link>
            </ul>
            <div className="hidden md:flex gap-10 items-center justify-end">
              <div className="bg-white p-2 rounded-full w-fit">
                <TiSocialInstagram color="black" size="25px" />
              </div>
              <FaFacebook size="40px" />
            </div>
          </div>
        </div>
        <div className="mt-[1rem] md:mt-0 xl:mt-[-5rem] z-1 border-2 md:h-[30rem] md:space-y-[-8rem] uppercase">
          <Marquee className="md:mt-[-5rem]">
            <p className="text-[100px] md:text-[250px] font-extrabold light-gradient-text mx-10 tracking-[-8%]">
              Afo Cyber-Sec
            </p>
          </Marquee>
          <Marquee className="">
            <p className="text-[100px] md:text-[250px] font-extrabold light-gradient-text mx-10 tracking-[-8%]">
              Solutions
            </p>
            <p className="text-[100px] md:text-[250px] font-extrabold light-gradient-text mx-10 tracking-[-8%]">
              Solutions
            </p>
            <p className="text-[100px] md:text-[250px] font-extrabold light-gradient-text mx-10 tracking-[-8%]">
              Solutions
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Footer;
