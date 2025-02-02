import React from "react";
import Contact from "../../common/Contact";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BiSolidEnvelope } from "react-icons/bi";

interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="flex flex-row gap-2 text-gray-300 hover:text-white hover:underline"
  >
    {children}
  </a>
);

const Navbar: React.FC = () => (
  <div className="gap-4 lg:flex lg:absolute h-min inset-0 p-8 hidden text-gray-300 justify-end">
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
);

export default Navbar;
