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
  const isMatched = plans.some((p) => p.name === workout.name);

  const handleAddButton = () => {
    if (isMatched) {
      toast.warning("Already added to today's plan", {
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
      return;
    }

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
    <div className="w-full sm:w-auto">
      <div
        onClick={() => handleAddButton()}
        className="btn h-auto flex justify-center items-center bg-[#CCFF00] rounded-xl px-5 sm:px-10 py-3.5 gap-2 w-full sm:w-auto cursor-pointer hover:scale-105"
      >
        <MdOutlineToday className="text-[#0F1115]"></MdOutlineToday>
        <button className="cursor-pointer text-[14px] text-[#0F1115] font-semibold  ">
          Add to today&apos;s plan
        </button>
      </div>
    </div>
  );
};

export default AddButton;
