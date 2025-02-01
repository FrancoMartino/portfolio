import { IconType } from "react-icons";
import { TECHS } from "../../../config/constants";
import Tag from "../../common/Tag";
import Card from "../../common/Card";
import React from "react";
import { SiGithub } from "react-icons/si";
import { BiSolidLock } from "react-icons/bi";

interface Interface {
  title: string;
  description: string;
  link?: string;
  image: string;
  openSource?: boolean;
  techs: string[];
  year: number;
}

export default function Project(attributes: Interface) {
  return (
    <Card className="!p-0">
      <a
        href={attributes.link}
        target={attributes.link !== "/" ? "_blank" : "_self"}
        className="flex flex-col gap-4 w-full p-4"
      >
        <div className="flex flex-col md:flex-row-reverse gap-4 w-full">
          <img
            className="aspect-[3/2] rounded-xl object-cover w-full md:w-1/3"
            src={attributes.image}
            alt={attributes.title}
          />
          <p className="text-gray-300 w-full flex flex-col gap-4 md:w-3/4">
            <span className="text-lg font-semibold text-gray-400 flex gap-2 items-center group">
              {attributes.openSource ? (
                <SiGithub className="text-white" size={18} />
              ) : (
                <BiSolidLock className="text-white" size={18} />
              )}
              <span
                className={
                  "text-white whitespace-nowrap " +
                  (attributes.link && "group-hover:underline")
                }
              >
                {attributes.title}
              </span>
              •
              <span className="text-gray-400 font-medium text-md">
                {attributes.year}
              </span>
            </span>
            {attributes.description}
            <div className="flex flex-wrap gap-4 h-full items-end">
              {attributes.techs.map((name, index) => {
                const tech = TECHS.find((tech) => tech.name === name);
                return (
                  tech && (
                    <Tag
                      key={index}
                      className="!p-0 !bg-transparent"
                      title={tech.title}
                      icon={tech.icon}
                    />
                  )
                );
              })}
            </div>
          </p>
        </div>
      </a>
    </Card>
  );
}
