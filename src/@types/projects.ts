import type { RichTextContent } from "@graphcms/rich-text-types";

export type ProjectSection = {
  title: string;
  image: {
    url: string;
  };
};

type Technology = {
  name: string;
};

export type Project = {
  title: string;
  slug: string;
  conclusionDate: string;
  thumbnail: {
    url: string;
  };
  technologies: Technology[];
  description: {
    raw: RichTextContent;
    text: string;
  };
  pageThumbnail: {
    url: string;
  };
  sections: ProjectSection[];
  liveProjectUrl?: string;
  githubUrl?: string;
};
