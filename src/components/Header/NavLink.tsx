import React from "react";
import Link, { LinkProps } from "next/link";

type NavLinkProps = LinkProps & {
  children: React.ReactNode;
  setMobileMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavLink = ({
  children,
  setMobileMenuIsOpen,
  ...props
}: NavLinkProps) => {
  return (
    <li
      onClick={() => setMobileMenuIsOpen(false)}
      className="text-4xl font-medium text-white opacity-80 transition-opacity hover:opacity-100 md:text-lg md:font-normal"
    >
      <Link {...props}>{children}</Link>
    </li>
  );
};
