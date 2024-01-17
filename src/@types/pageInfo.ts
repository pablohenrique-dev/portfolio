import { About } from "./about";
import { Certificate } from "./certificate";
import { Project } from "./projects";

export type HomePageInfo = {
  introduction: string;
  title: string;
  profilePicture: {
    url: string;
  };
  highlightProjects: Project[];
  highlightCertificates: Certificate[];
  about: About;
};

export type ProjectPageData = {
  project: Project;
};

export type ProjectsPageStaticData = {
  projects: {
    slug: string;
  }[];
};

export type HomePageData = {
  page: HomePageInfo;
};
