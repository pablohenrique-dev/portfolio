import React from "react";
import { Image } from "./Image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative bg-black py-10 sm:py-20">
      <div className="container flex flex-col gap-10">
        <Image
          src="/assets/icon-phrase-footer.svg"
          alt="teste"
          className="w-full border-b border-gray-600 pb-8 sm:pb-14"
        />
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-0">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Logo com texto Pablo Henrique"
              className="w-[11.25rem]"
            />
          </Link>

          <p className="order-3 text-sm text-white opacity-60 md:order-2">
            © {new Date().getFullYear()} - Todos os direitos reservados
          </p>

          <div className="flex flex-col items-start gap-8 min-[400px]:flex-row min-[400px]:items-center md:order-3">
            <div className="flex justify-start gap-8">
              <Image
                src="/assets/close-icon.svg"
                alt="Logo com texto Pablo Henrique"
                className="w-[24px]"
              />
              <Image
                src="/assets/close-icon.svg"
                alt="Logo com texto Pablo Henrique"
                className="w-[24px]"
              />
              <Image
                src="/assets/close-icon.svg"
                alt="Logo com texto Pablo Henrique"
                className="w-[24px]"
              />
            </div>

            <Link
              href="#top"
              className="bg-gray-600 px-5 pb-2 pt-3 text-white transition hover:opacity-70"
            >
              Voltar ao topo
            </Link>
          </div>
        </div>
      </div>

      <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F0DC4E] via-[#CA451A] to-[#764ABC]"></span>
    </footer>
  );
};
