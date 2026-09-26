"use client";
import { MyPlanContext } from "@/context/MyPlanContext";
import { IworkoutType } from "@/types/workoutType";
import React, { useContext } from "react";
import { MdOutlineToday } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const AddButton = ({ workout }: { workout: IworkoutType }) => {
  const { plans, setPlans } = useContext(MyPlanContext) as {
    plans: IworkoutType[];
    setPlans: React.Dispatch<React.SetStateAction<IworkoutType[]>>;
  };

  const handleAddButton = () => {
    setPlans([...plans, workout]);
    toast.success("Added to today's plan", {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <div>
      <div
        onClick={() => handleAddButton()}
        className="btn flex justify-between items-center bg-[#CCFF00] rounded-xl px-10 py-3.5 gap-2"
      >
        <MdOutlineToday className="text-[#0F1115]"></MdOutlineToday>
        <button className=" text-[14px] text-[#0F1115] font-semibold  ">
          Add to today&apos;s plan
        </button>
      </div>
    </div>
  );
};

export default AddButton;
