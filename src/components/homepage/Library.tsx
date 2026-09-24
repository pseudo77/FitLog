import { IworkoutType } from '@/types/workoutType';
import React from 'react';
import LibraryCard from './LibraryCard';

const LibraryData=async()=>{
    const response=await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data=await response.json();
    return data
}

const Library =async () => {
    const workouts=await LibraryData()
    return (
        <section id='library' className='mt-20'>
            <p className='text-[30px] text-[#ffffff] font-bold '>THE LIBRARY</p>
            <p className='text-[14px] text-[#9CA3AF] font-normal mb-10'>Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-3 grid-rows-4 gap-8  container mx-auto'>
                {
                    workouts.map((workout:IworkoutType, index:number)=>{

                        return(
                            <div key={index} >
                                <LibraryCard workout={workout} ></LibraryCard>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Library;