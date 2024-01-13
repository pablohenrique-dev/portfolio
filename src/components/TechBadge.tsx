import React from "react";

type TechBadgeProps = {
  children: React.ReactNode;
};

export const TechBadge = ({ children }: TechBadgeProps) => {
  return (
    <span className="mb-4 mr-4 inline-block bg-gray-600 px-3 pb-[1px] pt-[3px] text-sm text-white opacity-90">
      {children}
    </span>
  );
};
