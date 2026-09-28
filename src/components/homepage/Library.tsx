import { IworkoutType } from "@/types/workoutType";
import React, { Suspense } from "react";
import LibraryCard from "./LibraryCard";

const getWorkouts = async (): Promise<IworkoutType[]> => {
  const response = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const LibraryContent = async () => {
  const workouts = await getWorkouts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4 sm:px-6 lg:px-0">
      {workouts.map((workout: IworkoutType, index: number) => {
        return (
          <div key={index}>
            <LibraryCard workout={workout}></LibraryCard>
          </div>
        );
      })}
    </div>
  );
};

const Library = () => {
  return (
    <section id="library" className="mt-20">
      <p className="text-[30px] text-[#ffffff] font-bold text-center xl:text-left ">THE LIBRARY</p>
      <p className="text-[14px] text-[#9CA3AF] font-normal mb-10 text-center xl:text-left">
        Twelve lifts covering every major muscle group.
      </p>
      <Suspense
        fallback={
          <>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </>
        }
      >
        <LibraryContent />
      </Suspense>
    </section>
  );
};

export default Library;
