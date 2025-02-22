"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/afoLogo.svg";
import NavLinks from "./NavLinks";
import searchIcon from "../../../public/searchIcon.svg";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className="flex justify-between items-center w-full h-[15vh] bg-[#1B043A] p-5 px-[1rem] md:px-[4rem] font-[family-name:var(--font-manrope)] z-[100]"
      style={{ zIndex: 1000 }}
    >
      <Image src={logo} alt="Afo Cyber Sec" />
      <div className="flex md:hidden">
        <button
          className="p-2 text-gray-700 dark:text-white"
          onClick={() => setIsOpen(true)}
        >
          <BiMenu size={24} color="white" />
        </button>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-[#1B043A] dark:bg-gray-900 shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
          style={{ zIndex: 100 }}
        >
          <div className="p-4 flex justify-between items-center border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {/* Sidebar */}
            </h2>
            <button onClick={() => setIsOpen(false)} className="text-white">
              {/* <X size={24} /> */}X
            </button>
          </div>

          <nav className="mt-4 space-y-3 px-4 flex flex-col text-white">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href={"/our-services"} onClick={() => setIsOpen(false)}>
              Our Services
            </Link>
            <Link href={"/#portfolio"} onClick={() => setIsOpen(false)}>
              Solution
            </Link>
            {/* <Link href={"/"} onClick={() => setIsOpen(false)}>
              Blogs
            </Link> */}
            <Link href={"/contact-us"} onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            style={{ zIndex: 1 }}
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
      <div className="hidden md:flex ">
        <NavLinks />
      </div>
      <div className="border border-white rounded-xl px-2 hidden xl:flex gap-2">
        <Image src={searchIcon} alt="search" />
        <input
          type="text"
          placeholder="Search"
          className="placeholder:text-white text-white outline-none bg-transparent py-2"
          style={{ zIndex: 10 }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
