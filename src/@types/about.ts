import type { RichTextContent } from "@graphcms/rich-text-types";

export type About = {
  description: {
    raw: RichTextContent;
  };
  title: string;
};
