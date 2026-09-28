"use client";
import { MyPlanContext } from "@/context/MyPlanContext";
import React, { Dispatch, SetStateAction, useContext } from "react";

const Sorting = () => {
  const { sortTab, setSortTab } = useContext(MyPlanContext) as {
    sortTab: "Duration" | "Calories" | "Rating";
    setSortTab: Dispatch<SetStateAction<"Duration" | "Calories" | "Rating">>;
  };

  return (
    <div>
      <div className="flex justify-center sm:justify-between whitespace-nowrap align-middle items-center gap-2">
        <p className="text-[12px] text-[#8A92A0] font-normal ">Sort By</p>
        <select
          defaultValue="Duration"
          className="bg-[#13161D] border border-slate-800 rounded-2xl text-[12px] text-[#ffffff] font-normal px-4 py-2 "
          value={sortTab}
          onChange={(e) =>
            setSortTab(e.target.value as "Duration" | "Calories" | "Rating")
          }
        >
          <option value="Duration">Duration</option>
          <option value="Calories">Calories</option>
          <option value="Rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;
