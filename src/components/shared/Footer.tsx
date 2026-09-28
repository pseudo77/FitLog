import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className=" bg-[#090A0D] ">
        <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 py-15  text-center sm:text-left">
          <Link
            href="/"
            className=" text-xl flex gap-2 items-center cursor-pointer hover:scale-105"
          >
            <Image src={Logo} alt="Logo"></Image>
            <h1 className="text-[#ffffff] text-[14px] font-bold ">FITLOG</h1>
          </Link>

          <p className="text-[#6B7280] text-[12px] font-normal">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
