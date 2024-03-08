import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    employer: "Cochair",
    title: "Founding Engineer",
    description:
      "Co-founded an innovative app facilitating seamless dinner reservation transactions, empowering users to effortlessly buy, sell, and bid on reservations while connecting with friends in real-time.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
  {
    employer: "ReacType",
    title: "Full-Stack Software Engineer",
    description:
      "Crafted a cutting-edge React prototyping tool designed to accelerate software development, empowering users to build efficient solutions with unparalleled speed and ease.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  [
    {
      title: "Codeshare",
      description:
        "I worked as a full-stack SWE on this open source porduct which allows users to share code snippets and connect around tech interests.",
      tags: ["React", "Node.js", "Express.js", "MUI", "MongoDB", "Redux"],
      imageUrl: corpcommentImg,
    },
  ],
  [
    {
      title: "SmartCar",
      description:
        "I developed an AI-powered car using vanilla JavaScript, leveraging OOP and machine learning to enable autonomous navigation around traffic through a neural network of sensors.",
      tags: ["JavaScript", "HTML5", "CSS", "OOP", "ML", "AI", "NN"],
      imageUrl: rmtdevImg,
    },
  ],
  [
    {
      title: "Jsearch",
      description:
        "My team and I developed a web app to streamline tech job searches. The platform simplifies the process, offering advanced search features and real-time updates.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: wordanalyticsImg,
    },
  ],
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "Next.js",
  "Node",
  "Express",
  "Redux",
  "Redux Toolkit",
  "MUI",
  "Tailwind.css",
  "Framer-Motion",
  "HTML",
  "CSS",
  "WebSocket",
  "Socket.io",
  "MongoDB",
  "Mongoose",
  "MySQL",
  "Postgres",
  "Docker",
  "Kubernetes",
  "AWS",
  "Git",
  "Webpack",
  "Vite",
  "Three.js",
  "Shadcd/ui",
  "Aceturnity",
  "ChatGPT",
  "AutoCAD",
  "PhotoShop",
  "Figma",
] as const;
