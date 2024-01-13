import { ProjectItem } from "./ProjectItem";

const listProjects = [
  {
    id: 1,
    slug: "sumup",
    title: "SumUp redesign",
    deployUrl: "https://pablohenrique-dev.github.io/sumup-redesign/",
    repositoryUrl: "https://github.com/pablohenrique-dev/sumup-redesign",
    technologies: ["HTML", "CSS", "JavaScript"],
    projectThumb: "/assets/sumup-thumb-webp.webp",
  },
  {
    id: 2,
    slug: "fintech",
    title: "Fintech dashboard",
    deployUrl: "https://fintech-ochre.vercel.app/",
    repositoryUrl: "https://github.com/pablohenrique-dev/fintech",
    technologies: ["React", "TypeScript", "Styled Components"],
    projectThumb: "/assets/sumup-thumb-webp.webp",
  },
  {
    id: 3,
    slug: "fastmemo",
    title: "Fastmemo",
    deployUrl: "/assets/sumup-thumb-webp.webp",
    repositoryUrl: "https://github.com/pablohenrique-dev/fastmemo",
    technologies: ["React", "TypeScript", "Tailwind"],
    projectThumb: "/assets/sumup-thumb-webp.webp",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projetos" className="w-full bg-gray-100">
      <div className="container grid h-full grid-cols-1 py-16 md:gap-10 md:py-28 lg:grid-cols-[256px_auto] lg:gap-16">
        <h2 className="top-20 h-fit w-fit text-4xl font-semibold text-black md:text-5xl lg:sticky">
          Projetos
        </h2>
        <aside>
          <ul>
            {listProjects.map((project) => {
              return <ProjectItem key={project.id} {...project} />;
            })}
          </ul>
        </aside>
      </div>
    </section>
  );
};
