import React from "react";
import { HoverText } from "./HoverText";
import { Image } from "@/components/Image";
import Link from "next/link";
import { About as IAbout } from "@/@types/about";
import { RichText } from "@/components/RichText/Index";

type AboutProps = {
  about: IAbout;
};

export const About = ({ about }: AboutProps) => {
  return (
    <section id="sobre">
      <div className="container flex flex-col gap-16 py-16 md:flex-row md:items-center md:py-28 lg:gap-32">
        <aside className="order-2 flex flex-col gap-4 md:order-1">
          <HoverText>Front</HoverText>
          <HoverText>
            <Image
              src="/assets/icon-detail.svg"
              alt="Um gráfico visual de uma cruz azul em um fundo branco."
              className="mt-[-12px] inline w-[50px] transition group-hover:rotate-90 md:w-full"
            />
            End
          </HoverText>
          <HoverText>Developer</HoverText>
        </aside>
        <article className="order-1 md:order-2">
          <h2 className="mb-8 text-4xl font-semibold text-black md:text-5xl">
            {about.title}
          </h2>
          <div className="mb-4 flex flex-col gap-3 opacity-75">
            <RichText content={about.description.raw} />
          </div>
          <Link
            href="/assets/curriculo.pdf"
            target="_blank"
            className="inline-block py-3 font-semibold transition hover:translate-x-2"
          >
            Baixar currículo
          </Link>
        </article>
      </div>
    </section>
  );
};
