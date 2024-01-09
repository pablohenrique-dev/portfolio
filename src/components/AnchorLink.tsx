import React from "react";
import Link, { LinkProps } from "next/link";

type AnchorLinkProps = LinkProps & {
  anchorStyle: "primary" | "secondary";
  children: React.ReactNode;
};

export const AnchorLink = ({
  children,
  anchorStyle,
  ...props
}: AnchorLinkProps) => {
  const selectedStyle =
    anchorStyle === "primary"
      ? "bg-primary hover:bg-[#1540CB]"
      : "max-[560px]:border-white border border-[rgba(0,0,0,0)] hover:border hover:border-white";

  return (
    <Link
      className={`flex items-center justify-center gap-[10px] px-[40px] py-3 text-base font-semibold text-white transition ${selectedStyle}`}
      {...props}
    >
      {children}
    </Link>
  );
};
