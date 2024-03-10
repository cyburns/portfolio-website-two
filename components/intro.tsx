"use client";

import Image from "next/image";
import React, { useState } from "react";
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
import memojiIcon from "@/public/apple-port-memoji.png";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./contact";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isContactWindowOpen, setContactWindow] = useState(false);

  return (
    <>
      <section
        ref={ref}
        id="home"
        className="max-w-[40rem] scroll-mt-[100rem] bg-white p-8 sm:p-9 rounded-xl bg-opacity-30 shadow-xl shadow-black/[0.03] backdrop-blur-[0.5rem]  dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75  sm:mr-10 mr-0 min-w-full sm:min-w-fit mb-10 lg:mb-0 h-[38rem]"
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
                src={memojiIcon}
                alt="Portrait"
                width="292"
                height="292"
                quality="95"
                priority={true}
                className="flex items-center justify-center sm:h-48 sm:w-48 h-[8rem] w-[8rem] rounded-full object-cover bg-white dark:bg-[#333333] bg-opacity-40 shadow-xl pt-4 z-30"
              />
            </motion.div>
          </div>
        </div>

        <motion.h1
          className=" px-4 font-medium !leading-[1.5} mb-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="sm:text-4xl text-4xl text-center font-semibold  flex items-center justify-center ">
            Cyrus Burns
          </span>

          <span className="sm:text-lg text-lg bg-opacity-40  p-2 rounded-lg text-center font-extralight flex items-center  justify-center mb-5">
            Software Engineer
          </span>

          <span className="sm:text-3xl text-3xl text-center font-semibold flex items-center  justify-center">
            <a href="https://www.linkedin.com/in/cyburns/">
              <LinkedIn className="text-6xl bg-opacity-40  p-2 rounded-full hover:bg-opacity-0 transition hover:scale-110" />
            </a>
            <div className="flex h-12 w-[.1rem] bg-black dark:bg-white rounded-xl mx-3" />
            <Divider />
            <a href="https://github.com/cyburns">
              <GitHub className="text-6xl p-2  hover:bg-opacity-0 transition hover:scale-110" />
            </a>
          </span>
        </motion.h1>

        <motion.div
          className="flex flex-col items-center justify-center gap-2 px-4 text-2xl font-medium -mt-2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <button
            className="group  text-black dark:text-white px-7 py-3 flex text-center justify-center items-center gap-2  outline-none  hover:bg-opacity-0 dark:hover:bg-opacity-0  active:scale-105 transition p-2 hover:underline -mb-4"
            onClick={() => setContactWindow(!isContactWindowOpen)}
          >
            Contact
            <ArrowForwardIos
              sx={{ fontSize: "1.5rem" }}
              className="opacity-70 "
            />
          </button>

          <a
            className="group  text-black dark:text-white px-7 py-3 flex text-center justify-center items-center gap-2  outline-none  hover:bg-opacity-0 dark:hover:bg-opacity-0  active:scale-105 transition p-2 hover:underline"
            href="/CB_CV.pdf"
            download
          >
            Resume
            <FileDownload sx={{ fontSize: "1.7rem" }} className="opacity-70 " />
          </a>
        </motion.div>
      </section>

      <div className="">
        <AnimatePresence initial={false} mode="wait">
          {isContactWindowOpen ? (
            <motion.header
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.35,
              }}
              viewport={{
                once: true,
              }}
              exit={{
                opacity: 0,
              }}
              className="active-message  w-full"
              onClick={() => setContactWindow(!isContactWindowOpen)}
            >
              <div className="flex justify-center items-center">
                <Contact
                  isContactWindowOpen={isContactWindowOpen}
                  setContactWindow={setContactWindow}
                />
              </div>
            </motion.header>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}
