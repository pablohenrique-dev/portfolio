type rgba = {
  r: number;
  g: number;
  b: number;
};

export type Certificate = {
  title: string;
  iconSvg: string;
  certificateUrl: string;
  cardColor: {
    rgba: rgba;
  };
};
