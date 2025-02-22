"use client";
import React, { useState } from "react";
import Button from "../ui/button";
import { BsArrowRight } from "react-icons/bs";
import compliance from "../../../public/compliance.svg";
import management from "../../../public/management.svg";
import detection from "../../../public/detection.svg";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ContactForm from "../ContactForm";

const ChooseUs = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative items-center font-[family-name:var(--font-manrope)] px-[1rem] md:px-[4rem] py-[5rem]">
      <div className="lg:grid grid-cols-2">
        <div className="lg:w-[80%] space-y-5 lg:space-y-0 flex flex-col justify-center">
          <h1 className="light-gradient-text font-extrabold text-[64px] tracking-[-2px] leading-[60px]">
            Why Choose Us
          </h1>
          <p className="text-white text-[26px] font-[600]">
            Expert Support to Enhance Your Security Posture
          </p>
          <p className="text-[#808080] font-[600] text-[16px]">
            We offer comprehensive services, including Managed Threat Detection
            and Intelligence, Vulnerability Management, and Compliance
            Monitoring, to provide a secure environment that meets and exceeds
            regulatory standards.
          </p>
          <div className="hidden md:flex h-[10rem]" />
          <Button className="w-fit">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button onClick={() => setOpen(true)} style={{ zIndex: 50 }}>
                  <div className="flex items-center gap-2 py-3 px-5">
                    <p>Get Started</p>
                    <BsArrowRight size="20px" />
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="text-white border-0 max-w-screen md:max-w-[70vw] w-full p-0">
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <ContactForm onClose={() => setOpen(false)} />
              </DialogContent>
            </Dialog>
          </Button>
        </div>
        <div style={{ zIndex: 10 }} className="hidden md:flex flex-col">
          <div className="flex justify-end items-center">
            <Button>
              <div className="md:flex items-center justify-center gap-2 py-3 w-full">
                <p>Proactive Threat Detection</p>
              </div>
            </Button>
            <Image src={detection} alt="Proactive Threat Detection" />
          </div>
          <div className="flex items-center">
            <Button>
              <div className="flex items-center justify-center gap-2 py-3 w-full">
                <p>Regulatory Compliance</p>
              </div>
            </Button>
            <Image src={compliance} alt="Regulatory Compliance" />
          </div>
          <div className="md:flex items-center">
            <Image
              src={management}
              alt="Comprehensive Vunerability Management"
            />

            <Button className="w-fit">
              <div className="flex items-center justify-center gap-2 py-3 w-full">
                <p>Comprehensive Vunerability Management</p>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div
        className="absolute bg-[#D359FF80] rounded-l-full h-[530px] w-[400px] top-[20%] right-0 blur-[400.33px]"
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

export default ChooseUs;
