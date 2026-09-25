import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-between mt-55 bg-[#15171D] p-25 rounded-2xl">
        <div >
          <h1 className="text-[11px] text-[#C2F800] font-bold mb-5 ">WORKOUT LIBRARY</h1>
          <h2 className="text-[60px] text-[#ffffff] font-extrabold mb-5 leading-15 tracking-[-1.5px]  ">TRAIN WITH INTENT. LOG <br /> EVERY SET.</h2>
          <h3 className="text-[16px] text-[#9CA3AF] font-normal mb-5">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
            into today&apos;s plan, and watch the week&apos;s work add up.
          </h3>
          <a href="#library" className="btn bg-[#C2F800] text-[12px] text-[#000000] font-bold px-8 mb-5" >BROWSE WORKOUTS</a>
        </div>
        <div>
          <Image src={banner} alt="Banner"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
