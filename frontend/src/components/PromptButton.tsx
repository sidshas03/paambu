import React from "react";

interface PromptButtonProps {
  id: string;
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const PromptButton: React.FC<PromptButtonProps> = ({
  id,
  text,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-[6px] text-left text-[14px] text-[#FFF] ${
        isSelected ? "bg-[#3A4665]" : "bg-[#2A3655]"
      }`}
    >
      {text}
    </button>
  );
};

export default PromptButton;
