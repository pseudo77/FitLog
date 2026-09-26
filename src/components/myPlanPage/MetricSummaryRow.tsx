"use client";
import { MyPlanContext } from "@/context/MyPlanContext";
import { IworkoutType } from "@/types/workoutType";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import MyPlanCard from "./MyPlanCard";
import MySavedCard from "./MySavedCard";

const MetricSummaryRow = () => {
  
  const { plans,saved, active, setActive, total, minutes, calories } = useContext(MyPlanContext) as {
    plans: IworkoutType[],
    saved: IworkoutType[],
    active:boolean,
    setActive:Dispatch<SetStateAction<boolean>>,
    total:number,
    minutes:number,
    calories:number
  };

 

  
  return (
    <div>
      <div className="container mx-auto mt-12 mb-10">
        <div className="flex justify-between bg-[#13161D] p-10 mt-5  border border-slate-800 rounded-2xl">
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
        {
          active?
               ( total===0? (<div className="flex flex-col bg-[#111317] rounded-2xl my-20 p-50 items-center align-middle">
                <p className="text-[20px] text-[#ffffff] font-bold ">
                  NOTHING HERE YET
                </p>
                <p className="text-[12px] text-[#A1A1AA] font-normal mb-5">
                  Browse the library and add a lift to get today moving.
                </p>
                <button className="bg-[#C2F10D] rounded-[9999px] text-[12px] text-[#000000] font-semibold px-6 py-2.5">
                  Go to workouts
                </button>
              </div>):(
                plans.map((plan:IworkoutType, index:number)=>{
                  return(
                    (<div key={index}>
                      <MyPlanCard plan={plan}></MyPlanCard>
                    </div>)
                  )
                })
              )):
              (total===0?
                (
                  <div className="flex flex-col bg-[#111317] rounded-2xl my-20 p-50 items-center align-middle">
                <p className="text-[20px] text-[#ffffff] font-bold ">
                  NOTHING HERE YET
                </p>
                <p className="text-[12px] text-[#A1A1AA] font-normal mb-5">
                  Browse the library and add a lift to get today moving.
                </p>
                <button className="bg-[#C2F10D] rounded-[9999px] text-[12px] text-[#000000] font-semibold px-6 py-2.5">
                  Go to workouts
                </button>
              </div>
                ):(
                  saved.map((saved:IworkoutType, index:number)=>{
                      return(
                        <div key={index}>
                          <MySavedCard saved={saved}></MySavedCard>
                        </div>
                        
                      )
                    })
                )
              )
            }
      </div>
    </div>
  );
};

export default MetricSummaryRow;
