"use client";
import React, { useState } from "react";
import {  FaChevronDown} from "react-icons/fa";

const EmptyWorkout = () => {
  const [active, setActive] = useState<boolean>(true);
  return (
    <div>
      <div className="container mx-auto mt-12 mb-10">
        <h1 className="text-[30px] text-[#ffffff] font-bold ">MY PLAN</h1>
        <p className="text-[14px] text-[#8A92A0] font-normal mb-5 ">
          Cap of five lifts for today. Finish them, then load more.
        </p>
        <div className="flex justify-between bg-[#13161D] p-10 mt-5  border border-slate-800 rounded-2xl">
          <div>
            <p className="text-[12px] text-[#8A92A0] font-normal ">Exercises</p>
            <p></p>
          </div>

          <div>
            <p className="text-[12px] text-[#8A92A0] font-normal ">Minutes</p>
            <p></p>
          </div>

          <div>
            <p className="text-[12px] text-[#8A92A0] font-normal ">Calories</p>
            <p></p>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <div className="flex justify-between border border-slate-800 rounded-2xl bg-[#151921] ">
            <button
              onClick={() => setActive(true)}
              className={
                active
                  ? "btn bg-[#2B303D] border border-slate-800 rounded-lg px-6 py-2.5 text-[12px] text-[#ffffff] font-bold "
                  : "bg-[#151921] text-[12px] text-[#8A92A0] px-6 py-2.5 font-normal"
              }
            >
              Today’s Plan
            </button>
            <button
              onClick={() => setActive(false)}
              className={
                active
                  ? " bg-[#151921] text-[12px] text-[#8A92A0] px-10 py-2.5 font-normal"
                  : "btn bg-[#2B303D] border border-slate-800 rounded-lg px-10 py-2.5 text-[12px] text-[#ffffff] font-bold "
              }
            >
              Saved
            </button>
          </div>

          <div className="flex justify-between items-center gap-2">
            <p className="text-[12px] text-[#8A92A0] font-normal ">Sort By</p>
            <div className="flex justify-between items-center gap-2 border border-slate-800 rounded-2xl px-6 py-2">
              <button className="text-[12px] text-[#ffffff] font-normal">
                ldfjl
              </button>
              <FaChevronDown className="text-[#8A92A0]"></FaChevronDown>
            </div>
          </div>
        </div>
        <div className= "flex flex-col bg-[#111317] rounded-2xl my-20 p-50 items-center align-middle">
          <p className="text-[20px] text-[#ffffff] font-bold ">NOTHING HERE YET</p>
          <p className="text-[12px] text-[#A1A1AA] font-normal mb-5">Browse the library and add a lift to get today moving.</p>
          <button className="bg-[#C2F10D] rounded-[9999px] text-[12px] text-[#000000] font-semibold px-6 py-2.5">Go to workouts</button>
        </div>
      </div>
    </div>
  );
};

export default EmptyWorkout;
