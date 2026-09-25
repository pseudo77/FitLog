"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "@/assets/logo.png"

const Navbar = () => {

    const pathname=usePathname()

    const links=<>
        <li>
            <Link href="/" className={ `text-[#9CA3AF] ${pathname==='/'? 'bg-[#c2f800]': '' }` } >Workouts</Link>
          </li>
          <li>
            <Link href="/myPlan" className={ `text-[#9CA3AF] ${pathname==='/myPlan'? 'bg-[#c2f800]': '' }` }>My Plan</Link>
          </li>
    </>
  return (
    <div className="navbar shadow-sm container mx-auto bg-[#] ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost bg-[#ffffff] lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
            
          </ul>
        </div>
        <div  className=" text-xl flex gap-2 items-center max-sm:hidden">
            <Image src={Logo} alt="Logo"></Image>
            <h1 className="text-[#ffffff] text-[18px] font-black ">FITLOG</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="flex gap-1 items-center">
            <Link href="/" className="text-[12px] font-medium " >Plan</Link>
            <h1 className=" border w-10 h-10 rounded-full text-[#000000] text-[11px] font-bold bg-[#C2F800] flex items-center justify-center " >10</h1>
        </div>
        <div className="flex gap-1.5 items-center align-middle">
            <Link href="/" className="text-[12px] font-medium ">Saved</Link>
            <h1 className=" border w-10 h-10 rounded-full text-[#D1D5DB] text-[11px] font-medium flex items-center justify-center " >10</h1>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
