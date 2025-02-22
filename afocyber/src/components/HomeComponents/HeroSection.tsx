"use client";

import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "../ui/button";
import Image from "next/image";
import target from "../../../public/target.svg";
import print from "../../../public/printSecurity.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ContactForm from "../ContactForm";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="z-40 px-[1rem] md:px-[4rem] font-[family-name:var(--font-manrope)] h-[75vh] flex flex-col justify-center items-center relative">
      <div className="bg-[#D359FF] hidden md:flex rounded-r-full h-[500px] w-[300px] blur-[435.33px] absolute top-[50%] left-0" />

      <div className="hidden md:flex absolute left-0 lg:left-[10rem] top-[11rem]">
        <Image src={target} alt="Target" />
      </div>
      <div className="hidden md:flex absolute right-4 lg:right-[1rem] top-[1rem] z-5">
        <Image src={print} alt="Fingerpint Security" />
      </div>
      <h1 className="light-gradient-text font-extrabold text-[64px] tracking-[-2px] lg:w-[50%] text-center leading-[80px] z-10">
        Empowering Secure Growth
      </h1>
      <p className="text-[#808080] text-center font-semibold text-[16px] mb-[2rem] md:mb-[6rem] z-10">
        Comprehensive Cybersecurity Solutions from Compliance to Continuous
        Threat Monitoring.
      </p>
      <Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button onClick={() => setOpen(true)} style={{ zIndex: 50 }}>
              <div className="flex items-center gap-2 py-3 px-5">
                <p>Get Started</p>
                <BsArrowRight size="20px" />
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="bg-[#0000007D] text-white border-0 max-w-screen md:max-w-[70vw] w-full p-0">
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <ContactForm onClose={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </Button>
    </div>
  );
};

export default HeroSection;
