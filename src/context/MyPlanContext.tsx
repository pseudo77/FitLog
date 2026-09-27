"use client";
import { IworkoutType } from "@/types/workoutType";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IgroupOfState {
  plans: IworkoutType[];
  saved: IworkoutType[];
  setPlans: Dispatch<SetStateAction<IworkoutType[]>>;
  setSaved: Dispatch<SetStateAction<IworkoutType[]>>;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  total: number;
  minutes: number;
  calories: number;
  planTotal: number;
  savedTotal: number;
  done: number[];
  setDone: Dispatch<SetStateAction<number[]>>;
  sortTab:"Duration" | "Calories" | "Rating";
  setSortTab:Dispatch<SetStateAction<"Duration" | "Calories" | "Rating">>;
  sortedPlans:IworkoutType[];
  sortedSaved:IworkoutType[]

}

export const MyPlanContext = createContext({});

const MyPlanProvider = ({ children }: { children: ReactNode }) => {
  const [plans, setPlans] = useState<IworkoutType[]>([]);
  const [saved, setSaved] = useState<IworkoutType[]>([]);
  const [active, setActive] = useState<boolean>(true);
  const currentTab = active ? plans : saved;
  const total = currentTab.length;
  const planTotal = plans.length;
  const savedTotal = saved.length;
  const [done, setDone]=useState<number[]>([])

  const minutes = currentTab.reduce(
    (accumulator: number, elem: IworkoutType) => {
      return accumulator + elem.duration;
    },
    0,
  );
  const calories = currentTab.reduce(
    (accumulator: number, elem: IworkoutType) => {
      return accumulator + elem.caloriesBurned;
    },
    0,
  );

  const [sortTab, setSortTab]=useState<"Duration" | "Calories" | "Rating">("Duration");

  const sortedTabs=((workout:IworkoutType[])=>{
    const sorted=[...workout];
    if(sortTab==="Duration"){
      sorted.sort((a,b)=>a.duration-b.duration)
    }
    else if(sortTab==="Calories"){
      sorted.sort((a,b)=>b.caloriesBurned-a.caloriesBurned)
    }
    else
      sorted.sort((a,b)=>a.rating-b.rating)
    return sorted;
  })

  const sortedPlans=sortedTabs(plans)
  const sortedSaved=sortedTabs(saved)

  const groupOfState: IgroupOfState = {
    plans,
    saved,
    setPlans,
    setSaved,
    active,
    setActive,
    total,
    minutes,
    calories,
    planTotal,
    savedTotal,
    done,
    setDone,
    sortTab,
    setSortTab,
    sortedPlans,
    sortedSaved
  };

  return (
    <div>
      <MyPlanContext.Provider value={groupOfState}>
        {children}
      </MyPlanContext.Provider>
    </div>
  );
};

export default MyPlanProvider;
