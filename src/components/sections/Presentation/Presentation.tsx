import { BiSolidDownArrowAlt, BiDownload } from "react-icons/bi";
import TypewritterHeader from "./TypewritterHeader";
import Button from "../../common/Button";
import Skills from "../../common/Skills";
import Navbar from "./Navbar";

export default function Presentation() {
  return (
    <div className="min-h-lvh flex flex-col justify-center w-full">
      <Navbar />
      <TypewritterHeader />
      <h3 className="text-3xl font-bold font-header text-gray-400 select-none">
        Soluciono problemas, desarrollando soluciones.
      </h3>
      <div className="flex gap-4 sm:flex-row flex-col mt-4">
        <Button
          label="Descargar CV"
          icon={BiDownload}
          onClick={() => {
            alert("a");
          }}
        />
        <a href="#contact">
          <Button label="Quiero contactarme" secondary />
        </a>
        <span className="gap-2 items-center md:flex hidden">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300/50 blur-xs"></span>
            <span className="size-3 rounded-full bg-green-300"></span>
          </span>
          En linea
        </span>
      </div>
      <Skills className="mt-4 md:flex hidden !justify-start" techs top />
      <div className="flex flex-row justify-center p-8 justify-center items-center w-full md:relative absolute bottom-0 left-1/2 transform -translate-x-1/2 select-none">
        <a
          href="#about"
          className="flex flex-row gap-2 text-gray-300 hover:text-white"
        >
          Ver mas
          <BiSolidDownArrowAlt size={24} />
        </a>
      </div>
    </div>
  );
}
