import React from "react";
import Contact from "../../common/SocialMedia";

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
  <div className="lg:flex lg:absolute h-min inset-0 p-8 hidden text-gray-300 justify-end">
    <Contact />
  </div>
);

export default Navbar;
