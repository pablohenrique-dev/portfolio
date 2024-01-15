import React from "react";
import { HoverText } from "./HoverText";
import { Image } from "@/components/Image";
import Link from "next/link";

export const About = () => {
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
            Sobre mim
          </h2>
          <p className="mb-4 opacity-75">
            Olá, me chamo Pablo Henrique e tenho 23 anos. Desde criança sempre
            fui apaixonado por tudo que envolvia tecnologia, com a curiosidade
            de entender como as coisas eram feitas e funcionavam.
            <br />
            <br />
            Nos últimos meses, venho me dedicando ao universo do desenvolvimento
            web, criando aplicações com as melhores técnicas de desenvolvimento,
            responsivas, com foco em acessibilidade e baixo tempo de
            carregamento, garantindo a todos os usuários uma navegação fluida e
            acessível.
          </p>
          <Link
            href="/assets/bg-home.jpg"
            target="_blank"
            download
            className="inline-block py-3 font-semibold transition hover:translate-x-2"
          >
            Baixar currículo
          </Link>
        </article>
      </div>
    </section>
  );
};
