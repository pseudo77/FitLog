import AddButton from "@/components/shared/AddButton";
import SaveButton from "@/components/shared/SaveButton";
import { IworkoutType } from "@/types/workoutType";
import Image from "next/image";
import React from "react";


const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${slug}`,
  );
  const workout: IworkoutType = await response.json();
  return (
    <section>
      <div className="flex justify-between container mx-auto my-20">
        <div>
          <Image
            src={workout.image}
            alt={workout.name}
            height={950}
            width={700}
            className="rounded-2xl"
          ></Image>
        </div>
        <div>
          <p className="text-[36px] text-[#ffffff] font-bold ">
            {workout.name}{" "}
          </p>
          <p className="text-[16px] text-[#9CA3AF] font-normal mb-5 mt-3">
            {workout.description}{" "}
          </p>
          <div className="flex justify-items-start gap-2 items-center my-4">
              {
                workout.muscleGroups.map((muscle:string, index:number)=>{
                  return(
                      <p key={index} className="rounded-3xl py-1 px-4 text-[12px] text-[#0F1115] font-semibold bg-[#CCFF00]">
              {muscle}
            </p>
                  )
                })
              }
            
          </div>
          <div className="grid grid-cols-1 border border-slate-800 rounded-2xl bg-[#151922] p-3">
            <div className="flex justify-between mb-4">
              <p className="text-[12px] text-[#9CA3AF] font-bold ">EQUIPMENT</p>
              <p className="text-[14px] text-[#E5E7EB] font-medium ">
                {workout.equipment}{" "}
              </p>
            </div>
            <hr className="text-slate-800" />
            <div className="flex justify-between my-4">
              <p className="text-[12px] text-[#9CA3AF] font-bold ">
                DIFFICULTY
              </p>
              <p className="text-[14px] text-[#E5E7EB] font-medium ">
                {workout.difficulty}{" "}
              </p>
            </div>
            <hr className="text-slate-800" />
            <div className="flex justify-between my-4">
              <p className="text-[12px] text-[#9CA3AF] font-bold ">SETS</p>
              <p className="text-[14px] text-[#E5E7EB] font-medium ">
                {workout.sets}{" "}
              </p>
            </div>
            <hr className="text-slate-800" />
            <div className="flex justify-between my-4">
              <p className="text-[12px] text-[#9CA3AF] font-bold ">REPS</p>
              <p className="text-[14px] text-[#E5E7EB] font-medium ">
                {workout.reps}{" "}
              </p>
            </div>
            <hr className="text-slate-800" />

            <div className="flex justify-between my-4">
              <p className="text-[12px] text-[#9CA3AF] font-bold ">DURATION</p>
              <p className="text-[14px] text-[#E5E7EB] font-medium ">
                {workout.duration}{" "}
              </p>
            </div>
            <hr className="text-slate-800" />

            <div className="flex justify-between my-4">
              <p className="text-[12px] text-[#9CA3AF] font-bold ">CALORIES</p>
              <p className="text-[14px] text-[#E5E7EB] font-medium ">
                {workout.caloriesBurned}{" "}
              </p>
            </div>
            <hr className="text-slate-800" />

            <div className="flex justify-between my-4">
              <p className="text-[12px] text-[#9CA3AF] font-bold ">RATING</p>
              <p className="text-[14px] text-[#E5E7EB] font-medium ">
                {workout.rating}{" "}
              </p>
            </div>
          </div>
          <p className="text-[16px] text-[#FFFFFF] font-extrabold my-5">
            INSTRUCTIONS
          </p>
          <ol className="space-y-4 text-[14px] text-[#D1D5DB] ">
            {workout.instructions.map((instruction: string, index: number) => (
              <li key={index}>
                {index + 1}. {instruction}{" "}
              </li>
            ))}
          </ol>
          <div className="flex justify-items-start items-center mt-8 gap-3">
            <AddButton workout={workout} ></AddButton>
            <SaveButton workout={workout}></SaveButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
