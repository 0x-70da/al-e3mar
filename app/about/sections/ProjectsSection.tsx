import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  image: string;
  title: string;
  category: string;
  text: string;
};

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-36">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            Selected work
          </p>
          <h2 className="font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
            Built to be remembered.
          </h2>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]"
        >
          View all projects{" "}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={index === 1 ? "lg:mt-14" : ""}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              {project.category}
            </p>
            <h3 className="mt-2 font-heading text-2xl">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {project.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
