import React, { ReactNode } from "react";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-[#2A3655] rounded-[8px] p-4">
      <div className="flex gap-4 items-center">
        {icon && icon}
        {(title || description) && (
          <div>
            {title && <h3 className="text-[16px] text-[#FFF]">{title}</h3>}
            {description && (
              <p className="text-[14px] text-[#8892B0]">{description}</p>
            )}
          </div>
        )}
        {!icon && !description && title && title}
      </div>
    </div>
  );
};

export default ResourceCard;
