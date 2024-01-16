type CMSIconProps = {
  icon: string;
};

export const CMSIcon = ({ icon }: CMSIconProps) => {
  return (
    <span
      className="aspect-square w-[104px] sm:w-[128px]"
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  );
};
