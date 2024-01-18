import { ProjectPageData, ProjectsPageStaticData } from "@/@types/pageInfo";
import { Image } from "@/components/Image";
import { RichText } from "@/components/RichText/Index";
import { TechBadge } from "@/components/TechBadge";
import { fetchHygraphQuery } from "@/utils/fetchHygraphQuery";
import { Metadata } from "next";
import Link from "next/link";

type ProjectProps = {
  params: {
    slug: string;
  };
};

async function getProjectData(slug: string): Promise<ProjectPageData> {
  const query = `
    query ProjectQuery {
      project(where: {slug: "${slug}"}) {
        slug
        title
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        technologies {
          name
        }
        description {
          raw
          text
        }
        githubUrl
        liveProjectUrl
        conclusionDate
      }
    }
  `;

  return fetchHygraphQuery(query, 60 * 60 * 24);
}

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectData(slug);

  return (
    <main className="min-h-screen">
      <div className="bg-black bg-[url('/assets/bg-home.jpg')] bg-cover bg-no-repeat">
        <div className="container flex flex-col items-start border-gray-600 py-16 sm:flex-row sm:justify-between md:py-20">
          <h1
            style={{ lineHeight: "130%" }}
            className="order-2 text-[40px] font-bold text-white sm:order-1 sm:w-[700px] sm:text-5xl md:text-[5rem]"
          >
            {project.title}
          </h1>

          <div className="order-1 mb-8 sm:order-2 sm:mb-0">
            <h4 className="mb-3 text-base font-thin uppercase tracking-[.25em] text-gray-100">
              DATA
            </h4>
            <p className="text-xl text-white opacity-75">
              {project.conclusionDate}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={project.pageThumbnail.url}
          alt={`Imagem do projeto ${project.title}`}
          className="h-[300px] w-full md:h-[560px]"
        />
      </div>
      <div className="container grid grid-cols-1 gap-10 py-16 md:grid-cols-[430px_auto] md:py-20 lg:gap-20">
        <aside className="top-20 h-fit md:sticky">
          <h3 className="order-2 mb-6 text-2xl font-semibold opacity-75">
            Tecnologias utilizadas
          </h3>
          {!!project.technologies.length &&
            project.technologies.map((technology) => {
              return (
                <TechBadge key={technology.name}>{technology.name}</TechBadge>
              );
            })}

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-8">
            {project.githubUrl && (
              <Link
                className="flex w-fit items-center gap-4 bg-primary px-8 py-3 text-base font-semibold text-white transition hover:bg-[#1540CB]"
                target="_blank"
                href={project.githubUrl}
              >
                <Image
                  src="/assets/icon-github.svg"
                  alt="Ícone do github"
                  className="h-5 w-4"
                />
                Repósitório
              </Link>
            )}
            {project.liveProjectUrl && (
              <Link
                className="flex w-fit items-center gap-4 border border-white border-b-gray-600 px-8 py-3 text-base font-semibold text-gray-600 transition hover:border-black "
                target="_blank"
                href={project.liveProjectUrl}
              >
                <Image
                  src="/assets/icon-globe.svg"
                  alt="Ícone web"
                  className="mt-[-2px] h-5 w-5"
                />
                Projeto no ar
              </Link>
            )}
          </div>
        </aside>
        <article>
          <RichText content={project.description.raw} />
        </article>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery {
      projects(first: 100) {
        slug
      }
    }
  `;

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query);

  return projects;
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const { project } = await getProjectData(slug);

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
