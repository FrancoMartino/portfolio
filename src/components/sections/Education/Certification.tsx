import Card from "../../common/Card";
import React from "react";

interface Interface {
  title: string;
  institution: string;
  startYear: number;
  endYear?: number;
}

export default function Certification(attributes: Interface) {
  return (
    <Card>
      <div className="w-full h-full">
        <span className="text-gray-400 flex flex-col gap-2">
          <span className="text-lg font-semibold text-white">
            {attributes.title}
          </span>
          <span>
            {attributes.institution}
            {" • "}
            {attributes.startYear}
            {attributes.endYear == null
              ? " - Presente"
              : attributes.endYear == 0
              ? ""
              : " - " + attributes.endYear}
          </span>
        </span>
      </div>
    </Card>
  );
}
