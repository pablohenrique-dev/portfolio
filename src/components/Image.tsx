import NextImage, { ImageProps } from "next/image";

export const Image = ({ ...props }: ImageProps) => {
  return (
    <NextImage
      width={0}
      height={0}
      style={{
        objectFit: "cover",
      }}
      sizes="100vw"
      {...props}
    />
  );
};
