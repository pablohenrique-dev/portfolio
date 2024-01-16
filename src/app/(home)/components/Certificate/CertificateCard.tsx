"use client";

import { Certificate } from "@/@types/certificate";
import { CMSIcon } from "@/components/CMSIcon/Index";
import Link from "next/link";
import React from "react";

export type CertificateCardProps = Certificate;

export const CertificateCard = ({
  title,
  iconSvg,
  certificateUrl,
  cardColor,
}: CertificateCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const color = `rgb(${cardColor.rgba.r},${cardColor.rgba.g},${cardColor.rgba.b})`;
  const boxShadowColor = `rgba(${cardColor.rgba.r},${cardColor.rgba.g},${cardColor.rgba.b}, 0.6)`;

  const certificateCardStyle = {
    boxShadow: isHovered ? `0px 0px 80px 0px ${boxShadowColor}` : "",
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
      <CMSIcon icon={iconSvg} />
      <span className="text-base font-bold transition group-hover:translate-x-1">
        Ver certificado
      </span>
    </Link>
  );
};
