import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import polygon from "../../../public/Polygon.svg";
import audit from "../../../public/services.jpg";
import riskManagement from "../../../public/riskmanagement.jpg";
import incident from "../../../public/services-05.jpg";
import firewall from "../../../public/services-06.jpg";
import Compliance from "../../../public/Compliance.jpg";
import key from "../../../public/service-07.jpg";

const OurServices = () => {
  return (
    <div className="bg-[#1B043A] font-[family-name:var(--font-manrope)] p-5 text-white flex flex-col justify-center items-center gap-3">
      <h1 className="light-gradient-text font-extrabold text-[64px] text-center">
        Our Services
      </h1>
      <p className="lg:w-[70%] text-center text-[20px]">
        At AFO Cyber-Sec Solutions, our unwavering commitment is to offer a
        range of services designed not just to secure your digital assets, but
        also protect sensitive data and ensure regulatory compliance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-[3rem]">
        {/* IT Audit  */}
        <div className="flex flex-col items-center">
          <div className="img-container hidden lg:flex">
            <Image src={audit} alt="IT Audit" className="h-[30vh]" />
          </div>
          <div className="flex lg:hidden">
            <Image src={audit} alt="IT Audit" className="rounded-xl h-[30vh]" />
          </div>
          <Image src={polygon} alt="" className="my-4" width={15} />

          <div className="flex flex-col justify-between p-5 bg-[#FFFFFF0D] lg:h-[240px] rounded-[20px] text-center lg:w-[25vw]">
            <div>
              <div className="border-b pb-2">
                <p className="text-[20px] xl:text-[26px] font-[600]">
                  IT Audit
                </p>
              </div>
              <p className="text-[#808080] font-[600] text-[12px] md:text-[13px] xl:text-[16px] my-3 line-clamp-3">
                AFO Solution has a team of dedicated IT auditors with vast
                experience in investigating the effectiveness of controls within
                an organization. Our auditors use independent reasoning with
                supporting authoritative facts to test IT controls effectiveness
                within an information system.
              </p>
            </div>

            <Button>
              <Link
                href="/our-services/IT-Audit"
                className="flex items-center justify-center gap-2 py-3 "
              >
                <p>Read More</p>
                <BsArrowRight size="20px" />
              </Link>
            </Button>
          </div>
        </div>
        {/* IT Risk Management  */}
        <div className="flex flex-col items-center">
          <div className="img-container hidden lg:flex">
            <Image
              src={riskManagement}
              alt="IT Risk Management"
              className="h-[30vh]"
            />
          </div>
          <div className="flex lg:hidden">
            <Image
              src={riskManagement}
              alt="IT Risk Management"
              className="rounded-xl h-[30vh]"
            />
          </div>
          <Image src={polygon} alt="" className="my-4 " width={15} />

          <div className="flex flex-col justify-between p-5 bg-[#FFFFFF0D] lg:h-[240px] rounded-[20px] text-center lg:w-[25vw]">
            <div>
              <div className="border-b pb-2">
                <p className="text-[20px] xl:text-[26px] font-[600]">
                  IT Risk Management
                </p>
              </div>
              <p className="text-[#808080] font-[600] text-[12px] md:text-[13px] xl:text-[16px] my-3 line-clamp-3">
                AFO Solution is dedicated to ensuring organizations proactively
                manage IT risks without exceeding the risk appetite. We ensure
                controls to mitigate risks are sustainable to with stand
                emerging risks. AFO Solutions holistically assess IT risks
                within the organization by using industry standard as minimum
                requirement as a starting point.
              </p>
            </div>

            <Button>
              <Link
                href="/our-services/IT-risk-management"
                className="flex items-center justify-center gap-2 py-3 "
              >
                <p>Read More</p>
                <BsArrowRight size="20px" />
              </Link>
            </Button>
          </div>
        </div>
        {/* Incident Response and Forensics */}
        <div className="flex flex-col items-center">
          <div className="img-container hidden lg:flex">
            <Image
              src={incident}
              alt="Incident Response and Forensics"
              className="h-[30vh]"
            />
          </div>
          <div className="flex lg:hidden">
            <Image
              src={incident}
              alt="Incident Response and Forensics"
              className="rounded-xl h-[30vh]"
            />
          </div>
          <Image src={polygon} alt="" className="my-4" width={15} />

          <div className="flex flex-col justify-between p-5 bg-[#FFFFFF0D] rounded-[20px] text-center lg:w-[25vw]">
            <div>
              <div className="border-b pb-2">
                <p className="text-[20px] xl:text-[20px] font-[600]">
                  Incident Response and Forensics
                </p>
              </div>
              <p className="text-[#808080] font-[600] text-[12px] md:text-[13px] xl:text-[16px] my-3 line-clamp-3">
                In case of a breach, our incident response team provides rapid
                containment, forensic analysis, and post-incident
                recommendations and lessons learned.
              </p>
            </div>

            <Button>
              <Link
                href="/our-services/incident-response-and-forensics"
                className="flex items-center justify-center gap-2 py-3 "
              >
                <p>Read More</p>
                <BsArrowRight size="20px" />
              </Link>
            </Button>
          </div>
        </div>
        {/* Managed Firewall and Network Security */}
        <div className="flex flex-col items-center">
          <div className="img-container hidden lg:flex">
            <Image
              src={firewall}
              alt="Managed Firewall and Network Security"
              className="h-[30vh]"
            />
          </div>
          <div className="flex lg:hidden">
            <Image
              src={firewall}
              alt="Managed Firewall and Network Security"
              className="rounded-xl h-[30vh]"
            />
          </div>
          <Image src={polygon} alt="" className="my-4" width={15} />

          <div className="flex flex-col justify-between p-5 bg-[#FFFFFF0D] rounded-[20px] text-center lg:w-[25vw]">
            <div>
              <div className="border-b pb-2">
                <p className="text-[20px] xl:text-[26px] font-[600]">
                  Managed Firewall and Network Security
                </p>
              </div>
              <p className="text-[#808080] font-[600] text-[12px] md:text-[13px] xl:text-[16px] my-3 line-clamp-3">
                Keep your network secure with robust firewall protection,
                traffic monitoring, and intrusion detection services.
              </p>
            </div>

            <Button>
              <Link
                href="/our-services/managed-firewall-and-network-security"
                className="flex items-center justify-center gap-2 py-3 "
              >
                <p>Read More</p>
                <BsArrowRight size="20px" />
              </Link>
            </Button>
          </div>
        </div>
        {/* Compliance Management */}
        <div className="flex flex-col items-center">
          <div className="img-container hidden lg:flex">
            <Image
              src={Compliance}
              alt="Compliance Management"
              className="h-[30vh]"
            />
          </div>
          <div className="flex lg:hidden">
            <Image
              src={Compliance}
              alt="Compliance Management"
              className="rounded-xl h-[30vh]"
            />
          </div>
          <Image src={polygon} alt="" className="my-4" width={15} />

          <div className="flex flex-col justify-between p-5 bg-[#FFFFFF0D] lg:h-[240px] rounded-[20px] text-center lg:w-[25vw]">
            <div>
              <div className="border-b pb-2">
                <p className="text-[20px] xl:text-[26px] font-[600]">
                  Compliance Management
                </p>
              </div>
              <p className="text-[#808080] font-[600] text-[12px] md:text-[13px] xl:text-[16px] my-3 line-clamp-3">
                Our compliance services supports you to meet industry and
                regulatory requirements, including GDPR, ISO 27001, and other
                government frameworks. Our approach treats regulatory and
                industry standard as the minimum requirements; we go a step
                further to stay ahead of compliance.
              </p>
            </div>

            <Button>
              <Link
                href="/our-services/compliance-management"
                className="flex items-center justify-center gap-2 py-3 "
              >
                <p>Read More</p>
                <BsArrowRight size="20px" />
              </Link>
            </Button>
          </div>
        </div>
        {/* Vulnerability Management */}
        <div className="flex flex-col items-center">
          <div className="img-container hidden lg:flex">
            <Image
              src={key}
              alt="Vulnerability Management"
              className="h-[30vh]"
            />
          </div>
          <div className="flex lg:hidden">
            <Image
              src={key}
              alt="Vulnerability Management"
              className="rounded-xl h-[30vh]"
            />
          </div>
          <Image src={polygon} alt="" className="my-4" width={15} />

          <div className="flex flex-col justify-between p-5 bg-[#FFFFFF0D] rounded-[20px] text-center lg:w-[25vw]">
            <div>
              <div className="border-b pb-2">
                <p className="text-[20px] xl:text-[26px] font-[600]">
                  Vulnerability Management
                </p>
              </div>
              <p className="text-[#808080] font-[600] text-[12px] md:text-[13px] xl:text-[16px] my-3 line-clamp-3">
                We conduct ongoing vulnerability assessments to identify,
                prioritize, and remediate weaknesses before they can be
                exploited.
              </p>
            </div>

            <Button>
              <Link
                href="/our-services/vulnerability-management"
                className="flex items-center justify-center gap-2 py-3 "
              >
                <p>Read More</p>
                <BsArrowRight size="20px" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
