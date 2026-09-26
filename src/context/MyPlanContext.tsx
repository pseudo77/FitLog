"use client"
import { IworkoutType } from '@/types/workoutType';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface IgroupOfState{
    plans:IworkoutType[],
    saved:IworkoutType[],
    setPlans:Dispatch<SetStateAction<IworkoutType[]>>,
    setSaved:Dispatch<SetStateAction<IworkoutType[]>>,
    active:boolean,
    setActive:Dispatch<SetStateAction<boolean>>,
    total:number,
    minutes: number,
    calories: number,
    planTotal:number,
    savedTotal:number
    
}


export const MyPlanContext=createContext({})

const MyPlanProvider = ({children}:{children:ReactNode}) => {

    const [ plans, setPlans]=useState<IworkoutType[]>([]);
    const [saved, setSaved]=useState<IworkoutType[]>([]);
    const [active, setActive] = useState<boolean>(true);
     const currentTab=active?plans:saved;
  const total = currentTab.length;
    const planTotal = plans.length;
const savedTotal = saved.length;

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



    const groupOfState:IgroupOfState={
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
        savedTotal
    }

    return (
        <div>
            <MyPlanContext.Provider value={groupOfState}>{children}</MyPlanContext.Provider>
        </div>
    );
};

export default MyPlanProvider;