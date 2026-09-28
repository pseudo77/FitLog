import { IworkoutType } from "@/types/workoutType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock, FaFire, FaStar } from "react-icons/fa";
import RemoveBtn from "./RemoveBtn";

const MySavedCard = ({ save }: { save: IworkoutType }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0 mt-10 px-4 sm:px-7 py-5 sm:py-3 bg-[#14171E] rounded-2xl ">
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-10 items-center text-center sm:text-left">
          <Image
            src={save.image}
            alt={save.name}
            width={150}
            height={40}
            className="relative w-full sm:w-60 h-40 sm:h-30 rounded-2xl"
          ></Image>
          <div>
            <p className="mb-2 text-[16px] text-[#ffffff] font-bold ">
              {save.name}{" "}
            </p>
            <p className="mb-2 text-[12px] text-[#8A92A0] font-semibold ">
              {save.equipment}{" "}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-between gap-4 items-center">
              <div className="flex justify-between gap-2 items-center">
                <FaClock className="text-[#CCFF00]"></FaClock>
                <p className="text-[12px] text-[#D1D5DB] font-normal ">
                  {save.duration} min
                </p>
              </div>
              <div className="flex justify-between gap-2 items-center">
                <FaFire className="text-[#CCFF00]"></FaFire>
                <p className="text-[12px] text-[#D1D5DB] font-normal ">
                  {save.caloriesBurned} kcal
                </p>
              </div>
              <div className="flex justify-between gap-2 items-center">
                <FaStar className="text-[#CCFF00]"></FaStar>
                <p className="text-[12px] text-[#D1D5DB] font-normal ">
                  {save.rating}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center max-sm:justify-between sm:justify-end gap-3 w-full lg:w-auto  items-center">
          <Link
            href={`/${save.id}`}
            className="btn px-8 py-2.5 bg-[#14171E] border border-slate-800 rounded-2xl text-[12px] text-[#ffffff] font-normal cursor-pointer hover:scale-105 text-center "
          >
            View Details
          </Link>
          <RemoveBtn save={save}></RemoveBtn>
        </div>
      </div>
    </div>
  );
};

export default MySavedCard;
