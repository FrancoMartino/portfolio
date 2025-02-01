import Contact from "../../common/Contact";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BiSolidEnvelope } from "react-icons/bi";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div
      id="footer"
      className="flex w-full md:flex-row flex-col-reverse items-center text-gray-400 justify-center gap-4 p-8 pt-16"
    >
      <span className="text-sm">Franco Martino - {year}</span>
      <div className="flex gap-4 items-center">
        <Contact icon={SiGithub} href="https://github.com/FrancoMartino/" />
        <Contact
          icon={SiLinkedin}
          href="https://www.linkedin.com/in/francomartino/"
        />
        <Contact
          size={28}
          icon={BiSolidEnvelope}
          href="mailto:info@martinofranco.com"
        />
      </div>
    </div>
  );
}
