import { HomePageInfo } from "@/@types/pageInfo";
import { AnchorLink } from "@/components/AnchorLink";
import { Image } from "@/components/Image";

type HeroSection = {
  homeInfos: HomePageInfo;
};

export const HeroSection = ({ homeInfos }: HeroSection) => {
  return (
    <main
      id="top"
      className="w-full bg-black bg-[url('/assets/bg-home.jpg')] bg-cover bg-no-repeat"
    >
      <div className="container flex flex-col items-center justify-between gap-8 pb-12 pt-10 sm:pb-[8rem] sm:pt-[6rem] lg:flex-row lg:gap-16">
        <div className="animate-fade-left">
          <h1 className="mb-4 block text-[40px] font-semibold text-white sm:text-5xl sm:leading-tight md:text-[5rem]">
            {homeInfos.title}
            <Image
              src="/assets/icon-code-detail.svg"
              alt="Imagem com um quadrado azul com um ícone representando a programação"
              className="mb-2 inline w-16 sm:w-[4.5rem] md:w-[6.625rem]"
            />
          </h1>
          <p className="mb-8 text-lg font-light text-white opacity-80 sm:mb-10 sm:text-2xl sm:leading-normal">
            {homeInfos.introduction}
          </p>

          <div className="flex items-start gap-6 max-[560px]:flex-col">
            <AnchorLink href="#projetos" anchorStyle="primary">
              Ver projetos
              <Image
                src="/assets/icon-arrow-top-right.svg"
                alt="Ícone de seta na cor branca"
                className="h-[15px] w-[15px]"
              />
            </AnchorLink>
            <AnchorLink href="#contatos" anchorStyle="secondary">
              Entrar em contato
            </AnchorLink>
          </div>
        </div>
        <Image
          src={homeInfos.profilePicture.url}
          alt="Selfie de jovem sentado em uma cadeira e sorrindo"
          className="animate-fade-right w-full md:min-w-[22rem] lg:w-[27rem]"
        />
      </div>
    </main>
  );
};
