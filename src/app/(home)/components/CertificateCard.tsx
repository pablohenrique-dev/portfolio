"use client";

import { Image } from "@/components/Image";
import { changeColorOpacity } from "@/utils/changeColorOpacity";
import Link from "next/link";
import React from "react";

export type CertificateCardProps = {
  id: number;
  title: string;
  icon: string;
  certificateUrl: string;
  color: string;
};

export const CertificateCard = ({
  title,
  icon,
  certificateUrl,
  color,
}: CertificateCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const certificateCardStyle = {
    boxShadow: isHovered
      ? `0px 0px 80px 0px ${changeColorOpacity(color, 0.5)}`
      : "",
    border: isHovered ? `1px solid ${color}` : "1px solid rgb(223, 223, 224)",
    background: isHovered ? color : "",
  };

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={certificateUrl}
      target="_blank"
      className={`keen-slider__slide group flex flex-col justify-between border p-8 text-black transition-all`}
      style={certificateCardStyle}
    >
      <strong className="text-2xl">{title}</strong>
      <Image
        src={icon}
        alt={`Ícone do ${title}`}
        className="w-[104px] max-[380px]:w-[88px] sm:w-[120px]"
      />
      <span className="text-base font-bold transition group-hover:translate-x-1">
        Ver certificado
      </span>
    </Link>
  );
};
