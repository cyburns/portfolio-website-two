"use client";

import Image from "next/image";
import { Tabs } from "./ui/Tabs";
import SectionHeading from "./section-heading";
import React, { useEffect } from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

const project1 = projectsData[0];
const project2 = projectsData[1];
const project3 = projectsData[2];

export default function Products() {
  const tabs = [
    {
      title: "CodeShare",
      value: "product1",
      content: (
        <div>
          {project1.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      ),
    },
    {
      title: "SmartCar",
      value: "product2",
      content: (
        <div>
          {project2.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      ),
    },
    {
      title: "TechRecruiter",
      value: "product3",
      content: (
        <div>
          {project3.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div id="projects" className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto w-full bg-white dark:bg-black bg-opacity-40  rounded-2xl shadow-xl max-w-[60rem] min-h-[35rem] mt-10 sm:mt-0 p-7">
      <h2 className="flex items-center justify-center text-center text-4xl font-medium capitalize mb-8">
        Open Source
      </h2>
      <Tabs tabs={tabs} />
    </div>
  );
}
