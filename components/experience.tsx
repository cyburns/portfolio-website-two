"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-7 h-[58rem] bg-white dark:bg-black bg-opacity-40  p-7 rounded-2xl shadow-xl max-w-[40rem]  sm:mb-10"
    >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="" layout={"1-column-left"}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "#252526",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-center mb-5 text-3xl">
                {item.employer}
              </h3>
              <p className="font-semibold !mt-0 text-3xl mb-10">{item.title}</p>
              <p className="!font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              <div className="mt-5">
                {item.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="!font-normal text-gray-700 dark:text-white/75 my-2"
                  >
                    {bullet}
                  </li>
                ))}
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
