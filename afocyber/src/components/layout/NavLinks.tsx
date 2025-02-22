"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-start gap-5 text-[10px] md:text-[18px]">
      <Link
        href="/"
        className={`${
          pathname === "/" ? "text-white border-b" : "text-[#FAFAFA80]"
        }  pb-2 px-1 lg:px-4 `}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${
          pathname === "/about" ? "text-white border-b " : "text-[#FAFAFA80]"
        }  pb-2 px-1 lg:px-4 `}
      >
        About Us
      </Link>
      <Link
        href={"/our-services"}
        className="text-[#FAFAFA80] pb-2 px-1 lg:px-4"
      >
        Our Services
      </Link>
      <Link href={"/#portfolio"} className="text-[#FAFAFA80] pb-2 px-1 lg:px-4">
        Solution
      </Link>
      {/* <Link href={"/"} className="text-[#FAFAFA80] pb-2 px-1 lg:px-4">
        Blogs
      </Link> */}
      <Link href={"/contact-us"} className="text-[#FAFAFA80] pb-2 px-1 lg:px-4">
        Contact Us
      </Link>
    </ul>
  );
};

export default NavLinks;
