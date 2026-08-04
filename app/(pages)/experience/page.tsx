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
      "This is my current job, where I built my first ever custom video player in a web application",
    description: [
      "Built a performant web application for CMS Infosystem’s AI-based Intrusion Detection products, with load times under 2 seconds and a CLS of 0.01.",
      "Created a custom video player from scratch and optimized streaming features by reworking web socket utilization, which reduced video load time by 90%.",
      "Launched 10+ new features and resolved 105+ bugs, improving stability and load performance by 30%.",
      "Resolved performance bottlenecks using Chrome DevTools, bringing the Lighthouse score to 95.",
      "Transformed 35+ Figma designs into responsive front-end features.",
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
      "This role helped me transition into a more product-focused web development environment, building responsive interfaces and improving maintainability.",
    description: [
      "Migrated a legacy static HTML website into a responsive web application for HDFC Bank, improving maintainability and user experience across devices.",
      "Modularized the code base, reducing UI inconsistencies and cutting feature development time by over 35%.",
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
      "Integrated the open sourced ReactPlanner into the HVAC System Designer project for PE Load Calcs.",
      "Implemented custom light and dark themes with automatic user-preferred theming using localStorage.",
      "Modularized the code base, reducing UI inconsistencies and cutting feature development time by over 35%.",
      "Built a bridge visualization tool for Autodesk Toronto, including the REST APIs.",
    ],
  },
];
