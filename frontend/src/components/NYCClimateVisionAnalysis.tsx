"use client";
import React from "react";
import ClimateVisionDashboard from "./ClimateVisionDashboard";

const NYCClimateVisionAnalysis: React.FC = () => {
  return (
    <>
      <ClimateVisionDashboard />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
      `}</style>
    </>
  );
};

export default NYCClimateVisionAnalysis;
