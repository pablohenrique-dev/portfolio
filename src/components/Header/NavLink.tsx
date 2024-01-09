import React from "react";
import Link, { LinkProps } from "next/link";

type NavLinkProps = LinkProps & {
  children: React.ReactNode;
};

export const NavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <li className="text-4xl font-medium text-white opacity-80 transition-opacity hover:opacity-100 md:text-lg md:font-normal">
      <Link {...props}>{children}</Link>
    </li>
  );
};
