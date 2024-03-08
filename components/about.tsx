"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[40rem] sm:mb-0 scroll-mt-[100rem] bg-white p-8 sm:p-14 rounded-xl bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 h-[30rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a seasoned full-stack software engineer, I've honed my skills across
        a plethora of technologies and frameworks, adept at seamlessly
        navigating the complexities of both front-end interfaces and back-end
        systems. My journey in the industry has been defined by my passion for
        innovation and problem-solving, constantly driven by the thrill of
        building and tinkering with code. From architecting scalable solutions
        to crafting elegant user experiences, I thrive on the creative process
        of transforming ideas into impactful, functional products. Beyond the
        confines of the digital realm, I prioritize maintaining a healthy
        work-life balance through regular and heavy.
      </p>
    </motion.section>
  );
}
