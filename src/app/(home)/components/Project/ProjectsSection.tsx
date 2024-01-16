import { Project } from "@/@types/projects";
import { ProjectItem } from "./ProjectItem";

type ProjectsSectionProps = {
  projects: Project[];
};

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="projetos" className="w-full bg-gray-100">
      <div className="container grid h-full grid-cols-1 py-16 md:gap-10 md:py-28 lg:grid-cols-[256px_auto] lg:gap-16">
        <h2 className="top-20 h-fit w-fit text-4xl font-semibold text-black md:text-5xl lg:sticky">
          Projetos
        </h2>
        <aside>
          <ul>
            {projects.map((project) => {
              return <ProjectItem key={project.slug} {...project} />;
            })}
          </ul>
        </aside>
      </div>
    </section>
  );
};
