"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className=" max-w-[23rem] h-full scroll-mt-28 text-center sm:mb-10 bg-white dark:bg-black bg-opacity-40  p-7 rounded-2xl shadow-xl ml-0 sm:ml-10 sm:mt-0 mt-10"
    >
      <SectionHeading>Technical Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-md text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            className="bg-[] borderBlack rounded-xl px-5 py-3 dark:bg-[#252526] dark:text-white/80 shadow-lg transition hover:scale-105"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
