import { IworkoutType } from "@/types/workoutType";
import Image from "next/image";
import React from "react";
import { FaFire } from "react-icons/fa";
import { FiClock, FiStar } from "react-icons/fi";

interface IworkoutCardProps {
  workout: IworkoutType;
}

const LibraryCard = ({ workout }: IworkoutCardProps) => {
  console.log(workout);
  return (
    <div>
      <div className=" bg-[#15171d] rounded-2xl ">
        <div>
          <Image
            className="relative w-full h-75 mb-10  rounded-2xl"
            src={workout.image}
            alt={workout.name}
            height={200}
            width={300}
          ></Image>
        </div>
        <div className="p-7">
          <div className="flex justify-items-start gap-2 items-center mb-2.5">
            <p className="bg-[#C2F800] rounded-2xl px-2 text-[11px] text-[#000000] font-bold ">
              {workout.muscleGroups[0]}{" "}
            </p>
            <p className="bg-[#C2F800] rounded-2xl px-2 text-[11px] text-[#000000] font-bold ">
              {workout.muscleGroups[1]}{" "}
            </p>
          </div>
          <p className="text-[#ffffff] text-[18px] font-bold mb-0.5 ">
            {workout.name}
          </p>
          <p className="text-[#9CA3AF] text-[12px] font-normal mb-7 ">
            {workout.equipment}{" "}
          </p>
          <div className="flex gap-4 items-center text-[12px] text-[#9CA3AF] ">
            <div className="flex gap-2 items-center">
              <p>
                <FiClock></FiClock>
              </p>
              <p>{workout.duration} min </p>
            </div>
            <div className="flex gap-2 items-center">
              <p>
                <FaFire className="w-5 h-5 text-[#9CA3AF]" />
    
              </p>
              <p>{workout.caloriesBurned} kcal </p>
            </div>
            <div className="flex gap-2 items-center">
              <p>
                <FiStar></FiStar>
              </p>
              <p>{workout.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
