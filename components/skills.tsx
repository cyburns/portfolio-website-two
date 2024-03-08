"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

let randomNeg = Math.floor(Math.random() * (-100 - -200 + 1)) - 200;
let randomPos = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
let randomNumber = 150;
randomNumber = randomNumber > 0 ? randomPos : randomNeg

const fadeInAnimationVariants = {
  initial: (index: number) => ({
    opacity: 0,
    y: 300,
    x: randomNumber > 0 ? randomPos : randomNeg,
  }),
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};


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
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 shadow-lg"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
