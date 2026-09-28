"use client";
import { MyPlanContext } from "@/context/MyPlanContext";
import { ChevronDown } from "lucide-react";
import React, { Dispatch, SetStateAction, useContext } from "react";

type SortOption = "Duration" | "Calories" | "Rating";

const Sorting = () => {
  const { sortTab, setSortTab } = useContext(MyPlanContext) as {
    sortTab: SortOption;
    setSortTab: Dispatch<SetStateAction<SortOption>>;
  };

  return (
    <div>
      <div className="flex justify-center sm:justify-between whitespace-nowrap align-middle items-center gap-2">
        <label
          htmlFor="sort-by"
          className="text-[12px] text-[#8A92A0] font-normal"
        >
          Sort By
        </label>

        <div className="relative">
          <select
            id="sort-by"
            value={sortTab}
            onChange={(e) => setSortTab(e.target.value as SortOption)}
            className="appearance-none cursor-pointer bg-[#13161D] border border-slate-800 rounded-2xl text-[12px] text-[#ffffff] font-normal pl-4 pr-9 py-2 focus:outline-none focus:border-slate-600"
          >
            <option value="Duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Rating">Rating</option>
          </select>

          <ChevronDown
            size={14}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8A92A0]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sorting;
