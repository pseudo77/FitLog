import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto  bg-[#090A0D] ">
        <div className=" flex justify-between py-15 px-5">
          <Link href="/" className=" text-xl flex gap-2 items-center">
            <Image src={Logo} alt="Logo"></Image>
            <h1 className="text-[#ffffff] text-[14px] font-bold ">FITLOG</h1>
          </Link>

          <p className="text-[#6B7280] text-[12px] font-normal">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
