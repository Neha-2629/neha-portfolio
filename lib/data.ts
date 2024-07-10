import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioImg from "@/public/portfolio-website.png";
import foodDeliveryImg from "@/public/Food-Ordering-App.png";
//import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated - Master Of Science ",
    location: "Buffalo, NY",
    description:
      "I am recently graduated from University at Buffalo, New York, SUNY in Management Information Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2023 - June 2024",
  },
  {
    title: "Senior Software Engineer, CitiusTech",
    location: "Pune, India",
    description:
      "Led the development of patient modules with advanced React techniques and micro frontend architecture, achieving significant performance and efficiency gains. Implemented CI/CD pipelines and Test Driven Development, resulting in improved deployment speed and 90% code coverage.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2021-June 2023 ",
  },
  {
    title: "System Engineer, Tata Consultancy Services",
    location: "Mumbai, India",
    description:
      "Designed, built, and deployed an Angular-based banking application for an Indian client with over 60 million users, increasing session duration by 10%. Led migration and enhancement of a US toy manufacturer's web application, boosting user engagement by 15%. Developed reusable UI components, optimized performance, ensured cross-browser compatibility, and mentored junior developers, achieving high-quality standards and on-schedule development..",
    icon: React.createElement(FaReact),
    date: "July 2017-September 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Food Ordering App - Gourmet Glide",
    website_link: "https://food-delivery-app-neha-2629s-projects.vercel.app/",
    description:
      "Food delivery app using React.js, Tailwind CSS, and Swiggy's API, offering real-time data, seamless user experience, responsive design, and deployed via Vercel.",
    tags: ["React", "Hooks", "HOC", "Tailwind", "Redux"],
    imageUrl: foodDeliveryImg,
  },
  {
    title: "Portfolio Website",
    description:
      "My portfolio website features Next.js 13, Tailwind CSS, Framer Motion animations, and a modern, responsive UI with light and dark modes.",
    tags: ["React", "TypeScript", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: portfolioImg,
  }
  
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;