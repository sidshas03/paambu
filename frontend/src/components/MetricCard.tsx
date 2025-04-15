import React from "react";

interface MetricCardProps {
  name: string;
  value: number;
  suffix: string;
  percentage: number;
}

const MetricCard: React.FC<MetricCardProps> = ({
  name,
  value,
  suffix,
  percentage,
}) => {
  return (
    <div className="bg-[#2A3655] rounded-[8px] p-4">
      <div className="flex justify-between items-center">
        <span className="text-[16px] text-[#FFF]">{name}</span>
        <span className="text-[16px] text-[#FFF]">
          {value}
          {suffix}
        </span>
      </div>
      <div className="h-2 bg-[#1E2A45] rounded-full mt-4">
        <div
          className="h-full bg-[#64FFDA] rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default MetricCard;
