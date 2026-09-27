"use client";
import { MyPlanContext } from "@/context/MyPlanContext";
import { IworkoutType } from "@/types/workoutType";
import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

const SaveButton = ({ workout }: { workout: IworkoutType }) => {
  const { saved, setSaved } = useContext(MyPlanContext) as {
    saved: IworkoutType[];
    setSaved: React.Dispatch<React.SetStateAction<IworkoutType[]>>;
  };

  const isMatched = saved.some((p) => p.name === workout.name);

  const handleSaved = () => {
    if (isMatched) {
      toast.warning("Already saved ", {
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

    setSaved([...saved, workout]);
    toast.success("Saved", {
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
        onClick={() => handleSaved()}
        className="btn flex justify-between items-center gap-2 px-10 py-2.5 bg-[#0f1115] rounded-xl border border-slate-500"
      >
        <FaRegBookmark className="text-[#E5E7EB]"></FaRegBookmark>
        <button className="  text-[14px] text-[#E5E7EB] font-medium  ">
          Save for later
        </button>
      </div>
    </div>
  );
};

export default SaveButton;
