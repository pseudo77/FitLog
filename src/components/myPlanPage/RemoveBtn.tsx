import { MyPlanContext } from "@/context/MyPlanContext";
import { IworkoutType } from "@/types/workoutType";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

const RemoveBtn = ({ save }: { save: IworkoutType }) => {
  const { saved, setSaved } = useContext(MyPlanContext) as {
    saved: IworkoutType[];
    setSaved: Dispatch<SetStateAction<IworkoutType[]>>;
  };

  const handleRemoveButton = (save: IworkoutType) => {
    toast.warn("Removed from saved", {
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
    const safe = saved.filter((savee) => savee.name !== save.name);
    setSaved(safe);
  };
  return (
    <div>
      <FaXmark
        onClick={() => handleRemoveButton(save)}
        className="cursor-pointer hover:scale-105 w-4 h-4"
      ></FaXmark>
    </div>
  );
};

export default RemoveBtn;
