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
      className="mb-10 max-w-[40rem] sm:mb-0 scroll-mt-[100rem] bg-white p-8 sm:p-14 rounded-xl bg-opacity-30 shadow-xl shadow-black/[0.03] backdrop-blur-[0.5rem]  dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 min-h-[38rem] "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className=" text-4xl font-medium capitalize mb-4 ">About me</h2>
      <p className="mb-3">
        As a seasoned full-stack software engineer, I've honed my skills across
        a plethora of technologies and frameworks, adept at seamlessly
        navigating the complexities of both front-end interfaces and back-end
        systems.
      </p>
      <p className="mb-3">
        My journey in the industry has been defined by my passion for innovation
        and problem-solving, constantly driven by the thrill of building and
        tinkering with code. Beyond the confines of the digital realm, I
        prioritize maintaining a healthy work-life balance through regular and
        heavy weight-lifting sessions.
      </p>

      <h2 className=" text-4xl font-medium capitalize mt-8 mb-4">
        What I'm doing
      </h2>
      <p className="mb-3">
        I'm currently immersed in developing a cutting-edge mobile application
        for a startup using React Native with Expo Router for the core of our
        front-end while using Express and Firebase for our back-end and hosted
        on AWS.
      </p>
    </motion.section>
  );
}
