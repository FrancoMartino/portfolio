import { SOFT_SKILLS, TECHS } from "../../config/constants";
import Tag from "./Tag";

interface Interface {
  amount?: number;
  className?: string;
  techs?: boolean;
  soft?: boolean;
  top?: boolean;
}

export default function Skills(attributes: Interface) {
  let a;

  if (attributes.techs && attributes.soft) {
    a = [...TECHS, ...SOFT_SKILLS]; // Merge si ambas son true
  } else if (!attributes.techs && !attributes.soft) {
    a = [...TECHS, ...SOFT_SKILLS]; // Merge si ambas son false
  } else if (attributes.techs) {
    a = TECHS;
  } else {
    a = SOFT_SKILLS;
  }

  // Filtrar los skills si top es verdadero
  const filteredSkills = attributes.top
  ? a.filter((skill) => 'top' in skill) // Asegúrate de que 'top' esté definido
  : a;

  const limitedSkills = attributes.amount
    ? filteredSkills.slice(0, attributes.amount)
    : filteredSkills;

  // Ordenar los skills alfabéticamente por el título
  const sortedSkills = limitedSkills.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div
      className={"flex flex-wrap gap-2 justify-center " + attributes.className}
    >
      {sortedSkills.map((skill, index) => (
        <Tag
          key={index}
          title={skill.title}
          icon={skill.icon}
          link={skill.link}
        />
      ))}
    </div>
  );
}
