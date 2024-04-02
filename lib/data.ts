import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import codesharePic from "@/public/Codeshare-port-pic.png";
import smartCar from "@/public/ai-car-port-bg.png";
import techRecruiter from "@/public/techRecruiter-port-bg.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const experiencesData = [
  {
    employer: "ReacType",
    title: "Full-Stack Software Engineer",
    description:
      "A cutting-edge React prototyping tool designed to accelerate software development, empowering users to build efficient solutions with unparalleled speed.",
    bullets: [
      "Developed a full-stack application using React, Redux, Node.js, Express.js, and MongoDB hosted with AWS.",
      "Implemented a real-time collaboration feature using Socket.io.",
      "Designed a custom WYSIWYG editor.",
      "Achieved a 30x improvement in bundle time by strategically restructuring file architecture, continuously updating configuration files, optimizing dependencies, and successfully migrating ReacType’s immense codebase from Webpack to Vite.",
      "Engineered a scalable video meeting interface by integrating VideoSDK throughout Node.js and Express, optimizing middleware utilization.",
    ],
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  [
    {
      title: "Codeshare",
      description:
        "Web app which allows users to share code snippets and connect around tech backgrounds and interests.",
      tags: ["React", "Node.js", "Express.js", "MUI", "MongoDB", "Redux"],
      imageUrl: codesharePic,
    },
  ],
  [
    {
      title: "SmartCar",
      description:
        "I developed an AI car using vanilla JavaScript, leveraging OOP and machine learning to enable autonomous navigation through a neural network of sensors.",
      tags: ["JavaScript", "HTML5", "CSS", "OOP", "ML", "AI", "NN"],
      imageUrl: smartCar,
    },
  ],
  [
    {
      title: "TechRecruiter",
      description:
        "I developed a web app to streamline tech job searches. The platform simplifies the process, offering advanced search features and real-time updates.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: techRecruiter,
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
  "React Native",
  "Tailwind.css",
  "Framer-Motion",
  "HTML",
  "CSS",
  "Expo Router",
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
  "AutoCAD",
  "PhotoShop",
  "Figma",
] as const;
