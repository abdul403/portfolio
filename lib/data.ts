import React from "react";

import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    name: "Projects",
    hash: "#projects",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "nullClass",
    location: "Mumbai, India",
    description:
      "I graduated after completing training part. I immediately found a internship for web developer at nullClass.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Scrimba",
    location: "Norway, Europe.(remote)",
    description:
      "I have completed 6 months react web developer position at scrimba. Build Real-Time web application",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "coursesio",
    description:
      "-Online Learning Platform for Web, App, and Machine Learning Courses",
    tags: ["React", "ReduxToolkit", "MongoDB", "Chakraui", "Express"],
    imageUrl: corpcommentImg,
    github: "https://github.com/abdul403/courseBundler",
  },
  {
    title: "babyBot",
    description:
      "Next-Gen AI SaaS Plaƞorm with Advanced AI Tools, It has features like Text, Video, Audio and Image Generation",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Zustand",
      "planetscale",
    ],
    imageUrl: rmtdevImg,
    github: "https://github.com/abdul403/botAI",
  },
  {
    title: "LMS",
    description:
      "LMS platform which provides trending courses to access free of cost with best quality content for curious learners",
    tags: ["React", "Next.js", "SQL", "Tailwind", "prisma", "Typescript"],
    imageUrl: wordanalyticsImg,
    github: "",
  },
  {
    title: "Scooby",
    description:
      "Scooby is a platform which provides messaging, audio, video calls features to make work eassier with colleagues",
    tags: [
      "React",
      "Next.js",
      "SQL",
      "Tailwind",
      "prisma",
      "Typescript",
      "Socket.io",
    ],
    imageUrl: wordanalyticsImg,
    github: "https://github.com/abdul403/team-message",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
] as const;
