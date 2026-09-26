import MetricSummaryRow from "@/components/myPlanPage/MetricSummaryRow";
import React from "react";

const MyPlanPage = () => {
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-[30px] text-[#ffffff] font-bold ">MY PLAN</h1>
      <p className="text-[14px] text-[#8A92A0] font-normal mb-5 ">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <MetricSummaryRow></MetricSummaryRow>
    </div>
  );
};

export default MyPlanPage;
