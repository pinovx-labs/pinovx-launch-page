import Image from "next/image";
import React from "react";
import { footerItems } from "../../../../public/assets/data/footer-items";
import FooterItem from "./FooterItem";
import { footerLogo } from "@/utils/externalMedia";

const Footer = () => {
  return (
    <main className="w-full bg-[#191919] mt-8 ">
      <footer className="container mx-auto px-4  ">
        <div className="flex flex-col md:flex-row gap-6 h-auto  justify-between py-10  ">
          {/* Left */}
          <div className="w-full min-h-full md:w-5/12 flex flex-col justify-between    ">
            <Image src={footerLogo} alt="logo" width={163} height={44} />
            <p className="font-montserrat  font-medium max-w-[412px] text-xl text-white mt-6 ">
              Proven in Network of Value: Powering Payments with Purpose
            </p>
          </div>

          {/* Right */}
          <div className="w-full md:w-7/12">
            <div className="flex  flex-wrap md:flex-no-wrap gap-12 h-full items-center md:justify-end ">
              {footerItems.map((item, index) => (
                <FooterItem
                  key={index}
                  header={item.header}
                  item1={item.sectionA.title}
                  href1={item.sectionA.href}
                  item2={item.sectionB.title}
                  href2={item.sectionB.href}
                  item3={item.sectionC.title}
                  href3={item.sectionC.href}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div className="font-montserrat  font-medium text-[11px] text-center leading-[27px] text-white bg-[#000000] w-full flex justify-center items-center mt-6 py-6   ">
        <div className=" max-w-[1164px]  transition-all duration-300 ">
          {" "}
          Pinov Inc. (1591582-1) is a Money Services Business registered and
          regulated by the Financial Transactions and Reports Analysis Centre of
          Canada. MSB Registration Number: C100000263. Pinov Pty Ltd (ACN: 682
          072 608) is a Digital Currency Exchange registered and regulated by
          the Australian Transaction Reports and Analysis Centre (AUSTRAC).
          Registered Provider Number: DCE100884196-001
        </div>
      </div>
    </main>
  );
};

export default Footer;
