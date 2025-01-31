import Section from "../Section/Section";
import Skills from "../../common/Skills";

export default function AllSkills() {
  return (
    <Section id="skills" className="gap-8 w-full">
      <div>
        <h3 className="text-xl font-bold text-center font-header text-gray-400 mb-4">
          Tecnologías
        </h3>
        <Skills techs />
      </div>
    </Section>
  );
}
