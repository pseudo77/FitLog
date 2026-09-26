import { IworkoutType } from '@/types/workoutType';
import Image from 'next/image';
import React from 'react';
import { FaClock, FaFire, FaStar } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const MySavedCard = ({saved}:{saved:IworkoutType}) => {
    return (
        <div>
            <div className="flex justify-between mt-10 px-7 py-3 bg-[#14171E] rounded-2xl ">
                    <div className="flex justify-between gap-10 items-center">
                      <Image
                        src={saved.image}
                        alt={saved.name}
                        width={150}
                        height={40}
                        className="relative w-60 h-30 rounded-2xl"
                      ></Image>
                      <div>
                        <p className="mb-2 text-[16px] text-[#ffffff] font-bold ">{saved.name} </p>
                        <p className="mb-2 text-[12px] text-[#8A92A0] font-semibold ">{saved.equipment} </p>
                        <div className="flex justify-between gap-4 items-center">
                          <div className="flex justify-between gap-2 items-center">
                            <FaClock className="text-[#CCFF00]"></FaClock>
                            <p className="text-[12px] text-[#D1D5DB] font-normal ">{saved.duration} min</p>
                          </div>
                          <div className="flex justify-between gap-2 items-center">
                            <FaFire className="text-[#CCFF00]"></FaFire>
                            <p className="text-[12px] text-[#D1D5DB] font-normal ">{saved.caloriesBurned} kcal</p>
                          </div>
                          <div className="flex justify-between gap-2 items-center">
                            <FaStar className="text-[#CCFF00]"></FaStar>
                            <p className="text-[12px] text-[#D1D5DB] font-normal ">{saved.rating}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <button className="px-8 py-2.5 bg-[#14171E] border border-slate-800 rounded-2xl text-[12px] text-[#ffffff] font-normal ">View Details</button>
                      <FaXmark className="w-4 h-4"></FaXmark>
                    </div>
                  </div>
        </div>
    );
};

export default MySavedCard;