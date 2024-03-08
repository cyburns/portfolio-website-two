"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import {
  GitHub,
  LinkedIn,
  ArrowForwardIos,
  FileDownload,
} from "@mui/icons-material";
import { Divider } from "@mui/material";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[40rem] scroll-mt-[100rem] bg-white p-8 sm:p-14 rounded-xl bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75   h-[30rem] sm:mr-10 mr-0 min-w-full sm:min-w-fit mb-10 lg:mb-0"
    >
      <div className="mb-7">
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/../public/pfp.png"
              alt="Portrait"
              width="292"
              height="292"
              quality="95"
              priority={true}
              className="sm:h-48 sm:w-48 h-[8rem] w-[8rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl "
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className=" px-4 font-medium !leading-[1.5} mb-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="sm:text-2xl text-3xl text-center font-semibold  flex items-center  justify-center mb-5">
          Cyrus Burns
        </span>

        <span className="sm:text-2xl text-3xl text-center font-semibold flex items-center  justify-center">
          <LinkedIn className="text-3xl" />
          <div className="flex h-10 w-[.1rem] bg-black dark:bg-white rounded-xl mx-5" />
          <Divider />
          <GitHub className="text-3xl" />
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group  text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact
          <ArrowForwardIos className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group  px-7 py-3 flex items-center gap-2 rounded-full outline-none active:scale-105 transition cursor-pointer  "
          href="/CV.pdf"
          download
        >
          <FileDownload className="opacity-60 " />
          Resume
        </a>
      </motion.div>
    </section>
  );
}
