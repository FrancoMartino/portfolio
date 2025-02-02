import Section from "../Section/Section";
import Project from "./Certification";
import { EDUCATIONS, COURSES } from "../../../config/constants";
import Certification from "./Certification";

export default function Education() {
  return (
    <Section id="projects" className="w-full">
      <h3 className="text-xl font-bold text-center font-header text-gray-400 mb-4">
        Educación
      </h3>
      <div className="flex flex-col gap-4 pb-8">
        {EDUCATIONS.map((ed, index) => (
          <Certification
            title={ed.title}
            institution={ed.institution}
            startYear={ed.startYear}
            endYear={ed.endYear}
          />
        ))}
      </div>

      <h3 className="text-xl font-bold text-center font-header text-gray-400 mb-4">
        Cursos y certificaciones
      </h3>
      <div className="flex flex-col gap-4">
        {COURSES.map((ed, index) => (
          <Certification
            key={index}
            title={ed.title}
            institution={ed.institution}
            startYear={ed.startYear}
            endYear={0}
          />
        ))}
      </div>
    </Section>
  );
}
