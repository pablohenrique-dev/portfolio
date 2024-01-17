import { fetchHygraphQuery } from "@/utils/fetchHygraphQuery";
import { About } from "./components/About/About";
import { CertificatesSection } from "./components/Certificate/CertificatesSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/Project/ProjectsSection";
import { HomePageData } from "@/@types/pageInfo";

async function getPageData(): Promise<HomePageData> {
  const query = `
    query MyQuery {
      page(where: {slug: "home"}) {
        introduction
        title
        profilePicture {
          url
        }
        highlightProjects {
          githubUrl
          liveProjectUrl
          description {
            raw
          }
          slug
          technologies {
            name
          }
          thumbnail {
            url
          }
          title
          pageThumbnail {
            url
          }
        }
        highlightCertificates {
          title
          iconSvg
          certificateUrl
          cardColor {
            rgba {
              r
              g
              b
            }
          }
        }
        about {
          description {
            raw
          }
          title
        }
      }
    }
  `;

  return fetchHygraphQuery(query);
}

export default async function Home() {
  const { page: pageInfos } = await getPageData();

  return (
    <>
      <HeroSection homeInfos={pageInfos} />
      <ProjectsSection projects={pageInfos.highlightProjects} />
      <CertificatesSection certificates={pageInfos.highlightCertificates} />
      <About about={pageInfos.about} />
    </>
  );
}
