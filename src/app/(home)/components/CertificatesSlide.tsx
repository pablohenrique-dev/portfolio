"use client";

import React from "react";
import { CertificateCard, CertificateCardProps } from "./CertificateCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Image } from "@/components/Image";

type CertificatesSlidePorps = {
  listCertificates: CertificateCardProps[];
};

export const CertificatesSlide = ({
  listCertificates,
}: CertificatesSlidePorps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [buttonSlideController, setButtonSlideController] = React.useState(1);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    defaultAnimation: {
      duration: 200,
    },
    drag: true,
    slides: {
      perView: 2,
      spacing: 32,
    },
    breakpoints: {
      "(min-width: 980px)": {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
      "(max-width: 500px)": {
        slides: {
          perView: 1.1,
          spacing: 24,
        },
      },
    },
  });

  React.useEffect(() => {
    function handleResizeScreen() {
      if (window.innerWidth < 500) {
        setButtonSlideController(1);
      } else if (window.innerWidth > 500 && window.innerWidth < 980) {
        setButtonSlideController(2);
      } else {
        setButtonSlideController(3);
      }
    }
    handleResizeScreen();

    window.addEventListener("resize", handleResizeScreen);

    return () => window.removeEventListener("resize", handleResizeScreen);
  }, []);

  return (
    <>
      <div className="flex flex-col items-start justify-between gap-12 sm:flex-row sm:items-end">
        <div className="max-w-[470px]">
          <h2 className="mb-8 text-4xl font-semibold text-black md:text-5xl">
            Certificados
          </h2>
          <p className="text-lg leading-normal text-black opacity-80">
            Abaixo estão as principais certificações que adquiri na minha
            jornada como desenvolvedor front-end.
          </p>
        </div>
        {loaded && instanceRef.current && (
          <div className="flex gap-4">
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              className="bg-gray-100 px-3 py-[14px] transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
              disabled={currentSlide === 0}
            >
              <Image
                src="/assets/icon-arrow-button.svg"
                alt="Ícone de seta na cor preta"
                className="w-6 origin-center rotate-180"
              />
            </button>
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              className="bg-gray-100 px-3 py-[14px] transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - buttonSlideController
              }
            >
              <Image
                src="/assets/icon-arrow-button.svg"
                alt="Ícone de seta na cor preta"
                className="w-6"
              />
            </button>
          </div>
        )}
      </div>
      <div ref={sliderRef} className="keen-slider">
        {listCertificates.map((certificate) => {
          return <CertificateCard key={certificate.id} {...certificate} />;
        })}
      </div>
    </>
  );
};
