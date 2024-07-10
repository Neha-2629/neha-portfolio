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
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
            I am a passionate software engineer with a Master’s degree in  <span className="font-medium">Management Information Systems from the University at Buffalo</span>. 
            Throughout my career at  <span className="font-medium">CitiusTech and Tata Consultancy Services,</span> I have had the opportunity to work on a variety of impactful projects, 
            focusing on  <span className="font-medium">full-stack web development</span>cloud architecture, and optimizing user experiences. My technical skills include proficiency in  
            <span className="font-medium">{" "}JavaScript, React, TypeScript, and cloud platforms such as AWS and Google Cloud.</span> I thrive in dynamic, fast-paced environments where innovation, collaboration, 
            and problem-solving are key.
        </p>

        <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing
           cooking, gym, watching movies, and playing with my dog. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am currently
            learning about{" "}
            <span className="font-medium">latest tech-trends in web and data analytics</span>. I'm also
            learning how to play the drums.
        </p>
    </motion.section>
  );
}
