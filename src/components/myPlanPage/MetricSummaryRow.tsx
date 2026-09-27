"use client";
import { MyPlanContext } from "@/context/MyPlanContext";
import { IworkoutType } from "@/types/workoutType";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { FaBars } from "react-icons/fa";

import MyPlanCard from "./MyPlanCard";
import MySavedCard from "./MySavedCard";
import Link from "next/link";
import Sorting from "./Sorting";

const MetricSummaryRow = () => {
  const {
    sortedPlans,
    sortedSaved,
    active,
    setActive,
    total,
    minutes,
    calories,
  } = useContext(MyPlanContext) as {
    sortedPlans: IworkoutType[];
    sortedSaved: IworkoutType[];
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    total: number;
    minutes: number;
    calories: number;
  };

  const closeDropdown = () => {
    (document.activeElement as HTMLElement)?.blur();
  };

  return (
    <div>
      <div className="mt-12 mb-10">
        <div className="flex justify-between bg-[#13161D] p-5 sm:p-8 lg:p-10 mt-5  border border-slate-800 rounded-2xl">
          <div>
            <p className="text-[12px] text-[#8A92A0] font-normal ">Exercises</p>
            <p>{total} </p>
          </div>

          <div>
            <p className="text-[12px] text-[#8A92A0] font-normal ">Minutes</p>
            <p>{minutes} </p>
          </div>

          <div>
            <p className="text-[12px] text-[#8A92A0] font-normal ">Calories</p>
            <p>{calories} </p>
          </div>
        </div>

        <div className="flex sm:hidden flex-row items-center justify-between gap-3 mt-10">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn flex items-center gap-2 border border-slate-800 rounded-2xl bg-[#151921] px-4 py-2.5 text-[12px] text-[#ffffff] font-bold cursor-pointer hover:scale-105"
            >
              <FaBars className="text-[#8A92A0]"></FaBars>
              {active ? "Today’s Plan" : "Saved"}
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu z-10 mt-2 w-44 p-2 border border-slate-800 rounded-2xl bg-[#151921] shadow"
            >
              <li>
                <button
                  onClick={() => {
                    setActive(true);
                    closeDropdown();
                  }}
                  className={
                    active
                      ? "btn bg-[#2B303D] border border-slate-800 rounded-lg text-[12px] text-[#ffffff] font-bold cursor-pointer hover:scale-105"
                      : "bg-[#151921] text-[12px] text-[#8A92A0] font-normal cursor-pointer hover:scale-105"
                  }
                >
                  Today’s Plan
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActive(false);
                    closeDropdown();
                  }}
                  className={
                    active
                      ? "bg-[#151921] text-[12px] text-[#8A92A0] font-normal cursor-pointer hover:scale-105"
                      : "btn bg-[#2B303D] border border-slate-800 rounded-lg text-[12px] text-[#ffffff] font-bold cursor-pointer hover:scale-105"
                  }
                >
                  Saved
                </button>
              </li>
            </ul>
          </div>

          <div>
            <Sorting variant="mobile"></Sorting>
          </div>
        </div>

        <div className="hidden sm:flex flex-row justify-between mt-10">
          <div className="flex justify-between border border-slate-800 rounded-2xl bg-[#151921] ">
            <button
              onClick={() => setActive(true)}
              className={
                active
                  ? "btn bg-[#2B303D] border border-slate-800 rounded-lg px-6 py-2.5 text-[12px] text-[#ffffff] font-bold cursor-pointer hover:scale-105"
                  : "bg-[#151921] text-[12px] text-[#8A92A0] px-6 py-2.5 font-normal cursor-pointer hover:scale-105"
              }
            >
              Today’s Plan
            </button>
            <button
              onClick={() => setActive(false)}
              className={
                active
                  ? " bg-[#151921] text-[12px] text-[#8A92A0] px-10 py-2.5 font-normal cursor-pointer hover:scale-105"
                  : "btn bg-[#2B303D] border border-slate-800 rounded-lg px-10 py-2.5 text-[12px] text-[#ffffff] font-bold cursor-pointer hover:scale-105"
              }
            >
              Saved
            </button>
          </div>

          <div>
            <Sorting variant="desktop"></Sorting>
          </div>
        </div>
        {active ? (
          total === 0 ? (
            <div className="flex flex-col bg-[#111317] rounded-2xl my-20 p-10 sm:p-24 lg:p-50 items-center align-middle text-center">
              <p className="text-[20px] text-[#ffffff] font-bold ">
                NOTHING HERE YET
              </p>
              <p className="text-[12px] text-[#A1A1AA] font-normal mb-5">
                Browse the library and add a lift to get today moving.
              </p>
              <Link href="/">
                <button className="bg-[#C2F10D] rounded-[9999px] text-[12px] text-[#000000] font-semibold px-6 py-2.5 cursor-pointer hover:scale-105">
                  Go to workouts
                </button>
              </Link>
            </div>
          ) : (
            sortedPlans.map((plan: IworkoutType, index: number) => {
              return (
                <div key={index}>
                  <MyPlanCard plan={plan}></MyPlanCard>
                </div>
              );
            })
          )
        ) : total === 0 ? (
          <div className="flex flex-col bg-[#111317] rounded-2xl my-20 p-10 sm:p-24 lg:p-50 items-center align-middle text-center">
            <p className="text-[20px] text-[#ffffff] font-bold ">
              NOTHING HERE YET
            </p>
            <p className="text-[12px] text-[#A1A1AA] font-normal mb-5">
              Browse the library and add a lift to get today moving.
            </p>
            <Link href="/">
              <button className="bg-[#C2F10D] rounded-[9999px] text-[12px] text-[#000000] font-semibold px-6 py-2.5 cursor-pointer hover:scale-105">
                Go to workouts
              </button>
            </Link>
          </div>
        ) : (
          sortedSaved.map((save: IworkoutType, index: number) => {
            return (
              <div key={index}>
                <MySavedCard save={save}></MySavedCard>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MetricSummaryRow;