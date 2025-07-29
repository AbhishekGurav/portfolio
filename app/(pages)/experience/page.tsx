"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const descriptionVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const toggleExpanded = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-sm:w-full w-2/3 min-w-32 p-1 max-sm:pt-2 subpixel-antialiased items-end flex flex-col overflow-y-auto overflow-x-hidden scroll-bar-thin"
    >
      {expData.map((job, key) => {
        const isExpanded = expandedJob === key;

        return (
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            key={key}
            className="max-sm:w-full max-sm:m-0 max-sm:mb-1 mb-8 w-2/3 p-4 m-6 border-2 rounded-lg shadow-xl bg-background cursor-pointer"
            onClick={() => toggleExpanded(key)}
          >
            <p className="text-2xl uppercase max-sm:text-lg">{job.title}</p>
            <Link
              href={job.link}
              target="_blank"
              rel="noopener"
              className="no-underline"
            >
            <span className="font-bold">{job.org}</span>
            </Link>
            <div
              className="text-sm flex flex-row justify-between items-center mt-0.5 mb-0.5 
            max-sm:flex-col max-sm:items-start max-sm:gap-1"
            >
              <p className="bg-muted-foreground text-background rounded-xs px-1 py-0.2">
                {job.startDate} - {job.endDate}
              </p>
              <span className="bg-muted-foreground text-background rounded-xs px-1 py-0.2">
                {job.type}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <p className="mb-1 italic max-sm:text-sm text-muted-foreground ">
                {job.summary}
              </p>
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.ul
                  variants={descriptionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="list-disc pl-5 text-sm overflow-hidden"
                >
                  {job.description.map((desc, index) => (
                    <motion.li key={index} variants={listItemVariants}>
                      {desc}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence> 
            
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Experience;

const expData = [
  {
    title: "Full Stack Developer",
    org: "Oneture Technologies",
    startDate: "July, 2024",
    endDate: "Present",
    link: "https://oneture.com/",
    type: "Full-time",
    summary:
      "This is my current job, where I was quick to adapt in Angular and delivered results in both Angular and React.",
    description: [
      "Developed the Link Device and HawkAI projects using React and Angular",
      "Collaborated with designers, product managers, and back-end engineers to deliver new features and enhancements for the RMS Project.",
      "Built multiple interactive dashboards for CMS Infosystem’s Intrusion Detection products for 41 Banking and Corporate clients.",
      "Launched 20+ new features and resolved 90+ bugs, improving stability and load performance by 30%.",
      "Transformed 15+ Figma designs into responsive front-end code.",
      "Led the development of real-time video surveillance features across RMS Projects.",
      "Spearheaded the Link Device pilot for CMS Infosystems with a lean team, delivering a working POC within 3 weeks and setting the stage for production deployment.",
    ],
  },
  {
    title: "Associate",
    org: "Datamatics Staffing Services",
    startDate: "Jan, 2024",
    endDate: "Feb, 2024",
    link: "https://datamatics.com/",
    type: "Full-time Contract",
    summary:
      "This was my 2nd job where I was trying out something new, unfortunately my core values did not align much with the culture at the workplace and I had to end it in a short tenure.",
    description: [
      "Migrated a legacy static HTML website into a responsive web application using React, React Router, Tailwind CSS for HDFC Bank, improving maintainability and user experience across devices.",
    ],
  },
  {
    title: "Member of Technical Staff",
    org: "Center for Computational Technologies",
    startDate: "Nov, 2021",
    endDate: "Aug, 2023",
    link: "https://cctech.co.in/",
    type: "Full-time",
    summary:
      "My first job where I gained my first ever industrial experience working on production grade projects.",
    description: [
      "Developed the HVAC System Designer project for PE Load Calcs using React, ReactRedux, Immutable.",
      "Developed the GBD project for Autodesk Toronto using plain HTML, CSS, Express.js and d3.js.",
      "Refactored key React components to reduce rendering time by 30%, boosting overall app performance by 25%.",
      "Built a scalable design system with reusable components and utility-first Tailwind styles, reducing UI inconsistencies and cutting feature development time by over 30%.",
      "Achieved an 80% reduction in load times for the HVAC System Designer project at CCTech by implementing memoization in high-frequency components and eliminating unnecessary Redux re-renders.",
    ],
  },
];
