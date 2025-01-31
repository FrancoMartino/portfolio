import Section from "../Section/Section";
import Project from "./Certification";
import { EDUCATION } from "../../../config/constants";
import Certification from "./Certification";

export default function Education() {
  return (
    <Section id="projects" className="w-full">
      <h3 className="text-xl font-bold text-center font-header text-gray-400 mb-4">
        Educación
      </h3>
      <div className="flex flex-col gap-4">
        {EDUCATION.map((ed, index) => (
          <Certification
            title={ed.title}
            institution={ed.institution}
            startYear={ed.startYear}
            endYear={ed.endYear}
          />
        ))}
      </div>
    </Section>
  );
}
