"use client";
import { MyPlanContext } from "@/context/MyPlanContext";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { FaChevronDown } from "react-icons/fa";

const Sorting = ({
  variant = "desktop",
}: {
  variant?: "mobile" | "desktop";
}) => {
  const { sortTab, setSortTab } = useContext(MyPlanContext) as {
    sortTab: "Duration" | "Calories" | "Rating";
    setSortTab: Dispatch<SetStateAction<"Duration" | "Calories" | "Rating">>;
  };

  if (variant === "mobile") {
    return (
      <div className="relative">
        <p className="absolute -top-5 right-0 text-[12px] text-[#8A92A0] font-normal whitespace-nowrap">
          Sort By
        </p>
        <div className="relative">
          <select
            defaultValue="Duration"
            className="appearance-none bg-[#13161D] border border-slate-800 rounded-2xl text-[12px] text-[#ffffff] font-normal pl-4 pr-8 py-2.5 "
            value={sortTab}
            onChange={(e) =>
              setSortTab(e.target.value as "Duration" | "Calories" | "Rating")
            }
          >
            <option value="Duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Rating">Rating</option>
          </select>
          <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#8A92A0]" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between whitespace-nowrap align-middle items-center gap-2">
        <p className="text-[12px] text-[#8A92A0] font-normal ">Sort By</p>
        <div className="relative">
          <select
            defaultValue="Duration"
            className="appearance-none bg-[#13161D] border border-slate-800 rounded-2xl text-[12px] text-[#ffffff] font-normal pl-4 pr-8 py-2.5 "
            value={sortTab}
            onChange={(e) =>
              setSortTab(e.target.value as "Duration" | "Calories" | "Rating")
            }
          >
            <option value="Duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Rating">Rating</option>
          </select>
          <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#8A92A0]" />
        </div>
      </div>
    </div>
  );
};

export default Sorting;
