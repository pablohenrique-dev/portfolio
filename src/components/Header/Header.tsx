"use client";

import React from "react";
import { NavLink } from "./NavLink";
import Link from "next/link";
import { Image } from "../Image";

const linksNavMenu = [
  {
    title: "Projetos",
    href: "/#projetos",
  },
  {
    title: "Certificados",
    href: "/#certificados",
  },
  {
    title: "Sobre",
    href: "/#sobre",
  },
];

export const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = React.useState(false);
  return (
    <header className="w-full bg-black">
      <div className="container flex animate-fade-in items-center justify-between py-6 md:py-8">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Logo com texto Pablo Henrique na cor branca"
            className="w-[11.25rem]"
          />
        </Link>

        <button
          onClick={() => setMobileMenuIsOpen(true)}
          className="flex flex-col items-end p-2 pr-0 text-white md:hidden"
          aria-label="Open menu"
          aria-controls="menu"
          aria-haspopup="true"
          aria-expanded={mobileMenuIsOpen}
        >
          <span className="block h-[2px] w-[32px] bg-white"></span>
          <span className="mt-4 block h-[2px] w-[24px] bg-white"></span>
        </button>

        <nav
          className={`fixed bottom-0 left-0 h-[100vh] w-full translate-y-[100vh] overflow-hidden bg-black px-5 pt-6 transition-all md:static md:h-fit md:w-fit md:translate-y-[0px] md:p-0 ${
            mobileMenuIsOpen && "z-50 translate-y-[1px]"
          }`}
        >
          <div className="flex items-center justify-between md:hidden">
            <Link href="/" onClick={() => setMobileMenuIsOpen(false)}>
              <Image
                src="/assets/logo.svg"
                alt="Logo com texto Pablo Henrique"
                className="w-[11.25rem]"
              />
            </Link>

            <button
              onClick={() => setMobileMenuIsOpen(false)}
              className="p-2 pr-0 text-white"
              aria-label="Close menu"
              aria-controls="menu"
              aria-expanded={mobileMenuIsOpen}
            >
              <Image
                src="/assets/close-icon.svg"
                alt="Ícone com dois traços brancos formando um X"
                className="w-[1.625rem]"
              />
            </button>
          </div>
          <menu
            role="menu"
            className="flex flex-col gap-10 pt-14 md:flex-row md:items-center md:gap-16 md:pt-0"
          >
            {linksNavMenu.map((link) => {
              return (
                <NavLink
                  key={link.href}
                  href={link.href}
                  setMobileMenuIsOpen={setMobileMenuIsOpen}
                >
                  {link.title}
                </NavLink>
              );
            })}
          </menu>
        </nav>
      </div>
    </header>
  );
};
