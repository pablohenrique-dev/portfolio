import { TechBadge } from "@/components/TechBadge";
import { Image } from "@/components/Image";
import Link from "next/link";

type ProjectItemProps = {
  title: string;
  slug: string;
  deployUrl: string;
  repositoryUrl: string;
  projectThumb: string;
  technologies: string[];
};

export const ProjectItem = ({
  title,
  slug,
  projectThumb,
  technologies,
}: ProjectItemProps) => {
  return (
    <li className="group grid grid-cols-1 overflow-hidden border-b border-gray-200 md:grid-cols-[auto_342px]">
      <div className="pb-8 pt-10 md:py-12">
        <h3 className="mb-2 text-[1.5rem] font-semibold text-black lg:text-[2rem]">
          {title}
        </h3>
        {technologies.map((technology) => {
          return <TechBadge key={technology}>{technology}</TechBadge>;
        })}
        <Link
          href={`/projetos/${slug}`}
          className="mt-2 block text-lg font-medium text-black opacity-80"
        >
          Mais detalhes
        </Link>
      </div>
      <Image
        src={projectThumb}
        alt={`Imagem do projeto ${title}`}
        className="w-full transition-all md:translate-x-[342px] md:group-hover:translate-x-[1px]"
        priority
      />
    </li>
  );
};
