import React from "react";

export const HoverText = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className="group flex w-fit items-center gap-4 text-5xl font-semibold uppercase tracking-[-2%] text-gray-200 hover:text-gray-600 sm:text-6xl lg:text-[80px]">
      {children}
    </h4>
  );
};
