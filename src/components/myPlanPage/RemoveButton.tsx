import { MyPlanContext } from "@/context/MyPlanContext";
import { IworkoutType } from "@/types/workoutType";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

const RemoveButton = ({ plan }: { plan: IworkoutType }) => {
  const { plans, setPlans,  setDone } = useContext(MyPlanContext) as {
    plans: IworkoutType[];
    setPlans: Dispatch<SetStateAction<IworkoutType[]>>;
    setDone:Dispatch<SetStateAction<number[]>>
  };

  const handleRemoveButton = (plan: IworkoutType) => {
    toast.warn("Removed from today's plan", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    const planned = plans.filter((plann) => plann.name !== plan.name);
    setPlans(planned);
    setDone((previous:number[])=>previous.filter((id)=>id!==plan.id))
  };
  return (
    <div>
      <FaXmark
        onClick={() => handleRemoveButton(plan)}
        className="cursor-pointer hover:scale-105 w-4 h-4"
      ></FaXmark>
    </div>
  );
};

export default RemoveButton;
