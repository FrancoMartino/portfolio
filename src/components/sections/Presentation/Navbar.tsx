import React from "react";
import Contact from "../../common/SocialMedia";


const Navbar: React.FC = () => (
  <div className="lg:flex lg:absolute h-min inset-0 p-8 hidden text-gray-300 justify-end z-10">
    <Contact />
  </div>
);

export default Navbar;
