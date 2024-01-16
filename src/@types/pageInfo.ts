import { Certificate } from "./certificate";
import { Project } from "./projects";

export type HomePageInfo = {
  introduction: string;
  title: string;
  profilePicture: {
    url: string;
  };
  highlightProjects: Project[]
  highlightCertificates: Certificate[]
};

export type HomePageData = {
  page: HomePageInfo;
};
