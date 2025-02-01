import Section from "../Section/Section";

import Skills from "../../common/Skills";
import { calculateYearsPassed } from "../../utils/date";

export default function About() {
  return (
    <Section id="about" className="pt-16">
      <div className="flex md:flex-row flex-col gap-x-8 gap-y-4 items-center">
        <div className="flex flex-col items-center text-center gap-2">
          <img
            src="img/profile.png"
            alt="Franco Martino"
            className="relative rounded-full sm:min-w-48 max-w-64"
          />
        </div>
        <span className="text-gray-300 md:text-left text-center">
          <h3 className="lg:text-4xl text-3xl font-bold font-header text-gray-400">
            Franco Martino
          </h3>
          <h3 className="text-2xl">Desarrollador de software</h3>
          <p className="text-lg">
            Soy Argentino, tengo {calculateYearsPassed("2006-11-04")} años, y una gran pasión por el desarrollo.
          </p>
          <Skills soft className="mt-4 md:!justify-start justify-center" />
        </span>
      </div>
    </Section>
  );
}
