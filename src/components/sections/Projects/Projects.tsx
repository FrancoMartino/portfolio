import Section from "../Section/Section";
import Project from "./Project";
import { PROJECTS } from "../../../config/constants";

export default function Projects() {
  return (
    <Section id="projects" className="w-full">
      <h3 className="text-xl font-bold text-center font-header text-gray-400 mb-4">
        Proyectos
      </h3>
      <div className="flex flex-col gap-4">
        {PROJECTS.map((project, index) => (
          <Project
            openSource={project.openSource}
            title={project.title}
            year={project.year}
            techs={project.techs}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </Section>
  );
}
