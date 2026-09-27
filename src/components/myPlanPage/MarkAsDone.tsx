import { MyPlanContext } from "@/context/MyPlanContext";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const MarkAsDone = ({plan}:{plan:number}) => {
  const {done, setDone} =useContext(MyPlanContext) as{
    done:number[],
    setDone:Dispatch<SetStateAction<number[]>>
  };

  const isDone=done.includes(plan)

  const handleMarkAsDone = () => {
    setDone((previous:number[]) => [...previous, plan]);;

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
      <button
        onClick={handleMarkAsDone}
        disabled={isDone}
        className={
          isDone
            ? "px-5 py-2.5 flex justify-center gap-2 items-center bg-gray-400 rounded-2xl text-[12px] text-white font-semibold cursor-not-allowed"
            : "px-5 py-2.5 flex justify-center gap-2 items-center bg-[#CCFF00] rounded-2xl text-[12px] text-black font-semibold cursor-pointer"
        }
      >
        {isDone ? (
          <>
            <FaCheck />
            <p>Marked as Done</p>
          </>
        ) : (
          <>
            <FaCheck />
            <p>Mark as Done</p>
          </>
        )}
      </button>
    </div>
  );
};

export default MarkAsDone;
